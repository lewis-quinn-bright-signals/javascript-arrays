var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

var list = lessons
    // calls the values from lessons and then sorts in desending order accordint to view numbers
    .sort((a, b) => b.views - a.views)

    // mapping the title and views from lessons
    .map(x => `    <li>${x.title} (${x.views})</li>`)

    // joining the values together but on new lines
    .join('\n');

// inserting the new list values into the output between <ul/>
var output = `<ul>\n${list}\n</ul>`;

console.log(output)