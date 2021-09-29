class Producto {

    static contadorProductos = 0

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }
    
    get IdProducto(){
        return this._idProducto
    }

    get Nombre(){
        return this._nombre
    }
    
    set Nombre(nombre){
        this._nombre = nombre
    }

    get Precio(){
        return this._precio
    }
    
    set Precio(precio){
        this._precio = precio
    }

    toString() {
        return `IdProducto: ${this.IdProducto}, Producto: ${this.Nombre}, Precio: ${this.Precio}`
    }
}

class Orden {

    static contadorOrdenes = 0
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
        this._contadorProductosAgregados = 0
    }

    get IdOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto)
            //this._productos[this._contadorProductosAgregados++] = 0
        } else {
            console.log("Excede límite productos")
        }
    }
    
    calcularTotal(){
        let totalVenta = 0
        for (let producto of this._productos){
            totalVenta += producto.Precio
        }
        return totalVenta
    }

    mostrarOrden(){
        let productoOrden = ''
        for(let producto of this._productos){
            productoOrden += '\n' + producto.toString() + ' '
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`)
    }
}

let producto1 = new Producto('Pantalon', 300)
let producto2 = new Producto('Remera', 200)
let producto3 = new Producto('Zapatos', 2000)
let producto4 = new Producto('Boxer', 100)
let producto5 = new Producto('Guantes', 200)

let orden1 = new Orden();
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.agregarProducto(producto3)
orden1.mostrarOrden()
