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

interface AppConfig {
    navBar: NavBarConfig,
    home: HomeConfig,
    about: AboutConfig
}

const config: AppConfig = {
    navBar: {
        color: "#740A03",
        logoSrc: "https://via.nplaceholder.com/300x100"
    },

    home: {
        color: "#740A03",
        imgSrc: "https://via.nplaceholder.com/500x700",
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
        color: "#740A03",
        imgSrc: "https://via.nplaceholder.com/500x700",
        paragraph: [
            "Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 3º período, com ** anos, e estudo programação de forma consistente desde ****. Nesse período, venho construindo uma base sólida em desenvolvimento por meio de prática contínua e formações especializadas, incluindo cursos pela **** e pela *****.",
            "Tenho grande interesse em desenvolvimento full stack, atuando tanto no front-end quanto no back-end, e encaro o aprendizado como parte essencial do processo profissional. Gosto de entender o problema a fundo, escrever código organizado e buscar soluções eficientes, sempre com foco em evolução técnica e qualidade.",
            "Atualmente, procuro uma oportunidade de estágio em desenvolvimento ou áreas relacionadas, onde eu possa contribuir com o time, aprender com profissionais mais experientes e acelerar meu crescimento dentro do mercado de tecnologia."
        ],
    }
}

export default config;