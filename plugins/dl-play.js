
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `✳️ Masukan Query\n\n📌Example *${usedPrefix + command}* 7 samudra`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio tidak ditemukan`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `
	≡ *DL MUSIC*
╭━━━━━━━━━━━━━━━━━━━☉
│ ▢ 📌 *Títle * : ${title}
│ ▢ 📆 *Upload :* ${ago}
│ ▢ ⌚ *Durasi :* ${timestamp}
│ ▢ 👀 *Views :* ${views}
╰━━━━━━━━━━━━━━━━━━━☉`
 await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}sfmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}sfmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = true
handler.diamond = true
handler.limit = true
handler.register = true

export default handler
