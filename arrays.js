var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var foo = [1, 2, 3]

function addElementToBeginningOfArray(array, element) {
  array.push("foo", 1)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
