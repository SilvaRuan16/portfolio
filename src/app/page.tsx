"use client";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <Header/>
      <main className="min-h-[600px] sm:h-auto md:h-[800px] bg-white flex flex-col">
        <div className="text-center p-3 mt-2.5 md:p-10 md:translate-y-5">
          <h1 className="text-xl">Olá! Seja muito bem-vindo ao meu portfólio.</h1>
        </div>
        <div className="text-center p-3 mt-2.5 md:p-10 md:mt-0">
          <p className="text-md mt-2 text-justify">
            Aqui você poderá conhecer um pouco mais sobre mim, minha trajetória e a área na qual estou buscando especialização. <br /><br /> Também apresento alguns dos projetos que venho desenvolvendo como forma de aprimorar minhas habilidades técnicas e me familiarizar com rotinas, desafios e demandas reais do dia a dia profissional. <br /><br /> Fique à vontade para explorar e, se quiser trocar uma ideia, será um prazer conversar!
          </p>
        </div>
        <div className="hidden md:block text-center p-3 mt-2.5 md:p-10 md:mt-0 md:flex md:flex-row gap-2 items-center justify-center">
          <div className="w-[200px] h-[200px] bg-red-300 shadow-sm"></div>
          <div className="w-[200px] h-[200px] bg-red-300 shadow-sm"></div>
          <div className="w-[200px] h-[200px] bg-red-300 shadow-sm"></div>
        </div>
      </main>
      <Footer/>
    </Container>
  )
}