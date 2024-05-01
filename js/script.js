
var precoPorGarrafa = parseFloat(document.getElementById("valor").getAttribute("value"));
var inputQuantidade = document.getElementById("quantidade");
var totalElement = document.getElementById("total"); 

function atualizarTotal() {
  var quantidade = parseInt(inputQuantidade.value);
  console.log(precoPorGarrafa)
  var total = quantidade * precoPorGarrafa;
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

inputQuantidade.addEventListener("change", atualizarTotal);
atualizarTotal();

function btnSim() {
    window.location.href = "../html/pageLogin.html";
};

function btnNao() {
    window.location.href = "https://www.docemalu.com.br/chocolate-guarda-chuva-tchuca-c-50---ki-kakau/p";
};

function comprarproduto(event,vinho){
    var quantidade = document.getElementById("quantidade").value
    alert(`O vinho ${vinho} foi adicionado ${quantidade} vezes ao carinho!`)
}

function desconto(){
    var desconto = document.getElementById("desconto").value

    if (desconto === "FIAP2024"){
        alert("Cupom Inserido!")
    }
    else{
        alert("Cupom Inválido!")
    }
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


// Page Fale Conosco

function btnEnter() {
    alert("Enviado com sucesso! Em breve entraremos em contato.");
    window.location.href = "../html/pageInitial.html";
    
};