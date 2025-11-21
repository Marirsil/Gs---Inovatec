import { Link } from "react-router-dom"
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useTheme } from "../context/ThemeProvider";


export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="flex justify-center items-center bg-black py-6 w-[80rem] h-[5.8125rem] rounded-full border border-white dark:bg-[#fefefe] dark:border-[#fefefe] sm:text-sm">
      <nav className="bg-black text-white px-12 py-4 dark:bg-[#fefefe] dark:text-[#0A0A0A]">
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

          <button className="text-sm cursor-pointer " onClick={toggleDarkMode}> <img src={darkMode ? sun:moon} alt="" className="w-7 h-7"/></button>
        </ul>
      </nav>
    </div>
  );
}
