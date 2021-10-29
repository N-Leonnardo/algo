/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

// const str1 = "a x a";
//   const expected1 = true;
  
  const str2 = "racecar";
//   const expected2 = true;
  
//   const str3 = "Dud";
//   const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
// pseudo:
// create a temp variable to save the reverse string
// go thru the string to read each letter
// if condition to see if they are equal
function isPalindrome(str) {
    var temp = "";
    for(var i = (str.length-1); i>=0;i--){
        temp = temp + str[i];
    }
    if(temp === str){
        return true
    }
    else{
        return false
    }
}

var x = isPalindrome(str4);

console.log(x)