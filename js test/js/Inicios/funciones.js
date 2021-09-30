'use strict'

//Errores
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

//Arrow Functions

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

//Callback

function imprimir (mensaje){
    console.log(`Resultado: ${mensaje}`)
}

function sumar (op1, op2, testCallback){
    let res = op1 + op2
    testCallback(res)
}

sumar(4, 8, imprimir)

//Promises
let miPromesa = new Promise((resolved, rejected) =>{
    let expression = true;
    if(expression) resolved('Resolved')
    else rejected('Error')    
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// )
    
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error))

let promesa = new Promise((resolved) => {
    setTimeout(() => resolved('prueba promise y timeout'), 3000)
})

promesa.then((valor) => console.log(valor))

//Asynchronous
async function asyncPromise() {
    return 'Promesa y Async'
}

asyncPromise().then(valor => console.log(valor))

//Async await
async function asyncPromiseAwait() {
    console.log('Inicio promesa')
    let promesa = new Promise(resolved => {
        setTimeout(() => resolved('Promesa con await'), 3000)
    })
    console.log(await promesa)
    console.log('Fin promesa')
}

asyncPromiseAwait()
