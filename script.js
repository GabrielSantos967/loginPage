function register() {
    const userName = document.getElementById("username").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const cPassword = document.getElementById("cPassword").value;

    if (password === cPassword) {
        let newUser = {
            name: userName,
            email: mail,
            password: password
        };

        let existingData = localStorage.getItem("userData");

        if (existingData) {
            try {
                existingData = JSON.parse(existingData);
                
                if (!Array.isArray(existingData)) {
                    existingData = [];
                }
            } catch (error) {
                existingData = [];
            }
            
            existingData.push(newUser);
        } else {
            existingData = [newUser];
        }

        localStorage.setItem("userData", JSON.stringify(existingData));
    } else {
        alert("Senhas diferentes");
    }
}

function login(){
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    const savedData = localStorage.getItem("userData")

    if (savedData) {
        const users = JSON.parse(savedData);

        const user = users.find(user => user.email === email);

        if (user && user.password === password){
            location.href = "endpage.html"
        }
        else {
            alert("nenhum usuario encontrado")
        }
    }
}