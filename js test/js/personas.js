class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
}

// SI NO USO CLASES
//
// function agregarPersonas(){
//     let nombre = document.getElementById('nombre').value
//     let apellido = document.getElementById('apellido').value
//     let nombreCompleto = nombre + ' ' + apellido
//     document.getElementById('personas').innerHTML += `<li>${nombreCompleto}</li>`
// }

const personas = [ new Persona('Juan', 'Perez') ]

function mostrarPersonas(){
    let texto = ''
    for(let persona of personas)
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    document.getElementById('personas').innerHTML = texto
}

function agregarPersonas(){
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    if(nombre != '' && apellido != ''){ 
        const persona = new Persona(nombre, apellido)
        personas.push(persona)
        mostrarPersonas()
        // |CUANDO NO USO EL PUSH PARA EL ARRAY
        //
        // document.getElementById('personas').innerHTML += `<li>${persona.nombre} ${persona.apellido}</li>`
    } else console.log("No hay información para mostrar")
}