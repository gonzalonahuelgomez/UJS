class Persona {
    static contadorPersonas = 0;
  
    constructor(nombre, apellido, edad) {
      this._idPersona = Persona.contadorPersonas++;
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
    }
  
    get IdPersona() {
      return this._idPersona;
    }
    get Nombre() {
      return this._nombre;
    }
    set Nombre(nombre) {
      this._nombre = nombre;
    }
    get Apellido() {
      return this._apellido;
    }
    set Apellido(apellido) {
      this._apellido = apellido;
    }
    get Edad() {
      return this._edad;
    }
    set Edad(edad) {
      this._edad = edad;
    }
  
    toString() {
      return (
        this.IdPersona +
        ": " +
        this.Nombre +
        " " +
        this.Apellido +
        " " +
        this.Edad
      );
    }
  }
  
  class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo) {
      super(nombre, apellido, edad);
      this._idEmpleado = Empleado.contadorEmpleados++;
      this._sueldo = sueldo;
    }
  
    get IdEmpleado() {
      return this._idEmpleado;
    }
    get Sueldo() {
      return this._sueldo;
    }
    set Sueldo(sueldo) {
      this._sueldo = sueldo;
    }
  
    toString() {
      return `${super.toString()}Empleado${this.IdEmpleado} Sueldo: ${this.Sueldo}`;
    }
  }
  
  class Cliente extends Persona {
    static contadorClientes = 0;
  
    constructor(nombre, apellido, edad, fecha) {
      super(nombre, apellido, edad);
      this._idCliente = Cliente.contadorClientes++;
      this._fechaRegistro = fecha;
    }
  
    get IdCliente() {
      return this._idCliente;
    }
  
    get FechaRegistro() {
      return this._fechaRegistro;
    }
  
    set FechaRegistro(fecha) {
      return (this._fechaRegistro = fecha);
    }
  
    toString() {
      return (
        super.toString() +
        "Cliente" +
        this.IdCliente +
        " Fecha Registro: " +
        this.FechaRegistro
      );
    }
  }
  Persona.prototype.email = "@mail.com";
  
  let persona = new Persona("Robert", "Bolaños", 15);
  let empleado = new Empleado("Albert", "Titere", 52, 150000);
  let cliente = new Cliente("Gonza", "Xer", 34, new Date());
  
  console.log(cliente);