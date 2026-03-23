function verificar() {
    var hoje = new Date()
    var anoAtual = hoje.getFullYear();
    var campoAnoNascimento = document.querySelector("#ano-nascimento")
    var resultado = document.querySelector(".resultado")

    if (campoAnoNascimento.value == "" || campoAnoNascimento.value > anoAtual || campoAnoNascimento.value < 1) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = anoAtual - campoAnoNascimento.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "foto-crianca-m.jpg")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-m.jpg")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "foto-adulto-m.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "foto-idoso-m.jpg")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "foto-crianca-f.jpg")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-f.jpg")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "foto-adulto-f.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "foto-idoso-f.jpg")
            }
        }

        resultado.innerText = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}