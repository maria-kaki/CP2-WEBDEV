// Direcionamento dos buttons da Page Age

document.getElementById("btnSim").addEventListener("click", function() {
    window.location.href = "../html/pageLogin.html";
});

document.getElementById("btnNao").addEventListener("click", function() {
    window.location.href = "https://www.docemalu.com.br/chocolate-guarda-chuva-tchuca-c-50---ki-kakau/p";
});

function produtoespecifico(){
    window.location.href = "../html/pageSpecificProduct.html";
}

function login() {
    var usuario = document.getElementById("usuario").value;
    var usuarioCorreto = "admin";

    var senha = document.getElementById("senha").value;
    var senhaCorreta = "admin";

    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
        alert("Usuário ou senha incorreto!");
    } else {
        alert(`Olá, ${usuario}! Têm vinhos esperando por você!`);
        window.location.href = "../html/pageInitial.html";
    }
}
