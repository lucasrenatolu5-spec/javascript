function somar(){
    var num1 = Number(document.getElementById('txt1').value)
    var num2 = Number(document.getElementById('txt2').value)
    var res = document.getElementById('res')
    var s = Number(num1) + Number(num2)
    res.innerHTML = `A soma dos dois numeros é: ${s}`
}