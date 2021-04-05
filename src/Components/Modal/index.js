import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './Modal';

const Modal = ({ showModal, setShowModal, setCountP, setCountC }) => {
	const modalRef = useRef();

	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translate(0%)` : `translateY(-100%)`,
	});

	const closeModal = (evt) => {
		if (modalRef.current === evt.target) {
			setShowModal((prev) => !prev);
			setCountC(0);
			setCountP(0);
		}
	};

	return (
		<>
			{showModal ? (
				<Background ref={modalRef} onClick={closeModal}>
					<animated.div style={animation}>
						<ModalWrapper showModal={showModal}>
							<ModalImg
								src='https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1235&q=80'
								alt='You Win'
							/>
							<ModalContent>
								<h1>You Win!!!</h1>
								<p>Félicition </p>
								<button>Replay</button>
							</ModalContent>
							<CloseModalButton aria-label='Close Modal' onClick={() => setShowModal((prev) => !prev)} />
						</ModalWrapper>
					</animated.div>
				</Background>
			) : null}
		</>
	);
};

export default Modal;
