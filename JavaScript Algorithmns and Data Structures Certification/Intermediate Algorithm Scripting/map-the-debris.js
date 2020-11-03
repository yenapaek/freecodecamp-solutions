/* Intermediate Algorithm Scripting: Map the Debris
 *
 * Problem: Return a new array that transforms the element's average altitude
 * into their orbital periods (in sec)
 * 
 * Array format: {name: 'name', avgAlt: avgAlt}
 * 
 * Rounded to nearest whole number
 * 
 * Radius of Earth: 6367.4447 km
 * GM value of earth: 398600.4418 km^3s^-2
 * /

/* Solution */
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2*Math.PI;
    var newArr = [];
  
    var getOrbitalPeriod = function(obj){
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c/GM);
      var orbPeriod = Math.round(a*b);
  
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
    
    for (var elem in arr) {
      newArr.push(getOrbitalPeriod(arr[elem]));
    }
    
    return newArr;
  }
