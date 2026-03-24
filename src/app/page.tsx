import { HeroSlider }            from '@/components/top/HeroSlider'
import { TrustBar }              from '@/components/top/TrustBar'
import { MenuSection }           from '@/components/top/MenuSection'
import { WhySection }            from '@/components/top/WhySection'
import { FlowSection }           from '@/components/top/FlowSection'
import { CtaSection }            from '@/components/top/CtaSection'
import { MedicalBusinessJsonLd } from '@/components/seo/JsonLd'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <MedicalBusinessJsonLd />
      <HeroSlider />
      <TrustBar />
      <MenuSection />
      <WhySection />
      <FlowSection />
      <CtaSection />
    </>
  )
}
