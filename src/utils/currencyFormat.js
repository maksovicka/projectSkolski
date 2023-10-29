const getSign = (num) => (num > 0 ? '+' : '');
const currencyFormat = (num) => getSign(num) + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,');

export default currencyFormat;
