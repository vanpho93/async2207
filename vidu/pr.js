// Promise -> 1 class trong javascript
const fs = require('fs');
const request = require('request');

const congPromise = (soA, soB) => new Promise((resolve, reject) => {
    const url = 'http://localhost:3000/tinh/CONG';
    request(`${url}/${soA}/${soB}`, (err, response, body) => {
        if (err) return reject(err);
        resolve(body);
    });
});

// congPromise(4, 6)
// .then(total => console.log(total))
// .catch(err => console.log(err));

const readFilePromise = (filename) => new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) return reject(err);
        resolve(data);
    });
});

readFilePromise('data.txt')
.then(data => console.log(data))
.catch(err => console.log(err.message));
