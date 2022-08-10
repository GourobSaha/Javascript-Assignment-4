//Problem - 2: Javascript file extension check
//Declaring Function

function isJavaScriptFile(file){

    
    let checkFile = file;
    if(typeof file === "number"){
        return "Please enter string only!";
    }
    else{
        //Checking the file extension .js or not
        if(checkFile.substr(-3) === '.js'){
            return true;
        }
        else{
            return false;
        }
    }
}

console.log(isJavaScriptFile('app.js'));