'use strict'

//errores
let resultado = 10
try {
    x = 10    
    throw 'x'
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
} finally {
    console.log('Prueba de errores con JS')
}
console.log('se ejecuta')

//arrow functions

const a = () => console.log('Hola')
a()

const b = () => 'Hola desde b'
console.log(b())

const c = () => ({ nombre: 'Adrian'})
console.log(c())

const d = (mensaje) => console.log(mensaje)
d('Buenardo')

const e = (operando1, operando2) => { 
    let resultado = operando1+operando2
    return `Resultado: ${resultado}`
}
console.log(e(1,2))