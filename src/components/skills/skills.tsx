import { ShootingStars } from '../ui/shooting-stars.tsx';
import { SkillsGrid, SkillSection, SkillProgress, SkillsStatsRow } from '../ui/skills.tsx'
import { StarsBackground } from '../ui/stars-background.tsx';
import config from '../../config/config.ts';


function Skills() {

    return (
        <div className='min-h-screen w-full relative'>
            <StarsBackground />
            <ShootingStars />
            <div className='bg-black/90 flex flex-col items-center gap-10 md:gap-30 p-5 md:p-25 min-h-screen font-roboto'>
                <div className='flex items-center flex-col'>
                    <p className='uppercase text-2xl text-white'>Minhas</p>
                    <h1 className='text-4xl md:text-8xl text-white uppercase font-bebas'>{config.skills.title}</h1>
                </div>
                <SkillsGrid>

                    {config.skills.sections.map((section, index) => (
                        <SkillSection
                            key={index}
                            title={section.title}
                            subtitle={section.subtitle}
                            accent={section.accent}
                            tags={section.tags}
                        >
                            {section.skills.map((skill, skillIndex) => (
                                <SkillProgress
                                    key={skillIndex}
                                    title={skill.title}
                                    icon={skill.icon}
                                    percentage={skill.percentage}
                                    accent={skill.accent || section.accent} 
                                    index={skillIndex}
                                />
                            ))}
                        </SkillSection>
                    ))}

                    <SkillsStatsRow
                        stats={config.skills.stats}
                    />

                </SkillsGrid>
            </div>

        </div>
    );

}


export default Skills;