import Image from 'next/image'

export function HeroSlider() {
  return (
    <section
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: 600,
        overflow: 'hidden',
      }}
    >
      <Image
        src="/hero-main.png"
        alt="Tokyo Life Clinic"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
    </section>
  )
}
