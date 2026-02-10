let numeros = document.getElementById('txtn')
let lista = document.getElementById('numadd')
let valores = []

function jaExiste(n, valores){
    for(let i = 1;i < valores.length; i++){
        if(valores.indexOf(n) == i ){
           window.alert('Numero invalido, ou ja se encontra na lista')
        }
    }
}
jaExiste(valores = Number(n.value))

//function pra adicionar numero na lista
function numero(){ 
    n = Number(numeros.value)
    let item = document.createElement('option')
    if (n <= 100 && n > 0) {
        lista.appendChild(item)
        valores.push(n)
        item.text = `Adicionado ${n}`
        item.value = n
    } else {
        window.alert('Numero invalido, ou ja se encontra na lista')
    }
}