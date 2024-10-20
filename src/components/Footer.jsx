import React,{ useState, useEffect } from 'react'
import '../styles/Footer.scss'
import dsc from '../assets/dexscreener.png'


export default function Footer(){
    return (
        <>
        <footer className="footer  py-10 ">
            <div className="footer__inner  mx-auto container text-xl">
                <div className="layer__one flex justify-center mx-auto max-sm:flex-col ">
                 
            
                    <a href='https://x.com/bjorn_solana_'  className='flex items-center px-5 link text-3xl  max-sm:py-2  uppercase font-medium'>
                        <i class="fa-brands fa-x-twitter  text-4xl "></i>
                            twitter
                        </a>
                        <a href='https://dexscreener.com/solana/FoTGRd5Q4uqoUqmXiePquqPiy5jmUAftKV1aDxHSpump' className='flex items-center px-5 link text-3xl  max-sm:py-2  uppercase font-medium'>
                            <img src={dsc} alt=""  className='footer__icon '/>
                        Dexscreener
                    </a>
                        <a href='https://t.me/bjorn_solana' className='flex items-center px-5 link  text-3xl max-sm:py-2  uppercase font-medium'>
                        <i class="fa-brands fa-telegram  text-4xl "></i>
                            telegram
                        </a>

                </div>
           

          
                
            </div>
            
        </footer>
        </>
    )
}