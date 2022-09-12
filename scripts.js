//--> SCRIPT DE NEW WORD

let secretWord = ["ALURA", "FREDY", "ALMEYDA", "ALANIA", "ANTONIO"]; //lista predefinida

const add = document.getElementById("add"); // optenemos el valor del input


add.addEventListener("submit",
    function(event) {
        event.preventDefault(); //cancelando el comportamiento por defecto del navegador
        let addData = new FormData(add); //obteniendo datos

        let newWord = addData.get("enteredWord");
        let capitalWord = false; //veremos si la palabra ingresada es una letra y no un numero ni caracteres
        for (var i = 0; i < newWord.length; i++) {
            if (newWord.charCodeAt(i) >= 65 && newWord.charCodeAt(i) <= 90) {
                capitalWord = true;
            } else {
                capitalWord;
                break;
            }
        }
        if (capitalWord == true) {
            secretWord.push(newWord);
            alert(secretWord)
        } else {
            alert("Ingrese nuevamente un palabra en mayusculas");
        }
        add.reset();
        localStorage.setItem("Lista de palabras", secretWord)
    }
)

const cancel = document.getElementById("cancel");
cancel.addEventListener("submit",
    function(event) {
        event.preventDefault(); //cancelando el comportamiento por defecto del navegador
        add.reset();
    }
)