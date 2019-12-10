import VMasker from 'vanilla-masker';

export const cardMasker = number =>
	VMasker.toPattern(number, '9999 9999 9999 9999');

export const dateMasker = date => VMasker.toPattern(date, '99/99');
