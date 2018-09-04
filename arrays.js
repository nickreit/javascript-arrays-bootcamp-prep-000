var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array.push("foo", 1)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...chocolateBars]
}
