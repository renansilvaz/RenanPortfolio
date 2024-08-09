import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconAnimate = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

export default function Tecnologias(){
    return(
        <div className="border-b border-neutral-700 pb-24">
            <h2 className="my-20 text-center  text-4xl">Tecnologias mais utilizadas</h2>
            <motion.div 
            whileInView={{opacity: 1, x: 0}} 
            initial={{opacity: 0, x: -100}}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconAnimate(1.3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500"/>
                </motion.div>

                <motion.div 
                variants={iconAnimate(1.6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-700"/>
                </motion.div>

                <motion.div 
                variants={iconAnimate(1.9)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className="text-7xl text-blue-700"/>
                </motion.div>

                <motion.div 
                variants={iconAnimate(2.2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-green-600"/>
                </motion.div>

                <motion.div 
                variants={iconAnimate(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                variants={iconAnimate(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoFirebase className="text-7xl text-orange-400"/>
                </motion.div>

                <motion.div 
                variants={iconAnimate(3.1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </motion.div>
            </motion.div>
        </div>
    )
}