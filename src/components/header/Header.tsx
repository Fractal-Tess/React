import Anchor from '$components/anchor/Anchor';
import ThemeToggle from '$components/buttons/ThemeToggle';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '$assets/react.svg';

// TODO: Is active
type Link = {
  to: string;
  text: string;
  isActive?: boolean;
};

const NavLinks: Link[] = [
  { text: 'Home', to: '/' },
  { text: 'Blog', to: '/blog' },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' },
  { text: 'Does not exist', to: '/foo-spam-eggs' }
];

export default function Header() {
  return (
    <nav className="bg-base-100 h-12 flex justify-between px-8 items-center shadow-xl ">
      <div className="h-full">
        <NavLink to="/">
          <img
            src={logo}
            alt="Website logo"
            className="object-contain max-h-full py-2"
          />
        </NavLink>
      </div>

      <div className="flex space-x-8 text-xl font-bold">
        {NavLinks.map(({ to, text }, i) => {
          return (
            <NavLink
              end={true}
              key={i}
              to={to}
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              {text}
            </NavLink>
          );
        })}
      </div>

      {/* Github/Theme */}
      <div className="flex items-center space-x-4">
        <Anchor
          icon={faGithub}
          target={{
            href: 'https://github.com/Fractal-Tess/React',
            openInNewTab: true
          }}
          classes={{ iconClass: 'h-6', anchorClass: 'hover:text-primary' }}
        />
        <ThemeToggle />
      </div>
    </nav>
  );
}
