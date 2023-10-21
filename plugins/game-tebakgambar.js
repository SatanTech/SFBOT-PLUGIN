import { tebakgambar } from '@bochilteam/scraper'

let timeout = 60000
let poin = 20000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    let caption = `Rangkailah Gambar Ini
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar[id] = [
    await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption, footer: sf }, { quoted: m }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.register = true
export default handler
