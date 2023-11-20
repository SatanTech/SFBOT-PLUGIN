import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch(`https://api.betabotz.org/api/random/${command}?apikey=AdminSF752`))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { author, quotes } = json.result[0]
m.reply(`Author : *${creator}*\n\nQuotes : *${quotes}`)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.limit = true

export default handler
