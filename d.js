const request = require('request');
const fs = require('fs');

function getDataFromUrl(url, cb) {
    request(url, (err, data, body) => {
        cb(body);
    });
}

fs.writeFile('./x.txt', 'ksajdfja', err => console.log(err));

// getDataFromUrl('http://vnexpress.net', data => console.log(data));

function getDataFromUrlAndSave(url, filename, cb) {
    request(url, (err, data, body) => {
        if (err) return cb(err);
        fs.writeFile(filename, body, err => {
            cb(err);
        });
    });  
}

getDataFromUrlAndSave('http://dantri.com.vn', 'dantri.html', err => console.log(err));
