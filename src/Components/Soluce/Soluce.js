import styled from 'styled-components';

export const SoluceWrapper = styled.div`
	width: 100%;
`;

export const SoluceContainer = styled.div`
	width: 100%;
	margin: auto;

	@media only screen and (min-width: 960px) {
		height: 100%;
		width: 960px;
	}
`;

export const ResultWrapper = styled.div`
	height: 50px;
	padding: 10px 0;
`;
export const Result = styled.p`
	font-size: 2.5rem;
	font-weight: 400;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
export const IconWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 150px;
`;
export const IconBtn = styled.div`
	border: 15px solid #379683;
	border-radius: 50%;
	width: 150px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;
	${
		'' /* box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
		rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px; */
	}

	box-shadow: rgba(0,0,0,0.6) 0px 3px inset, rgba(0,0,0,0.6) 0px 3px;

	> img {
		height: 75px;
	}
`;

// box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
