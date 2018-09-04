var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var foo = ["green", "yellow", "orange"]

function addElementToBeginningOfArray(array, element) {
  array.push([1], 'foo')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
