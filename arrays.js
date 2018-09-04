var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

array [1]

function addElementToBeginningOfArray(array, element) {
  .unshift('element')
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array]
}
