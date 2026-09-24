let a = 10;
let b = "10";
console.log(a==b);
console.log(a===b);
console.log(a + 5);
console.log(a>5 && a<20);
let marks = 75;
if(marks>=90){
    console.log("A grade");
}
else if(marks>=60){
    console.log("B grade");
}
else{
    console.log("C grade");
}
// for loop print 1 to 5
for (let i=1; i<=5; i++){
    console.log(i);

}
let num = 0;
while (num<=10){
    console.log(num);
    num +=2;
}
//function declaration &expression call
function add(a,b){
return a +b;

}
console.log(add(3,5));
let sub = function(a,b){
    return a-b;
}
console.log(sub(10,5));     
       // arrow function & default parameter
       const greet =( name = "guest") =>`hello, ${name}!`
       console.log(greet()); // Output: hello, guest!
       console.log(greet("Alice")); // Output: hello, Alice!    
       const numbers = [1, 2, 3, 4, 5];
       const doubled = numbers.map(num => num *2);
       const evens =numbers.filter(num => num % 2 === 0);
       const sum = numbers.reduce((acc, num) => acc + num, 0);
       console.log(doubled);
       console.log(evens);
       console.log(sum);
       const arr1 =[1,2,3];
       const arr2 =[4,5,6];
       const combined = [...arr1, ...arr2];
       console.log(combined);//[1,2,3,4,5,6]
       //rest: collect remaining arugemnets 
       function sumAll(...args){
        return args.reduce((acc, num) => acc + num, 0);
       }
       console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15    
       