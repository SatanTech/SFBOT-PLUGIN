
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🔴 Selamat tinggal tuan *${this.user.name}* Saya akan keluar dari grup anda \n\nKarena masa sewa anda berakhir`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
