import React from 'react';
import { ScoreContainer, ScoreName, Scores, ScoreWrapper, ScoreNameWrapper, ScoreTrait } from './Score';

const Score = ({ player, computer }) => {
	return (
		<>
			<ScoreWrapper>
				<ScoreContainer>
					<ScoreNameWrapper>
						<ScoreName>Player</ScoreName>
						<Scores>{player}</Scores>
						<ScoreTrait> - </ScoreTrait>
						<Scores>{computer}</Scores>
						<ScoreName>Computer</ScoreName>
					</ScoreNameWrapper>
				</ScoreContainer>
			</ScoreWrapper>
		</>
	);
};

export default Score;
