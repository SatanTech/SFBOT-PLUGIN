//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Tag Seseorang untuk dijadikan member premium\n\n📌 Example : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ Pengguna yang Disebutkan Sudah premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ PREMIUM

*S U K S E S*
┌───────────
▢ *User:* @${who.split`@`[0]}
▢ *Status:* Premium
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
