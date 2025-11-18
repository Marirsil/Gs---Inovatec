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

    </div>
  );
}