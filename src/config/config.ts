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
            link: "https://www.linkedin.com/in/vinicius-moreira-siqueira",
        },
        {
            link: "https://github.com/xMargi",
        },
        {
            link: "mailto:viniciusff200@gmail.com",
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
                    { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 75 },
                    { title: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", percentage: 83 },
                    { title: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 83 },
                    { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 90 },
                    { title: "Css", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 90 },
                    { title: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", percentage: 70 },
                ]
            },
            {
                title: "Back-End",
                subtitle: "Stack técnica",
                accent: "sky",
                tags: ["BackEnd", "Estrutura", "Api", "Rotas"],
                skills: [
                    { title: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", percentage: 80 },
                    { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 85 },
                    { title: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", percentage: 80 },
                    { title: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", percentage: 75 },
                    { title: "JWT / Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 88 },
                ]
            },
            {
                title: "Ferramentas Adicionais",
                subtitle: "Stack técnica",
                accent: "sky",
                tags: ["Tools"],
                skills: [
                    { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", percentage: 75 },
                    { title: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", percentage: 85 },
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