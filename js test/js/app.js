'use strict'

document.getElementsByTagName('h1')[0].innerText = 'Cambiado desde la DOM, a que no me clickeas'
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

document.write("document.write")
function overwrite(){
    document.write('Sobreescribiendo la pagina')
}

function imageChange(){
    document.getElementById('imagen').src = 'http://globalmentoring.com.mx/imagenes/html5.png'
}

function pColorChange(){
    let cantRedFont = document.querySelectorAll('p.redfont')
    for (let i = 0; i < cantRedFont.length; i++) {
       cantRedFont[i].style.color = 'blue'
        
    }

}

function cambiarText(texto) {
    texto.innerHTML = "Me clickeaste y cambie"
}

document.querySelectorAll('p.redfont')[1].onclick = cambiarTexto
function cambiarTexto() {
    this.innerHTML = "Cambio cambio cambio cambio"
  }

function cookiesEnabled(){
    let texto = ""
    if(navigator.cookieEnabled) texto = "Cookies enabled"
    else texto = "Cookies disabled"
    document.getElementById('cookies').innerHTML = texto 
}

function changeToUpper(input){
    input.value = input.value.toUpperCase()
}

function changeColor(e){
    e.style.color = 'green'
}
function returnColor(e){
    e.style.removeProperty('color')
}

function maintainClick(e){
    e.innerHTML = "Solta"
    e.style.color = 'purple'
}

function dropClick(e){
    e.innerHTML = "Manteneme clickeado"
    e.removeAttribute('style')
}

document.getElementById('eventListTest').addEventListener('focus', cambiar)
document.getElementById('eventListTest').addEventListener('blur', (e)=>{e.target.style.background = "white"})

function cambiar(e){
    e.target.style.background = "yellow"
}