const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

function volume_sphere() {
    //Write your code here
	const vol_sphere = parseInt(4/3 * 22/7 * Math.pow(radius.value, 3));
    volume.value = vol_sphere;  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
