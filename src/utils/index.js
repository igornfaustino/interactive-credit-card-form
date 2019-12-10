const VISA = require('../assets/visa.png');
const MASTERCARD = require('../assets/mastercard.png');

export const useCardImage = cardType => {
	switch (cardType) {
		case 'visa':
			return VISA;
		case 'mastercard':
			return MASTERCARD;
		default:
			return VISA;
	}
};
