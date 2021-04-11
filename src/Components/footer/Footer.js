import styled from 'styled-components';

export const FooterWrapper = styled.div`
	width: 100%;
	height: 50px;
`;

export const FooterContainer = styled.div`
	width: 100%;
	margin: 20px auto 0 auto;
	height: 100%;
	background: ${({ theme }) => theme.colors.header.background};
	color: ${({ theme }) => theme.colors.header.text};

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FooterP = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
`;
