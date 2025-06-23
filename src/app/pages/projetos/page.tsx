"use client";

import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Screen from "@/app/components/Screen";

export default function Projetos() {

  function routeUrl(url: string) {
    if (!url) return alert("Houve um problema ao encontrar a URL do projeto.");
    return open(url);
  }

  return (
    <Container className="flex flex-col">
      <Header/>
      <Screen className="flex-col bg-white">
        <div className="w-full h-[100px] flex justify-center items-center">
          <h1 className="text-xl">Projetos</h1>
        </div>
        <ul className="w-full p-3 flex flex-wrap justify-evenly text-justify">
          <li className="w-[400px] h-[500px] bg-blue-100 m-2 p-3 flex flex-col justify-between items-center shadow-sm rounded-md">
            <div className="text-xl">Bíblia & Harpa - offline</div>
            <div>
              Aplicativo para leitura de textos bíblicos e hinos da harpa, sem a necessidade de conexão com a internet, sem anúncios e com customização de temas da preferência do usuário.
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <span>Ferramentas</span>
                <span>Flutter, Hive, GitHub (Privado)</span>
              </div>
              <button className="rounded-md shadow p-3 mt-5 bg-white" onClick={() => routeUrl("https://play.google.com/store/apps/details?id=com.bibleAplication.app")}>
                Acessar App
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span>Status</span>
              <span className="text-green-500">Concluído</span>
            </div>
          </li>
          <li className="w-[400px] h-[500px] bg-blue-100 m-2 p-3 flex flex-col justify-between items-center shadow-sm rounded-md">
            <div className="text-xl">Host Bible - Site</div>
            <div>
              Site para informações de políticas de privacidade, sobre e amostra da interface do aplicativo Bíblia & Harpa - offline.
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <span>Ferramentas</span>
                <span>React.js, JavaScript, GitHub (Público)</span>
              </div>
              <button className="rounded-md shadow p-3 mt-5 bg-white" onClick={() => routeUrl("https://host-bible-site.vercel.app/")}>
                Acessar Site
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span>Status</span>
              <span className="text-green-500">Concluído</span>
            </div>
          </li>
          <li className="w-[400px] h-[500px] bg-blue-100 m-2 p-3 flex flex-col justify-between items-center shadow-sm rounded-md">
            <div className="text-xl">Portfólio</div>
            <div>
              Site para apresentação de portfólio, com informações sobre mim, projetos, contatos e currículo.
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <span>Ferramentas</span>
                <span>Next.js, TypeScript, GitHub (Público)</span>
              </div>
              <button className="rounded-md shadow p-3 mt-5 bg-white" onClick={() => routeUrl("https://portfolio-navy-omega-33.vercel.app/")}>
                Acessar Site
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span>Status</span>
              <span className="text-yellow-500">Em andamento</span>
            </div>
          </li>
        </ul>
      </Screen>
      <Footer/>
    </Container>
  );
}