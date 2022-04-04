// first side work 

// get pin 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    // console.log(pin)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

// get calc all number

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('matchpin-show');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const prviousNumber = calcInput.value
        const newNumber = prviousNumber + number;
        calcInput.value = newNumber;

    }
});


function verifyPin() {
    const pin = document.getElementById('display-pin').value;

    const matchPin = document.getElementById('matchpin-show').value;
    const successPin = document.getElementById('success');
    const failMessage = document.getElementById('fail');
    if (pin == matchPin) {
        successPin.style.display = 'block'
        failMessage.style.display = 'none'
    }
    else {

        failMessage.style.display = 'block'
        successPin.style.display = 'none'
    }
}