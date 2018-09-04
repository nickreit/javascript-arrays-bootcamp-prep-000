var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var test = [1]

function addElementToBeginningOfArray(array, element) {
  test.push('foo')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
