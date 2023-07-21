global.owner = ['918010431346']  
global.mods = ['918010431346'] 
global.prems = ['918010431346']
global.nameowner = 'Pratap'
global.numberowner = '918010431346' 
global.mail = 'NAHI HAI BHAI' 
global.gc = '*KOI GROUP NHAI'
global.instagram = 'https://instagram.com/pratap_2714'
global.wm = '© pratap'
global.wait = '_*Wait is being process...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Sticker is in progress...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'YOUR_APIKEY_HERE'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Apikey' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
