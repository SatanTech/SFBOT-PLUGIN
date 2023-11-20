
import fg from 'api-dylux'
let handler = async (m, {conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
   if (!teks) throw `✳️ Cari lirik lagu`
   try {
 let res = await fg.lyrics(text);
 let mes = `▢ *${res.title}*
▢ *${res.artist}*

▢ ${res.lyrics}`;
    conn.sendFile(m.chat, res.thumb, 'img.png', mes, m);
} catch (e) {
	m.react(error)
} 

}
handler.help = ['lirik']
handler.tags = ['tools']
handler.command = ['lirik] 
handler.register = true
export default handler
