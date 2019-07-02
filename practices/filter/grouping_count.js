'use strict';

function grouping_count(collection) {
  var sum = new Map();
  var obj = {};
  
  collection.forEach(element => {
    var count = 1;
    if(sum.has(element)){
      count = sum.get(element) + 1;
    }
    
    sum.set(element, count);
  });
  
  sum.forEach(function (value, key, map) {
    obj[key + ''] = value
  });

  return obj;
}

module.exports = grouping_count;
