
import fg from 'api-dylux'  
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `✳️ Masukan Link Google Drive`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
┌─⊷ *Google Drive DL*
▢ *Nama :* ${res.fileName}
▢ *Size :* ${res.fileSize}
▢ *type :* ${res.mimetype}
└───────────`)
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Error: silahkan masukin link lain') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = true
handler.premium = true
handler.register = true

export default handler
