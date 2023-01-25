export const getPositiveNegativeNumberColor = (number) => {
    if(number === 0) return 'white';
    else if (number > 0) return 'green';
    else return 'red';
};

export const transformMarketNumber = (number) => {
    if(number === 0) return '0.00';
    else if (number > 0) return `+${number.toFixed(2)}`;
    else return number.toFixed(2)
};
