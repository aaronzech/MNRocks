window.onload=getExif;

//Grab Form
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
	e.preventDefault();
	

	// Create Element
	
	const name  = document.createElement('DIV');
	name.textContent=`Name:${form.fname.value}`;
	document.body.append(name);
	const datehid  = document.createElement('DIV');
	datehid.textContent=`Date:${form.found.value}`;
	document.body.append(datehid);
	const inpFile = document.getElementById('inpFile');
	
	inpFile.addEventListener("change",function(){
		console.log(inpFile.files);
	});
	
	
	
})

