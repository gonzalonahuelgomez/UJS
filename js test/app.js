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
        return this._idRaton +' '
    }
}

let raton = new Raton('Fisico', 'Fnatic')
console.log(raton.toString())

class Teclado extends DispositivoEntrada{
    
    static contadorTeclados = 0

    constructor()
}