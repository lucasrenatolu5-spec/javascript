let numeros = document.getElementById('txtn')
let lista = document.getElementById('numadd')
let valores = []
//function pra verificar se numero ja existe
function jaExiste(n, valores){
        return valores.indexOf(n) != -1
}
//function pra adicionar numero na lista
function numero(){ 
    let res = document.getElementById('res')

    if(res.innerHTML != ""){
        valores = []
        lista.innerHTML = ""
        res.innerHTML = ""
    }


    let n = Number(numeros.value)
    if (n <= 100 && n > 0 && !jaExiste(n, valores)) {
        let item = document.createElement('option')
        lista.appendChild(item)
        valores.push(n)
        item.text = `Valor ${n} adicionado.`
        item.value = n
    } else {
        window.alert('Numero invalido, ou ja se encontra na lista')
    }
    numeros.value = ""
    numeros.focus()
}

function somarTudo(){
    let soma = Number("")

    for (let i = 0; i < valores.length; i++ ){
        soma += Number(valores[i])
    }
    return soma
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    } else {
        let maior = pegarMaior()
        let menor = pegarMenor()
        let res = document.getElementById('res') 
        let total = somarTudo()   
        let media = total / valores.length
        let texto = `
        Somando todos os valores, temos ${total}. <br><br>
        Ao todo, temos ${valores.length} números cadastrados. <br><br>
        A média dos valores digitados é ${media}. <br><br>
        O maior valor encontrado foi ${maior}.<br><br>
        O menor valor encontrado foi ${menor}.
    `
    res.innerHTML = texto
    }
    
}

function pegarMaior(){
    if(valores.length == 0){
        return null
    }

    let maior = valores[0]

    for (let i = 1; i < valores.length; i++){
        if(valores[i] > maior){
            maior = valores[i]
        }
    }
    return maior 
}

function pegarMenor(){
    if(valores.length == 0){
        return null
    }

    let menor = valores[0]

    for(let i = 1;i > valores.length[i]; i++){
        if(valores[i] < menor){
            menor = valores[i]
        }
    }
    return menor
}