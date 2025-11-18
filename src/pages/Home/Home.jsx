import Inicio from "../../components/Inicio.jsx";
import escritorio from "../../assets/escritorio.png";
import codando from "../../assets/codando.png";
import proxpag from "../../assets/proxpage.png";
import Marcado from "../../assets/marcado.png";

export default function Home() {
  return (
    <section className="flex justify-center w-[100vw] flex-col items-center">
      <Inicio/>

      <div className="flex flex-row justify-center gap-50 mt-20 border border-[#4C5445] py-10 w-[75rem] rounded-4xl bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)]">
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
    </div>

    <div className="">
      <div className="flex flex-row justify-between mt-25 mb-16 w-[75rem]">
        <h2 className="w-110">Conexões que ampliam seu futuro</h2>
        <p className="w-120 pt-4">A plataforma apresenta perfis completos, mostrando formações, experiências e interesses. Assim, você encontra pessoas com afinidades, faz conexões relevantes e amplia sua rede profissional.</p>
      </div>
      <div className="flex flex-row justify-between">
        <img className="w-[46rem] h-[31rem]" src={escritorio} alt="Pessoas no escritorio"/>
        <img className="w-[27rem] h-[42.5rem]" src={codando} alt="codigo aberto"/>
      </div>
      </div>
    
      <div className="flex flex-col mt-28 mb-20">
        <div className="flex flex-row justify-between w-[75rem]">
          <div className="">
            <h2  className="relative w-95 z-10">Confira os perfis <img className="absolute top-0 right-0 -z-10 h-[3.8rem] w-[14rem]" src={Marcado} alt="marcado da frase"/></h2>
          </div>
          <div>
            <button className="flex w-[12.18rem] h-[3.5rem] bg-white text-[#0A0A0A] flex items-center justify-between px-3 rounded-full pl-10">Ver todos <div className="bg-[#9A4FF5] rounded-full h-[2.37rem] w-[2.37rem] flex justify-center items-center"><img src={proxpag} alt="" /></div></button>
          </div>
        </div>

        
      </div>

    </section>
    
  );
}