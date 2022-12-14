import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeCtx } from '$context/ThemeProvider';
import ThemeToggle from '$components/theme/ThemeToggle';
import HorizontalNav from '$components/nav/HorizontalNav';
import Anchor from '$components/anchor/Anchor';
import { navLinks } from '$data/navLink';

export default function Header() {
  const themeCtx = useContext(ThemeCtx);

  return (
    <nav className="bg-base-100 h-12 flex justify-between px-8 items-center shadow-xl ">
      <div className="h-full">
        <NavLink to="/">
          <img
            src="/react.svg"
            alt="Website logo"
            className="object-contain max-h-full py-2 animate-spin-slow"
          />
        </NavLink>
      </div>

      <HorizontalNav navLinks={navLinks} />

      <div className="[&>*:hover]:text-primary [&>*]:duration-300 [&>*]:transition-colors flex items-center space-x-2">
        <Anchor
          href="https://github.com/Fractal-Tess/Turborepo-React"
          newTab={true}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6" />
        </Anchor>
        <ThemeToggle onClick={themeCtx?.toggleTheme} />
      </div>
    </nav>
  );
}
