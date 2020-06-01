//此配置项只有使用polyfill时，才会使用
// import '@babel/polyfill'


const arr = [
    new Promise(() => {}),
    new Promise(() => {})
]
arr.map(item => console.log(item))