const sumItems = function(array) {
  let sumResult = 0;

  for (let element of array) {
    if (Array.isArray(element)) sumResult += sumItems(element);
    else sumResult += element;
  }

  return sumResult;
};

module.exports = sumItems;