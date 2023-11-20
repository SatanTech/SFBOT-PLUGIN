import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282114542876', 'Admin SF', true],
  ['6282114542876'], 
  ['6282114542876'] 
] //Numeros de owner 

global.mods = ['6282114542876'] // nomor kamu
global.prems = ['6282114542876', '6283195171309'] //Nomor kamu
//// apikey ////
global.xyro = '3Vmnf2IVNp'
global.lann = 'AdminSF752'
global.lol = 'AdminSF752'

////////////////////////////
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  apizah: 'https://api.zahwazein.xyz',
  lann: 'https://api.betabotz.org',
  fgmods: 'https://api-fgmods.ddns.net',
  xyro: 'https://api.xyroinee.xyz',
  lol: 'https://api.lolhuman.xyz',
  popcat : 'https://api.popcat.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zahwazein.xyz': 'zenzkey_1c982eff5b',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.betabotz.org': 'AdminSF752',
  'https://api.xyroinee.xyz': '3Vmnf2IVNp',
  'https://api.lolhuman.xyz': 'AdminSF752',
  'https://api-fgmods.ddns.net': 'fg-dylux' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'SF┃ᴮᴼᵀ' 
global.author = '@adminsf' 
global.sf = 'By Admin SF'
global.thumb = 'https://telegra.ph/file/a0d4dadf97dc29fba2c32.jpg'
global.fgig = '▢ Follow Instagram\nhttps://www.instagram.com/satantech26_\n' 
global.dygp = 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS'
global.fgsc = 'GADAAAAA' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // maximun peringatan 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
