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
        <title>Felix Ardy Mulya</title>
        <meta name="description" content="This portfolio to showcase my projects and working experience" />
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
