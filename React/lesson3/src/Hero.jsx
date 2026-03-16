import React, { useEffect, useState } from 'react'

function Hero({sizlarKimsizlar}) {
    // const {sizlarKimsizlar} = props // destructuring with object
    // props bu ota elementdan bola componentga key va value korinishida malumot yuborish usuli hisoblanadi.

    // malumotlarni olish uchun biz destructuring usulidan foydalanishimiz kerak sababi malumotlarimizni olish uchun biz bemalol kirib bora olamiz qayta o'zgaruvchilarga tenglab otirmasdan.
    console.log(sizlarKimsizlar);
    
    
    let [shapat, setShapat] = useState()
    useEffect(()=>{
        setShapat(shapat="dumbuls")
    },[])
  return (
    <div>
        <p>{sizlarKimsizlar}</p>
        {shapat}
        <button onClick={()=>{setShapat(shapat=="dumbuls"?"qalesizlar":"dumbuls")}}>dumbulni shapatla</button>
    </div>
  )
}

export default Hero


