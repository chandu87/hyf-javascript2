
// -------------------- step 1.1 -------------------------
stepOne(10,15,sayThree,sayFive);

function stepOne(startVal, endVal, callbackThree, callbackFive){
        let generatedArray = [];
        for( let i = startVal; startVal <= endVal; startVal++){
            generatedArray.push(startVal);
        }

        generatedArray.forEach(function(element){
            if((element % 3 == 0) && (element % 5 == 0)){
                console.log("--> callback to both functions");
                callbackThree(element);
                callbackFive(element);
            }
            else if(element % 3 == 0){
                console.log("--> callback to callbackThree function");
                callbackThree(element);
            }
            else if(element % 5 == 0){
                console.log("--> callback to callbackFive function");
                callbackFive(element);
            }
        });
}
function sayThree(element){
        console.log(element + " is divided by three ");
}
function sayFive(element){
        console.log(element + " is divided by five");
}


// -------------------- step 1.3 -------------------------  
console.log(repeatStringNumTimes("abc", 3));
function repeatStringNumTimes(str, num) {
    // repeat after me
    var res = "";
    if(num >0){
      for(var i=1; i <=num; i++){
        res +=str;
      }
    }
    else{
      res = "";
    }
    return res;
  }
// -------------------- step 1.4 -------------------------  
console.log(repeatStringNumTimes("abc", 3));
function repeatStringNumTimes(str, num) {
    // repeat after me
    var res = "";
    if(num >0){
        while(num>0){
            res += str;
            num--;
        }
    }
    else{
      res = "";
    }
    return res;
  }
// -------------------- step 1.5 -------------------------  
console.log(repeatStringNumTimes("abc", 3));
// Using a For loop
function repeatStringNumTimes(str, num) {
    // repeat after me
    var res = "";
    if(num >0){
        do{
            res += str;
            num--;
        }while(num>0)
    }
    else{
      res = "";
    }
    return res;
  }

  
  