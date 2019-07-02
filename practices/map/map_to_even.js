'use strict';
function map_to_even(collection){
  return collection.map(function (params) {
    return params * 2;
  });
}
module.exports = map_to_even;
