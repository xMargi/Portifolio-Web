import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import { useGithubRepos } from '@/hooks/useGithubRepos'

// const listMock = [{
//     firstImgUrl: "https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/a0f87f7e-434d-4c3c-9584-f7ee351d5f64-10432-dubai-img-worlds-of-adventure---uae-resident-offer-01.jpg",
//     title: "Teste titulo",
//     description: "Teste descrição",
//     stackImageUrl: ["https://cdn-icons-png.flaticon.com/128/5968/5968381.png", "https://cdn-icons-png.flaticon.com/128/5968/5968381.png"]
// }
// ]

export interface Project {
    firstImgUrl: string
    title: string
    description: string
    stackImageUrl: string[]
    html_url: string
}

export const Projects = () => {
    const [itemsPerPage, setItemsPerPage] = useState(
        typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 4
    )

    const repositories = useGithubRepos("xMargi")

    useEffect(() => {
        const handleResize = () => setItemsPerPage(window.innerWidth < 640 ? 1 : 4)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel()

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

    const chunks = repositories.repos.reduce((acc, item, i) => {
        const page = Math.floor(i / itemsPerPage)
        acc[page] = acc[page] ? [...acc[page], item] : [item]
        return acc
    }, [] as Project[][])

    return (
        <div className="h-full w-full bg-black flex flex-col items-center justify-center gap-10 p-6 sm:p-20">

            {/* Header */}
            <div className="w-full flex flex-col gap-1">
                <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-light">GITHUB</p>
                <h1 className="text-white font-bebas text-4xl sm:text-6xl tracking-widest">
                    Meus <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">Projetos</span>
                </h1>
                <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent mt-2" />
            </div>

            {/* Carousel */}
            <div className="w-full overflow-hidden" ref={emblaRef} key={repositories.repos.length}>
                <div className="flex">
                    {chunks.map((page: Project[], pageIndex: number) => (
                        <div className="flex flex-col sm:flex-row gap-4 min-w-full" key={pageIndex}>
                            {page.map((item: Project, itemIndex: number) => (
                                <div
                                    key={itemIndex}
                                    className="
                                        group relative w-full sm:w-[25%] rounded-xl overflow-hidden
                                        border border-white/10
                                        bg-gradient-to-b from-white/[0.06] to-transparent
                                        transition-all duration-500
                                        hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                                    "
                                >
                                    {/* image */}
                                    <div className="relative h-[180px] overflow-hidden">
                                        <img
                                            src={item.firstImgUrl}
                                            alt=""
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"/>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <span className="absolute top-3 right-3 text-[10px] font-mono text-white/30 tracking-widest">
                                            {String(itemIndex + 1 + pageIndex * itemsPerPage).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* content */}
                                    <div className="flex flex-col gap-3 p-4">
                                        <h2 className="text-white font-bebas tracking-widest text-xl leading-none">
                                            {item.title}
                                        </h2>
                                        <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="h-px bg-white/[0.08]" />
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                {item.stackImageUrl.map((stack:string, index:number) => (
                                                    <span key={index} className="text-[10px] uppercase tracking-widest text-white/50 border border-white/10 rounded-full px-2 py-0.5">
                                                        {stack}
                                                    </span>
                                                ))}
                                            </div>
                                            <a className="
                                                    self-start text-[10px] uppercase tracking-[0.2em] text-white/40
                                                    border border-white/10 rounded-full px-3 py-1
                                                    transition-all duration-300
                                                    hover:text-white hover:border-white/40 hover:bg-white/5
                                                " href={item.html_url} target='_blank' rel='noreferrer'>
                                                Link Repositório →
                                            </a>
                                        </div>
                                    </div>

                                    <div className="
                                        absolute inset-0 opacity-0 group-hover:opacity-100
                                        transition-opacity duration-500 pointer-events-none
                                        bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)]
                                    " />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6 w-full justify-center">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                />
                <div className="flex gap-2">
                    {scrollSnaps.map((_: number, index: number) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`transition-all duration-300 rounded-full ${index === selectedIndex
                                ? 'w-6 h-1.5 bg-white'
                                : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                />
            </div>
        </div>
    )
}