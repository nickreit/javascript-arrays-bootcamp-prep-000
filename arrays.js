var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var test = [1]

function addElementToBeginningOfArray(array, element) {
  array.push(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
