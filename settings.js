const fs = require('fs')

global.creator = 'FuadXyro' 
global.apikey = ['fuadxy', 'alvin', 'prems']
global.lolkey = "cylic"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
