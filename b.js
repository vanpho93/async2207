const fs = require('fs');

// fs.readFile('./data.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

function read(filename, cb) {
    fs.readFile(filename, 'utf8', (err, data) => {
        cb(data);
    });
}

// console.log(read('./data.txt'));

// console.log(read('./data.txt'));
read('./data.txt', data => console.log(data));
read('./data.txt', data => console.log('Du lieu: ' + data));
