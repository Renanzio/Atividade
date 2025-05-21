const { useId } = require("react")

function logar() {
    const usuarios = [
      {
        email : "claudomiro@email.com",
        senha : "Clau12345",
      },
      {
        email : "moderador@email.com",
        senha : "Mod12345",
      },
      {
        email : "admin@email.com",
        senha : "Adm12345",
      }
    ];
    
    var Email = document.querySelector("#email").value
    var Password = document.querySelector("#senha").value
    var btn = document.getElementById("btn")

    const usuarioValido = usuarios.find(u => u.email === Email && u.senha === Password);
     if (usuarioValido) {
        alert("Redirecionando para a página principal...")
        var form = document.getElementById("formlog")
        form.addEventListener("submit", function(e){
        e.preventDefault()
})  
    }
    else {
        alert("Email ou senha incorretos.")
        var form = document.getElementById("formlog")
        form.addEventListener("submit", function(e){
        e.preventDefault()
})
    }
}

function usersenhas(){
    var emailsenha = document.getElementById("emailsenha")
    alert(emailsenha.textContent)
    var form = document.getElementById("formlog")
    form.addEventListener("submit", function(e){
    e.preventDefault()
})
}

function TemaEscuro(){
    document.getElementById("Tema").innerText = "Tema Claro";
    document.querySelector("body").style.backgroundColor = "rgb(14, 13, 13)";
    document.querySelector("main").style.backgroundColor ="#1a1918";
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
    document.getElementById("divnav").style.backgroundColor = "rgba(14, 13, 19, 0.9)";
}
function TemaClaro() {
    document.getElementById("Tema").innerText = "Tema Escuro";
    document.querySelector("body").style.backgroundColor ="#ffffff";
    document.querySelector("main").style.backgroundColor ="#383838";
    document.querySelector("header").style.backgroundColor = "#2a4116";
    document.getElementById("navlist1").style.backgroundColor = "#2a4116";
    document.getElementById("navlist2").style.backgroundColor = "#2a4116";
    document.getElementById("navlist3").style.backgroundColor = "#2a4116";
    document.getElementById("navlist4").style.backgroundColor = "#2a4116";
    document.querySelector("footer").style.backgroundColor = "#a30c0c";
    document.getElementById("divi1").style.backgroundColor = "#2a4116";
    document.getElementById("divi2").style.backgroundColor = "#2a4116";
    document.getElementById("divi3").style.backgroundColor = "#2a4116";
    document.getElementById("divi1").style.borderColor = "#ffffff";
    document.getElementById("divi2").style.borderColor = "#ffffff";
    document.getElementById("divi3").style.borderColor = "#ffffff";
}