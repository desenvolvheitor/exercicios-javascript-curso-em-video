function contar() {
    var inicio = document.querySelector("#inicio")
    var fim = document.querySelector("#fim")
    var passo = document.querySelector("#passo")
    var resultado = document.querySelector(".res")

    if (inicio.value.length < 1 || fim.value.length < 1 || passo.value.length < 1) {
        resultado.innerText = ""
        resultado.innerText = "Impossível contar!"
    } else {
        resultado.innerText = "Contando:\n"

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (passo.value < 1) {
            alert("Passo inváido! Considerando PASSO 1")
            document.querySelector("#passo").value = p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerText += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerText += `${c} \u{1F449}`
            }
        }
        
        resultado.innerText += `\u{1F3C1}`
    }
}