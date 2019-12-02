// This is custom chrome option
module.exports = {
	launch: {
		dumpio: true,
		headless: false,
		args: ['--disable-infobars'],
	},
	browserContext: 'default'
};