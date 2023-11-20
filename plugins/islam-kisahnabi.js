import fetch from 'node-fetch'

let handler = async (m, {conn, text, usedPrefix, command }) => {
     if (!text) throw `Masukan nama nabi\nExample: ${usedPrefix + command} adam`
     m.react(rwait)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     m.react(done)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") throw "*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital"
     
     let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — — [ K I S A H ] — — — — — — — —*

${kisah.description}`

     conn.reply(m.chat, hasil, m)

     }
handler.help = ['kisahnabi <name>']
handler.tags = ['quran']
handler.command = /^kisahnabi$/i
handler.register = true
handler.limit = true

export default handler