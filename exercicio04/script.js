function tabuada() {
    var numero = document.querySelector(".numero")
    var resultado = document.querySelector(".resultado")

    resultado.innerText = ""

    if (numero.value == "") {
        alert("Por favor, digite um número!")
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado.innerText += `${numero.value} \u{00D7} ${i} = ${numero.value * i}\n`
        }
    }
}