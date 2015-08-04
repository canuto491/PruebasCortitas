function reemplazar(){
				var nuevoElementoDelDOM = document.createElement("meta");
				var textoDelNuevoElemento = document.createTextNode('content="summary_large_imageREPLACE"');
				nuevoElementoDelDOM.appendChild(textoDelNuevoElemento);
				var miDiv = document.getElementById("div1");
				var viejoP = document.getElementsByName("twitter:card");
				miDiv.replaceChild(nuevoElementoDelDOM,viejoP);
			}
// JavaScript Document