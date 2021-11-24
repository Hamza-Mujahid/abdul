// console.log('hello')
let a = 0;

let counter = () => {
    // console.log(document.getElementById('cnt').innerHTML);
    a = a + 1
    document.getElementById('cnt').innerHTML = a;
}
let reduce = () => {
    a = a - 1
    document.getElementById('cnt').innerHTML = a;
}
let reset = () => {
    a = 0
document.getElementById('cnt').innerHTML = a
}