__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/anime', (req, res) => {
	res.sendFile(__path + '/api/anime.html')
})

router.get('/asupan', (req, res) => {
	res.sendFile(__path + '/api/asupan.html')
})

router.get('/downloader', (req, res) => {
	res.sendFile(__path + '/api/downloader.html')
})

router.get('/news', (req, res) => {
 	res.sendFile(__path + '/api/news.html')
})

router.get('/maker', (req, res) => {
 	res.sendFile(__path + '/api/maker.html')
})

router.get('/search', (req, res) => {
	res.sendFile(__path + '/api/search.html')
})

router.get('/nsfw', (req, res) => {
	res.sendFile(__path + '/api/nsfw.html')
})

router.get('/sfw', (req, res) => {
	res.sendFile(__path + '/api/sfw.html')
})

router.get('/virtex', (req, res) => {
	res.sendFile(__path + '/api/virtex.html')
})

router.get('/random', (req, res) => {
	res.sendFile(__path + '/api/random.html')
})

router.get('/islam', (req, res) => {
	res.sendFile(__path + '/api/islam.html')
})

router.get('/game', (req, res) => {
	res.sendFile(__path + '/api/game.html')
})

router.get('/other', (req, res) => {
	res.sendFile(__path + '/api/other.html')
})










module.exports = router