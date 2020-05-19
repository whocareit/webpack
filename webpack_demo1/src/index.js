import avait from './scence.jpg';
import './avait.css'
const img = new Image();

console.log(avait);
img.src = avait;
img.classList.add('await')

document.getElementById('root').append(img);