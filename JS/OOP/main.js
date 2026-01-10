let sayLaylo = ()=>{
    return "Laylo says Hello!";
};


let returnItem = ()=>{
    return "Laylo";
}

let layloInfo={
    name:returnItem(),
    messages:{
        messageBy: returnItem(),
    },
    message : function(){
        return "Salom dumbullar "+ this.messages.messageBy
        // this kalit so'zi bu o'zi turgan addressdagi objectni keyiga murojaat qilib ikkinchi keyda yani this ishlatilayotgan object ichiga qiymatni chaqirib bera oladi key orqali.
    }
}

console.log(layloInfo.message());
// agar biz objectdagi qaysidir keyga malumotlarni function sifatida saqlasak uni huddi method chaqirganday function qilib chaqirib berishimiz kerak.
//  aks xolda function ishga tushmaydi.

"".slice()


class voiceAnimals{
    constructor(voice, animal){
        this.voice=  voice
        this.animal = animal
    }
    speek(){
        console.log(`${this.voice} deydi uning ismi ${this.animal}`);
    }
}

class Dog extends voiceAnimals{
    constructor(voice, breed){
        super(voice);
        this.breed= breed;
    }

    info(){
        console.log(`Bu itni nasli ${this.breed}`);
    }
}
let dog = new Dog("Vov Vov", "alabay");

dog.speek();
dog.info();

let animat = new voiceAnimals("Myauu", "baroqvoy");
animat.speek();

localStorage.setItem("name", "Laylo");



class saveLocalStorage{
    constructor(name, item){
        localStorage.setItem(name, item)
        this.message= name
    }
    returnMessage(){
        console.log("malumot localstoragega saqlandi");
        
    }
}

let save = new saveLocalStorage("dumbul", "Yosirxon")

save.returnMessage()