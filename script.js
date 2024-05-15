var person = {
    name: 'shane-osborne'
};

var filters = {
    'deslugufy': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugufy | uppercase'; // SHANE OSBOURNE

// Split on | ans then get rid of the white space through using trim
var sections = input.split('|').map(x => x.trim()); // [name, deslugify, uppercase]

// Reference to the first value
var ref = person[sections[0]];

// new output
var output = sections
    // slice to create new array starting from the second value within input
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log(output)