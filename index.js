// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
const newdriver = Object.assign({},driver,{address:value})
return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
return driver = {key:value}
}
