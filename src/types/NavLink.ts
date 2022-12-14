import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type NavLink = {
  target: {
    href: string;
    newTab?: boolean;
  };
  content: {
    text?: string;
    icon?: IconDefinition;
  };
};
