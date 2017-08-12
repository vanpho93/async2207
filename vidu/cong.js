const request = require('request');

function add(num1, num2, cb) {
    const url = 'http://localhost:3000/tinh/CONG';
    request(`${url}/${num1}/${num2}`, (err, response, body) => {
        cb(err, body);
    });
}

function sub(num1, num2, cb) {
    const url = 'http://localhost:3000/tinh/TRU';
    request(`${url}/${num1}/${num2}`, (err, response, body) => {
        cb(err, body);
    });
}

function mul(num1, num2, cb) {
    const url = 'http://localhost:3000/tinh/NHAN';
    request(`${url}/${num1}/${num2}`, (err, response, body) => {
        cb(err, body);
    });
}

function div(num1, num2, cb) {
    const url = 'http://localhost:3000/tinh/CHIA';
    request(`${url}/${num1}/${num2}`, (err, response, body) => {
        cb(err, body);
    });
}

// (a + b) * h / 2

function tinhDienTichHinhThang(dayLon, dayNho, chieuCao, cb) {
    add(dayLon, dayNho, (errAdd, tong) => {
        if (errAdd) return cb(errAdd);
        mul(tong, chieuCao, (errMul, tich) => {
            if (errMul) return cb(errMul);
            div(tich, 2, (errDiv, dienTich) => {
                cb(errDiv, dienTich);
            });
        });
    });
}

tinhDienTichHinhThang(5, 4, 2, (err, dienTich) => console.log(dienTich));
