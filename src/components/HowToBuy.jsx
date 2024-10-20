import React, { useEffect, useState } from "react";
import '../styles/HowToBuy.scss';
import plate from '../assets/nameplate.png'
import bg from '../assets/bg.png'
export default function HowToBuy(){
    const [screenSize,setScreenSize] = useState(window.innerWidth);
    const [heightIssue,setHeightIssue] = useState(window.innerWidth < 1140 && window.innerHeight < 1180 ? true : false) // if true should be bg through css if false through image

    useEffect(() => {
        function handleChange(){
            setScreenSize(window.innerWidth)
            setHeightIssue(window.innerWidth < 1140 && window.innerHeight < 1180 ? true : false)
        }

   

        window.addEventListener('resize', handleChange); 
        return () => window.removeEventListener('resize', handleChange);
    },[])
    console.log(heightIssue)
    return (
        <>
            <div className={`how__to__buy  ${heightIssue ? 'heightIssue' : ''}` } id="htb">
                {screenSize >= 541 && !heightIssue && <img src={bg} alt="" className="bgi"  />  }
                <h3 className=" text-6xl max-sm:text-4xl max-xs:text-3xl uppercase flex justify-center pb-20 buy__title title "> <span className="sup sup_txt4">How to buy?</span></h3>
                <div className="plates flex justify-center grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 justify-items-center  items-center">
                    <div className="plate ">
                
                        <div className="text__block">
                            <p className="text-lg title font-bold text-white Montserrat block__title ">Step 1: Set Up a Solana Wallet</p>
                            <p className="plain__text  font-medium">                         Visit the official website of Phantom wallet, follow the instructions to install it, and create an account.
When you create a wallet, you’ll be given a seed phrase. This is your backup key, so store it securely.
            </p>

                        </div>
                    </div>
                    <div className="plate">
                       
                        <div className="text__block">
                            <p className="text-lg title font-bold text-white Montserrat block__title">Step 2: Buy Solana</p>
                            <p className="plain__text font-medium"> need SOL to buy tokens. Sign up for a cryptocurrency exchange where you can buy SOL, such as:Binance, Coinbase, Bybit. After buying SOL withdraw it to the wallet you set up in previous step.

            </p>

                        </div>
                       
                    </div>
                    <div className="plate">
                
                        <div className="text__block">
                            <p className="text-lg title font-bold text-white Montserrat block__title">Step 3: Connect Your Wallet to a DEX</p>
                            <p className="plain__text  font-medium">Popular Solana DEXs include: Raydium, Jupiter.
Connect Your Wallet: Click on the “Connect Wallet” button on the DEX’s website and select your wallet. 
            </p>

                        </div>
                       
                    </div>
                    <div className="plate">
              
                        <div className="text__block">
                            <p className="text-lg title font-bold text-white Montserrat block__title">Step 4: Find and Buy the $BJORN Token</p>
                            <p className="plain__text font-medium">  Search for the Token: Use DEX to find token via CA - <span className="underline ca"> FoTGRd5Q4uqoUqmXiePquqPiy5jmUAftKV1aDxHSpump</span>  Swap SOL for Meme Token: Enter the SOL amount, press swap, and confirm the transaction in your wallet.


            </p>

                        </div>
                       
                    </div>

                </div>
            </div>
        
        </>
    )
}