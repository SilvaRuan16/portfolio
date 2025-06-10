import { redirect } from "next/navigation";

export default function Header() {
  return (
    <header className="h-auto p-6 bg-blue-900 flex flex-col justify-center items-center shadow-sm max-w-[440px] sm:max-w-[640px] md:max-w-[768px] md:flex-row md:justify-evenly lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-full">
      <button className="w-[110px] h-auto p-2 m-1 border-b text-white hover:w-auto hover:text-2xl" onClick={() => redirect("/")}>Inicio</button>
      <button className="w-[110px] h-auto p-2 m-1 border-b text-white hover:w-auto hover:text-2xl" onClick={() => redirect("../pages/sobreMim")}>Sobre Mim</button>
      <button className="w-[110px] h-auto p-2 m-1 border-b text-white hover:w-auto hover:text-2xl" onClick={() => redirect("")}>Projetos</button>
      <button className="w-[110px] h-auto p-2 m-1 border-b text-white hover:w-auto hover:text-2xl" onClick={() => redirect("")}>Curriculo</button>
    </header>
  )
}