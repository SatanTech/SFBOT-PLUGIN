import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) throw `*🚩 Contoh:* ${usedPrefix + command} Lathi`;  
  let teks = '';
  try {
    const api = await fetch(`https://api.betabotz.org/api/search/spotify?query=${text}&apikey=${lann}`);
    let json = await api.json();
    let res = json.result.data;    
    for (let i in res) {
      teks += `╭━━━━━━━━━━━━━━━━━━━☉\n`
      teks += `│ ∘  *${parseInt(i) + 1}.* *Title:* ${res[i].title}\n`;
      teks += `│ ∘  *Duration:* ${res[i].duration}\n`;
      teks += `│ ∘  *Popularity:* ${res[i].popularity}\n`;
      teks += `│ ∘  *Link:* ${res[i].url}\n`;
      teks += `╰━━━━━━━━━━━━━━━━━━━☉\n`
    }     
    await conn.relayMessage(m.chat, {
     extendedTextMessage:{
                text: teks, 
                contextInfo: {
                     externalAdReply: {
                        title: '乂  S F  B O T',
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
    }}, {})
  } catch (e) {
    throw `🚩 *Gagal Memuat Data!*`;
  }
};

handler.command = handler.help = ['spotifysearch'];
handler.tags = ['dl'];
handler.premium = true;
handler.group = false;
handler.register = true;

export default handler;