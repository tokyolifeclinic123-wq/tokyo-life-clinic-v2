import { CLINIC } from '@/lib/constants'

// ── MedicalBusiness（トップページ用）────────────────────────────────────────
export function MedicalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: CLINIC.name,
    url: process.env.NEXT_PUBLIC_APP_URL,
    address: {
      '@type': 'PostalAddress',
      postalCode: CLINIC.postalCode,
      streetAddress: '赤坂6丁目4-18 プリンストン赤坂406',
      addressLocality: '港区',
      addressRegion: '東京都',
      addressCountry: 'JP',
    },
    openingHours: 'Mo-Su 00:00-24:00',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: CLINIC.lineUrl,
      availableLanguage: 'Japanese',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ── Article（コラム記事用）───────────────────────────────────────────────────
interface ArticleJsonLdProps {
  title:       string
  description: string
  publishedAt: string
  imageUrl?:   string
}

export function ArticleJsonLd({ title, description, publishedAt, imageUrl }: ArticleJsonLdProps) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: title,
    description,
    datePublished: publishedAt,
    ...(imageUrl ? { image: imageUrl } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ── Breadcrumb（全ページ用）──────────────────────────────────────────────────
interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ── FAQ（FAQ付きコラム記事用）────────────────────────────────────────────────
interface FaqJsonLdProps {
  items: { question: string; answer: string }[]
}

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
