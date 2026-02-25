let enviar = document.getElementById('Enviar')
let lista = document.getElementById('lista')
let Lista = []
enviar.addEventListener('click', function(){
    let tarefa = document.getElementById('taref').value
    Lista.push(tarefa)
    lista.innerHTML += `<li>Adicionado: ${tarefa}.</li>`
})

