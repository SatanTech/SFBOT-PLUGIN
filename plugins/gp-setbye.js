//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ Pesan GoodBye Sudah Dibuat')
  } else throw `✳️ Masukkan pesan\n@user (menyebutkan)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
handler.owner = false

export default handler
