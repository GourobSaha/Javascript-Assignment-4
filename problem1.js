//Problem - 1: Radian to Degree Conversion
//Declaring Function

function radianToDegree(radian){

    let degree = 0;
    if(typeof radian !== "number"){
        return "Please enter number only!";
    }
    else if (radian < 0){
        return "Number should be positive!";
    }
    else{
        // Formula to convert radian to degree;
        degree = (radian * (180 / Math.PI)).toFixed(2);
        return degree;
    }

}

console.log(radianToDegree(10));