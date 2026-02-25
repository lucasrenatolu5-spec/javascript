function Pedra(){
    let elementos = ['pedra', 'papel', 'tesoura'];
    let escolhaSistema = elementos[Math.floor(Math.random() * elementos.length)]
    if(escolhaSistema === 'pedra'){
        alert('Empate!')
    } else if (escolhaSistema === 'papel'){
        alert('perdeu!')
    } else if (escolhaSistema === 'tesoura'){
        alert('ganhou!')
    }
}

function Papel(){
    let elementos = ['pedra', 'papel', 'tesoura'];
    let escolhaSistema = elementos[Math.floor(Math.random() * elementos.length)]
    if(escolhaSistema === 'papel'){
        alert('Empate!')
    } else if (escolhaSistema === 'tesoura'){
        alert('perdeu!')
    } else if (escolhaSistema === 'pedra'){
        alert('ganhou!')
    }
}

function Tesoura(){
    let elementos = ['pedra', 'papel', 'tesoura'];
    let escolhaSistema = elementos[Math.floor(Math.random() * elementos.length)]
    if(escolhaSistema === 'tesoura'){
        alert('Empate!')
    } else if (escolhaSistema === 'pedra'){
        alert('perdeu!')
    } else if (escolhaSistema === 'papel'){
        alert('ganhou!')
    }
}