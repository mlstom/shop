import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
  const [showMenu, setshowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [products, setproducts] = useState()
  
  return (
    <Context.Provider
      value={{
       showMenu,
       setshowMenu,
       showCart,
       setShowCart,
       products,
       setproducts
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);