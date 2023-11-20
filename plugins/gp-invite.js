
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Masukkan nomor tujuan pengiriman undangan grup\n\n📌 Example :\n*${usedPrefix + command}* 62xx`
if (text.includes('+')) throw  `✳️ Masukkan nomornya semua tanpa tanda *+*`
if (isNaN(text)) throw ' 📌 Masukkan hanya angka plus kode negara Anda tanpa spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\nSeorang pengguna mengundang Anda untuk bergabung dengan grup ini\n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Tautan undangan telah dikirim ke pengguna`) 

}
handler.help = ['invite <62xx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
