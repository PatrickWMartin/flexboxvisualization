const layoutToggle = document.querySelector("input[id=layoutToggle]");
const visualizationContainer = document.getElementById('visualization-container'); 
layoutToggle.addEventListener('change', function() {
	if (this.checked){
		visualizationContainer.style.display = 'flex';
		document.getElementById('layout').innerText = 'Flex';
	} else{
		visualizationContainer.style.display = 'block';
		document.getElementById('layout').innerText = 'Block';
	}

});


