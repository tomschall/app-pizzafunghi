import { createContext, ReactElement, useContext, useEffect, useState } from 'react';

export const THEME = {
	LIGHT: 'light',
	DARK: 'dark',
};

type TThemeContextProps = {
	children: ReactElement;
};

type TThemeContextData = {
	theme: string | undefined;
	toggleTheme: () => void;
};

// TODO: add document page to check in the header what user prefers and set it to html element

const ThemeContext = createContext({} as TThemeContextData);
export const ThemeContextProvider = ({ children }: TThemeContextProps) => {
	const [theme, setTheme] = useState<string | undefined>(undefined);
	function toggleTheme() {
		const oldTheme = localStorage.getItem('theme');
		const newTheme = oldTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		const root = window.document.documentElement;

		root.classList.remove(THEME.LIGHT);
		root.classList.remove(THEME.DARK);

		if (!root || !newTheme) {
			return;
		}

		root.classList.add(newTheme);

		// save the newTheme in local storage
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
