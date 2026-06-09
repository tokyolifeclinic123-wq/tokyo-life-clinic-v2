import Image from 'next/image'

export function FlowSection() {
  return (
    <section style={{ width: '100%', background: '#fff' }}>
      {/* PC用画像 */}
      <div className="hidden md:block">
        <Image
          src="/flow-pc.png"
          alt="受診の流れ"
          width={1280}
          height={640}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      {/* SP用画像 */}
      <div className="block md:hidden">
        <Image
          src="/flow-sp.png"
          alt="受診の流れ"
          width={750}
          height={1200}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </section>
  )
}
