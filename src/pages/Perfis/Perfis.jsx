import { useState, useMemo, useEffect } from "react";
import Inicio from "../../components/Inicio.jsx";
import Cards from "../../components/Cards.jsx";
import Footer from "../../components/Footer.jsx";
import ProfileModal from "../../components/ProfileModal.jsx";
import { gerarProfissionais } from "../../data/profissionaisData.js";
import Baixo from "../../assets/Setabaixo.png";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfissional, setSelectedProfissional] = useState(null);
  const [cidadeFiltro, setCidadeFiltro] = useState("");
  const [areaFiltro, setAreaFiltro] = useState("");
  const [tecnologiaFiltro, setTecnologiaFiltro] = useState("");
  const [cardsVisiveis, setCardsVisiveis] = useState(12);

  // Dados dos cards com informações completas (60 profissionais)
  const cardsData = useMemo(() => gerarProfissionais(), []);

  // Mapeamento de valores para nomes legíveis
  const nomeArea = {
    dados: "Dados",
    desenvolvedor: "Desenvolvedor",
    mecatronica: "Mecatrônica"
  };

  const nomeTecnologia = {
    python: "Python",
    javascript: "JavaScript",
    csharp: "C Sharp",
    java: "Java",
    react: "React",
    nodejs: "Node.js",
    typescript: "TypeScript",
    vue: "Vue.js",
    angular: "Angular",
    php: "PHP",
    ruby: "Ruby",
    go: "Go"
  };

  // Obter valores únicos para os selects
  const cidadesUnicas = useMemo(() => {
    const cidadesMap = new Map();
    cardsData.forEach(card => {
      const [cidade, estado] = card.localizacao.split(',').map(s => s.trim());
      const key = card.cidade;
      if (!cidadesMap.has(key)) {
        cidadesMap.set(key, { sigla: key, nome: `${cidade}, ${estado}` });
      }
    });
    return Array.from(cidadesMap.values()).sort((a, b) => a.nome.localeCompare(b.nome));
  }, [cardsData]);

  const areasUnicas = useMemo(() => {
    const areas = [...new Set(cardsData.map(card => card.area))];
    return areas.sort();
  }, [cardsData]);

  const tecnologiasUnicas = useMemo(() => {
    const tecnologias = [...new Set(cardsData.map(card => card.tecnologia))];
    return tecnologias.sort();
  }, [cardsData]);

  // Filtrar cards baseado em todos os filtros
  const filteredCards = useMemo(() => {
    return cardsData.filter(card => {
      const matchNome = !searchTerm || card.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCidade = !cidadeFiltro || card.cidade === cidadeFiltro;
      const matchArea = !areaFiltro || card.area === areaFiltro;
      const matchTecnologia = !tecnologiaFiltro || card.tecnologia === tecnologiaFiltro;
      
      return matchNome && matchCidade && matchArea && matchTecnologia;
    });
  }, [cardsData, searchTerm, cidadeFiltro, areaFiltro, tecnologiaFiltro]);

  // Cards visíveis com paginação
  const cardsParaExibir = filteredCards.slice(0, cardsVisiveis);
  const temMaisCards = filteredCards.length > cardsVisiveis;

  // Resetar paginação quando filtros mudarem
  useEffect(() => {
    setCardsVisiveis(12);
  }, [searchTerm, cidadeFiltro, areaFiltro, tecnologiaFiltro]);

  const handleVerMais = () => {
    setCardsVisiveis(prev => prev + 12);
  };

  // Handlers para o modal
  const handleCardClick = (card) => {
    setSelectedProfissional(card);
  };

  const handleCloseModal = () => {
    setSelectedProfissional(null);
  };

  const handleRecomendar = () => {
    alert(`Profissional ${selectedProfissional.nomeCompleto} foi recomendado com sucesso!`);
  };

  const handleEnviarMensagem = () => {
    alert(`Mensagem enviada para ${selectedProfissional.nomeCompleto} com sucesso!`);
  };

  return (
    <div className="flex justify-center w-[100vw] flex-col items-center dark:bg-[#fefefe]">
      <Inicio/>

      {/* Barra de pesquisa */}
      <div className="relative rounded-xl w-[75rem] mt-12 mb-6 ">
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] dark:bg-[#A2A2A2] bg-zinc-900 text-white px-4 py-3 rounded-xl border border-[#4C5445] focus:outline-none focus:border-[#AA65FF]"
        />
      </div>

      <div className=" relative rounded-xl w-[75rem] mt-6 " >
        <div className="flex flex-row gap-10 items-center justify-center">
          <div className="relative w-[22.5rem] border border-[#4C5445]  rounded-xl ">
            <select 
              value={cidadeFiltro}
              onChange={(e) => setCidadeFiltro(e.target.value)}
              className=" appearance-none w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] dark:bg-[#A2A2A2] bg-zinc-900 text-white px-4 py-3 rounded-xl pr-10 focus:outline-none cursor-pointer " 
            >
              <option value="">Cidade</option>
              {cidadesUnicas.map((cidade) => (
                <option key={cidade.sigla} value={cidade.sigla}>{cidade.nome}</option>
              ))}
            </select>
            <img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/>
          </div>

          <div className="relative w-[22.5rem] border border-[#4C5445] rounded-xl">
            <select 
              value={areaFiltro}
              onChange={(e) => setAreaFiltro(e.target.value)}
              className=" appearance-none w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] dark:bg-[#A2A2A2] bg-zinc-900 text-white px-4 py-3 rounded-xl pr-10 focus:outline-none cursor-pointer " 
            >
              <option value="">Área</option>
              {areasUnicas.map((area) => (
                <option key={area} value={area}>{nomeArea[area] || area}</option>
              ))}
            </select>
            <img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/>
          </div>
          
          <div className="relative w-[22.5rem] border border-[#4C5445] rounded-xl">
            <select 
              value={tecnologiaFiltro}
              onChange={(e) => setTecnologiaFiltro(e.target.value)}
              className=" appearance-none w-full bg-[radial-gradient(circle_at_left,_rgba(84,15,101,0.3)_0%,_transparent_80%)] dark:bg-[#A2A2A2] bg-zinc-900 text-white px-4 py-3 rounded-xl pr-10 focus:outline-none cursor-pointer " 
            >
              <option value="">Tecnologia</option>
              {tecnologiasUnicas.map((tech) => (
                <option key={tech} value={tech}>{nomeTecnologia[tech] || tech}</option>
              ))}
            </select>
            <img src={Baixo} alt="" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-3"/>
          </div>
        </div>
      </div>
      
      
      <div className="grid grid-cols-3 gap-10 mt-20 mb-20">
        {cardsParaExibir.map((card) => (
          <Cards 
            key={card.id} 
            id={card.id}
            nome={card.nome} 
            cargo={card.cargo} 
            descricao={card.descricao}
            onClick={() => handleCardClick(card)}
          />
        ))}

        {filteredCards.length === 0 && (
          <div className="col-span-3 text-center text-white py-10">
            <p>Nenhum resultado encontrado</p>
          </div>
        )}

        {temMaisCards && (
          <div className="flex justify-center items-center gap-6 col-span-3">
            <button 
              onClick={handleVerMais}
              className="bg-[#AA65FF] w-[16.4rem] h-[3.1rem] rounded-full hover:bg-[#9A55EF] transition-colors"
            >
              Ver Mais
            </button>
          </div>
        )}
      </div>

      {/* Modal de Perfil */}
      {selectedProfissional && (
        <ProfileModal
          profissional={selectedProfissional}
          onClose={handleCloseModal}
          onRecomendar={handleRecomendar}
          onEnviarMensagem={handleEnviarMensagem}
        />
      )}

      <Footer/>
    </div>
  );
}
