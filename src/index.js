module.exports = function toReadable (number) {
const humanNumber = {
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' :'nineteen',
    '20' : 'twenty',
    '90' : 'ninety',
    '80' : 'eighty',
    '70' : 'seventy',
    '60' : 'sixty',
    '50' : 'fifty',
    '40' : 'forty',
    '30' : 'thirty'
}
 
if(number == 0) return 'zero';

let result = [
    Number.parseInt(number/100) > 0 ?  humanNumber[Number.parseInt(number/100)] + ' hundred' : '',
    Number.parseInt(number%100) > 19 ? humanNumber[Number.parseInt(number%100/10) * 10] : humanNumber[Number.parseInt(number%100)],
    //humanNumber[Number.parseInt(number%100)] ,
    Number.parseInt(number%100) > 19  ? humanNumber[Number.parseInt(number%100%10)] : '',
];

    console.log(result);
    return result.join(' ').trim();
}
