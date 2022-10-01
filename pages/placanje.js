import Router from 'next/router';
import React, { useState } from 'react'
import styled from 'styled-components';
import { v3 as uuidv3} from 'uuid';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { useStateContext } from '../context/StateContext';

const Button = styled.button`
border:none;
color:#fff;
background-color:#9e6de0;
padding:7px 10px;
border-radius:5px;
&:hover{
    background-color:#9e1cd4; 
}

`

const Placanje = () => {
    const { cartItems, totalPrice, promo } = useStateContext()
    const [ime, setime] = useState("")
    const [prezime, setprezime] = useState("")
    const [ulica, setulica] = useState("")
    const [broj, setbroj] = useState("")
    const [grad, setgrad] = useState("")
    const [posta, setposta] = useState("")
    const [napomena, setnapomena] = useState("")
    const zavrsi = async() =>{
        cartItems.map(async(item)=>{
            await fetch('/api/porudzbine',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({ porId:Math.floor(300 + Math.random() * 1000),grad , tel:broj, ulicabr:ulica, posta , ime , prezime ,velicina:item.velicina , productId: item.id, qty:item.quantity, cena:totalPrice, napomena : napomena})
            })
        })
        Router.push('/succes')
    }

    return (
        <div>
            <Header />
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', paddingTop: '100px' }}>
                <h1> Placanje</h1>
                <input type="text" placeholder='Ime' value={ime} onChange={(e) => setime(e.target.value)}></input>
                <input type="text" placeholder='Prezime' value={prezime} onChange={(e) => setprezime(e.target.value)}></input>
                <input type="text" placeholder='Broj telefona' value={broj} onChange={(e) => setbroj(e.target.value)}></input>
                <input type="text" placeholder='Grad' value={grad} onChange={(e) => setgrad(e.target.value)}></input>
                <input type="text" placeholder='Ulica i broj' value={ulica} onChange={(e) => setulica(e.target.value)}></input>
                <input type="text" placeholder='Postanski broj' value={posta} onChange={(e) => setposta(e.target.value)}></input>
                <input type="text" placeholder='Napomena' value={napomena} onChange={(e) => setnapomena(e.target.value)}></input>
                <Button type='button' onClick={() => zavrsi()}>Potvrdi</Button>


            </div>
            <Footer />
        </div>
    )
}

export default Placanje