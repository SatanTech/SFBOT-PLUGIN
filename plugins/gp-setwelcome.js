//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Pesan Welcome Telah Disetel')
  } else throw `✳️ Masukkan pesan Welcome\n\nExample : Hallo @user (Menyebutkan Pengguna)\nSelamat Datang Di @group (Nama Grup)\nJangan Lupa Baca Deskripsi @desc (Menampilkan Deskripsi)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
