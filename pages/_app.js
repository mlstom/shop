import { StateContext } from '../context/StateContext'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import {useState , useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <StateContext >
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}

export default MyApp

