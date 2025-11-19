export default function ProfileModal({ profissional, onClose, onRecomendar, onEnviarMensagem }) {
  if (!profissional) return null;

  // Gerar URL de imagem aleatória baseada no ID do profissional
  const imageUrl = `https://i.pravatar.cc/300?img=${profissional.id}`;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-gray-600 z-10 w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Coluna Esquerda - Informações Pessoais */}
          <div className="w-full md:w-1/3 p-8 flex flex-col items-center border-r border-gray-200">
            {/* Foto de perfil */}
            <div className="w-32 h-32 rounded-full bg-gray-300 mb-6 overflow-hidden">
              <img
                src={imageUrl}
                alt={profissional.nome}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nome e Cargo */}
            <h2 className="text-2xl font-bold text-black mb-2 text-center">
              {profissional.nomeCompleto || profissional.nome}
            </h2>
            <p className="text-gray-600 mb-4 text-center">{profissional.cargo}</p>

            {/* Localização */}
            <p className="text-gray-500 mb-6 text-center">{profissional.localizacao}</p>

            {/* Sobre */}
            <p className="text-sm text-gray-600 mb-8 text-center">
              {profissional.descricao}
            </p>

            {/* Botões de Ação */}
            <div className="w-full space-y-4 mt-auto">
              <button
                onClick={onRecomendar}
                className="w-full bg-gradient-to-r from-[#AA65FF] to-[#8B4FD9] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#9A55EF] hover:to-[#7B3FC9] transition-all shadow-lg"
              >
                Recomendar profissional
              </button>
              <button
                onClick={onEnviarMensagem}
                className="w-full bg-white border-2 border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>

          {/* Coluna Direita - Informações Profissionais */}
          <div className="w-full md:w-2/3 p-8">
            {/* Formação Acadêmica */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7M5 12h14"
                  />
                </svg>
                <h3 className="text-xl font-bold text-black">Formação Acadêmica</h3>
              </div>
              <div className="ml-9">
                <p className="text-black font-semibold">{profissional.formacao.instituicao}</p>
                <p className="text-gray-600">{profissional.formacao.curso}</p>
                <p className="text-gray-500 text-sm">{profissional.formacao.periodo}</p>
              </div>
            </div>

            {/* Experiências */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-black">Experiências</h3>
              </div>
              <div className="ml-9">
                <p className="text-black font-semibold">{profissional.experiencia.empresa}</p>
                <p className="text-gray-600">{profissional.experiencia.cargo}</p>
                <p className="text-gray-500 text-sm">{profissional.experiencia.periodo}</p>
              </div>
            </div>

            {/* Habilidades Técnicas */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-black">Habilidades Técnicas</h3>
              </div>
              <div className="ml-9 flex flex-wrap gap-2">
                {profissional.habilidadesTecnicas.map((habilidade, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {habilidade}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills e Hobbies */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-black">Soft Skills e Hobbies</h3>
              </div>
              <div className="ml-9">
                <p className="text-gray-600 text-sm">{profissional.softSkills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

