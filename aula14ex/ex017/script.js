function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)
    if (num.value.length == 0){
        window.alert('Porfavor, escolha outro numero!')
    } else {
        let c = 1 
        tab.innerHTML = ''
        while (n <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}` 
            tab.appendChild(item)
            c++
        }
    }
}