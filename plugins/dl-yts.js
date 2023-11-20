
import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '✳️ Apa yang Anda ingin saya cari di YouTube?'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
▢ *Title* :${v.title}
▢ *Link* : ${v.url}
▢ *Durasi* : ${v.timestamp}
▢ *Upload :* ${v.ago}
▢ *Views :* ${v.views}

   `.trim()
      case 'canal': return `
▢ *${v.name}* (${v.url})
▢${v.subCountLabel} (${v.subCount}) Subscribe 
▢ ${v.videoCount} videos
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts'] 
handler.diamond = true
handler.limit = true
handler.register = true

export default handler
