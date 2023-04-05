var input = 'turpentine and turtles';
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
    for(j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(vowels[j]);
        }
    }
}
console.log(resultArray.join('').toUpperCase());
