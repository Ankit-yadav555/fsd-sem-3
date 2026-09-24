const fs = require('fs');

console.log('1: Start(sync)');
setTimeout(()=>{
    console.log('2: Inside setTimeout(macrotask-run Last)');
},0);
Promise.resolve().then(()=>{
    console.log('3: Inside Promise.then (microTask-runs Before setTimeout)');
});
fs.readFile(__filename,()=>{
    console.log('4: Inside fs.readFile callback (I/O- runs with macrotasks)');
});
console.log('5: End (sync)');