// Todo o conteúdo do portfólio fica aqui.
// Para atualizar textos, habilidades ou experiências, edite apenas este arquivo.

export const profile = {
  name: 'João Vitor de Oliveira Brito',
  shortName: 'João Vitor',
  role: 'Estudante de Análise e Desenvolvimento de Sistemas',
  intro:
    'Estudo ADS na UNILAGO, trabalho com suporte técnico e estou construindo minha base em Python, bancos de dados e IA generativa.',
  email: 'joao.brito0909work@gmail.com',
  linkedin: 'https://linkedin.com/in/joão-vitor-de-oliveira-brito-a00174425',
  github: 'https://github.com/Britothecoder',
}

export const skillGroups = [
  {
    id: 'tecnologias',
    label: 'Tecnologias',
    description: 'Linguagens e ferramentas que estudei em cursos e certificações.',
    skills: [
      { name: 'Python', level: 'Básico' },
      { name: 'Fundamentos de bancos de dados', level: 'Fundamentos' },
      { name: 'Administração de banco de dados', level: 'Básico' },
      { name: 'IA generativa aplicada', level: 'Básico' },
      { name: 'Power BI', level: 'Certificado' },
    ],
  },
  {
    id: 'suporte',
    label: 'Suporte técnico',
    description: 'O que pratico todos os dias como Jovem Aprendiz em Help Desk.',
    skills: [
      { name: 'Atendimento e suporte a usuários', level: 'No dia a dia' },
      { name: 'Instalação e configuração de softwares', level: 'No dia a dia' },
      { name: 'Manutenção de computadores', level: 'No dia a dia' },
      { name: 'Suporte Windows', level: 'No dia a dia' },
      { name: 'Active Directory', level: 'Apoio' },
      { name: 'Registro e acompanhamento de chamados', level: 'No dia a dia' },
    ],
  },
  {
    id: 'comportamentais',
    label: 'Comportamentais',
    description: 'Como gosto de trabalhar com as pessoas ao meu redor.',
    skills: [
      { name: 'Trabalho em equipe' },
      { name: 'Comunicação' },
      { name: 'Organização' },
      { name: 'Pontualidade' },
      { name: 'Aprendizado contínuo' },
    ],
  },
]

export const aboutTabs = [
  {
    id: 'interesses',
    label: 'Interesses',
    title: 'Software e soluções',
    text: 'Me interesso por desenvolvimento de software e pela construção de soluções. Também gosto de dados, por isso fiz o curso de Power BI e os de banco de dados, e de ver como a inteligência artificial generativa pode ser aplicada na prática.',
  },
  {
    id: 'objetivos',
    label: 'Objetivos',
    title: 'Aprender fazendo',
    text: 'Quero ampliar meus conhecimentos por meio de projetos práticos e crescer na área de desenvolvimento de software. O suporte técnico me dá a visão de quem usa o sistema, e quero levar isso para o código que eu escrever.',
  },
  {
    id: 'formacao',
    label: 'Formação',
    title: 'Em andamento até 2027',
    text: 'Curso Análise e Desenvolvimento de Sistemas na UNILAGO, hoje no 4º período, com previsão de conclusão em julho de 2027. Fiz o Ensino Fundamental e Médio no SESI 338.',
  },
]

export const experiences = [
  {
    id: 'escale',
    title: 'Suporte Técnico Help Desk',
    org: 'Escale/Cobmax, Jovem Aprendiz',
    period: 'Maio/2025 até hoje',
    summary: 'Suporte aos usuários e manutenção do ambiente de computadores da empresa.',
    details: [
      'Atendimento e suporte aos usuários.',
      'Instalação e configuração de softwares.',
      'Manutenção de computadores.',
      'Suporte Windows.',
      'Apoio em Active Directory.',
      'Registro e acompanhamento de chamados.',
    ],
  },
  {
    id: 'unilago',
    title: 'Análise e Desenvolvimento de Sistemas',
    org: 'UNILAGO',
    period: '4º período, previsão Jul/2027',
    summary: 'Graduação tecnológica em que desenvolvo a base para atuar com software.',
    details: [
      'Cursando o 4º período.',
      'Conclusão prevista para julho de 2027.',
      'Este portfólio é um dos meus projetos práticos com React.',
    ],
  },
  {
    id: 'certificacoes',
    title: 'Cursos e certificações',
    org: 'Fundação Bradesco e SENAI',
    period: 'Formação complementar',
    summary: 'Quatro certificações em banco de dados, dados, IA e programação.',
    details: [
      'Administração de Banco de Dados, Fundação Bradesco.',
      'Power BI, SENAI.',
      'Desenvolvimento aplicado em IA generativa, SENAI.',
      'Programação em Python, SENAI.',
    ],
  },
]
