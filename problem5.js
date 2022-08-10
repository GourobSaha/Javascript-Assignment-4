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

let person1 = {name:'mizan',friend:'Kaku'};
let person2 = {name:'Kaku',friend:'Mizan'};
console.log(isBestFriend({name:'mizan',friend:'Kakuu'},{name:'Kaku',friend:'mizan'}))
console.log(isBestFriend({name:21,friend:'Kaku'},{name:'Kakuu',friend:'mizan'}))
console.log(isBestFriend(person1,person2));
console.log(isBestFriend(21,'df',21));

