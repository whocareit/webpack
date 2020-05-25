// import './index.css';

// var btn = document.createElement('button');
// btn.innerHTML = "新增";
// document.body.appendChild(btn);

// btn.onclick = function(){
//     var item = document.createElement('div');
//     item.innerHTML = 'item';
//     document.body.appendChild(item);
// }

// var root = document.getElementById('root');
// root.innerHTML = '<div>1235dfdfdsdsdffdfddd</div>'
// root.classList.add('element');

import counter from './counter.js';
import number from './number.js';
counter();
number();

if(module.hot){
    module.hot.accept('./number', () => {
        var numberId = document.getElementById('number');
        document.body.removeChild(numberId);
        number();
    })
}