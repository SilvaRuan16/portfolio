"use client";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Image from "next/image";
import Screen from "./components/Screen";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <Header/>
      <Screen className="flex-col bg-white">
        <div className="text-center p-3 mt-2.5 md:p-10 md:translate-y-5">
          <h1 className="text-xl">Olá! Seja muito bem-vindo ao meu portfólio.</h1>
        </div>
        <div className="text-center p-3 mt-2.5 md:p-10 md:mt-0">
          <p className="text-md mt-2 text-justify md:text-center">
            Aqui você poderá conhecer um pouco mais sobre mim, minha trajetória e a área na qual estou buscando especialização. <br /><br /> Também apresento alguns dos projetos que venho desenvolvendo como forma de aprimorar minhas habilidades técnicas e me familiarizar com rotinas, desafios e demandas reais do dia a dia profissional. <br /><br /> Fique à vontade para explorar e, se quiser trocar uma ideia, será um prazer conversar!
          </p>
        </div>
        <div className="hidden md:block text-center p-3 mt-2.5 md:p-10 md:mt-0 md:flex md:flex-row gap-2 items-center justify-center">
          <Image
            className="shadow-sm rounded-sm"
            src={"/apresentação1.jpeg"}
            alt="Imagem de apresentação 1"
            width={200}
            height={200}
          />
          <Image
            className="shadow-sm rounded-sm"
            src={"/apresentação2.jpeg"}
            alt="Imagem de apresentação 1"
            width={200}
            height={200}
          />
        </div>
      </Screen>
      <Footer/>
    </Container>
  )
}