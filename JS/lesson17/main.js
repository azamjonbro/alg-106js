// let arr = [1,63,6,7,3,44,6,3,455, "salom"]
// let qiymat = arr.reduce((birinchi, ikkinchi)=>{
//     let data = typeof ikkinchi
//     if(typeof birinchi == "number" && data == "number"){
//         return birinchi+ikkinchi
//     }
//     else{
//         console.error("Bolajonlar hatolik mavjud: ","qiymatlar faqat raqamlardan iborat boolsin.");
        
//     }
// })
// console.log(qiymat);

// let arr2 = ["laylo", "kamola", "jomila", "muslima"]

// arr2.forEach((element) => {
//     if(element == "laylo") {
//         console.log(element + " chiroyli qiz");
//     }else{
//         console.log(element + ", qalaysan!");
//     }
// })

// let some = arr.some((e) => typeof e == "number")
// console.log(some);

// let every = arr2.every((e) => typeof e == "string")
// console.log(every);


// for(let i = 1; i < 10; i+=1 ) {
//     if(i == 7) {
        
//     } else {
//         console.log(i);
//     }
// }


// let arr = [1,2,34,5,43,6,7]

// let newResult = arr.map((e) => {
//     if(e > 10) {
//         return e
//     } else {
//         return 10
//     }
// })

// console.log(newResult);


let arr = [1,2,34,55,6]

let filtered = arr.filter((e) => e > 10)

console.log(filtered);


let found = arr.find((e) => e > 10)
console.log(found);
