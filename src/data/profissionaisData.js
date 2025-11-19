// Dados de 60 profissionais com informações variadas

const descricoes = [
  "Desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Sempre buscando aprender novas tecnologias e compartilhar conhecimento com a equipe.",
  "Especialista em desenvolvimento de software com foco em qualidade e performance. Experiência em projetos de grande escala e arquiteturas complexas.",
  "Profissional dedicado ao desenvolvimento de aplicações web modernas. Entusiasta de boas práticas de código e metodologias ágeis.",
  "Engenheiro de software com expertise em sistemas distribuídos e cloud computing. Sempre em busca de otimizações e melhores práticas.",
  "Desenvolvedor full-stack com paixão por criar experiências digitais excepcionais. Foco em código limpo e arquitetura escalável.",
  "Especialista em análise de dados e machine learning. Transformando dados em insights valiosos para tomada de decisões estratégicas.",
  "Desenvolvedor mobile com experiência em aplicações nativas e híbridas. Criando apps que fazem a diferença na vida dos usuários.",
  "Arquiteto de software com visão estratégica para design de sistemas robustos. Experiência em liderança técnica e mentoria de equipes.",
  "Desenvolvedor backend especializado em APIs e microserviços. Focado em criar soluções escaláveis e de alta performance.",
  "Frontend developer apaixonado por UI/UX. Criando interfaces intuitivas e responsivas que encantam os usuários.",
  "DevOps engineer com expertise em automação e infraestrutura como código. Otimizando processos de deploy e monitoramento.",
  "Especialista em segurança da informação e desenvolvimento seguro. Protegendo aplicações contra vulnerabilidades e ameaças.",
  "Desenvolvedor com foco em acessibilidade e inclusão digital. Criando soluções que todos podem usar e aproveitar.",
  "Engenheiro de software com paixão por código open source. Contribuindo para projetos que fazem a diferença na comunidade.",
  "Especialista em integração de sistemas e APIs. Conectando diferentes plataformas para criar soluções integradas.",
  "Desenvolvedor com experiência em e-commerce e plataformas de pagamento. Criando soluções seguras para transações online.",
  "Full-stack developer com expertise em startups. Acostumado a trabalhar em ambientes dinâmicos e de rápido crescimento.",
  "Especialista em desenvolvimento de jogos e aplicações interativas. Criando experiências imersivas e envolventes.",
  "Desenvolvedor com foco em IoT e dispositivos conectados. Trazendo inovação para o mundo físico através da tecnologia.",
  "Engenheiro de software especializado em blockchain e tecnologias descentralizadas. Explorando o futuro da web3.",
  "Desenvolvedor com experiência em sistemas financeiros e fintech. Criando soluções seguras para o mercado financeiro.",
  "Especialista em desenvolvimento de chatbots e assistentes virtuais. Criando interfaces conversacionais inteligentes.",
  "Desenvolvedor com paixão por educação e tecnologia. Criando plataformas de aprendizado e ferramentas educacionais.",
  "Full-stack developer com expertise em saúde digital. Desenvolvendo soluções que melhoram a qualidade de vida das pessoas.",
  "Especialista em desenvolvimento de dashboards e visualização de dados. Transformando números em histórias visuais.",
  "Desenvolvedor com foco em sustentabilidade e tecnologia verde. Criando soluções que respeitam o meio ambiente.",
  "Engenheiro de software com experiência em sistemas de recomendação. Criando algoritmos que personalizam experiências.",
  "Desenvolvedor mobile especializado em apps de produtividade. Ajudando pessoas a serem mais eficientes no dia a dia.",
  "Especialista em desenvolvimento de plataformas de streaming. Criando experiências de entretenimento de alta qualidade.",
  "Desenvolvedor com foco em automação e processos inteligentes. Otimizando workflows e aumentando produtividade.",
  "Full-stack developer com expertise em redes sociais e comunidades online. Criando espaços digitais para conexão.",
  "Especialista em desenvolvimento de marketplaces e plataformas de negócios. Conectando compradores e vendedores.",
  "Desenvolvedor com experiência em sistemas de gestão empresarial. Criando soluções que otimizam operações corporativas.",
  "Engenheiro de software especializado em realidade aumentada. Explorando novas formas de interação digital.",
  "Desenvolvedor com foco em desenvolvimento de APIs públicas. Criando interfaces que facilitam integrações.",
  "Especialista em desenvolvimento de sistemas de CRM. Ajudando empresas a gerenciar relacionamentos com clientes.",
  "Desenvolvedor com paixão por código limpo e testes. Garantindo qualidade e confiabilidade em cada linha escrita.",
  "Full-stack developer com expertise em plataformas de conteúdo. Criando sistemas que gerenciam e distribuem informação.",
  "Especialista em desenvolvimento de sistemas de autenticação e autorização. Protegendo identidades digitais.",
  "Desenvolvedor com foco em desenvolvimento de ferramentas para desenvolvedores. Criando soluções que facilitam o trabalho técnico.",
  "Engenheiro de software com experiência em sistemas de mensageria. Criando canais de comunicação eficientes.",
  "Desenvolvedor especializado em desenvolvimento de sistemas de analytics. Transformando dados em decisões estratégicas.",
  "Especialista em desenvolvimento de plataformas de colaboração. Facilitando trabalho em equipe e comunicação.",
  "Desenvolvedor com foco em desenvolvimento de sistemas de agendamento. Otimizando tempo e recursos.",
  "Full-stack developer com expertise em desenvolvimento de sistemas de logística. Criando soluções para cadeia de suprimentos.",
  "Especialista em desenvolvimento de plataformas de eventos. Criando experiências memoráveis para participantes.",
  "Desenvolvedor com experiência em sistemas de gestão de projetos. Ajudando equipes a entregar resultados.",
  "Engenheiro de software especializado em desenvolvimento de sistemas de monitoramento. Criando visibilidade sobre operações.",
  "Desenvolvedor com foco em desenvolvimento de sistemas de avaliação e feedback. Criando ciclos de melhoria contínua.",
  "Especialista em desenvolvimento de plataformas de aprendizado online. Criando experiências educacionais envolventes.",
  "Desenvolvedor com paixão por desenvolvimento de sistemas de gamificação. Tornando tarefas mais engajadoras.",
  "Full-stack developer com expertise em desenvolvimento de sistemas de reservas. Otimizando processos de booking.",
  "Especialista em desenvolvimento de plataformas de networking profissional. Conectando pessoas e oportunidades.",
  "Desenvolvedor com foco em desenvolvimento de sistemas de gestão de conteúdo. Facilitando criação e publicação.",
  "Engenheiro de software com experiência em desenvolvimento de sistemas de pagamento. Criando soluções financeiras seguras.",
  "Desenvolvedor especializado em desenvolvimento de sistemas de suporte ao cliente. Melhorando experiência do usuário.",
  "Especialista em desenvolvimento de plataformas de marketplace B2B. Conectando empresas e facilitando negócios.",
  "Desenvolvedor com foco em desenvolvimento de sistemas de gestão de estoque. Otimizando controle de produtos.",
  "Full-stack developer com expertise em desenvolvimento de sistemas de delivery. Criando soluções para logística de última milha.",
  "Especialista em desenvolvimento de plataformas de crowdfunding. Facilitando financiamento coletivo de projetos.",
  "Desenvolvedor com experiência em desenvolvimento de sistemas de gestão de talentos. Conectando empresas e profissionais."
];

const softSkills = [
  "Comunicação eficaz, trabalho em equipe e resolução de problemas. Gosto de ler, praticar esportes e participar de hackathons.",
  "Liderança, pensamento crítico e adaptabilidade. Apaixonado por música, viagens e tecnologia.",
  "Colaboração, criatividade e organização. Interesses em fotografia, culinária e desenvolvimento pessoal.",
  "Empatia, proatividade e aprendizado contínuo. Gosto de jogar xadrez, assistir séries e explorar novas tecnologias.",
  "Comunicação clara, gestão de tempo e inovação. Interesses em design, arte e sustentabilidade.",
  "Trabalho em equipe, resiliência e foco em resultados. Apaixonado por esportes, leitura e networking.",
  "Proatividade, atenção aos detalhes e comunicação. Gosto de viajar, cozinhar e participar de comunidades tech.",
  "Liderança técnica, mentoria e visão estratégica. Interesses em investimentos, podcasts e desenvolvimento de produtos.",
  "Colaboração, flexibilidade e pensamento analítico. Apaixonado por jogos, cinema e ciência.",
  "Comunicação, organização e criatividade. Gosto de arte, música e atividades ao ar livre.",
  "Resolução de problemas, trabalho em equipe e aprendizado contínuo. Interesses em esportes, leitura e tecnologia.",
  "Proatividade, atenção aos detalhes e comunicação eficaz. Apaixonado por design, fotografia e inovação.",
  "Empatia, colaboração e pensamento crítico. Gosto de música, viagens e desenvolvimento pessoal.",
  "Liderança, criatividade e adaptabilidade. Interesses em arte, culinária e sustentabilidade.",
  "Trabalho em equipe, resiliência e foco em resultados. Apaixonado por esportes, leitura e networking profissional.",
  "Comunicação clara, gestão de tempo e inovação. Gosto de design, tecnologia e atividades criativas.",
  "Proatividade, organização e aprendizado contínuo. Interesses em jogos, cinema e desenvolvimento de produtos.",
  "Colaboração, flexibilidade e pensamento analítico. Apaixonado por ciência, podcasts e comunidades tech.",
  "Resolução de problemas, comunicação e criatividade. Gosto de arte, música e atividades ao ar livre.",
  "Liderança técnica, mentoria e visão estratégica. Interesses em investimentos, leitura e inovação.",
  "Empatia, proatividade e trabalho em equipe. Apaixonado por esportes, viagens e tecnologia.",
  "Comunicação eficaz, pensamento crítico e adaptabilidade. Gosto de fotografia, culinária e desenvolvimento pessoal.",
  "Colaboração, criatividade e organização. Interesses em design, arte e sustentabilidade.",
  "Trabalho em equipe, resiliência e foco em resultados. Apaixonado por leitura, networking e comunidades tech.",
  "Proatividade, atenção aos detalhes e comunicação. Gosto de viajar, cozinhar e explorar novas tecnologias.",
  "Liderança, flexibilidade e pensamento analítico. Interesses em jogos, cinema e ciência.",
  "Comunicação, organização e criatividade. Apaixonado por música, arte e atividades ao ar livre.",
  "Resolução de problemas, trabalho em equipe e aprendizado contínuo. Gosto de esportes, leitura e tecnologia.",
  "Proatividade, empatia e comunicação eficaz. Interesses em design, fotografia e inovação.",
  "Colaboração, pensamento crítico e adaptabilidade. Apaixonado por música, viagens e desenvolvimento pessoal.",
  "Liderança, criatividade e organização. Gosto de arte, culinária e sustentabilidade.",
  "Trabalho em equipe, resiliência e foco em resultados. Interesses em esportes, networking e tecnologia.",
  "Comunicação clara, gestão de tempo e inovação. Apaixonado por design, podcasts e comunidades tech.",
  "Proatividade, atenção aos detalhes e aprendizado contínuo. Gosto de jogos, cinema e desenvolvimento de produtos.",
  "Colaboração, flexibilidade e pensamento analítico. Interesses em ciência, leitura e inovação.",
  "Resolução de problemas, comunicação e criatividade. Apaixonado por arte, música e atividades ao ar livre.",
  "Liderança técnica, mentoria e visão estratégica. Gosto de investimentos, viagens e tecnologia.",
  "Empatia, proatividade e trabalho em equipe. Interesses em esportes, fotografia e desenvolvimento pessoal.",
  "Comunicação eficaz, pensamento crítico e adaptabilidade. Apaixonado por culinária, design e sustentabilidade.",
  "Colaboração, criatividade e organização. Gosto de arte, leitura e networking profissional.",
  "Trabalho em equipe, resiliência e foco em resultados. Interesses em esportes, tecnologia e comunidades tech.",
  "Proatividade, atenção aos detalhes e comunicação. Apaixonado por viagens, cozinhar e explorar novas tecnologias.",
  "Liderança, flexibilidade e pensamento analítico. Gosto de jogos, cinema e ciência.",
  "Comunicação, organização e criatividade. Interesses em música, arte e atividades ao ar livre.",
  "Resolução de problemas, trabalho em equipe e aprendizado contínuo. Apaixonado por esportes, leitura e tecnologia.",
  "Proatividade, empatia e comunicação eficaz. Gosto de design, fotografia e inovação.",
  "Colaboração, pensamento crítico e adaptabilidade. Interesses em música, viagens e desenvolvimento pessoal.",
  "Liderança, criatividade e organização. Apaixonado por arte, culinária e sustentabilidade.",
  "Trabalho em equipe, resiliência e foco em resultados. Gosto de esportes, networking e tecnologia.",
  "Comunicação clara, gestão de tempo e inovação. Interesses em design, podcasts e comunidades tech.",
  "Proatividade, atenção aos detalhes e aprendizado contínuo. Apaixonado por jogos, cinema e desenvolvimento de produtos.",
  "Colaboração, flexibilidade e pensamento analítico. Gosto de ciência, leitura e inovação.",
  "Resolução de problemas, comunicação e criatividade. Interesses em arte, música e atividades ao ar livre.",
  "Liderança técnica, mentoria e visão estratégica. Apaixonado por investimentos, viagens e tecnologia.",
  "Empatia, proatividade e trabalho em equipe. Gosto de esportes, fotografia e desenvolvimento pessoal.",
  "Comunicação eficaz, pensamento crítico e adaptabilidade. Interesses em culinária, design e sustentabilidade.",
  "Colaboração, criatividade e organização. Apaixonado por arte, leitura e networking profissional.",
  "Trabalho em equipe, resiliência e foco em resultados. Gosto de esportes, tecnologia e comunidades tech.",
  "Proatividade, atenção aos detalhes e comunicação. Interesses em viagens, cozinhar e explorar novas tecnologias.",
  "Liderança, flexibilidade e pensamento analítico. Apaixonado por jogos, cinema e ciência.",
  "Comunicação, organização e criatividade. Gosto de música, arte e atividades ao ar livre."
];

const nomes = [
  "Vitor", "Maria", "João", "Ana", "Pedro", "Carla", "Lucas", "Julia", "Rafael", "Fernanda",
  "Gabriel", "Beatriz", "Ricardo", "Patricia", "Felipe", "Larissa", "Thiago", "Camila", "Bruno", "Mariana",
  "Rodrigo", "Amanda", "Gustavo", "Juliana", "André", "Isabela", "Marcos", "Renata", "Diego", "Vanessa",
  "Eduardo", "Carolina", "Leonardo", "Tatiana", "Rafaela", "Henrique", "Bianca", "Matheus", "Priscila", "Lucas",
  "Daniel", "Natália", "Guilherme", "Adriana", "Paulo", "Monique", "Vinícius", "Roberta", "Alexandre", "Cristina",
  "Fábio", "Simone", "Renato", "Aline", "Marcelo", "Débora", "Sérgio", "Elaine", "Carlos", "Michele"
];

const sobrenomes = [
  "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes",
  "Ribeiro", "Carvalho", "Almeida", "Martins", "Lopes", "Soares", "Fernandes", "Vieira", "Barbosa", "Rocha",
  "Dias", "Monteiro", "Cardoso", "Reis", "Araújo", "Cavalcanti", "Nunes", "Moreira", "Mendes", "Freitas",
  "Costa", "Ramos", "Melo", "Teixeira", "Machado", "Azevedo", "Pires", "Castro", "Nascimento", "Araújo",
  "Correia", "Moura", "Campos", "Dantas", "Barros", "Nogueira", "Xavier", "Peixoto", "Tigre", "Brito"
];

const cidades = [
  { cidade: "São Paulo", estado: "SP", sigla: "sp" },
  { cidade: "Rio de Janeiro", estado: "RJ", sigla: "rj" },
  { cidade: "Belo Horizonte", estado: "MG", sigla: "mg" },
  { cidade: "Curitiba", estado: "PR", sigla: "pr" },
  { cidade: "Porto Alegre", estado: "RS", sigla: "rs" },
  { cidade: "Brasília", estado: "DF", sigla: "df" },
  { cidade: "Salvador", estado: "BA", sigla: "ba" },
  { cidade: "Recife", estado: "PE", sigla: "pe" },
  { cidade: "Florianópolis", estado: "SC", sigla: "sc" },
  { cidade: "Campinas", estado: "SP", sigla: "sp" }
];

const areas = [
  { nome: "Dados", valor: "dados" },
  { nome: "Desenvolvedor", valor: "desenvolvedor" },
  { nome: "Mecatrônica", valor: "mecatronica" }
];

const tecnologias = [
  { nome: "Python", valor: "python" },
  { nome: "JavaScript", valor: "javascript" },
  { nome: "C Sharp", valor: "csharp" },
  { nome: "Java", valor: "java" },
  { nome: "React", valor: "react" },
  { nome: "Node.js", valor: "nodejs" },
  { nome: "TypeScript", valor: "typescript" },
  { nome: "Vue.js", valor: "vue" },
  { nome: "Angular", valor: "angular" },
  { nome: "PHP", valor: "php" },
  { nome: "Ruby", valor: "ruby" },
  { nome: "Go", valor: "go" }
];

const instituicoes = [
  "FIAP", "USP", "UNICAMP", "PUC-SP", "PUC-RJ", "UFMG", "UFRGS", "UFSC", "UFBA", "UFPE",
  "UTFPR", "UnB", "UFPR", "UFRJ", "UFSCAR", "ITA", "IME", "UFU", "UFV", "UFSM"
];

const cursos = [
  "Engenharia de Software", "Ciência da Computação", "Sistemas de Informação",
  "Engenharia de Computação", "Análise e Desenvolvimento de Sistemas",
  "Engenharia de Dados", "Engenharia Mecatrônica", "Ciência de Dados"
];

const empresas = [
  "TechSolutions", "DigitalCorp", "Inovatec", "CloudTech", "DataTech", "WebDev Solutions",
  "MobileFirst", "AI Solutions", "StartupHub", "GovTech", "FinTech Solutions", "HealthTech",
  "EduTech", "RetailTech", "LogiTech", "MediaTech", "GameDev Studio", "IoT Solutions",
  "Blockchain Labs", "Security Systems", "Automation Corp", "Analytics Pro", "DevOps Inc",
  "Frontend Masters", "Backend Solutions", "FullStack Co", "CodeCraft", "TechInnovation",
  "Digital Ventures", "Smart Systems", "Future Tech", "NextGen Solutions"
];

const cargos = [
  "Desenvolvedor Junior", "Desenvolvedor Pleno", "Desenvolvedor Senior",
  "Desenvolvedor Full Stack", "Desenvolvedor Frontend", "Desenvolvedor Backend",
  "Desenvolvedor Mobile", "Engenheiro de Software", "Arquiteto de Software",
  "Tech Lead", "Desenvolvedor ML", "Analista de Dados", "DevOps Engineer"
];

const habilidadesPorTecnologia = {
  python: ["Python", "Django", "Flask", "FastAPI", "Pandas", "NumPy"],
  javascript: ["JavaScript", "TypeScript", "Node.js", "Express", "React", "Vue.js"],
  csharp: ["C#", ".NET", "ASP.NET", "Entity Framework", "SQL Server"],
  java: ["Java", "Spring", "Spring Boot", "Hibernate", "Maven"],
  react: ["React", "React Native", "Redux", "Next.js", "TypeScript"],
  nodejs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
  typescript: ["TypeScript", "Angular", "React", "Node.js", "Express"],
  vue: ["Vue.js", "Nuxt.js", "Vuex", "JavaScript", "TypeScript"],
  angular: ["Angular", "TypeScript", "RxJS", "Node.js", "MongoDB"],
  php: ["PHP", "Laravel", "Symfony", "MySQL", "PostgreSQL"],
  ruby: ["Ruby", "Rails", "PostgreSQL", "Redis", "Heroku"],
  go: ["Go", "Microservices", "Docker", "Kubernetes", "MongoDB"]
};

function gerarPeriodo(anosAtras = 0) {
  const anoAtual = new Date().getFullYear();
  const anoInicio = anoAtual - anosAtras - 4;
  const anoFim = anoAtual - anosAtras;
  return `${anoInicio} - ${anoFim}`;
}

export function gerarProfissionais() {
  const profissionais = [];
  
  for (let i = 0; i < 60; i++) {
    const nomeIndex = i % nomes.length;
    const sobrenomeIndex = Math.floor(i / nomes.length) % sobrenomes.length;
    const nome = nomes[nomeIndex];
    const sobrenome = sobrenomes[sobrenomeIndex];
    const nomeCompleto = `${nome} ${sobrenome}`;
    
    const cidadeData = cidades[i % cidades.length];
    const areaData = areas[i % areas.length];
    const tecnologiaData = tecnologias[i % tecnologias.length];
    
    const habilidades = habilidadesPorTecnologia[tecnologiaData.valor] || ["React", "Node.js", "JavaScript", "TypeScript"];
    
    const empresa = empresas[i % empresas.length];
    const cargo = cargos[i % cargos.length];
    const instituicao = instituicoes[i % instituicoes.length];
    const curso = cursos[i % cursos.length];
    
    profissionais.push({
      id: i + 1,
      nome: nome,
      nomeCompleto: nomeCompleto,
      cargo: cargo,
      localizacao: `${cidadeData.cidade}, ${cidadeData.estado}`,
      cidade: cidadeData.sigla,
      area: areaData.valor,
      tecnologia: tecnologiaData.valor,
      descricao: descricoes[i % descricoes.length],
      formacao: {
        instituicao: instituicao,
        curso: curso,
        periodo: gerarPeriodo(Math.floor(i / 10))
      },
      experiencia: {
        empresa: empresa,
        cargo: cargo,
        periodo: gerarPeriodo(Math.floor(i / 15))
      },
      habilidadesTecnicas: habilidades.slice(0, 4),
      softSkills: softSkills[i % softSkills.length]
    });
  }
  
  return profissionais;
}

