import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black py-6 w-[80rem] h-[5.8125rem] rounded-full border border-white">
      <nav className="bg-neutral-950 text-white px-12 py-4">
        <ul className="flex items-center gap-50">
          <li className="text-sm cursor-pointer">Conectar</li>
          <li>
            <Link to="/perfis" className="text-sm cursor-pointer">
              Explorar
            </Link>
          </li>

          <li>
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              InovaTec
            </Link>
          </li>

          <li className="text-sm cursor-pointer">Mensagens</li>
          <li className="text-sm cursor-pointer">Perfil</li>
        </ul>
      </nav>
    </div>
  );
}
