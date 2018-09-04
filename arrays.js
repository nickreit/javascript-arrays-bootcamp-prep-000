var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var 1 = [1]

function addElementToBeginningOfArray(array, element) {
  array.push([1], 'foo')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
