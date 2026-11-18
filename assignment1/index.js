







let x ="123";
let y =Number(x);
console.log(y+7);
let y =Number("123");
console.log(y);




let Variable = 0;
if(Variable == 0){
     console.log("Invalid");    
}





const arr =[1,2,3,4,5,6,7,8,9,10];
for(i=0;i<10;i++)
   if(i % 2 != 0){
continue;

    }
    else{
       console.log(arr[i]);
        
    }



















function getDay(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDay(2));  // "Monday"




const number = [1,2,3,4,5];
const result = number.filter((num,index)=>{
    return num % 2 == 0;
})
console.log(result);







const role = 2;
switch (role) {
    case 1:
        console.log("Sunday");
        break;
     
     case 2: 
     console.log("Monday");
     break;


    case 3: 
    console.log("Tuesday");
    break;

    case 4:
        console.log("Wednesday");
        break;
    
        
     case 5:
        console.log("(Thursday");
       break;
       
        
    case 6:
        console.log("Friday");
        break;



      case 7:
        console.log("Saturday)");
        break;


    default:
        console.log(undefined);
        
        break;
}



const strings = ["a","ab","abc"];
const result = strings.map((str,index)=>{
    return str.length
})
console.log(result);




function num(n1) {
 if(n1 % 3 === 0 && n1 % 5 === 0){
    return "Divisible by both";
 }
}

console.log(num(15));






const num = n1=> n1*n1;
console.log(num(5));




const inf = ( {username,age}) => `${username} is ${age} years old`
const person = {username:'john', age :25};

console.log(inf(person));





function nums(n1,n2,n3,n4,n5) {
    return n1+n2+n3+n4+n5;
}
console.log(nums(1,2,3,4,5));



function thelargest(n1,n2,n3,n4) {
    const arr = [n1,n2,n3,n4];
    let max = arr[0];
    for (i=0; i<arr.length;i++){
       if(arr[i]>max){
           max = arr[i];
        }
    }
    return max;
}
console.log(thelargest(1,2,5,7));





function words(str) {
    return str.split(" ");

}
console.log(words("the quick brown fox"));





//part 2 :
//Q1 ... 

//Q2 : HOSTING >> means that it sees and give value = undifind
//example: consle log[x];
//var x = 20;
  //  TDZ >> NO premission to read>> can't access
//example : consle log[x];
//let x = 20;


//Q3: == : compare value after type coercion  7=="7" //true
  //  ===: compare value withoud type         7==="7" //false
    
    
//Q4 : ...




//Q5 :  conversion >> i do that by my hand 
//example : const n = String("45");
//consle log[n]


    // coercion :  java script if contant the same such as 5=="5" //true
    // this is called loose equality