// import { Menu } from "lucide-react"
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarLogo, NavBody, NavItems,  } from "../ui/resizable-navbar";
import { useState } from "react";
import config from '../../config/config.ts'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "Sobre", link: "#about" },
        { name: "Projetos", link: "#projects" },
        { name: "Contato", link: "#contact" },
    ];
    return (
        <nav style={{ '--nav-color': config.navBar.color } as React.CSSProperties} className="text-black uppercase flex items-center gap-5 font-bold w-full h-20 px-5 md:px-45 relative uppercase
             after:absolute after:left-1/2 after:-bottom-1
             after:h-[3px] after:w-full after:bg-[var(--nav-color)]
             after:-translate-x-1/2
             after:scale-x-0 after:origin-center
             after:transition-transform after:duration-300 after:ease-out
             hover:after:scale-x-100 z-10">
            <Navbar>
                {/* DESKTOP */}
                <NavBody className="flex items-center hidden">
                    <NavbarLogo />
                    <NavItems items={navItems} />

                </NavBody>

                {/* MOBILE */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isOpen}
                            onClick={() => setIsOpen((prev: boolean) => !prev)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="">
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="text-neutral-700 dark:text-neutral-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>


        </nav>


    )

}

export default NavBar