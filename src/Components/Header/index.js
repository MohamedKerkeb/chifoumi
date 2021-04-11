import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { useTheme } from '../../config/theme';
import { getFromLs } from '../../utils/storage';

import { HeaderContainer, HeaderWrapper, LogoH1, themeWrapper, Themebutton } from './Header';

const Header = (props) => {
	const themesFromStore = getFromLs('all-themes');
	const [data, setData] = useState(themesFromStore.data);
	const [themes, setThemes] = useState([]);
	const { setMode } = useTheme();

	const themeSwitcher = (selectedTheme) => {
		setMode(selectedTheme);
		props.selected(selectedTheme);
	};

	useEffect(() => {
		setThemes(_.keys(data));
	}, [data]);

	useEffect(() => {
		props.newTheme && updateThemeCard(props.newTheme);
	}, [props.newTheme]);

	const updateThemeCard = (theme) => {
		const key = _.keys(theme)[0];
		const updated = { ...data, [key]: theme[key] };
		setData(updated);
	};

	const Card = (props) => {
		return (
			<themeWrapper
				style={{
					height: '50%',
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Themebutton
					onClick={(theme) => themeSwitcher(props.theme)}
					style={{
						backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`,
					}}></Themebutton>
			</themeWrapper>
		);
	};

	return (
		<>
			<HeaderWrapper>
				<HeaderContainer>
					<LogoH1>Chifoumi</LogoH1>
					{themes.length > 0 && themes.map((theme) => <Card theme={data[theme]} key={data[theme].id} />)}
				</HeaderContainer>
			</HeaderWrapper>
		</>
	);
};

export default Header;
