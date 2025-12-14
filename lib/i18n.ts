import enTranslations from '@/locales/en.json'
import esTranslations from '@/locales/es.json'

export type Locale = 'en' | 'es'

const translations = {
  en: enTranslations,
  es: esTranslations,
} as const

export function getTranslations(locale: Locale = 'en') {
  return translations[locale] || translations.en
}

export function getNestedTranslation(
  locale: Locale,
  path: string
): string {
  const keys = path.split('.')
  const t = getTranslations(locale)
  
  let value: any = t
  for (const key of keys) {
    value = value?.[key]
    if (value === undefined) return path
  }
  
  return typeof value === 'string' ? value : path
}

