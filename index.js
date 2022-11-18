const invertedText = document.querySelector('#invertedText');

console.log(invertedText.value)

let newWord = [];
let letters = '';
let letter = ''
let word = '';

function keyPress() {
    let text = document.querySelector('#text').value;
    if(text != "") {
        newWord.push(text);
        if(newWord != ''){
            letter = newWord[newWord.length - 1]
            word.concat(letter,letters)
            invertedText.value = word.value;
        }
    }   
}

// let letters = text.value.split('')
// let newWord = '';

// for (let index = 1; index <= letters.length; index++) {
//     let element = letters[letters.length - index];
//     newWord = newWord + element;
// }

// console.log(newWord);    
