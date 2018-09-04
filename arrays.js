var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

const array = [1]

function addElementToBeginningOfArray(array, element) {
  array.push(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array]
}
