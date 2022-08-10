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

console.log(publicBusFare(105));