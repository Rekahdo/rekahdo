import './NavBar.css'
import type { LogoType, NavLinkType } from "../sections/header/HeaderType"
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button, type ButtonType } from './Button';

type NavBarType = {
    version?: number,
    logo: LogoType,
    navLink: NavLinkType,
    ctaButton: ButtonType,
}

export const NavBar = ({ logo, version = 0, navLink, ctaButton }: NavBarType) => {
  switch (version) {
    case 1:
      return Version_2(navLink, ctaButton);
    case 0:
    default:
      return Version_1(logo, navLink, ctaButton);
  }
};

function Version_1(logo: LogoType, navLink: NavLinkType, ctaButton: ButtonType) {

    const [open, setOpen] = useState<boolean>(false);

    function toggleMenu() {
        setOpen(o => o ? false : true)
    }

    return (
        <div className='bottom-border'>
            <section className='nav-bar'>
                <div hidden={logo.hidden} className='logo'>
                    <img src={logo.file_path} alt={`${logo.name} Logo`} />
                </div>

                <button className='hamburger-icon-con' onClick={toggleMenu}>
                    {open ? <X color='white' /> : <Menu color='white' />}
                </button>

                <nav className={`nav-link ${open ? "open" : ""}`} onClick={toggleMenu}>
                    <div hidden={navLink.hidden} className='links'>
                        {navLink.links.map((link) => (
                            <a href={link.file_path} hidden={link.hidden} key={link.id} className='link'>{link.text}</a>
                        ))}
                    </div>

                    <Button {...ctaButton} className='download-cv-1' icon={<Download size={16}/>} />
                </nav>

                <Button {...ctaButton} className='download-cv-2' icon={<Download size={16}/>} />
            </section>
        </div>
    )
}

function Version_2(navLink: NavLinkType, ctaButton: ButtonType) {
    return (
        <>
            <div className='hamburger-icon-con'>
                <Menu className="hamburger-icon" />
            </div>
        </>
    )
}

/*





.bottom-border {
    @apply flex justify-center grow border-dominant-bd border-b-1;
  }

  .nav-bar {
    @apply bg-dominant text-dominant-fg py-4 pl-4 flex items-center grow;

    @apply max-sm:py-1 max-md:relative max-md:z-0 max-md:py-3;
    @apply min-md:items-center min-md:place-content-between min-md:px-8 min-md:max-w-portfolio;

    .logo {
      @apply flex;
      @apply max-md:grow;

      & > img {
        @apply max-sm:w-20 max-md:w-25;
      }
    }
  }

  .hamburger-icon-con {
    @apply flex items-center p-4 aspect-auto justify-center;
    @apply min-md:hidden;
  }

  .nav-link {
    @apply flex transition-all;

    @apply max-md:flex-col max-md:absolute max-md:left-0 max-md:top-[7dvh] max-md:w-[100%] max-md:h-10 max-md:overflow-hidden max-md:opacity-0 max-md:-z-10 max-md:hidden 

    @apply min-md:gap-10 min-md:border-none;

    &.open {
      @apply flex top-[10dvh] h-auto opacity-100;
      @apply max-sm:p-3 max-sm:pb-5;
    }
  }

  .link {
    @apply text-white font-bold transition-colors;
    @apply hover:text-blue-500;
    @apply max-sm:py-2;
  }

  & .download-cv-1 {
    @apply hidden;
    @apply max-md:flex max-md:me-auto max-md:mt-3;
  }

  & .download-cv-2 {
    @apply hidden;
    @apply min-md:flex;
  }





*/