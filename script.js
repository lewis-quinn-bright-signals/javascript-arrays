// Part 1
// var family = ['Shane', 'Sally', 'Issac'];
// var kittieExists = family.indexOf('kittie') > -1;

// if (!kittieExists) {
//     family.push('kittie');
// }

// console.log(family)


// Part 2
// var family = ['Shane', 'Kittie', 'Sally', 'Issac'];

// console.log(family.indexOf('Kittie', 1))


// Part 3
var whitelist = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter(event => {
    var ext = event.file.substr(event.file.lastIndexOf('.'));
    return whitelist.indexOf(ext) > -1;
});

console.log(filtered)