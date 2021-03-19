// Only change code below this line
function splitArrayInGroups(arr, n) {
	var newArr = [...arr];
  
  var result = [];  
  
  for(i=0;i<newArr.length;i+=n) {
  	result.splice(i, 0, newArr.slice(i,i+n));
  }
  
  return result;
}
// Only change code above this line
console.log(splitArrayInGroups([0,1,2,3,4,5,6], 3));
module.exports = splitArrayInGroups;