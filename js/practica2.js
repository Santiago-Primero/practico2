var num=prompt("Elegí un número al azar: ")

if (isNaN(num) || !Number.isInteger(Number(num))){
	document.write("ERROR: entrada no válida")
	throw new Error("Fin del programa");  // Esto detiene la ejecución

}


var n_a=Math.round(Math.random()*10)

if (n_a==num){
	document.write("¡Adiviné el número! es ",n_a)
}else{
	document.write("no fui capaz de adivinar el número,\
					elegí el ", n_a)
}