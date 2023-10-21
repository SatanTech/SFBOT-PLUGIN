
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Masukkan gambar yang ingin dicari \n\n📌 Contoh: *${usedPrefix + command}* Upin Ipin`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
Google Image
Hasil dari : *${text}*`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true
handler.register = true

export default handler
