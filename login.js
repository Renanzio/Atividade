function logar() {
    var Email = document.querySelector("#email").value
    var Password = document.querySelector("#senha").value
    var btn = document.getElementById("btn")

    if (Email === "claudomiro@email.com" && Password === "Clau12345") {
        alert("Redirecionando para a página principal...")
        var form = document.getElementById("forms")
        form.addEventListener("submit", function(e){
        e.preventDefault()
})  
    }
    else {
        alert("Email ou senha incorretos.")
        var form = document.getElementById("forms")
        form.addEventListener("submit", function(e){
        e.preventDefault()
})
    }
}
function usersenhas(){
    var emailsenha = document.getElementById("emailsenha")
    alert(emailsenha.textContent)
    var form = document.getElementById("forms")
    form.addEventListener("submit", function(e){
    e.preventDefault()
})
}
function TemaEscuro(){
    document.querySelector("body").style.backgroundColor = "rgb(14, 13, 13)";
    document.querySelector("header").style.backgroundColor = "#0c1305";
    document.getElementById("navlist1").style.backgroundColor = "#0c1305";
    document.getElementById("navlist2").style.backgroundColor = "#0c1305";
    document.getElementById("navlist3").style.backgroundColor = "#0c1305";
    document.getElementById("navlist4").style.backgroundColor = "#0c1305";
    document.querySelector("footer").style.backgroundColor = "#470b0b";
    document.getElementById("divi1").style.backgroundColor = "#0d1407";
    document.getElementById("divi2").style.backgroundColor = "#0d1407";
    document.getElementById("divi3").style.backgroundColor = "#0d1407";
    document.getElementById("divi1").style.borderColor = "#0d1407";
    document.getElementById("divi2").style.borderColor = "#0d1407";
    document.getElementById("divi3").style.borderColor = "#0d1407";
    document.querySelector("nav").style.backgroundColor = "rgba(14, 13, 19, 0.9)";
}