"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Mail, MessageSquare, User } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>("")
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Rate limiting básico del lado del cliente (60 segundos)
      const now = Date.now()
      const RATE_LIMIT_MS = 60000 // 60 segundos
      
      if (lastSubmissionTime && (now - lastSubmissionTime) < RATE_LIMIT_MS) {
        const remainingSeconds = Math.ceil((RATE_LIMIT_MS - (now - lastSubmissionTime)) / 1000)
        setIsSubmitting(false)
        setError(`Por favor, espera ${remainingSeconds} segundos antes de enviar otro mensaje.`)
        return
      }

      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
      const FORM_TOKEN = process.env.NEXT_PUBLIC_FORM_TOKEN || ""

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Google Script URL no configurada. Por favor, configura NEXT_PUBLIC_GOOGLE_SCRIPT_URL en tu archivo .env")
      }

      if (!FORM_TOKEN) {
        throw new Error("Token no configurado. Por favor, configura NEXT_PUBLIC_FORM_TOKEN en tu archivo .env")
      }

      // Obtener IP del cliente (con timeout)
      let clientIP = 'unknown'
      try {
        const ipController = new AbortController()
        const ipTimeout = setTimeout(() => ipController.abort(), 3000) // 3 segundos timeout
        
        const ipResponse = await fetch('https://api.ipify.org?format=json', {
          signal: ipController.signal
        })
        clearTimeout(ipTimeout)
        const ipData = await ipResponse.json()
        clientIP = ipData.ip || 'unknown'
      } catch (ipError) {
        console.warn("No se pudo obtener la IP:", ipError)
        // Continuar sin IP si falla
      }

      // Enviar datos al Google Apps Script
      // Usamos un timeout para evitar que se quede colgado
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000) // 10 segundos timeout

      let response
      try {
        response = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // Necesario para Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString(),
            token: FORM_TOKEN,
            clientIP: clientIP,
          }),
          signal: controller.signal,
        })
        clearTimeout(timeout)
      } catch (fetchError: any) {
        clearTimeout(timeout)
        
        // Si es un error de abort (timeout)
        if (fetchError.name === 'AbortError') {
          throw new Error("La solicitud tardó demasiado. Por favor, intenta nuevamente.")
        }
        
        // Si es un error de red
        if (fetchError.message?.includes('Failed to fetch') || fetchError.message?.includes('NetworkError')) {
          // Con no-cors, no podemos ver la respuesta, pero el envío puede haber sido exitoso
          // Asumimos éxito si no hay otros errores
          console.warn("Error de red (puede ser CORS), pero el envío puede haber sido exitoso")
          // Continuar como si fuera exitoso, ya que con no-cors no podemos verificar
        } else {
          throw fetchError
        }
      }

      // Con mode: "no-cors", no podemos leer la respuesta del servidor
      // Pero Google Apps Script procesará la petición en segundo plano
      // Si llegamos aquí sin errores, asumimos que la petición se envió correctamente
      
      // Nota: Los errores de rate limiting no se pueden detectar con no-cors,
      // pero el script los procesará y los datos no se guardarán si hay rate limit

      // Éxito (asumimos que se envió correctamente)
      setLastSubmissionTime(now)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err: any) {
      console.error("Error submitting form:", err)
      setIsSubmitting(false)
      
      // Mensajes de error más específicos
      if (err.message?.includes('timeout') || err.message?.includes('tardó demasiado')) {
        setError("La solicitud tardó demasiado. Por favor, verifica tu conexión e intenta nuevamente.")
      } else if (err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError')) {
        setError("Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.")
      } else {
        setError(err.message || "Hubo un error al enviar el formulario. Por favor, intenta nuevamente.")
      }
    }
  }

  return (
    <Card className="border-2">
      <CardHeader className="pb-4 sm:pb-6">
        <CardTitle className="text-xl sm:text-2xl md:text-3xl">Get in Touch</CardTitle>
        <CardDescription className="text-sm sm:text-base md:text-lg">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {isSubmitted ? (
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
              <Send className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Message Sent!</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for contacting us. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {error && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                <User className="h-4 w-4" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:px-4"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:px-4"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="h-4 w-4" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none sm:px-4 sm:rows-6"
                placeholder="Tell us how we can help..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
