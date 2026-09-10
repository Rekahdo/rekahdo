import './NavBar.css'
import type { LogoType, NavLinkType } from "../sections/header/HeaderType"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button, ButtonIcon, type ActionButtonType } from './Button';

type NavBarType = {
  version?: number,
  logo: LogoType,
  navLink: NavLinkType,
  ctaButton: ActionButtonType,
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

function Version_1(logo: LogoType, navLink: NavLinkType, ctaButton: ActionButtonType) {

  const [open, setOpen] = useState<boolean>(false);

  function toggleMenu() {
    setOpen(o => o ? false : true)
  }

  return (
    <>
      {
        <section className='nav-bar'>
          {
            !logo.hidden &&
            <div hidden={logo.hidden} className='logo'>
              <img src={logo.file_path} alt={`${logo.name} Logo`} />
            </div>
          }

          {
            !navLink.hidden &&
            <>
              <button className='hamburger-icon-con' onClick={toggleMenu}>
                {open ? <X color='white' /> : <Menu color='white' />}
              </button>

              <nav className={`nav-link ${open ? "open" : ""}`} onClick={toggleMenu}>
                <div hidden={navLink.hidden} className='links'>
                  {navLink.links.map((link) => (
                    <a href={link.file_path} hidden={link.hidden} key={link.id} className='link'>{link.text}</a>
                  ))}
                </div>

                <Button {...ctaButton} className='download-cv-mobile' icon={ButtonIcon.DOWNLOAD} />
              </nav>

              <Button {...ctaButton} className='download-cv-desktop' icon={ButtonIcon.DOWNLOAD}  />
            </>
          }
        </section>
      }
    </>
  )
}

function Version_2(navLink: NavLinkType, ctaButton: ActionButtonType) {
  return (
    <>
      <div className='hamburger-icon-con'>
        <Menu className="hamburger-icon" />
      </div>
    </>
  )
}