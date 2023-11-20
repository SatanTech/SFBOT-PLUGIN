
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
    let tee = `✳️ Masukkan teks singkat\n\n📌 Example  : *${usedPrefix + command}* SF`
    let too = `✳️ Pisahkan teks dengan *+* \n\n📌 Contoh : \n*${usedPrefix + command}* SF *+* BOT`
     m.react(rwait)
 let type = (command).toLowerCase()
 switch (type) {
     
     case 'logololi':
     if (!text) throw tee 
     let img = global.API('fgmods', '/api/maker/loli', { text }, 'apikey')
     conn.sendFile(m.chat, img, 'logo.png', `✅ Resultado`, m)
     m.react(done)
     break 
     case 'neon': 
     if (!text) throw tee
     let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
     conn.sendFile(m.chat, ne, 'logo.png', `✅ Resultado`, m)
     m.react(done)
     break 
     case 'devil': 
     if (!text) throw tee
     let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
     conn.sendFile(m.chat, de, 'logo.png', `✅ Resultado`, m)
     m.react(done)
     break 
     case 'wolf': 
    if (!text) throw tee
    let wo = global.API('fgmods', '/api/textpro/logowolf', { text: 'FG98', text2: text}, 'apikey')
     conn.sendFile(m.chat, wo, 'logo.png', `✅ Resultado`, m)
     m.react(done)
     break 
     case 'phlogo': 
     if (!text) throw too
     if (!text.includes('+')) throw too  
     let [a, b] = text.split`+`   
     let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
     conn.sendFile(m.chat, ph, 'logo.png', `✅ Resultado`, m)
     m.react(done)
     break 
     default:
 } 
 } 
 handler.help = ['logololi', 'neon', 'devil', 'wolf', 'phlogo']
 handler.tags = ['maker']
 handler.command = /^(logololi|neon|devil|wolf|phlogo)$/i
 handler.diamond = true
 handler.register = true
 export default handler
 
