const VISA = require('../assets/visa.png');
const MASTERCARD = require('../assets/mastercard.png');
const DINERSCLUB = require('../assets/dinersclub.png');
const DISCOVER = require('../assets/discover.png');
const JCB = require('../assets/jcb.png');

export const useCardImage = cardType => {
	switch (cardType) {
		case 'visa':
			return VISA;
		case 'mastercard':
			return MASTERCARD;
		case 'diners-club':
			return DINERSCLUB;
		case 'discover':
			return DISCOVER;
		case 'jcb':
			return JCB;
		default:
			return VISA;
	}
};
