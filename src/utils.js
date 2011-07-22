var NAzT = { };

NAzT.Object  = { };

NAzT.Object.toArray = function(obj) {
    var output = [],
        key,
        ikey=0;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (ikey === parseInt(key, 10)) {
          output.push(obj[key]);
        }
        else {
          return false;
        }
        ikey += 1;
      }
    }
    return output;
}
