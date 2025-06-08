function CriarConta(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nasc = document.getElementById("nasc").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({ nome, email, senha, nasc });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Conta criada com sucesso!");
    window.location.href = "home.html";
}

function logar() {
    const usuariosPadrao = [
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
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios = usuarios.concat(usuariosPadrao);
    
    var Email = document.querySelector("#email").value
    var Password = document.querySelector("#senha").value

    const usuarioValido = usuarios.find(u => u.email === Email && u.senha === Password);
     if (usuarioValido) {
        alert("Login realizado com sucesso!")
        window.location.href = "gg.html";
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

function formatarMoeda(input) {
    let valor = input.value.replace(/\D/g, "");
    valor = (valor / 100).toFixed(2) + "";
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    input.value = "R$ " + valor;
}

window.onload = function() {
    const gastos = document.getElementById("gastos");
    const recebidos = document.getElementById("recebidos");
    if (gastos && recebidos) {
        gastos.addEventListener("input", function() { formatarMoeda(this); });
        recebidos.addEventListener("input", function() { formatarMoeda(this); });
    }
};

function calcularSaldo() {
    var gastos = document.getElementById("gastos").value.replace("R$ ", "").replace(/\./g, "").replace(",", ".");
    var recebidos = document.getElementById("recebidos").value.replace("R$ ", "").replace(/\./g, "").replace(",", ".");
    let saldoAtual = 0;
  
    if (gastos === "" || recebidos === "") {
        alert("Insira os valores a serem calculados.");
        return;
    }

    else {
    if (saldoAtual === 0 && recebidos > 0) {
        saldoAtual = recebidos - gastos;
    } else {
        saldoAtual = saldoAtual - gastos + recebidos;
    }
  }
    document.querySelector("p").textContent = "Saldo: R$ " + saldoAtual.toFixed(2).replace(".", ",");
}