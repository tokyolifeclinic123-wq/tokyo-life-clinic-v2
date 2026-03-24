import type { MicroCMSImage, MicroCMSListResponse } from 'microcms-js-sdk'

export type ColumnCategory = '美肌内服薬' | 'メディカルダイエット' | 'オンライン診療'

export type Column = {
  id:               string
  title:            string
  slug:             string
  meta_description: string
  category:         ColumnCategory[]   // microCMS は複数選択フィールドを配列で返す
  eyecatch?:        MicroCMSImage      // 未設定の記事もあるため optional
  body:             string
  faq?:             { question: string; answer: string }[]
  publishedAt:      string
  revisedAt:        string
}

export type ColumnListResponse = MicroCMSListResponse<Column>
