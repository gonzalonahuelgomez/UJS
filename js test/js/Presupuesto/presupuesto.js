const ingresos = [ new Ingreso('Sueldo', 2000.00), new Ingreso('Freelance', 1200.00) ]
const egresos = [ new Egreso('Alquiler',1000), new Egreso('Restaurant',800) ]

let cargarGastos = () => {
    cargarCabecero()
    cargarIngresos()
    cargarEgresos()
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

const cargarIngresos = () => {
    let ingresosIndex = ''
    for(let ingreso of ingresos){
        ingresosIndex += 
        `<div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.idIngreso})")></ion-icon>
                    </button>
                </div>
            </div>
        </div>`
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosIndex
}

const cargarEgresos = () => {
    let egresosIndex = ''
    for(let egreso of egresos){
        egresosIndex += 
        `<div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.idEgreso})"></ion-icon>
                </button>
            </div>
        </div>
    </div>`
    }
    document.getElementById('lista-egresos').innerHTML = egresosIndex
}

const eliminarIngreso = (id) => {
    let eliminar = ingresos.findIndex(ingreso => ingreso.id === id)
    ingresos.splice(eliminar,1)
    cargarCabecero()
    cargarIngresos()
}

const eliminarEgreso = (id) => {
    let eliminar = egresos.findIndex(egreso => egreso.id === id)
    egresos.splice(eliminar,1)
    cargarCabecero()
    cargarEgresos()
}