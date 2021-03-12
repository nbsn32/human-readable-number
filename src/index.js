module.exports = function toReadable (number) {
    const result = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    let strNumber = number.toString().split('');

    if (number.toString().length === 1) {
        return result[number];
    }

    if (number.toString().length === 2) {
       return result[number] 
        ? result[number]
        : result[strNumber[0] + 0] + ' ' + result[strNumber[1]];
    }

    if (number.toString().length === 3) {
        return  (number % 100 === 0)
        ? result[strNumber[0]] + ' ' + "hundred"
       : (strNumber[1] == 0)
        ? result[strNumber[0]] + ' ' + "hundred" + ' ' + result[strNumber[2]]
        : (result[strNumber[0]] + ' ' + "hundred" + ' '  + (result[strNumber[1] + strNumber[2]] || result[strNumber[1] + 0] + ' ' + result[strNumber[2]]));
    }
};