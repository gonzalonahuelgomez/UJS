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

    toString(){
        return `Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`
    }

}

let monitor = new Monitor('Samsung', 15)
console.log(monitor.toString())

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre) {
        
    }
    
}