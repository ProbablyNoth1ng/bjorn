import React from "react";
import '../styles/Tokenomics.scss'

import img from '../assets/com.webp'

export default function Tokenomics(){
    return(
        <>  
            <div className="tokenomics ">
                <h3 className="title text-6xl flex justify-center">Tokenomics</h3>
               
                <div className="tokenomics__inner container mx-auto pt-3">
                <p className="text-center flex justify-center text-2xl">tokenomics info tokenomics infotokenomics tokenomics infotokenomics infotokenomics infotokenomics info tokenomics infotokenomics infotokenomics info tokenomics infotokenomics infoinfotokenomics infotokenomics infotokenomics infotokenomics infotokenomics infotokenomics infotokenomics infotokenomics infotokenomics infotokenomics infotokenomics info</p>
                
                    <div className="graf">
                        <div class="circle-container">
                            <div class="outer-ring">
                                <div class="inner-ring">
                                    <img src={img} alt="" className="circle__img" />
                                </div>
                            </div>
                        </div>
                        <div className="circle__lt circle  uppercase text-center items-center flex">
                            <p className="text__inside__circle font-bold text-2xl">community <br/> 25%</p>
                        </div>
                        <div className="circle__lb circle uppercase">
                            <p className="text__inside__circle font-bold text-2xl">community <br/> 25%</p>
                        </div>
                        <div className="circle__rt circle uppercase">
                            <p className="text__inside__circle font-bold text-2xl">community <br/> 25%</p>
                        </div>
                        <div className="circle__rb circle uppercase">
                            <p className="text__inside__circle font-bold text-2xl">community <br/> 25%</p>
                        </div>
                    </div>
                
                </div>
               
            </div>
        
        </>
    )
}