//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Tandai penggunanya'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Masukkan jumlah *Diamond* yang ingin Anda tambahkan'
    if (isNaN(txt)) throw '🔢 sólo números'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Minimumnya adalah *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 DITAMBAHKAN*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Apakah kamu menerima \n\n *+${dmt}* Diamond`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

