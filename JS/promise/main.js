// const fetch = new Promise((resolve, reject)=>{
//     const connectingtoAddress = "https://mishka.uz/jasurbek";
//     const jasurbekOpkeldimi = true;
//     if(jasurbekOpkeldimi){
//         resolve("Jasurbek mishkani opkeldi, Malades !")
//     }
//     else{
//         reject("Jasurbek mishkani opkelmadi, Lekin biz ham anoyilardanmasmiz. Uning ozini mishkasini olib qo'ydik")
//     }
// })

// fetch.then((response)=>{
//     console.log(response);
    
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Ibroxim, bu ish tugadi");
    
// })


async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Xatolik yuz berdi: ", error);
    }
    finally{
        console.log("Fetch operatsiyasi tugadi");
    }
}

fetchData();


setTimeout(()=>{
    console.log("dumbullar");
}, 2000);
