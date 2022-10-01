import { StateContext } from '../context/StateContext'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import {useState , useEffect} from 'react'
import { Toaster } from 'react-hot-toast'
import Gototop from '../components/Gototop'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Toaster  />
      
      <StateContext >
      <Gototop />
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}

export default MyApp

