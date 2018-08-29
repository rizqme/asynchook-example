
let i = 1;
setImmediate(() => {
    setImmediate(() => {
        i = 0;
    })
    i++;
});
console.log(i);
setImmediate(() => {
    console.log(i);
});
setTimeout(() => {
    console.log(i);
}, 100);