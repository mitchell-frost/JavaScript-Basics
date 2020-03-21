function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}


function factorial(n){
    var fact=1;

   for(var i=2; i<=n; i++){
       fact =  fact*i;
   }
   return fact;
}

function kebabToSnake(str){
    //replace all - with _
    var newStr = str.replace(/-/g , "_");
    return newStr;   
}