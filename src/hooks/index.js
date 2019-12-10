import { useState, useEffect } from 'react';

export const useFocusInput = input => {
	const [width, setWidth] = useState('100%');
	const [heigth, setHeigth] = useState('100%');
	const [position, setPosition] = useState({});

	useEffect(() => {
		switch (input) {
			case 'number':
				setWidth('90%');
				setHeigth('40px');
				setPosition({
					top: '44%',
					left: '5%'
				});
				break;
			case 'fullname':
				setWidth('77%');
				setHeigth('40px');
				setPosition({
					top: '77%',
					left: '2%'
				});
				break;
			case 'date':
				setWidth('17%');
				setHeigth('50px');
				setPosition({
					top: '77%',
					left: '80%'
				});
				break;
			default:
				break;
		}
	}, [input]);

	return [width, heigth, position];
};
