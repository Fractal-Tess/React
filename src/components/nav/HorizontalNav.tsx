import { NavLink } from 'react-router-dom';
import type { NavLink as NL } from '$types/NavLink';

type Props = {
  navLinks: NL[];
};

export default function Nav({ navLinks }: Props) {
  return (
    <nav>
      <ul className="flex space-x-4 ">
        {navLinks.map(({ content, target }, i) => {
          return (
            <li key={i}>
              <NavLink
                end
                to={target.href}
                className={({ isActive }) =>
                  isActive
                    ? 'underline decoration-primary underline-offset-4'
                    : ''
                }
              >
                {content.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
