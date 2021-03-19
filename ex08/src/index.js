// Only change code below this line
function myMutation (arr) {
	var firstWord = arr[0].toLowerCase();
	var secondWord = arr[1].toLowerCase();
	
  for(i=0;i<secondWord.length;i++) {
  
    if(firstWord.indexOf(secondWord[i]) == -1) {
    	return false;
    }
  }
  return true;
};
// Only change code above this line
console.log(myMutation(['voodoo', 'NO']));
module.exports = myMutation;
