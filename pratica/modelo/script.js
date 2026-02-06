function infos(){
    let name = document.getElementById('txtn').value
    let idade = Number(document.getElementById('txti').value)
    let sexo = document.getElementsByName('radsex')
    let res = document.getElementById('res')
    let genero = ''
    if (Number(idade) < 18){
        window.alert('Você é de menor, não pode acessar esse site!')
    } else if(sexo[0].checked){
        genero = 'masculino'
    } else {
        genero = 'feminino'
    }
    res.innerHTML = `Seu nome é ${name} sua idade é ${idade} anos, e seu genero é ${genero}`
}