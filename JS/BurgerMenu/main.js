let headerList = document.querySelector(".header__list")
let isOpen = false
document.querySelector(".burgerbox").addEventListener("click",()=>{
    isOpen=!isOpen

    if(isOpen){
        headerList.classList.remove("mobile")
    }
    else{
        headerList.classList.add("mobile")
        // headerList.style.display="flex"
    }
})