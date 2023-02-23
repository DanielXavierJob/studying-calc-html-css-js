var display = 0;
var history = 0;
var equal = false;
$(document).ready(() => {

})

function Display() {
   document.getElementById("display").innerHTML = display;
}
function Display_history() {
    document.getElementById("history").innerHTML = display;
}
function Add(x) {
    switch (x) {
        case "+":
            if(display.length >= 1){
                if(display.slice(-1) == "+"){
                    alert('Já existe uma operação em andamento, adicione um novo numero ou retraia');
                }else{
                    display = display + "" + x;
                    history = display;
                    Display_history();
                }
            }
            equal = true;
            break;
        case "-":
            display = display + "" + x;
            history = display;
            Display_history();
            break;
        case "*":
            display = display + "" + x;
            history = display;
            Display_history();
            break;
        case "/":
            display = display + "" + x;
            history = display;
            Display_history();
            break;
        case "=":
            display = eval(display);
            Display();
            break;
        case "c":
            if (display.length > 1) {
                display = display.substring(0, display.length - 1);
                Display();


            } else {
                display = 0;
                Display();

            }
            break;
        default:
            if (display == 0) {
                display = x;
             
            } else {
                if(equal == false){
                    if (display.length >= 8) {
                        display = display.substring(0, display.length - 1);
                        display = display + "" + x;
    
                    } else {
                        display = display + "" + x;
    
                    }
                }else{
                    display = x;
                    equal = false;
                }
                
               

            }
            Display();
            break;
    }

    console.log(x, display);
}


function operation(num) {

}
function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);