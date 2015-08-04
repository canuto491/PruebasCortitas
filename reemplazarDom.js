function reemplazar(){
				var nuevoElementoDelDOM = document.createElement("h1");
				var textoDelNuevoElemento = document.createTextNode("Reemplazo del texto");
				nuevoElementoDelDOM.appendChild(textoDelNuevoElemento);
				var miDiv = document.getElementById("div1");
				var viejoP = document.getElementById("p1");
				miDiv.replaceChild(nuevoElementoDelDOM,viejoP);
			}
// JavaScript Document