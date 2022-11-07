import { Theme, themes } from '$types/Theme';
import { createContext, PropsWithChildren, useState } from 'react';
import Cookies from 'js-cookie';

const ONE_YEAR = 1000 * 86400 * 365;

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeCtx = createContext<ThemeState | null>(null);

const isTheme = (theme: string): theme is Theme =>
  themes.includes(theme as Theme);

const preferredTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getTheme = (): Theme => {
  const theme = localStorage.getItem('theme');

  if (theme && isTheme(theme)) return theme;

  return preferredTheme();
};

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(getTheme());

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    Cookies.set('theme', nextTheme, {
      path: '/',
      expires: new Date(new Date().getTime() + ONE_YEAR)
    });
  };
  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      <div className={theme} data-theme={theme}>
        {children}
      </div>
    </ThemeCtx.Provider>
  );
}
