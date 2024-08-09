import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects(){
    return(
        <div className="border-b border-neutral-700 pb-24">
            <h2 className="my-20 text-center text-4xl">Meus Projetos</h2>

            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{duration: 0.8}} 
                    key={index} 
                    className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                width={250} height={250} 
                                className="mb-6 rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-2xl md:text-3xl">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    className="mr-2 rounded bg-neutral-900 
                                               px-2 py-1 text-sm font-medium text-purple-700"
                                    key={index}>
                                        {tech}
                                </span>
                            ))}
                            <a 
                                target="_blank"
                                href={project.link}>
                                    Link do projeto
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}