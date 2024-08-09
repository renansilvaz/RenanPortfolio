import React from "react";
import profilePic from "../assets/Profile.jpg"
import { motion } from "framer-motion";

export default function Hero(){
    return(
        <div className="border-b border-neutral-700 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        
                        <motion.h1 
                            initial={{ x: -100, opacity: 0 }}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                            className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Renan Santos
                        </motion.h1>

                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.3}} 
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                            bg-clip-text text-transparent text-4xl tracking-tight ml-1">
                            Desenvolvedor Fullstack
                        </motion.span>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.6}} 
                            className="ml-1 mb-2 max-w-xl py-6 font-light tracking-tighter">
                            Desenvolvedor Fullstack Júnior focado em criar interfaces de usuário intuitivas e 
                            responsivas, em especial utilizando TypeScript e React. Com experiência prática 
                            em projetos pessoais, que envolvem a construção de aplicações web, utilizando as 
                            mais recentes tecnologias e melhores práticas de desenvolvimento.
                        </motion.p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.9}}
                            className="h-96 rounded-3xl object-contain sm:rounded-full" 
                            src={profilePic} alt="Profile pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}