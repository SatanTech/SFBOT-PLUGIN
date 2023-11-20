import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`Quotes : *${indo}*\n\nKarakter : *${character}*\nAnime : *${anime}*`)
}
handler.help = ['katanime']
handler.tags = ['quotes']
handler.command = /^(katanime|kataanime)$/i
handler.limit = true

export default handler
