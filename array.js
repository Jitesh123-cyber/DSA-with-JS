// in this filwe the array in jas of DSA is Included;//

let Arr = [1,2,3,4];
console.log(Arr);


let obj = [{name: "jitesh", class: 12, rollno: 23}, 
  {name: "ankush", class: 12, rollno: 24}];
 console.log(obj);


let newarr = new Array(5).fill(4);
console.log(newarr);


let next =  Array.from("hello");
console.log(next);

let sparsArray = [1, , , 6];
console.log(sparsArray);
sparsArray[1]= 20;
console.log(sparsArray);

let star = ["neeraj","jatin","suraj","nitin","jitesh", ];
console.log(star[3],star[4]);

let originalArray = [2,3,4];
let squareArray = originalArray.map((originalArray)=> originalArray*originalArray);
console.log(squareArray);


let name=["ravi","ramma","rahul","jitesh",]
let sur=["machhal","bai","sharma","bhaman",]
console.log(name.concat(sur));
console.log(name.push("kapil"));
console.log(name);
console.log(name.pop(sur));
console.log(name)
console.log(name.shift());
console.log(name);
console.log(name.unshift(sur));
console.log(name)
const next = new Set(["ravi","ravi","ravi","ravi","ravi",]);
console.log(next);

const next1 = new Set(["jitesh","jitesh","jitesh","jitesh","jitesh",]);
console.log(next1);
next1.add("spider","shaktiman","hatim");
console.log(next1);
console.log(next1.add("ramma"));
