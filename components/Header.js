import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { RiSearch2Line } from 'react-icons/ri'
import Korpa from './Korpa';
import { useStateContext } from '../context/StateContext';
import Meni from './Meni';
import { AiOutlineClose } from 'react-icons/ai'

import { motion } from "framer-motion"
import styled from 'styled-components';


const Absolute = styled.div`
    baclground-color:transparent;
    position:absolute;
    z-index:999999;
    left:0;
    right:0;
    overflow:hidden;
`

const Header = () => {
    const { showCart, setShowCart, showMenu, setshowMenu, cartItems } = useStateContext();
    const [term, setterm] = useState("")
    const [pokazi, setpokazi] = useState(false)
    const handlesearch = (e) => {
        e.preventDefault()

    }

    return (
        <Absolute className='linijica'>
            <div className="navbar-container">
                <button type="button" onClick={() => setshowMenu(!showMenu)} className="cart-icon" style={{ color: 'white' }} >
                    <AiOutlineMenu />
                </button>
                <div className='logo' >
                    Inkrist
                </div>
                <div className='flex4'>
                    <button type="button" onClick={() => setpokazi(!pokazi)} className="cart-icon" >
                        {!pokazi && <RiSearch2Line style={{ color: 'white' }} />}
                    </button>
                    {pokazi && <form
                        onSubmit={handlesearch}
                        className="flex4"
                    >
                        <motion.input
                            style={{ backgroundColor: 'transparent', color: 'white',boxShadow:'0 0 0 2px white' }}
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 160 }}
                            transition={{ duration: 0.5 }}
                            type="text" placeholder='Pretrazi' value={term} onChange={(e) => setterm(e.target.value)}></motion.input> <button className='cart-icon' type='button' onClick={() => setpokazi(!pokazi)}> <AiOutlineClose style={{ color: 'white' }} /> </button>

                    </form>}
                    <button type="button" onClick={() => setShowCart(true)} className="cart-icon" >
                        <div>
                            <AiOutlineShopping style={{ color: 'white' }} />
                            <span className="cart-item-qty" style={{ backgroundColor: 'white', color: 'black', marginLeft: '-10px' }}>{cartItems.length}</span>
                        </div>
                    </button>


                </div>


                {showMenu && <Meni />}


                {showCart && <Korpa />}
            </div>

        </Absolute>

    )
}



export default Header