
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/instagram?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let cap = `_Nih Kak Videonya >,<_`
  conn.sendMessage(m.chat, { video: { url: json.data[0].url }, caption: cap }, m)
}
export default handler
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = true
handler.limit = true
handler.register = true


export default handler 
