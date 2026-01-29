// função entrar

function entrar(){
    var area = document.getElementById("area");
    var texto = prompt('digite seu nome: ');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!')
        area.innerHTML = 'Bem vindo ...';
    }else{
        area.innerHTML = 'Bem vindo'+ ' ' + texto;
    }
}

function entrar2(nome){
    var area = document.getElementById("area2");
    var texto = prompt('digite seu sobrenome: ');
    var idade = prompt('Digite sua idade: ')
    if(idade == "" || idade == null){
        alert('Digite sua idade novamente! ')
        area.innerHTML = 'bem vindo ...';
    }else{
        area.innerHTML = nome + " " + texto+ ' ' + 'sua idade é ' + idade
    }
}