import React,{useEffect, useState, } from "react";
import { motion,useAnimation  } from "framer-motion"
import '../styles/Main.scss'
import ph1 from '../assets/a1.webp'
import ph2 from '../assets/a2.webp'
import ph3 from '../assets/a3.webp'
import line from '../assets/bottomLeft.svg'
import vec from '../assets/Vector 30.png'

export default function Main(){
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = React.useState(false);
    useEffect(() => {
      if (hasAnimated) {
        controls.start({ opacity: 1 });
      }
    }, [controls, hasAnimated]);
    return (
        <>
        
        <main className="main" id="about">
        
            <img src={line} alt="" className="main__line"/>
            <div className="container mx-auto max-xl:px-10">
                <h3 className="flex justify-center mx-auto text-center text-5xl max-lg:text-4xl max-md:text-xl max-sm:text-lg max-xs:text-md uppercase title line__for__title sup"> <span className="sup sup_txt">BJORN IS ALL ABOUT SHARED HIGHS</span>                  </h3>
        
                <p className="text-3xl max-md:text-2xl flex justify-center pt-10 tracking-wide text-center">BjornCoin is a heartfelt call to those who value community and joint growth in a sometimes cold crypto landscape. Inspired by Bjorn, the curious bear who once found the joy of discovery in unity, it invites everyone to embark on an adventure where every step forward is made hand in paw and every success is celebrated together.
                </p>
            

                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{controls}}
                transition={{ duration: 1, ease: "easeInOut" }}

                whileInView={{ opacity: 1, scale: 1  }}
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    // transition={ {duration: 1} }

                    viewport={{ once: true, amount: 0.1 }}
        >
                <div className="block flex justify-evenly items-center pt-20 max-xl:flex-col-reverse">
                    <p className="text-3xl block__text max-lg:text-xl max-md:text-lg  max-xl:text-center">Bjorn had an insatiable curiosity for cryptocurrency that kept him awake even when the other bears settled in for their winter slumber. As the market grew still, Bjorn stayed deeply focused and finally spotted an opportunity – the new promising coin he named after himself. </p>
                    <img src={ph1} alt="image" className="block__image ml-5 max-xl:my-10 max-xl:ml-0"/>
                </div>
            </motion.div> 

            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{controls}}
                transition={{ duration: 1, ease: "easeInOut" }}

                whileInView={{ opacity: 1, scale: 1  }}
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    // transition={ {duration: 1} }

                    viewport={{ once: true, amount: 0.1 }}
        >
                <div className="block flex justify-evenly items-center pt-20 max-xl:flex-col">
                    <img src={ph2} alt="image" className="block__image mr-5 max-xl:my-10 max-xl:ml-0"/>
                    <p className="text-3xl block__text max-lg:text-xl max-md:text-lg  max-xl:text-center">
                    But Bjorn never prioritized personal gains. Driven by a genuine belief that true value lies in sharing, he decided to wake his fellow bears and turn his solitary discovery into a collective journey toward much more prosperity and fun.

</p>
                    
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{controls}}
                transition={{ duration: 1, ease: "easeInOut" }}

                whileInView={{ opacity: 1, scale: 1  }}
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    // transition={ {duration: 1} }

                    viewport={{ once: true, amount: 0.1 }}
                    >
                <div className="block flex justify-evenly items-center py-20 max-xl:flex-col-reverse">
                    <p className="text-3xl block__text max-lg:text-xl max-md:text-lg  max-xl:text-center">Now, with the newfound purpose, Bjorn aims to transform his home forest into a lively and thriving community. Whether it’s for the profits, the laughs, or the sense of belonging, BjornCoin keeps the rewards flowing and guarantees a good time in any market climate.
                    </p>
                    <img src={ph3} alt="image" className="block__image ml-5 max-xl:my-10 max-xl:ml-0"/>
                </div>
                </motion.div>


            </div>
     



           


  


        </main>
       
        </>
    )
}