const mostrarReloj = () => {
    let fecha = new Date()
    let hora = formato(fecha.getHours())
    let min = formato(fecha.getMinutes())
    let seg = formato(fecha.getSeconds())
    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let dia = fecha.getDay()  
    let mes = meses[fecha.getMonth()]
    let anio = formato(fecha.getFullYear())
    document.getElementById('fecha').innerHTML = `${dia} de ${mes} de ${anio}`

    document.getElementById('contenedor').classList.toggle('animar')
}

const formato = (tiempo) =>{
    if(tiempo < 10) 
     tiempo = '0' + tiempo 
    return tiempo
}

setInterval(mostrarReloj,1000)