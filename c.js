function inSoChan() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 2 === 0;
        if (dieuKien) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = Math.sqrt(i) % 1 === 0;
        if (dieuKien) console.log(i);
    }
}

function inSo(checkFunction) {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = checkFunction(i);
        if (dieuKien) console.log(i);
    }
}

inSo(x => Math.sqrt(x) % 1 === 0);
