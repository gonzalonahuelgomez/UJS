const ingresos = [ new Ingreso('Sueldo',2000), new Ingreso('Freelance',2000) ]
const egresos = [ new Egreso('Alquiler',1000), new Egreso('Restaurant',1000) ]

let cargarGastos = () => {
    cargarCabecero()
}

let totalIngresos = () => {
    let total = 0
    for(let ingreso of ingresos) {
        total += ingreso.valor
    }
    return total
}

let totalEgresos = () => {
    let total = 0
    for(let egreso of egresos) {
        total += egreso.valor
    }
    return total
}

let cargarCabecero = () =>{
    totalIngresos()
    totalEgresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(totalIngresos() - totalEgresos())
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(totalEgresos()/totalIngresos())
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style: 'currency', currency: 'USD', minimumFractionDigits: 2})
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style: 'percent', minimumFractionDigits: 2})
}