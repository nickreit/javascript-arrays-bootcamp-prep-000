var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  chocolateBars.push(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
