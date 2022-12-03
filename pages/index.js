import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Gymnasium Kladno</title>
        <meta name="description" content="Stránky Gymnázia Kladno" />
        <link rel="icon" href="/assets/GK-icon-tab.png" />
      </Head>
      <Navbar />
      <Hero />

      <div className='h-[5000px]'></div>
    </div>
  )
}