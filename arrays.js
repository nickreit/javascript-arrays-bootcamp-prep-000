var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array.push("foo")
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
