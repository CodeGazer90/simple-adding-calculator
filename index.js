let button = document.querySelector('.button');
let input1 = document.getElementById('firstInput');
let input2 = document.getElementById('secondInput');
let screen = document.getElementById('screen');

function addNumbers(a,b){

    screen.innerHTML = parseInt(a)+parseInt(b);

}

function reset(){
    screen.innerHTML = "00.00";
}

button.addEventListener("click", function(){
   
    addNumbers(firstInput.value, secondInput.value);
    
    
});

