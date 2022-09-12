function blankSpaces() {
    let blank = ''
    for (let i = 0; i < randomWord.length; i++) { //Creamos guiones con el tamañio de la palabra
        blank = '_' + blank
    }
    return blank
}


let secretWord = ["ALURA", "FREDY", "ALMEYDA", "ALANIA", "ANTONIO"];

const randomWordIndex = Math.round(Math.random() * (secretWord.length - 1)) //obtenemos el indice de la palabra aletoria

const randomWord = secretWord[randomWordIndex]; //obteniendo la palabra aletoria
console.log(randomWord);

const blank = blankSpaces() //llamamos a la funcion 
let output = blank
document.getElementById('text').innerHTML = blank
console.log(document.getElementById('text').innerText)

const send = document.getElementById('sendWord');

send.addEventListener('keydown',
    function(event) {

        let keyValue = event.key;
        const counter = 0;
        const incorrectWord = "";
        // var enteredWord = randomWord[i].toUpperCase();

        if (randomWord.includes(keyValue)) { //busca si la letra ingresada se encuentra en la palabra aletoria

            const index = randomWord.indexOf(keyValue)
            output = output.split('');

            output[index] = keyValue;

            output = output.join('');
        } else {

            event.preventDefault()
        }
        console.log(output);
        document.getElementById('text').innerHTML = output
    })

const desist = document.getElementById("buttonDesist");

desist.addEventListener('submit',
    function(event) {
        event.preventDefault();
        send.reset();
    })