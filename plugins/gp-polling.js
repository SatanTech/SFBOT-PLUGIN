
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Teks untuk survei tidak ada \n\n📌 Ejemplo : \n*${usedPrefix + command}* Pesan |suka|xd`
if (!text.includes('|')) throw  `✳️ Separe las encuestas con *|* \n\n📌 Ejemplo : \n*${usedPrefix + command}* mi encuesta|n  |como|xd|vale`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survei diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <Hallo|Sebagai|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true
handler.register = true
export default handler
