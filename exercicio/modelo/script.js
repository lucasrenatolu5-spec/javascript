let res = document.getElementById('res')
let altura = ""
let comprimento = ""
function ishorinzontal(){
    res.innerHTML = ""
    altura = Number(document.getElementById('alt').value)
    comprimento = Number(document.getElementById('comp').value)
    if(altura == comprimento ){
        res.innerHTML += 'Você tem uma imagem quadrada!'
    } else if (altura < comprimento){
        res.innerHTML += 'Você tem uma imagem Vertical!'
    } else {
        res.innerHTML += 'Você tem uma imagem Horizontal!'
    }
     if(altura == "" && comprimento == ""){
        window.alert('[ERRO] Insira um numero, por favor!')
    }  
} 