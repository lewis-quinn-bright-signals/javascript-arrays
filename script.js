var name = 'shane ood osborne';

var upper = name.split(' ') // splits array = [shane, odd, osborne]
    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // takes values and makes them upper case = [Shane, Odd, Osborne]
    .join(' '); // combines all values together with a ' ' seperator

console.log(upper)