class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }
}
let disp = new DispositivoEntrada('Fisica','MSI')
console.log(disp)

class Raton extends DispositivoEntrada{    
    static contadorRatones = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `Raton: ${this._idRaton}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }
}
let raton = new Raton('Fisico', 'Fnatic')
console.log(raton.toString())

class Teclado extends DispositivoEntrada{    
    static contadorTeclados = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }

    get idTeclado(){
        return this._idTeclado
    }
    
    toString(){
        return `Teclado: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
    }

}
let teclado = new Teclado('Fisico', 'Fnatic')
console.log(teclado.toString())

class Monitor{
    static contadorMonitores = 0

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor
    }

    toString(){
        return `Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`
    }

}
let monitor = new Monitor('Samsung', 15)
console.log(monitor.toString())

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, raton, teclado, monitor) {
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }
    
    get idComputadora(){
        return this._idComputadora
    }

    toString(){
        return `Computadora: ${this._idComputadora}, ${this._nombre}, ${this._monitor}, ${this._teclado}, ${this._raton}`
    }
}
let computadora = new Computadora('Lenovo', monitor, teclado, raton)
console.log(computadora.toString())
class Orden{
    static contadorOrdenes = 0

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }

    get idOrden(){
        return this._idOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){

    }

    toString(){

    }
}