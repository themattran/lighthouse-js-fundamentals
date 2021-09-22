function isOdd (num) {
  if (num % 2 === 0) {
    return "false";
  } else {
    return "true";
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));




function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    var areaR = length * width;
    return areaR;
  }
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    var areaT = base * height / 2; 
    return areaT;
  }
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    var areaC = Math.PI * Math.pow(radius, 2);
    return areaC;
  }
}

console.log(calculateRectangleArea(10, 5));



