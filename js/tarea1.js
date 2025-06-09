let nombre, apellido;

function Saludar(){

		nombre=document.getElementById("Nombre").value;
		apellido=document.getElementById("Apellido").value;
	if(nombre == "" || apellido == ""){
		document.write("no completó el formulario D: <br> Cerrando sesión")

	}
	else{

		document.write("hola ",nombre," ", apellido);		
		console.log("hola ",nombre," ",apellido);
	
	}


}