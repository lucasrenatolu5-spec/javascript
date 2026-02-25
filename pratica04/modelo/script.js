let res = document.getElementById('res')
let numAleatorio = Math.floor(Math.random() * (100 - 0 + 1)) + 0
res.innerHTML += ""
function adivinhe(){
    let numImput = Number(document.getElementById('adiv').value)
    if(numAleatorio < numImput){
        res.innerHTML += `Errou, MENOR.`
    } else if (numAleatorio > numImput){
        res.innerHTML += `Errou, MAIOR.`
    } else if (numAleatorio == numImput){
        res.innerHTML += `Acertou, ganhou o desafio!`
    }
}