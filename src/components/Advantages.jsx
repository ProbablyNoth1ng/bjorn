import React from "react";
import '../styles/Advantages.scss'
import frt from '../assets/rrr.png'
import sec from '../assets/xx.png'
import trd from '../assets/hon.png'
import prd from '../assets/prd.svg'


import sol from '../assets/solana-sol-logo.svg'
import chain from '../assets/ch3.png'
import TickerLine from '../components/TickerLine.jsx'
import line from '../assets/bottom.svg'
export default function Advantages(){
    return (
        <>
            <div className="advantages  vivify animationObject popInLeft">
                <img src={line} alt="" className="bottom" />

                <div className="container mx-auto ">
                    <h3 className=" text-6xl max-lg:text-5xl max-sm:text-2xl flex justify-center text-center title  relative sugar "> <span className="sup_txt2 sup"> RISE AS ONE, WIN AS ALL</span></h3>
                    <div className="cards grid grid-cols-2 max-xl:grid-cols-1 gap-20 content-center">
                    <div className="card p-10 col-span-2 max-xl:col-span-1">
                            <h4 className="card__title font-medium text-5xl flex justify-center text-black tracking-wide text-center Montserrat">
                            Bonded in success
                            </h4>
                            <img src={frt} alt=""  className="card__image py-10 flex justify-center mx-auto"/>
                            <p className="card__text text-center tracking-wide  text-black font-medium text-2xl">With BjornCoin, the bear crew navigates together through market storms, turning challenges into life-time prospects.</p>
                        </div>
                        <div className="card p-10">
                            <h4 className="card__title font-medium text-5xl flex justify-center text-black tracking-wide text-center Montserrat">
                            Clan first, always
                            </h4>
                            <img src={sec} alt=""  className="card__image xx py-10 flex justify-center mx-auto"/>
                            <p className="card__text text-center tracking-wide text-black font-medium  text-2xl">BjornCoin’s ethos is community-centric, ensuring that every bear can benefit from mutual experience and celebrate their foresight.</p>
                        </div>
                    <div className="card p-10      justify-center">
                            <h4 className="card__title font-medium text-5xl flex justify-center text-black tracking-wide text-center Montserrat">
                            Rewards beyond expectations
                            </h4>
                            <img src={trd} alt=""  className="card__image py-10 flex justify-center mx-auto"/>
                            <p className="card__text text-center tracking-wide text-black font-medium  text-2xl">BjornCoin keeps the excitement alive with surprise bonuses for the loyal bear pack.</p>
                        </div>
                       
                        
                       
                    </div>


                   
                </div>
                {/* <TickerLine/> */}

<div className="powered">
        <h3 className="title text-7xl max-md:text-6xl max-sm:text-4xl max-xs:text-3xl flex justify-center py-20 uppercase "> <span className="sup sup_txt3">Powered by</span>

         
        </h3>
        <div className="powered__inner  mx-auto">
            <img src={prd} alt="" className="prd__img"/>
            <img src={chain} alt="" className="chain" />
            <div className="powered__text text-5xl "><img src={sol} alt="" className="sol" /> <span className="txt font-bold ">Solana</span></div>
            
        </div>
    

</div>
            </div>
        
        </>
    )
}