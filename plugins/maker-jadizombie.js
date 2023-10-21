import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
		m.react(rwait)
	       await conn.reply(m.chat, wait, m)
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(API('lann', '/api/maker/jadizombie', { url: `${out}`, apikey: lann }))
			let convert = await res.json()
			let buff = await fetch(convert.result)
           .then(res => res.buffer())
           m.react(done)
			await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
};
handler.help = ['jadizombie']
handler.command = ['tozombie', 'jadizombie']
handler.tags = ['maker']
handler.premium = false
handler.limit = true
handler.diamond = 2
handler.register = true

export default handler
/*
import fetch from 'node-fetch'

import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadizombie'
await m.react(rwait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.betabotz.org/api/maker/jadizombie?url=${url}&apikey=${lann}`)).buffer()
//m.reply(url)
conn.sendFile(m.chat, hasil, null, `Done @${m.sender.split`@`[0]}`, m)
}
handler.help = ['jadizombie']
handler.command = ['tozombie', 'jadizombie']
handler.tags = ['maker']
handler.premium = true

export default handler*/