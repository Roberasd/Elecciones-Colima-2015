function MostrarContenedor(tipo)
{
	var template = null;
	switch(tipo)
	{
		case contenedores.PARTIDOS:
			template = 
			"<a class='twitterButton' onclick='javascript:CompartirInicio(0)'>Compartír en Twitter</a>"
			+"<a class='facebookButton' onclick='javascript:CompartirInicio(1)'>Compartír en Facebook</a>"
			+"<div class='partidosContainer'><div class='title'>Partidos Políticos y Frentes</div></div> ";
			break;
		case contenedores.CANDIDATOS:
			template = "<div class='candidatosContainer'>"+
            	"<div class='title'>Candidatos al gobierno de Colima</div>"+
				"</div> ";
			break;
		case contenedores.PROPUESTAS:
			template = "<div class='propuestasContainer'>"+
					"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'>Propuestas</div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)' ><img src='img/temas/salud.png' height='50' width='50' /><span style='color:"+temas.SALUD.color+";'>Salud</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='salud' class='contPropuestas'></div> </div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/vivienda.png' height='50' width='50' /><span style='color:"+temas.VIVIENDA.color+";'>Vivienda</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='vivienda' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/sociedad.png' height='50' width='50' /><span style='color:"+temas.SOCIEDAD.color+";'>Sociedad</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='sociedad' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/institucional.png' height='50' width='50' /><span style='color:"+temas.INSTITUCIONAL.color+";'>Institucionalidad</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='institucional' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/planificacionUrbana.png' height='50' width='50' /><span style='color:"+temas.PLANEAMIENTO_URBANO.color+";'>Planeamiento Urbano</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='planeamientoUrbano' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/seguridad.png' height='50' width='50' /><span style='color:"+temas.SEGURIDAD.color+";'>Seguridad</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='seguridad' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/medioAmbiente.png' height='50' width='50' /><span style='color:"+temas.MEDIO_AMBIENTE.color+";'>Medio Ambiente</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='medioAmbiente' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/economia.png' height='50' width='50' /><span style='color:"+temas.ECONOMIA.color+";'>Economía</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='economia' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/internacional.png' height='50' width='50' /><span style='color:"+temas.INTERNACIONAL.color+";'>Asuntos Internacionales</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='internacional' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/educacion.png' height='50' width='50' /><span style='color:"+temas.EDUCACION.color+";'>Educación</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='educacion' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/transporte.png' height='50' width='50' /><span style='color:"+temas.TRANSPORTE.color+";'>Transporte</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='transporte' class='contPropuestas'></div></div>"+
					"<div class='tipo'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'><img src='img/temas/derechosHumanos.png' height='50' width='50' /><span style='color:"+temas.DERECHOS_HUMANOS.color+";'>Derechos Humanos</span><div class='arrowButton down'></div><span class='quantityList'>0</span></div>"+
					"<div id='derechosHumanos' class='contPropuestas'></div></div>"+
				"</div> ";
			break;
	};
	return template;
}

function CompartirInicio(tipo)
{
	if(tipo == 0)
	  window.open('https://twitter.com/intent/tweet?'+
	  'related=ytuquepropones&'+
	  'text='+ '%23ytuquepropones las propuestas de los candidatos en Colima ytuquepropones.com', 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	else
	  window.open('http://www.facebook.com/dialog/feed?app_id=1641263312770943' +
        '&link=http://ytuquepropones.com' +
        '&name=' + 'Todas las propuestas de los candidatos en un solo lugar' +
        '&caption=' + 'via http://ytuquepropones.com' +
        '&description=' + 'Conocé todas las propuestas de los candidatos en Colima.' +
        '&redirect_uri=' + 'http://ytuquepropones.com/close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas', 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
}

function HeaderPartido(part)
{
	var container = document.createElement('div');
	$(container).attr('id', part.nombre);
	$(container).addClass('partidoContainer');
	$(container).css('display', 'block').css('width', '100%');
	
	var imagen = document.createElement('div');
	$(imagen).addClass('imagenPartido_Header');
	$(imagen).css('background-image', 'url(img/partidos/' + part.imagen + ')');
	$(container).append(imagen);
	
	var nombre = document.createElement('div');
	$(nombre).addClass('item').addClass('nombre_Header');
	$(nombre).css('color', part.color).css('background-color', '#fff');
	$(nombre).html(part.nombre);
	$(container).append(nombre);
	
	var tweet = document.createElement('a');
	$(tweet).addClass('twitterButton');
	$(tweet).html('Compartí sus propuestas en twitter');
	$(tweet).click(function(e) {
		makeShort(container, window.location.origin + window.location.pathname + '#partido/'+part.nombre.split(' ').join('-'), function(){
			window.open('https://twitter.com/intent/tweet?'+
			'related=ObservatorioCiudadano&'+
			'text='+ '%23ytuquepropones Mirá las propuestas para Colima de ' + part.nombre +' '+container.dataset.shorturl, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
	});
	$(nombre).append(tweet);

	var facebook = document.createElement('a');
	$(facebook).addClass('facebookButton');
	$(facebook).html('Compartí sus propuestas en facebook');
	$(facebook).click(function(e) {
		window.open(
		'http://www.facebook.com/dialog/feed?app_id=1641263312770943' +
        '&link=' + escape(window.location.href) +
        '&name=' + 'Todas las propuestas de ' + part.nombre +
        '&caption=' + 'via ytuquepropones.com' +
        '&description=' + 'Conocé todas sus propuestas y la de todos los candidatos en la Ciudad' +
        '&redirect_uri=' + 'http://ytuquepropones.com/close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas del partido', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	});
	$(nombre).append(facebook);

	var candidatosDIV = document.createElement('div');
	$(candidatosDIV).addClass('item').addClass('candidatos_Header');
	$(candidatosDIV).html(candidatos.filter(function(a){return a.partido == part.codigo}).length);
	$(container).append(candidatosDIV);

	
	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	var cantPropuestas = 0;
	cantPropuestas = propuestas.filter(function(a){return a.partido == part.codigo}).length;
	$(propuestasDIV).html(cantPropuestas);
	if(cantPropuestas == 0)
	    $(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);
	
	return container;
}

function HeaderCandidato(cand)
{
	var container = document.createElement('div');
	$(container).attr('id', cand.nombre);
	$(container).addClass('candidatoContainer_Header');
	
	var imagen = document.createElement('div');
	$(imagen).addClass('imagenCandidato');
	$(imagen).css('background-image', 'url(img/candidatos/' + cand.imagen + ')');
	$(container).append(imagen);
	
	var cont = document.createElement('div');
	$(cont).css('display', 'inline-block');
	$(cont).css('vertical-align', 'top');
	$(cont).css('margin', '6px 0');
	
	var nombre = document.createElement('div');
	$(nombre).addClass('nombreCandidato');
	$(nombre).html(cand.nombre);
	$(cont).append(nombre);
	
	var part = partidos.filter(function(e){return e.codigo == cand.partido;})[0];
	var color = document.createElement('div');
	$(color).addClass('colorCandidato');
	$(color).css('background-color', part.color);
	$(color).html(part.nombre);
	$(cont).append(color);
	
	var lista = document.createElement('div');
	$(lista).addClass('listaCandidato');
	$(lista).html(cand.lista);
	$(cont).append(lista);
	
	$(container).append(cont);

	var tweet = document.createElement('a');
	$(tweet).addClass('twitterButton');
	$(tweet).html('Compartilo en twitter');
	$(tweet).click(function(e) {
		makeShort(container, window.location.origin + window.location.pathname + '#candidato/'+cand.nombre.split(' ').join('-'), function(){
			window.open('https://twitter.com/intent/tweet?'+
			'related=ObservatorioCiudadano&'+
			'text='+ '%23ytuquepropones Mirá las propuestas para Colima de ' + cand.nombre +' '+container.dataset.shorturl, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
	});
	$(container).append(tweet);
	
	var facebook = document.createElement('a');
	$(facebook).addClass('facebookButton');
	$(facebook).html('Compartilo en facebook');
	$(facebook).click(function(e) {
		window.open(
		'http://www.facebook.com/dialog/feed?app_id=1641263312770943' +
        '&link=' + escape(window.location.href) +
        '&name=' + 'Todas las propuestas de ' + cand.nombre +
        '&caption=' + 'via ytuquepropones.com' +
        '&description=' + 'Conocé todas sus propuestas y la de todos los candidatos en la Ciudad' +
        '&redirect_uri=' + 'http://ytuquepropones.com/close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas del partido', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	});
	$(container).append(facebook);

	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	$(propuestasDIV).html(propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).length);
	if(propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).length == 0)
	    $(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);
	
	return container;
}

function MostrarVolver(tipo, cosa)
{
	var cont = document.createElement('div');
	$(cont).addClass('atrasContainer');
	$(cont).append(flecha);
	
	var flecha = document.createElement('div');
	$(flecha).addClass('flechaAtras');
	$(cont).append(flecha);
	
	var texto = document.createElement('div');
	$(texto).addClass('textoAtras');
	if(cosa == null)
		$(texto).html('Volver al inicio ');
	else
		$(texto).html('Volver a ' + cosa.nombre);
		
	$(cont).click(function(e) {
		if(cosa == null)
			CargaInicial();
		else if(cosa.propuestas == undefined)
			MostrarPartido(1, cosa);
		else
			MostrarCandidato(1, cosa);
    });	
		
	$(cont).append(texto);
	
	return cont;
}

function CargarAbout()
{
	var icono = document.createElement('div');
	$(icono).addClass('iconoAbout');
	$('body').append(icono);
	$(icono).click(function(e) {
        $('.aboutContainer').animate({marginLeft:'0px'},300);
    });
	
	var about = document.createElement('div');
	$(about).addClass('aboutContainer');
	$(about).html("La metodología de recopilación de la información se realizó investigando los medios de comunicación y los medios sociales de los candidatos, frentes y partidos. <br/><br/> <a target='_blank' href='http://ytuquepropones.com/fuentes-informacion.txt' title='Fuentes de información'>Fuentes de información<a>");
	$('body').append(about);
	$(about).click(function(e) {
        $('.aboutContainer').animate({marginLeft: '-'+$(this).outerWidth() +'px'},300);
    });
}
