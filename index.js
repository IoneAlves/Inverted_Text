const invertedText = document.querySelector('#invertedText');

console.log(invertedText.value)

let newWord = [];
let letters = '';
let letter = '';
let word = '';

function keyPress() {
    let text = document.querySelector('#text').value;
    invertedText.textContent = text.split('').reverse().join('');
}
