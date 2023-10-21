
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONASI*
Donasinya Tuan Buat Beli VPS Biar Bot Nya Aktif Terus

▢ *DANA* : 085175126057
▢ *GOPAY* : 085175126057
`
await conn.sendMessage(m.chat, {
text: `${don}`,
contextInfo: {
externalAdReply: { 
title: 'SF-MD',
body: '',
thumbnailUrl: "https://i.ibb.co/37FP2bk/donate.jpg",
sourceUrl: "https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
m.reply(util.format(js))
}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
