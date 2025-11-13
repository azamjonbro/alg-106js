let p = document.querySelector("p")

// document bu global object hisoblanib u bir qancha methodlarni oz ichiga qamrab olgan 


// getElementById -> bu htmldagi har qanday topilgan birinchi idni olib kelish uchun ishlatiladigan tanlab olish methodi
console.log(p);

p.textContent+="<b>salom bolalar</b>"

//textcontent bu elementni tag ichigi qoshib beradi faqat matnni agar tag ichida biz yana boshqa tag yozmoqchi bolsak biz yozgan childtag ni oqimaydi oqish uchun innerhtmldan foydalanishimiz kerak

p.innerHTML+="<b>salom bolalar</b>"
p.setAttribute("id","salom")
p.setAttribute("id","oyatillo uyizga ketavering")

let products = document.querySelector(".products");

let div = document.createElement("div");
div.className = "product";
div.innerHTML = `
  <img src="https://picsum.photos/id/230/200/200" alt="bu rasm"/>
  <h1>salom</h1>
  <p>lorem ipsum dolor</p>
`;

products.appendChild(div);