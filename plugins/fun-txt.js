
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
     if (!teks) throw `📝 Apa yang kutulis? Contoh : *${usedPrefix + command}* Hallo Admin SF`
      m.react(rwait)
      let img = global.API('fgmods', '/api/maker/txt', { text: teks }, 'apikey')
      conn.sendFile(m.chat, img, 'img.png', `✅ Itu lebih baik dari apa yang Anda tulis ✍🏻`, m)
      m.react(done)

  }
  handler.help = ['txt']
  handler.tags = ['fun']
  handler.command = ['txt']
  handler.register = true
  export default handler
  
