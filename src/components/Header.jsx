import React from "react";
import '../styles/Header.scss';
// import img from '../assets/s6.png'
import onPepe from '../assets/onPepe.webp'
import back from '../assets/landscape.jpeg'

export default function Header(){
    return (
        <>
        <header className="header ">
            <img src={back} alt="" className="back" />
            <div className="header__inner container  items-center mx-auto flex justify-center max-lg:flex-col-reverse ">
                <div className="image__wrapper flex justify-center ">
                    <p className="uppercase text-6xl font-bold hero max-lg:text-4xl max-md:text-3xl max-xs:text-xl title Montserrat shad">AWAKE TO OPPORTUNITIES</p>
                    <img src={onPepe} alt="" className="header__img" />
                    <div className="desc__container text-xl max-sm:text-sm">
                    From Viral Sensation to Meme Icon. CA - <span className="ca text-xl max-md:text-sm max-sm:text-xs">FoTGRd5Q4uqoUqmXiePquqPiy5jmUAftKV1aDxHSpump</span> 
                    </div>
                </div>
                
 
                <p className="title header__text text-6xl max-xl:text-5xl max-lg:text-5xl max-lg:pb-20 max-md:text-4xl max-sm:text-3xl font-bold uppercase  Montserrat shad">SLEEP THROUGH MARKET LOWS? NOT 
 <span className="text-yellow-400 tt">$BJORN!</span></p>
            </div>
            
        </header>
           
        </>
    )
 }