import React, { useRef } from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineRight } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import { motion } from "framer-motion"


import { useStateContext } from '../context/StateContext';




const Korpa = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  
  return (
    <motion.div className='cart-wrapper' ref={cartRef}
      
    >
      <motion.div className="cart-container"
            initial={{ opacity: 0, left: 300 }}
            animate={{ opacity: 1, left: 0 }}
            transition={{ duration: 0.5 }}
      >
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineRight />
          <span className="heading">Vasa Korpa</span>
          <span className="cart-num-items">{cartItems.length}</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Vasa korpa je prazna</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Nastavite Kupovinu
              </button>
            </Link>
          </div>
        )}
        <div className="product-container" >
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item.id} >
              <img src={item?.imageUrl} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex" style={{marginLeft:'-10px'}}>
                  <h5>{item.naziv}</h5>
                  <h5>{item.velicina}</h5>
                  <h4>{item.cena}Rsd</h4>
                </div>
                
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className='minus' onClick={() => toggleCartItemQuanitity(item.id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item.id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Ukupno:</h3>
              <h3>{totalPrice}</h3>
            </div>
            <div className="btn-container">
            <Link href={`/placanje`}>
                <button type="button" className="btn voz" onClick={() => setShowCart(false)}>
                  Nastavi placanje
                </button>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Korpa