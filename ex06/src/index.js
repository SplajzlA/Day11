// Only change code below this line
var myArray = [
        [2,5, 6,7,8,9],

        [2.5,2,0.5,0.2,8],
   
        [1,2,3,4,5,6,7,8,9]
];
function multiplyArrayFunction(myArray){
    var myResult = [];
    for (var i=0; i < myArray.length; i++){
        var rowSum=0;
        var rowProduct=1;
        for (var j=0; j < myArray[i].length; j++){
            rowSum += myArray[i][j];
            rowProduct *= myArray[i][j];
        }
        myResult.push([rowProduct, rowSum]);
    }
    return myResult;
}

// Only change code above this line
console.log(multiplyArrayFunction(myArray));
module.exports = multiplyArrayFunction;