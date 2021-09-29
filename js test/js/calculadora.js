function sumar(){
    let op1 = document.getElementById('op1').value
    let op2 = document.getElementById('op2').value
    let resultado = Number(op1) + Number(op2)
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}
function restar(){
    let op1 = document.getElementById('op1').value
    let op2 = document.getElementById('op2').value
    let resultado = Number(op1) - Number(op2)
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}
function dividir(){
    let op1 = document.getElementById('op1').value
    let op2 = document.getElementById('op2').value
    let resultado = Number(op1) / Number(op2)
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}
function multiplicar(){
    let op1 = document.getElementById('op1').value
    let op2 = document.getElementById('op2').value
    let resultado = Number(op1) * Number(op2)
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}