import Image from 'next/image'

export function WhySection() {
  return (
    <section style={{ width: '100%', background: '#E8F8FD' }}>
      {/* PC用画像 */}
      <div className="hidden md:block">
        <Image
          src="/why-pc.png"
          alt="TLOCが選ばれる理由"
          width={1280}
          height={640}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      {/* SP用画像 */}
      <div className="block md:hidden">
        <Image
          src="/why-sp.png"
          alt="TLOCが選ばれる理由"
          width={750}
          height={1200}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </section>
  )
}
