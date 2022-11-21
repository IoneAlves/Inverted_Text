const invertedText = document.querySelector('#invertedText');

function keyPress() {
    let text = document.querySelector('#text').value;
    invertedText.textContent = text.split('').reverse().join('');
}
