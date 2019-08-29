// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key) {
  let clone = {...driver}
  delete clone[key]
  return clone;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver;
}

// driver = {
//         name: 'Sam',
//         address: '11 Broadway'
//       };
//
// deleteFromDriverByKey(driver, 'name')
