/*-----------------------------------Problem 1-------------------------------------------*/
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
//End of Problem -1

/*-----------------------------------Problem 2-------------------------------------------*/

//Problem - 2: Javascript file extension check
//Declaring Function

function isJavaScriptFile(file){

    let checkFile = file;
    if(typeof file === "number"){
        return "Please enter string only!";
    }
    else{
        //Checking the file extension .js or not
        if((checkFile.substr(-3)).toLowerCase() === '.js'){
            return true;
        }
        else{
            return false;
        }
    }
}
//End of Problem - 2

/*-----------------------------------Problem 3-------------------------------------------*/

//Problem - 3: Oil Price Check
//Declaring Function

function oilPrice(petrolPerLitre, dieselPerLitre, octanePerLitre){

    const petrolPerLitrePrice = 114;
    const dieselPerLitrePrice = 130;
    const octanePerLitrePrice = 135;

    if(typeof petrolPerLitre !== "number" || typeof dieselPerLitre !== "number" || typeof octanePerLitre !== "number"){
        return "Please enter number only!";
    }
    else if(petrolPerLitre < 0 || dieselPerLitre < 0 || octanePerLitre < 0){
        return "Number should be positive!";
    }
    else{
        //Calculating individual oil price
        let petrolPrice = petrolPerLitre * petrolPerLitrePrice;
        let dieselPrice = dieselPerLitre * dieselPerLitrePrice;
        let octanePrice = octanePerLitre * octanePerLitrePrice;
        //calculating the total price
        let totalPrice = petrolPrice + dieselPrice + octanePrice;

        return totalPrice;
    }

}
//End of Problem - 3

/*-----------------------------------Problem 4-------------------------------------------*/

//Problem - 4: Extra person bus fare check
//Declaring Function

function publicBusFare(totalPerson){

    const reservedBusContains = 50;
    const microBusContains = 11;
    const busFare = 250;

    if(typeof totalPerson !== "number"){
        return "Please enter number only!";
    }
    else if (totalPerson < 0){
        return "Number of person should be positive!";
    }
    else{
        // calculating remaining persons from reserved bus
        let extraPersonFromBus = totalPerson % reservedBusContains;
        // calculating remaining persons from microbus
        let extraPersonFromMicroBus = extraPersonFromBus % microBusContains;
        // calculating public bus fare for remaining persons
        let totalBusFare = extraPersonFromMicroBus * busFare;
        return totalBusFare;
    }
    
}
//End of Problem - 4

/*-----------------------------------Problem 5-------------------------------------------*/

//Problem - 5: Best friend check
//Declaring Function

function isBestFriend(firstFriend, secondFriend){
    
    //Checking the length of arguments
    if(arguments.length !== 2){
        return "Please give the information of only two persons!";
    }
    //Checking the the arguments are object not not
    else if(typeof firstFriend !== "object" || typeof secondFriend !== "object"){
        return "Please give the information in two different objects!";
    }
    //Checking the properties of the objects are string or not
    else if(typeof firstFriend.name !== "string" || typeof firstFriend.friend !== "string" || typeof secondFriend.name !== "string" || typeof secondFriend.friend !== "string"){
        return "Person's and friend's name should be in string!";
    }
    //Checking the two persons are best friends or not
    else if((firstFriend.name).toLowerCase() === (secondFriend.friend).toLowerCase() && (secondFriend.name).toLowerCase() === (firstFriend.friend).toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
//End of Problem -5