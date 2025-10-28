// let salom =  String(prompt("salom bolalar ?"))
let sonlar = 321676768767837821687n
// bu yerda typof bilan har doim tekshirsam ham number qaytadi sababi buni umumiy typesini numberga edit qilib qoydim

console.log(sonlar);
// NaN bu -> Not a Number
// agar men shunchaki bo'sh qoldirsam bu 0 agar men nimadir 
// qiymatni kopaytirsam shu son agar men matn kiritsam bu bizda NaN degan javob chiqadi

console.log(typeof sonlar);


function salomdumbullar (ism, yosh)//parameter
{
    console.log(ism + " " + yosh);
    
}

salomdumbullar("laylo",20) //argument

const data = function (perfume, color) {
    console.log(perfume + color)
}
data("lipstick", "nigga") // expression

