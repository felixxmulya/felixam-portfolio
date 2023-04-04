import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacs from '../components/Contacts'
import Footer from '../components/Footer'
import logo from '../public/logo.ico'

export default function Home() {
  return (
    <>
      <Head>
        <title>Felix A.M</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="logo" href="./public/logo.png" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacs/>
      <Footer/>
    </>
  )
}
