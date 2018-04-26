
// step 1 

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
stepOne(10,15,sayThree,sayFive);

function sayThree(element){
        console.log(element + " is divided by three ");
}
function sayFive(element){
        console.log(element + " is divided by five");
}
