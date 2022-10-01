import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utilis';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper" style={{minHeight:'100vh'}}>
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Hvala na kupovini!</h2>
        <p className="email-msg">Proverite mejl u toku dana.</p>
        <p className="description">
          Ako imate pitanja, pitajte nas
          <a className="email" href="mailto:info@inkrist.net">
              info@inkrist.net
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn joj">
            Nastavite kupovinu
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success