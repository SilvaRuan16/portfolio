import { redirect } from "next/navigation";

export default function Header() {
  return (
    <header className="h-auto p-6 bg-blue-900 flex flex-col justify-center items-center shadow-sm w-full md:flex-row md:justify-between">
      <div className="hidden md:block">
        <h1 className="text-2xl text-white font-bold">Portfolio</h1>
        <p className="text-sm text-white">Desenvolvedor Full-Stack</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <button className="w-[110px] h-auto p-2 m-1 border-b text-white" onClick={() => redirect("/")}>Inicio</button>
        <button className="w-[110px] h-auto p-2 m-1 border-b text-white" onClick={() => redirect("../pages/sobreMim")}>Sobre Mim</button>
        <button className="w-[110px] h-auto p-2 m-1 border-b text-white" onClick={() => redirect("../pages/projetos")}>Projetos</button>
        <button className="w-[110px] h-auto p-2 m-1 border-b text-white" onClick={() => redirect("")}>Curriculo</button>
      </div>
    </header>
  )
}