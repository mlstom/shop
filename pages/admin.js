import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillDelete, AiTwotoneEdit, AiFillHome } from 'react-icons/ai'
import { MdLocalPostOffice } from 'react-icons/md'
import { BsCheck2All } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';
import { client } from '../client'

const AdminHeader = styled.div`
    width:20%;
    background-color:#292B48;
    color:white;
    display:flex;
    flex-direction:column;
    gap:20px;
    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: rgb(100, 108, 154);
        text-transform: uppercase;
        font-family:'Poppins'
    }
`
const Main1 = styled.div`
    display:flex;
    background-color: var(--lightdark)
    width:100vw;
    height:90vh;
`
const LeftPart = styled.div`
    width:80%;
    padding:20px;
    background-color:#1B1F38;

`
const Graf = styled.div`
background-color:#292B48;
min-width:500px;
height:600px;
overflow:scroll;
&::-webkit-scrollbar{
    display: none;
}
`

const Login1 = styled.div`
display:flex;
width:100vw;
height:100vh;
justify-content:center;
align-items:center;

  font-family: "Roboto", sans-serif;
 
`
const Form1 = styled.div`
display:flex;
flex-direction:column; 
width: 360px;
padding: 8% 0 0;
position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  input{
    font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  }
  button{
    font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  }
`

const Header = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:#FFF;
  padding : 0 20px;
  p{
    marign-top:7px;
    isplay:flex;
  align-items:center;
  justify-content:center;
  }
`
const Cont = styled.div`
background-color:#292B48
`
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
const Product = styled.div`
display:flex;
flex-direction:column;
color:white;
padding:10px 20px;

`
const Border = styled.div`
display:flex;
height:10%;
align-items:center;
box-shadow:0 0 0 2px var(--purple);
justify-content:space-between;
padding: 10px 10px;
p{
    height:100%;
    text-align:center;
}

`
const Flex = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const Edit = styled.div`
padding:10px;
display:flex;
align-items:center;
justify-content:center;
box-sizing: border-box;
color:#22cc9d;
&:hover{
    color:#02a145
}
cursor:pointer;
`
const Delete = styled.div`
padding:10px;
display:flex;
align-items:center;
justify-content:center;
box-sizing: border-box;
color:#FF5E41;
&:hover{
    color:#AA151F
}
`
const Editpage = styled.div`
    
    position:fixed;
    background-color:var(--providna);
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
const EditCont = styled.div`
    position:absolute;
    z-index:10;
    width:35%;
    min-height:20%;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    input{
        font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
      }
      button{
        font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #FFFFFF;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
      }
      padding:10px 20px;
`
const Deletepage = styled.div`
    position:fixed;
    background-color:var(--providna);
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
`
const DelCont = styled.div`
    position:absolute;
    z-index:10;
    width:35%;
    min-height:20%;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    align-items:center;
    justify-content:center;
`
const Confirm = styled.div`
background-color: #04AA6D;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
opacity: 0.9;
&:hover{
    opacity:1
}
width:100px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
`
const Cancel = styled.div`
background-color: #f44336;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
opacity: 0.9;
&:hover{
    opacity:1
}  
width:100px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
`
const Admin = ({ products, porudzbine }) => {
    const [user, setuser] = useState(false)
    const [pass, setpass] = useState('')
    const [username, setusername] = useState('')
    const [sve, setsve] = useState(false)
    const [nema, setnema] = useState(false)
    const [prpage, setprpage] = useState(true)
    const [edit, setedit] = useState(false)
    const [poredit, setporedit] = useState(false)
    const [del, setdel] = useState(false)
    const [odabran, setodabran] = useState({})
    const [createprod, setcreateprod] = useState(false)
    const [slika, setslika] = useState()
    const [idx, setidx] = useState(0)
    const [trpr, settrpr] = useState({})
    const [pordel, setpordel] = useState(false)

    const handleDelete = async () => {
        await fetch('/api/products', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: odabran.id })
        })
        products.splice(idx, 1)
        setodabran(null)
        setidx(0)
        setdel(false)
        setslika(null)
    }

    const uploadImage = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/jpg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/tiff') {
            client.assets
                .upload("image", selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
                .then((doc) => {
                    setslika(doc)
                    setodabran({ ...odabran, imageUrl: doc.url })
                })
        }

    }

    const handleEdit = async () => {
        await fetch('/api/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: odabran.id, naziv: odabran.naziv, opis: odabran.opis, cena: odabran.cena, kategorija: odabran.kategorija, url: odabran.imageUrl, quantity: odabran.quantity })
        })
        products.splice(idx, 1)
        products.push(odabran)
        setodabran(null)
        setidx(0)
        setedit(false)
        setslika(null)
    }

    const handleCreateProd = async () => {
        console.log(odabran)
        await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ naziv: odabran.naziv, opis: odabran.opis, cena: odabran.cena, kategorija: odabran.kategorija, url: odabran.imageUrl, quantity: odabran.quantity })
        })
        odabran.id = uuidv4()
        products.push(odabran)
        setslika(null)
        setodabran(null)
        setidx(0)
        setcreateprod(false)
    }

    const proveri = () => {
        if (pass && username) {
            if (pass == 'tomic' && username == 'admin') {
                setuser(true)
            } else {
                setnema(true)
                setTimeout(() => {
                    setnema(false)
                }, 2000)
            }
        } else {
            setsve(true)
            setTimeout(() => {
                setsve(false)
            }, 2000)
        }
    }
    const handleEditPor = async () => {
        await fetch('/api/porudzbine', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: trpr.porId })
        })
        window.alert('Pordzbina je promenja promena ce se videti posle refresa stranice hvala')
        setporedit(false)
        settrpr({})
    }

    const handleDelPor =async ()=>{
        await fetch('/api/porudzbine', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: trpr.id, porId:trpr.porId })
        })
        window.alert('Pordzbina je promenja promena ce se videti posle refresa stranice hvala')
        setpordel(false)
        settrpr({})
    }

    return (
        <div>
            {user ? <Cont >
                {
                    createprod && <Editpage>
                        <EditCont>
                            <input type='text' placeholder='naziv' value={odabran?.naziv} onChange={(e) => setodabran({ ...odabran, naziv: e.target.value })} />
                            <input type='text' placeholder='opis' value={odabran?.opis} onChange={(e) => setodabran({ ...odabran, opis: e.target.value })} />
                            <input type='number' placeholder='cena' value={odabran?.cena} onChange={(e) => setodabran({ ...odabran, cena: e.target.value })} />
                            <input type='text' placeholder='kategorija' value={odabran?.kategorija} onChange={(e) => setodabran({ ...odabran, kategorija: e.target.value })} />
                            <input type='number' placeholder='quantity' value={odabran?.quantity} onChange={(e) => setodabran({ ...odabran, quantity: e.target.value })} />
                            {slika ? <img src={slika.url} width='100px' height='100px' /> : <div>
                                <input type='file' id='file' onChange={(e) => uploadImage(e)} />
                            </div>}
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <Cancel onClick={() => { setodabran(null); setcreateprod(false); setidx(0) }}>Cancel</Cancel>
                                <Confirm onClick={() => handleCreateProd()} >Confirm</Confirm>
                            </div>
                        </EditCont>
                    </Editpage>
                }
                {edit && <Editpage>
                    <EditCont>
                        <input type='text' value={odabran?.naziv} onChange={(e) => setodabran({ ...odabran, naziv: e.target.value })} />
                        <input type='text' value={odabran?.opis} onChange={(e) => setodabran({ ...odabran, opis: e.target.value })} />
                        <input type='number' value={odabran?.cena} onChange={(e) => setodabran({ ...odabran, cena: e.target.value })} />
                        <input type='text' value={odabran?.kategorija} onChange={(e) => setodabran({ ...odabran, kategorija: e.target.value })} />
                        <input type='text' value={odabran?.pol} onChange={(e) => setodabran({ ...odabran, pol: e.target.value })} />
                        <input type='number' value={odabran?.quantity} onChange={(e) => setodabran({ ...odabran, quantity: e.target.value })} />

                        <div>
                            <input type='file' id='file' onChange={(e) => uploadImage(e)} />
                        </div>
                        {slika &&  <img src={slika.url} width='100px' height='100px' /> } 
                        
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <Cancel onClick={() => { setodabran(null); setedit(false); setidx(0) }}>Cancel</Cancel>
                            <Confirm onClick={() => handleEdit()} >Confirm</Confirm>
                        </div>
                    </EditCont>
                </Editpage>}
                {del && <Deletepage >
                    <DelCont>
                        <p style={{ textAlign: 'center' }}>Da li ste sigurni da zelite da obrisete ovaj Proizvod?</p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <Cancel onClick={() => { setodabran(null); setdel(false); setidx(0) }}>Cancel</Cancel>
                            <Confirm onClick={() => handleDelete()} >Confirm</Confirm>
                        </div>
                    </DelCont>
                </Deletepage>}
                <Header> <p>Shop Inkrist</p> {prpage && <Button type='button'>  <p style={{ margin: 0 }} onClick={() => setcreateprod(true)}>Create Product</p> </Button>}</Header>
                <Main1>
                    <AdminHeader>
                        <p>navigation</p>
                        <h5 onClick={() => setprpage(true)} style={prpage ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0px 30px', gap: '10px', cursor: 'default' } : { color: 'black', display: 'flex', fontSize: '18px', alignItems: 'center', justifyContent: 'space-between', margin: '0px 30px', gap: '10px', cursor: 'pointer' }}>Products <AiFillHome /> </h5>
                        <h5 onClick={() => setprpage(false)} style={!prpage ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0px 30px', gap: '10px', cursor: 'default' } : { color: 'black', display: 'flex', fontSize: '18px', alignItems: 'center', justifyContent: 'space-between', margin: '0px 30px', gap: '10px', cursor: 'pointer' }}>Porudzbine <MdLocalPostOffice /> </h5>
                    </AdminHeader>
                    <LeftPart>
                        {prpage ? <Graf>
                            {products.map((product, index) => <Product key={product.id}>
                                <Border><Flex> <div>{product.naziv}</div> <div>{product.opis}</div> <div>{product.kategorija}</div> <div>{product.pol}</div> <div>{product.cena}</div>   <img src={product.imageUrl} width='40px' height='40px' /> </Flex> <div style={{ display: 'flex' }}> <Edit onClick={() => { setodabran(product); setedit(true); setidx(index) }}  ><AiTwotoneEdit fontSize='25px' /></Edit> <Delete onClick={() => { setodabran(product); setdel(true); setidx(index) }} ><AiFillDelete fontSize='25px' /></Delete> </div> </Border>
                            </Product>)}
                        </Graf> : <Graf>
                            {poredit && <Deletepage >
                                <DelCont>
                                    <p style={{ textAlign: 'center' }}>Da li ste sugirnu da je porudzbina poslata</p>
                                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                        <Cancel onClick={() => { setporedit(false); settrpr({}) }}>Cancel</Cancel>
                                        <Confirm onClick={() => handleEditPor()} >Confirm</Confirm>
                                    </div>
                                </DelCont>
                            </Deletepage>}
                            {pordel && <Deletepage >
                                <DelCont>
                                    <p style={{ textAlign: 'center' }}>Da li ste sigurni da zelite da obrisete ovu Porudzbinu?</p>
                                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                        <Cancel onClick={() => {settrpr({});setpordel(false)}}>Cancel</Cancel>
                                        <Confirm onClick={() => handleDelPor()} >Confirm</Confirm>
                                    </div>
                                </DelCont>
                            </Deletepage>}
                            <h3 style={{ color: 'white' }}>Ne poslate</h3>
                            {
                                porudzbine?.map((por) => (!por.stigla ? <Product key={por.id}>
                                    <Border><Flex><div>{por.porId}.</div> <div>{por.naziv} {por.productId}</div> <div>{por.velicina}</div> <div>{por.productKolicina}</div> <div>{por.cena * por.productKolicina}</div> <div>{por.napomena}</div> <div>{por.ime} {por.prezime}</div> <div>{por.ulicabr}, {por.grad} {por.posta}</div> <div>{por.tel}</div>  <div>{por.stigla ? "true" : "false"}</div></Flex> <Edit onClick={() => { setporedit(true); settrpr(por) }} ><BsCheck2All fontSize='22px' /></Edit> </Border>
                                </Product> : null))
                            }
                            <h3 style={{ color: 'white' }}>Poslate</h3>
                            {
                                porudzbine?.map((por) => (por.stigla ? <Product key={por.id}>
                                    <Border><Flex><div>{por.porId}.</div> <div>{por.naziv} {por.productId}</div> <div>{por.velicina}</div> <div>{por.productKolicina}</div> <div>{por.cena * por.productKolicina}</div> <div>{por.napomena}</div> <div>{por.ime} {por.prezime}</div> <div>{por.ulicabr}, {por.grad} {por.posta}</div> <div>{por.tel}</div>  <div>{por.stigla ? "true" : "false"}</div></Flex> <Delete onClick={() => { setpordel(true); settrpr(por) }} ><AiFillDelete fontSize='22px' /></Delete> </Border>
                                </Product> : null))
                            }
                        </Graf>}

                    </LeftPart>
                </Main1>
            </Cont>
                : <Login1>
                    <Form1>
                        {sve && <p style={{ color: 'red' }}>Morate uneti sva polja</p>}
                        {nema && <p style={{ color: 'red' }}>Uneti podaci nisu tacni</p>}
                        <input type='text' autoCorrect='none' autoComplete='none' placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
                        <input type='password' autoCorrect='none' autoComplete='none' placeholder='password' value={pass} onChange={(e) => setpass(e.target.value)} />
                        <Button type='button' onClick={() => proveri()}>Potvrdi</Button>
                    </Form1>
                </Login1>}
        </div>
    )
}

export async function getServerSideProps() {
    const products = await fetch('https://shop-1hgk.vercel.app/api/products')
    const porudzbine = await fetch('https://shop-1hgk.vercel.app/api/porudzbine')
    return {
        props: { products: await products.json(), porudzbine: await porudzbine.json() }
    }
}

export default Admin