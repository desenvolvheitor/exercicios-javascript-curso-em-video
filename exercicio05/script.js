var numeros = []

function adicionar() {
    var numero = Number(document.querySelector("#numero").value)
    document.querySelector("#numero").value = ""
    if (numero < 1 || numero > 100 || numeros.indexOf(numero) != -1) {
        alert("Valor inválido ou já encontrado na lista")
    } else {
        document.querySelector(".resultado").innerText = ""
        numeros.push(numero)
        numeros.length > 1 ? document.querySelector("#logs").value += `\n` : ``
        document.querySelector("#logs").value += `Valor ${numero} adicionado.`
        document.querySelector("#logs").style.minHeight = `calc(1rem * ${numeros.length > 0 ? numeros.length : 1})`
    }
}

function finalizar() {
    if (numeros.length < 1) {
        alert("Adicione valores antes de finalizar!")
    } else {
        numeros.sort((a, b) => a - b)

        var soma = 0
        for (let n in numeros) {
            soma += numeros[n]
        }

        document.querySelector(".resultado").innerText = `Ao todo, temos ${numeros.length} números cadastrados.

        O maior valor infomado foi ${numeros[numeros.length - 1]}.
        
        O menor valor informado foi ${numeros[0]}.
        
        Somando todos os valores, temos ${soma}.
        
        A média dos valores digitados é ${soma / numeros.length}.`
    }
}