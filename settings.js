const fs = require('fs')

global.creator = 'Zeltoria' 
global.apikey = ['Elistz','Unlimited','Sange']
global.lolkey = "ReiiXLucifer"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
