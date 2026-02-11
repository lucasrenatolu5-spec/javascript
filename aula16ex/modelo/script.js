let numeros = document.getElementById('txtn')
let lista = document.getElementById('numadd')
let valores = []
//function pra verificar se numero ja existe
function jaExiste(n, valores){
        return valores.indexOf(n) != -1
}
//function pra adicionar numero na lista
function numero(){ 
    let n = Number(numeros.value)
    if (n <= 100 && n > 0 && !jaExiste(n, valores)) {
        let item = document.createElement('option')
        lista.appendChild(item)
        valores.push(n)
        item.text = `Adicionado ${n}`
        item.value = n
    } else {
        window.alert('Numero invalido, ou ja se encontra na lista')
    }
}