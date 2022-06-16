const first = document.getElementById('first');
const formField = document.querySelector('form-Field');

function firsterr (){
    if (first == ""){
        showError(
            first,
            "First Name cannot be empty"
        );
    }
}
function showError(input, message){
    const formField = input.parentElement;
    formField.className = "form-Field error"

    if ((formField.className = "form-Field error" )){
    const alert_message = formField.querySelector(".alert_message");
    alert_message.style.visibility= "visible";
    alert_message.style.color = "hsl(0, 100%, 74%)"
    alert_message.innerText = message;
}
}
