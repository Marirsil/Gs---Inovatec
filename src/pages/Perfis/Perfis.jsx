import Inicio from "../../components/Inicio.jsx";
import Cards from "../../components/Cards.jsx";
import Footer from "../../components/Footer.jsx";
import Baixo from "../../assets/Setabaixo.png";

export default function Home() {
  return (
    <div className="flex justify-center w-[100vw] flex-col items-center">
      <Inicio/>

      <div className=" relative rounded-xl w-[75rem] mt-12">
        <div className="flex flex-row gap-10 items-center justify-center">
          <div className="relative w-[22.5rem] border border-[#4C5445] rounded-xl">
            <select className=" appearance-none w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] bg-zinc-900 text-white px-4 py-3 rounded-xl pr-10 focus:outline-none cursor-pointer " >
              <option value="">Cidade</option>
              <option value="sp">São Paulo</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="mg">Minas Gerais</option>
            </select>
            <img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/>
          </div>

          <div className="relative w-[22.5rem] border border-[#4C5445] rounded-xl">
            <select className=" appearance-none w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] bg-zinc-900 text-white px-4 py-3 rounded-xl pr-10 focus:outline-none cursor-pointer " >
              <option value="">Área</option>
              <option value="sp">Dados</option>
              <option value="rj">Desenvolvedor</option>
              <option value="mg">Mecatronica</option>
            </select>
            <img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/><img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/>
          </div>
          
          <div className="relative w-[22.5rem] border border-[#4C5445] rounded-xl">
            <select className=" appearance-none w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] bg-zinc-900 text-white px-4 py-3 rounded-xl pr-10 focus:outline-none cursor-pointer " >
              <option value="">Tecnologia</option>
              <option value="sp">Python</option>
              <option value="rj">JavaScript</option>
              <option value="mg">C Sharp</option>
            </select>
            <img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/>
          </div>
        </div>
      </div>
      
      
      <div className="grid grid-cols-3 gap-10 mt-20 mb-20">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

        <div className="flex justify-center items-center gap-6 col-span-3">
          <button className="bg-[#AA65FF] w-[16.4rem] h-[3.1rem] rounded-full">Ver Mais</button>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
