# Configuración de Google Sheets para el Formulario de Contacto

## Paso 1: Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. En la primera fila, agrega estos encabezados:
   - `Timestamp` (columna A)
   - `Name` (columna B)
   - `Email` (columna C)
   - `Message` (columna D)

## Paso 2: Crear el Google Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Elimina el código que viene por defecto
3. Copia y pega este código:

```javascript
const SECRET_TOKEN = 'TU_TOKEN_SECRETO_AQUI_12345'; // CAMBIA ESTO POR UN TOKEN SEGURO
const RATE_LIMIT_SECONDS = 60; // Bloquear por 60 segundos entre envíos del mismo email

function doPost(e) {
  try {
    // Log para depuración
    Logger.log('Datos recibidos: ' + JSON.stringify(e.postData));
    
    const data = JSON.parse(e.postData.contents);
    
    // Validar token secreto
    if (data.token !== SECRET_TOKEN) {
      Logger.log('ERROR: Token no coincide - BLOQUEADO');
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('Token válido - PROCESANDO');
    
    // Validar campos requeridos
    if (!data.name || !data.email || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Missing required fields' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Invalid email' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // RATE LIMITING POR EMAIL
    const scriptProperties = PropertiesService.getScriptProperties();
    const emailKey = 'last_submission_' + data.email.toLowerCase();
    const lastSubmission = scriptProperties.getProperty(emailKey);
    const now = new Date().getTime();
    
    if (lastSubmission) {
      const timeDiff = (now - parseInt(lastSubmission)) / 1000; // diferencia en segundos
      
      if (timeDiff < RATE_LIMIT_SECONDS) {
        const remainingSeconds = Math.ceil(RATE_LIMIT_SECONDS - timeDiff);
        Logger.log('RATE LIMIT: Email ' + data.email + ' bloqueado. Tiempo restante: ' + remainingSeconds + ' segundos');
        
        return ContentService
          .createTextOutput(JSON.stringify({ 
            success: false, 
            error: 'Too many requests. Please wait ' + remainingSeconds + ' seconds before submitting again.' 
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // RATE LIMITING POR IP (opcional pero recomendado)
    if (data.clientIP && data.clientIP !== 'unknown') {
      const ipKey = 'last_submission_ip_' + data.clientIP;
      const lastSubmissionIP = scriptProperties.getProperty(ipKey);
      
      if (lastSubmissionIP) {
        const timeDiffIP = (now - parseInt(lastSubmissionIP)) / 1000;
        if (timeDiffIP < RATE_LIMIT_SECONDS) {
          const remainingSecondsIP = Math.ceil(RATE_LIMIT_SECONDS - timeDiffIP);
          Logger.log('RATE LIMIT: IP ' + data.clientIP + ' bloqueada. Tiempo restante: ' + remainingSecondsIP + ' segundos');
          
          return ContentService
            .createTextOutput(JSON.stringify({ 
              success: false, 
              error: 'Too many requests from this IP. Please wait ' + remainingSecondsIP + ' seconds before submitting again.' 
            }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
      scriptProperties.setProperty(ipKey, now.toString());
    }
    
    // Guardar timestamp de esta submission
    scriptProperties.setProperty(emailKey, now.toString());
    
    // Limpiar propiedades antiguas (opcional - para no llenar el storage)
    // Esto limpia submissions de hace más de 1 hora
    const oneHourAgo = now - (60 * 60 * 1000);
    const allProperties = scriptProperties.getProperties();
    for (const key in allProperties) {
      if (key.startsWith('last_submission_')) {
        const timestamp = parseInt(allProperties[key]);
        if (timestamp < oneHourAgo) {
          scriptProperties.deleteProperty(key);
        }
      }
    }
    
    // Obtener la hoja de cálculo activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Agregar una nueva fila con los datos
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.message || ''
    ]);
    
    Logger.log('Datos guardados exitosamente para: ' + data.email);
    
    // Retornar una respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('ERROR: ' + error.toString());
    // En caso de error, retornar el mensaje de error
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba (opcional)
function doGet(e) {
  return ContentService
    .createTextOutput("Google Apps Script está funcionando correctamente")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Guarda el proyecto con un nombre (por ejemplo: "Contact Form Handler")
5. Haz clic en **Desplegar** → **Nueva implementación**
6. Selecciona:
   - Tipo: **Aplicación web**
   - Descripción: "Contact Form Handler"
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquiera**
7. Haz clic en **Desplegar**
8. **Copia la URL de la aplicación web** (algo como: `https://script.google.com/macros/s/...`)

## Paso 3: Configurar las variables de entorno

1. Crea un archivo `.env.local` en la raíz de tu proyecto (si no existe)
2. Agrega estas líneas:

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TU_ID_AQUI/exec
NEXT_PUBLIC_FORM_TOKEN=TU_TOKEN_SECRETO_AQUI_12345
```

3. Reemplaza:
   - `TU_ID_AQUI` con la URL que copiaste en el paso anterior
   - `TU_TOKEN_SECRETO_AQUI_12345` con el mismo token que pusiste en el script (línea 1 del código)
4. **IMPORTANTE**: El token en `.env.local` debe ser EXACTAMENTE el mismo que en el script
5. Reinicia el servidor de desarrollo (`npm run dev`)

## Paso 4: Probar el formulario

1. Llena el formulario de contacto en tu sitio
2. Envía el mensaje
3. Verifica que los datos aparezcan en tu Google Sheet

## Notas importantes

- La primera vez que uses el script, Google te pedirá autorización. Acepta los permisos.
- El script necesita permisos para editar la hoja de cálculo.
- Los datos se agregarán automáticamente a la hoja cada vez que alguien envíe el formulario.

## Alternativa: Usar Formspree (más fácil pero con límites)

Si prefieres una solución aún más simple, puedes usar [Formspree](https://formspree.io):

1. Regístrate en Formspree (gratis hasta 50 envíos/mes)
2. Crea un nuevo formulario
3. Copia el endpoint que te dan
4. Reemplaza `GOOGLE_SCRIPT_URL` en el código con el endpoint de Formspree

