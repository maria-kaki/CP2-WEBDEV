// Direcionamento dos buttons da Page Age

function btnSim() {
    window.location.href = "../html/pageLogin.html";
};

function btnNao() {
    window.location.href = "https://www.docemalu.com.br/chocolate-guarda-chuva-tchuca-c-50---ki-kakau/p";
};

function comprarproduto(event,vinho){
    alert(`O vinho ${vinho} foi adicionado ao carinho!`)
}

function produtoespecifico(event, vinhoinput) {
    switch (vinhoinput) {
      case "portada":
        window.location.href = "../html/products/pageVinhoPortada.html";
        break;
      case "pronutto":
        window.location.href = "../html/products/pageVinhoPronutto.html";
        break;
      case "sanmartin":
        window.location.href = "../html/products/pageVinhoSanmartin.html";
        break;
      case "sansevero":
        window.location.href = "../html/products/pageVinhoSansevero.html";
        break;
    }
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
