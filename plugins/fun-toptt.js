import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    //if (!/video|audio/.test(mime)) throw `✳️ ${msg.toavT()} :\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Terjadi kesalahan saat mengunduh media'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Terjadi kesalahan saat mengonversi'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Membalas audio yang ingin Anda ubah menjadi memo suara :\n *${usedPrefix + command}*`)
   }
}
handler.help = ['toav']
handler.tags = ['fun']
handler.command = ['toav', 'tovn'] 
handler.register = true
export default handler
