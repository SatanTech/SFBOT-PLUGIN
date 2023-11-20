
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ Masukkan judul lagu\n*📌 Example*\n*${usedPrefix + command}* Baon Cikadap `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.videos
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *Durasi:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Títle* : ${v.title}\n▢ 📆 *Upload:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *Durasi:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Títle* : ${v.title}\n▢ 📆 *Upload:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *SF MUSIC*🔎', `\n 📀 Berikut adalah daftar hasilnya :\n *${text}*`, fgig, `Click Aquí `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = true
handler.diamond = true
handler.register = true
handler.limit = true

export default handler
