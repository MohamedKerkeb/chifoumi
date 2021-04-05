import styled from 'styled-components';

export const ScoreWrapper = styled.div`
	width: 100%;
	height: 150px;
`;

export const ScoreContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (min-width: 960px) {
		height: 100%;
		width: 960px;
	}
`;

export const ScoreNameWrapper = styled.div`
	border: 2px solid navy;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 60%;
	height: 50%;
`;

export const ScoreTrait = styled.span`
	font-size: 2.5rem;
`;

export const ScoreName = styled.h3`
	font-size: 1.5rem;
	background: #05386b;
	color: #fff;
	padding: 12px;
`;

export const Scores = styled.span`
	font-size: 2.5rem;
	margin: 5px;
`;
