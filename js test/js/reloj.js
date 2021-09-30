const mostrarReloj = () => {
    let fecha = new Date()
    let hora = formato(fecha.getHours())
    let min = formato(fecha.getMinutes())
    let seg = formato(fecha.getSeconds())
    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`
}

const formato = (tiempo) =>{
    if(tiempo < 10) 
     tiempo = '0' + tiempo 
    return tiempo
}

setInterval(mostrarReloj,1000)