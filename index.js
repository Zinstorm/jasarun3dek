const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const fetch = require('node-fetch')
const qrcodes = require("qrcode")
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')

//BAILEYS
const { Toxic } = require('./lib/Toxic.js')
const { color, bgcolor } = require('./lib/color')
const { mediafireDl } = require('./lib/mediafire.js')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { exec, spawn, execSync } = require('child_process')
const { runtime, sleep } = require('./lib/myfunc')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

//LIBWEBP
const { ind } = require('./message')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")

//DATABASE
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/json/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/json/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))

//GAMES
const tebakgambar = JSON.parse(fs.readFileSync('./database/games/tebakgambar.json'))
const tebakimia = JSON.parse(fs.readFileSync('./database/games/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/games/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./database/games/tebakbendera.json'))
const tebakata = JSON.parse(fs.readFileSync('./database/games/tebakata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/games/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./database/games/tebakjenaka.json'))
const tomxic = JSON.parse(fs.readFileSync('./database/random/toxic.json'))

//AUDIO
audio1 = fs.readFileSync('./database/audio/audio1.m4a')
audio2 = fs.readFileSync('./database/audio/audio2.m4a')
audio3 = fs.readFileSync('./database/audio/audio3.m4a')
audio4 = fs.readFileSync('./database/audio/audio4.m4a')
audio5 = fs.readFileSync('./database/audio/audio5.m4a')
audio6 = fs.readFileSync('./database/audio/audio6.m4a')
audio7 = fs.readFileSync('./database/audio/audio7.m4a')
audio8 = fs.readFileSync('./database/audio/audio8.m4a')
audio9 = fs.readFileSync('./database/audio/audio9.m4a')
audio10 = fs.readFileSync('./database/audio/audio10.m4a')
audio11 = fs.readFileSync('./database/audio/audio11.m4a')
audio12 = fs.readFileSync('./database/audio/audio12.m4a')
audio13 = fs.readFileSync('./database/audio/audio13.m4a')
audio14 = fs.readFileSync('./database/audio/audio14.m4a')
audio15 = fs.readFileSync('./database/audio/audio15.m4a')
audio16 = fs.readFileSync('./database/audio/audio16.m4a')
audio17 = fs.readFileSync('./database/audio/audio17.m4a')
audio18 = fs.readFileSync('./database/audio/audio18.m4a')
audio19 = fs.readFileSync('./database/audio/audio19.m4a')
audio20 = fs.readFileSync('./database/audio/audio20.m4a') 
audio21 = fs.readFileSync('./database/audio/audio21.m4a')

//MUSIK
satu = fs.readFileSync('./database/musik/sound1.mp3')
dua = fs.readFileSync('./database/musik/sound2.mp3')
tiga = fs.readFileSync('./database/musik/sound3.mp3')
empat = fs.readFileSync('./database/musik/sound4.mp3')
lima = fs.readFileSync('./database/musik/sound5.mp3')
enam = fs.readFileSync('./database/musik/sound6.mp3')
tujuh = fs.readFileSync('./database/musik/sound7.mp3')
delapan = fs.readFileSync('./database/musik/sound8.mp3')
sembilan = fs.readFileSync('./database/musik/sound9.mp3')
sepuluh = fs.readFileSync('./database/musik/sound10.mp3')
sebelas = fs.readFileSync('./database/musik/sound11.mp3')
duabelas = fs.readFileSync('./database/musik/sound12.mp3')
tigabelas = fs.readFileSync('./database/musik/sound13.mp3')
empatbelas = fs.readFileSync('./database/musik/sound14.mp3')
limabelas = fs.readFileSync('./database/musik/sound15.mp3')
enambelas = fs.readFileSync('./database/musik/sound16.mp3')
tujuhbelas = fs.readFileSync('./database/musik/sound17.mp3')
delapanbelas = fs.readFileSync('./database/musik/sound18.mp3')
sembilanbelas = fs.readFileSync('./database/musik/sound19.mp3')
duapuluh = fs.readFileSync('./database/musik/sound20.mp3') 

//DATAFILE
img1 = fs.readFileSync('./gambar/thumb.jpg')
img2 = fs.readFileSync('./gambar/fake.jpg')
fakeyoi = ["Created By Lexxy Official"]
api = ["https://myselfff.herokuapp.com/docs"]
pilihiklan = ["𝐢𝐤𝐥𝐚𝐧 𝐛𝐲 𝐛𝐨𝐭 @𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩"]
simbol = ["❏"]
const botName = setting.NamaBot

//MODE
isSelf = false
isPublic = true

const antitoxic = []

//SETTINGS

const owner = setting.OwnerNumber
const logoName = setting.LogoName
const githubown = setting.GithubOwner
const yutubown = setting.YoutubeOwner
const ownerName = setting.OwnerName
const textmenu = setting.TextMenu

//APIKEY
const LolKey = setting.LolHuman
const dhakey = setting.DhaKey
const LeysKey = setting.LeysApi
const HardiApi = setting.HardiKey
const ziyApi = setting.XziyKey

const { toxic1, toxic2, toxic3, toxic4, toxic5, toxic6, toxic7, toxic8, 
toxic9, toxic10, toxic11, toxic12, toxic13, toxic14, toxic15, toxic16} = tomxic

//=================( PEMBATASAN )=================//

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`

}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//=================( PEMBATAS )=================//

module.exports = Lexxy = async (Lexxy, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const ownerNumber = [`${owner}@s.whatsapp.net`]
const q = args.join(' ')
const aq = args.join(' ')
const c = args.join(' ')
const botNumber = Lexxy.user.jid
const botNumberss = Lexxy.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const isOwner = ownerNumber.includes(sender)
const totalchat = await Lexxy.chats.all()
const groupMetadata = isGroup ? await Lexxy.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
const slot1 = ['🍋','🍐','🍓','🍇','🍒']
const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
const slot5 = ['🍋','🍐','🍓','🍇','🍒']
const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
const slot7 = ['🍋','🍐','🍓','🍇','🍒']
const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
const slot9 = ['🍋','🍐','🍓','🍇','🍒']
const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isAntilink = isGroup ? antilink.includes(from) : false
const isAntitoxic = isGroup ? antitoxic.includes(from) : false
const conts = mek.key.fromMe ? Lexxy.user.jid : Lexxy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Lexxy.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await Lexxy.chats.all()
const groups = Lexxy.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = Lexxy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const cekcek = randomNomor(100)  
const sendImage = (teks, teks1) => {Lexxy.sendMessage(from, teks, image, {caption:teks1, quoted:mek, thumbnail:Buffer.alloc(0)})}
//=================( MESS ONLY )=================//

mess = {
notext: 'Masukkan text nya kakak',
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/${owner}`,
wait: 'Wait a minute',
toxic: 'Jangan Toxic!',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Khusus Grup ngab',
owner: 'Khusus Owner Ngab'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//

const fakeText = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: ftex })
}
const reply = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
Lexxy.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
} 
const sendMess = (hehe, teks) => {
Lexxy.sendMessage(hehe, teks, text)
}
const reply2 = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
const toxicc = (teks) => {
if (!isAntitoxic) return
if (budy.includes(teks)) {  
toxic = fs.readFileSync('./database/sticker/antitoxic.webp')
Lexxy.sendMessage(from, toxic, sticker, {quoted: mek})}}	
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Lexxy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Lexxy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
} 
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Lexxy.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (toxicc(toxic1)){}	    
if (toxicc(toxic2)){}
if (toxicc(toxic3)){}
if (toxicc(toxic4)){}
if (toxicc(toxic5)){}
if (toxicc(toxic6)){}
if (toxicc(toxic7)){}
if (toxicc(toxic8)){}
if (toxicc(toxic9)){}
if (toxicc(toxic10)){}
if (toxicc(toxic11)){}
if (toxicc(toxic12)){}
if (toxicc(toxic13)){}
if (toxicc(toxic14)){}
if (toxicc(toxic15)){}
if (toxicc(toxic16)){}  
//=================( FAKE )=================//
const ftex = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
"text": `${fakeyoi}`,
"title": ``,
'jpegThumbnail': img2
}
} 
}
//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftt = {
key: {fromMe: false ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const flexx = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE FTROL
const ftrol = {
key: {fromMe: true,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${owner}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./gambar/fake.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//FAKE TROLI
const ftroli = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${owner}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./gambar/fake.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//FAKEREPLY VIDEO
//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard =
"BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:" +
nama +
"\n" +
"ORG:" +
org +
"\n" +
"TEL;type=CELL;type=VOICE;waid=" +
nomor +
":+" +
nomor +
"\n" +
"END:VCARD";
Lexxy.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
}; 

//=================( BUTTON )=================//
const sendB3 = (teks, teks1, teks2, teks3, teks4) => {
const A3 = [
{buttonId: 'id1', buttonText: {displayText: `${teks1}`}, type: 1},
{buttonId: 'id2', buttonText: {displayText: `${teks2}`}, type: 1},
{buttonId: 'id3', buttonText: {displayText: `${teks3}`}, type: 1}]
const B3 = {contentText: teks, footerText: textmenu + "\n" + `❋ *Time* : ${time}`, buttons: A3,headerType: 1}      
Lexxy.sendMessage(from, B3, MessageType.buttonsMessage, {quoted: mek})}		

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButMess = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Lexxy.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Lexxy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButImg = async (from, context, fortext, img, but, mek) => {
jadinya = await Lexxy.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Lexxy.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}

async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Lexxy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 

//Tebak Gambar
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
sendButMessage(from, "Selamat 😘 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `• ${fake}`, [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": "Teka Teki"},"type": "RESPONSE"}], {quoted : mek})
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakgambar.json", JSON.stringify(tebakgambar))
}
}
//Cak Lontong
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Caklontong 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *#caklontong*`)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/games/caklontong.json", JSON.stringify(caklontong))
}
}
//Tebak Jenaka
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Jenaka 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *#tebakjenaka*`)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
}
//Tebak Lirik
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Lirik 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *#tebaklirik*`)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebaklirik.json", JSON.stringify(tebaklirik))
}
}
//Tebak Bendera
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Bendera 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *#tebakbendera*`)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakbendera.json", JSON.stringify(tebakbendera))
}
}
//Tebak Kimia
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`*_🎮 Tebak Kimia 🎮_*\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *#tebakkimia*`)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakimia.json", JSON.stringify(tebakimia))
}
}
//Tebak Kata
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply(`🎮 Tebak Kata 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *#tebakkata*`)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakata.json", JSON.stringify(tebakata))
}
}

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./database/sticker/owner.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./database/sticker/wait.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./database/sticker/loading.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./database/sticker/group.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./database/sticker/botadmin.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./database/sticker/banned.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./database/sticker/admin.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//=================( MEDIA URL )=================//
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Lexxy.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Lexxy.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Lexxy.sendMessage(from, hasil, type, options).catch(e => {
Lexxy.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
} 
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Lexxy.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( USER )=================//

if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/json/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
 
//=================( CONECTION )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
if (!mek.key.fromMe && isSelf === true) return

Lexxy.chatRead(from, "read")

//=================( CASE & MENU )=================//
switch (command) {
case 'menu':
const hky = speed();
const hby = speed() - hky
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Lexxy.user.phone
st =`──────────────────
╭───❒ ♛ 𝙐𝙨𝙚𝙧 𝙄𝙣𝙛𝙤 ♛
❒ 𝐍𝐚𝐦𝐞 : *${pushname}*
❒ 𝐓𝐚𝐠 : *@${sender.split("@")[0]}*
❒ 𝐒𝐭𝐚𝐭𝐮𝐬 : *${isOwner? "Owner 👑️":"User ⚔️"}*
❒ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremier? "Aktif ✔":"Tidak ✘"}* 
╰─────────────────
╭──❒ ♛ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 ♛
❒ 𝐍𝐚𝐦𝐞 : *${botName}*
❒ 𝐎𝐰𝐧𝐞𝐫 : *${ownerName}*
❒ 𝐀𝐮𝐭𝐡𝐨𝐫 : *Lexxy Official*
❒ 𝐏𝐫𝐞𝐟𝐢𝐱 : *Multi Prefix*
❒ 𝐋𝐢𝐛 : *Baileys*
❒ 𝐓𝐲𝐩𝐞 : *NodeJS*
❒ 𝐌𝐨𝐝𝐞 : *${isPublic? "Public":"Self"}*
❒ 𝐑𝐚𝐦 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
❒ 𝐕𝐞𝐫𝐬𝐢 𝐎𝐒 : *${os_version}*
❒ 𝐕𝐞𝐫𝐬𝐢 𝐇𝐏 : *${device_model}*
❒ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : *${wa_version}*
❒ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : *( ${pendaftar.length} )*
❒ 𝐒𝐩𝐞𝐞𝐝 : *${hby.toFixed(4)}* 𝘚𝘦𝘤𝘰𝘯𝘥
❒ 𝘾𝙝𝙖𝙩 𝐆𝐫𝐨𝐮𝐩 : *( ${groups.length} )*
❒ 𝘾𝙝𝙖𝙩 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 : *( ${privat.length} )*
❒ 𝘾𝙝𝙖𝙩 𝐓𝐨𝐭𝐚𝐥 : *( ${totalChat.length} )*
╰─────────────────
──────────────────`
st2 =`〘 𝙊𝙩𝙝𝙚𝙧𝙨 𝙈𝙚𝙣𝙪  〙
${simbol} #store
${simbol} #absen
${simbol} #linkwa
${simbol} #scbot
${simbol} #owner
${simbol} #rules
${simbol} #donasi
${simbol} #runtime
${simbol} #speed
${simbol} #cekprem
${simbol} #sewabot
${simbol} #listprem
${simbol} #request <fitur>
${simbol} #report <fitur>
${simbol} #teruskan <text>

〘 𝙎𝙝𝙤𝙧𝙩𝙡𝙞𝙣𝙠 𝙈𝙚𝙣𝙪 〙
${simbol} #bitly <link>
${simbol} #tinyurl <link>
${simbol} #cuttly <link>
${simbol} #shorturl <link>

〘 𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #self
${simbol} #public
${simbol} #readall
${simbol} #bc <text>
${simbol} #setsimbol
${simbol} #setnamabot <namabot>
${simbol} #setfake <reply image>
${simbol} #setreply <nama>
${simbol} #setthumb <reply image>
${simbol} #ban 628xxx
${simbol} #unban 628xxx
${simbol} #addprem 628xxx
${simbol} #delprem 628xxx

〘 𝙐𝙥𝙨𝙬 𝙈𝙚𝙣𝙪 〙
${simbol} #upswteks
${simbol} #upswvideo
${simbol} #upswimage

〘 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪 〙
${simbol} #antilink
${simbol} #antitoxic
${simbol} #rate
${simbol} #apakah
${simbol} #bisakah
${simbol} #kapankah
${simbol} #leave
${simbol} #rulesgroup
${simbol} #closegc
${simbol} #opengc
${simbol} #linkgrup
${simbol} #grupinfo
${simbol} #listadmin
${simbol} #setpp
${simbol} #setppgrup
${simbol} #setdesc
${simbol} #setname
${simbol} #kick @tag
${simbol} #add +628
${simbol} #tagall
${simbol} #hidetag
${simbol} #demote
${simbol} #promote
${simbol} #delete

〘 𝘾𝙤𝙣𝙫𝙚𝙧𝙩 𝙈𝙚𝙣𝙪 〙
${simbol} #ttp <text>
${simbol} #attp <text>
${simbol} #simi <hai>
${simbol} #dare
${simbol} #truth
${simbol} #sticker <reply>
${simbol} #toimg <reply>
${simbol} #cerpen
${simbol} #pantun
${simbol} #katailham
${simbol} #katasindiran

〘 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪 〙
${simbol} #igdl <link>
${simbol} #ytplay <query>
${simbol} #ytmp3 <link>
${simbol} #ytmp4 <link>
${simbol} #mediafire <link>
${simbol} #tiktoknowm <link>
${simbol} #instagram <link>

〘 𝙎𝙚𝙖𝙧𝙘𝙝 𝙈𝙚𝙣𝙪 〙
${simbol} #herolist
${simbol} #herodetail
${simbol} #ytsearch
${simbol} #pinterest
${simbol} #playstore
${simbol} #namaninja

〘 𝘾𝙚𝙠𝙘𝙚𝙠 𝙈𝙚𝙣𝙪 〙
${simbol} #tolol
${simbol} #goblok
${simbol} #lesbi
${simbol} #pintar
${simbol} #bodoh
${simbol} #wibu
${simbol} #sange
${simbol} #ganteng
${simbol} #cantik

〘 𝙍𝙖𝙣𝙙𝙤𝙢 𝙈𝙚𝙣𝙪 〙
${simbol} #fox
${simbol} #cat
${simbol} #dog
${simbol} #birb
${simbol} #koala
${simbol} #panda
${simbol} #meme
${simbol} #patrick
${simbol} #cogan
${simbol} #cecan
${simbol} #nickepep
${simbol} #darkmeme
${simbol} #darkjoke
${simbol} #meme
${simbol} #ppcouple
${simbol} #katailham
${simbol} #red_panda
${simbol} #estetikpic
${simbol} #renungan
${simbol} #katasindiran
${simbol} #quotesimage
${simbol} #darkjokers
${simbol} #randomquotes

〘 𝙉𝙚𝙠𝙤𝙥𝙤𝙞 𝙈𝙚𝙣𝙪 〙
${simbol} #nekopoi1
${simbol} #nekopoi2
${simbol} #nekopoi3
${simbol} #nekopoi4
${simbol} #nekopoi5
${simbol} #nekopoi6
${simbol} #nekopoi7
${simbol} #nekopoi8
${simbol} #nekopoi9

〘 𝙂𝙧𝙖𝙥𝙝𝙞𝙘 𝙈𝙚𝙣𝙪 〙
${simbol} #8bit
${simbol} #pornhub
${simbol} #glitch
${simbol} #glitch2
${simbol} #layered
${simbol} #realistic
${simbol} #lionlogo
${simbol} #ninjalogo
${simbol} #halloween2
${simbol} #marvel
${simbol} #cinematic
${simbol} #avengers
${simbol} #graffiti3

〘 𝙈𝙖𝙠𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #bneon
${simbol} #matrix
${simbol} #breakwall
${simbol} #dropwater
${simbol} #lithgtext
${simbol} #crismes
${simbol} #tfire
${simbol} #sandw
${simbol} #text3dbox
${simbol} #leavest
${simbol} #tlight
${simbol} #nulis
${simbol} #blackpink
${simbol} #neon_light
${simbol} #gaming
${simbol} #watercolor

〘 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #wallneon
${simbol} #wallrandom
${simbol} #wallcode
${simbol} #wallhacker
${simbol} #wallpubg
${simbol} #wallml

〘 𝙀𝙥𝙝𝙤𝙩𝙤 𝙈𝙚𝙣𝙪 〙
${simbol} #luxurygold
${simbol} #watercolor
${simbol} #multicolor3d
${simbol} #wetglass
${simbol} #galaxywallpaper
${simbol} #lighttext
${simbol} #beautifulflower
${simbol} #puppycute
${simbol} #royaltext
${simbol} #heartshaped
${simbol} #birthdaycake
${simbol} #galaxystyle
${simbol} #hologram3d
${simbol} #greenneon
${simbol} #glossychrome
${simbol} #greenbush
${simbol} #metallogo
${simbol} #noeltext
${simbol} #glittergold
${simbol} #textcake
${simbol} #starsnight
${simbol} #wooden3d
${simbol} #textbyname
${simbol} #writegalaxy
${simbol} #snow3d
${simbol} #birthdayday
${simbol} #goldplaybutton
${simbol} #silverplaybutton
${simbol} #freefire
${simbol} #cartoongravity
${simbol} #anonymhacker
${simbol} #mlwall
${simbol} #pubgmaskot
${simbol} #aovwall
${simbol} #logogaming
${simbol} #fpslogo
${simbol} #avatarlolnew
${simbol} #lolbanner
${simbol} #avatardota
${simbol} #juventusshirt
${simbol} #cutegravity
${simbol} #realvintage
${simbol} #codwarzone
${simbol} #valorantbanner

〘 𝙏𝙚𝙭𝙩𝙥𝙧𝙤 𝙈𝙚𝙣𝙪 〙
${simbol} #rainbow
${simbol} #scfi
${simbol} #blue
${simbol} #juice
${simbol} #purple
${simbol} #peridot
${simbol} #metal 
${simbol} #realistic
${simbol} #impressive
${simbol} #cracked
${simbol} #magma
${simbol} #thunder
${simbol} #berry
${simbol} #transformer 
${simbol} #horror
${simbol} #metallic
${simbol} #circuit
${simbol} #sketch
${simbol} #halloween
${simbol} #halloween
${simbol} #halloween2
${simbol} #3dgradient
${simbol} #naturalleaves
${simbol} #dropwater
${simbol} #blood
${simbol} #blood2
${simbol} #snow
${simbol} #cloud
${simbol} #neondevil
${simbol} #neon
${simbol} #glowingneonlight
${simbol} #neonlightglitch
${simbol} #neonlightonbrickwall
${simbol} #neonlight
${simbol} #neonlight2
${simbol} #neonlight3
${simbol} #greenneon
${simbol} #matrix
${simbol} #thunder
${simbol} #thunder2
${simbol} #bokeh
${simbol} #carbontext
${simbol} #christmas
${simbol} #breakwall
${simbol} #roadwarning
${simbol} #engraved3d
${simbol} #embossed
${simbol} #3dstone
${simbol} #futuristic
${simbol} #sketch
${simbol} #bluecircuit
${simbol} #space
${simbol} #magmahot
${simbol} #artpapercut
${simbol} #3dluxurygold
${simbol} #robotr2d2
${simbol} #harrypotter
${simbol} #glitch3
${simbol} #greenhorror
${simbol} #horrorgift
${simbol} #hotmetal
${simbol} #erodedmetal
${simbol} #3dglowingmetal
${simbol} #blackmetal
${simbol} #bluemetal
${simbol} #shynimetal
${simbol} #rustymetal
${simbol} #metalpurple
${simbol} #metalrainbow
${simbol} #metaldarkgold
${simbol} #colorfullluxurymetal
${simbol} #glossybluemetal
${simbol} #3dglossymetal
${simbol} #metallic
${simbol} #glossymetallic
${simbol} #christmastree
${simbol} #sparklesmerrychristmas
${simbol} #countryflag3d
${simbol} #americanflag3d
${simbol} #3dscfi
${simbol} #3drainbow
${simbol} #3dwaterpipe
${simbol} #3dchrome
${simbol} #bluegem
${simbol} #purplegem
${simbol} #pinkcandy
${simbol} #transformer
${simbol} #berry
${simbol} #brokenglass
${simbol} #3drealistic
${simbol} #3dunderwater
${simbol} #writeinsandsummerbeach
${simbol} #sandwriting
${simbol} #foilballoon
${simbol} #3dglue
${simbol} #1917
${simbol} #minion
${simbol} #doubleexposure
${simbol} #holographic3d
${simbol} #deluxegold
${simbol} #deluxesilver
${simbol} #glossycarbon
${simbol} #fabric
${simbol} #xmascards3d
${simbol} #wicker
${simbol} #fireworksparkle
${simbol} #skeleton
${simbol} #ultragloss
${simbol} #denim
${simbol} #decorategreen
${simbol} #peridot
${simbol} #rock
${simbol} #lava
${simbol} #rainbowequalizer
${simbol} #purpleglass
${simbol} #decorativeglass
${simbol} #chocolatecake
${simbol} #strawberry
${simbol} #koifish
${simbol} #bread
${simbol} #3dbox
${simbol} #freeadvancedglow
${simbol} #honey
${simbol} #marble
${simbol} #marbleslabs
${simbol} #icecold
${simbol} #fruitjuice
${simbol} #abstragold
${simbol} #biscuit
${simbol} #bagel
${simbol} #wood
${simbol} #hexagolden
${simbol} #3ddeepseametal
${simbol} #leddisplayscreen
${simbol} #wonderfulgraffitiart

〘 𝙎𝙤𝙪𝙣𝙙 𝙈𝙚𝙣𝙪 〙
${simbol} #sound1
${simbol} #sound2
${simbol} #sound3
${simbol} #sound4
${simbol} #sound5
${simbol} #sound6
${simbol} #sound7
${simbol} #sound8
${simbol} #sound9
${simbol} #sound10
${simbol} #sound11
${simbol} #sound12
${simbol} #sound13
${simbol} #sound14
${simbol} #sound15
${simbol} #sound16
${simbol} #sound17
${simbol} #sound18
${simbol} #sound19
${simbol} #sound20
${simbol} #sound21
${simbol} #sound22
${simbol} #sound23
${simbol} #sound24
${simbol} #sound25

〘 𝙂𝙖𝙢𝙚 𝙈𝙚𝙣𝙪 〙
${simbol} #oxo
${simbol} #slot
${simbol} #udara
${simbol} #darat
${simbol} #laut
${simbol} #caklontong
${simbol} #tebakgambar
${simbol} #tebakkata
${simbol} #tebaklirik
${simbol} #tebakjenaka
${simbol} #tebakkimia
${simbol} #tebakbendera

〘 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #attp
${simbol} #ttp
${simbol} #sticker
${simbol} #doge
${simbol} #patrick
${simbol} #gawgura
${simbol} #stickeranime

〘 𝘼𝙪𝙙𝙞𝙤 𝙈𝙚𝙣𝙪 〙
${simbol} #audio1
${simbol} #audio2
${simbol} #audio3
${simbol} #audio4
${simbol} #audio5
${simbol} #audio6
${simbol} #audio7
${simbol} #audio8
${simbol} #audio9
${simbol} #audio10
${simbol} #audio11
${simbol} #audio12
${simbol} #audio13
${simbol} #audio14
${simbol} #audio15
${simbol} #audio16
${simbol} #audio17
${simbol} #audio18
${simbol} #audio19
${simbol} #audio20
${simbol} #audio21

〘 𝙄𝙠𝙡𝙖𝙣 𝙈𝙚𝙣𝙪 〙
${simbol} #iklan1
${simbol} #iklan2
${simbol} #iklan3

〘 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙈𝙚𝙣𝙪 〙
${simbol} #kisahnabi
${simbol} #asmaulhusna
${simbol} #quran
${simbol} #hadist
${simbol} #infohoax
${simbol} #corona
${simbol} #jadwalbola
${simbol} #jamdunia
${simbol} #jam
${simbol} #antara
${simbol} #okezone
${simbol} #kompas
${simbol} #berita
${simbol} #sfile
${simbol} #rexdl
${simbol} #cersex
${simbol} #ytsearch
${simbol} #thelazy
${simbol} #shopee
${simbol} #amazon
${simbol} #arena

〘 𝙈𝙪𝙨𝙞𝙠 𝙈𝙚𝙣𝙪 〙
${simbol} #musik1
${simbol} #musik2
${simbol} #musik3
${simbol} #musik4
${simbol} #musik5
${simbol} #musik6
${simbol} #musik7
${simbol} #musik8
${simbol} #musik9
${simbol} #musik10
${simbol} #musik11
${simbol} #musik12
${simbol} #musik13
${simbol} #musik14
${simbol} #musik15
${simbol} #musik16
${simbol} #musik17
${simbol} #musik18
${simbol} #musik19
${simbol} #musik20`
but = [
{ buttonId: `${prefix}sewa`, buttonText: { displayText: '𝚂𝚎𝚠𝚊 𝙱𝚘𝚝🎟️' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '️𝙾𝚠𝚗𝚎𝚛 𝙱𝚘𝚝🤖️' }, type: 1 },
{ buttonId: `${prefix}fitur`, buttonText: { displayText: '️𝙻𝚒𝚜𝚝 𝙼𝚎𝚗𝚞🍁' }, type: 1 }
]
sendButLoc(from, st, st2, img1, but)
break
case 'menu1':
reply2(`
〘 𝙊𝙩𝙝𝙚𝙧𝙨 𝙈𝙚𝙣𝙪 〙
${simbol} #store
${simbol} #absen
${simbol} #linkwa
${simbol} #scbot
${simbol} #owner
${simbol} #rules
${simbol} #donasi
${simbol} #runtime
${simbol} #speed
${simbol} #cekprem
${simbol} #sewabot
${simbol} #listprem
${simbol} #request <fitur>
${simbol} #report <fitur>
${simbol} #teruskan <text>
`)
break
case 'menu2':
reply2(`
〘 𝙎𝙝𝙤𝙧𝙩𝙡𝙞𝙣𝙠 𝙈𝙚𝙣𝙪 〙
${simbol} #bitly <link>
${simbol} #tinyurl <link>
${simbol} #cuttly <link>
${simbol} #shorturl <link>
`)
break
case 'menu3':
reply2(`
〘 𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #self
${simbol} #public
${simbol} #readall
${simbol} #bc <text>
${simbol} #setsimbol
${simbol} #setnamabot <namabot>
${simbol} #setfake <reply image>
${simbol} #setreply <nama>
${simbol} #setthumb <reply image>
${simbol} #ban 628xxx
${simbol} #unban 628xxx
${simbol} #addprem 628xxx
${simbol} #delprem 628xxx
`)
break
case 'menu4':
reply2(`
〘 𝙐𝙥𝙨𝙬 𝙈𝙚𝙣𝙪 〙
${simbol} #upswteks
${simbol} #upswvideo
${simbol} #upswimage
`)
break
case 'menu5':
reply2(`
〘 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪 〙
${simbol} #antilink
${simbol} #antitoxic
${simbol} #rate
${simbol} #apakah
${simbol} #bisakah
${simbol} #kapankah
${simbol} #leave
${simbol} #rulesgroup
${simbol} #closegc
${simbol} #opengc
${simbol} #linkgrup
${simbol} #grupinfo
${simbol} #listadmin
${simbol} #setpp
${simbol} #setppgrup
${simbol} #setdesc
${simbol} #setname
${simbol} #kick @tag
${simbol} #add +628
${simbol} #tagall
${simbol} #hidetag
${simbol} #demote
${simbol} #promote
${simbol} #delete
`)
break
case 'menu6':
reply2(`
〘 𝘾𝙤𝙣𝙫𝙚𝙧𝙩 𝙈𝙚𝙣𝙪 〙
${simbol} #ttp <text>
${simbol} #attp <text>
${simbol} #simi <hai>
${simbol} #dare
${simbol} #truth
${simbol} #sticker <reply>
${simbol} #toimg <reply>
${simbol} #cerpen
${simbol} #pantun
${simbol} #katailham
${simbol} #katasindiran
`)
break
case 'menu7':
reply2(`
〘 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪 〙
${simbol} #igdl <link>
${simbol} #ytplay <query>
${simbol} #ytmp3 <link>
${simbol} #ytmp4 <link>
${simbol} #mediafire <link>
${simbol} #tiktoknowm <link>
${simbol} #instagram <link>
`)
break
case 'menu8':
reply2(`
〘 𝙎𝙚𝙖𝙧𝙘𝙝 𝙈𝙚𝙣𝙪 〙
${simbol} #herolist
${simbol} #herodetail
${simbol} #ytsearch
${simbol} #pinterest
${simbol} #playstore
${simbol} #namaninja
`)
break
case 'menu9':
reply2(`
〘 𝘾𝙚𝙠𝙘𝙚𝙠 𝙈𝙚𝙣𝙪 〙
${simbol} #tolol
${simbol} #goblok
${simbol} #lesbi
${simbol} #pintar
${simbol} #bodoh
${simbol} #wibu
${simbol} #sange
${simbol} #ganteng
${simbol} #cantik
`)
break
case 'menu10':
reply2(`
〘 𝙍𝙖𝙣𝙙𝙤𝙢 𝙈𝙚𝙣𝙪 〙
${simbol} #fox
${simbol} #cat
${simbol} #dog
${simbol} #birb
${simbol} #koala
${simbol} #panda
${simbol} #meme
${simbol} #patrick
${simbol} #cogan
${simbol} #cecan
${simbol} #nickepep
${simbol} #darkmeme
${simbol} #darkjoke
${simbol} #meme
${simbol} #ppcouple
${simbol} #katailham
${simbol} #red_panda
${simbol} #estetikpic
${simbol} #renungan
${simbol} #katasindiran
${simbol} #quotesimage
${simbol} #darkjokers
${simbol} #randomquotes
`)
break
case 'menu11':
reply2(`
〘 𝙉𝙚𝙠𝙤𝙥𝙤𝙞 𝙈𝙚𝙣𝙪 〙
${simbol} #nekopoi1
${simbol} #nekopoi2
${simbol} #nekopoi3
${simbol} #nekopoi4
${simbol} #nekopoi5
${simbol} #nekopoi6
${simbol} #nekopoi7
${simbol} #nekopoi8
${simbol} #nekopoi9
`)
break
case 'menu12':
reply2(`
〘 𝙂𝙧𝙖𝙥𝙝𝙞𝙘 𝙈𝙚𝙣𝙪 〙
${simbol} #8bit
${simbol} #pornhub
${simbol} #glitch
${simbol} #glitch2
${simbol} #layered
${simbol} #realistic
${simbol} #lionlogo
${simbol} #ninjalogo
${simbol} #halloween2
${simbol} #marvel
${simbol} #cinematic
${simbol} #avengers
${simbol} #graffiti3
`)
break
case 'menu13':
reply2(`
〘 𝙈𝙖𝙠𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #bneon
${simbol} #matrix
${simbol} #breakwall
${simbol} #dropwater
${simbol} #lithgtext
${simbol} #crismes
${simbol} #tfire
${simbol} #sandw
${simbol} #text3dbox
${simbol} #leavest
${simbol} #tlight
${simbol} #nulis
${simbol} #blackpink
${simbol} #neon_light
${simbol} #gaming
${simbol} #watercolor
`)
break
case 'menu14':
reply2(`
〘 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #wallneon
${simbol} #wallrandom
${simbol} #wallcode
${simbol} #wallhacker
${simbol} #wallpubg
${simbol} #wallml
`)
break
case 'menu15':
reply2(`
〘 𝙀𝙥𝙝𝙤𝙩𝙤 𝙈𝙚𝙣𝙪 〙
${simbol} #luxurygold
${simbol} #watercolor
${simbol} #multicolor3d
${simbol} #wetglass
${simbol} #galaxywallpaper
${simbol} #lighttext
${simbol} #beautifulflower
${simbol} #puppycute
${simbol} #royaltext
${simbol} #heartshaped
${simbol} #birthdaycake
${simbol} #galaxystyle
${simbol} #hologram3d
${simbol} #greenneon
${simbol} #glossychrome
${simbol} #greenbush
${simbol} #metallogo
${simbol} #noeltext
${simbol} #glittergold
${simbol} #textcake
${simbol} #starsnight
${simbol} #wooden3d
${simbol} #textbyname
${simbol} #writegalaxy
${simbol} #snow3d
${simbol} #birthdayday
${simbol} #goldplaybutton
${simbol} #silverplaybutton
${simbol} #freefire
${simbol} #cartoongravity
${simbol} #anonymhacker
${simbol} #mlwall
${simbol} #pubgmaskot
${simbol} #aovwall
${simbol} #logogaming
${simbol} #fpslogo
${simbol} #avatarlolnew
${simbol} #lolbanner
${simbol} #avatardota
${simbol} #juventusshirt
${simbol} #cutegravity
${simbol} #realvintage
${simbol} #codwarzone
${simbol} #valorantbanner
`)
break
case 'menu16':
reply2(`
〘 𝙏𝙚𝙭𝙩𝙥𝙧𝙤 𝙈𝙚𝙣𝙪 〙
${simbol} #rainbow
${simbol} #scfi
${simbol} #blue
${simbol} #juice
${simbol} #purple
${simbol} #peridot
${simbol} #metal 
${simbol} #realistic
${simbol} #impressive
${simbol} #cracked
${simbol} #magma
${simbol} #thunder
${simbol} #berry
${simbol} #transformer 
${simbol} #horror
${simbol} #metallic
${simbol} #circuit
${simbol} #sketch
${simbol} #halloween
${simbol} #halloween
${simbol} #halloween2
${simbol} #3dgradient
${simbol} #naturalleaves
${simbol} #dropwater
${simbol} #blood
${simbol} #blood2
${simbol} #snow
${simbol} #cloud
${simbol} #neondevil
${simbol} #neon
${simbol} #glowingneonlight
${simbol} #neonlightglitch
${simbol} #neonlightonbrickwall
${simbol} #neonlight
${simbol} #neonlight2
${simbol} #neonlight3
${simbol} #greenneon
${simbol} #matrix
${simbol} #thunder
${simbol} #thunder2
${simbol} #bokeh
${simbol} #carbontext
${simbol} #christmas
${simbol} #breakwall
${simbol} #roadwarning
${simbol} #engraved3d
${simbol} #embossed
${simbol} #3dstone
${simbol} #futuristic
${simbol} #sketch
${simbol} #bluecircuit
${simbol} #space
${simbol} #magmahot
${simbol} #artpapercut
${simbol} #3dluxurygold
${simbol} #robotr2d2
${simbol} #harrypotter
${simbol} #glitch3
${simbol} #greenhorror
${simbol} #horrorgift
${simbol} #hotmetal
${simbol} #erodedmetal
${simbol} #3dglowingmetal
${simbol} #blackmetal
${simbol} #bluemetal
${simbol} #shynimetal
${simbol} #rustymetal
${simbol} #metalpurple
${simbol} #metalrainbow
${simbol} #metaldarkgold
${simbol} #colorfullluxurymetal
${simbol} #glossybluemetal
${simbol} #3dglossymetal
${simbol} #metallic
${simbol} #glossymetallic
${simbol} #christmastree
${simbol} #sparklesmerrychristmas
${simbol} #countryflag3d
${simbol} #americanflag3d
${simbol} #3dscfi
${simbol} #3drainbow
${simbol} #3dwaterpipe
${simbol} #3dchrome
${simbol} #bluegem
${simbol} #purplegem
${simbol} #pinkcandy
${simbol} #transformer
${simbol} #berry
${simbol} #brokenglass
${simbol} #3drealistic
${simbol} #3dunderwater
${simbol} #writeinsandsummerbeach
${simbol} #sandwriting
${simbol} #foilballoon
${simbol} #3dglue
${simbol} #1917
${simbol} #minion
${simbol} #doubleexposure
${simbol} #holographic3d
${simbol} #deluxegold
${simbol} #deluxesilver
${simbol} #glossycarbon
${simbol} #fabric
${simbol} #xmascards3d
${simbol} #wicker
${simbol} #fireworksparkle
${simbol} #skeleton
${simbol} #ultragloss
${simbol} #denim
${simbol} #decorategreen
${simbol} #peridot
${simbol} #rock
${simbol} #lava
${simbol} #rainbowequalizer
${simbol} #purpleglass
${simbol} #decorativeglass
${simbol} #chocolatecake
${simbol} #strawberry
${simbol} #koifish
${simbol} #bread
${simbol} #3dbox
${simbol} #freeadvancedglow
${simbol} #honey
${simbol} #marble
${simbol} #marbleslabs
${simbol} #icecold
${simbol} #fruitjuice
${simbol} #abstragold
${simbol} #biscuit
${simbol} #bagel
${simbol} #wood
${simbol} #hexagolden
${simbol} #3ddeepseametal
${simbol} #leddisplayscreen
${simbol} #wonderfulgraffitiart
`)
break
case 'menu17':
reply2(`
〘 𝙎𝙤𝙪𝙣𝙙 𝙈𝙚𝙣𝙪 〙
${simbol} #sound1
${simbol} #sound2
${simbol} #sound3
${simbol} #sound4
${simbol} #sound5
${simbol} #sound6
${simbol} #sound7
${simbol} #sound8
${simbol} #sound9
${simbol} #sound10
${simbol} #sound11
${simbol} #sound12
${simbol} #sound13
${simbol} #sound14
${simbol} #sound15
${simbol} #sound16
${simbol} #sound17
${simbol} #sound18
${simbol} #sound19
${simbol} #sound20
${simbol} #sound21
${simbol} #sound22
${simbol} #sound23
${simbol} #sound24
${simbol} #sound25
`)
break
case 'menu18':
reply2(`
〘 𝙂𝙖𝙢𝙚 𝙈𝙚𝙣𝙪 〙
${simbol} #oxo
${simbol} #slot
${simbol} #udara
${simbol} #darat
${simbol} #laut
${simbol} #caklontong
${simbol} #tebakgambar
${simbol} #tebakkata
${simbol} #tebaklirik
${simbol} #tebakjenaka
${simbol} #tebakkimia
${simbol} #tebakbendera
`)
break
case 'menu19':
reply2(`
〘 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙈𝙚𝙣𝙪 〙
${simbol} #attp
${simbol} #ttp
${simbol} #sticker
${simbol} #doge
${simbol} #patrick
${simbol} #gawgura
${simbol} #stickeranime
`)
break
case 'menu20':
reply2(`
〘 𝘼𝙪𝙙𝙞𝙤 𝙈𝙚𝙣𝙪 〙
${simbol} #audio1
${simbol} #audio2
${simbol} #audio3
${simbol} #audio4
${simbol} #audio5
${simbol} #audio6
${simbol} #audio7
${simbol} #audio8
${simbol} #audio9
${simbol} #audio10
${simbol} #audio11
${simbol} #audio12
${simbol} #audio13
${simbol} #audio14
${simbol} #audio15
${simbol} #audio16
${simbol} #audio17
${simbol} #audio18
${simbol} #audio19
${simbol} #audio20
${simbol} #audio21
`)
break
case 'menu21':
reply2(`
〘 𝙄𝙠𝙡𝙖𝙣 𝙈𝙚𝙣𝙪 〙
${simbol} #iklan1
${simbol} #iklan2
${simbol} #iklan3
`)
break
case 'menu22':
reply2(`
〘 𝙃𝙖𝙘𝙠𝙚𝙧 𝙂𝙧𝙤𝙪𝙥 〙
${simbol} #smile
${simbol} #bts
${simbol} #halal
${simbol} #bantengmerah
${simbol} #anime
${simbol} #indonesia
${simbol} #horror
${simbol} #hellokitty
`)
break
case 'menu23':
reply2(`
〘 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙈𝙚𝙣𝙪 〙
${simbol} #kisahnabi
${simbol} #asmaulhusna
${simbol} #quran
${simbol} #hadist
${simbol} #infohoax
${simbol} #corona
${simbol} #jadwalbola
${simbol} #jamdunia
${simbol} #jam
${simbol} #antara
${simbol} #okezone
${simbol} #kompas
${simbol} #berita
${simbol} #sfile
${simbol} #rexdl
${simbol} #cersex
${simbol} #ytsearch
${simbol} #thelazy
${simbol} #shopee
${simbol} #amazon
${simbol} #arena
`)
break
case 'menu24':
reply2(`
〘 𝙈𝙪𝙨𝙞𝙠 𝙈𝙚𝙣𝙪 〙
${simbol} #musik1
${simbol} #musik2
${simbol} #musik3
${simbol} #musik4
${simbol} #musik5
${simbol} #musik6
${simbol} #musik7
${simbol} #musik8
${simbol} #musik9
${simbol} #musik10
${simbol} #musik11
${simbol} #musik12
${simbol} #musik13
${simbol} #musik14
${simbol} #musik15
${simbol} #musik16
${simbol} #musik17
${simbol} #musik18
${simbol} #musik19
${simbol} #musik20
`)
break
case 'ccp':
sticWait(from)
cp = await getBuffer(`https://myselfff.herokuapp.com/docs/random/ttp?query=${q}`)
Lexxy.sendMessage(from, cp, sticker)
break
case 'fitur':
ros = await Lexxy.prepareMessageFromContent(from,{
"listMessage": {
"title": `*_Created By ${ownerName}_*`,
"description": `*Hallo @${sender.split('@')[0]}*\nini Adalah Fitur Bot Yg Ada , Mohon Jangan Spam Biar Bot Nya Tidak Delay, Terima Kasih Semoga Harimu Bahagia Selalu, *Support By Lexxy*`,
"buttonText": "𝙇𝙞𝙨𝙩 𝙈𝙚𝙣𝙪",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${time2}`,
"rows": [
{
"title": "☰ Others Menu ",
"description": `Menampilkan Fitur Others`,
"rowId": `${prefix}menu1`
},
{
"title": "☰ Shortlink Menu",
"description": `Menampilkan Fitur Shortlink`,
"rowId": `${prefix}menu2`
},
{
 "title": "☰ Owner Menu",
 "description": `Menampilkan Fitur Owner`,
"rowId": `${prefix}menu3`
},
{
"title": "☰ Upsw Menu",
"description": `Menampilkan Fitur Upsw`,
"rowId": `${prefix}menu4`
},
{
"title": "☰ Group Menu",
"description": `Menampilkan Fitur Group`,
"rowId": `${prefix}menu5`
},
{
"title": "☰ Convert Menu",
"description": `Menampilkan Fitur Convert`,
"rowId": `${prefix}menu6`
},
{
"title": "☰ Download Menu",
"description": `Menampilkan Fitur Download`,
"rowId": `${prefix}menu7`
},
{
"title": "☰ Search Menu",
"description": `Menampilkan Fitur Search`,
"rowId": `${prefix}menu8`
},
{
"title": "☰ Cekcek Menu",
"description": `Menampilkan Fitur Cekcek`,
"rowId": `${prefix}menu9`
},
{
"title": "☰ Random Menu️",
"description": `Menampilkan Fitur Random`,
"rowId": `${prefix}menu10`
},
{
"title": "☰ Nekopoi Menu",
"description": `Menampilkan Fitur Nekopoi`,
"rowId": `${prefix}menu11`
},
{
"title": "☰ Graphic Menu",
"description": `Menampilkan Fitur Graphic`,
"rowId": `${prefix}menu12`
},
{
"title": "☰ ️Maker Menu",
"description": `Menampilkan Fitur Maker`,
"rowId": `${prefix}menu13`
},
{
"title": "☰ Wallpaper Menu️",
"description": `Menampilkan Fitur Wallpaper`,
"rowId": `${prefix}menu14`
},
{
"title": "☰ Ephoto Menu️",
"description": `Menampilkan Fitur Ephoto`,
"rowId": `${prefix}menu15`
},
{
"title": "☰ TextPro Menu",
"description": `Menampilkan Fitur TextPro`,
"rowId": `${prefix}menu16`
},
{
"title": "☰ Sound Menu",
"description": `Menampilkan Fitur Sound`,
"rowId": `${prefix}menu17`
},
{
"title": "☰ Game Menu",
"description": `Menampilkan Fitur Game`,
"rowId": `${prefix}menu18`
},
{
"title": "☰ Sticker Menu",
"description": `Menampilkan Fitur Sticker`,
"rowId": `${prefix}menu19`
},
{
"title": "☰ Audio Menu",
"description": `Menampilkan Fitur Audio`,
"rowId": `${prefix}menu20`
},
{
"title": "☰ Iklan Menu",
"description": `Menampilkan Fitur Iklan`,
"rowId": `${prefix}menu21`
},
{
"title": "☰ Hacker Group",
"description": `Menampilkan Fitur Hacker`,
"rowId": `${prefix}menu22`
},
{
"title": "☰ Informasi Menu",
"description": `Menampilkan Fitur Informasi`,
"rowId": `${prefix}menu23`
},
{
"title": "☰ Musik Menu",
"description": `Menampilkan Fitur Musik`,
"rowId": `${prefix}menu24`
},
{
"title": "☰ Store Menu️",
"description": `Menampilkan Fitur Store`,
"rowId": `${prefix}store`
},
{
"title": "☰ Script Bot",
"description": `Menampilkan Source Code`,
"rowId": `${prefix}scbot`
},
{
"title": "☰ Runtime Bot",
"description": `Menampilkan Runtime Bot`,
"rowId": `${prefix}test`
},
{
"title": "☰ Speed Bot",
"description": `Menampilkan Speed Bot`,
"rowId": `${prefix}speed`
},
{
"title": "☰ Sewa Bot",
"description": `Menampilkan List Harga`,
"rowId": `${prefix}sewa`
}
]
}
]
}
}, {quoted: mek })
Lexxy.relayWAMessage(ros)
break
case 'gura':
case 'gawgura':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'scbot':
reply('Bot ini Menggunakan sc\nhttps://youtu.be/_44pvsbCR6s')
break
case 'runtime':
uptime = process.uptime();
reply2(`𝐑𝐮𝐧𝐭𝐢𝐦𝐞 :\n${runtime(process.uptime())}`)
break
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=NisaaCantik`)
buff1 = await getBuffer (anu.result.male)
Lexxy.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_'})
buff2 =await getBuffer (anu.result.female)
Lexxy.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_'})
break
case "runtime":
case "test":
run = process.uptime();
teks = `*${kyun(run)}*`;
reply(teks);
break
case 'cecan': case 'cogan':
sticWait(from)
nyx1 = fs.readFileSync(`./database/random/${command}.js`);
nyx2 = JSON.parse(nyx1);
nyx3 = Math.floor(Math.random() * nyx2.length);
nyx4 = nyx2[nyx3];
nyx5 = await getBuffer(nyx4.result)
sendImage(nyx5, ':v')
break
case 'patrick':
case 'pat':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'rules':
teks = `*Syarat & Ketentuan ${botName}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
reply(teks)
break
case 'hellokitty': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/hellokitty.jpg')
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `HELLOKITTY`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP HELLOKITTY`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break
case 'horror': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/horror.jpg')        
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `HORROR`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP HORROR`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break	
case 'indonesia': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/indonesia.jpg')        
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `INDONESIA`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP INDONESIA`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break 
case 'antitoxic':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
if ((args[0]) === 'on') {
antitoxic.push(from)
fs.writeFileSync('./database/json/antitoxic.json', JSON.stringify(antitoxic))
reply("SUKSES : ANTITOXIC ON")
} else if ((args[0]) === 'off') { 
antitoxic.splice(from, 1)
fs.writeFileSync('./database/json/antitoxic.json', JSON.stringify(antitoxic))
reply("SUKSES : ANTITOXIC OFF")
} else {
reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
}
break 	
case 'oxo':                    	
oxz1 = `[ ${oxo11} ]\n`
oxz1 += `[ ${oxo22} ]\n`
oxz1 += `[ ${oxo33} ]\n`
reply(oxz1)
break
case 'slot':  	    				    
slot = `===================\n` 
slot += `${slot11} | ${slot22} | ${slot33}\n`
slot += `${slot44} | ${slot55} | ${slot66} <====\n`
slot += `${slot77} | ${slot88} | ${slot99}	\n`				   
slot += `===================\n`
Lexxy.sendMessage(from, slot, text, {quoted: mek})
break				  
case 'udara':
if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
FC = body.slice(7)
setTimeout( () => {
reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
reply(`[ *${FC}* ]`)
}, 5000)
setTimeout( () => {
reply(`[ *SEDANG BERBURU* ]`)
}, 8000)
setTimeout( () => {
reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 18000)
setTimeout( () => {
reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
}, 20000)
break
case 'darat':
if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
FC = body.slice(7)
setTimeout( () => {
reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
reply(`[ *${FC}* ]`)
}, 5000)
setTimeout( () => {
reply(`[ *SEDANG BERBURU* ]`)
}, 8000)
setTimeout( () => {
reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 18000)
setTimeout( () => {
reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
}, 20000)
break
case 'laut':
if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
FC = body.slice(6)
setTimeout( () => {
reply(`[ *PERINTAH DILAKSANAKAN* ]`)
}, 1000)
setTimeout( () => {
reply(`[ *${FC}* ]`)
}, 5000)
setTimeout( () => {
reply(`[ *SEDANG BERBURU* ]`)
}, 8000)
setTimeout( () => {
reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
}, 18000)
setTimeout( () => {
reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]\n[ INFORMASI *${prefix}info1* ]`)
}, 20000)
break
case 'anime': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/anime.jpg')
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `ANIME`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP ANIME`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break
case 'bts': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/bts.jpg')
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `BTS`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP BTS`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break
case 'smile': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/smile.jpg')
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `SMILE`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP SMILE`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break
case 'halal': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/halal.jpg')
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `HALAL`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP HALAL`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break
case 'bantengmerah': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
try{
sticWait(from)
sertt1 = fs.readFileSync('./database/hacker/bantengmerah.jpg')
setTimeout( () => {
Lexxy.updateProfilePicture(from, sertt1)   
Lexxy.groupUpdateSubject(from, `BANTENG MERAH!!`)
Lexxy.groupUpdateDescription(from, `WELCOME TO GROUP BANTENG MERAH`)		
reply(`SUKSES`)
}, 6000)
} catch (e) {	
console.log(e)
}     
break
case 'anime':
case 'stickeranime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerFromUrl(from, pjrr)
}
)
break
case 'doge':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'iklan1':
reply(`${(ind.iklan1())}`)
break
case 'iklan2':
reply(`${(ind.iklan2())}`)
break
case 'iklan3':
reply(`${(ind.iklan3())}`)
break
case 'speed':
const gky = speed();
const gby = speed() - gky
reply2(`𝐒𝐩𝐞𝐞𝐝 : *${gby.toFixed(4)}* 𝘚𝘦𝘤𝘰𝘯𝘥`)
break
case 'cekprem':
reply2(`𝐒𝐭𝐚𝐭𝐮𝐬 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremier? "aktif":"tidak"}*`)
break
case 'listprem':
reply2(`𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : ${prem.length}`)
break
case 'asupan':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
sticWait(from)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Lexxy.sendMessage(from, asupan, video, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'darkjoke': case 'darkjokes': case 'joke': case 'jokes': case 'meme':
sticWait(from)
nyx1 = fs.readFileSync(`./database/random/darkjokes.js`);
nyx2 = JSON.parse(nyx1);
nyx3 = Math.floor(Math.random() * nyx2.length);
nyx4 = nyx2[nyx3];
nyx5 = await getBuffer(nyx4.result)
sendImage(nyx5, ':v')
break
case 'hijaber':
sticWait(from)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Lexxy.sendMessage(from, asupan, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'quotesimage':
case 'renungan':
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'attp':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Lexxy.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'ttp':
reply(mess.wait)
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay) 
break
case 'arena':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz51 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/arena?query=${aq}`)
nyz53 = nyz51.result
nyz52 = `[ *ARENA* ]\n`,
nyz52 += `=> *SPEK* : ${nyz53.spek}\n`,
nyz52 += `=> *TYPE* : ${nyz53.type}\n`,
nyz52 += `=> *SIZE* : ${nyz53.size}\n`,
nyz52 += `=> *RESOLUSI* : ${nyz53.resolusi}\n`,
nyz52 += `=> *OS* : ${nyz53.os}\n`,
nyz52 += `=> *CPU* : ${nyz53.cpu}\n`,
nyz52 += `=> *INTERNAL* : ${nyz53.internal}\n`,
nyz52 += `=> *CAMERA* : ${nyz53.camera}\n`,
nyz52 += `=> *BATTERAI* : ${nyz53.batterai}\n`
reply(nyz52)
break
case 'amazon':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz54 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${aq}`)
nyz55 = nyz54.result
nyz56 = `[ *AMAZON* ]\n`,
nyz56 += `=> *ITEM* : ${nyz55.item}\n`,
nyz56 += `=> *REVIEW* : ${nyz55.review}\n`,
nyz56 += `=> *RATING* : ${nyz55.rating}\n`,
nyz56 += `=> *PRICE* : ${nyz55.price}\n`,
nyz56 += `=> *DISKON* : ${nyz55.diskon}\n`,
nyz56 += `=> *URL* : ${nyz55.url}\n`,
nyz56 += `=> *SPONSOR* : ${nyz55.sponsor}\n`,
nyz56 += `=> *BEST* : ${nyz55.best}\n`,
nyz56 += `=> *AMAZON* : ${nyz55.amazon}\n`
reply(nyz56)
break
case 'shopee':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${aq}`)
nyz58 = nyz57.result
nyz59 = `[ *SHOPEE* ]\n`,
nyz59 += `=> *JUDUL* : ${nyz58.judul}\n`,
nyz59 += `=> *HARGA* : ${nyz58.harga}\n`,
nyz59 += `=> *MERK* : ${nyz58.merk}\n`,
nyz59 += `=> *STOCK* : ${nyz58.stock}\n`,
nyz59 += `=> *LIKE* : ${nyz58.like}\n`,
nyz59 += `=> *VIEWS* : ${nyz58.views}\n`,
nyz59 += `=> *TERJUAL* : ${nyz58.terjual}\n`
reply(nyz59)
break
case 'thelazy':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz70 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/thelazy?query=${aq}`)
nyz71 = nyz70.result
nyz72 = `[ *THELAZY* ]\n`,
nyz72 += `=> *TITLE* : ${nyz71.title}\n`,
nyz72 += `=> *URL* : ${nyz71.url}\n`,
nyz72 += `=> *CATEGORY* : ${nyz71.category}\n`,
nyz72 += `=> *AUTHOR* : ${nyz71.author}\n`,
nyz72 += `=> *POST* : ${nyz71.post_date}\n`,
nyz72 += `=> *COMMENTS* : ${nyz71.comments}\n`
reply(nyz72)
break
case 'cersex':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz73 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/cersex?query=${aq}`)
nyz74 = nyz73.result
nyz75 = `[ *CERSEX* ]\n`,
nyz75 += `=> *TITLE* : ${nyz74.title}\n`,
nyz75 += `=> *URL* : ${nyz74.url}\n`,
nyz75 += `=> *CATEGORY* : ${nyz74.category}\n`,
nyz75 += `=> *POST* : ${nyz74.post}\n`
reply(nyz75)
break
case 'ytsearch':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${aq}`)
nyz77 = nyz76.result
nyz78 = `[ *YTSEARCH* ]\n`,
nyz78 += `=> *TITLE* : ${nyz77.title}\n`,
nyz78 += `=> *ID* : ${nyz77.id}\n`,
nyz78 += `=> *TYPE* : ${nyz77.type}\n`,
nyz78 += `=> *VIEWS* : ${nyz77.views}\n`,
nyz78 += `=> *URL* : ${nyz77.url}\n`,
nyz78 += `=> *DESC* : ${nyz77.desc}\n`
reply(nyz78)
break
case 'rexdl':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(mess.notext)
nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${aq}`)
nyz80 = nyz79.result
nyz81 = `[ *REXDL* ]\n`,
nyz81 += `=> *TITLE* : ${nyz80.title}\n`,
nyz81 += `=> *URL* : ${nyz80.url}\n`, 
nyz81 += `=> *ON* : ${nyz80.on}\n`,
nyz81 += `=> *DESC* : ${nyz80.desc}\n` 
reply(nyz81)
break 
case 'sfile':
 if (isBanned) return reply(banned)
if (args.length < 1) return reply(mess.notext)
nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${aq}`)
nyz86 = nyz85.result
nyz87 = `[ *SFILE* ]\n`,
nyz87 += `=> *TITLE* : ${nyz86.title}\n`,
nyz87 += `=> *SIZE* : ${nyz86.size}\n`,
nyz87 += `=> *URL* : ${nyz86.url}\n`
reply(nyz87)
break 
case 'berita':
if (isBanned)return sticBanned(from)
nyz88 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita`)
nyz89 = nyz88.result
nyz90 = `[ *BERITA* ]\n`,
nyz90 += `=> *TITLE* : ${nyz89.title}\n`,
nyz90 += `=> *URL* : ${nyz89.url}\n`
reply(nyz90)
break
case 'kompas':
if (isBanned)return sticBanned(from)
nyz91 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`)
nyz92 = nyz91.result
nyz93 = `[ *KOMPAS* ]\n`,
nyz93 += `=> *TITLE* : ${nyz92.title}\n`,
nyz93 += `=> *URL* : ${nyz92.url}\n`
reply(nyz93)
break
case 'okezone':
if (isBanned)return sticBanned(from)
nyz94 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/okezone`)
nyz95 = nyz94.result
nyz96 = `[ *OKEZONE* ]\n`,
nyz96 += `=> *TITLE* : ${nyz95.title}\n`,
nyz96 += `=> *URL* : ${nyz95.url}\n`
reply(nyz96)
break
case 'antara':
if (isBanned)return sticBanned(from)
nyz97 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/antara`)
nyz98 = nyz97.result
nyz99 = `[ *ANTARA* ]\n`,
nyz99 += `=> *TITLE* : ${nyz98.title}\n`,
nyz99 += `=> *URL* : ${nyz98.url}\n`
reply(nyz99)
break
case 'jam':
if (isBanned)return sticBanned(from)
nyz100 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jam`)
nyz101 = nyz100.result
nyz102 = `[ *JAM* ]\n`,
nyz102 += `=> *WIB* : ${nyz101.wib}\n`,
nyz102 += `=> *WITA* : ${nyz101.wita}\n`,
nyz102 += `=> *WIT* : ${nyz101.wit}\n`
reply(nyz102)
break
case 'jamdunia':
if (isBanned)return sticBanned(from)
nyz103 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
nyz104 = nyz103.result
nyz105 = `[ *JAM DUNIA* ]\n`,
nyz105 += `=> *WITA* : ${nyz104.wita}\n`,
nyz105 += `=> *WIT* : ${nyz104.wit}\n`,
nyz105 += `=> *WIB* : ${nyz104.wib}\n`,
nyz105 += `=> *MATAHARI* : ${nyz104.matahari}\n`,
nyz105 += `=> *TANGGAL* : ${nyz104.tanggal}\n`,
nyz105 += `=> *DETAIL* : ${nyz104.detail}\n`
reply(nyz105)
break
case 'jadwalbola':
if (isBanned)return sticBanned(from)
nyz106 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jadwalbola`)
nyz107 = nyz106.result
nyz108 = `[ *JADWAL BOLA* ]\n`,
nyz108 += `=> *WAKTU* : ${nyz107.waktu}\n`,
nyz108 += `=> *KICKOFF* : ${nyz107.kickoff}\n`,
nyz108 += `=> *CHANNEL* : ${nyz107.channel}\n`
reply(nyz108)
break
case 'infohoax':
if (isBanned)return sticBanned(from)
nyz109 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/infohoax`)
nyz110 = nyz109.result
nyz111 = `[ *INFO HOAX* ]\n`,
nyz111 += `=> *TITLE* : ${nyz110.title}\n`,
nyz111 += `=> *URL* : ${nyz110.URL}\n`,
nyz111 += `=> *TANGGAL* : ${nyz110.tanggal}\n`,
nyz111 += `=> *DESC* : ${nyz110.desc}\n`
reply(nyz111)
break 
case 'corona':
if (isBanned)return sticBanned(from)
nyz112 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/coronameninggal`)
nyz113 = `=> *MENINGGAL* : ${nyz112.result.meninggal}`
reply(nyz113)
break	
case 'hadist':
if (isBanned)return sticBanned(from)
 nyz117 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/hadist`)
 nyz118 = `[ *HADIST* ]\n`,
 nyz118 += `=> *NAME* : ${nyz117.list.name}\n`,
 nyz118 += `=> *ID* : ${nyz117.list.id}\n`,
 nyz118 += `=> *AVAILABLE* : ${nyz117.list.available}\n`,
 nyz118 += `=> *NUMBER* : ${nyz117.list.number}\n`,
 nyz118 += `=> *ARAB* : ${nyz117.list.arab}\n`
 reply(nyz118)
 break
 case 'quran':
if (isBanned)return sticBanned(from)
 nyz119 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/quran`)
 nyz120 = `[ *QURAN* ]\n`,
 nyz120 += `=> *QURAN* : ${nyz119.list.quran}\n`,
 nyz120 += `=> *SURAH* : ${nyz119.list.surah}\n`,
 nyz120 += `=> *JUZ* : ${nyz119.list.juz}\n`,
 nyz120 += `=> *ARAB* : ${nyz119.list.arab}\n`,
 nyz120 += `=> *SHORT* : ${nyz119.list.id_short}\n`,
 nyz120 += `=> *LONG* : ${nyz119.list.id_long}\n`
 reply(nyz120)
 break
 case 'asmaulhusna':
if (isBanned)return sticBanned(from)
 nyz121 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/asmaulhusna`)
 nyz122 = `[ *ASMAULHUSNA* ]\n`,
 nyz122 += `=> *NUMBER* : ${nyz121.list.number}\n`,
 nyz122 += `=> *LATIN* : ${nyz121.list.latin}\n`,
 nyz122 += `=> *ARAB* : ${nyz121.list.arab}\n`,
 nyz122 += `=> *ID* : ${nyz121.list.id}\n`,
 nyz122 += `=> *EN* : ${nyz121.list.en}\n`
 reply(nyz122)
 break
 case 'kisahnabi':
if (isBanned)return sticBanned(from)
 nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/kisahnabi`)
 nyz124 = `[ *KISAHNABI* ]\n`,
 nyz124 += `=> *NAME* : ${nyz125.list.name}\n`,
 nyz124 += `=> *KELAHIRAN* : ${nyz125.list.kelahiran}\n`,
 nyz124 += `=> *WAFAT USIA* : ${nyz125.list.wafat_usia}\n`,
 nyz124 += `=> *SINGGAH* : ${nyz125.list.singgah}\n`,
 nyz124 += `=> *KISAH* : ${nyz125.list.kisah}\n`
 reply(nyz124)
 break	 
case 'linkwa':
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/darkjokes?apikey=${dhakey}`)
oke = await getBuffer(anu.result.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'wallpapermuslim':
case 'wallpapercyberspace':
case 'wallpapermountain':
case 'wallpaperprogramming':
case 'wallpapertechnology':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'wallpapernaruto':
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/naruto?apikey=${dhakey}`)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'bitly':
sticWait(from)
anu = await fetchJson(`https://api.xteam.xyz/shorturl/bitly?url=${q}&APIKEY=MIMINETBOT`)
Lexxy.sendMessage(from, `𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝐿𝑒𝑥𝑥𝑦𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙\n\n𝐁𝐞𝐟𝐨𝐫𝐞 :\n${q}\n𝐀𝐟𝐭𝐞𝐫 :\n${anu.result.link}\n\n𝘿𝙞𝙥𝙧𝙤𝙙𝙪𝙠𝙨𝙞 :\n_${tanggal}_`, text, {quoted: mek})
break
case 'rulesgroup':
reply(`*Desc :* \n${groupMetadata.desc}`)
break
case 'tinyurl':
sticWait(from)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, `𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝐿𝑒𝑥𝑥𝑦𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙\n\n𝐁𝐞𝐟𝐨𝐫𝐞 :\n${q}\n𝐀𝐟𝐭𝐞𝐫 :\n${anu.result}\n\n𝘿𝙞𝙥𝙧𝙤𝙙𝙪𝙠𝙨𝙞 :\n_${tanggal}_`, text, {quoted: mek})
break
case 'cuttly':
sticWait(from)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, `𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝐿𝑒𝑥𝑥𝑦𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙\n\n𝐁𝐞𝐟𝐨𝐫𝐞 :\n${q}\n𝐀𝐟𝐭𝐞𝐫 :\n${anu.result.hasil}\n\n𝘿𝙞𝙥𝙧𝙤𝙙𝙪𝙠𝙨𝙞 :\n_${tanggal}_`, text, {quoted: mek})
break
case 'shorturl':
sticWait(from)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=${LeysKey}`)
Lexxy.sendMessage(from, `𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝐿𝑒𝑥𝑥𝑦𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙\n\n𝐁𝐞𝐟𝐨𝐫𝐞 :\n${q}\n𝐀𝐟𝐭𝐞𝐫 :\n${anu.result}\n\n𝘿𝙞𝙥𝙧𝙤𝙙𝙪𝙠𝙨𝙞 :\n_${tanggal}_`, text, {quoted: mek})
break
case 'magma': case 'glossy': case 'bread': case 'ice': case 'honey':
if (args.length == 0) return reply(`Example: ${prefix}${command} ootlo Botz`)
reply(mess.wait) 
anu = args.join(" ")
ini_buffer = await getBuffer(`https://ryuu-apii.herokuapp.com/api/textpro/${command}?text=${anu}&apikey=RyuBotz`)
Lexxy.sendMessage(from, ini_buffer, image, { quoted: mek})
//limitAdd(sender, limit)
break		
case 'sound1':
Lexxy.sendMessage(from, satu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
Lexxy.sendMessage(from, dua, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
Lexxy.sendMessage(from, tiga, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
Lexxy.sendMessage(from, empat, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
Lexxy.sendMessage(from, lima, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
Lexxy.sendMessage(from, enam, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
Lexxy.sendMessage(from, tujuh, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
Lexxy.sendMessage(from, delapan, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
Lexxy.sendMessage(from, sembilan, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
Lexxy.sendMessage(from, sepuluh, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
Lexxy.sendMessage(from, sebelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
Lexxy.sendMessage(from, duabelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
Lexxy.sendMessage(from, tigabelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
Lexxy.sendMessage(from, empatbelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
Lexxy.sendMessage(from, limabelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
Lexxy.sendMessage(from, enambelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
Lexxy.sendMessage(from, tujuhbelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
Lexxy.sendMessage(from, delapanbelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
Lexxy.sendMessage(from, sembilanbelas, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
Lexxy.sendMessage(from, duapuluh, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//AUDIO
case 'audio1': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio1, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio2': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio2, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio3': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio3, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio4': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio4, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio5': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio5, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio6': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio6, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio7': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio7, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio8': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio8, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio9': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio9, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio10': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio10, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio11': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio11, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio12': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio12, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio13': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio13, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio14': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio14, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio15': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio15, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio16': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio16, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio17': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio17, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio18': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio18, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio19': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio19, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio20': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio20, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'audio21': 
if (isBanned)return sticBanned(from)      
Lexxy.sendMessage(from, audio21, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break
case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Lexxy`)
textt = args.join(" ")
sticWait(from)
hsel = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolKey}&text=${textt}`)
Lexxy.sendMessage(from, hsel, image, {quoted: mek, caption: 'Nih Kak Dah Jadi ^_^' })
break
case 'teruskan':
Lexxy.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
break  
case 'nekopoi1':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi2':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi3':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi4':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi5':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi6':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi7':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi8':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi9':
qute = fs.readFileSync('./gambar/kagura.jpg') 
Lexxy.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallhacker': case 'wallpubg': case 'wallml':
if (isBanned)return sticBanned(from)
sticWait(from)
try{
nyz2 = await fetchJson(`${api}/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
Lexxy.sendMessage(from, nyz3, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted: mek}) 
} catch (e) { reply("ERR SILAHKAN COBALAGI")}
break
case 'baka':
case 'tickle':
case 'slap':
case 'poke':
case 'neko':
case 'meow':
case 'lizard':
case 'foxGirl':
case 'holo':
case 'woof':
case 'goose':
case 'gecg':
case 'avatar':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Mau Search Sticker Apa Nya om')
sticWait(from)
nyz4 = await getBuffer(`https://hardianto.xyz/api/anime/random?sfw=${command}&apikey=${HardiApi}`)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted: mek})
break
case 'waifu':
if (isBanned)return sticBanned(from)
sticWait(from)
nyz4 = await getBuffer(`https://pipisan26.herokuapp.com/api/waifu?apikey=rdfHGoYr`)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`Random Waifu 🔥`,quoted: mek})
break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
anu = await fetchJson(`https://hardianto.xyz/api/kuis/tebakgambar?apikey=hardianto`)
anu = anu
ini_image = anu.image
jawaban = anu.jawaban
ini_buffer = await getBuffer(ini_image)
clue = anu.clue
buff = await getBuffer(ini_image)
Lexxy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+clue+'\nWaktu : 30s' }).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/games/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
titid = "*Jawaban*: " + jawaban
sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
{
buttonId: `${prefix}tebakgambar`,
buttonText: {
displayText: `𝐍𝐄𝐗𝐓 ⏩`,
},
type: 1,
},]);
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakgambar.json", JSON.stringify(tebakgambar))
}
break
case 'tebakkata':
if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakkata?apikey=RyuBotz`)
anu = anu
jawaban = anu.jawaban
pertanyaan = anu.soal
Lexxy.sendMessage(from, '```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/games/tebakata.json", JSON.stringify(tebakata))
})
await sleep(30000)
if (tebakata.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakata.json", JSON.stringify(tebakata))
}

break
case 'tebaklirik':
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebaklirik?apikey=RyuBotz`)
jawaban = anu.result.answer
pertanyaan = anu.result.question
Lexxy.sendMessage(from, '```Tebak Lirik```\n\n• *Soal* :'+anu.result.question+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
await sleep(30000)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebaklirik.json", JSON.stringify(tebaklirik))
}
break
case 'tebakjenaka':
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakjenaka?apikey=RyuBotz`)
jawaban = anu.result.jawaban
pertanyaan = anu.result.pertanyaan
Lexxy.sendMessage(from, '```Tebak Jenaka```\n\n• *Soal* :'+anu.result.pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/games/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
await sleep(30000)
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
break
case 'tebakkimia':
if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakkimia?apikey=RyuBotz`)
jawaban = anu.result.lambang
pertanyaan = anu.result.nama
Lexxy.sendMessage(from, '```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/games/tebakimia.json", JSON.stringify(tebakimia))
})
await sleep(30000)
if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakimia.json", JSON.stringify(tebakimia))
}
break
case 'tebakbendera':
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakbendera?apikey=RyuBotz`)
jawaban = anu.result.nama
pertanyaan = anu.result.bendera
Lexxy.sendMessage(from, '```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/games/tebakbendera.json", JSON.stringify(tebakbendera))
})
await sleep(30000)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/games/tebakbendera.json", JSON.stringify(tebakbendera))
}
break
case 'caklontong':
if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/kuis/caklontong?apikey=RyuBotz`)
jawaban = anu.result.jawaban
pertanyaan = anu.result.soal
Lexxy.sendMessage(from, '```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/games/caklontong.json", JSON.stringify(caklontong))
})
await sleep(30000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/games/caklontong.json", JSON.stringify(caklontong))
}
break
case 'simi':
bo = args.join(" ")
sm = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${bo}&APIKEY=MIMINETBOT`)
reply(`${sm.jawaban}`)
break
case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlightglitch':
case 'neonlightonbrickwall':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Text Nya om')
sticWait(from)
nyz5 = await fetchJson(`${api}/textpro/${command}?text=${q}`) 
nyz4 = await getBuffer(nyz5.result)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥',quoted: mek})
break
case 'darkmeme':
sticWait(from)
if (isBanned)return sticBanned(from)
nyz4 = await getBuffer(`https://hardianto.xyz/api/darkmeme?apikey=${HardiApi}`)
Lexxy.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`*Random Dark Meme🗿*`,quoted: mek})
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
case 'sound70':
sticWait(from)
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
Lexxy.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
sticWait(from)
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
Lexxy.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'store':
res = await Lexxy.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 STORE MENU 」',
"description": `*Created By ${ownerName}*`,
"buttonText": "𝙋𝙄𝙇𝙄𝙃 𝘿𝙄𝙎𝙄𝙉𝙄",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${time2}`,
"rows": [
{
"title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 💎",
"rowId": `${prefix}ff`
},
{
"title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘔𝘰𝘣𝘪𝘭𝘦 𝘓𝘦𝘨𝘦𝘯𝘥𝘴 💎",
"rowId": `${prefix}ml`
},
{
 "title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘏𝘢𝘨𝘰 💎",
"rowId": `${prefix}hago`
},
{
"title": "𝘜𝘊 𝘗𝘶𝘣𝘨 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
"rowId": `${prefix}pubg`
},
{
"title": "𝘗𝘰𝘪𝘯𝘵 𝘉𝘭𝘢𝘯𝘬 𝘗𝘉 𝘊𝘢𝘴𝘩 💸",
"rowId": `${prefix}point`
},
{
"title": "𝘊𝘢𝘭𝘭 𝘖𝘧 𝘋𝘶𝘵𝘺 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
"rowId": `${prefix}codm`
},
{
"title": "𝘏𝘪𝘨𝘨𝘴 𝘋𝘰𝘮𝘪𝘯𝘰 𝘐𝘴𝘭𝘢𝘯𝘥 💰",
"rowId": `${prefix}chip`
},
{
"title": "𝘎𝘢𝘳𝘦𝘯𝘢 𝘚𝘩𝘦𝘭𝘭 𝘐𝘯𝘥𝘰 💰",
"rowId": `${prefix}garena`
},
{
"title": "𝘗𝘢𝘺𝘮𝘦𝘯𝘵 𝘚𝘵𝘰𝘳𝘦 🤑",
"rowId": `${prefix}pyment`
},
{
 "title": "𝘖𝘸𝘯𝘦𝘳 𝘉𝘰𝘵 👤",
"rowId": `${prefix}owner`
},
{
"title": "𝘚𝘤𝘳𝘪𝘱𝘵 𝘉𝘰𝘵 ⚙️",
"rowId": `${prefix}scbot`
}
]
}
]
}
}, {quoted: mek })
Lexxy.relayWAMessage(res)
break
case 'serti1':
case 'serti2':
case 'serti3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
txtt = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Lexxy.sendMessage(from, buff, image, { quoted: flexx, caption: 'Nih Bro Hasil nya' })
break
case 'instagram':
case 'igdl':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
break
case 'nuliskiri':
case 'nuliskanan':
case 'foliokiri':
case 'foliokanan':
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
mgr = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://hardianto.xyz/api/${command}?text=${mgr}&apikey=${HardiApi}`)
Lexxy.sendMessage(from, buff, image, { quoted: flexx, caption: 'Nih Bro Hasil nya' })
break
case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Lexxy.sendMessage(from, oke, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
sticWait(from)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Lexxy.sendMessage(from, harta, image, {quoted: mek, caption: '𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'})
break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'toxic':
Toxic().then(toxic => {
reply (toxic)
})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'cinematic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'captain':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Lexxy.sendMessage(from, pornhub, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Lexxy.sendMessage(from, girlneko, image, {caption: `𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐋𝐞𝐱𝐱𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, quoted: mek})
break
case 'readall':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
var chats = await Lexxy.chats.all()
chats.map( async ({ jid }) => {
await Lexxy.chatRead(jid)
})
var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
await Lexxy.sendMessage(from, teks, text, {quoted: mek})
console.log(chats.length)
break
case 'kaneki':
case 'rem':
case 'lolimaker':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy`)
bo = args.join(" ")
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?nama=${bo}&apikey=${ziyApi}`)
Lexxy.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By Lexxy Official' })
break
case 'girlneko':
case 'sadboy':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy OFC`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${txt1}&text2=${txt2}&apikey=${ziyApi}`)
Lexxy.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By Lexxy Official' })
break
case 'donasi':
dno = fs.readFileSync('./gambar/qris.jpg')
dns =`${(ind.donasi())}`
Lexxy.sendMessage(from, dno, image, { quoted: flexx, caption: dns })
break
case 'hidetag':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await Lexxy.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Lexxy.sendMessage(from, options, text)
break
case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Lexxy.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
Lexxy.groupDemoteAdmin(from, mentioned)
}
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
case 'cekhero':
if (args.length ==0)return reply(`Nama hero nya apa? contoh\n${prefix+command} nana`)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Lexxy.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
Lexxy.groupMakeAdmin(from, mentioned)
}
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: flexx })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: flexx })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: flexx })
break
case 'rate':
case 'nilai':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
Lexxy.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: flexx })
break
case 'tiktoknowm':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok.com')) return reply('Error')
sticWait(from)
anu = await TiktokDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.nowatermark) })
.catch((err) => { reply(String(err)) })
break
case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
Lexxy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tagall':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Lexxy.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'sewa':
case 'sewabot':
reply2(`${(ind.listsewa(owner))}`)
break
case 'ff':
case 'diamondff':
ffg = fs.readFileSync('./gambar/logo/FF.png')
ff =`${(ind.diamondFF())}`
ff2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ff, ff2, ffg, but)
break
case 'pyment':
pyg = fs.readFileSync('./gambar/qris.jpg')
py =`${(ind.paymentstore(owner))}`
Lexxy.sendMessage(from, pyg, image, { quoted: mek, caption: py })
break
case 'hago':
case 'diamondhago':
hgg = fs.readFileSync('./gambar/logo/HAGO.png')
hg =`${(ind.hagostore())}`
hg2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, hg, hg2, hgg, but)
break
case 'pubg':
case 'ucpubg':
pbg = fs.readFileSync('./gambar/logo/PUBG.png')
pb =`${(ind.pubgstore())}`
pb2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, pb, pb2, pbg, but)
break
case 'codm':
case 'cpcodm':
cog = fs.readFileSync('./gambar/logo/COD.png')
co =`${(ind.codmstore())}`
co2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, co, co2, cog, but)
break
case 'point':
case 'pointblank':
pog = fs.readFileSync('./gambar/logo/POINT.png')
po =`${(ind.cbcashstore())}`
po2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, po, po2, pog, but)
break
case 'garena':
case 'garenashell':
gmg = fs.readFileSync('./gambar/logo/GARENA.png')
gm =`${(ind.garenashell())}`
gm2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, gm, gm2, gmg, but)
break
case 'ml':
case 'diamondml':
mlg = fs.readFileSync('./gambar/logo/ML.png')
ml =`${(ind.diamondML())}`
ml2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ml, ml2, mlg, but)
break
case 'chip':
case 'higgsdomino':
chg = fs.readFileSync('./gambar/logo/CHIP.png')
ch =`${(ind.chipstore())}`
ch2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ch, ch2, chg, but)
break
case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Lexxy.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Lexxy.groupRemove(from, mentioned)
}
break
case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
Lexxy.groupLeave(from)
} else {
sticAdmin(from)
}
break
case 'truth':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/truth`)
bt1 =`*${bt.truth}*`
bt2 =`Klik Di Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, bt1, bt2, td, but)
break
case 'dare':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/dare`)
dr1 =`*${bt.dare}*`
dr2 =`Klik Di Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, dr1, dr2, td, but)
break
case 'ttp':
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
tp = args.join (" ")
sticWait(from)
ttp = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${encodeURI(q)}&color=black&apikey=${HardiApi}`)
Lexxy.sendMessage(from, ttp, sticker, { quoted: mek })
break
case 'attp':
if (args.length ==0)return (`Text nya mana cuy Contoh\n${prefix + command} Lexxy`)
attp = args.join(" ")
sticLoad(from)
atp = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${encodeURI(q)}&apikey=${HardiApi}`)
Lexxy.sendMessage(from, atp, sticker, { quoted: mek })
break
case 'setppgrup': 
case 'setpp':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await Lexxy.downloadAndSaveMediaMessage(mek)
await Lexxy.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) sticAdmin(from)
if (!isBotGroupAdmins) sticBotAdmin(from)
linkgc = await Lexxy.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By Lexxy Official')
fs.unlinkSync(ran)
})
break
case 'searchgrup':
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'imgsearch':
if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await Lexxy.sendMessage(from,li,image,{quoted: mek})
break
case 'ytsearch':
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await Lexxy.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break
case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${LeysKey}`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${LeysKey}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${LeysKey}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'pinterest':
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await Lexxy.sendMessage(from, di, image, { quoted: mek })
break
case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return reply2(`Text Nya Mana? Contoh\n${prefix+command} Lexxy Official`)
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Reply Fake : ${q}`)
break
case 'setnamabot':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return reply2(`Text Nya Mana? Contoh\n${prefix+command} Lexxy-Botz`)
hh = args.join(" ")
botName = hh
reply(`Succes Mengganti Nama Bot Menjadi : ${q}`)
break
case 'setsimbol':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return reply2(`Simbol Nya Mana? Contoh\n${prefix+command} •`)
yo = args.join(" ")
simbol = yo
reply(`Succes Mengganti Simbol Fake : ${q}`)
break
case 'gitown':
reply2(`*GitHub Owner*\n${githubown}`)
break
case 'ytown':
reply2(`*YouTube Owner*\n${yutubown}`)
break
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Lexxy.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break
case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Lexxy.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break
case 'bneon':
case 'matrix':
case 'breakwall':
case 'dropwater':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'text3dbox':
case 'leavest':
case 'tlight':
case 'nulis':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text nya mana?')
bp = args.join(" ")
sticWait(from)
zks = await getBuffer(`https://api.zeks.me/api/${command}?apikey=apivinz&text=${bp}`)
Lexxy.sendMessage(from, zks, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
Lexxy.sendMessage(from, jojo, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'tes':
if (isBanned)return sticBanned(from)
reply('*STATUS BOT : ONLINE*')
break
case 'cerpen':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break 
case 'tongue':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*#${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'birb':
case 'koala':
case 'meme':
if (isBanned)return sticBanned(from)
sticWait(from)
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
Lexxy.sendMessage(from, res, image, {caption: `*©Random ${command}*`, quoted: flexx })
break
case 'estetikpic':
if (isBanned)return sticBanned(from)
sticWait(from)
este = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=apivinz`)
Lexxy.sendMessage(from, este, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'mediafire':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
Lexxy.sendMessage(from, md, image, {quoted: flexx, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'request':
case 'rq':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Request Fitur Apa?\nContohnya :\n${prefix + command} antilink`)
const cfrr = body.slice(8)
if (cfrr.length > 300) return Lexxy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
Lexxy.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: flexx})
Lexxy.sendMessage('62857890047322@s.whatsapp.net', options, text, {quoted: flexx})
reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
break
case 'report':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Report Fitur Yg mana?\nContohnya :\n${prefix + command} maker error`)
const cfgg = body.slice(8)
if (cfgg.length > 300) return Lexxy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomer = mek.participant
const ross = `*[ REPORT FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfgg}`
var options = {
text: ross,
contextInfo: {mentionedJid: [nomer]},
}
Lexxy.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: flexx})
Lexxy.sendMessage('62857890047322@s.whatsapp.net', options, text, {quoted: flexx})
reply('REPORT ANDA TELAH SAMPAI KE PENGEMBANG SC, Report palsu atau main² tidak akan ditanggapi.')
break
case 'broadcast':
case 'bc':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await Lexxy.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Lexxy.downloadMediaMessage(encmedia)
for (let _ of anu) {
Lexxy.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Sukses broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
reply('Sukses broadcast')
}
break
case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'sticker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
Lexxy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
Lexxy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: flexx})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break
case 'ply3':
case 'ytplay':
case 'playmp3':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://pipisan26.herokuapp.com/api/ytplay?query=${bo}&apikey=rdfHGoYr`)
kon = ini.result
ini_txt =`𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙋𝙡𝙖𝙮𝙈𝙪𝙨𝙞𝙠\n\n𝐉𝐮𝐝𝐮𝐥 : ${kon.title}\n𝐔𝐤𝐮𝐫𝐚𝐧 : ${kon.size}\n𝐀𝐮𝐭𝐡𝐨𝐫 : ${kon.channel}\n𝐃𝐢𝐭𝐨𝐧𝐭𝐨𝐧 : ${kon.views}\n𝐃𝐢𝐮𝐩𝐥𝐨𝐚𝐝 : ${kon.uploadDate}\n\n𝑨𝒖𝒅𝒊𝒐 𝑺𝒆𝒅𝒂𝒏𝒈 𝑫𝒊𝒌𝒊𝒓𝒊𝒎 𝑴𝒐𝒉𝒐𝒏 𝑴𝒆𝒏𝒖𝒏𝒈𝒈𝒖 𝑺𝒆𝒌𝒊𝒕𝒂𝒓 1 𝑴𝒆𝒏𝒊𝒕`
pl3 = await getBuffer(kon.thumb)
Lexxy.sendMessage(from, pl3, image, { quoted: mek, caption: ini_txt })
pl2 = await getBuffer(kon.result)
Lexxy.sendMessage(from, pl2, audio)
break
case 'ytmp4':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://pipisan26.herokuapp.com/api/ytmp4?url=${bo}&apikey=rdfHGoYr`)
kon = ini.result
ini_txt =`𝙔𝙩𝙢𝙥4 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧\n\n𝐉𝐮𝐝𝐮𝐥 : ${kon.title}\n𝐔𝐤𝐮𝐫𝐚𝐧 : ${kon.size}\n𝐐𝐮𝐚𝐥𝐢𝐭𝐲 : ${kon.quality}\n𝐀𝐮𝐭𝐡𝐨𝐫 : ${kon.channel}\n𝐃𝐢𝐭𝐨𝐧𝐭𝐨𝐧 : ${kon.views}\n𝐃𝐢𝐮𝐩𝐥𝐨𝐚𝐝 : ${kon.uploadDate}\n\n𝑴𝒆𝒅𝒊𝒂 𝑺𝒆𝒅𝒂𝒏𝒈 𝑫𝒊𝒌𝒊𝒓𝒊𝒎 𝑴𝒐𝒉𝒐𝒏 𝑴𝒆𝒏𝒖𝒏𝒈𝒈𝒖 𝑺𝒆𝒌𝒊𝒕𝒂𝒓 1 𝑴𝒆𝒏𝒊𝒕`
yt4 = await getBuffer(kon.thumb)
Lexxy.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
yt5 = await getBuffer(kon.result)
Lexxy.sendMessage(from, yt5, video)
break
case 'ytmp3':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://pipisan26.herokuapp.com/api/ytmp3?url=${bo}&apikey=rdfHGoYr`)
kon = ini.result
ini_txt =`𝙔𝙩𝙢𝙥3 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧\n\n𝐉𝐮𝐝𝐮𝐥 : ${kon.title}\n𝐔𝐤𝐮𝐫𝐚𝐧 : ${kon.size}\n𝐀𝐮𝐭𝐡𝐨𝐫 : ${kon.channel}\n𝐃𝐢𝐭𝐨𝐧𝐭𝐨𝐧 : ${kon.views}\n𝐃𝐢𝐮𝐩𝐥𝐨𝐚𝐝 : ${kon.uploadDate}\n\n𝑴𝒆𝒅𝒊𝒂 𝑺𝒆𝒅𝒂𝒏𝒈 𝑫𝒊𝒌𝒊𝒓𝒊𝒎 𝑴𝒐𝒉𝒐𝒏 𝑴𝒆𝒏𝒖𝒏𝒈𝒈𝒖 𝑺𝒆𝒌𝒊𝒕𝒂𝒓 1 𝑴𝒆𝒏𝒊𝒕`
yt4 = await getBuffer(kon.thumb)
Lexxy.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
yt5 = await getBuffer(kon.result)
Lexxy.sendMessage(from, yt5, audio)
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName}`)
ow =`*Hallo ${pushname}👋 Itu Nomer Owner Ku Mau Tau Tentang Apa Ya?*`
ow2 =`_Pilih Salah Satu Di Bawah_`
but = [
{ buttonId: `${prefix}gitown`, buttonText: { displayText: '𝐆𝐈𝐓𝐇𝐔𝐁' }, type: 1 },
{ buttonId: `${prefix}ytown`, buttonText: { displayText: '️𝐘𝐎𝐔𝐓𝐔𝐁𝐄' }, type: 1 }
]
sendButton(from, ow, ow2, but, mek)
break
case 'upswimage':
if (!isOwner) return sticOwner(from)
if (isQuotedImage) {
const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await Lexxy.downloadMediaMessage(swsw)
Lexxy.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
bur = `Sukses Upload Story Image dengan Caption: ${q}`
Lexxy.sendMessage(from, bur, text, { quoted: mek })
} else {
reply2('Reply gambarnya!')
}
break
case 'upswvideo':
if (!isOwner) return sticOwner(from)
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await Lexxy.downloadMediaMessage(swsw)
Lexxy.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
Lexxy.sendMessage(from, bur, text, { quoted: mek })
} else {
reply2('reply videonya!')
}
break 
case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Udah aktif')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan anti link group di group ini ✔️')
Lexxy.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Mode anti link group sudah disable')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('Sukes menonaktifkan anti link group di group ini ✔️')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'quotesislami':
case 'quotesanime':
case 'truth':
case 'dare':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMess(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'randomquotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes?apikey=${dhakey}`)
dhani = (anu.result.quotes)
sendButMess(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
Lexxy.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
case "opengc":
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
Lexxy.groupSettingChange(from, GroupSettingChange.messageSend, false);
break;
case "upswteks":
if (!isOwner) return sticOwner(from)
if (!q) return reply("Isi teksnya!");
Lexxy.sendMessage("status@broadcast", `${q}`, extendedText);
reply2(`Sukses Up story wea teks ${q}`);
break;
case 'setname':
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
Lexxy.groupUpdateSubject(from, `${body.slice(9)}`)
Lexxy.sendMessage(from, `\`\`\`Sukses Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setdesc':
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
Lexxy.groupUpdateDescription(from, `${body.slice(9)}`)
Lexxy.sendMessage(from, `\`\`\`Sukses Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return sticGroup(from);
try {
var pic = await Lexxy.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome : Aktif*\n*AntiLink : ${isAntilink ? 'Aktif' : 'Mati'}*\n*Desc :* \n\n${groupMetadata.desc}`
Lexxy.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'absen':
reply(`𝑳𝒊𝒔𝒕 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂 𝑩𝒐𝒕\n\n@${pendaftar}\n_Total Pengguna_ : *${pendaftar.length}*`)
break
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━\\
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return Lexxy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}