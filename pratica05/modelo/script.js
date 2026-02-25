let enviar = document.getElementById('Enviar')
let lista = document.getElementById('lista')
let Lista = []
enviar.addEventListener('click', function(){
    let tarefa = document.getElementById('taref').value
    if(tarefa == ""){
        alert('Adicione alguma tarefa, por favor!')
    } else{
    Lista.push(tarefa)
    const li = document.createElement('li')
    li.textContent = tarefa
    lista.appendChild(li)
    const btn = document.createElement('button')

    btn.textContent = 'X'
    li.appendChild(btn)

    btn.style.marginLeft = '10px'
    btn.style.marginRight = '10px'
    li.style.marginTop = '10px'

    const add = document.createElement('button')
    add.textContent = 'Feito'
    li.appendChild(add)

add.addEventListener('click', function(){
    add.style.background = '#25684e'
    add.style.color = '#fff'
}) 

btn.addEventListener('click', function(){
   li.remove()

})
    }

})

