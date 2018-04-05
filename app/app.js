const people = [
  {
    name: 'austen',
    age: 23
  },
  {
    name: 'autumn',
    age: 29
  }
]
 const arrayOfNums = [2,4,6,8];

 function sumOfNum(arr) {
   let sum = 0;
   for(let i = 0; i < arr.length; i++) {
     sum += arr[i]
   }
   return sum;  
 }