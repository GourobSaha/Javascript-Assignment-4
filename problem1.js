//Problem - 1
//Declaring Function

function radianToDegree(radian){

    

    if(typeof radian !== "number"){
        console.log("Please enter number only!");
    }
    else if (radian < 0){
        console.log("Number should be positive!");
    }
    
    // Formula to convert radian to degree;
    let degree = (radian * (180 / Math.PI)).toFixed(2);
    return degree;

}

console.log(radianToDegree(21));