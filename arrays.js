var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var foo = ["green", "yellow", "orange"]

function addElementToBeginningOfArray(array, element) {
  chocolateBars.push("foo", 1)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
