export const CLINIC = {
  name:       '東京LIFEオンラインクリニック',
  nameEn:     'Tokyo LIFE Online Clinic',
  director:   '佐々木 隆飛',
  address:    '東京都港区赤坂6丁目4-18-406',
  postalCode: '107-0052',
  hours:      '24時間受付（年末年始除く）',
  lineUrl:    'https://s.lmes.jp/landing-qr/2009572394-pVRJCTc4?uLand=YsfTcY',
  siteUrl:    process.env.NEXT_PUBLIC_APP_URL ?? 'https://tokyo-life-clinic.com',
} as const

export const TREATMENTS = {
  beauty: {
    name:   '美肌内服薬',
    nameEn: 'MEDICAL BEAUTY',
    slug:   'isotretinoin',
    drugs:  ['イソトレチノイン 10mg', 'イソトレチノイン 20mg'],
  },
  diet: {
    name:   'メディカルダイエット',
    nameEn: 'MEDICAL DIET',
    slug:   'mounjaro',
    drugs:  ['マンジャロ 2.5mg', 'マンジャロ 5mg', 'マンジャロ 7.5mg'],
  },
} as const
