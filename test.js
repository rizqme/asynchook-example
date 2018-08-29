
Promise.resolve(true).then(() => {
    console.log(1);
    setImmediate(()=> {
        console.log(2);
    });
}).then(() => {
    console.log(3);
});
console.log(4);
