import React from 'react'
import { useStateContext } from '../context/StateContext';
import Link from 'next/link'
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import { motion } from "framer-motion"

const Meni= () => {

  const { setshowMenu} = useStateContext();
  
  return (

    <motion.div

      className='cart-wrapper menu' >

      <motion.div className="menu-container"
        initial={{ opacity: 0, left: -300 }}
        animate={{ opacity: 1, left: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          type="button"
          className="menu-heading menu-btn"
          onClick={() => setshowMenu(false)}>
          <AiOutlineLeft />
        </button>
        <h3>Meni</h3>
        <div className='flex1 '>
          <p onClick={() => setshowMenu(false)} className='p' ><Link href="/" >Pocetna </Link> </p>
        </div>


      </motion.div>
    </motion.div>
  )
}


export default Meni