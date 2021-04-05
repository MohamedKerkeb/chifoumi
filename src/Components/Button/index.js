import React from 'react';
import Rock from '../../img/HandRock.svg';
import Hand from '../../img/Hand.svg';
import Scissors from '../../img/HandScissors.svg';

import { Btn, ButtonContainer, ButtonWrapper } from './Button';

import { GiPaper, GiRock, GiScissors } from 'react-icons/gi';

const Button = ({ play }) => {
	return (
		<>
			<ButtonWrapper>
				<ButtonContainer>
					<Btn onClick={() => play(0)}>
						{/* <GiPaper />
						 */}
						<img src={Hand} alt='Paper' />
					</Btn>
					<Btn onClick={() => play(1)}>
						{/* <GiScissors /> */}
						<img src={Scissors} alt='Scissors' />
					</Btn>
					<Btn onClick={() => play(2)}>
						{/* <GiRock /> */}
						<img src={Rock} alt='Rock' />
					</Btn>
				</ButtonContainer>
			</ButtonWrapper>
		</>
	);
};

export default Button;
