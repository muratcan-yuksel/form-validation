//get the username
const userName= document.getElementById("userName");
    const userError= document.getElementById("userError");

function userInput () {
    if( userName.value.length<5 || userName.value.length>15){
        userError.textContent= "User name must be between 5-15 characters long";
    } else {
        userError.textContent="";
    }
}
    // function removeError () {

     
    // }