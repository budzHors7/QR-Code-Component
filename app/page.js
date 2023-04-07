import Image from 'next/image'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`main ${outfit.className}`}>
      <h1>Hello</h1>
    </main>
  )
}
