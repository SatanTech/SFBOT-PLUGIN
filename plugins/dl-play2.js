
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ Masukan Query\n\n📌Example *${usedPrefix + command}* 7 samudra`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Vídeo/Audio tidak ditemukan`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `
	≡ *DL MUSIC*
╭━━━━━━━━━━━━━━━━━━━☉
│ ▢ 📌 *Títle* : ${vid.title}
│ ▢ 📆 *Tahun :* ${vid.ago}
│ ▢ ⌚ *Durasi :* ${vid.timestamp}
│ ▢ 👀 *Views :* ${vid.views}
╰━━━━━━━━━━━━━━━━━━━☉

_Mengirim..._`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpig)

if (size.split('MB')[0] >= limit) return m.reply(` ≡  *SF YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`) 
if (size.includes('GB')) return m.reply(` ≡  *SF YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *SF YTDL*
╭━━━━━━━━━━━━━━━━━━━☉
│ ▢ *📌Títle* : ${title}
│ ▢ *🎞️Kualitas* : ${q}
│ ▢ *⚖️Size* : ${size}
╰━━━━━━━━━━━━━━━━━━━☉
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Error: link tidak ditemukan`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.diamond = true
handler.limit = true
handler.register = true

export default handler
