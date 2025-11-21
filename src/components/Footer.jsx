export default function Home() {
  return (
    <div className="flex flex-col bg-[#9A4FF5] text-black rounded-t-4xl py-10 px-6 w-[80rem] h-[28rem]">
      <div><h2 className="text-[#FEFEFE] mb-15 mt-10 ml-8">InovaTec</h2></div>
      <div className="flex flex-row justify-around w-[75rem] items-center">
        <div className="text-[#FEFEFE]">
          <p className="text-lg font-semibold">Serviços</p>
          <div className="text-sm flex gap-4 flex-col mt-5">
          <p>Criar perfil</p>
          <p>Encontrar conexões</p>
          <p>Explorar profissionais</p>
          </div>
        </div>

        <div className="text-[#FEFEFE]">
          <p className="text-lg font-semibold">Contato</p>
          <div className="text-sm flex gap-4 flex-col mt-5 ">
          <p>Fale conosco</p>
          <p>Central de suporte</p>
          <p>Consultar ajuda</p>
          </div>
        </div>

        <div className="text-[#FEFEFE]">
          <p className="text-lg font-semibold">Duvidas</p>
          <div className="text-sm flex gap-4 flex-col mt-5">
          <p>Perguntas frequentes</p>
          <p>Guia da plataforma</p>
          <p>Termos e políticas</p>
          </div>
        </div>

        <div className="text-[#FEFEFE]">
          <p className="text-lg font-semibold">Localização</p>
          <div className="text-sm flex gap-4 flex-col mt-5 w-[8.5rem]">
          <p>Rua Paulista - n 000, Bela Vista, São Paulo</p>
          <p>Seg - Sexta das 08:00 ás 19:00</p>
          </div>
        </div>

        <div className="text-[#FEFEFE] w-[22rem]">
          <p>A InovaTec foi criada para aproximar pessoas, incentivar conexões profissionais e facilitar o acesso a novas oportunidades. Nosso compromisso é tornar sua jornada mais simples, humana e colaborativa.</p>
        </div>

      </div>
    </div>
  );
}