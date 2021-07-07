// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
 
  return Object.assign({}, driver, { [key]: value });
}



function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }


function deleteFromDriverByKey(driver, key) {
   var driverNew = driver[key]
  

 driverNew = Object.assign({}, driver, { [key]: undefined });
 
return driverNew

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    driver[key] = undefined;
    
    return driver
    
    }






//it('returns a driver with the original key value pairs and the new key value pair', function () {
  //  expect(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')).to.eql({
    //  name: 'Sam',
      //address: '11 Broadway'
//    });
  //});