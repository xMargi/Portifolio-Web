import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { useLenis } from "lenis/react";
import { useState, useRef, useEffect } from "react";
import { Spotlight } from "../ui/spotlight-new";
import config from '../../config/config.ts'


function About() {
    const [showStars, setShowStars] = useState(true);

    const aboutRef = useRef<HTMLDivElement>(null);
    const [aboutTop, setAboutTop] = useState(0);

    const starsVisible = useRef(true);
    const contentVisible = useRef(false);
    const titleRef = useRef<HTMLHeadingElement>(null);


    useEffect(() => {
        if (aboutRef.current) {
            setAboutTop(aboutRef.current.offsetTop)
        }
    }, [])

    useLenis(({ scroll }) => {
        const relativeScroll = scroll - (aboutTop + 150);

        if (relativeScroll < 0) {

            if (!starsVisible.current) {
                setShowStars(true);
                starsVisible.current = true;
            }

            if (contentVisible.current) {
                contentVisible.current = false;
            }

            if (titleRef.current) {
                titleRef.current.style.transform = "scale(1)";
            }

            return;
        }

        const isMobile = window.innerWidth < 768;
        const trigger = window.innerHeight * (isMobile ? 0.8 : 1.5);

        if (relativeScroll > trigger) {
            if (starsVisible.current) {
                setShowStars(false);
                starsVisible.current = false;
            }

            if (!contentVisible.current) {
                contentVisible.current = true;
            }
        } else {
            if (!starsVisible.current) {
                setShowStars(true);
                starsVisible.current = true;
            }

            if (contentVisible.current) {

                contentVisible.current = false;
            }
        }

        if (titleRef.current) {
            const isMobile = window.innerWidth < 768;
            const divisor = isMobile ? 4.5 : 20;
            titleRef.current.style.transform = `scale(${1 + relativeScroll / divisor})`;
        }
    });



    return (
        <>
            <div
                ref={aboutRef}
                id="about"
                className="relative w-full min-h-[200vh] md:min-h-[300vh] flex flex-col items-center "
            >

                <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden" style={{ '--about-color': config.about.color } as React.CSSProperties}>
                    {showStars && (
                        <>
                            <StarsBackground className="bg-[var(--about-color)]" />
                            <ShootingStars />
                        </>
                    )}

                    <h1
                        ref={titleRef}
                        className="text-white font-roboto uppercase text-[8rem] md:text-[20rem] z-10 will-change-transform"
                        style={{ transition: "transform 0.1s ease-out" }}
                    >
                        Sobre
                    </h1>
                </div>
            </div>
            <div className="relative w-full min-h-screen bg-black overflow-hidden">

                <Spotlight height={2400} translateY={-650} />


                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-32 px-5 md:px-10 py-20 max-w-7xl mx-auto">
                    <div className="w-full md:w-auto flex justify-center md:justify-end relative">
                        <div className="relative">
                            <img
                                src={`${config.about.imgSrc}`}
                                alt="Perfil profissional"
                                className="object-cover w-full max-w-[300px] md:max-w-[450px] aspect-[3/4] z-10 relative"
                            />

                            <div style={{'--about-color': config.about.color} as React.CSSProperties} className="absolute top-4 left-4 w-full h-full bg-[var(--about-color)] -z-0"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 text-start w-full md:w-[600px] font-fjalla text-white">
                        <div className="flex items-center gap-3">
                            <span style={{'--about-color': config.about.color} as React.CSSProperties} className="w-10 h-2 rounded bg-[var(--about-color)]"></span>
                            <h1 className="text-3xl md:text-5xl">{config.about.title}</h1>
                        </div>

                        <div className="flex flex-col gap-6 text-base md:text-lg font-light leading-relaxed text-gray-200 text-justify">
                            <p>
                                {config.about.paragraph[0]}
                            </p>
                            <p>
                                {config.about.paragraph[1]}
                            </p>
                            <p>
                                {config.about.paragraph[2]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default About;