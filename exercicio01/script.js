var horaAtual = parseInt(new Date().getHours());

var campoHora = document.querySelector(".horario-agora");
campoHora.innerText = `Agora são ${horaAtual} horas.`;

var imagem = document.querySelector(".imagem");

if (horaAtual >= 0 && horaAtual < 12) {
    document.body.style.backgroundColor = "#cdb446";
    imagem.src = "manha.jpg";
} else if (horaAtual < 18) {
    document.body.style.backgroundColor = "#cb6324";
    imagem.src = "tarde.jpg";
} else {
    document.body.style.backgroundColor = "#192634";
    imagem.src = "noite.jpg";
}