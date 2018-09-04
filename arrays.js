var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  .unshift('element')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array]
}
