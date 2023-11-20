import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `Hallo *${name}* Apakah Anda ingin ngobrol sebentar? \nTanggapi dengan *${usedPrefix + command}* (pesan Anda) \n\n📌 Example : *${usedPrefix + command}* Hallo Bot`
  m.react('🗣️') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 
handler.register = true

export default handler
