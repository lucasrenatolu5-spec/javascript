function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique se o ano está correto!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-h.png')
            } else if (idade < 18){
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade >= 18){
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else if (idade > 50){
                //idoso
                img.setAttribute('src', 'idoso-h')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
             if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulta-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}