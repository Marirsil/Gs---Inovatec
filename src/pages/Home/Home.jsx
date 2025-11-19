import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Inicio from "../../components/Inicio.jsx";
import escritorio from "../../assets/escritorio.png";
import codando from "../../assets/codando.png";
import proxpag from "../../assets/proxpage.png";
import Marcado from "../../assets/marcado.png";
import Cards from "../../components/Cards.jsx";
import Comentarios from "../../components/Comentarios.jsx";
import Passar from "../../assets/Passar.png";
import Passare from "../../assets/PassarE.png";
import Banner from "../../assets/Banner.svg";
import Final from "../../assets/Final.png";
import Footer from "../../components/Footer.jsx";
import { gerarProfissionais } from "../../data/profissionaisData.js";

export default function Home() {
  const [duvida, setDuvida] = useState("");

  // Pegar os primeiros 6 profissionais para os cards
  const profissionaisCards = useMemo(() => {
    const todos = gerarProfissionais();
    return todos.slice(0, 6);
  }, []);

  const handleEnviarDuvida = (e) => {
    e.preventDefault();
    if (duvida.trim()) {
      alert("Obrigado pela sua mensagem! Vamos responder em breve.");
      setDuvida("");
    }
  };

  return (
    <section className="flex justify-center w-full flex-col items-center overflow-x-hidden">
      
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
    
      <div className=" mt-20 bg-[#222222] pt-15 w-[100%] flex flex-col items-center pb-15 rounded-4xl border border-[#3A3A3C]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between w-[75rem] mb-15">
            <div className="">
              <h2  className="relative w-95 z-10">Confira os perfis <img className="absolute top-0 right-0 -z-10 h-[3.8rem] w-[14rem]" src={Marcado} alt="marcado da frase"/></h2>
            </div>
            <div>
              <Link to="/perfis">
                <button className="flex w-[12.18rem] h-[3.5rem] bg-white text-[#0A0A0A] items-center justify-between px-3 rounded-full pl-10">Ver todos <div className="bg-[#9A4FF5] rounded-full h-[2.37rem] w-[2.37rem] flex justify-center items-center"><img src={proxpag} alt="" /></div></button>
              </Link>
            </div>
          </div>
        
          <div className="grid grid-cols-3 gap-6">
            {profissionaisCards.map((profissional) => (
              <Cards
                key={profissional.id}
                id={profissional.id}
                nome={profissional.nome}
                cargo={profissional.cargo}
                descricao={profissional.descricao}
              />
            ))}
          </div>
        </div> 
    </div>

    <div className="w-full overflow-x-hidden">
      <div className="flex flex-row justify-center mt-40 mb-18 gap-8 w-full max-w-[100vw] px-4">
        <Comentarios/>
        <Comentarios/>
        <Comentarios/>
      </div>
    </div>
    <div className="flex flex-row gap-5 mb-20">
      <button className=" text-black border border-[#FEFEFE] h-[2.7rem] w-[2.7rem] flex rounded-full justify-center items-center"><img src={Passare} alt="" /></button>
      <button className=" text-black border border-[#FEFEFE] h-[2.7rem] w-[2.7rem] flex rounded-full justify-center items-center"><img src={Passar} alt="" /></button>
    </div>

    <div className="w-screen">
      <img className="w-screen h-auto" src={Banner} alt="Banner com nomes de cursos" />
    </div>


    <div className="flex flex-row items-center justify-between w-[75rem]">
      <div className="flex flex-col">
        <h2>Fale Conosco!</h2>
        <p className="w-142 mt-5 mb-10">Sua opinião importa para nós. Envie sugestões, dúvidas ou melhorias para ajudar a tornar a InovaTec uma rede ainda mais útil e conectada. Estamos aqui para ouvir e aprimorar cada detalhe.</p>
        <form onSubmit={handleEnviarDuvida} className="border border-[#FEFEFE] w-[27.9rem] h-[4rem] rounded-full flex justify-between items-center pl-4 pr-2 bg-transparent">
          <input
            type="text"
            value={duvida}
            onChange={(e) => setDuvida(e.target.value)}
            placeholder="Sua dúvida aqui"
            className="flex-1 bg-transparent outline-none text-[#0A0A0A] placeholder:text-gray-500"
          />
          <button type="submit" className="bg-[#FEFEFE] text-[#0A0A0A] w-[8.6rem] h-[2.9rem] rounded-full">Enviar</button>
        </form>
      </div>
      <div>
        <img src={Final} alt="Moça dando ok com a mao" />
      </div>
    </div>

    <div>
      <Footer/>
    </div>

    </section>
  );
}