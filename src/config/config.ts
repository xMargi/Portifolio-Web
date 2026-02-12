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
        nameTitle: "*******",
        subtitle: "Desenvolvedor ****** em formação",
        paragraph: "Estudante do ** período de *****************, em busca de uma oportunidade de ***** na área de ********, com interesse em ************, ************** e áreas correlatas.",
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
            "Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 3º período, com ** anos, e estudo programação de forma consistente desde ****. Nesse período, venho construindo uma base sólida em desenvolvimento por meio de prática contínua e formações especializadas, incluindo cursos pela **** e pela *****.",
            "Tenho grande interesse em desenvolvimento full stack, atuando tanto no front-end quanto no back-end, e encaro o aprendizado como parte essencial do processo profissional. Gosto de entender o problema a fundo, escrever código organizado e buscar soluções eficientes, sempre com foco em evolução técnica e qualidade.",
            "Atualmente, procuro uma oportunidade de estágio em desenvolvimento ou áreas relacionadas, onde eu possa contribuir com o time, aprender com profissionais mais experientes e acelerar meu crescimento dentro do mercado de tecnologia."
        ],
    },

    skills: {
        title: "Habilidades",
        sections: [
            {
                title: "Design",
                subtitle: "Ferramentas visuais",
                accent: "lime",
                tags: ["UI Design", "Prototipagem", "Branding"],
                skills: [
                    { title: "Figma", icon: "🎨", percentage: 95 },
                    { title: "Photoshop", icon: "🖼", percentage: 100 },
                    { title: "Adobe XD", icon: "⬡", percentage: 60 },
                    { title: "Illustrator", icon: "✏️", percentage: 70 },
                ]
            },
            {
                title: "Desenvolvimento",
                subtitle: "Stack técnica",
                accent: "sky",
                tags: ["Front-end", "Componentes", "Performance"],
                skills: [
                    { title: "React", icon: "⚛", percentage: 90 },
                    { title: "TypeScript", icon: "🔷", percentage: 85 },
                    { title: "Tailwind", icon: "🌊", percentage: 95 },
                    { title: "JavaScript", icon: "🟨", percentage: 88 },
                ]
            },
            {
                title: "Desenvolvimento",
                subtitle: "Stack técnica",
                accent: "sky",
                tags: ["Front-end", "Componentes", "Performance"],
                skills: [
                    { title: "React", icon: "⚛", percentage: 90 },
                    { title: "TypeScript", icon: "🔷", percentage: 85 },
                    { title: "Tailwind", icon: "🌊", percentage: 95 },
                    { title: "JavaScript", icon: "🟨", percentage: 88 },
                ]
            }
        ],
        stats: [
            { value: "3+", label: "Anos de exp." },
            { value: "12+", label: "Projetos entregues" },
            { value: "8", label: "Ferramentas" },
            { value: "∞", label: "Vontade de aprender" },
        ]
    }
}

export default config;