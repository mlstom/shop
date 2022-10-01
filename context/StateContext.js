import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showMenu, setshowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [products, setproducts] = useState()

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [kat, setkat] = useState([])
  const [grupe, setgrupe] = useState([])
  const [top, settop] = useState(false)

  let foundProduct;
  let index

  const onAdd = (product, quantity,velicina) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id && item.velicina == product?.velicina);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.cena * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        cartProduct.quantity = quantity
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
        } else {
          return { ...cartProduct }
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity
      product.quantity = quantity;
      product.velicina = velicina

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product.naziv} Dodato u korpu.`);
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
   
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.cena * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id)
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.cena)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.cena)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }


  return (
    <Context.Provider
      value={{
        showMenu,
        setshowMenu,
        showCart,
        setShowCart,
        products,
        setproducts,
        cartItems,
        totalPrice,
        totalQuantities,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        qty,
        setQty,
        top,
        settop
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);