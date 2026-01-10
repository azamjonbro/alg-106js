


function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}
let clock = document.querySelector(".clock")

setInterval(()=>{
    let date = new Date()
let seconds = date.getSeconds()
let minuts = date.getMinutes()
let hour = date.getHours()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let century = Math.floor(year/100+1)
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    clock.innerHTML=`Century: ${romanize(century)} \n Year: ${year} \n Month: ${months[month]} \n Day: ${day} \n  ${hour} : ${minuts} : ${seconds}`
}, 1000)




let username = document.getElementById("username")
let inputParam
console.log(username.classList.contains("input-field"));
username.addEventListener("input", (e)=>{
    inputParam= e.target.value.split(",")
})

let button = document.querySelector(".btn")
button.addEventListener("click", ()=>{
    let random = Math.floor(Math.random()*inputParam.length)
    console.log(inputParam[random]);
})



    function randomColorGenerator(){
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

console.log(randomColorGenerator());

button.style.backgroundColor = randomColorGenerator()
