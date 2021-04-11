import { useEffect, useState } from 'react';
import { getFromLs, setTols } from '../utils/storage';

export const useTheme = () => {
	const themes = getFromLs('all-themes');
	const [theme, setTheme] = useState(themes.data.light);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setMode = (mode) => {
		setTols('theme', mode);
		setTheme(mode);
	};

	useEffect(() => {
		const localTheme = getFromLs('theme');
		localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
		setThemeLoaded(true);
	}, []);

	return { theme, themeLoaded, setMode };
};
