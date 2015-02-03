
	urlimages = ["http://cadenaser00.epimg.net/ser/imagenes/2014/06/25/cultura/1403651828_740215_0000000000_noticia_normal.jpg",
					"http://lopezlinares.com/vintageblog/wp-content/uploads/2014/01/casablanca-15.jpg",
					"https://alquimistacinefilo.files.wordpress.com/2013/05/clasico-elpadrino.jpg",
					"https://ekonomicus.files.wordpress.com/2014/11/banksters1.jpg",
					"http://culturacolectiva.com/wp-content/uploads/2014/03/110.jpg",
					"http://mexico.cnn.com/media/2012/01/03/pjaros-hitchcock.jpg"];
					
					
	function changerImg (element,max) {
	
	var aleat = (Math.round(Math.random()*(max-1)))*2 + 1 //calcula aleatorio entre 0 y 7, lo multiplica por 2 y suma uno porque childNodes los impares
	alert(aleat)
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
					
	
