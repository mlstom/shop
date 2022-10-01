import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import kat1 from '../assets/img/banner/banner-1.jpg'
import kat2 from '../assets/img/product/product-5.jpg'
import kat3 from '../assets/img/instagram/instagram-4.jpg'
import  Router  from 'next/router'


const Kat = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:1000px;
`
const Left = styled.div`
    margin-right:-40px;
    z-index:99;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media only screen and (max-width: 800px) {
        margin-bottom:120px;
        margin-right:-10px;
    }
`
const Right = styled.div`
    margin-bottom:-50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 800px) {
        margin-bottom:10px;
    }
`
const Button = styled.button`
    background-color:transparent;
    color:black;
    padding:0 20px;
    &:hover{
        background-color:black;
        color:white;
    }
    border:none;
    box-shadow:0 0 0 1px black;
`

const Kategorije = () => {
    return (
        <div style={{ marginTop: '50px',padding:'0 15%',display:'flex',flexWrap:'wrap' }}>
            <Kat>
                <Left>
                    <h3>T-Shirt <br /> Collections 2030</h3>
                    <Button onClick={()=>Router.push('/kategorija/majca')}>Shop</Button>
                </Left>
                <Right>
                    <Image src={kat2} alt='pisa' width='330px' height='330px' />
                </Right>
            </Kat>
            <Kat style={{justifyContent:'flex-start'}}>
                <Left>
                    <Image src={kat1} alt='pisa' />
                </Left>
                <Right style={{zIndex:'99'}}>
                <h3>Hoody<br /> Collections 2030</h3>
                <p>Trenutno nedostupno</p>
                    <Button >Shop</Button>
                </Right>
            </Kat>
            <Kat>
                <Left style={{zIndex:'100'}}>
                    <h3>Whole <br/> Collections 2030</h3>
                    <Button onClick={()=>Router.push('/proizvodi')}>Visit</Button>
                </Left>
                <Right style={{marginTop:'-100px',zIndex:'99'}}>
                    <Image src={kat3} alt='pisa' width='350px' height='350px' />
                </Right>
            </Kat>
        </div>
    )
}

export default Kategorije