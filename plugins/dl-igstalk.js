
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Silahkan masukan username Instagram\n\n📌Example: ${usedPrefix + command} SatanTech` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Nama :* ${res.name} 
▢ *🔖Username :* ${res.username}
▢ *👥Mengikuti :* ${res.followersH}
▢ *🫂Diikuti :* ${res.followingH}
▢ *📌Bio :* ${res.description}
▢ *🏝️Postsingan :* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`✳️ Pastikan username tersebut dari *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 
handler.diamond = true
handler.limit = true
handler.register = true

export default handler
