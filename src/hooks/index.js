import { useState, useEffect } from 'react';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

export const useFocusInput = input => {
	const [width, setWidth] = useState('0');
	const [heigth, setHeigth] = useState('0');
	const [position, setPosition] = useState({});
	const { width: winWidth } = useWindowDimensions();

	console.log(winWidth);

	useEffect(() => {
		switch (input) {
			case 'number':
				if (winWidth < 405) {
					setHeigth('30px');
					setPosition({
						top: '42%',
						left: '5%'
					});
				} else {
					setHeigth('40px');
					setPosition({
						top: '44%',
						left: '5%'
					});
				}
				setWidth('90%');
				break;
			case 'fullname':
				if (winWidth < 405) {
					setHeigth('30px');
					setWidth('73%');
					setPosition({
						top: '75%',
						left: '2%'
					});
				} else {
					setHeigth('50px');
					setWidth('77%');
					setPosition({
						top: '77%',
						left: '2%'
					});
				}
				break;
			case 'date':
				if (winWidth < 405) {
					setHeigth('40px');
					setPosition({
						top: '74%',
						left: '78%'
					});
				} else {
					setHeigth('50px');
					setPosition({
						top: '77%',
						left: '80%'
					});
				}
				setWidth('17%');
				break;
			default:
				break;
		}
	}, [input, winWidth]);

	return [width, heigth, position];
};
