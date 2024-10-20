import React,{useState,useEffect} from "react";
import '../styles/FAQ.scss'

import faq from '../assets/faq.webp'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };


  
export default function FAQ(){
    const [open, setOpen] = React.useState(1);
    
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
       <div className="faq " id="faq">
        
       <h3 className="text-8xl flex justify-center pb-10 title "> <span className="sup sup_txt5">FAQ</span></h3>
       
        <div className="accordion__block container flex mx-auto items-center max-xl:flex-col  ">
            <img src={faq} alt="" className="accordion__image max-sm:mb-10" />

            <div className="accordion px-3">
                <Accordion animate={CUSTOM_ANIMATION} open={open === 1} className="mb-2 rounded-xl  border-orange-600 bb px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors !text-white ${
                        open === 1 ? "text-red-300 hover:!text-blue-400" : ""
                    }`}
                    >
                    Who is Bjorn?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base text-white font-normal">
                    Bjorn is a tenacious bear with a knack for uncovering hidden crypto treasures. While his fellow bears hibernate through the harsh crypto winter, Bjorn dives deeper into the forest of charts and trends and discovers BjornCoin, a gem promising wealth for all. With an unyielding spirit and a heart set on community, he awakens the slumbering bears to transform market lows into collective gains for shared prosperity.

                    </AccordionBody>
        
                </Accordion>
                <Accordion animate={CUSTOM_ANIMATION} open={open === 2} className="mb-2 rounded-xl  border-orange-600 bb px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors !text-white ${
                        open === 2 ? "text-red-300 hover:!text-blue-400" : ""
                    }`}
                    >
                    Why buy $BJORN?

                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base text-white font-normal">
                    
                    If you missed out on the last big coin or want to be part of a community that thrives together through every market wave, then $BJORN is your chance. When others panic in market dips, Bjorn and his pack see opportunity and look forward with a big bear grin. Bjorn always has something special for his crew: with a buzzing community full of AMAs, meme contests, and airdrops, $BJORN makes investing even more exciting and engaging. 


                    </AccordionBody>
        
                </Accordion>
                <Accordion animate={CUSTOM_ANIMATION} open={open === 3} className="mb-2 rounded-xl  border-orange-600 bb px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`border-b-0 transition-colors !text-white ${
                        open === 3 ? "text-red-300 hover:!text-blue-400" : ""
                    }`}
                    >
                    What blockchain is $BJORN on?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base text-white font-normal">
                    $BJORN is a bear-themed cryptocurrency built on the Solana blockchain.

                    </AccordionBody>
        
                </Accordion>

                <Accordion animate={CUSTOM_ANIMATION} open={open === 4} className="mb-2 rounded-xl  border-orange-600 bb px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className={`border-b-0 transition-colors !text-white ${
                        open === 4 ? "text-red-300 hover:!text-blue-400" : ""
                    }`}
                    >
                   What is the $BJORN contract address?




                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base text-white font-normal">
                    The token contact address can be found <a href="https://t.me/bjorn_solana" className="underline text-blue-600">here</a>.

                    </AccordionBody>
        
                </Accordion>


                <Accordion animate={CUSTOM_ANIMATION} open={open === 5} className="mb-2 rounded-xl  border-orange-600 bb px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className={`border-b-0 transition-colors !text-white ${
                        open === 5 ? "text-red-300 hover:!text-blue-400" : ""
                    }`}
                    >
                    When will $BJORN be listed on exchanges?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base text-white font-normal">
                    The exact dates and the list of exchanges will be announced soon. 

                    </AccordionBody>
        
                </Accordion>

                <Accordion animate={CUSTOM_ANIMATION} open={open === 6} className="mb-2 rounded-xl  border-orange-600 bb px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(6)}
                    className={`border-b-0 transition-colors !text-white ${
                        open === 6 ? "text-red-300 hover:!text-blue-400" : ""
                    }`}
                    >
                   How can I join Bjorn’s close-knit clan?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base text-white font-normal">
                    It’s easy as is: follow Bjorn on social media, including <a href="" className="text-blue-400 underline">X</a> and <a href="" className="text-blue-400 underline">Telegram</a>, and connect with like-minded individuals who are hungry for new acquaintances, fresh memes, and bigger profits!

                    </AccordionBody>
        
                </Accordion>
            </div>


        </div>
       
 
       </div>

        </>
    )
}