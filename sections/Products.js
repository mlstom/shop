import React from 'react'
import Product from '../components/Product'
import { useStateContext } from '../context/StateContext'
import { motion } from "framer-motion"
import styled from 'styled-components'


const Main = styled.div`
@media only screen and (max-width: 600px) {
    margin-top:60px;
}
`

const Products = () => {
    const {products} = useStateContext()

  return (
    <Main>
        <h1 style={{color:'black',marginLeft:"10%"}}>Products</h1>
        {console.log(products)}
        <motion.div 
          
          className="products-container grid">
          {products?.map((product) => <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={product.id}
                    
          >
            <Product  product={product} />
          </motion.div> )}
        </motion.div>

    </Main>
  )
}

export default Products