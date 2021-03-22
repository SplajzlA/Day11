// Only change code below this line
var testArr1 = [7, "ate", "", false, 9];
var testArr2 = ["a", "b", "c"];
var testArr3 = [false, null, NaN, 0, undefined, ""];
var testArr4 = [null, NaN, 1, 2, undefined];

function myBouncer (arr) {
    var result = [];

    for(i = 0;i < arr.length; i++) {
      if(arr[i]) {
          result.push(arr[i]);
      }
    }

    return result;
  };
  // Only change code above this line
  console.log(myBouncer(testArr1));
  module.exports = myBouncer;