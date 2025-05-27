/******************
 * YOUR CODE HERE *
 *******************/

function getFirstItemFrom(arr) {
  return arr[0];
}
function getLastItemFrom(arr) {
  return arr[arr.length - 1];
}
function getIndex3(arr) {
  return arr.length > 3 ? arr[3] : arr[arr.length - 1];
}
function isLongList(arr) {
  return arr.length >= 10;
}
function firstItemIsNumber(arr) {
  return typeof arr[0] === 'number';
}
function secondCharOfThirdString(arr) {
  const thirdItem = arr[2];
  if (typeof thirdItem === 'string' && thirdItem.length >= 2) {
    return thirdItem[1];
  }
  return undefined; 
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
