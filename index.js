// Write your solution in this file!

const driver = {
  
}

function updateDriverWithKeyAndValue(driver,key,value) {
  const newDriver = {...driver}
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver,key) {
  const copyDriver = {...driver}
  delete copyDriver[key]
  return copyDriver
}

function destructivelyDeleteFromDriverByKey(driver,key) {
  delete driver[key]
  return driver
}