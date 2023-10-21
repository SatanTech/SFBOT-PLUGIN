let handler = async (m, { conn }) => {
	conn.reply(m.chat, `"${pickRandom(global.ilham)}"`, m);
};
handler.help = ["katailham"];
handler.tags = ["quotes"];
handler.command = /^(katailham)$/i;
handler.limit = true
export default handler;

function pickRandom(list) {
	return list[Math.floor(list.length * Math.random())];
}

global.ilham = [
	"Sesuatu akan terasa berharga jika sudah kehilangan – kata ilham",
	"Dia hanya menghargaimu, bukan mencintaimu – kata ilham",
	" Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta – kata ilham",
	" Keadilan sosial hanya berlaku bagi warna negara yang good looking – kata ilham",
" Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya – kata ilham",
 " Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep - Kata ilham",
 " Cukup tahu namaku, jangan rupaku – kata ilham",
 " Sesuatu akan terasa berharga jika sudah kehilangan – kata ilham",
 " Jangan jadi pelangi untuk orang yang buta warna – kata ilham",
 " Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan – kata ilham",
	"Punya kalimat sendiri & mau ditambahin? chat *.owner*",
];
