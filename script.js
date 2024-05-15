const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000;
const searchTerm = 'array';

const filtered = lessons
    // filter out any items that do not contain the search term 'array'
    .filter(x => x.tags.indexOf(searchTerm) > -1)

    // filter those results to only contain those that have over the minimun view count
    .filter(x => x.views > minViews)

    // sort these results into decending order
    .sort((a, b) => b.views - a.views)

    // insert the results into a map containing their title
    .map(x => `  <li>${x.title}</li>`)

    // join the results together but on seperate lines
    .join('\n');

console.log(`<ul>
${filtered}
</ul>`)