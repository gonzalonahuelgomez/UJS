'use strict'

document.getElementsByTagName('h1')[0].innerText = 'Cambiando desde la DOM'
let fuenteroja = document.querySelectorAll('p.redfont')
console.log(fuenteroja)

function show() {
    let form = document.forms['formulario']
    let text = ''
    for (let element of form) {
        text += element.value + '  '
    }
    let nombre = form['nombre']
    let apellido = form['apellido']
    let text2 = nombre.value + ' ' + apellido.value
    document.getElementById('muestra').innerHTML = `Muestra por for loop: ${text}<br>Muestra por ingreso a forms[]: ${text2}` 
}