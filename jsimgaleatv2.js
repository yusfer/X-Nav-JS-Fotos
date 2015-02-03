					
					
	function changerImg (element,max) {
	
	var aleat = (Math.round(Math.random()*(max-1)))*2 + 1 //calcula aleatorio entre 0 y 7, lo multiplica por 2 y suma uno porque childNodes los impares
	element.childNodes[aleat].attributes[0].nodeValue = "display:inherit"
	
	}
	
	function reinicCss(id,max){
		
		var element = document.getElementById(id);
		var i = 1;
		
		while(i<(2*max+1)){
			element.childNodes[i].attributes[0].nodeValue = "display:none"
			i = i+2;
		}
		changerImg(element,max)
	}
					
	
