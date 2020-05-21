import avait from './scence.jpg';
import style from './avait.scss';
import createAvitor from './avait';

createAvitor();
const img = new Image();
img.src = avait;
img.classList.add(style.await);

document.getElementById('root').append(img);