import Image from 'next/image';
import React from 'react'
import banner from '../../assets/img/breadcrumb-bg.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Product from '../../components/Product'

import { motion } from "framer-motion"

const KatDetails = ({ proizvodi }) => {
  const products = JSON.parse(proizvodi);

  return (
    <div>
      <Header />
      <Image src={banner} alt='HVALA' style={{ zIndex: '0' }} />
      <h1 style={{textAlign:'center'}}>{products[0].kategorija}</h1>
      <div className="products-container grid" style={{marginBottom:'40px'}}>
        {
          products?.map((item) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={item.id}

            >
              <Product product={item} />
            </motion.div>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ params: { kat } }) {
  const products = await fetch(`http://localhost:3000/api/kategorija/${kat}`)
  const proizvodi = await products.json()
  return {
    props: { proizvodi: JSON.stringify(proizvodi) }
  }
}

export default KatDetails
