const request = require('request');

// request('http://vnexpress.net', (err, data, body) => {
//     console.log(body);
// });

function getDataFromUrl(url, cb) {
    request(url, (err, data, body) => {
        cb(body);
    });
}

getDataFromUrl('http://vnexpress.net', data => console.log(data));
