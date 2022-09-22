import React, { useState,useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Product from '../../components/Product'
import { useStateContext } from '../../context/StateContext';
import { motion } from "framer-motion"

const Opis = ({ product, products}) => {
  const proizvod = JSON.parse(product)
  const proizvodi = JSON.parse(products)
  const { imageUrl, naziv, opis, cena,kategorija,stanje } = proizvod;
  const [index, setIndex] = useState(0);
  const {  setShowCart} = useStateContext();
  let qty=2;
  let decQty= 7;
 /* const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }*/
  const router=useRouter()
  
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className='daproradi'
    >
      
      <div className="product-detail-container">
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
          {
            stanje> 0 && <div className="quantity">
            <h3>Kolicina:</h3>
            <p className="quantity-desc">
              <span className='minus' onClick={()=>null} ><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className= "plus" onClick={()=>null} ><AiOutlinePlus /></span>
            </p>
          </div> 
          }
          
          {
            stanje >0 ? <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=> null} >Dodaj u korpu</button>
            <button type="button" className="buy-now" onClick={()=>null}>Kupi</button>
          </div> : <h3> Proizvod nedostupan</h3> 
          }
          
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>Izdvajamo iz naše ponude</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
            {proizvodi.map((item) => (
                <Product key={item.id} product={item} />
            ))}
            </div>
          </div>
      </div>
    </motion.div>
  )
}



export const getServerSideProps = async ({ params: { id }}) => {
  const product = await fetch(`http:/localhost:3000/api/product/id/${id}`)
  const [proizvod] = await product.json()
  const products = await fetch('http:/localhost:3000/api/products')
  const proizvodi = await products.json()
  return {
    props: {product:JSON.stringify(proizvod) , products:JSON.stringify(proizvodi) }
  }
}

export default Opis