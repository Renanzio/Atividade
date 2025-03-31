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