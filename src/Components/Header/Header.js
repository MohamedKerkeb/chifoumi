import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 100px;
	background: #05386b;
	${'' /* border: 1px dashed red; */}
`;

export const HeaderContainer = styled.div`
	width: 50%;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px dashed red;
`;

export const LogoH1 = styled.h1`
	font-size: 2.5rem;
	line-height: 1;
	color: ${({ theme }) => theme.colors.header.text} ${'' /* color: #8ee4af; */};
	height: 50%;
	width: 100%;
`;

export const themeWrapper = styled.div`
	width: 100%;
	height: 50%;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Themebutton = styled.button`
	border: 0;
	border-radius: 4px;
	cursor: pointer;
	border: 1px solid #000;
	margin-right: 10px;
	width: 30px;
	height: 30px;
`;
