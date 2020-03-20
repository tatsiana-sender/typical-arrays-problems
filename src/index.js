
exports.min = function min (array) {
    if (array == undefined || array.length == 0 ) {
        return 0;
  } else {
      minimum = array[0];
      for (i = 1; i < array.length; i++) {
          if (array[i] < minimum ) {
              minimum = array[i];
          }
      }
    return minimum;
  }
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0 ) {
        return 0;
  } else {
      maximum = array[0];
      for (i = 1; i < array.length; i++) {
          if (array[i] > maximum ) {
              maximum = array[i];
          }
      }
    return maximum;
  }

}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0 ) {
        return 0;
  } else {
      var sum = array.reduce(function(prev, current){
          return prev + current;
      })
      return sum / array.length;
  }
}
