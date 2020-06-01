//此配置项只有使用polyfill时，才会使用
import '@babel/polyfill';
import React,{ Component } from 'react';
import ReactDom from 'react-dom';


// const arr = [
//     new Promise(() => {}),
//     new Promise(() => {})
// ]
// arr.map(item => console.log(item))

class App extends Component{
    render(){
        return <div>Hello !!!!!</div>
    }
}

ReactDom.render(<App />, document.getElementById('root'));