// function hideEmail(email){
//     let leftparam = email.split("@")[0]
//     return leftparam.slice(0,1) + "*".repeat(leftparam.length-2) + leftparam.slice(-1) + "@" + email.split("@")[1]     
// }

// console.log(hideEmail("islomnarzullayev069@outlock.com"));
// successfully finished first question and this answer very very coool


// function shortway(array){
//     return array[1].split("").every((item)=> array[0].toLowerCase().includes(item.toLowerCase()))
// }
// console.log(shortway(["Mar","army"]));

function incrementNumber(number){
    let arr = `${number}`.split("")
    let incr = arr.reduce((a,b)=>Number(a)+Number(b),0)
    if(incr>9){
        incr= incr.toString().split("").reduce((a,b)=> Number(a)+Number(b),0)
    }
    console.log(incr);
    
    
}
incrementNumber(455574367284)