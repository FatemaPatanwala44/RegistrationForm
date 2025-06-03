//First name and last name
const inputform = document.getElementById("inputform");
function formValidation(valid){
    const first = document.getElementById("fname");
    const last = document.getElementById("lname");
    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");

    fnameError.textContent = "";
    console.log(fnameError, first.value);
    if (first.value.length > 10 || first.value.length === 0) {
        fnameError.textContent = "First Name must be less than or equal to 10 characters!";
        valid = false;   
    }
    
    lnameError.textContent = "";
    if (last.value.length > 10 || last.value.length === 0) {
        lnameError.textContent = "Last Name must be less than or equal to 10 characters!";
        valid = false;
    }
    const password = document.getElementById("pswrd").value.trim();
    valid = isPassValid(password);

    return valid;
}

inputform.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("event triggered")
    let valid = true;
    // { // this object is to identify the state of the field
    //     fname: true, 
    //     lname: true,
    //     email: true,
    //     pass: true,
    //     confirmPass: true,
    //     privacyPolicy: true
    // };

    valid = formValidation(valid); // first name and last name check


    // let validKeys = Object.keys(); // ["fname", "lname" ...]
    // let isFormValid = true;
    // for(let i=0; i<validKeys.length; i++){
    //     if( !valid[validKeys[i]] ){
    //         isFormValid = false;
    //         break;
    //     }
    // }
    if (valid) {
        alert("Form is valid and submitted !!");
        inputform.reset();
    } 
    
});
//password
function isPassValid(password){
    const l = password.length;
    if(l<8 || l>15){
        return false;
    }
    let number = false;
    let uppercase = false;
    let lowercase = false;
    let spchar = false;

    specialchars = "!@#$%^&*()_+~`,.></?;:'|{}[]";
    
    for (let char of password) {
        if(!isNaN(char)){
        number = true;
        }else if( char === char.toUpperCase() && char !== char.toLowerCase()){
            uppercase = true;
        }else if( char === char.toLowerCase() && char !== char.toUpperCase()){
            lowercase = true;
        }else if( specialchars.includes(char)){
            spchar = true;
        }
    }
    const isPassValid =uppercase && lowercase && number && spchar;
    if(!isPassValid){
        const invalid = document.getElementById("invalid");
        invalid.textContent = "Password must be 8-15 characters, include an uppercase, a loweracse and a special character!";
        // password.preventDefault(); 
    }
    const cnfrmpswrd = document.getElementById("cnfrmpswrd");
    if(!(password === cnfrmpswrd.innerText)){
        const confirmPassMsg = document.getElementById("CPError");
        confirmPassMsg.textContent = "is not a match ";
        isPassValid = false;
    }
    return isPassValid;
}

    