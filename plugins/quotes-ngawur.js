import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://api.betabotz.org/api/random/ngawur?apikey=AdminSF752'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { hasl } = json.result[0]
m.reply(`Quotes : *${hasl}*`)
}
handler.help = ['ngawur']
handler.tags = ['quotes']
handler.command = /^(ngawur)$/i
handler.limit = true

export default handler
