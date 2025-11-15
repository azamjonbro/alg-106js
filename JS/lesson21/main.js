// let div = document.querySelector(".button")
// let img = document.querySelector(".img")

// div.addEventListener("click",()=>{
//     console.log(img.style.display);
    
//     if(img.style.display == "none"){
//         img.style.display ="block"
//     }
//     else{
//         img.style.display ="none"
//     }
// })


let input = document.querySelector("#input")
let show = document.querySelector(".showbtn")

let showPass = false

show.addEventListener("wheel", () => {
    if (!showPass) {
        input.setAttribute("type", "text")
        showPass = true
    } else {
        input.setAttribute("type", "password")
        showPass = false
    }
})

// dbl click ikkita bosilganda ishlaydi 
// click esa bir marta bosilganda 
// addEventListener bu hodisa eshitib turadi yani dblclick buladigan bulsa double click bo'lishiga eshitib turadi 
// context menu bu bizga sichqonchani o'ng tomonini bosilganda ishlashini uchun kerak
// mouseenter bu sichqoncha kirganda
// mouseleave sichqoncha chiqganda
// wheel scroll qilganda



// keydown 
// keyup