"use client";

import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Screen from "@/app/components/Screen";

export default function Projetos() {
  return (
    <Container className="flex flex-col">
      <Header/>
      <Screen className="flex-col bg-white">
        <div className="w-full h-[100px] flex justify-center items-center">
          <h1 className="text-xl">Projetos</h1>
        </div>
        <ul className="w-full p-3 flex flex-wrap justify-evenly">
          <li className="w-[400px] h-[500px] bg-blue-100 m-2 p-3 flex flex-col justify-between items-center shadow-sm rounded-md">
            <div>Titulo</div>
            <div>Conteúdo</div>
            <div>Status</div>
          </li>
          <li className="w-[400px] h-[500px] bg-blue-100 m-2 p-3 flex flex-col justify-between items-center shadow-sm rounded-md">
            <div>Titulo</div>
            <div>Conteúdo</div>
            <div>Status</div>
          </li>
          <li className="w-[400px] h-[500px] bg-blue-100 m-2 p-3 flex flex-col justify-between items-center shadow-sm rounded-md">
            <div>Titulo</div>
            <div>Conteúdo</div>
            <div>Status</div>
          </li>
        </ul>
      </Screen>
      <Footer/>
    </Container>
  );
}