
var date = "12/31";


function cambiar_fondo(value){
    switch(value){
        case "02/14": 
            document.getElementById("festividad").innerHTML = "San Valentín";
            document.body.style.background = "#ffcfcf";
            document.getElementById("container").style.background = "#ff8f8f";
        break;
        case "10/31":
            document.getElementById("festividad").innerHTML = "Halloween";
            document.body.style.background = "#fcd8ac";
            document.getElementById("container").style.background = "#f5ba73";
        break;
        case "12/25":
            document.getElementById("festividad").innerHTML = "Navidad";
            document.body.style.background = "#c2ffea";
            document.getElementById("container").style.background = "#85deaa";
        break;
        case "12/31":
            document.getElementById("festividad").innerHTML = "Año Nuevo";
            document.body.style.background = "#ffffcc";
            document.getElementById("container").style.background = "#faf487";
        break;
    }
}



function festividad(fecha){ // mes y dia
    //Obtener actual
    let actual = new Date()
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth() + 1;
    let actual_dia = actual.getDay();

    let fecha_final = ""
    let repartido = fecha.split("/")

    if(actual_mes > repartido[0]){
        fecha_final = fecha + "/" + Number(actual_anio + 1)
        date = new Date(String(fecha_final))
    }else if(actual_dia > repartido[1]){
        fecha_final = fecha + "/" + Number(actual_anio + 1)
        date = new Date(String(fecha_final))
    }else{
        fecha_final = fecha + "/" + actual_anio
        date = new Date(String(fecha_final))
    }

    cambiar_fondo(fecha);
}


document.addEventListener('DOMContentLoaded', () => { 

    //Variables

    const dias = document.querySelector('span#dias');
    const horas= document.querySelector('span#horas');
    const minutos = document.querySelector('span#minutos');
    const segundos = document.querySelector('span#segundos');
    // Milliseconds for the calculations
    const ms_segundo = 1000;
    const ms_minuto = ms_segundo * 60;
    const ms_hora = ms_minuto * 60;
    const ms_dia = ms_hora * 24
    // DOM for render

    festividad(date)

    function updateCountdown() {
        // Calculos
        const ahora = new Date()
        const duracion = date - ahora;
        const rm_dias = Math.floor(duracion / ms_dia);
        const rm_horas = Math.floor((duracion  % ms_dia) / ms_hora);
        const rm_minutos = Math.floor((duracion  % ms_hora) / ms_minuto);
        let rm_segundos = Math.floor((duracion  % ms_minuto) / ms_segundo);
        // Renderizar
        dias.textContent = rm_dias;
        horas.textContent = rm_horas;
        minutos.textContent = rm_minutos;
        segundos.textContent = rm_segundos;
    }

    //Inicia
    updateCountdown();
    // Recarga cada milisegundo
    setInterval(updateCountdown, ms_segundo);

});

