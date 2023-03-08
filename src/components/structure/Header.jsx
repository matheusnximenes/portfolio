import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
      <Image
        src="/brand.svg"
        alt="Matheus Ximenes Brand"
        width={140}
        height={27}
        priority
      />
      </div>
      <nav className="header__navigation">
        <ul>
          <li>
            <a href="#about">About<span className="icon">
                <Image
        src="/about.svg"
        alt="About"
        width={14}
        height={14}
        priority
      /></span></a>
          </li>
          <li>
            <a href="#code">Code<span className="icon">
                <Image
        src="/code.svg"
        alt="About"
        width={14}
        height={14}
        priority
      /></span></a>
          </li>
          <li>
            <a href="#ux&ui">UX/UI<span className="icon">
                <Image
        src="/uxui.svg"
        alt="About"
        width={14}
        height={14}
        priority
      /></span></a>
          </li>
          <li>
            <a href="#projects">Projects<span className="icon">
                <Image
        src="/projects.svg"
        alt="About"
        width={14}
        height={14}
        priority
      /></span></a>
          </li>
          <li>
            <a href="#contact">Contact<span className="icon">
                <Image
        src="/contact.svg"
        alt="About"
        width={14}
        height={14}
        priority
      /></span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
