const calculadora = document.getElementById("calculadora");
const calcular = document.getElementById("calcular");
const error = document.getElementById("error");
const volumen = document.getElementById("volumen");
const mantenimiento = document.getElementById("mantenimiento");

calcular.addEventListener('click', ()=>{
    let dato = document.getElementById("peso");
    if (dato.value === ""){
        error.style.display = "block"
        return
    }
    error.style.display = "none"
    let peso = dato.value * 1
    let vol1 = 0; 
    let vol2 = 0; 
    if (peso > 30){
        vol1 = Math.round(superficieCorporal(peso) * 1500);
        vol2 = Math.round(superficieCorporal(peso) * 2000);
        volumen.innerHTML = "Vol. diario por 1500:  " + vol1 + " cc/h" + "<br>" + "Vol. diario por 2000: " + vol2 + " cc/h";
        volumen.style.display = "block";
        mantenimiento.style.display = "none";
    } else {
        hollidaySegar(peso); 
    }
})

function superficieCorporal (p){
    let superficie = (p * 4 + 7) / (p + 90) * 1500;
    return superficie; 
}

function hollidaySegar(p){
    let volumenDiario = calcularVolumen(p);
    let mantenimientoDiario = volumenDiario / 24;
    let mm2 = Math.round(mantenimientoDiario * 1.5);
    volumen.innerHTML = "Volumen diario: " + Math.round(volumenDiario) + "cc/h";
    mantenimiento.innerHTML= 'm+m/2: ' + mm2 + ' cc/hr';
    volumen.style.display = "block";
    mantenimiento.style.display = "block";
}

function calcularVolumen(p) {
    if (p <= 10){
        return volumenDiario = p * 100;
    }else if (p <= 20){
        return volumenDiario = p * 10 + ((p - 10) * 50);    
    }else {
        return volumenDiario = p * 10 + ((p - 20) * 20);
    }
}