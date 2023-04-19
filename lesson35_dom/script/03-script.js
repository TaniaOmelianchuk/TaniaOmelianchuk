const lights = document.querySelectorAll(".light");
const button = document.querySelector(".traffic-lights__button");
let currentLightIndex = 0;

function changeLight() {
  lights[currentLightIndex].style.backgroundColor = '#808080';
  
  currentLightIndex = (currentLightIndex + 1) % 3;
  
  lights[currentLightIndex].style.backgroundColor = currentLightIndex === 0 ? 'red' : currentLightIndex === 1 ? 'yellow' : 'green';
}

button.addEventListener('click', changeLight);