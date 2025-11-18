import Navbar from "./Navbar";
import aspas from "../assets/aspas.svg";
import star from "../assets/star.png";
import imgcapa from "../assets/fotocapa.png";
import fivestars from "../assets/fivestar.svg";


export default function Home() {
  return (
    <div className="flex flex-col items-center"> 
  
    <div className="bg-[#FEFEFE] w-[100vw] h-212 flex flex-col items-center pt-6 rounded-b-[11.25rem] text-[#0A0A0A]">
      <Navbar/>
      <div className="flex flex-row items-center mt-4 gap-20">
        <img className="w-[11rem] h-[11rem]" src={star} alt="Estrela para enfeite"/>
        <h1 className=" font-bold w-200 text-center text-[180px] tracking-wide ">Conectando talentos ao futuro do trabalho</h1>
        <img className="pt-40 pl-15" src={aspas} alt="Linhas para enfase"/>
      </div>

      <div className="flex flex-row justify-center mt-5">
        <div className="flex flex-col w-[22rem] gap-8 mt-20">
          <p>A InovaTec aproxima pessoas, interesses e trajetórias, permitindo criar conexões reais, descobrir novos talentos e explorar perfis inspiradores. Tudo em uma rede social moderna e fácil de navegar.</p>
          <button className="border border-black py-4 w-60 rounded-full">Conheça colaboradores</button>
        </div>

        <div>
        <img className="w-[37rem] h-[30rem]" src={imgcapa} alt="Mulher comemorando"/>
        </div>

        <div className="flex flex-col text-right mt-20 ml-20">
        <img className="" src={fivestars} alt="Mulher comemorando"/>
        <h4>10 anos</h4>
        <p>de experiência</p>
        </div>
      </div>
    </div>

    {/* <div className="flex flex-row justify-center gap-50 mt-20 border border-[#4C5445] py-10 w-[75rem] rounded-4xl bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)]">
      <div className="flex text-white flex-col items-center ">
        <div className="flex">
          <h3 className="text-4xl">
          2000<span className="text-[#AA65FF]">+</span>
          </h3>
        </div>
        <p>Inscritos</p>
      </div>

      <div className="flex text-white flex-col items-center ">
        <div className="flex">
          <h3 className="text-4xl">
          10<span className="text-[#AA65FF]">+</span>
          </h3>
        </div>
        <p>Empresas</p>
      </div>

      <div className="flex text-white flex-col items-center ">
        <div className="flex">
          <h3 className="text-4xl">
          800<span className="text-[#AA65FF]">+</span>
          </h3>
        </div>
        <p>Colaboradores</p>
      </div>

      <div className="flex text-white flex-col items-center ">
        <div className="flex">
          <h3 className="text-4xl">
          150M<span className="text-[#AA65FF]">+</span>
          </h3>
        </div>
        <p>Vidas mudadas</p>
      </div>
    </div> */}

    {/* <div className="">
      <div className="flex flex-row justify-between mt-28 mb-20 w-[75rem]">
        <h2 className="w-110">Conexões que ampliam seu futuro</h2>
        <p className="w-120 pt-4">A plataforma apresenta perfis completos, mostrando formações, experiências e interesses. Assim, você encontra pessoas com afinidades, faz conexões relevantes e amplia sua rede profissional.</p>
      </div>
      <div className="flex flex-row justify-between">
      <img className="w-[46rem] h-[31rem]" src={escritorio} alt="Pessoas no escritorio"/>
      <img className="w-[27rem] h-[42.5rem]" src={codando} alt="codigo aberto"/>
      </div>
    </div>

    <div className="flex flex-col mt-28 mb-20">
      <h2>Confira os perfis</h2>
      <div>
        <button>Ver todos <div><img src="" alt="" /></div></button>
      </div>
    </div> */}

    </div>
  );
}