var fruits = [
  {id: 1, name: 'Banana', color: 'Yellow'},
  {id: 2, name: 'Apple', color: 'Red'}
];

function searchByName(array, name) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase() === name.toLowerCase()) {
      console.log(array[i])
    }
  }
}

searchByName(fruits, 'Apple');

// -------------------------------------------------------------------------------------------------------

function searchByKey(array, key, value) {
  key = key.toLowerCase();
  for (var i = 0; i < array.length; i++) {
    if (array[i][key].toLowerCase() === value.toLowerCase()) {
      console.log(array[i])
    }
  }
}

searchByKey(fruits, 'name', 'apple');

// -------------------------------------------------------------------------------------------------------

var numbers = [1, 2, 3, 4];

new_numbers = [];

function transform(collection, tranFunc) {
  for (var i = 0; i < collection.length; i++) {
    new_numbers.push(tranFunc(collection[i]));
  }
}

var output = transform(numbers, function (num) {
  return num * 2;
});

console.log(new_numbers);

// -------------------------------------------------------------------------------------------------------

var array = [{
  id: 1,
  name: 'John',
}, {
  id: 2,
  name: 'Mary',
}, {
  id: 3,
  name: 'Andrew',
}];

function sortBy(array, key) {
  var sortedArray = array.slice(); // prevent mutation

  for (var i = 0; i < (sortedArray.length - 1); i++) { // its not required to go through the last loop so array length minus one
    for (var j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i][key] > sortedArray[j][key]) {
        var temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
      } else {
        sortedArray[j] = sortedArray[j];
      }
    }
  }
  return sortedArray;
}

var sorted = sortBy(array, 'name');
console.log(sorted);

// -------------------------------------------------------------------------------------------------------

var points = [
  {x: 10, y: 20},
  {x: 40, y: 40},
  {x: 60, y: 20},
  {x: 80, y: 60},
  {x: 100, y: 30},
  {x: 120, y: 80},
  {x: 200, y: 20},
  {x: 240, y: 70},
  {x: 290, y: 30},
  {x: 300, y: 200}
];

var box = document.getElementById('box');
for (var i = 0; i < points.length; i++) {
  var point = document.createElement('span');
  point.style.height = '4px';
  point.style.width = '4px';
  point.style.backgroundColor = 'blue';
  point.style.position = 'absolute';
  point.style.borderRadius = '50%';
  point.style.top = points[i].y + 'px';
  point.style.left = points[i].x + 'px';
  box.appendChild(point);
}

// -------------------------------------------------------------------------------------------------------

var FPS = 60;
var FRAME_LIMIT = 1000 / FPS;

var y = 0;
var circle = document.getElementById('circle');
circle.style.width = '50px';
circle.style.height = '50px';
circle.style.backgroundColor = 'blue';
circle.style.borderRadius = '50%';
circle.style.position = 'absolute';
circle.style.left = '45%';

function bounce(height) {
  setInterval(function () {
    y++;
    if (y >= height) {
      y = -y
    }
    circle.style.top = (y < 0) ? (-y) + 'px' : (y) + 'px';
  }, FRAME_LIMIT);
}

bounce(250);
