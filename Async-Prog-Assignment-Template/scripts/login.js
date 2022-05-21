

document.querySelector("form").addEventListener("submit", loginFun);

var regUsers =JSON.parse(localStorage.getItem("userCreds"))

console.log(regUsers);


function loginFun() {
    event.preventDefault();
    var enterEmail= document.querySelector("#email").value;

    var enterPass = document.querySelector("#pass").value;

    // console.log(email, pass);


    for(var i =0; i<regUsers.length; i++){
        console.log(regUsers[i])

        if(regUsers[i].email ==enterEmail && regUsers[i].password==enterPass)
        {
             alert("login Successful ");
             window.location.href="index.html";
             break;
        }
        else
        {
            alert("invalid Credentials");

        }
    }
}