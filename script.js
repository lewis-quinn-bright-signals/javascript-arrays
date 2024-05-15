var videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 420
    }
];

function complete(x) {
    return x.viewed === x.length;
}

const isComplete = videos.every(complete);

const completed = videos.filter(complete);

console.log(isComplete)
console.log(completed)