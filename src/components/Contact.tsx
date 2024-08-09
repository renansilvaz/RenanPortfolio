import React from "react";

export default function Contact(){
    return(
        <div className="border-b border-neutral-700 pb-20">
            <h1 className="my-10 text-center text-4xl">Entre em contato comigo</h1>

            <section className="flex items-center justify-center">
                <form className="flex flex-col">
                    <label className="mb-1">Nome</label>
                    <input
                        required
                        className="rounded-lg py-1 px-2 text-neutral-800 outline-none w-96 focus:bg-slate-300" 
                        type="text"
                        placeholder="Informe seu nome..." />

                    <label className="mt-4 mb-1">E-mail</label>
                    <input
                        required
                        className="rounded-lg py-1 px-2 text-neutral-800 outline-none focus:bg-slate-300" 
                        type="email"
                        placeholder="Informe seu e-mail..." />

                    <label className="mt-4 mb-1">Mensagem</label>
                    <textarea required placeholder="Sua mensagem..." 
                              name="" id="" 
                              className="py-1 px-2 text-neutral-800 outline-none h-32 rounded-lg focus:bg-slate-300"></textarea>

                    <button type="submit" className="mt-2 rounded py-1 bg-purple-900">
                        Enviar
                    </button>
                </form>
        
            </section>
        </div>
    )
}
