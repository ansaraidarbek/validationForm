let loginForm = document.getElementById("loginForm");

const isValidName = (name, message) =>{
    let isValid = !(/\d/.test(name));
    message.msg = isValid ? null : "Ensure name does not contain numbers!";
    return isValid; 
}

const isValidEmail = (email, message) =>{
    let isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    message.msg = isValid ? null : "Email is not valid!";
    return isValid; 
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (name.value === "" || email.value === "" || message.value === "") {
    alert("Ensure no fields are empty!");
  } else {
    let err = {msg : null};
    if (isValidName(name.value, err) && isValidEmail(email.value, err)) {
        alert(`We recieved your text '${message.value}'`);
        loginForm.reset();
    }else{
        alert(err.msg);
    }
  }
});