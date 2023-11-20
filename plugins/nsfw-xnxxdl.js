
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan jenis \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Anda masih di bawah umur! Kembalilah ketika Anda berusia di atas 18 tahun`
  if (!text) throw `✳️ Untuk menelusuri\n📌 Gunakan: *${usedPrefix + command} <search>*\n\nUntuk mengunduh dari URL:\n📌Gunakan: *${usedPrefix + command} <url>*`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Masukkan tautan dari *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.url_dl, xn.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Títle*: ${xn.title}
▢ *⌚Durasi:* ${xn.duration}
▢ *🎞️Kualitas:* ${xn.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Kesalahan: coba lagi nanti`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Kesalahan: coba lagi nanti`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
