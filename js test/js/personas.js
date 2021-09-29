class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    nombreCompleto(){
        return `<li>${nombre} ${apellido}</li>`
    }
}

// function agregarPersonas(){
//     let nombre = document.getElementById('nombre').value
//     let apellido = document.getElementById('apellido').value
//     let nombreCompleto = nombre + ' ' + apellido
//     document.getElementById('personas').innerHTML += `<li>${nombreCompleto}</li>`
// }

function agregarPersonas(){
    let nombre = document.getElementById('nombre').value
    console.log(nombre)
    let apellido = document.getElementById('apellido').value
    let persona = new Persona(nombre, apellido) 
    console.log(document.getElementById('personas').innerHTML)
    document.getElementById('personas').innerHTML += persona.nombreCompleto()
}