const { Telegraf } = require('telegraf')

const bot = new Telegraf('1711893475:AAEavWtmcRmhDoUwrJ4q7lWtkAYVE4kXMZU')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hello', (ctx) => ctx.reply('Hey there'))
bot.launch()

