import style from './avait.scss';
import avait from './scence.jpg';
function createAvitor(){
    const img = new Image();
    img.src = avait;
    img.classList.add(style.await)
    document.getElementById('root').append(img);
}

export default  createAvitor;