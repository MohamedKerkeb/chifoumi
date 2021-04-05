import React, { useState } from 'react';
import Footer from './Components/footer';
import Header from './Components/Header';
import Playing from './Components/Play';

import styled from 'styled-components';

import { GlobalStyle } from './config/GlobalStyle';

const AppWrapper = styled.div`
	height: 100vh;
	wid0th: 100vws;
`;

const AppContainer = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 100px auto 50px;

	@media only screen and (min-width: 960px) {
		height: 100%;
		width: 100%;
	}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<AppWrapper>
				<AppContainer>
					<Header />
					<Playing />
					<Footer />
				</AppContainer>
			</AppWrapper>
		</>
	);
}

export default App;
