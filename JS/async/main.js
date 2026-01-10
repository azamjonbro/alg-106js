"use strict"
// use strict bu qatiy o'zgaruvchi va qiymatlarni talab qilish hisoblanib u eski versiyadagi hatoliklarni oldini olish masalan let const vardan foydalanmay o'zgaruvchi elon qilish ni oldini oladi.

a="laylo"
console.log(a);

// async function malumotOlish(){
//     let response = await fetch("https://dummyjson.com/products")
//     let data = await response.json()
//     console.log(data);
    
// }


// malumotOlish()

// microtaskka kiradigan js codelar va kalit so'zlar:

// Promise.then
// o'zgaruchilar va funksiyalarni yaratish
// for, while, if va boshqa nazorat tuzilmalari
// data strukturalari bilan ishlash (masalan, massivlar, obyektlar)

// macrotaskka kiradigan js codelar va kalit so'zlar:

// setTimeout
// setInterval
// setImmediate (Node.js muhitida)
// I/O operatsiyalari
// UI rendering
//  async/await
// queueMicrotask
// MutationObserver
// process.nextTick (Node.js muhitida)


// settimeout bu biz kiritgan vaqtdagina codelarni ishga tushurib beradigan callback function hisoblanadi.

// setInterval(()=>{
//     setTimeout(()=>{console.log("setTimeout ishga tushdi")},4000)
// },500)
