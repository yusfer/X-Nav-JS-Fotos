
	urlimages = ["http://cadenaser00.epimg.net/ser/imagenes/2014/06/25/cultura/1403651828_740215_0000000000_noticia_normal.jpg",
					"https://alquimistacinefilo.files.wordpress.com/2013/05/clasico-elpadrino.jpg",
					"https://ekonomicus.files.wordpress.com/2014/11/banksters1.jpg",
					"http://culturacolectiva.com/wp-content/uploads/2014/03/110.jpg",
					"http://mexico.cnn.com/media/2012/01/03/pjaros-hitchcock.jpg"];
					
					
	function changerImg (id) {
	var element = document.getElementById(id);
	
	element.innerHTML ='<img src="'+ urlimages[Math.round(Math.random()*4)]+'">'
}
					
	
