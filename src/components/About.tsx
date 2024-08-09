import React from "react";
import aboutPic from "../assets/developer.jpg"
import { SOBRE_MIM1 } from "../constants";
import { SOBRE_MIM2 } from "../constants";
import { SOBRE_MIM3 } from "../constants";
import { SOBRE_MIM4 } from "../constants";
import { motion } from "framer-motion";

export default function About(){
    return(
        <div className="border-b border-neutral-700 pb-4">
            <h1 className="mt-14 mb-5 text-center text-4xl">
                Sobre mim
            </h1>
            
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{duration: 0.8}} 
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            className="h-96 rounded-3xl" 
                            src={aboutPic} 
                            alt="Sobre mim" />
                    </div>
                    </motion.div>
                    
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{duration: 0.8}} 
                    className="w-full lg:w-1/2">
                       <div className="flex justify-center lg:justify-start">
                           <div className="flex flex-col mt-2">
                            <p className="my-2 max-w-xl">{SOBRE_MIM1}</p>
                            <p className="my-2 max-w-xl">{SOBRE_MIM2}</p>
                            <p className="my-2 max-w-xl">{SOBRE_MIM3}</p>
                            <p className="my-2 max-w-xl pb-6">{SOBRE_MIM4}</p>
                            </div>
                        </div> 
                </motion.div>
            </div>
        </div>
    )
}