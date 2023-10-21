const { mediafireDl } = require('../lib/mediafire.js')
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link mediafire*`)
if (!args[0].includes('mediafire.com')) return m.reply(error.linkmf)
let mdjon = args.join(' ')
res = await mediafireDl(mdjon)
result = `「 *MEDIAFIRE DOWNLOAD* 」
┌─⊷ *Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}
└───────────
_Tunggu Proses Upload Media_`
m.reply(result)
//await sleep(100)
conn.sendFile(m.chat, res[0].link, res[0].nama, null, m, false, {asDocument:true, mimetype:res[0].mime})
}
handler.help = ['mediafire <url>']
handler.tags = ['dl']
handler.command = ['mediafire']
handler.diamond = true
handler.limit = true
handler.register = true

export default handler
