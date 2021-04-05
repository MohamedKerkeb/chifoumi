import React from 'react';

import Rock from '../../img/HandRock.svg';
import Hand from '../../img/Hand.svg';
import Scissors from '../../img/HandScissors.svg';
import { IconBtn, IconWrapper, Result, ResultWrapper, SoluceContainer, SoluceWrapper } from './Soluce';

const Soluce = ({ winLost, playerChoix, computerChoix }) => {
	const Icons = (icon) => {
		if (icon.icon === 0) {
			return <img src={Hand} alt='Paper' />;
		} else if (icon.icon === 1) {
			return <img src={Scissors} alt='Scissors' />;
		} else if (icon.icon === 2) {
			return <img src={Rock} alt='Rock' />;
		}
		return '';
	};

	return (
		<>
			<SoluceWrapper>
				<SoluceContainer>
					<ResultWrapper>
						<Result>{winLost}</Result>
					</ResultWrapper>
					<IconWrapper>
						<IconBtn>
							<Icons icon={playerChoix} />
						</IconBtn>
						<IconBtn>
							<Icons icon={computerChoix} />
						</IconBtn>
					</IconWrapper>
				</SoluceContainer>
			</SoluceWrapper>
		</>
	);
};

export default Soluce;
