import { Linkedin, Github, Mail } from 'lucide-react'
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import config from '../../config/config.ts'

function Home() {

    return (
        <div className="relative w-full min-h-screen overflow-hidden
            grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-40 gap-10 lg:gap-150 pt-20 lg:pt-0 pb-24 lg:pb-0">
            <BackgroundRippleEffect />
            <div className="z-3 flex flex-col w-full lg:w-200 h-auto lg:h-100 justify-center lg:left-40 lg:top-50 items-center lg:items-start text-center lg:text-left">
                <h1 className="font-roboto uppercase text-4xl md:text-[3.75rem] leading-tight">{config.home.title} <span style={{ '--home-color': config.home.color } as React.CSSProperties} className='text-[var(--home-color)]'>{config.home.nameTitle}</span></h1>
                <h2 style={{ '--home-color': config.home.color } as React.CSSProperties} className='font-roboto uppercase text-xl md:text-[1.57rem] text-[var(--home-color)] mt-2'>{config.home.subtitle}</h2>
                <div className='w-full md:w-[70%]'>
                    <p className='font-noto mt-6 mb-4 text-[16px] md:text-[18px]'>{config.home.paragraph}</p>
                </div>
                <div className='flex gap-5 justify-center lg:justify-start w-full lg:w-auto'>
                    <a href={`${config.home.links[0].link}`} target='_blank' style={{ '--home-color': config.home.color } as React.CSSProperties} className='hover:text-[var(--home-color)]'><Linkedin/></a>
                    <a href={`${config.home.links[1].link}`} target='_blank' style={{ '--home-color': config.home.color } as React.CSSProperties} className='hover:text-[var(--home-color)]'><Github /></a>
                    <a href={`${config.home.links[2].link}`} target='_blank' style={{ '--home-color': config.home.color } as React.CSSProperties} className='hover:text-[var(--home-color)]'><Mail /></a>
                </div>
            </div>
            <div className='z-10 flex justify-center lg:block lg:right-80 lg:top-20'>
                <img src={`${config.home.imgSrc}`} alt="" className='object-cover w-60 md:w-80 lg:w-100 rounded-[2vw]' />
            </div>

        </div>
    )
}

export default Home;