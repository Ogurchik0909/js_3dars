/* JS data types: objects */

/*
let arrayObject = [45,78,'salom','matn',true,false];
console.log(arrayObject[3]);
*/

/*
let oddiyObject = {ism: 'Oloviddin', yoshi: 17};
let talabami = 'Yoq, talaba emas';
if (oddiyObject.yoshi >= 17){
    talabami = "Ha, talaba!"
}
console.log("Olov talabami? " + talabami);
*/

/* Date in JS */

let sana =  new Date();

sana.setFullYear(1991);

let yil = sana.getFullYear();
let oy =  sana.getMonth();
let kun =  sana.getDate();
let haftaKuni =  sana.getDay();
let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust",
            "Sentyabr","Oktyabr","Noyabr","Dekabr"];
let kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba",
            "Juma","Shanba"];

document.write("Bugun " + yil + "-yil " + oylar[oy] + " oyining " + kun +
                "-kuni. Haftaning esa " + kunlar[haftaKuni] + " kuni.");






