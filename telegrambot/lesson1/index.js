const TelegramBot = require('node-telegram-bot-api');


const token = '8214364266:AAEupxrgjAHs98SIZVsgdBF4ZTAl5w4FvNg';

const bot = new TelegramBot(token, {polling: true});



bot.onText(/\/start/,(msg)=>{
    bot.sendMessage(msg.chat.id, msg.chat.first_name+ "dumbuljon qalesiz ?",{
        reply_markup:{
            keyboard:[
                [
                    {
                        text:"Contact",
                        callback_data:"/contact"
                    },{
                        text:"My profile",
                        callback_data:"/profile"
                    }
                ],
                [
                    {
                        text:"Audio",
                        callback_data:"/audio"
                    },
                    {
                        text:"Photo",
                        callback_data:"/photo"
                    }
                ]

            ],
            resize_keyboard:true
        }
    })
    
})

bot.on('message',(msg)=>{
    if(msg.text == "Contact"){
        bot.sendMessage(msg.chat.id,"Contact: +998 90 123 45 67")
    }else if(msg.text == "My profile"){
        bot.sendMessage(msg.chat.id,"Name: "+msg.chat.first_name+"\n"+"Username: "+msg.chat.username)
    }
    else if(msg.text=="Audio"){
        bot.sendAudio(msg.chat.id,"./ST Music - youtube video #OeGcq3CZf-s.mp3")
    }
    else if(msg.text == "Photo"){
        bot.sendPhoto(msg.chat.id,"./image.png")
    }
})