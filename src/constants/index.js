import devBurger from "../assets/projects/devBurguer.png"
import devCurrency from "../assets/projects/devCurrency.png"
import devLinks from "../assets/projects/devLinks.png"

export const SOBRE_MIM1 = "Tenho 25 anos, resido em São Paulo, sou um desenvolvedor Fullstack dedicado e versátil, apaixonado por criar aplicações web eficientes e fáceis de usar. Com experiência em projetos pessoais, trabalhei com diversas tecnologias, incluindo React, Typescript, Node.js, Firebase e Tailwind CSS."
export const SOBRE_MIM2 = "Minha jornada no desenvolvimento web começou com uma profunda curiosidade sobre como as coisas funcionam e evoluiu para uma jornada onde me esforço continuamente para aprender e me adaptar a novos desafios."
export const SOBRE_MIM3 = "Eu prospero em ambientes colaborativos e gosto de resolver problemas para entregar soluções de alta qualidade."
export const SOBRE_MIM4 = "Fora da programação, gosto de permanecer ativo, explorar novas tecnologias e contribuir para projetos de código aberto."

export const PROJECTS = [
    {
      title: "DevBurguer",
      image: devBurger,
      description:
        "DevBurguer com Integração de pedidos WhatsApp! Uma hamburgueria digital desenvolvida com HTML, Tailwind CSS e JavaScript, com uma integração prática para pedidos pelo WhatsApp! 🍔",
      technologies: ["HTML", "TailwindCSS", "Javascript"],
      link: "https://dev-burguer-beta.vercel.app/"
    },
    {
      title: "DevCurrency",
      image: devCurrency,
      description:
        "Uma aplicação que consome uma API de criptomoedas, trazendo sempre uma lista com informações precisas e atualizadas.",
      technologies: ["HTML", "CSS", "React", "Typescript"],
      link: "https://dev-currency-five.vercel.app/"
    },
    {
      title: "DevLinks",
      image: devLinks,
      description:
        "Um site pessoal com links úteis para quem quiser saber mais sobre mim.",
      technologies: ["HTML", "TailwindCSS", "React", "Typescript"],
      link: "https://dev-link-six.vercel.app/"
    },
]
