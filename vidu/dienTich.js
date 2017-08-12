const request = require('request');

const add = (soA, soB) => new Promise((resolve, reject) => {
    if (typeof soA !== 'number' || typeof soB !== 'number') {
        return reject(new Error('Type error'));
    }
    const url = 'http://localhost:3000/tinh/CONG';
    request(`${url}/${soA}/${soB}`, (err, response, body) => {
        if (err) return reject(err);
        resolve(body);
    });
});

const mul = (soA, soB) => new Promise((resolve, reject) => {
    if (typeof soA !== 'number' || typeof soB !== 'number') {
        return reject(new Error('Type error'));
    }
    const url = 'http://localhost:3000/tinh/NHAN';
    request(`${url}/${soA}/${soB}`, (err, response, body) => {
        if (err) return reject(err);
        resolve(body);
    });
});

const div = (soA, soB) => new Promise((resolve, reject) => {
    if (typeof soA !== 'number' || typeof soB !== 'number') {
        return reject(new Error('Type error'));
    }
    const url = 'http://localhost:3000/tinh/CHIA';
    request(`${url}/${soA}/${soB}`, (err, response, body) => {
        if (err) return reject(err);
        resolve(body);
    });
});

// 4 5 2
// add(4, 'x')
// .then(a => console.log(a))
// .catch(e => console.log(e.message));
function tinhDienTich(dayLon, dayNho, chieuCao) {
    return add(dayLon, dayNho)
        .then(tong => mul(+tong, chieuCao))
        .then(tich => div(+tich, 2));
}

// tinhDienTich(4, '5', 2)
// .then(dienTich => console.log(dienTich))
// .catch(err => console.log(err.message));
const tinhDienTich2 = async (dayLon, dayNho, chieuCao) => {
    const tong = await add(dayLon, dayNho);
    const tich = await mul(+tong, chieuCao);
    const dienTich = await div(+tich, 2);
    return dienTich;
}

tinhDienTich2(4, 5, 2)
    .then(dt => console.log(dt));

const getTempByCityName = async (cityName) => {
    const res = await fetch(prefix + cityName)
    const resJSON = await res.json();
    return resJSON.main.temp;
};
