import React from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

const Product = ({ product }) => {
  const router=useRouter()
  const { decQty, incQty, qty, onAdd, totalQuantities, setShowCart} = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, 1);

  }
  
  return (
    <div className="product-card"  >
        <div  onClick={()=>router.push(`/product/${product.id}`)}  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}  >
          <img 
            src={product.imageUrl}
            width={250}
            height={250}
            className="product-image"
          />
          
          <p style={{margin:0}} className="product-name ">{product.naziv}</p>
          <p style={{margin:0}} className="product-name hmm" >{product.kategorija}</p>
          <p style={{margin:0}} className="product-price align-text">{product.cena}RSD</p>
          
        </div>
     
       
    </div>
  )
}

export default Product