// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
const newdriver = Object.assign({},driver,{key:value})
return newdriver;
}
