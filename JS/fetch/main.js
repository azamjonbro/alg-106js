let box = document.querySelector(".box")

fetch("https://dummyjson.com/products")
.then((res)=> res.json())
.then((data)=>{
    console.log(data);
    
    data.products.forEach((item)=>{
        // console.log(item);
        
        let product = document.createElement("div")
        product.classList.add("product")
        product.style.width="300px"
        product.innerHTML=`
            <div class="imgbox">
                <img src="${item?.thumbnail}" loading="lazy" alt="" width="100%" height="300px" style="object-fit: cover;">
            </div>
            <div class="product-box">
                <h3>${item?.title}</h3>
                <p>${item?.description}</p>
                <b>${item?.price}</b>
                <br>
                <del>${flooringNumber(item.price)}</del>
                
            </div>
            <div class="buttonbox">
                <button onclick="oneCLick()">Buy one click</button>
                <button>Add to cart</button>
            </div>
        `
        // console.log(product);
        box.appendChild(product)
    })
    
})

function flooringNumber(number){
    let num = Math.floor(number)
    return num + Math.floor(Math.random()*20)
}

function oneCLick(){
    console.log("hello world");
    
}