document.getElementById("loginform").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pw = document.getElementById("password").value.trim();
    let data = JSON.parse(localStorage.getItem("data"));

    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === pw) {
            window.location.href = "../html/index2.html";

        }
    }

    let error =document.getElementById("error")    
    let p =document.createElement("p");
    p.style.color="red"
    error.appendChild(p)
    p.innerText="passward or email not correct "  
});