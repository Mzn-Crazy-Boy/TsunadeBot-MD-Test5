/* 

╔════╦═══╦╗─╔╦═╗─╔╦═══╦═══╦═══╗ ╔═╗╔═╦═══╗
║╔╗╔╗║╔═╗║║─║║║╚╗║║╔═╗╠╗╔╗║╔══╝ ║║╚╝║╠╗╔╗║
╚╝║║╚╣╚══╣║─║║╔╗╚╝║║─║║║║║║╚══╗ ║╔╗╔╗║║║║║
──║║─╚══╗║║─║║║╚╗║║╚═╝║║║║║╔══╝ ║║║║║║║║║║
──║║─║╚═╝║╚═╝║║─║║║╔═╗╠╝╚╝║╚══╗ ║║║║║╠╝╚╝║
──╚╝─╚═══╩═══╩╝─╚═╩╝─╚╩═══╩═══╝ ╚╝╚╝╚╩═══╝

* @author mznking <https://github.com/mznking>
* @description A WhatsApp based 3ʳᵈ party multi-device bot that provide many services with a real-time automated conversational experience.
* @subscribe https://youtube.com/@mznking
* @link <https://github.com/mznking/TsunadeBot-MD>
* @version 1.0.0


🗒️ NOTE: Only use 'true' or 'false' to environment variables for enable or disable the function.

© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４
*/

const chalk = require("chalk")
const fs = require("fs")

/* 🧚 AUTO FUNCTIONS 🧚 */

// 🧚 Would you like the bot to automatically sends read receipts for incoming messages?
global.autoReading = true
// 🧚 Would you like the bot to automatically sends typing in personal & group chats? (Fake typing action)
global.autoTyping = true
// 🧚 Would you like the bot to automatically sends recording in personal & group chats? (Fake recording action)
global.autoRecord = false
// Would you like the bot to automatically block Morocco(212) users of bot (There could be geographical, political, security, or market-related reasons for restricting access to certain platforms in Morocco.)
global.autoblockmorroco = false
// Would you like the bot to automatically remove Morocco(212) numbers from groups (There could be geographical, political, security, or market-related reasons for restricting access to certain platforms in Morocco.)
global.autokickmorroco = false
// Would you like the bot to automatically remove spammers from groups?
global.antispam = false 

/* 🧚 API KEYS & TIMEZONE */

// Enter the api key of openai, for using gpt command for generate text from prompt using GPT-3.5-Turbo language model. Get your api key from: https://beta.openai.com/account/api-keys
global.keyopenai = "sk-"
// Enter the timezone of your country, leave it empty for use GMT(Greenwich Mean time). Get your timezone from https://github.com/mznking/TsundeBot-MD#assets/timezone/timezones.json
global.timezone = process.env.TIME_ZONE || 'Asia/Colombo'

/* 🧚 OWNER INFO 🧚 */

// Provide the number of bot owner here.
global.ownernomer = "94771227821"
// Provide the name of bot owner here.
global.ownername = "Mzn King" 
global.ytname = "YT: MZNKing" //ur yt chanel name
global.socialm = "GitHub: MZNKing" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//* 🧚 BOT INFO 🧚 */

// Provide a name for your bot.
global.botname = "Tsunade Bot"
// Provide a number of bot.
global.ownernumber = '94771227821'
// Provide a name of bot owner.
global.ownername = 'Mzn King'
// Provide jids of bot owners. You can add multiple contacts. For example: ["number1@s.whatsapp.net","number2@s.whatsapp.net"]
global.ownerNumber = ["94771227821@s.whatsapp.net"]
// Provide a website url of bot owner. (You can also add social media urls)
global.ownerweb = "https://youtube.com/@mznking"
global.websitex = "https://youtube.com/@mznking"
// Provide a link of bot group.
global.wagc = "https://chat.whatsapp.com/Kjm8rnDFcpb04gQNSTbW2d"

/* 🧚 AUTO REACTION */

// Provide the number you want to setup automatically react to incoming messages of this number.
global.arNumber = "94771227821"
// Provide the emoji for react to incoming messages of above number.
global.arEmoji = "🙊"

/* 🧚 STICKER INFO */

// Provide the pack name of sticker
global.packname = "Sticker by"
// Provide the creator/author name of sticker.
global.author = "Xeon tutor"
// Provide the jid of sticker creator.
global.creator = "94771227821@s.whatsapp.net"
// Provide the supported prefixes of bot.
global.prefix = ['','!','.','#','&']

/* 🧚 OTHER 🧚 */
global.port = '2323'
global.sessionName = 'session'
global.hituet = 0

//* 🧚 MEDIA */

// Provide the file path/location of Thumbnail picture.
global.thum = fs.readFileSync("./assets/theme/TsunadeBot-1.jpg")
// Provide the file path/location of logo picture.
global.log0 = fs.readFileSync("./assets/theme/TsunadeBot-1.jpg")
// Provide the file path/location of error picture.
global.err4r = fs.readFileSync("./assets/theme/TsunadeBot-1.jpg")
// Provide the file path/location of Thumbnail picture.
global.thumb = fs.readFileSync("./assets/theme/TsunadeBot-1.jpg")
// Provide the file image url of default picture.
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' 

/* 🧚 MENU 🧚 */

// API Url of generate sketch effect image from text.
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
// API Url of generate fluffy effect image from text.
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
// API Url of generate runner effect image from text.
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
// API Url of generate smurfs effect image from text.
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

/* 🧚 VARIANTS OF DOCUMENTS 🧚 */

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//messages
global.message = {
    success: '🧚 *Powerd By Tsunade Bot*', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})