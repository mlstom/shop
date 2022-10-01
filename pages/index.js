import Head from 'next/head'
import Kuca from '../components/Kuca'
import { useStateContext } from '../context/StateContext'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home({proizvodi}) {
  const {products,setproducts} = useStateContext()
  useEffect(() => {
    setproducts(proizvodi)
  }, [])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop</title>
        <meta name="description" content="The Best out of the bests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Kuca />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const products = await fetch('https://shop-1hgk.vercel.app/api/products')
  
  return {
    props: { proizvodi: await products.json() }
  }
}
