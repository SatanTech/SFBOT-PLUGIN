import fetch from 'node-fetch';
import util from 'util';
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
m.react(rwait)
  var js = await fetch(API('lann', '/api/search/openai-chat', { text: `${text}`, apikey: lann }))
var json = await js.json()
m.react(done)
try {
  await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
title: 'Chat GPT',
body: '',
thumbnailUrl: "https://telegra.ph/file/7a385897829927b981dfa.jpg",
sourceUrl: "https://api.betabotz.org",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
m.reply(util.format(js))
}}
handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai)$/i
handler.limit = true
handler.register = true
export default handler