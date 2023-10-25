// let eded = parseInt(prompt("Ededi Daxil Edin: "));

// if (eded % 2 == 0) {
//     alert("Bu eded 2-nin quvvetidir.");
// } else {
//     alert("Bu eded 2-nin quvveti deyil.");
// }


// 2-ci Tapsiriq 
// let x = parseInt(prompt("Birinci Ededi Daxil edin: "));
// let y = parseInt(prompt("İkinci Ededi Daxil Edin: "));

// console.log("Cavab: " + x**y);


// 3-cu Tapsiriq

let toplam = 0;


    for (let j = 0; j < sayi.length - 1; j++) {
        if (sayi[j] !== sayi[j + 1]) {
            ayniRakam = false;
            break;
        }
    }

    if (ayniRakam) {
        toplam += i;
    }

console.log("Toplam: " + toplam);


