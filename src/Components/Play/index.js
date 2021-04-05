import React, { useState } from 'react';
import Button from '../Button';
import Score from '../Score';
import Soluce from '../Soluce';

import { PlayContainer, PlayWrapper } from './Play';

const Playing = () => {
	const [choix, setChoix] = useState();
	const [game, setGame] = useState([
		{
			choixComp: '',
			win: '',
		},
	]);
	const [computer, setComp] = useState();
	const [countP, setCountP] = useState(0);
	const [countC, setCountC] = useState(0);

	const ArrayPlay = ['Paper', 'Scissors', 'Rock'];

	const Play = (player) => {
		let comp = Math.floor(Math.random() * ArrayPlay.length);
		setComp(comp);
		setChoix(player);

		if (comp === player) {
			setGame({ choixComp: comp, win: 'Drawww' });
		} else if (player === 0 && comp === 1) {
			setGame({ choixComp: comp, win: 'You Lost' });
			setCountC(countC + 1);
		} else if (player === 0 && comp === 2) {
			setGame({ choixComp: comp, win: 'You Win' });
			setCountP(countP + 1);
		} else if (player === 1 && comp === 0) {
			setGame({ choixComp: comp, win: 'You Win' });
			setCountP(countP + 1);
		} else if (player === 1 && comp === 2) {
			setGame({ choixComp: comp, win: 'You Lost' });
			setCountC(countC + 1);
		} else if (player === 2 && comp === 0) {
			setGame({ choixComp: comp, win: 'You Lost' });
			setCountC(countC + 1);
		} else if (player === 2 && comp === 1) {
			setGame({ choixComp: comp, win: 'You Win' });
			setCountP(countP + 1);
		}
	};

	return (
		<>
			<PlayWrapper>
				<PlayContainer>
					<Button play={Play} />
					<Score computer={countC} player={countP} />
					<Soluce winLost={game.win} playerChoix={choix} computerChoix={game.choixComp} />
				</PlayContainer>
				{/* <button onClick={openModal}>ShowModal</button> */}
				{/* <Modal showModal={showModal} setShowModal={setShowModal} setCountC={setCountC} setCountP={setCountP} /> */}
			</PlayWrapper>
		</>
	);
};

export default Playing;
