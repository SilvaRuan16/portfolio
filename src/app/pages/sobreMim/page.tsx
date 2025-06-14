"use client";

import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Screen from "@/app/components/Screen";

export default function SobreMim() {
  return (
    <Container>
      <Header />
      <Screen className="flex-col bg-white">
        <div className="text-center p-3 mt-2.5 md:p-10 md:translate-y-5">
          <h1 className="text-xl">Sobre Mim</h1>
        </div>
        <div className="text-center p-3 mt-2.5 md:p-10 md:mt-0">
          <p className="text-md mt-2 text-justify p-10 pt-0">
            Olá! Meu nome é Ruan, tenho 19 anos e sou apaixonado por tecnologia desde os 16. Desde então, venho trilhando uma jornada de aprendizado contínuo, evoluindo passo a passo em diversas áreas da tecnologia.

            Ao longo desse caminho, explorei diferentes linguagens de programação, metodologias e tecnologias. Essa diversidade de experiências me proporcionou uma visão mais ampla sobre o funcionamento das máquinas e dos processos de desenvolvimento de aplicativos e sites.

            Atualmente, possuo habilidades em HTML, CSS, JavaScript, TypeScript, React.js, Next.js, SQL e Java. Em relação às metodologias de desenvolvimento, tenho conhecimento em metodologias ágeis, como Kanban, XP (Extreme Programming), Cascata e Scrum.

            Estou sempre em busca de aprimoramento. Atualmente, curso Bacharelado em Sistemas de Informação na Unisales e estudo Inglês na Wizard, com o objetivo de fortalecer meu perfil profissional e pessoal.

            Tenho interesse em atuar em qualquer área relacionada à programação — seja como desenvolvedor, DBA ou em qualquer outro setor onde eu possa aplicar meus conhecimentos e continuar aprendendo. Além disso, me interesso por pentest e segurança no desenvolvimento de software, buscando entender e aplicar boas práticas para prevenir vulnerabilidades em aplicações.
          </p>
        </div>
        <div className="hidden md:block text-center p-3 mt-2.5 md:p-10 md:mt-0 md:flex md:flex-row gap-2 items-center justify-center"></div>
      </Screen>
      <Footer />
    </Container>
  )
}