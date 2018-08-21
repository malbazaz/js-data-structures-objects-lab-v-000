// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
const newdriver = Object.assign({},driver,{address:value})
return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
driver = Object.assign(driver,{address:value})
return driver
}

function deleteFromDriverByKey(driver,key){
const newdriver = Object.assign({},driver)
delete newdriver.key;
}
