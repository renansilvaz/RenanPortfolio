import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";

export default function(){
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                <b className="text-3xl">RS</b>
            </div>

            <div className="flex gap-5 items-center justify-center m-8">
                <a href="https://www.linkedin.com/in/renan-santos-js" target="_blank"><FaLinkedin size={35}/></a>
                <a href="https://github.com/renansilvaz" target="_blank"><FaGithub size={35}/></a>
                <a href="https://www.instagram.com/renan_silvaz" target="_blank"><FaInstagram size={35}/></a>
            </div>
        </nav>
    )
}