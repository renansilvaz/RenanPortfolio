import React from "react";

export default function Footer(){
    return(
        <footer className=" border-neutral-700">
            <div 
            className="w-full mx-auto gap-1 max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
                <div className="flex items-center justify-center gap-1">
                    <h1 className="text-sm max-sm:text-xs">
                        Feito por Renan Santos © - Todos os direitos reservados. 2024
                    </h1>
                </div>
            </div>
        </footer>
    )
}