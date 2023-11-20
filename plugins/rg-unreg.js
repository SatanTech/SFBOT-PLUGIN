//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *Masukkan nomor seri*\nVerifikasi nomor seri Anda dengan perintah...\n\n*${usedPrefix}nserial*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *Nomor seri salah*'
  user.registered = false
  m.reply(`✅ Registro Dihapus`)
}
handler.help = ['unreg <Nomor Seri>'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler

