import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Product from '../../components/Product'
import { useStateContext } from '../../context/StateContext';
import { motion } from "framer-motion"
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Opis = ({ proizvod, proizvodi }) => {
  const product = JSON.parse(proizvod)
  const products = JSON.parse(proizvodi)
  const [velicina, setvelicina] = useState('')
  const { imageUrl, naziv, opis, cena, kategorija } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, totalQuantities, setShowCart, setkat } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty,velicina);
    setShowCart(true);
  }
  const router = useRouter()

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='daproradi'
        style={{ paddingTop: '30px' }}
      >

        <div className="product-detail-container" >
          <div className="product-detail-image">
            <img src={imageUrl} className="product-detail-image" />
          </div>

          <div className="product-detail-desc">
            <h1>{naziv}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
            </div>
            <h3>{kategorija}</h3>
            <h4>Opis: </h4>
            <p>{opis}</p>
            <p className="price">{cena}RSD</p>
            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <h3>Velicina</h3>
              <select onChange={(e)=>setvelicina(e.target.value)} style={{height:'30px'}}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>


            {
              <div className="quantity">
                <h3>Kolicina:</h3>
                <p className="quantity-desc">
                  <span className='minus' onClick={decQty} ><AiOutlineMinus /></span>
                  <span className="num">{qty}</span>
                  <span className="plus" onClick={incQty} ><AiOutlinePlus /></span>
                </p>
              </div>
            }

            {
              <div className="buttons">
                <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty,velicina)} >Dodaj u korpu</button>
                <button type="button" className="buy-now" onClick={handleBuyNow}>Kupi</button>
              </div>
            }

          </div>
        </div>

        <div className="maylike-products-wrapper">
          <h2>Izdvajamo iz naše ponude</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}



export const getServerSideProps = async ({ params: { id } }) => {
  const product = await fetch(`https://shop-1hgk.vercel.app/api/product/id/${id}`)
  const [proizvod] = await product.json()
  const products = await fetch('https://shop-1hgk.vercel.app/api/products')
  const proizvodi = await products.json()
  return {
    props: { proizvod: JSON.stringify(proizvod), proizvodi: JSON.stringify(proizvodi) }
  }
}

export default Opis