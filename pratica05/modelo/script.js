let enviar = document.getElementById('Enviar')
let lista = document.getElementById('lista')
let Lista = []
enviar.addEventListener('click', function(){
    let tarefa = document.getElementById('taref').value
    Lista.push(tarefa)
    const li = document.createElement('li')
    li.textContent = tarefa
    lista.appendChild(li)
    const btn = document.createElement('button')
    btn.textContent = 'X'
    li.appendChild(btn)
    btn.style.marginLeft = '10px'
    li.style.marginTop = '10px'
    // remove element for list!
btn.addEventListener('click', function(){
li.remove()
})

})

