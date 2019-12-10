import React, { useEffect, useState, useMemo, useRef } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';
import cardValidator from 'card-validator';

import './Card.scss';
import { useCardImage } from '../utils';
import { useFocusInput } from '../hooks';

const NUMBER_PLACEHOLDER = '#### #### #### ####';
const NAME_PLACEHOLDER = 'FULL NAME';
const DATE_PLACEHOLDER = 'MM/YY';
const CVV_PLACEHOLDER = 'CVV';
const CHIP = require('../assets/chip.png');

export const Card = ({ number, fullname, date, cvv, focus }) => {
	const [cardType, setCardType] = useState('visa');
	const cardImage = useCardImage(cardType);
	const [width, height, position] = useFocusInput(focus);
	const focusRef = useRef(null);

	useEffect(() => {
		if (focusRef.current) {
			focusRef.current.style.width = width;
			focusRef.current.style.height = height;
			focusRef.current.style.top = position.top;
			focusRef.current.style.left = position.left;
		}
	}, [focus, height, position.left, position.top, width]);

	useEffect(() => {
		const { card } = cardValidator.number(number);
		if (card) {
			setCardType(card.type);
		}
	}, [number]);

	console.log(cardType);

	const CardNumber = useMemo(
		() =>
			NUMBER_PLACEHOLDER.split('').map((n, idx) => {
				const val = idx + 1 <= number.length ? number[idx] : n;
				return (
					// eslint-disable-next-line react/no-array-index-key
					<span key={`${val}-${idx}`} className="number_item">
						{val}
					</span>
				);
			}),
		[number]
	);

	const displayDate = date.concat(DATE_PLACEHOLDER.substr(date.length));

	return (
		<div className="card">
			<div
				className={`card__inner ${focus === 'cvv' &&
					'card__inner-flip'}`}
			>
				<div className="card__inner--front">
					<div className="card-padding">
						<span
							ref={focusRef}
							className={`focus ${
								focus && focus !== 'cvv'
									? 'focus-enable'
									: 'focus-disable'
							}`}
						/>
						<img src={CHIP} className="chip" alt="card-chip" />
						<CSSTransitionGroup
							transitionName="number"
							transitionEnterTimeout={0}
							transitionLeave={false}
							className="card-logo"
						>
							<img
								className="card-logo"
								src={cardImage}
								key={cardType}
								alt={`${cardType}-logo`}
							/>
						</CSSTransitionGroup>
						<div className="number">
							<CSSTransitionGroup
								transitionName="number"
								transitionEnterTimeout={0}
								transitionLeave={false}
							>
								{CardNumber}
							</CSSTransitionGroup>
						</div>
						<div className="name">
							{fullname || NAME_PLACEHOLDER}
						</div>
						<div className="date">
							<span className="date-label">Expire date</span>
							<br />
							{displayDate}
						</div>
					</div>
				</div>
				<div className="card__inner--back">
					<div className="black-line" />
					<div className="white-line">
						<div className="cvv">{cvv || CVV_PLACEHOLDER}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
