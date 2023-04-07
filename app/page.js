import Image from 'next/image'
import { Outfit } from 'next/font/google'
import QR_Code from './assets/image-qr-code.png'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className={`main ${outfit.className}`}>
      <div className="card">
        <Image src={QR_Code} alt="qr code image" loading='lazy' className="imgStyle" />

        <div className="textStyles">
          <h3 className="heading">Improve your front-end skills by building projects</h3>

          <p className="paragraph">Scan the QR code to visit Fronted Mentor and take your coding skills to the next level</p>
        </div>
      </div>

    </main>
  )
}
