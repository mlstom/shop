import { StateContext } from '../context/StateContext'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import {useState , useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <StateContext >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </StateContext>
    </>
  )
}

export default MyApp

