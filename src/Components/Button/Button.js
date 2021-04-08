import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	width: 100%;
`;

export const ButtonContainer = styled.div`
	margin: 20px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const Btn = styled.button`
	padding: 12px 24px;
	border: 2px solid #05386b;
	border-radius: 25%;
	background: ${({ theme }) => theme.colors.button.background};
	color: #fff;
	outline: 0;
	position: relative;
	top: 0;
	box-shadow: 0px 6px #379683;
	transition: 0.05s;
	cursor: pointer;
	margin: 10px;
	width: 150px;
	height: 150px;
	font-size: 2.5rem;

	&:hover {
		top: 3px;
		box-shadow: 0px 3px #8ee4af;
	}

	&:active {
		top: 6px;
		box-shadow: 0px 0px rgb(255, 38, 0);
	}

	> img {
		width: 100%;
	}

	@media only screen and (max-width: 375px) {
		height: 100px;
		width: 100px;
	}
`;
