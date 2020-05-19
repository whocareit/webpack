import avait from './scence.jpg';
import './avait.scss'
const img = new Image();

console.log(avait);
img.src = avait;
img.classList.add('await')

document.getElementById('root').append(img);