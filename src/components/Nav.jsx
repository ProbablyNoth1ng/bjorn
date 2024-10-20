import React,{ useState, useEffect } from 'react'
import '../styles/Nav.scss'
import logo from '../assets/logo.webp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export default function Nav(){
    const [width, setWidth] = useState(window.innerWidth);
    const [clicked,setClicked] = useState(false) 
    const [isInitialRender, setIsInitialRender] = useState(true);

 
   
    useEffect(() => {
        function handleResize(){
            setWidth(window.innerWidth)
            console.log(window.innerWidth)
        }


        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize);
    },[])

    function updateMenu(){
        setClicked(!clicked)
    }

    useEffect(() => {
       
        if (isInitialRender) {
            setTimeout(() => {
                setIsInitialRender(false);
            }, 1000); 
        }
    }, [isInitialRender]);
    return (
        <>

        {width > 992 ? 
        



        <nav className='nav  flex justify-center py-5 mx-auto items-center ' >
            <div className=" nav__inner">
                    <div className="logo">
                    <Link to="/" className='pointer'> <img src={logo} alt="logo"  className='logo'/>   </Link>
                    </div>
                
                    <ul className='links flex'>
                            
                            <li className={`link text-2xl font-bold uppercase px-3 ${!isInitialRender ? '' : "anim" }`}> <Link to="/">Home </Link></li>
                            <li className={`link text-2xl font-bold uppercase px-3 ${!isInitialRender ? '' : "anim" }`}> <HashLink smooth to="/#about">How to buy</HashLink></li>
                            <li className={`link text-2xl font-bold uppercase px-3 ${!isInitialRender ? '' : "anim" }`}> <HashLink smooth to="/#htb">How to buy</HashLink></li>
                            <li className={`link text-2xl font-bold uppercase px-3 ${!isInitialRender ? '' : "anim" }`}>  <HashLink smooth to="/#faq">Faq</HashLink></li>
                            <li className={`link text-2xl font-bold uppercase px-3 ${!isInitialRender ? '' : "anim" }`}> <Link to="/Whitepaper">Lore </Link></li>
                            <li className={`link text-2xl font-bold uppercase px-3 ${!isInitialRender ? '' : "anim" }`}> <a href="https://raydium.io/swap/?inputMint=sol&outputMint=FoTGRd5Q4uqoUqmXiePquqPiy5jmUAftKV1aDxHSpump">Buy</a></li>
                    </ul>

                    <div className="socials">
                        <a href="https://x.com/bjorn_solana_" className=''>  <i class="fa-brands fa-x-twitter text-2xl px-2"></i></a>
                        <a href="https://t.me/bjorn_solana" className=''> <i class="fa-brands fa-telegram text-2xl px-2"></i></a>
                        {/* <a href="" className=''> <i class="fa-brands fa-instagram text-2xl px-2"></i></a> */}
                       
                        
                        
                    </div>
            </div>

        </nav> 

        :  
        <>
         <div className={` bg `}>
         <nav className='nav  flex justify-between  mx-auto items-center' >
                    <div className=" nav__inner">
                            <div className="logo">
                            <Link to="/" className='pointer'> <img src={logo} alt="logo"  className='logo'/>   </Link>
                        </div>
                    

                        <div className={`links__body ${clicked ? 'opened' : ''}`}>
                            <ul className='links flex '>
                                    <li className='link  font-bold uppercase px-3 link text-8xl max-md:text-7xl max-sm:text-5xl max-xs:text-4xl ' onClick={updateMenu}> <Link to="/">Home </Link></li>
                                    <li className={`link font-bold uppercase px-3 link text-8xl max-md:text-7xl max-sm:text-5xl max-xs:text-4xl ${!isInitialRender ? '' : "anim" }`} onClick={updateMenu}>  <HashLink smooth to="/#about">How to buy</HashLink></li>
                                    <li className={`link font-bold uppercase px-3 link text-8xl max-md:text-7xl max-sm:text-5xl max-xs:text-4xl ${!isInitialRender ? '' : "anim" }`} onClick={updateMenu}> <HashLink smooth to="/#htb">How to buy</HashLink></li>
                                    <li className={`link font-bold uppercase px-3 link text-8xl max-md:text-7xl max-sm:text-5xl max-xs:text-4xl ${!isInitialRender ? '' : "anim" }`} onClick={updateMenu}>  <HashLink smooth to="/#faq">Faq</HashLink></li>
                                    <li className={`link font-bold uppercase px-3 link text-8xl max-md:text-7xl max-sm:text-5xl max-xs:text-4xl ${!isInitialRender ? '' : "anim" }`} onClick={updateMenu}> <Link to="/Whitepaper">Lore </Link></li>
                                    <li className={`link font-bold uppercase px-3 link text-8xl max-md:text-7xl max-sm:text-5xl max-xs:text-4xl ${!isInitialRender ? '' : "anim" }`} onClick={updateMenu}> <a href="https://raydium.io/swap/?inputMint=sol&outputMint=FoTGRd5Q4uqoUqmXiePquqPiy5jmUAftKV1aDxHSpump">Buy</a> </li>
                            </ul>
                        </div>
       

                        <div className={`burger_Menu ${clicked ? 'opened' : ''}` } onClick={updateMenu}>
                            <span></span>
                        </div>
                    </div>
                
            </nav> 
               </div>
  
        </>       
        }

        </>
    )
}