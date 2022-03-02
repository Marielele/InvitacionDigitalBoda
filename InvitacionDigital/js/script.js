var diaActual = new Date();
diaActual.setFullYear(2022, 6, 11);
diaActual.setHours(23);
diaActual.setMinutes(59);
diaActual.setSeconds(59);
diaActual.setMilliseconds(999);
var fechaLimite = diaActual.getTime();

function ObtenerFecha(){
		var fechaActual = new Date();
		var nMS = fechaLimite - fechaActual.getTime();
		var nD = Math.floor(nMS/(1000 * 60 * 60 * 24));
		var nH = Math.floor(nMS/(1000*60*60)) % 24;
		var nM = Math.floor(nMS/(1000*60)) % 60;
		var nS = Math.floor(nMS/1000) % 60;
		if (nMS < 0){
			$("#diaend").hide();
			$("#diaendfinal").show();
		}else{
		   $("#diaend").show();
		   $("#diaendfinal").hide();
		   $("#dias").text(nD);
		   $("#horas").text(nH);
		   $("#minutos").text(nM);
		   $("#segundos").text(nS); 
		}
	}

$(document).ready(function() {
    var timer_rt = window.setInterval("ObtenerFecha()", 1000);
    console.log( "ready!" );
});