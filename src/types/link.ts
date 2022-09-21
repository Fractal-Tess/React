import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Link = {
  target: {
    href: string;
    openInNewTab?: boolean;
  };
  icon?: IconDefinition;

  // The class identifiers are meant to be used inside of component parents
  classes?: {
    iconClass?: string;
    anchorClass?: string;
  };
} & Partial<TextContent>;

export type TextContent = {
  textContent: {
    text: string;
    prefix?: string;
  };
  classes?: {
    prefixClass?: string;
    textClass?: string;
  };
};
