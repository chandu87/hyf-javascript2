
console.log("-------------------- step 1.1 -------------------------");
stepOne(10, 15, sayThree, sayFive);

function stepOne(startVal, endVal, callbackThree, callbackFive){
        let generatedArray = [];
        for( let i = startVal; startVal <= endVal; startVal++){
            generatedArray.push(startVal);
        }

        generatedArray.forEach(function(element){
            if(element % 3 == 0){
                console.log("--> callback to callbackThree function");
                callbackThree(element);
            }
            if(element % 5 == 0){
                console.log("--> callback to callbackFive function");
                callbackFive(element);
            }
        });
}
function sayThree(number){
        console.log(`${number} is divided by three`);
}
function sayFive(number){
        console.log(`${number} is divided by five`);
}


console.log("-------------------- step 1.3 -------------------------");
console.log(repeatStringNumTimes("abc", 3));
function repeatStringNumTimes(str, num) {
    // repeat after me
    let res = "";
    if(num >0){
      for(let i=1; i <=num; i++){
        res +=str;
      }
    }
    return res;
  }

console.log("-------------------- step 1.4 -------------------------");
console.log(repeatStringNumTimes("abc", 3));
function repeatStringNumTimes(str, num) {
    // repeat after me
    let res = "";
    if(num >0){
        while(num>0){
            res += str;
            num--;
        }
    }
    return res;
  }
console.log("-------------------- step 1.5 -------------------------");
console.log(repeatStringNumTimes("abc", 3));
// Using a For loop
function repeatStringNumTimes(str, num) {
    // repeat after me
    let res = "";
    if(num >0){
        do{
            res += str;
            num--;
        }while(num>0)
    }
    return res;
  }
console.log("-------------------- step 1.6 -------------------------");
let Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
  };
  
  // Only change code below this line.
  let MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
  
  };
  console.log("Constructor motorbike is --> " + MotorBike);

console.log("-------------------- step 1.7 -------------------------");
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length;j++){
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
 console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

// -------------------- step 1.8 -------------------------
 
// -------------------- step 1.9 -------------------------
  
let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);  
console.log("In case of varibles values get passes but when pass objects reference get passed.");


