// Only change code below this line
function splitArrayInGroups(arr, n) {
  var result = [];  
  
  for(i = 0;i < arr.length;i+=n) {
  	result.splice(i, 0, arr.slice(i,i+n));
  }
  
  return result;
}
// Only change code above this line
console.log(splitArrayInGroups([0,1,2,3,4,5,6], 3));
console.log(splitArrayInGroups([0,1,2,3,4,5,6,7,8], 2));
module.exports = splitArrayInGroups;