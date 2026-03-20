interface HomePersonalLinks {
    link: string,
}

interface WithColor {
    color: string
}

interface NavBarConfig extends WithColor {
    logoSrc: string
}

interface HomeConfig extends WithColor {
    title: string,
    nameTitle: string,
    subtitle: string,
    paragraph: string,
    links: HomePersonalLinks[]
    imgSrc: string
}

interface AboutConfig extends WithColor {
    imgSrc: string,
    title: string,
    paragraph: [p1: string, p2: string, p3: string]
}

export interface SkillProgressData {
    title: string;
    percentage: number;
    icon?: string;
    accent?: "lime" | "sky"; // Made optional to allow default
}

export interface SkillSectionData {
    title: string;
    subtitle: string;
    accent: "lime" | "sky";
    tags: string[];
    skills: SkillProgressData[];
}

export interface StatItem {
    value: string;
    label: string;
}

export interface SkillsConfig {
    title: string;
    sections: SkillSectionData[];
    stats: StatItem[];
}

interface AppConfig {
    navBar: NavBarConfig,
    home: HomeConfig,
    about: AboutConfig,
    skills: SkillsConfig
}

const config: AppConfig = {
    navBar: {
        color: "#005b4a",
        logoSrc: "./logo/logo-borda-vermelha.png"
    },

    home: {
        color: "#005b4a",
        imgSrc: "./images/eu.jpeg",
        title: "Olá, me chamo",
        nameTitle: "Vinicius Moreira Siqueira",
        subtitle: "Desenvolvedor Full Stack em formação",
        paragraph: "Estudante do 3º período de Análise e Desenvolvimento de Sistemas, em busca de uma oportunidade de estágio em desenvolvimento de software, com interesse em desenvolvimento web, aplicações full stack e construção de interfaces modernas e APIs escaláveis.",

        links: [{
            link: "https://google.com.br",
        },
        {
            link: "https://google.com.br",
        },
        {
            link: "https://google.com.br",
        }
        ]
    },

    about: {
        title: "Desenvolvedor Full Stack | Estudante de ADS",
        color: "#005b4a",
        imgSrc: "./images/street.png",
        paragraph: [
            "Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 3º período, com 22 anos, e estudo programação de forma consistente desde 2023. Nesse período, venho construindo uma base sólida em desenvolvimento por meio de prática contínua e formações especializadas, incluindo cursos pela Alura e pela OneBitCode.",

            "Tenho grande interesse em desenvolvimento full stack, atuando tanto no front-end quanto no back-end, e encaro o aprendizado como parte essencial do processo profissional. Gosto de entender o problema a fundo, escrever código organizado e buscar soluções eficientes, sempre com foco em evolução técnica e qualidade.",

            "Atualmente, procuro uma oportunidade de estágio em desenvolvimento ou áreas relacionadas, onde eu possa contribuir com o time, aprender com profissionais mais experientes e acelerar meu crescimento dentro do mercado de tecnologia."
        ],
    },

    skills: {
        title: "Habilidades",
        sections: [
            {
                title: "Front-End",
                subtitle: "Interface Web",
                accent: "lime",
                tags: ["FrontEnd", "Componentes", "Performance"],
                skills: [
                    { title: "React", icon: "🎨", percentage: 75 },
                    { title: "Typescript", icon: "🖼", percentage: 83 },
                    { title: "Javascript", icon: "⬡", percentage: 83 },
                    { title: "HTML", icon: "✏️", percentage: 90 },
                    { title: "Css", icon: "✏️", percentage: 90 },
                    { title: "Tailwind", icon: "✏️", percentage: 70 },
                ]
            },
            {
                title: "Back-End",
                subtitle: "Stack técnica",
                accent: "sky",
                tags: ["BackEnd", "Estrutura", "Api", "Rotas"],
                skills: [
                    { title: "Express", icon: "⚛", percentage: 80 },
                    { title: "Node.js", icon: "🔷", percentage: 85 },
                    { title: "SQL", icon: "🌊", percentage: 83 },
                    { title: "PostgreSQL", icon: "🟨", percentage: 80 },
                    { title: "Prisma", icon: "🟨", percentage: 75 },
                    { title: "JWT / Auth", icon: "🟨", percentage: 88 },
                ]
            },
            {
                title: "Ferramentas Adicionais",
                subtitle: "Stack técnica",
                accent: "sky",
                tags: ["Tools"],
                skills: [
                    { title: "Git", icon: "⚛", percentage: 75 },
                    { title: "Vite", icon: "🔷", percentage: 85 },
                ]
            }
        ],
        stats: [
            { value: "2+", label: "Anos de Estudos." },
            { value: "10+", label: "Projetos criados" },
            { value: "8", label: "Ferramentas" },
            { value: "∞", label: "Vontade de aprender" },
        ]
    }
}

export default config;