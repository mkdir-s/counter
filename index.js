const counterDiv = document.querySelector('.js-counter');
const counterIncr = document.querySelector('.js-incr-button');
const counterClear = document.querySelector('.js-clear-button');


function render () {
    counterDiv.innerHTML = counter;
}
function increment () {
    counter++;
}
function clear () {
    counter = 0;
}

let counter = 0;


counterIncr.addEventListener('click', () => {
    increment();
    render();
})
counterClear.addEventListener('click', () => {
    clear();
    render();
})
render()