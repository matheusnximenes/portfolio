import Image from "next/image";
import React, { useState } from "react";
import { AboutSVG, CodeSVG, ContactSVG, ProjectsSVG, UxUiSVG } from "../SvgExporter";

const MENU = [
  "about", "code", "uxui", "projects", "contact"
]

const Header = () => {
  const [active, setActive] = useState(MENU[0])
  return (
    <header className="header">
      <div className="header__brand">
        <Image
          src="/brand/brand.svg"
          alt="Matheus Ximenes Brand"
          width={187}
          height={36}
          priority
        />
      </div>
      <nav className="header__navigation">
        <ul>
          <li>
            <a href="#about" onClick={() => setActive(MENU[0])}>
              <span className="text">About</span>
              <span className={`icon ${active === MENU[0] ? `icon--active` : ``}`}>
                <AboutSVG/>
              </span>
            </a>
          </li>
          <li>
            <a href="#code" onClick={() => setActive(MENU[1])}>
              <span className="text">Code</span>
              <span className={`icon ${active === MENU[1] ? `icon--active` : ``}`}>
                <CodeSVG/>
              </span>
            </a>
          </li>
          <li>
            <a href="#ux&ui" onClick={() => setActive(MENU[2])}>
              <span className="text">UX/UI</span>
              <span className={`icon ${active === MENU[2] ? `icon--active` : ``}`}>
              <UxUiSVG/>
              </span>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActive(MENU[3])}>
            <span className="text">Projects</span>
              <span className={`icon ${active === MENU[3] ? `icon--active` : ``}`}>
              <ProjectsSVG/>
              </span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActive(MENU[4])}>
              <span className="text">Contact</span>
              <span className={`icon ${active === MENU[4] ? `icon--active` : ``}`}>
              <ContactSVG/>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
