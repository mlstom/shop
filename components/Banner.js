import React from 'react'
import Image from 'next/image'
import baner from '../assets/img/hero/hero-2.jpg'
const Banner = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <div className="banner" style={{marginBottom:'-50px'}}>
                <div className="line">
                    <span>Company</span>
                </div>
            </div>

            <div className="box" style={{display:'flex',justifyContent:'center',width:'100vw',overflow:'hidden'}}>
                <div className="content" style={{display:'flex',justifyContent:'center',width:'100vw', alignItems:'center'}} >
                    <Image src={baner}  layout='fill' alt="Italy / Urban / Street / City" />
                        <div className="text1">Misli kao bogati i bices bogat</div>
                        <div className="text2">Budi u korak sa vremenom bogatih</div>
                </div>
            </div>
        </div>
    )
}

export default Banner