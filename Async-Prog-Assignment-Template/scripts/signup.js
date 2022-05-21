

document.querySelector("form").addEventListener("submit", signUpFun);

var userData= JSON.parse(localStorage.getItem("userCreds")) || [];

function signUpFun(){

    event.preventDefault();

   


    var userObj={
        name: document.querySelector("#name").value,
        
        phone: document.querySelector("#num").value,
        
        email: document.querySelector("#email").value,
         
        password: document.querySelector("#pass").value,
    };

    // console.log(userObj);

    userData.push(userObj)

    // console.log(userObj);

    localStorage.setItem("userCreds", JSON.stringify(userData));

}