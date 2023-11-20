
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Gunakan perintah ini tanpa awalan_

▢ Jika Anda memiliki lebih banyak audio kirimkan saya melalui t.me/satantechbot *audio + perintah* yang akan ditanggapinya

┌─⊷ *AUDIO* 
▢ Bot 
▢ Selamat pagi 
▢ Selamat siang 
▢ Selamat malam 
▢ Baik sekalian 
▢ Sedih
└──────────────
`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
