import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'
import { getColumnBySlug, getAllColumnSlugs } from '@/lib/microcms'
import { LineButton } from '@/components/ui/LineButton'
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer'
import type { Column, ColumnCategory } from '@/types/microcms'
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'
import { CLINIC } from '@/lib/constants'

export const revalidate = 0

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllColumnSlugs()
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post: Column | null = null
  try {
    post = await getColumnBySlug(params.slug)
  } catch {
    // noop
  }
  if (!post) return {}

  return {
    title: `${post.title} | 東京LIFEオンラインクリニック`,
    description: post.meta_description,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      images: post.eyecatch?.url ? [{ url: post.eyecatch.url }] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

const CATEGORY_COLORS: Record<ColumnCategory, { bg: string; color: string }> = {
  '美肌内服薬':         { bg: '#E8F8FD', color: '#5BC8E8' },
  'メディカルダイエット': { bg: '#F0FBE8', color: '#5CA83A' },
  'オンライン診療':      { bg: '#F5F0FB', color: '#7A5CA8' },
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    'img', 'h1', 'h2', 'h3', 'h4', 'figure', 'figcaption',
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ['src', 'alt', 'width', 'height', 'loading'],
    '*': ['class', 'id'],
  },
}

export default async function ColumnDetailPage({ params }: Props) {
  let post: Column | null = null
  try {
    post = await getColumnBySlug(params.slug)
  } catch {
    // noop
  }
  if (!post) notFound()

  const primaryCategory = post.category[0]
  const badge = (primaryCategory && CATEGORY_COLORS[primaryCategory]) ?? { bg: '#F0F0F0', color: '#7A8F9A' }
  const cleanBody = sanitizeHtml(post.body, SANITIZE_OPTIONS)

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.meta_description}
        publishedAt={post.publishedAt}
        imageUrl={post.eyecatch?.url}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム', url: CLINIC.siteUrl },
          { name: 'コラム', url: `${CLINIC.siteUrl}/column` },
          { name: post.title, url: `${CLINIC.siteUrl}/column/${post.slug}` },
        ]}
      />
      {post.faq && post.faq.length > 0 && <FaqJsonLd items={post.faq} />}

      <div style={{ padding: '80px 80px 100px', backgroundColor: '#ffffff' }} className="page-pad">

        {/* Breadcrumb */}
        <nav style={{ marginBottom: 48, fontSize: 12, color: '#7A8F9A' }}>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            <li>
              <Link href="/" style={{ color: '#7A8F9A', textDecoration: 'none' }}>ホーム</Link>
            </li>
            <li style={{ color: '#D6EEF7' }}>›</li>
            <li>
              <Link href="/column" style={{ color: '#7A8F9A', textDecoration: 'none' }}>コラム</Link>
            </li>
            <li style={{ color: '#D6EEF7' }}>›</li>
            <li style={{ color: '#2C3E50' }}>{post.title}</li>
          </ol>
        </nav>

        {/* Article header */}
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              backgroundColor: badge.bg,
              color: badge.color,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '4px 12px',
              marginBottom: 20,
            }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 400,
              color: '#1A3A4A',
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            {post.title}
          </h1>

          {/* Date */}
          <time
            dateTime={post.publishedAt}
            style={{
              display: 'block',
              fontFamily: 'var(--font-cormorant)',
              fontSize: 13,
              color: '#A8DFF2',
              letterSpacing: '0.08em',
              marginBottom: 40,
            }}
          >
            {formatDate(post.publishedAt)}
          </time>

          {/* Eyecatch */}
          {post.eyecatch?.url && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                marginBottom: 56,
                border: '1px solid #D6EEF7',
              }}
            >
              <Image
                src={post.eyecatch.url}
                alt={post.eyecatch.alt ?? post.title}
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}

          {/* Body */}
          <div
            className="column-body"
            dangerouslySetInnerHTML={{ __html: cleanBody }}
          />

          {/* FAQ (if exists) */}
          {post.faq && post.faq.length > 0 && (
            <section style={{ marginTop: 64 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#1A3A4A',
                  marginBottom: 24,
                }}
              >
                よくある質問
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {post.faq.map((item, i) => (
                  <div
                    key={i}
                    style={{ border: '1px solid #D6EEF7', padding: '20px 24px' }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#1A3A4A',
                        marginBottom: 10,
                      }}
                    >
                      Q. {item.question}
                    </p>
                    <p style={{ fontSize: 14, color: '#2C3E50', lineHeight: 1.8 }}>
                      A. {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div style={{ marginTop: 64, marginBottom: 0 }}>
            <LineButton location="column_bottom" label="LINEで無料相談する" />
          </div>

          <MedicalDisclaimer />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-pad { padding: 60px 24px 80px !important; }
        }

        /* Column body typography */
        .column-body { font-size: 15px; color: #2C3E50; line-height: 1.9; }
        .column-body h2 {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: 400;
          color: #1A3A4A;
          margin: 48px 0 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #D6EEF7;
        }
        .column-body h3 {
          font-family: var(--font-serif);
          font-size: 17px;
          font-weight: 400;
          color: #1A3A4A;
          margin: 36px 0 16px;
        }
        .column-body p { margin-bottom: 20px; }
        .column-body ul, .column-body ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .column-body li { margin-bottom: 8px; }
        .column-body img {
          max-width: 100%;
          height: auto;
          margin: 24px 0;
          border: 1px solid #D6EEF7;
        }
        .column-body strong { font-weight: 500; color: #1A3A4A; }
        .column-body a { color: #5BC8E8; text-decoration: underline; }
      `}</style>
    </>
  )
}
