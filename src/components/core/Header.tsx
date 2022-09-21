import Anchor from '$components/anchor/Anchor';
import ThemeToggle from '$components/buttons/ThemeToggle';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <nav className="bg-base-100 h-12 shadow-2xl flex justify-between px-8 items-center">
      <div>{/* Logo */}</div>

      <div>{/* Nav */}</div>

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
