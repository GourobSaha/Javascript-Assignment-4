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

console.log(oilPrice(30,20,10));