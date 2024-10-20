import React,{useState} from "react";
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Main from '../components/Main.jsx'
import Header from '../components/Header.jsx'
import HowToBuy from '../components/HowToBuy.jsx'
import FAQ from '../components/FAQ.jsx'
import Advantages from '../components/Advantages.jsx'
import Tokenomics from '../components/Tokenomics.jsx'

export default function Home(){
    return (
        <>
        <Nav/>
        <div className="contentt">
            <Header/>
            <Main/>
            <Advantages/>
            
            <HowToBuy/>
            <FAQ/>
        </div>
    

        <Footer/>
        </>
    )
}