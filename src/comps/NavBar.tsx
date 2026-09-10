import './NavBar.css'
import type { LogoType, NavLinkType } from "../sections/header/HeaderType"
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button, ButtonUI, type ButtonType } from './Button';

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

                <Button {...ctaButton} type={ButtonUI.HEADER_DOWNLOAD_CV_MOBILE} className='download-cv-mobile' />
              </nav>

              <Button {...ctaButton} type={ButtonUI.HEADER_DOWNLOAD_CV_DESKTOP}  className='download-cv-desktop' />
            </>
          }
        </section>
      }
    </>
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