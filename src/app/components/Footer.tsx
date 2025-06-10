export default function Footer() {
  return (
    <footer className="h-auto p-6 bg-blue-900 flex flex-col justify-around items-center-safe shadow-sm max-w-[440px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-full">
      <div>
        <h1 className="text-white text-xl">Contatos</h1>
      </div>
      <ul className="p-2 text-center">
        <li className="text-white text-sm">
          WhatsApp: (27) 98804-5322
        </li>
        <li className="text-white text-sm">
          Instagram: @ruan_.silva_.16
        </li>
        <li className="text-white text-sm">
          E-mail: ruangustavo.ss16@gmail.com
        </li>
        <li className="text-white text-sm">
          LinkedIn: Ruan Silva
        </li>
      </ul>
      <div>
        <p className="text-white text-sm">
          © 2025 Ruan Silva. All rights reserved.
        </p>
      </div>
    </footer>
  )
}