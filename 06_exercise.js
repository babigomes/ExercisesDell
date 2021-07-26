//do it using Dom:
const section = document.getElementById('solncat-hero');
const newPlace = document.getElementById('solncat-offering'); 
newPlace.insertAdjacentElement('afterbegin', section);

//or do it using Jquery: 
$('#solncat-hero').appendTo('#solncat-offering');