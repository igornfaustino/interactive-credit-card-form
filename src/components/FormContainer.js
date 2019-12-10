import React, { useState } from 'react';
import './FormContainer.scss';
import { Card } from './Card';
import { cardMasker, dateMasker } from '../utils/masks';

export const FormContainer = () => {
	const [number, setNumber] = useState('');
	const [fullname, setFullname] = useState('');
	const [date, setDate] = useState('');
	const [cvv, setCvv] = useState('');
	const [focus, setFocus] = useState('');

	return (
		<div className="form-container">
			<Card
				number={number}
				fullname={fullname}
				date={date}
				cvv={cvv}
				focus={focus}
			/>
			<form className="content">
				<div>
					<label htmlFor="number">
						Number
						<input
							id="number"
							value={number}
							onChange={e =>
								setNumber(cardMasker(e.target.value))
							}
							onFocus={() => setFocus('number')}
							onBlur={() => setFocus('')}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="fullname">
						Full name
						<input
							id="fullname"
							value={fullname}
							onChange={e =>
								setFullname(e.target.value.toUpperCase())
							}
							onFocus={() => setFocus('fullname')}
							onBlur={() => setFocus('')}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="date">
						Expire date
						<input
							id="date"
							value={date}
							onChange={e => setDate(dateMasker(e.target.value))}
							onFocus={() => setFocus('date')}
							onBlur={() => setFocus('')}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="cvv">
						CVV
						<input
							id="cvv"
							value={cvv}
							onChange={e => setCvv(e.target.value)}
							onFocus={() => setFocus('cvv')}
							onBlur={() => setFocus('')}
						/>
					</label>
				</div>
				<div className="submit">
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};
