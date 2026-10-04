/*============≠≠==========≠≠=============\\

ASTA FREE VERSION

//=======================================*/

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, prepareWAMessageMedia, proto, generateWAMessageFromContent } = require('@m4thxyz_/baileys');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, response, addLimit, upload, nit, sesc, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner, isFiltered, addFilter, temporizador, chyt, kyun, simih, botoff, colors, comand, sendButton, EnvButton, sendRoulette, saveJSON, isJsonIncludes, alerandom, letras, randomLetra, addNumberMais, identArroba, iniMai, contar, sendHours, rmLetras, replaceAll, contarMin, contarDias, converterDias, converterMin, allvaluerent, sendFutureTime, sendPastTime, isIDacc, nicks, formatTimestamp, separateNumberLetter, getIDbyWhatsLink, criarJsonGP, contarData, sendAudioPTT, allGroups } = require('./config.js');

const os = require('os')

const jimp = require('jimp')

const path = require('path')

const { arcloud } = require('./arcc.js')

//const nodemailer = require('nodemailer');

const assemblyApiKey = ''

const { payment } = require("./mercado-pago-API/index.js")

const dataMP = JSON.parse(fs.readFileSync(`./dono/mercado pago.json`))

const { superimg } = require("./database/midia/superimg.js")

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { anotacao, infocontador, infobemvindo, infolistanegra, infotransmitir, infopalavrao, infobancarac, configbot, cmd_termux, destrava, destrava2, tabela, conselhob, palavrasc, joguinhodavelhajs, joguinhodavelhajs2, obrigadoEXT, setting, logoslink, globegroup, music, amongus, vdddsf, akinator, mute, figname, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, antispam, anotar, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, antiModLetra, convertBytes, funcgp, revealmsg, adsgp, bcgp, rankcmd } = require('./config.js');

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

//const { API_KEY_FREE, API_KEY_CONSULT } = require("./dono/apikey.json")

var {
  botoes,
  visualizarmsg,
  modoaluguel,
  stopcmdlist,
  messagesched,
  blacksite,
  idchatofc,
  idprivategp,
  dbgp,
  dono1, dono2, dono3, dono4, dono5, dono6
} = require("./dono/config-all.json");

var channel = {
    "id": "120363295533162889@newsletter",
    "name": "亗 ʙʟᴀᴄᴋ ꜱʏꜱᴛᴇᴍ ᴏꜰᴄ 亗"
}

const blackchannel = channel.id

const isScheMsg = messagesched

var { NomeDoBot, NickDono, prefix } = require("./dono/settings.json");

const { __esModule } = require('cheerio');

const figurinhas = JSON.parse(fs.readFileSync("./database/midia/data/figurinhas.json"));

const recolherLNK = JSON.parse(fs.readFileSync("./javascript/funcoes/recolherLNK.json"));

const links = JSON.parse(fs.readFileSync('./database/links.json'));

//=============USERI=JID-LID==============\\

const { pushnames, existsLidData, userLid, convertUserID, saveUserID, addUserID, rmUserID, getname, addLidJson } = require("./database/pushnames/senderlid.js")

//================BANNED===================\\

const { banned, saveBannedUsu, isBanned, banirUsuario, desbanirUsuario, getBannedUsu, bannedExpired, isBannedMessageUsu } = require("./database/ban usu/ban.js")

//================ALL-VIP===================\\

const { addAFK, rmAFK, autoFuncAFK, setAutoAFK, isAutoAFK, autoAFK, expirarAFK, vip, saveVip, addVip, rmVip, delVip, getUsuVip, isOnlyVip, isAdvencedVip, isInfinityVip, vipTime, vipgp, saveGroupVip, addGroupVip, delGroupVip, getGroupVip, isOnlyGroupVip, isAdvencedGroupVip, isInfinityGroupVip, vipGroupTime, valoresVIP } = require("./database/all-vip/vip-config.js")

//================LEVEL-FUNC===================\\

const { isYouInLevel, dbpt, patente, saveLeVeLdb, level, addlevel, rmlevel, addXP, rmXP, blockLevelUser, unBlockLevelUser, isBlockGetLevelUser, levelDBuser, cardxp, addCardExperience, addUsuCardXP, valoresXP, getCardXPusu, saveCardXP, cardTime, ranktemp, saveNewTempRank, atualrank, atualmesrank, addNewRankTemp, existUsuInRank, getInfoUsuAtualRank, addUsuInRank, addCommandInUsuLevelRank, resetGhostInRankLevel, getFinishInfoRankLevel, finishUsuRankTemp } = require("./database/leveling/level.js")

//================SHIELD-LINK===================\\

const { shieldantilinkgp, notGroupRegisteredSALGP, addShieldGP, rmShieldGP, saveSALGP, isShieldGPuser, getShieldGPuser, shieldantilinkhard, notGroupRegisteredSALHARD, addShieldHARD, rmShieldHARD, saveSALHARD, isShieldHARDuser, getShieldHARDuser } = require("./database/shieldantilink/shield-all.js")

//================CASAMENTO===================\\

const { relationShip, saveRelationShip, getGeralOrder, dadosShip, delGeralOrder, rmOrderGeral, userIsAffair, userIsMarriage, getCasalTime, addOrderAffair, existsOrderAffair, isUserOrderAffair, acceptOrderAffair, addOrderMarriage, saveOrderMarriage, getOutherCasal, isUserOrderMarriage } = require("./database/namoro-casamento/relacionamento.js")

//================FORCA===================\\

const { saveUsuForcaGame, usuarios_forca, addUsuarioForca, rmUsuarioForca, addAcertoUsuForca, addErroUsuForca, existIdForcaGameInUsu, registrarIdNaForca, addVitoriaForca, addDerrotaForca, getUsuDatabaseForca, saveForcaWord, forcaWord, sendPathForcaGame, existSomeWordForcaGame, existThemeWordForcaGame, getThemeWordForcaGame, getRandomWordForcaGame, rgWordForcaGame, rmThemeForcaGame, rmWordForcaGame, isForcaGame, saveForcaGame, startForcaGame, resetForcaGame, restartForcaGame, getJSONforcaGame, letraFoiJogada, isTrueLetter, isLetterFinishForcaGame, registrarLetraForca, getWordSplitForcaGame, getErrEmojiForcaGame, sendTextForcaGame, jogarLetraForcaGame } = require("./jogos/forca/forca.js")

//===============COINS-RENT==============\\

const { moedas, saveCoins, registrarUsuInVirtualBalance, addCoinsInVirtualBalance, rmCoinsInVirtualBalance, getSepCoins, getCoinsUsu, gerarkey, gerarTypeKey, validarKey, allKeysRentSystem, groupspath, grupos, saveGroupsRent, courtesyGroup, addGroupInRent, rmGroupInRent, aluguel, saveRent, sendTimeDay, sendTimeHours, sendLetterTime, isGroupInRent, addRent, tirarRent, delRent, rentContSystem, addCourtesy, isCourtesyGroup, getGroupRent, valoresDeAluguel, getValuesRent, existKeyRentSystem, getClientKey, rmTypeKey, getSaveGroup, isSaveGroup } = require("./operacao/saldo virtual/config-keys.js")

//==================AVALIE=================\\

const { stars, saveStar, getStarUsu, getUsuStar, existsUsuStar, addStar, rmStar, addComentStar, getRandomComent, resetStar, staymessage, saveStayMessage, addMessageInSM, rmMessageInSM } = require("./database/avalie/estrelas.js")

//==================ADVERTENCIAS=================\\

const { adv, saveAdv, addGroupInAdv, getGroupInAdv, addAdv, rmAdv, rmAllAdv, getAdvQuantTotalUsu, isLimitAdvUsu, advFunc, getUsuInAdv } = require("./database/advertencias/adv-config.js")

//==================RESTART-QR=================\\

const { QRCODEPATH, isRestartQR, restartqr, setHorarioRestart, stopRestartQR, reviverQR, restartQRfunc } = require("./javascript/funcoes/restart.js")

//==================CONTADOR-MENSAGENS=================\\

const { countmessagepath, existsGroupInCountMessage, countMessage, saveCountMessage, addGroupCountMessage, rmGroupCountMessage, existsUserInCountMessage, getUserInCountMessage, addUserInCountMessage, rmUserInCountMessage, allCountMessage, inactiveGroupCountMessage } = require("./database/mensagens/messages.js")

//====================≠≠===============\\

var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

var nmrdnCmMais = "+" + numerodono_ofc.slice(0, 2) + " " + numerodono_ofc.slice(2, 4) + " " + numerodono_ofc.slice(4, numerodono_ofc.length - 4) + "-" + numerodono_ofc.slice(numerodono_ofc.length - 4, numerodono_ofc.length)

async function reiniciarBLK() {
file = require.resolve("./start.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

const API_KEY_FREE = 'astafreekey001'

async function startBlack() {

module.exports = astaup = async(astaup, qrcode) => {
module.exports = upsert = async(upsert, astaup) => {
async function msgupsrt() {

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

for(const info of upsert?.messages || []) {

if((info?.key?.remoteJid && info?.key?.senderLid) || (info?.key?.remoteJid && info?.key?.participant)) {addUserID(astaup, info)}
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

if(info?.message?.pollUpdateMessage) return

if(fs.existsSync(`./database/grupos/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/${from}.json`));
}

// 🇸 🇮 🇲 🇵 🇱 🇮 🇫 🇮 🇨 🇦 🇨 🇴 🇪 🇸 \\
// RODAR COMANDOS DE OUTROS BOTS \\

var blackmd = astaup
var conn = astaup
var japa = astaup
var aqua = astaup
var lukaz = astaup
var pl = astaup
var vieno = astaup
var mikasa = astaup
var sabrina = astaup
var chris = astaup
var kaic = astaup
var kimbler = astaup
var vitu = astaup
var lulu = astaup

const botNumber = await astaup.user.id.split(':')[0]+'@s.whatsapp.net';

if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@m4thxyz_/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
//const pushTestName = info.pushName ? info.pushName : 'Usuário';
if(visualizarmsg) {
await astaup.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\

var body = type === "conversation" ? info.message.conversation : type == "editedMessage" ? info.message.editedMessage.message.protocolMessage.editedMessage?.conversation || info.message.editedMessage.message.protocolMessage.editedMessage?.imageMessage?.caption || info.message.editedMessage.message.protocolMessage.editedMessage?.videoMessage?.caption || info.message.editedMessage.message.protocolMessage.editedMessage?.documentMessage?.caption : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message?.videoMessage?.caption : info.message.viewOnceMessage.message?.imageMessage?.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\

try {var groupMetadata = isGroup ? await astaup.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const userID = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const sender = convertUserID(userID)

const senderlid = convertUserID(userID, 'lid')

const pushname = getname(sender)

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

/**
 * @typedef {Object} GroupParticipant
 * @property {string} id - O ID do participante.
 * @property {string} jid - O JID (Jabber ID) completo do participante.
 * @property {string} lid - O LID (Login ID) do participante.
 * @property {string} admin - O nível administrativo do participante (por exemplo, "superadmin", "admin" ou "").
 */

/**
 * Retorna uma lista de participantes do grupo se o contexto for um grupo (`isGroup` for true).
 * Caso contrário, retorna uma string vazia.
 *
 * @type {Array<GroupParticipant>}
 */
const groupMembers = isGroup ? groupMetadata.participants : '';

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const isSesc = sesc.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

const apikeymeta = `https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json`

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./javascript/infosorteio.js')

//===========(enviar.espere)=============\\

const { pia } = require('./javascript/piadas.js');

const { mensagens } = require('./javascript/aleatoria.js');

const { sortear } = require('./javascript/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)];

react1 = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '❤‍🔥', '❤‍🩹', '💞', '💗', '💖'];

react2 = react1[Math.floor(Math.random()*react1.length)]

//================= Funções de Grupo 🥋

const groupdbpath = `./database/grupos/${from}.json`

const configpath = "./dono/config-all.json"

if(isGroup && !fs.existsSync(groupdbpath)) {
  criarJsonGP(from)
  return //astaup.sendMessage(from, {text: `Grupo ${groupName} salvo com sucesso nos arquivos... Caso você tenha enviado alguma mensagem, reenvie por favor 🔰`})
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(groupdbpath)) : undefined 

function setGp(index){
fs.writeFileSync(groupdbpath, JSON.stringify(index, null, 2) + '\n')}

function setObg(index){
fs.writeFileSync(configpath, JSON.stringify(index, null, 2) + '\n')}

//=======(ADMS/DONO/ETC..CONST)========\\

const whatIsPhone = info.key.id.length > 21 ? "Android 👤" : info.key.id.substring(0, 2) == '3A' ? "iPhone 🍎" : "Whatsapp Web 🌐"

const isIOS = whatIsPhone.toLowerCase().includes(`iphone`) ? true : false

const quoted = info.quoted ? info.quoted : seloctt

const isBot = info.key.fromMe ? true : false

const isOwner = numerodono.includes(sender) || isBot || isnit || issupre || ischyt || isSesc || isIDacc(sender)

dfndofc = setting.numerodono+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isSupremeOwner = (id = sender) => {
  if(nmrdn.includes(id) || nit.includes(id) || supre.includes(id) || chyt.includes(id) || sesc.includes(id)) return true
  return false
  }

const isAllOwner = (id = sender) => {
if(numerodono.includes(id) || nit.includes(id) || supre.includes(id) || chyt.includes(id) || sesc.includes(id)) return true
return false
}

const isAdmin = (id = sender) => {
if(groupAdmins.includes(id)) return true
return false
}

const isVip = isOnlyVip(sender) || (isGroup && isOnlyGroupVip(from))

const isGroupVip = (id = from) => {return isOnlyGroupVip(id)}

const isAllVip = (id = sender) => {
if(isOnlyVip(id) || isGroupVip(from)) return true
return false
}

const randomUser = isGroup ? groupMembers[alerandom(groupMembers.length)].id : nmrdn

const isBotGroupAdmins = groupAdmins.includes(botNumber) || isBot

const isGroupAdmins = groupAdmins.includes(sender) || DonoOficial || isOwner

const isVisualizar = obrigadoEXT.visualizarmsg

const isVerificado = obrigadoEXT.verificado

const isAudioMenu = obrigadoEXT.menu_audio

const isAntiPv2 = obrigadoEXT.antipv2

const isConsole = obrigadoEXT.consoleoff

const isBotoff = obrigadoEXT.botoff

const listanegraG = obrigadoEXT.listanegraG

const isAntiPv = obrigadoEXT.antipv

const isAnticall = obrigadoEXT.anticall

const isStopCmd = obrigadoEXT.stopcmdlist

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const MercadoPagoKey = dataMP.token

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const time_emoji = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_emoji > "00:00:00" && time_emoji < "05:00:00"){
var tempo_emoji = '🌑'
} if(time_emoji > "05:00:00" && time_emoji < "12:00:00"){
var tempo_emoji = '☀️'
} if(time_emoji > "12:00:00" && time_emoji < "18:00:00"){
var tempo_emoji = '🍃'
} if(time_emoji > "18:00:00"){
var tempo_emoji = '🌙'
}

const time_pro = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_pro > "00:00:00" && time_pro < "05:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "05:00:00" && time_pro < "12:00:00"){
var tempo_pro = 'um'
} if(time_pro > "12:00:00" && time_pro < "18:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "18:00:00"){
var tempo_pro = 'uma'
}

//============(FUNÇÕES)============\\

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isBanlinkgp = isGroup ? dataGp[0].banlinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isBanLinkHard = isGroup ? dataGp[0].banlinkhard : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const isAntiMembros = isGroup ? dataGp[0].soadm: undefined

const isAntiVisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isWelkom3 = isGroup ? dataGp[0].wellcome[2].bemvindo3 : undefined

const isWelkom4 = isGroup ? dataGp[0].wellcome[3].bemvindo4 : undefined

const isWelkom5 = isGroup ? dataGp[0].wellcome[4].bemvindo5 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

//const isAntiSpam = isGroup ? dataGp[0].antispam : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isAcceptGroup = isGroup ? dataGp[0].acceptGroup.active : undefined

const isAutoTranscricao = isGroup ? dataGp[0].autotranscricao : undefined

const isBlackCity = isGroup ? dataGp[0].modorpg : undefined

const isAntiPorno = isGroup ? dataGp[0].antiporno : undefined

const isModRent = obrigadoEXT.modoaluguel == true ? true : false

const isMsgPV = obrigadoEXT.msgpv == true ? true : false

const isChatOfc = from == obrigadoEXT.idchatofc ? true : false

const isPrivateChat = from == obrigadoEXT.idprivategp ? true : false

const sorteio = JSON.parse(fs.readFileSync("./operacao/sorteio.json"))

const TMGP = JSON.parse(fs.readFileSync("./operacao/TMGP.json"))

const novidades = JSON.parse(fs.readFileSync("./database/midia/data/novidades.json"))

const gbmsg = JSON.parse(fs.readFileSync("./database/gbmsg.json"))

const audios = JSON.parse(fs.readFileSync("./database/midia/data/audios.json"))

const adivinharnmr = JSON.parse(fs.readFileSync("./jogos/adivinharnmr.json"))

const { Aki } = require('aki-api')

const jogo = { jogador: '', now: true }

//=======================================\\

const enviar = {
  espere: `${enviarmen}`,
  successo: '️❬ ✔ ❭ Sucesso 🖤',
  levelon: '❬ ✔ ❭ *leveling* *ativado*',
  leveloff: '❬ X ❭  *leveling* *desativado*',
  levelnoton: '❬ X ❭ *leveling não ativado*',
  levelnol: '*error* 0 °-°',
  adsatc: `[❗] É necessário ativar o ADs System neste grupo primeiramente... Use ${prefix}startads ❌`,
  error: {
    stick: '*falhou, tente novamente ^_^*',
    Iv: 'Link invalido ☹️'
  },
  msg: {
  grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
  vip: '[❗] ESTE COMANDO É SÓ PARA *USUÁRIOS VIP*',
  advip: '[❗] ESTE COMANDO REQUER O MOD *ADVENCED VIP*',
  mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${NickDono}*`,
  banido: '[❗] Você está proibido de usar os comandos do bot... Entre em contato com meu dono para saber o por que ❌' ,
  dono: '[❗] Este comando está restrito ao uso do meu dono ❌',
  donoblk: `[❗] Este comando só pode ser usado pelo ${NickDono}, meu dono ❌`,
  adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
  Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
  modobz: `[❗] Este comando só pode ser usado com as brincadeiras ativadas... Use ${prefix}modozoeira ❌`,
  consulta: '[⚙️] consultando dados, aguarde um momento❗',
  notusu: `[❗] ID do usuário não encontrado ou inexistente ❌`,
  pvnotvip: "[ ❗ ] o uso desde recurso no PV está liberado apenas para usuários VIP ❌",
  modonsfw: `[ ❗ ] Este comando só pode ser usado com o nsfw ativo... Para ativar, use ${prefix}modonsfw`
  },
  stopcmd: {
    isblock: `Este comando JÁ está bloqueado...`,
    notblock: `Este comando NÃO está bloqueado...`
  },
  shield: {
    gp: {
      true: `[❕] Este usuário já está protegido ao envio de links de grupo ✔`,
      false: `[❗] Este usuário não está na lista de protegidos do anti link de grupo ❌`
    },
    hard: {
      true: `[❕] Este usuário já está protegido ao envio de links em geral ✔`,
      false: `[❗] Este usuário não está na lista de protegidos do anti link hard ❌`
    }
  },
  rpg: {
    ativar: `[❗] é necessário ativar o RPG primeiro... Use ${prefix}modorpg ♨️`,
    registrar: `${tempo} ${pushname}, vejo que você não está registrado na Black City.. Caso queira entrar, use o comando ${prefix}rgbc, para assim usar destes sistemas 😉`,
    existrg: `Seu registro foi encontrado na Black City... Olhe o comando ${prefix}saldo`,
    notcdd: `[❗] Não há cidades disponíveis ❌`,
    notexistcity: `Ops, a cidade "#city#" não está inclusa na database do RPG... Olhe no ${prefix}cidadesrpg para saber quais cidades estão disponíveis para registro 😀`,
    citylimit: `[❗] Esta cidade já está com a capacidade máxima de moradores... Procure outra cidade ♨️`,
    welcome: `${tempo} @#usu#, seu registro foi efetuado com sucesso... Bem vindo (a) a Black City 🥰`
  }
}

var downoff = 'Sistema apresenta instabilidades... Pfvr, volte mais tarde.'

var downon = 'Sistema cancelou a operação, devido a demora na resposta...'

var semfoto = `https://storageblack.cloud/midia/1739312972663.gif`

//==========(VERIFICADO)===============\\

//var seloctt = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}

const allQuotedCtt = require("./javascript/quoted.js")

if(isVerificado) {
//verificado whatsapp
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`}}}
//selo contato
var seloctt = allQuotedCtt(sender)
//selo black
var seloblk = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": `👑 BLACK DOMINAH 👑`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;👑 BLACK DOMINAH 👑,;;;\nFN:👑 BLACK DOMINAH 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
} else {
var selo = info
var seloctt = info
var seloblk = info
}

const luziaquoted = {
  key: {
      fromMe: false,
      participant: "5511972553036@s.whatsapp.net",
      remoteJid: "5511972553036@s.whatsapp.net"
  },
  message: {
      conversation: "Qualquer coisa aqui"
  }
};

const selofigu = {
  "key": {
      "participant": "13135550002@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false
  },
  "message": {
            "stickerMessage": {
       "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m238/up-oil-image-62aa701e-5dc9-4eb5-ada1-878b7d927557?ccb=9-4&oh=01_Q5AaII97gzLtf0_u5gTOVZk5QIED6EcJA_eDzQoiu57RKX7A&oe=673FC1D5&_nc_sid=e6ed6c&mms3=true",
       "fileSha256": "Lp3ZlLlN6VBkJOooPIW4LWX/bRA7FWuKYQDEtYRN9x8=",
       "fileEncSha256": "n1IPB5Iu0Bmmtvo8Dvbv2BtSEv9IN0ZFlzVQ1ll0kuE=",
       "mediaKey": "5Jsi0hX9YBIh0kwh6TEssV7xfbZ2IXr0ulZtZwAbhyM=",
       "mimetype": "image/webp",
       "height": 64,
       "width": 64,
       "directPath": "/o1/v/t62.7118-24/f1/m238/up-oil-image-62aa701e-5dc9-4eb5-ada1-878b7d927557?ccb=9-4&oh=01_Q5AaII97gzLtf0_u5gTOVZk5QIED6EcJA_eDzQoiu57RKX7A&oe=673FC1D5&_nc_sid=e6ed6c",
       "fileLength": "13254",
       "mediaKeyTimestamp": "1729647797",
       "isAnimated": false,
       "stickerSentTs": "0",
       "isAvatar": false,
       "isAiSticker": false,
       "isLottie": false
    }
 },
 "expiration": 0,
 "ephemeralSettingTimestamp": "1728440334",
 "disappearingMode": {
    "initiator": "CHANGED_IN_CHAT",
    "trigger": "UNKNOWN",
    "initiatedByMe": false
  },
  "contextInfo": {
      "stanzaId": "2730281AD5CD6B707107BA482442DDB3",
      "participant": "13135550002@s.whatsapp.net",
      "quotedMessage": {}
  }
};

const oncepic = { 
  "key": {
  "participant": "13135550002@s.whatsapp.net", 
  "remoteJid": "status@broadcast",
      "fromMe": false,
      
  },
      "message": {
          "imageMessage": {
              "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m269/up-oil-image-5325eba9-092b-458f-8b41-09910284162a?ccb=9-4&oh=01_ASCM7MgNSTAPCq0qBtSDz1-wQMn-TfPnm7q5CATtlSaicQ&oe=66315293&_nc_sid=000000&mms3=true",
              "viewOnce": true
          }
      }
}

const selocttmeta = {
  "key": {
      "participant": "13135550002@s.whatsapp.net",
      "remoteJid": "status@broadcast", 
      "fromMe": false, 
  },
  "message": {
      "contactMessage": {
          "displayName": "Meta AI", 
          "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Meta AI;;;\nFN:Meta AI\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, 
          "contextInfo": {
              "forwardingScore": 1,  
              "isForwarded": true  
          }
      }
  }
};

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = convertUserID(info.message?.extendedTextMessage?.contextInfo?.participant)

const menc_jid = convertUserID(args?.join(" ").replace("@", "") + (args?.join(" ").replace("@", "").length > 13 ? "@lid" : "@s.whatsapp.net"))

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid.map(infojid => (convertUserID(infojid)))

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const all_type_number = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

const reverse = (texto) => {
  return texto.split("").reverse().join("")
}

const allCases = JSON.parse(fs.readFileSync('./database/midia/data/cases.json'))

function remover(id, usu) {
astaup.groupParticipantsUpdate(id, [usu], "remove")}

function promover(id, usu) {
astaup.groupParticipantsUpdate(id, [usu], "promote")}

function rebaixar(id, usu) {
astaup.groupParticipantsUpdate(id, [usu], "demote")}

function deletar(id, msg) {
  if(msg != undefined) {
    if(id == sender) {
      msgid = info.key.id
      usu = sender
    } else {
      msgid = info.message.extendedTextMessage.contextInfo.stanzaId
      usu = id
    }
  } else {
    msgid = msg
    usu = id
  }
  astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: msgid, participant: usu}})
}

function aceitar(id, usu) {
astaup.groupRequestParticipantsUpdate(id, [usu], "approve")}

function recusar(id, usu) {
astaup.groupRequestParticipantsUpdate(id, [usu], "reject")}

function abrirgp(id) {astaup.groupSettingUpdate(id, 'not_announcement')}

function fechargp(id) {astaup.groupSettingUpdate(id, 'announcement')}

/*function writing(id = from) {astaup.sendPresenceUpdate("composing", id)}

function talking(id = from) {astaup.sendPresenceUpdate("recording", id)}*/

async function wppuser(user) {
const [result] = await astaup.onWhatsApp(user)
if(result == undefined) return reply(`[❗] erro, o mod "${user}" não foi encontrado no whatsapp ❌`)}

async function carregamento(id, txt, hehe) {
  var download = [
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
    `${txt.length > 0 ? "~_*© black system*_~\n" : ""}𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
    ]
  let { key } = await astaup.sendMessage(id, {text: `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`}, {quoted: hehe})
  await sleep(2000)
  for(let i = 0; i < download.length; i++) {
    await astaup.sendMessage(id, {text: download[i], edit: key }, {quoted: hehe})
  }
}

const barrinha = (parte, todo, value = true) => {
  nmr = ((parte / todo) * 10).toFixed(0)
  pc = ((parte / todo) * 100).toFixed(1)
  return `〘${"█".repeat(nmr) + "▒".repeat(10 - nmr)}〙${value == true ? pc+"%" : value == false ? "" : ""}`
}

const progresso = (parte, todo, value = true) => {
  nmr = ((parte / todo) * 10).toFixed(0)
  pc = ((parte / todo) * 100).toFixed(1)
  return `${value == true ? "『 "+pc+"% 』" : value == false ? "" : ""}[${"█".repeat(nmr) + "▒".repeat(10 - nmr)}]`
}

const largeNumber = (value) => {
  if(Number(value) < 0) return "O número precisa ser ≥ 0"
  nmr = `${Number(value).toFixed(0)}`
  if(nmr.length >= 4) {
    const existPoint = (nmr) => {
      if(Number(nmr) !== 0) return "." + `${nmr}`
      return ``
    }
    if(nmr.length >= 4) txt = nmr.slice(0, (nmr.length - 3)) + existPoint(nmr.slice((nmr.length - 3), (nmr.length - 2))) + "K"
    if(nmr.length >= 7) txt = nmr.slice(0, (nmr.length - 6)) + existPoint(nmr.slice((nmr.length - 6), (nmr.length - 5))) + "M"
    if(nmr.length >= 10) txt = nmr.slice(0, (nmr.length - 9)) + existPoint(nmr.slice((nmr.length - 9), (nmr.length - 8))) + "B"
    if(nmr.length >= 13) txt = nmr.slice(0, (nmr.length - 12)) + existPoint(nmr.slice((nmr.length - 12), (nmr.length - 11))) + "T"
  } else { txt = nmr }
  return txt
}

const permuteFigPackName = (secondtxt, usu = sender) => {
  if(isOnlyVip(usu)) {
    if(isJsonIncludes(figname, usu)) {
      AB = figname.map(i => i.id).indexOf(usu)
      if(isJsonIncludes(figname[AB].fig, "pack")) {
        BC = figname[AB].fig.map(i => i.mod).indexOf("pack")
        return figname[AB].fig[BC].pack
      } else return secondtxt
    } else return secondtxt
  } else return secondtxt
}

const permuteFigAuthorName = (secondtxt, usu = sender) => {
  if(isOnlyVip(usu)) {
    if(isJsonIncludes(figname, usu)) {
      AB = figname.map(i => i.id).indexOf(usu)
      if(isJsonIncludes(figname[AB].fig, "author")) {
        BC = figname[AB].fig.map(i => i.mod).indexOf("author")
        return figname[AB].fig[BC].author
      } else return secondtxt
    } else return secondtxt
  } else return secondtxt
}

const divisores = (base) => {
  nmr = Number(base)
  caixa = []
  for(a = 0; a < nmr; a++) {
    for(b = 0; b < nmr; b++) {
      if(((a + 1) * (b + 1)) == nmr) caixa.push(a + 1)
    }
  }
  return caixa
}

const raiz = (base) => {
  nmr = Number(base)
  meta = nmr / 2
  total = 0
  for(i = 1; i < (meta + 1); i++) {
    if((i*i) == nmr) total += 1
  }
  if(total > 0) return true
  return false
}

const findRaiz = (base) => {
  nmr = Number(base)
  if(raiz(nmr)) {
    meta = nmr / 2
    caixa = []
    for(i = 1; i < (meta + 1); i++) {
      if((i*i) == nmr) caixa.push(i)
    }
    return caixa[0]
  } else return "O número não tem raiz"
}

const porCentPorCent = (txt1, txt2, nmr = 1) => {
  nmr1 = Number(txt1)
  nmr2 = Number(txt2)
  return Number((nmr1 * nmr2) / 100).toFixed(nmr)
}

const existCmd = (txt) => {
  cmd = txt.toLowerCase()
  nmr = 0
  for(i of allCases) {
    if(cmd == i) nmr += 1
  }
  if(nmr > 0) return true
  return false
}

const getSimilarity = require(`./javascript/similaridade.js`)

const similarityCmd = (txt) => {
  getsmlrt = getSimilarity(allCases, txt)
  if(rmLetras(getsmlrt.nome).includes(`nao encontrado`)) return [{comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}]
  return [{comando: prefix+getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1)}]
}

const permuteNumberEmoji = (nmr) => {
  nt = String(nmr)
  nv = ``
  for(i of nt) {
    if(Number(i) == 0) np = `0️⃣`
    if(Number(i) == 1) np = `1️⃣`
    if(Number(i) == 2) np = `2️⃣`
    if(Number(i) == 3) np = `3️⃣`
    if(Number(i) == 4) np = `4️⃣`
    if(Number(i) == 5) np = `5️⃣`
    if(Number(i) == 6) np = `6️⃣`
    if(Number(i) == 7) np = `7️⃣`
    if(Number(i) == 8) np = `8️⃣`
    if(Number(i) == 9) np = `9️⃣`
    nv += np
  }
  return nv
}

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

if(!isCmd && info.key.fromMe) return

const reply = (texto) => {
astaup.sendMessage(from, { text: texto }, {quoted: seloctt}).catch(e => {
return reply("Erro..");
})
}

function replyJson(txt) {
return reply(JSON.stringify(txt, null, 2))}

//if(info && isPrivateChat && isOwner) {replyJson(info.message)}

const privateCmd = (id, pc, cmd, porcentagem) => {
notcmd = `╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕\t\t\t❌ C̷O̷M̷M̷A̷N̷D̷ N̷O̷T̷ F̷O̷U̷N̷D̷ ❌
╽╟ • usuário ~> ${pushname}
╽╟ • ᴄᴏᴍᴀɴᴅᴏ『 ${pc} 』ɴãᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ
╽╟ • comando ꜱᴜɢᴇʀɪᴅᴏ ~> ${cmd}
╽╟ • ɢʀᴀᴜ ᴅᴇ ꜱᴇᴍᴇʟʜᴀɴçᴀ ~> ${porcentagem}%
╽╟ • ᴏʟʜᴇ ɴᴏ『 ${prefix}menu 』
╽║\t\t\t\tᴩᴀʀᴀ ꜱᴀʙᴇʀ ᴍᴀɪꜱ...
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
return notcmd
}

const shuffle = (XXX) => {
palavra = `${XXX} `
armax = []
for(i = 0; i < palavra.length; i++) {
armax.push({letra: palavra.split(palavra.slice(i+1))[0].slice(i)})
}
pross = ""
total_armax = armax.length
for(a = 0; a < total_armax; a++) {
alex = Math.floor(Math.random()*armax.length)
pross += `${armax[alex].letra}`
armax.splice(alex, 1)
}
return pross
}

const morse = (XXX) => {
palavra = `${XXX} `
armax = []
for(i = 0; i < palavra.length; i++) {
armax.push({letra: palavra.split(palavra.slice(i+1))[0].slice(i).replace("ã", "a").replace("á", "a").replace("ê", "e").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ô", "o").replace("ú", "u")})
}
pross = ""
total_armax = armax.length
for(a = 0; a < total_armax; a++) {
alex = armax[a].letra.toLowerCase()
if(alex == " ") pross += ` `
if(alex == "a") pross += `- .-`
if(alex == "b") pross += `- -...`
if(alex == "c") pross += `- -.-.`
if(alex == "d") pross += `- -..`
if(alex == "e") pross += `- .`
if(alex == "f") pross += `- ..-.`
if(alex == "g") pross += `- --.`
if(alex == "h") pross += `- ....`
if(alex == "i") pross += `- ..`
if(alex == "j") pross += `- .---`
if(alex == "k") pross += `-.-.`
if(alex == "l") pross += `– .-..`
if(alex == "m") pross += `– --`
if(alex == "n") pross += `–-.`
if(alex == "o") pross += `– ---`
if(alex == "p") pross += `– .--.`
if(alex == "q") pross += `– --.-`
if(alex == "r") pross += `– .-.`
if(alex == "s") pross += `– ...`
if(alex == "t") pross += `–-`
if(alex == "u") pross += `--..`
if(alex == "v") pross += `– …-`
if(alex == "w") pross += `--..-.`
if(alex == "x") pross += `-.- .. .-..  --.`
if(alex == "y") pross += `–.---`
if(alex == "z") pross += `–--..`
}
return pross
}

const romanN = (txt) => {
  nmr = Number(txt) ? txt : Number(txt)
  total = `${nmr}`
  if(nmr > 1 && !total.includes(`.`)) {
    if(total.length == 1) {
      if(nmr <= 3) alg = `I`.repeat(nmr)
      if(nmr == 4) alg = `IV`
      if(nmr == 5) alg = `V`
      if(nmr >= 6 && nmr != 9) alg = `V`+`I`.repeat(nmr-5)
      if(nmr == 9) alg = `IX`
    }
    if(total.length == 2) {
      dez = Number(total.slice(0, 1))
      um = Number(total.slice(1))
      if(dez <= 3) alg = `X`.repeat(dez)
      if(dez == 4) alg = `XL`
      if(dez == 5) alg = `L`
      if(dez >= 6 && dez != 9) alg = `L`+`X`.repeat(dez-5)
      if(dez == 9) alg = `XC`
      if(um <= 3) alg += `I`.repeat(um)
      if(um == 4) alg += `IV`
      if(um == 5) alg += `V`
      if(um >= 6 && um != 9) alg += `V`+`I`.repeat(um-5)
      if(um == 9) alg += `IX`
    }
    if(total.length == 3) {
      cem = Number(total.slice(0, 1))
      dez = Number(total.slice(1, 2))
      um = Number(total.slice(2))
      if(cem <= 3) alg = `C`.repeat(cem)
      if(cem == 4) alg = `CD`
      if(cem == 5) alg = `D`
      if(cem >= 6 && cem != 9) alg = `D`+`C`.repeat(cem-5)
      if(cem == 9) alg = `CM`
      if(dez <= 3) alg += `X`.repeat(dez)
      if(dez == 4) alg += `XL`
      if(dez == 5) alg += `L`
      if(dez >= 6 && dez != 9) alg += `L`+`X`.repeat(dez-5)
      if(dez == 9) alg += `XC`
      if(um <= 3) alg += `I`.repeat(um)
      if(um == 4) alg += `IV`
      if(um == 5) alg += `V`
      if(um >= 6 && um != 9) alg += `V`+`I`.repeat(um-5)
      if(um == 9) alg += `IX`
    }
    if(total.length > 3) {
      mil = Number(total.slice(0, total.length-3))
      cem = Number(total.slice(total.length-3, total.length-2))
      dez = Number(total.slice(total.length-2, total.length-1))
      um = Number(total.slice(total.length-1))
      alg = `M`.repeat(mil)
      if(cem <= 3) alg += `C`.repeat(cem)
      if(cem == 4) alg += `CD`
      if(cem == 5) alg += `D`
      if(cem >= 6 && cem != 9) alg += `D`+`C`.repeat(cem-5)
      if(cem == 9) alg += `CM`
      if(dez <= 3) alg += `X`.repeat(dez)
      if(dez == 4) alg += `XL`
      if(dez == 5) alg += `L`
      if(dez >= 6 && dez != 9) alg += `L`+`X`.repeat(dez-5)
      if(dez == 9) alg += `XC`
      if(um <= 3) alg += `I`.repeat(um)
      if(um == 4) alg += `IV`
      if(um == 5) alg += `V`
      if(um >= 6 && um != 9) alg += `V`+`I`.repeat(um-5)
      if(um == 9) alg += `IX`
    }
    return alg
  } else return `erro`
}

function detectarHost() {
  if(fs.existsSync('/data/data/com.termux/files/home')) return 'Termux';
  if(fs.existsSync('/etc/cloud') || fs.existsSync('/etc/init.d') || os.hostname().includes('vps')) return 'VPS';
  if(process.env.PTERODACTYL) return 'Pterodactyl';
  const platform = os.platform();
  if(platform === 'win32') return 'PC (Windows)';
  if(platform === 'linux' && !fs.existsSync('/etc/cloud')) return 'PC (Linux)';
  return 'Ambiente desconhecido';
}

const convertNumberInMonth = (pser) => {
  allmes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  return allmes[Number(pser) - 1]
}

const realtime = `${sendHours('HH')} hora${Number(sendHours('HH')) !== 1 ? "s" : ""}, ${sendHours('mm')} minuto${Number(sendHours('mm')) !== 1 ? "s" : ""} e ${sendHours('ss')} segundo${Number(sendHours('ss')) !== 1 ? "s" : ""} do dia ${sendHours('DD')} de ${convertNumberInMonth(sendHours('MM'))} de ${sendHours('YYYY')}`

const envPV = (texto) => {
astaup.sendMessage(sender, {text: texto})
}

const envImagePV = (link, mark) => {
astaup.sendMessage(sender, {image: {url: link}}, {quoted: mark})
}

const sendSticker = (from, filename, info) => {
astaup.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

async function sendContact(id, nome1, nome2, nmr) {
nmr1 = `${nmr.split('@')[0].replace(new RegExp("[()+-/ +/]", "gi"), "")}`
nmr2 = "+" + nmr1.slice(0, 2) + " " + nmr1.slice(2, 4) + " " + nmr1.slice(4, nmr1.length - 4) + "-" + nmr1.slice(nmr1.length - 4, nmr1.length)
vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + `FN: ${nome1}\n` // full name
            + `ORG: ${nome2};\n` // the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=${nmr1}:${nmr2}\n` // WhatsApp ID + phone number
            + 'END:VCARD'
await astaup.sendMessage(id, {contacts: {  displayName: nome1,  contacts: [{ vcard }] }})
}

async function sendForwardingMessage(id, texto, hehe, encaminhado = 999) {
  menc = []
  for(i of texto.split(`\n`).join(` `).split(` `)) {
    if(i.includes(`@`)) menc.push(identArroba(i))
  }
  astaup.sendMessage(id, {text: texto, contextInfo: {mentionedJid: menc, forwardingScore: encaminhado, isForwarded: true}}, {quoted: hehe})
}

async function sendUrlText(id, texto, title, desc, foto, link, hehe) {
menc = []
sp = texto.split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
sendButton(id, {image: {url: foto}, caption: texto, footer: title, mentions: menc}, astaup, [{type: 'copy_url', text: desc, url: link}], hehe)
//astaup.sendMessage(id, {text: texto, contextInfo: {mentionedJid: menc, externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(foto), mediaType: 1, showAdAttribution: true, sourceUrl: link}}}, {quoted: hehe})
}

async function sendUrlText2(id, texto, title, desc, foto, link, hehe) {
astaup.sendMessage(id, {image: {url: foto}, caption: texto, contextInfo: {forwardingScore: 10, isForwarded: true}}, {quoted: hehe})
}

async function sendUrlDoc(id, txt, tipo, titulo, tamanho, nome, desc, thumb, link, hehe) {
menc = []
sp = txt.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
astaup.sendMessage(id, {image: {url: thumb}, caption: txt, contextInfo: {mentionedJid: menc, forwardingScore: 10, isForwarded: true}}, {quoted: hehe})
}

function sendChannelText(id, txt, channel, name, hehe) {
menc = []
sp = txt.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
astaup.sendMessage(id, {text: txt, mentions: menc, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel, newsletterName: name}}}, {quoted: hehe})}

function sendChannelImage(id, img, txt, channel, hehe) {
menc = []
sp = txt.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
astaup.sendMessage(id, {image: {url: img}, caption: txt, mentions: menc, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: channel, newsletterName: name}}}, {quoted: hehe})}

const sendVideo = (id, link, desc, hehe) => {
  menc = []
  sp = desc.split(`\n`).join(` `).split(` `)
  for(i of sp) {
    if(i.includes(`@`)) menc.push(identArroba(i))
  }
  return astaup.sendMessage(id, {video: {url: link}, caption: desc, mentions: menc}, {quoted: hehe})
}

const sendAudio = (id, link, tipo, hehe) => {
  return astaup.sendMessage(id, {audio: {url: link}, mimetype: tipo}, {quoted: hehe})
}

function sendChannelAudio(link, id = from) {
  astaup.sendMessage(id, {
    audio: {url: link},
    mimetype: `audio/mpeg`,
    contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: blackchannel,
        newsletterName: channel.name
      }
    }
  }, {quoted: seloctt})
}

const sendImage = (id, ytb, cap, hehe) => {
menc = []
sp = cap.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
astaup.sendMessage(id, {image: {url: ytb}, caption: cap, mentions: menc}, {quoted: hehe})
}

const sendMess = (hehe, ytb, yah) => {
menc = []
sp = ytb.split(`\n`).join(` `).split(` `)
for(i of sp) {
if(i.includes(`@`)) menc.push(identArroba(i))
}
astaup.sendMessage(hehe, {text: ytb, mentions: menc}, {quoted: yah})
}

const sendMenu = (cap) => {
astaup.sendMessage(from, {image: {url: logoslink.logo}, caption: cap, mentions: [sender]}, {quoted: seloctt})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? astaup.sendMessage(from, {text: teks.trim(), mentions: memberr}) : astaup.sendMessage(id, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+(String(parseInt(zn.split('@')[1])).length > 13 ? '@lid' : '@s.whatsapp.net'))
}}
astaup.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+(String(parseInt(zn.split('@')[1])).length > 13 ? '@lid' : '@s.whatsapp.net'))
}}
astaup.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async(emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
astaup.sendMessage(from, reactionMessage)
}

const verificarN = async(sla) => {
  const [result] = await astaup.onWhatsApp(sla)
  if(result == undefined) return {existsNumber: false, message: `O número "${sla.split("@")[0]}" (${sla}) não é existente no whatsapp`}
  return {existsNumber: true, message: `O número "${sla.split("@")[0]}" foi encontrado com sucesso no whatsapp com sucesso com ID: ${sla}`}
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !isOwner && !info.key.fromMe) {
  if(menc_jid2?.length >= groupMembers.length - 1) {
    if(isGroupAdmins) return reply(`Ala, usando marcação de imune lixo kkkkk tua sorte é que tu é adm 👀`)
    astaup.sendMessage(from, {text: "Acha mesmo que você vai sair marcando todo mundo com esse imune lixo aí ? kkk sinta o poder do BAN 🗣️"})
    astaup.sendMessage(from, {audio: {url:'./database/midia/audios/ban.m4a'}, mimetype: 'audio/mp4', ptt:true})
    astaup.groupParticipantsUpdate(from, [sender], "remove")
    setTimeout(() => {
      astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
    }, 1500)
  }
}

if(info?.message?.groupStatusMentionMessage) { 
  if(isOwner) return reply('Menção de status é proibida aqui neste grupo, porém, você é meu dono. não irei te remover 🥰')
  if(isGroupAdmins) return reply('Mencionar este grupo nos status é proibido aqui. Mas você é um admin, então não irei te punir.')
  mention(`Vai mencionar status na casa da tua mãe!! 🤬`)
  await sleep(600)
  astaup.groupParticipantsUpdate(from, [sender], "remove");
  setTimeout(() => {
    astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
  }, 1500)
}

const enviarfigu = async (figu, tag) => {
astaup.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack =`${pushname}`
var author2 = `${NomeDoBot}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(astaup, from, owgi, info, {packname: permuteFigPackName(pack), author: permuteFigAuthorName(author2)})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack =`${pushname}`
var author2 = `${NomeDoBot}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(astaup, from, owgi, info, {packname: permuteFigPackName(pack), author: permuteFigAuthorName(author2)})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

const semana = sendHours("dddd")

if(isOwner && budy.includes("reiniciar-black") || info.key.fromMe && budy.includes("reiniciar-black")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./start.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

//========================================\\

if(isGroup) {
  if(!isJsonIncludes(adv, from)) addGroupInAdv(from)
}

//executores de ambas as funções
rentContSystem(astaup, sendMess, tempo);

autoFuncAFK(astaup, info);

autoAFK();

expirarAFK();

cardTime(astaup, tempo);

resetStar();

restartQRfunc(astaup);

advFunc();

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !isOwner) return

if(isGroup && isCmd && isAntiMembros && !isOwner && !isGroupAdmins) return

if(isBotoff && !isOwner) return

let isCmdKey = Array(`avalie`, `avaliar`, `comentar`, `comentario`, `alugar`, `aluguel`, `recarga`, `recarregar`, `rp`, `me`, `buygp`, `buycort`, `buykeygp`, `buyvip`, `buyvipgp`, `buycard`, `buycardxp`, `reembolsar`, `loja`, `store`, `lojalista`, `storelist`, `transferirgp`).some(item => item === command)

if(isCmd && isCmdKey) registrarUsuInVirtualBalance(sender)

bannedExpired()

//if(isCmd && isBanned(sender)) isBannedMessageUsu(from, sender, astaup, `[❗] Atenção @${sender.split("@")[0]}, você está impedido de usar o bot... Caso tenha alguma dúvida, chame meu dono para saber o pq 📵`)

if(isBanned(sender)) return

if(isGroup && isCmd && !isOwner && !isCmdKey && isModRent) {
  if(!isSaveGroup(from)) addGroupInRent(from)
  gp = getSaveGroup(from)
  if(!gp.validado && !isGroupInRent(from)) {
    if(gp.limite <= 1) {
      rmGroupInRent(from)
      reply(`Visto que os senhores não se vêem interessados em adquirir uma key, vou indo...`)
      await sleep(3000)
      return astaup.groupLeave(from)
    } else {
      gp.limite -= 1
      saveGroupsRent()
      return sendButton(from, {text: `✋🏽😳🤚🏽 Ops, este grupo não está registrado no sistema... Para a liberação do mesmo, é necessário alugar o bot para o seu grupo.
Clique no botão abaixo e venha fazer parte da equipe tendo acesso a inúmeros comandos e brincadeiras por um preço bem acessível 😉`, footer: `Veja no botão abaixo a tabela de valores de aluguel:`}, astaup, [
  {type: 'cmd', text: `💰 𝙑𝘼𝙇𝙊𝙍𝙀𝙎`, command: prefix+'alugar'},
  {type: 'cmd', text: `💸 𝘼𝙇𝙐𝙂𝘼𝙍`, command: prefix+'buykeygp'},
  {type: 'copy_url', text: `⚜ 𝘿𝙊𝙉𝙊`, url: 'https://wa.me/'+nmrdn.split('@')[0]}
      ], info)
    }
  }
}

if(isGroup && !isOwner && isModRent && !existKeyRentSystem(body) && !isJsonIncludes(grupos, from) && !isJsonIncludes(aluguel, from)) return

if(isGroup && isCmd) {
  caixa = []
  for(i of allCases) {
    if(type == "conversation" && command == i) caixa.push(i)
  }
  if(caixa.length > 0) {
    var contadorcmd = 0
    for(c of rankcmd) {
      if(caixa[0] == c.cmd) {
        c.usado += 1
        saveJSON(rankcmd, "./database/rankcmd.json")
        contadorcmd += 1
      }
    }
    if(contadorcmd <= 0) {
      rankcmd.push({cmd: caixa[0], usado: 1})
      saveJSON(rankcmd, "./database/rankcmd.json")
    }
  }
}

if(isGroup) {
  addMessageInSM({astaup: astaup, from: from, tempo: tempo, pushname: pushname, prefix: prefix}, sender)
  /*if(isLevelingOn) {
    finishUsuRankTemp(astaup, from, sender, prefix, pushname, info)
    addUsuInRank(sender, type)
    if(isCmd && existCmd(command)) addCommandInUsuLevelRank(sender, command)
  }*/
}

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
astaup.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

const sendStickerFromImageLink = async(id, image, packname, author, hehe) => {
  img = await prepareWAMessageMedia({image: image}, {upload: astaup.waUploadToServer})
  getfile = await getFileBuffer(img, `image`)
  envst = await sendImageAsSticker(astaup, from, getfile, hehe, {packname: packname, author: author})
  DLT_FL(envst)
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !isOwner && !isnit && getComandoBlock(from).includes(command)) return reply('⚠️ *COMANDO BLOQUEADO* ⚠️')

////FIMMMMMMMMM/////
if(isConsole) {
if(isGroup && info.message?.reactionMessage?.text) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender))}
╽║
╽╟ • grupo ~> ${isGroup ? colors.blue(groupName) : colors.red(`"privado"`)}
╽║
╽╟ • reação ~>『 ${info.message.reactionMessage.text} 』
┕╨${"⚋".repeat(44)}┚
`))
} else if(isGroup && !isCmd) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender))}
╽║
╽╟ • grupo ~> ${colors.blue(groupName)}
╽║
╽╟ • tipo ~> ${colors.white(type == "stickerMessage" ? `"figurinha"` : type == "documentMessage" ? `"documento"` : type == "locationMessage" ? `"localização"` : type == "audioMessage" ? `"áudio"` : type == "videoMessage" ? `"vídeo"` : type == "imageMessage" ? `"imagem"` : `"mensagem"`)}
┕╨${"⚋".repeat(44)}┚
`))
} else if(isCmd && !isGroup) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender))}
╽║
╽║『 ${colors.red("privado")} 』
╽║
╽╟ • comando ~> ${colors.white(prefix+command)}
┕╨${"⚋".repeat(44)}┚
`)) 
} else if(isCmd && isGroup) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender))}
╽║
╽╟ • grupo ~> ${colors.blue(groupName)}
╽║
╽╟ • comando ~> ${colors.white(prefix+command)}
┕╨${"⚋".repeat(44)}┚
`))
} else {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(sender.includes(`status`) ? `status` : addNumberMais(sender))}
╽║
╽║『 ${colors.red("privado")} 』
┕╨${"⚋".repeat(44)}┚
`))
}
}

//======(JOGO-DA-VELHA)=======(Função)===\\

async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./jogos/velha/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./jogos/velha/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./jogos/velha/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./jogos/velha/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;

astaup.sendMessage(from, {text: chatWon, mentions: [identArroba(winnerJID)]}, {quoted: seloctt,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./jogos/velha/db/" + from + ".json")) {
DLT_FL("./jogos/velha/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO... 🕹️*

*⚠️ JOGADORES DEMORARAM MUITO ⚠️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
DLT_FL(`./jogos/velha/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatMove);
}
} 
} 
}

//=================================\\

joguinhodavelha()

if(isGroup && !isGroupAdmins && !isOwner && info?.message?.requestPaymentMessage && isBotGroupAdmins) {
  fechargp(from)
  await sleep(1500)
  remover(from, sender)
  await sleep(2000)
  for(i = 0; i < 5; i++) {
    await sleep(500)
    sendMess(from, `${`\t`.repeat(10)}\n${i == 4 ? "LIMPEZA CONCLUÍDA 🗑️" : ""}`.repeat(50))
  }
  await sleep(1500)
  abrirgp(from)
}

if(isGroup) {
  notGroupRegisteredSALGP(from);
  notGroupRegisteredSALHARD(from);
}

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
  if(Procurar_String.includes("chat.whatsapp.com/")){
    if(isBot) return 
    link_dgp = await astaup.groupInviteCode(from)
    if(Procurar_String.match(link_dgp)) return reply(`Como esse é o link do nosso grupo, não irei remover... Você deu sorte dessa vez 😰`)
    if(!JSON.stringify(groupMembers).includes(sender)) return
    function delgp() {astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}
    //aqui começa o escudo anti link
    if(isShieldGPuser(from, sender)) {
      pessoa = getShieldGPuser(from, sender)
      isInfinity = pessoa.infinito
      if(isInfinity) {
        delgp()
        await sleep(2000)
        return sendMess(from, `Sem links pfvr ${pushname}...`)
      } else {
        if(pessoa.quant > 0) {
          pessoa.quant -= 1
          saveSALGP();
          await sleep(2000)
          nmr = getShieldGPuser(from, sender).quant + 1
          return sendMess(from, `Anti link GP está ativado ${pushname}... Pra sua sorte, você ainda tem direito a enviar +${nmr} link${nmr != 1 ? `s` : ``} 🥰`)
        } else {
          rmShieldGP(from, sender)
          delgp()
          await sleep(1000)
          remover(from, sender)
          await sleep(1000)
          return sendMess(from, `Suas chances acabaram ${pushname}... Falta de aviso não foi 😪`)
        }
      }
    } else if(!isBanlinkgp) {
      delgp()
      await sleep(1500)
      addAdv(from, sender, `envio de link de grupo`)
      if(isLimitAdvUsu(from, usu)) {
        rmAdv(from, sender, `all`)
        astaup.sendMessage(from, {text: `[❗] Você não me deu escolha @${sender.split("@")[0]}... Por desacato a autoridade, irei te aplicar a devida punição 💢`, mentions: [sender]})
        await sleep(1000)
        return remover(from, sender)
      } else {
        nmr = getAdvQuantTotalUsu(from, sender)
        if(nmr == 1) return astaup.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, é terminantemente proibido o envio de links neste grupo... Por sorte, o sistema de ban está desativado, mas isso não lhe isenta de ser advertido 💢`, mentions: [sender]})
        return astaup.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, você foi advertido ${nmr} vezes... O próximo envio de link resultará em banimento 💢`, mentions: [sender]})
      }
    } else {
      astaup.sendMessage(from, {text: `[❗] aplicando punição ao usuário @${sender.split("@")[0]} por enviar link ❌`, mentions: [sender]})
      await sleep(1000)
      remover(from, sender)
      await sleep(1000)
      delgp()
    }
  }
}

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
  if(Procurar_String.includes("chat.whatsapp.com")) {
    link_dgp = await astaup.groupInviteCode(from)
    if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
  }
  if(isCmd && isTrueFalse) return
  if(!JSON.stringify(groupMembers).includes(sender)) return
  function delhard() {astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}
  //aqui começa o escudo anti link
  if(isShieldHARDuser(from, sender)) {
    pessoa = getShieldHARDuser(from, sender)
    isInfinity = pessoa.infinito
    if(isInfinity) {
      delhard()
      await sleep(2000)
      return sendMess(from, `Sem links pfvr ${pushname}...`)
    } else {
      if(pessoa.quant > 0) {
        pessoa.quant -= 1
        saveSALHARD();
        await sleep(2000)
        nmr = getShieldHARDuser(from, sender).quant + 1
        return sendMess(from, `Anti link HARD está ativado ${pushname}... Pra sua sorte, você ainda tem direito a enviar +${nmr} link${nmr != 1 ? `s` : ``} 🥰`)
      } else {
        rmShieldHARD(from, sender)
        delhard()
        await sleep(1000)
        remover(from, sender)
        await sleep(1000)
        return sendMess(from, `Suas chances acabaram ${pushname}... Falta de aviso não foi 😪`)
      }
    }
  } else if(!isBanLinkHard) {
    delhard()
    await sleep(1500)
    AB = dataGp[0].advertir.map(i => i.id).indexOf(sender)
    if(AB >= 0) {
      if(dataGp[0].advertir[AB].adv < 2) {
        dataGp[0].advertir[AB].adv += 1
        setGp(dataGp)
        return astaup.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, você foi advertido ${dataGp[0].advertir[AB].adv} vezes... O próximo envio de link resultará em banimento 💢`, mentions: [sender]})
      } else {
        astaup.sendMessage(from, {text: `[❗] Você não me deu escolha @${sender.split("@")[0]}... Por desacato a autoridade, irei te aplicar a devida punição 💢`, mentions: [sender]})
        dataGp[0].advertir.splice(AB, 1)
        setGp(dataGp)
        await sleep(1500)
        return remover(from, sender)
      }
    } else {
      dataGp[0].advertir.push({id: sender, adv: 1})
      setGp(dataGp)
      return astaup.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, é terminantemente proibido o envio de links neste grupo... Por sorte, o sistema de ban está desativado, mas isso não lhe isenta de ser advertido 💢`, mentions: [sender]})
    }
  } else {
    astaup.sendMessage(from, {text: `[❗] aplicando punição ao usuário @${sender.split("@")[0]} por enviar link ❌`, mentions: [sender]})
    await sleep(1000)
    remover(from, sender)
    await sleep(1000)
    delhard()
  }
}

if(isCmd && !isVip) {
if(isFiltered(sender)) {
return mention(`🛑 Para evitar spam, aguarde 3s @${sender.split("@")[0]} 📵`)
} else {
addFilter(sender)
}
}

//========(CONTADOR-DE-MENSAGENS)========\\
if(type && isGroup) {
  if(!existsGroupInCountMessage(from)) {
    addGroupCountMessage(from)
  } else {
    addUserInCountMessage(from, sender, [isCmd ? 'command' : type])
  }
}

const downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
  const FileType = require("file-type");
  let quoted = message.msg ? message.msg : message
  let mime = (message.msg || message).mimetype || ''
  let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
  const stream = await downloadContentFromMessage(quoted, messageType)
  let buffer = Buffer.from([])
  for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
  }
  let type = await FileType.fromBuffer(buffer)
  filedesbug = `${Math.floor(Math.random() * 9999)}`
  trueFileName = attachExtension ? (filedesbug + '.' + type.ext) : filename
  // save to file
  await fs.writeFileSync(trueFileName, buffer)
  return trueFileName
}

const { Sticker } = require("./javascript/sticker/rename/sticker.js");

async function renameSticker2024(pack, autor, hehe) {
  try {
    getfile = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    var _sticker = new Sticker()
    _sticker.addFile(getfile); 
    _sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
    resultadoSt = await _sticker.start();
    await astaup.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: hehe})
    await fs.unlinkSync(resultadoSt[0].value)
  } catch(e) {console.log(e)}
}

async function renameContextSticker(pack, autor, txt = ``, hehe) {
  try {
    getfile = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    var _sticker = new Sticker()
    _sticker.addFile(getfile); 
    _sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
    resultadoSt = await _sticker.start();
    await astaup.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value), contextInfo: {externalAdReply: {title: txt, body:"", previewType:"PHOTO", thumbnail: fs.readFileSync(resultadoSt[0].value)}}}, {quoted: hehe})
    await fs.unlinkSync(resultadoSt[0].value)
  } catch(e) {console.log(e)}
}

const removeBG = require("./javascript/sticker/removebg.js")

//função do mute
if(body != undefined && !info.message?.reactionMessage?.text && isJsonIncludes(mute, from) && isBotGroupAdmins) {
  A1 = mute.map(i => i.gpid).indexOf(from)
  if(isJsonIncludes(mute[A1].mutados, sender)) {
    setTimeout(() => {
      astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
    }, 400);
  }
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return astaup.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
if(dataGp[0].legenda_imagem != "0") {
astaup.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: seloctt})  
}
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return astaup.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
astaup.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloctt})
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return astaup.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
if(dataGp[0].legenda_documento != "0") {
astaup.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: seloctt}) 
}
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array("play", "play2", "play3", "play4", "play5", "spotify", "playlist", "ytsearch", "ytmp4", "ytmp4-2", "ytmp3", "ytmp3-2", "tiktok", "tiktok2", "tiktokimg", "instamp3", "facebook", "facebook2", "twitter").some(item => item === command)

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !isOwner && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ==============================>

//======(ANTI-PORNO)========\\

if(isGroup && isAntiPorno && isImage && isBotGroupAdmins) {
  try {
    getimg = info.message.imageMessage
    getfi = await getFileBuffer(getimg, 'image')
    upl = await upload(getfi)
    ABC = await fetchJson(blacksite+`/api/antiporno?url=${upl}&apikey=`+API_KEY_FREE)
    if(ABC.porno) {
      if(isGroupAdmins || isVip) {
        astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
        await sleep(1000)
        return sendMess(from, `🔞 Anti porno ativado... Punição revogada por participante ser ${isGroupAdmins ? `ADM` : `VIP`} ❌`)
      } else {
        remover(from, sender)
        await sleep(1000)
        astaup.sendMessage(from, {text: `🔞 Anti porno ativado... Aplicando punição ao usuário @${sender.split("@")[0]} ❌`, mentions: [sender]})
        await sleep(1000)
        astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
      }
    }
  } catch(e) {console.log(`Não foi possível rodar o anti porno - `, e)}
}

//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return astaup.sendMessage(from,{text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
if(dataGp[0].legenda_video == "0") {
astaup.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloctt})
} else {
astaup.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: seloctt})  
}
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return astaup.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
astaup.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloctt})
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv) {
if(!isGroup && !isOwner && !isnit && !isVip && !isCmdKey){ 
reply(`[❗] Modo ANTI PV está ativo ${pushname}... Sinto muito, mas não vejo outra opção a não ser te bloquear 🚫`)
await sleep(2500)
return astaup.updateBlockStatus(sender, 'block')
}
}

//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isVip && !isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && isCmd && !isCmdKey) return sendUrlText(from, `[❗] Atenção ${pushname}, o modo ANTI PV está ativo... Recebi ordens para não responder usuários inferiores aqui ❌`, NomeDoBot, ``, logoslink.menu, `https://wa.me/`+nmrdn.split("@")[0], seloctt)
//apague o sendUrlText e tudo a direita caso queira que o bot apenas ignore

//======================================\\

// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
astaup.ws.on('CB:call', async (B) => {
if(B.content[0].tag == 'offer') {
astaup.sendMessage(B.content[0].attrs['call-creator'], {text: `[ ❌ ] É proibido ligar pro bot... BLOQUEADO!! 🚫`}).then(() => {
setTimeout(() => {
astaup.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
}, 2500)
})
}
})
}

//======================================\\

if(isAntiVisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\n👁 *REVELANDO ONE VISION* 👁"
astaup.sendMessage(from, px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\n👁 *REVELANDO ONE VISION* 👁"
astaup.sendMessage(from, px)
}}}

//X9 de fixação de msg
if(fs.existsSync(`./database/grupos/${from}.json`) && jsonGp[0].x9 && info.message?.messageContextInfo?.messageAddOnDurationInSecs) {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs
fixedTime = Number(duration) === 0 ? `0` : duration == (60 * 60 * 24) ? `24h` : duration == (60 * 60 * 24 * 7) ? `7d` : `30d`
action = Number(fixedTime) === 0 ? `desafixar uma mensagem 📌` : `fixar uma mensagem por ${fixedTime} 📍`
astaup.sendMessage(from, {text: `*O admin @${sender.split("@")[0]} acaba de ${action}*`, contextInfo: {mentionedJid: [sender], forwardingScore: 999, isForwarded: true}})
}

//convite no pv
if(info?.message?.groupInviteMessage?.inviteCode) {
  invite_info = info?.message?.groupInviteMessage
  id_of_group = invite_info?.groupJid
  group_name = invite_info?.groupName
  if(isOwner || isJsonIncludes(aluguel, sender)) {
    let { key } = await astaup.sendMessage(sender, {text: `Um segundo mestre, estou entrando no grupo... 🚶🏻‍♂️`}, {quoted: info})
    await sleep(1200)
    try {
      if(isOwner) {
        await astaup.groupAcceptInviteV4(info.key, invite_info)
        await sleep(2000)
        astaup.sendMessage(id_of_group, {text: `*Olá mestre, aqui estou eu* 🙇🏻‍♂️`})
      } else {
        if(isGroupInRent(id_of_group)) {
          ggrt = getGroupRent(id_of_group)
          if(ggrt.cliente != sender) {
            client_groups = []
            for(c of client_groups) {
              if(c.cliente == sender) client_groups.push(c)
            }
            astaup.sendMessage(sender, {text: `Você não é o cliente responsável por esse grupo @${sender.split("@")[0]}... ${client_groups.length > 1 ? `Os grupos registrados no seu número são:\n${client_groups.map(gp => `• ${gp.nome}`).join(`\n`)}` : `O único grupo registrado no seu número é o "${client_groups[0].nome}" 💰`}`, mentions: [sender], edit: key}, {quoted: info})
          } else {
            await astaup.groupAcceptInviteV4(info.key, invite_info)
            await sleep(1000)
            astaup.sendMessage(id_of_group, {text: `*Voltei família, foi tudo um mal entendido ksksks* 🥱`})
          }
        }
      }
    } catch(e) {
      console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
      astaup.sendMessage(sender, {text: `[❗] Erro, não foi possível entrar no grupo ❌`, edit: key}, {quoted: info})
    }
  } else {
    if(!isModRent) return astaup.sendMessage(sender, {text: `Não @${sender.split("@")[0]}, você não tem permissão de me adicionar em grupos... Pare agora, ou terei que te bloquear 😡`, mentions: [sender]}, {quoted: seloctt})
    astaup.sendMessage(sender, {text: `⚠ Atenção @${sender.split("@")[0]}, este bot é alugado... Caso queira me adicionar no grupo ${group_name}, será necessário alugar algum dos planos via pix 💎`, mentions: [sender]}, {quoted: seloctt})
    await sleep(1200)
    astaup.sendMessage(sender, {text: `${valoresDeAluguel.map(a => `${permuteNumberEmoji(a.id)}⧽ R$ ${Number(a.valor).toFixed(2)} (${a.tempo} dias)`).join(`\n`)}\n\n${NomeDoBot}`})
    await sleep(1200)
    astaup.sendMessage(sender, {text: `Basta usar os comandos ${prefix}recarga, ${prefix}buykeygp e ${prefix}buygp para alugar o bot... Após gerada a key, basta copiar e colar a mesma dentro de seu grupo.\nQualquer dúvida, chame meu dono no PV através do comando ${prefix}dono 👑`})
    await sleep(1200)
    astaup.sendMessage(nmrdn, {text: `Houve uma tentativa de adição no grupo ${group_name} vindo do @${sender.split("@")[0]}... Já alertei o mesmo sobre o fato do bot ser alugado, e agora estou avisando o senhor tbm 💁🏻‍♂️`, mentions: [sender]})
  }
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

const resptinder = (txt) => {
  return txt.split("#pc#").join(prefix+command).split("#p#").join(prefix)
}

async function deleteAllCore() {
  exec(`ls`, (err, rstd) => {
    if(err) return console.log(err)
    findcore = rstd.split(`\n`)
    getcore = []
    for(linecore of findcore) {
      if(linecore.toLowerCase().includes(`core`)) getcore.push(`./`+linecore)
    }
    if(getcore.length > 0) {
      for(deletecore of getcore) {
        fs.unlinkSync(deletecore)
      }
    }
  })
}

deleteAllCore();

if(body === `${Number(body.split('!')[0])}!` && Number(body.split('!')[0]) > 2 && isGroup) {
  nmrX = Number(body.split('!')[0])
  nmrY = nmrX - 1
  nmrZ = []
  for(i = nmrY; i > 0; i--) {
    nmrZ.push(i)
    nmrX *= i
  }
  reply(`${body.split('!')[0]}•${nmrZ.join("•")}=${nmrX}`)
}

const sendAsPoll = (jid, name = '', values = [], selectableCount = 0) => { return astaup.sendMessage(jid, { poll: { name, values, selectableCount }}) }

// CONST PROS COMANDOS POR FIGURINHAS \\

const vitinhufds = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

// INICIO DAS CASES / COMANDOS COM PREFIXO --- DEIXE ACIMA DO >SWITCH(COMMAND) {< E NÃO APAGUE O MESMO \\

const mentionedJidStickerCmd = info?.message?.stickerMessage?.contextInfo?.participant || undefined

switch(vitinhufds){
case '18,163,84,231,75,155,22,105,207,60,159,154,44,195,161,113,215,70,37,168,103,171,133,118,221,181,217,184,121,57,220,167':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(mentionedJidStickerCmd) {
menc = mentionedJidStickerCmd
if(!isJsonIncludes(groupMembers, menc)) return
mention(`@${menc.split("@")[0]} *ACABA DE RECEBER A COROA DE ADMINISTRADOR DO GRUPO... ESPERO QUE HONRE A SUA FUNÇÃO* 👑`)
promover(from, menc)
}
break

case '60,164,240,170,150,188,191,135,23,44,239,78,44,151,73,246,52,241,210,228,45,8,31,100,48,15,194,33,100,174,144,107':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(mentionedJidStickerCmd) {
menc = mentionedJidStickerCmd
if(!isJsonIncludes(groupMembers, menc)) return
mention(`@${menc.split("@")[0]} *ACABA DE PERDER A COROA DE ADM DO GRUPO...* 🥲`)
rebaixar(from, menc)
}
break

case '177,133,229,80,25,217,165,119,127,149,170,46,194,5,136,189,203,88,234,80,10,197,211,191,178,36,226,209,69,19,213,84':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(mentionedJidStickerCmd) {
menc = mentionedJidStickerCmd
if(!isJsonIncludes(groupMembers, menc)) return
if(isJsonIncludes(numerodono, menc) || isJsonIncludes(botNumber, menc)) {
if(isOwner) return
return remover(from, sender)}
sendAudioPTT(astaup, from, `./database/midia/audios/ban.m4a`, info)
remover(from, menc)
return mention(`Tá bom patrão, bye bye @${menc.split("@")[0]} 👋🏻😀`)
}
break

case '182,225,49,156,25,159,250,104,25,137,69,83,226,69,129,120,1,169,157,154,77,16,224,101,7,31,21,7,43,22,104,212':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(groupMetadata.announce == false) return
reagir("🔓")
astaup.groupSettingUpdate(from, 'not_announcement')
reply(`*GRUPO ABERTO COM SUCESSO* ✅`)
break

case '157,134,71,247,237,171,192,2,85,112,158,0,102,229,213,19,146,60,72,178,236,161,138,84,170,78,178,40,199,220,154,76':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(groupMetadata.announce == true) return
reagir("🔒")
astaup.groupSettingUpdate(from, 'announcement')
reply(`*GRUPO FECHADO COM SUCESSO* ❌`)
break

case '116,49,181,215,210,140,250,126,169,228,144,22,131,130,134,241,222,247,1,236,137,113,118,240,225,39,0,97,190,65,187,192':
if(!isGroup) return
if(!isBotGroupAdmins) return
if(!isOwner) return
buff = await getFileBuffer(info.message.stickerMessage, 'sticker')
await sleep(200)
astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
await sleep(700)
astaup.sendMessage(from, {audio: {url: `./database/midia/audios/paitaon.m4a`}, mimetype: `audio/mpeg`, ptt: true, contextInfo: {mentionedJid: groupMembers.map(i => i.id), forwardingScore: 999, isForwarded: true}})
await sleep(700)
astaup.sendMessage(from, {sticker: buff})
break
}

//

async function atualizarGrupos(reset = false) {
  obrigadoEXT.dbgp = sendHours('HH')
  dbgp = sendHours('HH')
  setObg(obrigadoEXT)
  allgp = Object.entries((await astaup.groupFetchAllParticipating())).slice(0).map(entry => entry[1]).map(v => v).sort((a, b) => (a[0] < b.length))
  saveJSON(allgp, './grupos.json')
  console.log(colors.green(`LISTA DE ${allgp.length} GRUPOS ATUALIZADA COM SUCESSO ÀS ${sendHours('HH:mm')}`))
  //DADOS DE GRUPOS SALVOS
  deleteGP = allGroups.filter(a => !allgp.some(b => b.id === a.id))
  if(deleteGP.length > 0) {
    console.log(colors.red('REMOVENDO JSON DE DADOS DOS GRUPOS QUE O BOT NÃO SE ENCONTRA MAIS:\n'), colors.white(deleteGP.map(d => `- ./database/grupos/${d.id}.json (${d.subject})`).join('\n')))
    deleteGP.forEach(f => {
      if(fs.existsSync(`./database/grupos/${f.id}.json`)) {
        fs.unlinkSync(`./database/grupos/${f.id}.json`)
      }
    })
  }
  //DADOS DE MENSAGENS SALVAS
  deleteCM = allCountMessage().filter(c => !allgp.some(d => d.id === c.groupId))
  if(deleteCM.length > 0) {
    console.log(colors.yellow('LENDO JSON DE MENSAGENS DOS GRUPOS QUE O BOT NÃO ESTÁ MAIS:\n'), colors.white(deleteCM.map(e => countmessagepath(e.groupId)).join('\n')))
    deleteCM.forEach(m => {
      inactiveGroupCountMessage(m.groupId)
    })
  }
  if(reset) {
    setTimeout(() => {
      process.exit()
    }, 2000);
  }
}

if(isGroup && Number(dbgp) !== Number(sendHours('HH'))) {atualizarGrupos()}

//INICIO DE COMANDO DE PREFIXO
switch(command) {

case 'atualizargrupos': case 'attgp':
if(!isOwner) return reply(enviar.msg.dono)
atualizarGrupos()
txt = `LISTA DE ${allGroups.length} GRUPOS ATUALIZADA COM SUCESSO ÀS ${sendHours('HH:mm')}`
reply(iniMai(txt.toLowerCase()) + ' 🎭')
break

case 'transtxt': case 'transjs':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`KD o texto`)
fs.writeFileSync(`./teste.js`, q)
reply(`Já tá no painel.`)
break

case 'savelid':
if(!isOwner) return reply(enviar.msg.dono)
groupMembers.forEach(gp => {
  if(!existsLidData(gp.lid)) {
    setTimeout(() => {
      console.log(colors.green(`JID ${gp.jid} LID ${gp.lid}`))
      addLidJson(gp.jid, gp.lid, '', 0)
    }, 700);
  }
})
reply(`Todos os presentes membros tiveram seu lid salvo com sucesso ✅`)
break

case 'comprarbot':
reagir(`💞`)
ABC = await fetchJson(blacksite + '/blackservice')
nmr = `wa.me/${ABC.number}?text=comprar%20bot`
txt = `🥰 _${tempo} ${pushname}, queres comprar o *Black descriptografado e 100% editável?* Basta ir no link abaixo, aonde você será rederecionado para o bot de atendimento da *Black System...*_

=> ${nmr}

_Lembrando que o bot custa *85$* e todo o processo é feito de forma *100% automática*, com direito ao suporte até mesmo antes da compra *(olhe no menu do bot de atendimento)*_`
sendUrlText(from, txt, `⎙ 𝚃𝙷𝙴 𝙱𝙻𝙰𝙲𝙺 𝚂𝙴𝚁𝚅𝙸𝙲𝙴 ⎙`, `Seu bot pessoal de atendimento, pronto para lhe ajudar...`, `https://storageblack.cloud/midia/1738084892557.jpg`, `https://`+nmr, seloctt)
break

case 'letra': case 'letras':
if(!q) return reply(`Qual o nome da música? Exemplo: ${prefix + command} wanna be yours`)
ABC = await fetchJson(`${blacksite}/api/letramusic?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
try {
sendUrlText(from, "- ".repeat(20)+`\n\n`+ABC.resultado.letraDaMusica+`\n\n`+"- ".repeat(20), NomeDoBot, ``, ABC.resultado.imagemMusic, blacksite, seloctt)
} catch {
reply("Erro")
}
break

case 'rgtinder':
try {
ABC = await fetchJson(`${blacksite}/tinder/login?usu=${sender}&${q && !isQuotedImage ? `rg=${q}&` : ``}apikey=`+API_KEY_FREE)
try {
data = await fetchJson(`${blacksite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_FREE)
} catch { return reply("Erro ao tentar acessar o registro") }
fini = data.nome != 0 && data.idade != 0 && data.gene != 0 && data.sexualidade != 0 && data.filtro != 0 && data.bio != 0 && data.foto == 0
if(fini && isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`${blacksite}/tinder/login?usu=${sender}&rg=${img}&apikey=`+API_KEY_FREE)
return reply(resptinder(BCD.message))
} catch { return reply("Erro ao salvar a imagem... Tente novamente") }
}
reply(resptinder(ABC.message))
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
}
break

case 'tinder':
reagir("🔥")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
try {
ABC = await fetchJson(`${blacksite}/tinder/find?usu=${sender}&apikey=`+API_KEY_FREE)
data = await fetchJson(`${blacksite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_FREE)
txt = `
ㅤㅤㅤ🔥 𝒃𝒍𝒂𝒄𝒌 𝒕𝒊𝒏𝒅𝒆𝒓 🔥
╔══════════════════╣
╟ ❪😍ฺ࣭࣪͘ꕸ▸ ɴᴏᴍᴇ: ${ABC.dados[0].nome}
║
╟ ❪😏ฺ࣭࣪͘ꕸ▸ ᴡʜᴀᴛꜱᴀᴩᴩ: wa.me/${ABC.dados[0].nmr}
║
╟ ❪🤫ฺ࣭࣪͘ꕸ▸ ɪᴅᴀᴅᴇ: ${ABC.dados[0].idade} anos
║
╟ ❪🤭ฺ࣭࣪͘ꕸ▸ ꜱᴇxᴜᴀʟɪᴅᴀᴅᴇ: ${ABC.dados[0].sexualidade}
║
╟ ❪🫣ฺ࣭࣪͘ꕸ▸ ɢêɴᴇʀᴏ: ${ABC.dados[0].gene}
║
╩ 𖥨ํ∘̥⃟⸽⃟💌৴▸ ʙɪᴏ: ${ABC.dados[0].bio}

_Exibindo perfil nº${ABC.dados[0].id} de ${ABC.dados[0].total} usuário${ABC.dados[0].total > 1 ? 's' : ''} registrado${ABC.dados[0].total > 1 ? 's' : ''}_
`
astaup.sendMessage(from, {image: {url: ABC.dados[0].foto}, caption: txt}, {quoted: seloctt})
} catch { reply(resptinder(ABC.message || "Erro")) }
break

case 'tindernome':
case 'tinderidade':
case 'tinderbio':
case 'setgene':
case 'setsex':
case 'setfiltro':
case 'tinderfoto':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
try {
ABC = await fetchJson(`${blacksite}/tinder/config?usu=${sender}&mod=${command}&${q && !isQuotedImage ? `q=${q}&` : ``}apikey=`+API_KEY_FREE)
if(command == "tinderfoto" && (isQuotedImage || isImage)) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`${blacksite}/tinder/config?usu=${sender}&mod=${command}&q=${img}&apikey=`+API_KEY_FREE)
return reply(resptinder(BCD.message))
} catch { return reply("Erro ao salvar a imagem... Tente novamente") }
}
reply(resptinder(ABC.message))
} catch { reply("Erro") }
break

case 'meutinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
try {
ABC = await fetchJson(`${blacksite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_FREE)
txt = `
╔══════════════════╣
╟ • ${ABC.dados[0].gene.replace("ã", "a") == "nao declarar" ? `ɴᴏᴍᴇ` : `ᴜꜱᴜáʀɪ${ABC.dados[0].gene == "masculino" ? "ᴏ" : "ᴀ"}`}: ${ABC.dados[0].nome}
║
╟ • ɪᴅᴀᴅᴇ: ${ABC.dados[0].idade} anos
║
╟ • ᴡʜᴀᴛꜱᴀᴩᴩ: wa.me/${ABC.dados[0].nmr}
║
╟ • ꜱᴇxᴜᴀʟɪᴅᴀᴅᴇ: ${ABC.dados[0].sexualidade}
║
╟ • ɢêɴᴇʀᴏ: ${ABC.dados[0].gene}
║
╟ • ꜰɪʟᴛʀᴏ: ${ABC.dados[0].filtro == 3 ? `sem preferências` : `pesquisar por ${ABC.dados[0].filtro == 1 ? ` homens` : `mulheres`}`}
║
╩ • ʙɪᴏ: ${ABC.dados[0].bio}

_${ABC.dados[0].gene.replace("ã", "a") == "nao declarar" ? `Deu entrada no tinder` : `Registrad${ABC.dados[0].gene == "masculino" ? "o" : "a"}`} em ${ABC.dados[0].registro[0]}, às ${ABC.dados[0].registro[1]}_
`
astaup.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `ㅤㅤㅤ🔥 𝒃𝒍𝒂𝒄𝒌 𝒕𝒊𝒏𝒅𝒆𝒓 🔥`,
    body: ``,
    thumbnail: await getBuffer(`${ABC.dados[0].foto}`),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: `${blacksite}`
  }
}}, {quoted: seloctt})
} catch { reply(resptinder(ABC.message || "Erro")) }
break

case 'sairtinder':
case 'rmtinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
if(command == 'rmtinder') {
  if(!isOwner) return reply(enviar.msg.dono)
  if(!q && !menc_os2) return reply("Retorne após o comando o número ou @ do usuário que você quer deletar do tinder")
  deletar = identArroba(q)
} else { deletar = sender }
try {
ABC = await fetchJson(`${blacksite}/tinder/delete?usu=${deletar}&apikey=`+API_KEY_FREE)
reply(resptinder(ABC.message))
} catch { reply("Erro") }
break

case 'envvdd':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!q) return reply(`KD a verdade ?`)
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
vdddsf[BC].verdades.push({vdd: q})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`✓ Verdade enviada com sucesso...`)
break

case 'envdsf':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!q) return reply(`KD o desafio ?`)
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
vdddsf[BC].desafios.push({dsf: q})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`✓ Desafio enviado com sucesso...`)
break

case 'vdsflist':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
txt = `😇 Lista de verdades:\n`
for(i = 0; i < vdddsf[BC].verdades.length; i++) {
txt += `• ${i} -> ${vdddsf[BC].verdades[i].vdd}\n`
}
txt += `\n😈 Lista de desafios:\n`
for(i = 0; i < vdddsf[BC].desafios.length; i++) {
txt += `• ${i} -> ${vdddsf[BC].desafios[i].dsf}\n`
}
reply(txt)
break

case 'rmvdd':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > vdddsf[BC].verdades.length) return reply(`Use o comando ${prefix}vdsflist e escolha um dos números na lista para deletar... Ex:
${prefix+command} 2`)
vdddsf[BC].verdades.splice(Number(args[0]), 1)
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Verdade deletada do jogo`)
break

case 'rmdsf':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > vdddsf[BC].desafios.length) return reply(`Use o comando ${prefix}vdsflist e escolha um dos números na lista para deletar... Ex:
${prefix+command} 2`)
vdddsf[BC].desafios.splice(Number(args[0]), 1)
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Desafio deletado do jogo`)
break

case 'vdddsf':
if(!isGroup) return reply(`Só em grupo`)
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
if(vdddsf[BC].verdades.length <= 1 || vdddsf[BC].desafios.length <= 1) return reply(`É necessário ao menos duas verdades e dois desafios para iniciarmos... ${isOwner ? `Use o comando ${prefix}envvdd e ${prefix}envdsf` : ``}`)
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(JSON.stringify(vdddsf[AB].jogadores).includes(sender)) {
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo == 0) return reply(`Olá ${pushname}, faça sua escolha...
😇⃤ Verdade
ㅤㅤㅤㅤOu
😈⃤ Desafio`)
if(vdddsf[AB].jogadores[DC].tipo == 1) return reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 VERDADE 』
✓ -> ${vdddsf[AB].jogadores[DC].vdouds}

_(responda com verdade ou mentira)_`)
if(vdddsf[AB].jogadores[DC].tipo == 2) return reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[AB].jogadores[DC].vdouds}

_(quando concluir o desafio, use ${prefix}pronto)_`)
} else {
vdddsf[AB].jogadores.push({id: sender, vdouds: "", tipo: 0})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
txt = `Olá ${pushname}, faça sua escolha...
😇⃤ Verdade
ㅤㅤㅤㅤOu
😈⃤ Desafio`
sendButton(from, {text: txt, footer: `Selecione uma das opções abaixo...`}, astaup, [{type: `cmd`, text: `😇⃤ VERDADE`, command: `verdade`}, {type: `cmd`, text: `😈⃤ DESAFIO`, command: `desafio`}], seloctt)
}
break

case 'pulardesafio': case 'pulardsf':
{
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(!JSON.stringify(vdddsf[AB].jogadores).includes(sender)) return reply(`Você não iniciou nenhum jogo... Use ${prefix}vdddsf`)
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo != 2) return reply(`Você escolheu verdade, portanto, não é possível pular o desafio assim... Diga verdade ou mentira para a seguinte afirmação/pergunta: ${vdddsf[AB].jogadores[DC].vdouds}`)
vdddsf[AB].jogadores.splice(DC, 1)
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
let { key } = await astaup.sendMessage(from, {text: `Ih ala, desistiu kkkkk`}, {quoted: seloctt})//primeira mensagem
await sleep(1000)
await astaup.sendMessage(from, {text: `😈 Gerando novo desafio...`, edit: key }, {quoted: seloctt})
await sleep(1000)
BA = vdddsf.map(b => b.idgp).indexOf(from)
BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
CD = vdddsf[BA].jogadores.map(i => i.id).indexOf(sender)
aledsf = Math.floor(Math.random() * vdddsf[BC].desafios.length)
vdddsf[AB].jogadores.push({id: sender, vdouds: vdddsf[BC].desafios[aledsf].dsf, tipo: 2})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
txt = `\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[BC].desafios[aledsf].dsf}

_(quando concluir o desafio, use ${prefix}pronto)_`
await astaup.sendMessage(from, {text: txt, edit: key }, {quoted: seloctt})
}
break

case 'pronto':
if(!JSON.stringify(vdddsf).includes("matheuzinho")) {
vdddsf.push({idvd: "matheuzinho", verdades: [], desafios: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(!JSON.stringify(vdddsf[AB].jogadores).includes(sender)) return reply(`Você não iniciou nenhum jogo... Use ${prefix}vdddsf`)
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo != 2) return reply(`Você escolheu verdade, portanto, não é possível finalizar o desafio assim... Diga verdade ou mentira para a seguinte afirmação/pergunta: ${vdddsf[AB].jogadores[DC].vdouds}`)
vdddsf[AB].jogadores.splice(DC, 1)
fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Btf mn, parabéns por completar o desafio 🌚🍷`)
break

case 'advn-nmr': case 'adivinharnmr':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isJsonIncludes(adivinharnmr, from)) {
  adivinharnmr.push({groupId: from, participants: []})
  saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
}
if(!isModobn) return reply(enviar.msg.modobz)
AB = adivinharnmr.map(i => i.groupId).indexOf(from)
if(isJsonIncludes(adivinharnmr[AB].participants, sender)) {
  AC = adivinharnmr[AB].participants.map(i => i.id).indexOf(sender)
  adivinharnmr.splice(AC, 1)
  saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
}
adivinharnmr[AB].participants.push({id: sender, progresso: 0, resultado: 0, fim: false})
saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
reply(`😀 ${tempo} ${pushname}, iniciarei o jogo de adivinhação do número... A cada ordem, após você resolver a questão, responda "pronto" para prosseguir.`)
await sleep(1000)
sendMess(from, `Digite "pronto" para começar (sem as aspas, é claro) 🥰`)
break

case 'savegp':
if(!isOwner) return reply(enviar.msg.dono)
reply(!isSaveGroup(from) ? `Grupo salvo na pasta 📁` : `Grupo já foi salvo ✔️`)
addGroupInRent(from, true)
break

case 'unsavegp':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSaveGroup(from)) return reply(`Grupo não encontrado`)
rmGroupInRent(from)
reply(`Grupo deletado ✔️`)
break

case 'addrent': case 'rgrent':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isJsonIncludes(aluguel, from)) {
  //\\
  if(!q.includes('/')) return mention(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} @${sender.split('@')[0]}/30d`)
  barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
  var [nmr, dias] = barra.split('/')
  snl = separateNumberLetter(dias)
  day = snl.number
  console.log(colors.white(day))
  if(!Number(day)) return reply(day+` não é número... Use ${prefix+command} ${addNumberMais(nmrdn)}/30d`)
  if(Number(day) <= 0) return reply(`É necessário ao menos 1 hora de aluguel né`)
  if(dias.includes('.')) return reply("Não use números decimais")
  if(snl.string === "h") { letra = 1
  } else if(snl.string === "d") { letra = 24
  } else return reply("Retorne após o número uma letra como d/h, ex: 30d ou 24h")
  console.log(colors.yellow(letra))
  matheuzinho = identArroba(nmr)
  total = day * letra
  addRent(from, matheuzinho, total)
  return reply(`*Grupo adicionado ao aluguel contando ${total > 48 ? `${Number(total / 24).toFixed(0)}d` : `${total}h`} com sucesso* ✅`)
  //\\
} else {
  //\\
  snl = separateNumberLetter(q)
  day = snl.number
  if(!Number(day)) return reply(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo... Ex: ${pc} 30d`)
  if(snl.string === "h") { letra = 1
  } else if(snl.string === "d") { letra = 24
  } else return reply("Retorne após o número uma letra como d/h, ex: 30d ou 24h")
  total = day * letra
  addRent(from, undefined, total)
  reply(`+${sendLetterTime(total)} adicionad${letra == 1 ? "a" : "o"}${Number(day) > 1 ? 's' : ''} para este grupo`)
  //\\
}
break

case 'tirarrent':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Retorne após o comando o tempo que você deseja remover do aluguel do grupo, usando dias ou horas. Exemplo:
- ${prefix+command} 1d
- ${prefix+command} 24h`)
var [quant, grupo] = q.split("/")
async function trrt(t) {
  dr = []
  for(a of aluguel) {
    dr.push({name: `SELECIONE AQUI`, title: a.nome, body: sendTimeHours(a.tempo), command: prefix+command+` ${t ? t + `/`: ``}`+a.id})
  }
  return sendButton(from, {text: `🎲 Selecione abaixo o grupo que você deseja deletar do registro de aluguel...`, footer: NomeDoBot}, astaup, [{type: `list`, title: `〘 SELECIONE AQUI 〙`, rowId: [{title: `GRUPOS AQUI`, options: dr}]}], seloctt)
}
if(isGroup) {
  if(!isGroupInRent(from)) return reply(`Este grupo não está registrado no aluguel 😪`)
  gp = from
} else {
  if(quant.length > 5) {
    if(!isGroupInRent(grupo)) return trrt(quant)
    gp = grupo
  } else {
    if(isNaN(quant) || Number(quant) < 1 || Number(quant) > aluguel.length) return trrt(quant)
    gp = aluguel[Number(quant) - 1].id
  }
}
tirarRent(gp, reply, prefix+command, quant)
break

case 'delrent': case 'rmrent':
if(!isOwner) return reply(enviar.msg.dono)
async function sdr() {
  dr = []
  for(a of aluguel) {
    dr.push({name: `SELECIONE AQUI`, title: a.nome, body: sendTimeHours(a.tempo), command: prefix+command+` `+a.id})
  }
  return sendButton(from, {text: `🎲 Selecione abaixo o grupo que você deseja deletar do registro de aluguel...`, footer: NomeDoBot}, astaup, [{type: `list`, title: `〘 SELECIONE AQUI 〙`, rowId: [{title: `GRUPOS AQUI`, options: dr}]}], seloctt)
}
if(q) {
  if(q.length > 5) {
    if(!isGroupInRent(q)) return sdr()
    gp = q
  } else {
    if(isNaN(q) || Number(q) < 1 || Number(q) > aluguel.length) return sdr()
    gp = aluguel[Number(q) - 1].id
  }
} else { gp = from }
if(!isGroupInRent(gp)) return reply(`Este grupo não está registrado no aluguel 😪`)
delRent(reply, gp)
if(gp != from && command == 'rmrent') {
  await sleep(700)
  getgp = await astaup.groupMetadata(gp)
  sendButton(gp, {text: `\t\t⚠️ *TRANSMISSÃO DO BLACK* ⚠️

\`\`\`O tempo limite deste grupo acabou. Para renovação de contrato, use o botão abaixo para alugar ou entre em contato com meu dono:\`\`\``, footer: NomeDoBot, mentions: getgp.participants.map(i => i.id)}, astaup,
[
  {type: 'copy_url', text: `💰 𝘼𝙇𝙐𝙂𝘼𝙍`, url: blacksite+'/aluguel'},
  {type: 'copy_url', text: `🔰 𝙈𝙀𝙐 𝘿𝙊𝙉𝙊`, url: 'https://wa.me/'+nmrdn.split('@')[0]}
])
  await sleep(1000)
  sendContact(gp, NickDono, NomeDoBot, numerodono_ofc)
  await sleep(2500)
  astaup.groupLeave(gp)
}
break

case 'cortesia':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
addCourtesy(reply, from)
break

case 'listrent': case 'lista-aluguel':
if(!isOwner) return reply(enviar.msg.dono)
if(aluguel.length <= 0) return reply(`Não há grupos salvos na lista de aluguel`)

//salvar o nome dos grupos
for(g of allGroups) {
  if(isGroupInRent(g.id)) {
    getGroupRent(g.id).nome = g.subject
    saveRent()
  }
}

//enviar o nome dos grupos
barra = `-`.repeat(50)
txt = `➲ ʟɪꜱᴛᴀ ᴅᴇ ɢʀᴜᴘᴏꜱ ᴀʟᴜɢᴀᴅᴏꜱ ↴
ᴛᴏᴛᴀʟ﹙ ${aluguel.length} ﹚
${barra}
${aluguel.map(i => `『 ${aluguel.map(a => a.id).indexOf(i.id) + 1} 』
〔👥〕⥲ ɢʀᴜᴘᴏ: ${i.nome}
〔⏳〕⥲ ᴛᴇᴍᴘᴏ ʀᴇꜱᴛᴀɴᴛᴇ: ${sendTimeHours(i.tempo)}
〔💳〕⥲ ᴄᴏʀᴛᴇꜱɪᴀ〘 ${i.cortesia ? `✅` : `❌`} 〙${isPrivateChat && !i.cortesia ? `
〔😃〕⥲ ᴄʟɪᴇɴᴛᴇ: @${i.cliente.split("@")[0]}` : ``}`).join(`\n${barra}\n`)}
${barra}`
mention(txt)
break

case 'lastrent':
if(!isOwner) return reply(enviar.msg.dono)
if(aluguel.length <= 0) return reply(`Não há grupos salvos na lista de aluguel`)
gp = aluguel.map(i => i)
rank = gp.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
rent = []
top3 = aluguel.length > 3 ? 3 : aluguel.length
for(g = 0; g < top3; g++) {rent.push(rank[g])}
barra = `-`.repeat(50)
txt = `➲ ᴛᴏᴘ ${top3} ɢʀᴜᴘᴏ${top3 != 1 ? `ꜱ` : ``} ᴄᴏᴍ ᴏ ᴀʟᴜɢᴜᴇʟ ᴍᴀɪꜱ ᴘʀᴏ́xɪᴍᴏ ᴅᴇ ᴀᴄᴀʙᴀʀ ↴
${barra}
${rent.map(i => `『 ${rent.map(a => a.id).indexOf(i.id) + 1} 』
〔👥〕⥲ ɢʀᴜᴘᴏ: ${i.nome}
〔⏳〕⥲ ᴛᴇᴍᴘᴏ ʀᴇꜱᴛᴀɴᴛᴇ: ${sendTimeHours(i.tempo)}
〔💳〕⥲ ᴄᴏʀᴛᴇꜱɪᴀ〘 ${i.cortesia ? `✅` : `❌`} 〙${isPrivateChat && !i.cortesia ? `
〔😃〕⥲ ᴄʟɪᴇɴᴛᴇ: @${i.cliente.split("@")[0]}` : ``}`).join(`\n${barra}\n`)}
${barra}`
mention(txt)
break

case 'iddogrupo': case 'idgp':
if(!isOwner) return reply(enviar.msg.dono)
reply(from)
break

case 'figurinhas': case 'figurinha':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Insira a quantidade de figurinhas que você deseja receber, exemplo: ${prefix + command} 2`)
if(!Number(args[0]) || Number(q.trim()) > 10 && !isOwner) return reply(`O máximo de figurinhas é 10`)
reply(`ヅ _Calma ae ${pushname}, enviando ${args[0]} figurinha${Number(args[0]) > 1 ? 's' : ''} no seu privado..._ 亗`)
for (i = 0; i < Number(args[0]); i++) {
await sleep(2000)
astaup.sendMessage(sender, {sticker: {url: `${blacksite}/api/figurinhas?apikey=`+API_KEY_FREE}})
}
break

case 'figurinhas2': case 'figurinhas':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Insira a quantidade de figurinhas que você deseja receber, exemplo: ${prefix + command} 2`)
if(!Number(args[0]) || Number(q.trim()) > 10 && !isOwner) return reply(`O máximo de figurinhas é 10`)
reply(`ヅ _Calma ae ${pushname}, enviando ${args[0]} figurinha${Number(args[0]) > 1 ? 's' : ''} no seu privado..._ 亗`)
for (i = 0; i < Number(args[0]); i++) {
await sleep(1000)
astaup.sendMessage(sender, {sticker: {url: `${blacksite}/api/figurinhas2?apikey=`+API_KEY_FREE}})
}
break

case 'figemoji': case 'figflork': case 'figale': case 'figmemes': case 'figanime': case 'figcoreana': case 'figbebe': case 'figdesenho': case 'figanimais': case 'figengracada': case 'figraiva': case 'figroblox':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Insira a quantidade de figurinhas que você deseja receber, exemplo: ${prefix + command} 2`)
if(!Number(args[0]) || Number(q.trim()) > 10 && !isOwner) return reply(`O máximo de figurinhas é 10`)
reply(`ヅ _Calma ae ${pushname}, enviando ${args[0]} figurinha${Number(args[0]) > 1 ? 's' : ''} no seu privado..._ 亗`)
for (i = 0; i < Number(args[0]); i++) {
await sleep(1000)
astaup.sendMessage(sender, {sticker: {url: `${blacksite}/sticker/${command}?apikey=`+API_KEY_FREE}})
}
break

case 'tirardocntd': case 'delmsg': case 'delcntd':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!all_type_number) return reply(`Marque o usuário que você quer deletar do contador, o @ ou a mensagem`)
txt = `Este usuário não está na database do contador deste grupo...`
AB = allGroupIDcountMessage.indexOf(from)
if(AB < 0) return reply(txt)
AC = getCountGroupMessage.participants.map(i => i.id).indexOf(all_type_number)
if(AC < 0) return reply(txt)
getCountGroupMessage.participants.splice(AC, 1)
saveJSON(countMessage, "./database/countmsg.json")
mention(`Usuário @${all_type_number.split("@")[0]} deletado do contador de mensagens com sucesso...`)
break

case 'addmsgcntd': case 'rmmsgcntd':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q.includes(`/`)) return reply(`Use assim: ${prefix+command} @/1000`)
var [usumsg, quantmsg] = q.split(`/`)
if(!Number(quantmsg)) return reply(`${quantmsg} não é número`)
usu = usumsg.toLowerCase() == `me` ? sender : identArroba(usumsg)
if(!usuInCountMessage(usu)) return mention(`O usuário @${usu1.split("@")[0]} não está na database do contador deste grupo...`)
dbuser = getUsuCountMessage(usu)
if(command.includes(`add`)) {dbuser.mensagens += Number(quantmsg)} else {dbuser.mensagens -= Number(quantmsg)}
saveJSON(countMessage, "./database/countmsg.json")
mention(`${quantmsg} mensage${Number(quantmsg) != 1 ? `ns` : `m`} fo${Number(quantmsg) != 1 ? `ram` : `i`} ${command.includes(`add`) ? `adicionada${Number(quantmsg) != 1 ? `s` : ``}` : `removida${Number(quantmsg) != 1 ? `s` : ``}`} do usuário @${usu.split(`@`)[0]} com sucesso ✔`)
break

case 'addcmdcntd': case 'rmcmdcntd':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q.includes(`/`)) return reply(`Use assim: ${prefix+command} @/1000`)
var [usumsg, quantmsg] = q.split(`/`)
if(!Number(quantmsg)) return reply(`${quantmsg} não é número`)
usu = usumsg.toLowerCase() == `me` ? sender : identArroba(usumsg)
if(!usuInCountMessage(usu)) return mention(`O usuário @${usu1.split("@")[0]} não está na database do contador deste grupo...`)
dbuser = getUsuCountMessage(usu)
if(command.includes(`add`)) {dbuser.comandos += Number(quantmsg)} else {dbuser.comandos -= Number(quantmsg)}
saveJSON(countMessage, "./database/countmsg.json")
mention(`${quantmsg} comando${Number(quantmsg) != 1 ? `s` : ``} fo${Number(quantmsg) != 1 ? `ram` : `i`} ${command.includes(`add`) ? `adicionado${Number(quantmsg) != 1 ? `s` : ``}` : `removido${Number(quantmsg) != 1 ? `s` : ``}`} do usuário @${usu.split(`@`)[0]} com sucesso ✔`)
break

case 'transferirmsg': case 'trfrmsg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(contar(q, `/`) != 1) return reply(`Este comando é para transferir as mensagens do número antigo de um usuário para o seu novo número... Retorne após o comando o número antigo do usuário, e o seu novo número, separando ambos com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/${addNumberMais(randomUser)}`)
usu1 = identArroba(q.split(`/`)[0])
usu2 = identArroba(q.split(`/`)[1])
if(!existsUserInCountMessage(from, usu1)) return mention(`O usuário @${usu1.split("@")[0]} não está na database do contador deste grupo...`)
if(!existsUserInCountMessage(from, usu2)) return mention(`O usuário @${usu2.split("@")[0]} não está na database do contador deste grupo...`)
dbuser1 = getUserInCountMessage(from, usu1)
dbuser2 = getUserInCountMessage(from, usu2)
msgtrfr = dbuser1.count.messages
cmdtrfr = dbuser1.count.commands
addUserInCountMessage(from, usu2, ['conversation', 'command'], {messages: msgtrfr, commands: cmdtrfr})
setTimeout(() => {
rmUserInCountMessage(from, usu1)
mention(`As ${msgtrfr} mensagens e ${cmdtrfr} comandos do usuário @${usu1.split("@")[0]} foram transferidos para o usuário @${usu2.split("@")[0]} com sucesso...`)
}, 500);
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar M4|O mais brabo das edits...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./operacao/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./operacao/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./operacao/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(enviar.msg.grupo)
if(command == "anotacao" || command == "nota") {
if(!q.trim()) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(i2 < 0) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2]?.puxar 
txtin = "──────────────────\n\n"
for ( i = 0; i < antr?.length; i++) {
txtin += `↝ Anotação: ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`
}
txtin += "──────────────────\n\n"
mention(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
astaup.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: seloctt}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
astaup.sendMessage(from, {image: {url: q}}, {quoted: seloctt}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`)
try {
ABC = await fetchJson(blacksite+`/api/horoscopo/v2?signo=${q}&apikey=`+API_KEY_FREE)
i = ABC.resultado
txt = `${"=".repeat(20)}
🍄 *Signo:* ${iniMai(q)}
${"=".repeat(20)}

⏳ ${i.title}
${i.info}`
astaup.sendMessage(from, {image: {url: i.thumb}, caption: txt, contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: seloctt})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply("Erro..")
}
break

case 'infoanotacao':
astaup.sendMessage(from, {text: anotacao(prefix)})
break

case 'ps':
case 'playstore':
if(!q) return reply(`KD o nome do app ?`)
try {
ABC = await fetchJson(`${blacksite}/api/playstore?nome=${encodeURI(q)}&apikey=`+API_KEY_FREE)
i = ABC.pesquisa.resultado[0]
txt = `
❪🏷️ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎৴▸ ${i.nome}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙳𝚎𝚜𝚎𝚗𝚟𝚘𝚕𝚟𝚎𝚍𝚘𝚛৴▸ ${i.desenvolvedor}
❪⭐ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘৴▸ ${i.estrelas}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔ฺ࣭࣪͘ꕸ▸ ${i.link}
`
astaup.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `ㅤㅤㅤ🎮 𝙋𝙇𝘼𝙔 𝙎𝙏𝙊𝙍𝙀 🎮`,
    body: ``,
    thumbnail: await getBuffer(i.imagem),
    mediaType: 1,
    sourceUrl: i.link
  }
}}, {quoted: seloctt})
} catch {
reply(`Não encontrei nenhum app, ou pode ser que a api caiu`)
}
break

case 'playstore-search': case 'ps-search':
if(!q) return reply(`KD o nome do app ?`)
try {
ABC = await fetchJson(`${blacksite}/api/playstore?nome=${encodeURI(q)}&apikey=`+API_KEY_FREE)
txt = `ㅤㅤㅤ🎮 𝙋𝙇𝘼𝙔 𝙎𝙏𝙊𝙍𝙀 🎮`
for(i of ABC.pesquisa.resultado) {
txt += `\n\n❪🏷️ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎৴▸ ${i.nome}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙳𝚎𝚜𝚎𝚗𝚟𝚘𝚕𝚟𝚎𝚍𝚘𝚛৴▸ ${i.desenvolvedor}
❪⭐ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘৴▸ ${i.estrelas}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔ฺ࣭࣪͘ꕸ▸ ${i.link}`
}
reply(txt)
} catch {
reply(`Não encontrei nenhum app, ou pode ser que a api caiu`)
}
break

case 'noticias':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
try {
if(!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
ABC = await fetchJson(`${blacksite}/api/noticias/find?q=${encodeURI(q)}&apiKey=`+API_KEY_FREE)
reply(ABC.resultado)
} catch (e) {
return console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
}
break

case 'livro': case 'book':
if(!q) return reply("KD o nome do livro?")
try {
reagir(`📚`)
ABC = await fetchJson(blacksite+`/api/book?livro=${encodeURI(q)}&apiKey=`+API_KEY_FREE)
i = ABC.resultado[0].volumeInfo
BCD = await fetchJson(blacksite+`/api/info/translate?texto=${i.description}&ling=pt&apikey=`+API_KEY_FREE)
txt =
`📖 *Livro:* ${i.title}

❓ *info:* ${BCD.result}

👤 *Autor/es:* ${i?.authors ? i.authors.join(`, `) : `indefinido`}

_Publicado em ${i.publishedDate.split(`-`).reverse().join(`/`)}_`
reply(txt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
}
break

case 'brasileirao':
if(!isGroup) return reply(enviar.msg.grupo)
try {
ABC = await fetchJson(`${blacksite}/api/brasileirao?apikey=`+API_KEY_FREE)
txt = `_🇧🇷⃤ 𝚃𝚊𝚋𝚎𝚕𝚊 𝙳𝚘 𝙱𝚛𝚊𝚜𝚒𝚕𝚎𝚒𝚛ã𝚘 𝙰𝚝𝚞𝚊𝚕𝚒𝚣𝚊𝚍𝚊 ↴_`
for( i of ABC.resultado ) {
  txt += `\n▧⃯⃟𝚃𝚒𝚖𝚎: ${i.equipe}
▧⃯⃟𝙿𝚘𝚗𝚝𝚘𝚜: ${i.pontos}
▧⃯⃟𝙹𝚘𝚐𝚘𝚜: ${i.jogosJogados}\n`
}
reply(txt)
} catch {
reply("Erro")
}
break

case 'globo': case 'poder360': case 'jovempan': case 'uol': case 'cnnbrasil':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
try {
res = await fetchJson(`${blacksite}/api/noticias/${command}?apikey=`+API_KEY_FREE);
total = res.pesquisa.resultado
teks = total[Math.floor(Math.random()*total.length)]
pocpoc = `Título - ${teks.noticia}\nLink - ${teks.link}`
await astaup.sendMessage(from, {image: await getBuffer(teks.imagem), caption: `${pocpoc}`}, {quoted: info}).catch(() => {
return reply("❌️ Erro!");
})
} catch (e) {
return reply("❌️ Erro!");
}
break

case 'addnv-adc': case 'rmnv-adc':
case 'addnv-mod': case 'rmnv-mod':
case 'addnv-rm': case 'rmnv-rm':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o comando?")
com = command.split("-")[1]
if(com == "adc") nmr = 0
if(com == "mod") nmr = 1
if(com == "rm") nmr = 2
if(command.startsWith("add")) {
var [co, de] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
novidades[nmr].add.push({cmd: co.toLowerCase(), desc: de ? de : ""})
saveJSON(novidades, "./database/midia/data/novidades.json")
reply(`*_Comando adicionado a lista com sucesso ✅_*`)
} else {
AB = novidades[nmr].add.map(i => i.cmd).indexOf(q.toLowerCase())
if(AB < 0) return reply("Comando não encontrado")
novidades[nmr].add.splice(AB, 1)
saveJSON(novidades, "./database/midia/data/novidades.json")
reply(`*_Comando removido da lista com sucesso ✔️_*`)
}
break

case 'novidades':
case 'novo':
reagir("✅")
reply(`
✅ *COMANDOS ADICIONADOS:*

${novidades[0].add.length > 0 ? novidades[0].add.map(a => `• ${prefix+a.cmd} ${a.desc.length > 0 ? `_(${a.desc})_` : ``}`).join("\n") : "🚫 nenhum 🚫"}

---------------------------------------------------------
⚠️ *COMANDOS ALTERADOS:*

${novidades[1].add.length > 0 ? novidades[1].add.map(b => `• ${prefix+b.cmd} ${b.desc.length > 0 ? `_(${b.desc})_` : ``}`).join("\n") : "🚫 nenhum 🚫"}

---------------------------------------------------------
🗑️ *COMANDOS REMOVIDOS:*

${novidades[2].add.length > 0 ? novidades[2].add.map(c => `• ${prefix+c.cmd} ${c.desc.length > 0 ? `_(${c.desc})_` : ``}`).join("\n") : "🚫 nenhum 🚫"}

---------------------------------------------------------
💬 *NOSSO CHAT:* ${prefix}blackgp
❓ *Alguma sugestão ? Use o comando:* ${prefix}sugestão
💾 *Algum bug ? relate à nossa equipe no comando:* ${prefix}bug
`)
break

case 'enquete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q.includes('/') || !q.includes('|')) return reply(`Olha só como faz ${pushname}

${prefix+command} matheuzinho o mais brabo ?|sim/não/tlvz`)
luck1 = q.split('|')[0]
luck2 = q.split('|')[1]
math1 = `${luck2} `
math2 = []
for(i = 0; i < math1.length; i++) {
math2.push({sla: math1.split(math1.slice(i+1))[0].slice(i)})
}
math3 = 1
for(i = 0; i < math2.length; i++) {
if(math2[i].sla.includes('/')) {
math3 += 1
}
}
if(math3 < 2) {
reply(`Defina ao mínimo duas alternativas de respostas...`)
} else {
math4 = []
for(i = 0; i < math3; i++) {
math4.push(luck2.split('/')[i])
}
sendAsPoll(from, luck1, math4)
}
break

case 'apk': case 'aptoide':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Ex: ${prefix+command} capcut`)
reagir(`🎯`)
try {
ABC = await fetchJson(blacksite+`/api/aptoide?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
i = ABC.resultado[0]
nmr = Number(String(i.stats.prating.avg).split(`.`)[0])
if(nmr <= 0) star = `✧✧✧✧✧`
if(nmr >= 1) star = `✦✧✧✧✧`
if(nmr >= 2) star = `✦✦✧✧✧`
if(nmr >= 3) star = `✦✦✦✧✧`
if(nmr >= 4) star = `✦✦✦✦✧`
if(nmr >= 5) star = `✦✦✦✦✦`
txt =
`🎭 *Nome:* ${i.name}
🧵 *Desenvolvedor:* ${i.developer != null ? i.developer.name : `"desconhecido"`}
🧶 *Versão:* ${i.file.vername}
📲 *Downloads:* +${largeNumber(i.stats.pdownloads)}

_${star} ${i.stats.prating.avg} (${i.stats.prating.total} avaliações)_`
sendUrlText(from, txt, `🔽 APTOIDE - ${i.name}`, `Adicionado em ${i.added.split(` `)[0].split(`-`).reverse().join(`/`)}, às ${i.added.split(` `)[1].split(`:`).splice(0, 2).join(`:`)}h`, i.icon, `https://${i.uname}.br.aptoide.com/app`, seloctt)
astaup.sendMessage(from, {document: {url: i.file.path}, caption: `~_*© black system*_~`, fileName: i.name + `.apk`, mimetype: `application/vnd.android.package-archive`})
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`) }
break

case 'verificado-global':
case 'globalv':
case 'selo':
if(!isOwner) return reply(enviar.msg.dono)
if(!isVerificado) {
obrigadoEXT.verificado = true
setObg(obrigadoEXT)
reply(`🔰 verificado global ativado com sucesso ✅`)
} else if(isVerificado) {
obrigadoEXT.verificado = false
setObg(obrigadoEXT)
reply(`➿ verificado global desativado com sucesso ✔️`)
}
break

case 'botoes':
if(!isOwner) return reply(enviar.msg.dono);
if(botoes) {
botoes = false
obrigadoEXT.botoes = false
setObg(obrigadoEXT)
reply("✖️ Os botões foram desativados... Sábia atitude ➿");
} else if(!botoes) {
botoes = true
obrigadoEXT.botoes = true
setObg(obrigadoEXT)
reply(`✔️ Os botões foram ativados... Use com sabedoria 〰️`)
}
await sleep(700)
console.log(colors.green(`Restart necessário para save de dados..`))
process.exit()
break;

case 'audio-menu': 
if(!isOwner) return reply(enviar.msg.dono)
if(!isAudioMenu) {
obrigadoEXT.menu_audio = true
setObg(obrigadoEXT)
reply(`✔️ O áudio menu foi ativado com sucesso 〰️`)
} else if(isAudioMenu) {
obrigadoEXT.menu_audio = false
setObg(obrigadoEXT)
reply(`✖️ O áudio menu foi desativado com sucesso ➿`)
}
break

case 'console':   
if(!isOwner) return reply(enviar.msg.dono)
if(!isConsole) {
obrigadoEXT.consoleoff = true
setObg(obrigadoEXT)
reply(`✔️ O console foi ativado... Todas as ações do bot serão mostradas lá 〰️`) 
} else if(isConsole) {
obrigadoEXT.consoleoff = false
setObg(obrigadoEXT)
reply(`✖️ O console foi desativado... As ações do bot não serão mais vistas lá ➿`)
}
break

case 'menu': case 'm':
setTimeout(() => {reagir(react2)}, 300)
if(isIOS || !botoes) return sendMenuPrime()
let botaoblk = {
  type: `list`,
  title: `〘  𝙼𝚘𝚜𝚝𝚛𝚊𝚛 𝙻𝚒𝚜𝚝𝚊 〙`,
  rowId: [
    {
      title: "『 ᴍᴀᴛʜᴇᴜᴢɪɴʜᴏ╰⁔╯ᴅᴏᴍɪɴᴀ 』",
      options: [
        {title: "👑╰𝙄𝙉𝙁𝙊-𝘿𝙊𝙉𝙊╮", command: `${prefix}infodono`, body: `ᖾ ${NomeDoBot}`},
      ]
    },
    {
      title: "『 𝙳𝙸𝚅𝙴𝚁𝚂𝙾𝚂 𝙼𝙴𝙽𝚄𝚂 』",
      options: [
        {title: "💎╰𝙈𝙀𝙉𝙐-𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇╮", command: `${prefix}comandos`, body: `ᖾ ${NomeDoBot}`},
        {title: "🎗️╰𝙈𝙀𝙉𝙐-𝘼𝘿𝙈╮", command: `${prefix}menuadm`, body: `ᖾ ${NomeDoBot}`},
        {title: "💰╰𝙈𝙀𝙉𝙐-𝘼𝙇𝙐𝙂𝙐𝙀𝙇╮", command: `${prefix}menualuguel`, body: `ᖾ ${NomeDoBot}`},
        {title: "🤪 ╰𝙈𝙀𝙉𝙐-𝙕𝙊𝙀𝙄𝙍𝘼╮", command: `${prefix}menuzoeira`, body: `ᖾ ${NomeDoBot}`},
        {title: "❤️‍🔥╰𝙈𝙀𝙉𝙐-𝙏𝙄𝙉𝘿𝙀𝙍╮", command: `${prefix}menutinder`, body: `ᖾ ${NomeDoBot}`},
        {title: "🎮╰𝙈𝙀𝙉𝙐-𝙂𝘼𝙈𝙀𝙎╮", command: `${prefix}menujogos`, body: `ᖾ ${NomeDoBot}`},
        //{title: "〔🏦 𝙈𝙀𝙉𝙐-𝘽𝙇𝘼𝘾𝙆-𝘾𝙄𝙏𝙔 🏦〕", command: `${prefix}menubc`, body: `⮑ ${NomeDoBot}`},
        {title: "🧩╰𝙈𝙀𝙉𝙐-𝙀𝙁𝙀𝙄𝙏𝙊𝙎╮", command: `${prefix}menuefeitos`, body: `ᖾ ${NomeDoBot}`},
        {title: "🧸╰𝙈𝙀𝙉𝙐-𝙈𝙊𝘿𝙎╮", command: `${prefix}menumods`, body: `ᖾ ${NomeDoBot}`},
        {title: "💝╰𝙈𝙀𝙉𝙐-𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎╮", command: `${prefix}menufigu`, body: `ᖾ ${NomeDoBot}`},
        {title: "😃╰𝙈𝙀𝙉𝙐-𝙀𝙈𝙊𝙅𝙄╮", command: `${prefix}menuemoji`, body: `ᖾ ${NomeDoBot}`},
        {title: "💿╰𝙈𝙀𝙉𝙐-𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎╮", command: `${prefix}menudownloads`, body: `ᖾ ${NomeDoBot}`},
        {title: "📜╰𝙈𝙀𝙉𝙐-𝙇𝙊𝙂𝙊𝙎╮", command: `${prefix}menulogos`, body: `ᖾ ${NomeDoBot}`},
        {title: "🤑╰𝙈𝙀𝙉𝙐-𝙑𝙄𝙋╮", command: `${prefix}menuvip`, body: `ᖾ ${NomeDoBot}`},
        {title: "🔞╰𝙈𝙀𝙉𝙐-𝙉𝙎𝙁𝙒╮", command: `${prefix}menu+18`, body: `ᖾ ${NomeDoBot}`},
        {title: "🔱╰𝙈𝙀𝙉𝙐-𝘿𝙊𝙉𝙊╮", command: `${prefix}menudono`, body: `ᖾ ${NomeDoBot}`},
      ]
    },
    {
      title: "『 𝙲𝙷𝙴𝙲𝙺𝚂 𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙾𝙴𝚂 』",
      options: [
        {title: "⚡╰𝘾𝙃𝙀𝘾𝙆-𝙋𝙄𝙉𝙂╮", command: `${prefix}ping2`, body: `ᖾ ${NomeDoBot}`},
        {title: "😼╰𝙈𝙀𝙐-𝙋𝙀𝙍𝙁𝙄𝙇╮", command: `${prefix}perfil`, body: `ᖾ ${NomeDoBot}`},
        {title: "🛒╰𝘼𝙇𝙐𝙂𝘼𝙍-𝘽𝙇𝘼𝘾𝙆╮", command: `${prefix}alugar`, body: `ᖾ ${NomeDoBot}`},
        {title: "💬╰𝘾𝙃𝘼𝙏-𝙊𝙁𝙄𝘾𝙄𝘼𝙇╮", command: `${prefix}blackgp`, body: `ᖾ ${NomeDoBot}`},
        {title: "✅╰𝘼𝙑𝘼𝙇𝙄𝘼𝙍-𝘽𝙇𝘼𝘾𝙆╮", command: `${prefix}avalie`,body: `ᖾ ${NomeDoBot}`},
        {title: "💡╰𝙎𝙐𝙂𝙀𝙎𝙏𝘼̃𝙊╮", command: `${prefix}sugestao`, body: `ᖾ ${NomeDoBot}`},
        {title: "💾╰𝙍𝙀𝙋𝙊𝙍𝙏𝘼𝙍-𝙐𝙈-𝘽𝙐𝙂╮", command: `${prefix}menuvip`, body: `ᖾ ${NomeDoBot}`},
        {title: "👻╰𝙎𝙀-𝘼𝙋𝙍𝙀𝙎𝙀𝙉𝙏𝙀-𝘽𝙇𝘼𝘾𝙆╮", command: `${prefix}infobot`, body: `𝑨𝒖𝒅𝒊𝒐 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒏𝒅𝒐...`}
      ]
    }
  ]
}
if(isOwner) botaoblk.rowId.push({
  title: "『 ᴍᴀᴛʜᴇᴜᴢɪɴʜᴏ╰⁔╯ᴅᴏᴍɪɴᴀ 』",
  options: [
    {title: "🎄╰𝙑𝙀𝙍𝙎𝘼̃𝙊-𝙑𝙄𝙋╮", command: `${prefix}comprarbot`, body: `ᖾ Este bot possui uma versão vip, melhorada, com mais comandos e totalmente editável... Acesse o nosso atendimento e não fique de fora!!`},
  ]
})
txt = `〔🏷〕⥲ 𝙉𝙄𝘾𝙆: ${pushname}
〔📅〕⥲ 𝘿𝘼𝙏𝘼: ${sendHours('DD/MM/YYYY')}
〔⏱〕⥲ 𝙃𝙊𝙍𝘼: ${sendHours('HH:mm:ss')}
〔⚜〕⥲ 𝙑𝙄𝙋: ${isVip ? 'Sim ✅' : 'Não ❌'}`, `${NomeDoBot}`
sendButton(from, {image: {url: logoslink.logo}, caption: txt, footer: NomeDoBot, contextInfo: {forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: blackchannel, newsletterName: channel.name}}}, astaup, [botaoblk], info)
break

case 'comandos':
setTimeout(() => {reagir(`😃`)}, 300)
if(isAudioMenu) {sendAudioPTT(astaup, from, './database/midia/audios/audiomenu.m4a', info)}
const { menuprime } = require("./dono/menus/comandos.js")
menutxt = menuprime(pushname, sendHours('DD/MM/YYYY'), sendHours('HH:mm:ss'), isVip, pushnames(), prefix)
sendMenu(menutxt)
break

case 'logos':
case 'menulogo':
case 'menulogos':
setTimeout(() => {reagir("📜")}, 300)
const { menulogos } = require("./dono/menus/menulogos.js")
mlogos = menulogos(sender, prefix)
sendMenu(mlogos)
break

case 'menufigurinhas':
case 'menufigu':
case 'menufig':
setTimeout(() => {reagir("💝")}, 300)
const { menufig } = require("./dono/menus/menufig.js")
menuf = menufig(sender, prefix)
sendMenu(menuf)
break

case 'menuemoji':
setTimeout(() => {reagir("😃")}, 300)
const { menuemoji } = require("./dono/menus/menuemoji.js")
MEJ = menuemoji(sender, prefix)
sendMenu(MEJ)
break

case 'menu+18': case '+18': case 'menunsfw':
if(isGroup && !isNsfw) return reply(`*Este comando só pode ser executado com o modo+18 ativo...*
*Para ativa-lo, digite* ${prefix}modo+18`)
if(!isGroup && !isVip) return reply("Este recurso no PV só está liberado para usuários VIP")
setTimeout(() => {reagir("🔞")}, 300)
const { menunsfw } = require("./dono/menus/menunsfw.js")
m18 = menunsfw(sender, prefix)
sendMenu(m18)
break

case 'menudownloads':
case 'menudown':
case 'downloads':
case 'musica':
case 'musicas':
case 'tocarmusica':
setTimeout(() => {reagir("💿")}, 300)
const { menudown } = require("./dono/menus/menudown.js")
sendMenu(menudown(sender, prefix))
break

case 'menujogos':
case 'jogos':
case 'menugames':
case 'games':
setTimeout(() => {reagir("🎮")}, 300)
const { menujogos } = require("./dono/menus/menujogos.js")
menugame = menujogos(sender, prefix)
sendMenu(menugame)
break

case 'menutinder':
setTimeout(() => {reagir("❤️‍🔥")}, 300)
const { menutinder } = require("./dono/menus/menutinder.js")
sendMenu(menutinder(sender, prefix))
break

case 'menualuguel':
case 'menurent':
setTimeout(() => {reagir("💰")}, 300)
const { menualuguel } = require("./dono/menus/menualuguel.js")
sendMenu(menualuguel(sender, prefix))
break

case 'menuadm':
case 'menuadms':
case 'adm':
setTimeout(() => {reagir("🎗️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) { reply(enviar.msg.adm)
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/apenasadm.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
const { menuadm } = require("./dono/menus/menuadm.js")
sendMenu(menuadm(sender, prefix))
break

case 'menudono':
case 'donomenu':
if(!isOwner) { reply(enviar.msg.dono)
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/cmddono.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("🔱")}, 300)
const { menudono } = require("./dono/menus/menudono.js")
txt = menudono(sender, prefix)
sendMenu(txt)
break

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'menuefeitos':
reagir("🧩")
const { menuefeitos } = require("./dono/menus/menuefeitos.js")
txt = menuefeitos(sender, prefix)
astaup.sendMessage(from, {image: {url: logoslink.logo}, caption: txt, mentions: [sender]})
break

case 'alteradores':
case 'mods':
case 'mod':
case 'menumods':
reagir("🧸")
const { menumods } = require("./dono/menus/menumods.js")
txt = menumods(sender, prefix)
sendMenu(txt)
break

case 'menuzoeira':
case 'zoeira':
case 'brincadeiras':
setTimeout(() => {reagir("🤪")}, 300)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
const { menuzoeira } = require("./dono/menus/menuzoeira.js")
MZ = menuzoeira(sender, prefix)
sendMenu(MZ)
break 

case 'menuvip':
case 'menupremium':
case 'menuprem':
case 'vip':
setTimeout(() => {reagir("🤑")}, 300)
const { menuvip } = require("./dono/menus/menuvip.js")
mvip = menuvip(sender, prefix)
sendMenu(mvip)
break

case 'calendario':
case 'dados':
setTimeout(() => {reagir("📅")}, 300)
totalcmd = JSON.parse(fs.readFileSync("./database/midia/data/totalcmd.json"))[0].totalcmd
day = `
${tempo_emoji} *${tempo.toUpperCase()}*
👤 ${pushname}

👥 *GRUPO:* ${isGroup ? groupName : "privado"}
📆 *DATA & HORA ↴*
${semana}, ${realtime}
🎲 *TOTAL-CMD:* ${totalcmd} comandos
🤖 *BOT:* ${NomeDoBot}
👑 *DONO:* ${NickDono}

📠 _Operando em ${allGroups.length} grupos_
`
if(isGroupInRent(from)) {
hehe = getGroupRent(from)
day += `🔋 *Bateria restante para uso ↴*
-> ${barrinha(hehe.tempo, hehe.totalRent)} ${hehe.cliente == sender || isOwner ? `\n»⟩ ${sendTimeHours(hehe.tempo)} até o fim do contrato ⟨«` : ``}
`
}
reply(`${day}`)
break

case 'stickerid'://vitukjk
if(isQuotedSticker) {
const stickerId = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex').toUpperCase();
reply(`${stickerId}`);
} else {
reply('Marque uma figurinha para mostrar o ID.');
}
break

/*case 'teste23': {
if(!isGroup) return
if(!isGroupAdmins) return
var carre = [
" ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒》10%",
" ʟᴏᴀᴅɪɴɢ\n《 ██▒▒▒▒▒▒▒▒》20%",
" ʟᴏᴀᴅɪɴɢ\n《 ███▒▒▒▒▒▒▒》30%",
" ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒》40%",
" ʟᴏᴀᴅɪɴɢ\n《 █████▒▒▒▒▒》50%",
" ʟᴏᴀᴅɪɴɢ\n《 ██████▒▒▒▒》60%",
" ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒》70%",
" ʟᴏᴀᴅɪɴɢ\n《 ████████▒▒》80%",
" ʟᴏᴀᴅɪɴɢ\n《 █████████▒》90%",
" ʟᴏᴀᴅɪɴɢ\n《 ██████████》100%",
"~_*© matheuzinho*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await astaup.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//primeira mensagem

for (let i = 0; i < carre.length; i++) {
await astaup.sendMessage(from, {text: carre[i], edit: key })
}
}
break*/

case 'nasa':
if(!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
try {
data = await fetchJson(`${blacksite}/api/nasaphoto?data=${q}&apikey=`+API_KEY_FREE)
resultExp = await fetchJson(`${blacksite}/api/info/translate?texto=${data.nasa.explanation}&ling=pt&apikey=`+API_KEY_FREE)
astaup.sendMessage(from, {image: {url: data.nasa.hdurl}, caption: resultExp.result}, {quoted: info})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro");
}
break;

case 'traduzir':
if(!isGroup) return
if(args.length < 2) return reply(`Você precisa selecionar o idioma primeiro e após ele o texto, ex:
${prefix+command} pt i love you`)
txt1 = args[0]
txt2 = q.split(args[0])[1]
try {
ABC = await fetchJson(`${blacksite}/api/info/translate?texto=${encodeURI(txt2)}&ling=${encodeURI(txt1)}&apikey=`+API_KEY_FREE)
reply(`${ABC.result}`)
} catch {
  reply(`Erro 404`)
}
break

case 'channel':
reagir(`✔`)
sendChannelText(from, `*_Canal oficial da Black System_* ✅`, blackchannel, channel.name, seloctt)
break

case 'blackgp': case 'blackgrupo': case 'blackgroup': case 'link': case 'chatoficial':
reagir(`✅`)
try {
nome = (await astaup.groupMetadata(obrigadoEXT.idchatofc)).subject
link = await astaup.groupInviteCode(obrigadoEXT.idchatofc)
try { ppUrl = await astaup.profilePictureUrl(obrigadoEXT.idchatofc, 'image')
} catch { ppUrl = semfoto }
if(isGroup) {
linkgp = `*Link do nosso grupo:* ✅

https://chat.whatsapp.com/`+link
sendUrlText(from, linkgp, nome, `Chat OFC do ASTA V5`, ppUrl, `https://chat.whatsapp.com/`+link, seloctt)
} else {
sendUrlDoc(from, `*Link do nosso Chat...* ✅

🔗 _Clique na imagem para entrar_`, `application/pdf`,
`${tempo_emoji}⃤ ${tempo.toUpperCase()}`,
10000, nome, '', ppUrl, `https://chat.whatsapp.com/`+link, seloctt)
}
} catch { reply("Erro") }
break

case 'blacksite': case 'blacklink': case 'astasite': case 'astalink':
reagir("🌐")
return sendButton(from, {text: `*Site oficial do black:* ✅\n\n`+blacksite, footer: `Um site para Dev's e programadores de bot`}, astaup, [{type: `copy_url`, text: `COPIE AQUI 📂`, url: blacksite}], seloctt)
break

case 'infoblack':
reagir("🥰")
ib = `${tempo_emoji} _${tempo} ${pushname}, caiu de paraquedas e não sabe como funciona tudo por aqui? Chega mais..._

🤖 _O Black é um bot altamente sofisticado, capaz de operar de forma remota e automática em seu grupo, com altas funções de administração e diversão. Nossa equipe se empenha diariamente para manter o bot online com os melhores sistemas que você pode encontrar._

💡 _Quanto ao uso dos comandos, o prefixo usado é ( ${prefix} ), basta digitar o mesmo na frente do comando para que esse seja executado... Claro que vc pode acabar digitando errado ou pode ser que o comando não exista. Sendo assim, olhe no ${prefix}menu e não exite em procurar o mesmo nos diversos menus que estão organizados lá._

_-> Modo de uso do prefixo:_
❌ menu${prefix}
❌ ${prefix} menu
✅ ${prefix}menu

💬 *NOSSO CHAT:* ${prefix}blackgp
🛒 *Se desejas alugar o bot para seu grupo digite:* ${prefix}alugar
🤔 *Dúvidas? Use:* ${prefix}suporte
❓ *Alguma sugestão ? Use o comando:* ${prefix}sugestão
💾 *Algum bug ? relate à nossa equipe no comando:* ${prefix}bug`
reply(ib)
break

case 'aluguel':
case 'alugueis':
case 'alugar':
case 'alugarbot':
case 'alugarblack': {
reagir("🛒")
moneybot = `*_»⟩Tabela de preços para alugar o bot ⟨«_*

${valoresDeAluguel.map(a => `${permuteNumberEmoji(a.id)}⧽ R$ ${Number(a.valor).toFixed(2)} (${a.tempo} dias)`).join(`\n`)}
`
var download = [
`ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`,
`ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
]
let { key } = await astaup.sendMessage(from, {text: tempo+" "+pushname}, {quoted: info})
await sleep(2000)
for(let i = 0; i < download.length; i++) {
await astaup.sendMessage(from, {text: download[i], edit: key }, {quoted: info})
}
if(isGroup) return reply(moneybot + `

❪🍧ฺ࣭࣪͘ꕸ▸ _use *${prefix}buykeygp* para escolher o tempo de aluguel e *${prefix}buygp* com o link do grupo para o bot entrar..._`)
sendButton(from, {text: moneybot, footer: `Clique nos botôes abaixo para escolher o tempo de aluguel e solicitar a entrada do bot no grupo através do link`}, astaup, [{type: `cmd`, text: `𝗘𝗦𝗖𝗢𝗟𝗛𝗘𝗥 𝗔𝗟𝗨𝗚𝗨𝗘𝗟`, command: prefix+`buykeygp`}, {type: `cmd`, text: `𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗔𝗥 𝗘𝗡𝗧𝗥𝗔𝗗𝗔`, command: prefix+`buygp`}], seloctt)
}
break

case 'loja': case 'store':
reagir("🛍️")
txt = `ㅤㅤㅤㅤㅤㅤ *🛒〘 LOJA 〙🛒* 
❪🛍️ฺ࣭࣪͘ꕸ▸ *ALUGUÉIS*
${valoresDeAluguel.map(a => `${permuteNumberEmoji(a.id)}⧽ R$ ${Number(a.valor).toFixed(2)} (${a.tempo} dias)`).join(`\n`)}
_Use *${prefix}buykeygp*_

❪💰ฺ࣭࣪͘ꕸ▸ *VIP*
1️⃣ R$ ${Number(valoresVIP.vip).toFixed(2)} (30 dias - VIP global sem puxadas)
2️⃣ R$ ${Number(valoresVIP.vipcp).toFixed(2)} (30 dias - VIP global com puxadas)
3️⃣ R$ ${Number(valoresVIP.vipgp).toFixed(2)} (30 dias - VIP de grupo sem puxadas)
4️⃣ R$ ${Number(valoresVIP.vipgpcp).toFixed(2)} (30 dias - VIP de grupo com puxadas)
_Use *${prefix}buyvip* ou *${prefix}buyvipgp*_

❪🔖ฺ࣭࣪͘ꕸ▸ *Card XP*
_Cada dia é multiplicado 1 a mais (Se for 1 dia, multiplica por 2... Se for 3 dias, multiplica por 4, etc)_
${valoresXP.map(x => `*» ${x.velocidade} «*
` + x.dados.map(p => `${permuteNumberEmoji(p.id)}⧽ R$ ${Number(p.valor).toFixed(2)} (${x.velocidade} por ${sendLetterTime(p.tempo)})`).join(`\n`)).join(`\n`)}
_Use *${prefix}buycard*_`
EnvButton(from, [txt, `Caso queira visualizar a loja em lista, clique no botão abaixo...`], astaup, [{text: `𝙎𝙏𝙊𝙍𝙀 𝙇𝙄𝙎𝙏 🕹`, command: prefix+`storelist`}], seloctt)
break

case 'storelist': case 'liststore': case 'lojalista': case 'listaloja':
txt =
`\t\t\t⮑ 𝙎𝙏𝙊𝙍𝙀 𝙇𝙄𝙎𝙏 ⮐
〔👤〕↝ ᴜꜱᴜᴀ́ʀɪᴏ: @${sender.split("@")[0]}
〔📆〕↝ ᴅᴀᴛᴀ: ${sendHours("dddd, LL")}
〔💰〕↝ ꜱᴀʟᴅᴏ: R$ ${getSepCoins(sender)[2]}`
listaluguel = []
for(a of valoresDeAluguel) {
  listaluguel.push({name: `ALUGUE AGORA`, title: `${permuteNumberEmoji(a.id)}⧽ ${a.tempo} dias`, body: `R$ ${Number(a.valor).toFixed(2)}`, command: prefix+`buykeygp `+a.tempo})
}
listvip = []
for(b = 0; b < 3; b++) {listvip.push({name: `VIP GLOBAL "SEM" PUXADAS`, title: `${permuteNumberEmoji(listvip.length + 1)}⧽ ${(b + 1) * 10} dias`, body: `R$ ${Number((b + 1) * (valoresVIP.vip / 3)).toFixed(2)}`, command: prefix+`buyvip `+String((b + 1) * 10)},
{name: `VIP GLOBAL "COM" PUXADAS`, title: `${permuteNumberEmoji(listvip.length + 2)}⧽ ${(b + 1) * 10} dias`, body: `R$ ${Number((b + 1) * (valoresVIP.vipcp / 3)).toFixed(2)}`, command: prefix+`buyvip `+String((b + 1) * 10)+`/puxadas`})}
for(c = 0; c < 3; c++) {listvip.push({name: `GRUPO VIP "SEM" PUXADAS`, title: `${permuteNumberEmoji(listvip.length + 1)}⧽ ${(c + 1) * 10} dias`, body: `R$ ${Number((c + 1) * (valoresVIP.vipgp / 3)).toFixed(2)}`, command: prefix+`buyvipgp `+String((c + 1) * 10)},
{name: `GRUPO VIP "COM" PUXADAS`, title: `${permuteNumberEmoji(listvip.length + 2)}⧽ ${(c + 1) * 10} dias`, body: `R$ ${Number((c + 1) * (valoresVIP.vipgpcp / 3)).toFixed(2)}`, command: prefix+`buyvipgp `+String((c + 1) * 10)+`/puxadas`})}
listcardxp = []
for(d of valoresXP) {
  for(e of d.dados) {listcardxp.push({name: d.velocidade, title: `${permuteNumberEmoji(listcardxp.length + 1)}⧽ ${sendLetterTime(e.tempo)}`, body: `R$ ${Number(e.valor).toFixed(2)}`, command: prefix+`buycard ${d.velocidade}/${sendLetterTime(e.tempo)}`})}
}
but =
[{title: `ALUGUEL DE GRUPO`, options: listaluguel},
{title: `VIP GLOBAL E GRUPO VIP`, options: listvip},
{title: `CARD MULTI XP`, options: listcardxp}]
sendButton(from, {image: {url: `https://telegra.ph/file/698a9e0883be7a1091ae7.jpg`}, caption: txt, mentions: [sender], footer: `_Escolha na lista abaixo o que desejas comprar ⤵_`, contextInfo: {forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: blackchannel, newsletterName: channel.name}}}, astaup, [{type: `list`, title: `〘 💢 CLIQUE AQUI 💢 〙`, rowId: but}], seloctt)
break

case 'infoaluguel':
setTimeout(() => {reagir("🤑")}, 300)
reply(`*Olá caro viajante, está perdido de como alugar o Black ?? Ett vou lhe dar uma rápida dica.* 🧐
  
*Como visto na tabela acima, tem os preços de aluguel mensal... O preço varia dependendo da quantidade de meses; porém o preço é unitário por grupo.* 😃

*Por exemplo, se alugar dois grupos por 1 mês, vai ser ${valoresDeAluguel[1].valor}+${valoresDeAluguel[1].valor} = ${valoresDeAluguel[1].valor + valoresDeAluguel[1].valor}$. Ou se alugar dois grupos por dois meses, será ${valoresDeAluguel[2].valor}+${valoresDeAluguel[2].valor} = ${valoresDeAluguel[2].valor + valoresDeAluguel[2].valor}$.* 💵

*Caso você queira alugar o bot ou queira mais informações, chame meu dono no PV* 👑`)
break

case 'recarga': case 'recarregar': {
valores = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
caixa = [{tap: []}]
total = 0
for(a = 0; a < valores.length; a++) {
  if(caixa[total].tap.length < 3) {
    caixa[total].tap.push(valores[a])
  } else {
    caixa.push({tap: [valores[a]]})
    total += 1
  }
}
if(!valores.includes(Number(q))) {
  if(isIOS) return reply(`*_Retorne o valor da recarga diretamente após o comando, ex:_*
_${prefix+command} ${valores[alerandom(valores.length)]}_

*_Valores disponíveis:_*
${caixa.map(a => `_` + a.tap.map(b => `R$ ${Number(b).toFixed(2)}`).join(`\t\t\t\t\t\t\t`) + `_`).join(`\n`)}`)
  matheuzinho = []
  for(v of valores) {
    matheuzinho.push({title: `𝗥𝗘𝗖𝗔𝗥𝗚𝗔 𝗡𝗢 𝗩𝗔𝗟𝗢𝗥 𝗗𝗘 ${v}$`, body: `referente a ${v} moeda${v != 1 ? "s" : ""}`, command: prefix+command+" "+String(v)})
  }
  return sendButton(from, {text: tempo + " " + pushname + ", vejo que você não escolheu o valor da recarga corretamente... Irei te mandar a tabela abaixo ↴", footer: `𖥨ํ∘̥⃟⸽⃟💌৴▸ _Lembrando que essa recarga não está vinculada a compra de nenhum produto no bot, com exceção das moedas... Tais moedas após compradas poderão ser usadas para afins como aluguéis de grupos, VIP e outros. Para mais info, ver *${prefix}inforent*_`}, astaup, [{type: "list", title: `〘 𝗥𝗘𝗖𝗔𝗥𝗚𝗔𝗦 〙`, rowId: [{title: NomeDoBot, options: matheuzinho}]}], seloctt)
}
nmr = Number(q)
var pagament = new payment(MercadoPagoKey)
try {
let inf = await pagament.create_payment(nmr)
console.log(colors.yellow(`\n\n[⚠️] código de pagamento gerado no valor de ${nmr}$ ⚜️\n\n`))
if(isGroup) reply('Por questões de segurança, irei te enviar os dados no PV...')
await sleep(1000)
if(!isIOS) {
sendButton(sender, {image: Buffer.from(inf.qr_code, "base64"), caption: `QR code de pagamento acima... Caso queira apenas o código, segue o pix copia e cola abaixo ↴`, footer: NomeDoBot, contextInfo: {forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: blackchannel, newsletterName: channel.name}}}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI PARA COPIAR 📑`, url: inf.copy_paste}], seloctt)
} else {
astaup.sendMessage(sender, {image: Buffer.from(inf.qr_code, "base64"), caption: `QR code de pagamento acima... Caso queira apenas o código, segue o pix copia e cola abaixo ↴`, footer: NomeDoBot, contextInfo: {forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: blackchannel, newsletterName: channel.name}}}, {quoted: seloctt})
await sleep(3000)
sendMess(sender, inf.copy_paste)
}
await sleep(5000)

sendMess(sender, `Lembrando que você tem 10 minutos para efetuar o pagamento... Caso exceda o tempo, há possibilidade do sistema não contabilizar as moedas.

Qualquer dúvida, use o comando ${prefix}suporte...`)

let check = await pagament.check_payment();

while(check.status == 'pending') { check = await pagament.check_payment() }
if(check.status == "approved") {
addCoinsInVirtualBalance(sender, nmr)
console.log(colors.green(`\n\n[❕] pagamento efetuado com sucesso ✔️\n\n`))
const sendComp = (taxa, valor) => {
sub = 100 / taxa
return `
┏◤ ━━━━━━━━━━───━━━━━━━━━━━ ◢┓
[⚙️] *COMPROVANTE DE PAGAMENTO* [⚙️]
╟┓
║┢ ❪📖ฺ࣭࣪͘ꕸ▸ *Nome:* ${pushname}
║┢ ❪📱ฺ࣭࣪͘ꕸ▸ *Número:* @${sender.split('@')[0]}
║╽
║┢ ❪💸ฺ࣭࣪͘ꕸ▸ *Valor:* R$ ${Number(valor).toFixed(2)}
║┢ ❪💰ฺ࣭࣪͘ꕸ▸ *Taxa:* ${taxa}% ( R$ ${Number(valor/sub).toFixed(2)} )
║┢ ❪🪙ฺ࣭࣪͘ꕸ▸ *Total:* R$ ${Number(valor - (valor / sub)).toFixed(2)}
║╽
║┢ 📅⃤ *Data:* ${sendHours('DD/MM/YYYY')}
║┢ ⏰⃤ *Hora:* ${sendHours('HH:mm:ss')}
║╽
║╽ㅤㅤㅤㅤ💠 Black System 💠
╙┷━━━━━━━━━━━───━━━━━━━━━━━┛
` }
astaup.sendMessage(obrigadoEXT.idprivategp, {text: sendComp(1, nmr), mentions: [sender, nmrdn]})
await sleep(1000)
mention(`💠 Parabéns @${sender.split('@')[0]}, seu débito foi aprovado no valor de *R$ ${Number(nmr).toFixed(2)}* debitado em sua conta virtual da Black System proveniente da recarga... Para mais info sobre o que fazer com suas moedas, acesse *${prefix}loja*`)
await sleep(1000)
return sendMess(sender, sendComp(0, nmr))
}
reply("Pagamento expirado ヅ")
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Sistema parece instável... Pfvr, volte mais tarde ✋🏽😳🤚🏽")
}
}
break

case 'me': case 'you':
if(command == `you`) {
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply("Marque o usuário que vc quer puxar o saldo")
usu = all_type_number
} else { usu = sender }
registrarUsuInVirtualBalance(usu)
try { ppimg = await astaup.profilePictureUrl(`${usu.split('@')[0]}@c.us`, 'image')
} catch { ppimg = semfoto }
i = getCoinsUsu(usu)
txt = `📖 *NOME:* ${getSepCoins(usu)[0]}
💸 *SALDO:* R$ ${getSepCoins(usu)[2]}
📱 *WHATSAPP:* wa.me/${i.id.split('@')[0]}
🆔 *ID:* ${i.UID}
💳 *CORTESIAS:* ${i.cortesia} ${i.keys.length > 0 ? `

🔑 *KEYS:*
${i.keys.map(k => `• *chave:* ${isGroup ? k.key.slice(0, 10) + `#`.repeat(k.key.length - 10) : k.key}
• *tipo:* "${k.tipo == 1 ? `aluguel` : k.tipo == 2 ? `cortesia` : k.tipo == 3 ? `vip` : k.tipo == 4 ? `grupo vip` : `card xp`}"
• *tempo:* ${k.tempo <= 0 ? `∞ INFINITO` : k.tipo == 1 || k.tipo == 2 || k.tipo == 5 ? String((k.tempo - (k.tempo % 24)) / 24) + `d` + ((k.tempo % 24) > 0 ? ` e ` + String(k.tempo % 24) + `h` : ``) : String(k.tempo) + `d`}`).join(`\n\n`)}` : ``}

_Registrado em ${i.rg}_`
sendChannelText(from, txt, channel.id, channel.name)
break

case 'keys':
if(!isOwner) return reply(enviar.msg.dono)
if(allKeysRentSystem.length <= 0) return reply(`Não há keys salvas na database do bot...`)
txt =
`🎲 _*Total de keys:* ${allKeysRentSystem.length}_
${allKeysRentSystem.map(k => `👤 *ID:* @${k.cliente.split("@")[0]}
🔑 *CHAVE:* ${isGroup ? k.key.slice(0, 6) + `#`.repeat(k.key.length - 6) : k.key}
🧵 *TIPO:* "${k.tipo == 1 ? `aluguel` : k.tipo == 2 ? `cortesia` : k.tipo == 3 ? `vip` : k.tipo == 4 ? `grupo vip` : `card xp`}"
⏱ *TEMPO:* ${k.tempo <= 0 ? `∞ INFINITO` : k.tipo == 1 || k.tipo == 2 || k.tipo == 5 ? String((k.tempo - (k.tempo % 24)) / 24) + `d` + ((k.tempo % 24) > 0 ? ` e ` + String(k.tempo % 24) + `h` : ``) : String(k.tempo) + `d`}`).join(`\n\n`)}`
mention(txt)
break

case 'addsaldo':
if(!isOwner) return reply(enviar.msg.dono)
var [nmr, quant] = q.split('/')
if(!nmr || !quant) return reply(`Você vai colocar o número da pessoa e após isso uma barra ( / ). Após a barra, coloque o saldo que será adc. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
if(!Number(quant)) return reply(quant+" não é número...")
usu = nmr.toLowerCase() == "me" ? sender : identArroba(nmr)
addCoinsInVirtualBalance(usu, quant)
mention(`💠 R$ ${Number(quant).toFixed(2)} adc ao saldo do usuário @${usu.split('@')[0]}`)
break

case 'rmsaldo':
if(!isOwner) return reply(enviar.msg.dono)
var [nmr, quant] = q.split('/')
if(!nmr || !quant) return reply(`Você vai colocar o número da pessoa e após isso uma barra ( / ). Após a barra, coloque o saldo que será removido. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
if(!Number(quant)) return reply(quant+" não é número...")
usu = nmr.toLowerCase() == "me" ? sender : identArroba(nmr)
rmCoinsInVirtualBalance(usu, quant)
mention(`💠 R$ ${Number(quant).toFixed(2)} rmvd do saldo do usuário @${usu.split('@')[0]}`)
break

case 'transferirsaldo': case 'transferir-saldo':
var [nmr, quant] = q.split('/')
if(!nmr || !quant) return reply(`Você vai colocar o número da pessoa e após isso uma barra ( / ). Após a barra, coloque o saldo que será transferido. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
if(!Number(quant)) return reply(quant+" não é número...")
if(Number(quant) < 0) return reply("O valor precisa ser maior que 0")
usu = identArroba(nmr)
if(usu.includes(sender)) return reply(`Não podes transferir para você msm né`)
if(usu.includes(botNumber)) return reply(`Não podes transferir para o bot né`)
registrarUsuInVirtualBalance(sender)
registrarUsuInVirtualBalance(usu)
if(Number(quant) > getCoinsUsu(sender).saldo) return reply("Você não possui saldo para efetuar essa transferência")
addCoinsInVirtualBalance(usu, quant)
rmCoinsInVirtualBalance(sender, quant)
mention(`💠 R$ ${Number(quant).toFixed(2)} transferido${Number(quant) === 1 ? "" : "s"} para o usuário @${usu.split('@')[0]}`)
break

case 'buygp':
if(!q) return reply('Insira um link de convite do grupo ao lado do comando.')
if(!q.includes('chat.whatsapp.com/') || q.includes('|')) return reply(`Ops, verifique o link que você inseriu...\nUse: ${prefix} link do grupo`)
registrarUsuInVirtualBalance(sender)
if(Number(getCoinsUsu(sender).saldo) < 5 && getCoinsUsu(sender).keys.length <= 0) return reply(`Seu saldo está abaixo do mínimo permitido para usar este comando... Recomendo efetuar uma recarga de moedas através do comando ${prefix}recarga`)
link = getIDbyWhatsLink(q)
try {
astaup.groupAcceptInvite(`${link}`)
await sleep(2000)
reply(`🤖 Entrando no grupo... Devo ressaltar que os comandos não funcionarão ao menos que vc compre uma chave de acesso através do comando *${prefix}buykeygp*`)
linkinfo = await astaup.groupGetInviteInfo(link)
criarJsonGP(linkinfo.id)
} catch(erro) {
if(JSON.stringify(erro).includes('resource-limit')) return reply(`O grupo já está com o número máximo de membros... Não consigo entrar 🫠`)
if(JSON.stringify(erro).includes('not-authorized')) return reply(`Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`)
reply(`Não foi possível entrar no grupo... Pfvr, chame meu dono para ele registrar os dados 🎲`)
}
break

case 'buycort':
if(!q) return reply(`KD o link do grupo pá eu liberar a cortesia?`)
if(!q.includes('chat.whatsapp.com/') || q.includes('|')) return reply(`Ops, verifique o link que você inseriu...\nUse: ${prefix} link do grupo`)
registrarUsuInVirtualBalance(sender)
if(Number(getCoinsUsu(sender).saldo) < 5) return reply(`Seu saldo está abaixo do mínimo permitido para usar este comando... Recomendo efetuar uma recarga de moedas através do comando ${prefix}recarga`)
if(getCoinsUsu(sender).cortesia <= 0) return reply(`Você não possui mais *CARD CORTESIA* neste mês para prosseguir com este comando...`)
link = q.split('app.com/')[1]
try {
astaup.groupAcceptInvite(`${link}`)
await sleep(2000)
gerarTypeKey(sender, {type: 2, grupo: from})
if(isGroup) reply(`Irei te enviar no PV 🧵`)
await sleep(1000)
dados = getCoinsUsu(sender)
dados.cortesia -= 1
saveCoins()
chave = dados.keys[dados.keys.length - 1].key
sendButton(sender, {text: `💡 A chave "${chave}" foi gerada com sucesso... Copie e cole a mesma no seu grupo para validar a cortesia e liberar os comandos do bot 😊`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
} catch(erro) {
if(JSON.stringify(erro).includes('resource-limit')) return reply(`O grupo já está com o número máximo de membros... Não consigo entrar 🫠`)
if(JSON.stringify(erro).includes('not-authorized')) return reply(`Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`)
reply(`Não foi possível entrar no grupo... Pfvr, chame meu dono para ele registrar os dados 🎲`)
}
break

case 'gerarkeycort': {
if(!isOwner) return reply(enviar.msg.dono)
reagir("😀")
gerarTypeKey(sender, {type: 2, grupo: from})
await sleep(500)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲
⮑ ${chave} ⮐

🎳 *_Descrição ⤵_*
〔🎯〕⥲ *Tipo:* "cortesia"
〔⏱〕⥲ *Tempo:* 24h`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
}
break

case 'transferirgp':
if(!q || !q.includes(`chat.whatsapp.com`)) return reply(`Coloque ao lado do comando o link do novo grupo em que você deseja colocar o bot... Assim:
${prefix+command} link do grupo`)
gps = []
for(i of aluguel) {if(i.cliente == sender) gps.push({title: i.nome, body: sendTimeHours(i.tempo) + " até o fim do aluguel...", command: prefix+command+" "+q+"|"+i.id})}
if(gps.length <= 0) return reply(`☝🏻😔 Smt, você não está na lista de clientes do bot... Mas não se preocupe, você pode mudar isso alugando o bot para o seu grupo usando o comando ${prefix}buykeygp 💭`)
barra = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [link, idgp] = barra.split("|")
if(!idgp) return sendButton(from, {text: `_Selecione na lista abaixo o grupo na qual você deseja transferir para o novo... Este antigo será deletado do aluguel, e uma nova key será enviada no seu privado_ 💭`, footer: `_Listando abaixo os grupos na qual o seu número consta como cliente..._`}, astaup, [{type: `list`, title: `🔻 CLIQUE AQUI 🔺`, rowId: [{title: tempo+" "+pushname, options: gps}]}], seloctt)
if(!isGroupInRent(idgp)) return reply(`Este grupo não está registrado no sistema de aluguel... Para que haja possibilidade de transferir o registro, você precisa usar este comando com um grupo na qual você seja cliente 😃`)
if(getGroupRent(idgp).cliente != sender) return reply(`Ops espertinho kkkk querendo pegar um grupo que não é seu?`)
transf = getGroupRent(idgp).transferir
if(transf <= 0) return reply(`Você não pode transferir o bot de grupo até que este seja renovado em seu aluguel... Seu limite de transferência já foi excedido. Para aumentar esse limite, basta alugar novamente qualquer um dos planos do bot.
Verifique se você tem cortesias livres em seu perfil do comando *${prefix}me*. Se tiveres, podes usar o comando *${prefix}buycort* para solicitar essa cortesia de 24h.`)
try {
astaup.groupAcceptInvite(getIDbyWhatsLink(q))
linkinfo = await astaup.groupGetInviteInfo(getIDbyWhatsLink(q))
criarJsonGP(linkinfo.id)
await sleep(1000)
temporent = getGroupRent(idgp).tempo
delRent(reply, idgp)
await sleep(1000)
if(isGroup) sendMess(from, `Irei te enviar a nova chave no PV 🧵`)
await sleep(1000)
sendMess(from, `Lembrando que a partir de agora você possui de limite de apenas +${transf - 1} para usar se assim desejar... Caso exceda esse limite, o bot ficará permanentemente no seu grupo até o fim do contrato 😎👍🏻`)
await sleep(2000)
astaup.groupLeave(idgp)
gerarTypeKey(sender, {type: 1, grupo: from, tempo: String(temporent) + `h`, transf: transf - 1})
await sleep(1000)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(sender, {text: `💡 A chave "${chave}" foi gerada com sucesso... Copie e cole a mesma no seu grupo para validar a transferência de aluguel e liberar os comandos do bot no novo chat 😊`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
await sleep(1000)
sendMess(sender, `🤖 Entrando no grupo... Devo ressaltar que os comandos não funcionarão ao menos que vc copie e cole essa chave de acesso dentro do novo grupo.`)
} catch(erro) {
console.log(erro)
if(JSON.stringify(erro).includes('resource-limit')) return reply(`O grupo já está com o número máximo de membros... Não consigo entrar 🫠`)
if(JSON.stringify(erro).includes('not-authorized')) return reply(`Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`)
reply(`Não foi possível entrar no grupo... Pfvr, chame meu dono para ele registrar os dados 🎲`)
}
break

case 'buykeygp':
valores = []
for(i of valoresDeAluguel) {valores.push({name: NomeDoBot, title: `${i.tempo} dias`, body: `R$ ${Number(i.valor).toFixed(2)}`, command: `${prefix+command} ${i.tempo}`})}
sla = false
for(s of valoresDeAluguel) {if(q && Number(q) === s.tempo) sla = true}
if(!sla) {
if(isIOS) return reply(`📊 *_Escolha a quantidade de dias para alugar:_*
${valores.map(v => `- ${v.command}`).join(`\n`)}`)
return sendButton(from, {text: `Escolha na lista abaixo a quantidade de dias que você quer alugar para o seu grupo...`, footer: NomeDoBot}, astaup, [{type: `list`, title: `〘 ESCOLHA AQUI 〙`, rowId: [{title: `escolha abaixo`, options: valores}]}], seloctt)
}
gvr = getValuesRent(q)
if(getCoinsUsu(sender).saldo < gvr.valor) return reply(`[❗] Você não possui saldo suficiente para efetuar essa compra... Para alugar ${gvr.tempo} dias, serão necessários R$ ${(gvr.valor).toFixed(2)}, e você possui apenas R$ ${getSepCoins(sender)[2]} em sua conta... Use o comando ${prefix}recarga para adicionar moedas a sua conta e comprar as keys 😕`)
rmCoinsInVirtualBalance(sender, gvr.valor)
gerarTypeKey(sender, {type: 1, grupo: from, tempo: String(gvr.tempo) + `d`, valor: gvr.valor, transf: valoresDeAluguel.map(vda => vda.tempo).indexOf(Number(q)) + 2})
if(isGroup) reply(`Irei te enviar no PV 🧵`)
await sleep(1000)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(sender, {text: `💡 A chave "${chave}" foi gerada com sucesso... Copie e cole a mesma no seu grupo para validar o aluguel e liberar os comandos do bot 😊`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
await sleep(500)
sendMess(sender, `A propósito, caso você não tenha solicitado a entrada do bot no seu grupo, use *${prefix}buygp* com o link ao lado para o bot entrar 🥰`)
break

case 'gerarkeygp': {
if(!isOwner) return reply(enviar.msg.dono)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30d`)
usu = v1.toLowerCase() == "me" ? sender : identArroba(v1)
const [checkkeygp] = await astaup.onWhatsApp(usu.split('@')[0])
if(checkkeygp == undefined) return reply(`O número ${usu.split('@')[0]} não é válido no whatsapp`)
lt = v2.slice(v2.length - 1, v2.length).toLowerCase()
if(v2.length > 1 && lt != `d` && lt != `h`) return reply(`Você precisa setar o tempo de aluguel em h ou d... Ex:
${prefix+command} @/30d`)
clientrentcmd = usu
gerarTypeKey(clientrentcmd, {type: 1, grupo: from, tempo: v2})
await sleep(500)
dados = getCoinsUsu(clientrentcmd)
chave = dados.keys[dados.keys.length - 1].key
sendButton(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲
⮑ ${chave} ⮐

🎳 *_Descrição ⤵_*
〔🎯〕⥲ *Tipo:* "aluguel"
〔⏱〕⥲ *Tempo:* ${Number(v2.slice(0, v2.length - 1)) > 0 ? v2 : `∞ INFINITO`}
〔🤓〕⥲ *Cliente:* @${usu.split("@")[0]}`, mentions: [usu], footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
}
break

case 'buyvip':
setTimeout(() => {reagir("🤑")}, 300)
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30
Ou
Ex: ${prefix+command} 30/puxadas`)
var [a, b] = q.split("/")
if(!Number(a) > 0) return reply("Apenas números positivos para setar o tempo pfvr")
if(a.includes('.')) return reply("Não serão aceitos números decimais...")
isPux = b && (b.toLowerCase() === `puxadas` || b.toLowerCase() === `consultas` || b.toLowerCase() === `vip`) ? true : false
nmr = ((isPux ? valoresVIP.vipcp : valoresVIP.vip) / 30).toFixed(2)
usu = getCoinsUsu(sender)
valor = nmr * Number(a)
if(usu.saldo < valor) return reply(`[❗] Não foi possível completar a compra da Key... ${a} dia${Number(a) !== 1 ? 's' : ''} VIP "${isPux ? `com` : `sem`}" puxadas custar${Number(a) !== 1 ? 'ão' : 'á'} R$ ${(valor).toFixed(2)}, e você possui apenas R$ ${getSepCoins(sender)[2]} em sua conta... Use o comando ${prefix}recarga para adicionar moedas a sua conta e comprar as keys ⚠️`)
rmCoinsInVirtualBalance(sender, valor)
gerarTypeKey(sender, {type: 3, grupo: from, tempo: a, mod: isPux, valor: valor})
if(isGroup) reply(`Irei te enviar no PV 🧵`)
await sleep(1000)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(sender, {text: `💡 A chave "${chave}" foi gerada com sucesso... Copie e cole a mesma em um grupo ou no privado do bot mesmo para validar o VIP e liberar seu acesso aos comandos especiais do sistema 😊`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
await sleep(1000)
sendMess(sender, `Lembrando que você pode doar essa key VIP para outra pessoa caso queira, basta enviar no PV dela... Pois se enviar no grupo o bot validará o VIP para você 🤩`)
break

case 'gerarkeyvip': {
if(!isOwner) return reply(enviar.msg.dono)
reagir("🤑")
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30
Ou
Ex: ${prefix+command} 30/puxadas`)
if(q.includes('.')) return reply("Não serão aceitos números decimais...")
var [a, b] = q.split("/")
isPux = b && (b.toLowerCase() === `puxadas` || b.toLowerCase() === `consultas` || b.toLowerCase() === `vip`) ? true : false
let { key } = await astaup.sendMessage(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲`}, {quoted: info})
await sleep(1500)
gerarTypeKey(sender, {type: 3, grupo: from, mod: isPux, tempo: a})
await sleep(500)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲
⮑ ${chave} ⮐

🎳 *_Descrição ⤵_*
〔🎯〕⥲ *Tipo:* "VIP"
〔⏱〕⥲ *Tempo:* ${Number(a) > 0 ? String(a) + ` dias` : `∞ INFINITO`}
〔🔎〕⥲ *Consultas:* ${isPux ? `sim ✔` : `não ✖`}`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
}
break

case 'buyvipgp':
setTimeout(() => {reagir("🤑")}, 300)
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30
Ou
Ex: ${prefix+command} 30/puxadas`)
var [a, b] = q.split("/")
if(!Number(a) > 0) return reply("Apenas números positivos para setar o tempo pfvr")
if(a.includes('.')) return reply("Não serão aceitos números decimais...")
isPux = b && (b.toLowerCase() === `puxadas` || b.toLowerCase() === `consultas` || b.toLowerCase() === `vip`) ? true : false
nmr = ((isPux ? valoresVIP.vipgpcp : valoresVIP.vipgp) / 30).toFixed(2)
usu = getCoinsUsu(sender)
valor = nmr * Number(a)
if(usu.saldo < valor) return reply(`[❗] Não foi possível completar a compra da Key... ${a} dia${Number(a) !== 1 ? 's' : ''} de GROUP VIP "${isPux ? `com` : `sem`}" puxadas custar${Number(a) !== 1 ? 'ão' : 'á'} R$ ${(valor).toFixed(2)}, e você possui apenas R$ ${getSepCoins(sender)[2]} em sua conta... Use o comando ${prefix}recarga para adicionar moedas a sua conta e comprar as keys ⚠️`)
rmCoinsInVirtualBalance(sender, valor)
gerarTypeKey(sender, {type: 4, grupo: from, tempo: a, mod: isPux, valor: valor})
if(isGroup) reply(`Irei te enviar no PV 🧵`)
await sleep(1000)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(sender, {text: `💡 A chave "${chave}" foi gerada com sucesso... Copie e cole a mesma em seu grupo para validar o VIP neste chat e liberar o acesso aos comandos especiais do sistema para todos os membros presentes 😊`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
await sleep(1000)
sendMess(sender, `Lembrando que você pode doar essa key VIP para outra pessoa caso queira, basta enviar no PV dela... Pois se enviar no grupo o bot validará o VIP para o seu chat 🤩`)
break

case 'gerarkeyvipgp': {
if(!isOwner) return reply(enviar.msg.dono)
reagir("🤑")
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30
Ou
Ex: ${prefix+command} 30/puxadas`)
if(q.includes('.')) return reply("Não serão aceitos números decimais...")
var [a, b] = q.split("/")
isPux = b && (b.toLowerCase() === `puxadas` || b.toLowerCase() === `consultas` || b.toLowerCase() === `vip`) ? true : false
let { key } = await astaup.sendMessage(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲`}, {quoted: info})
await sleep(1500)
gerarTypeKey(sender, {type: 4, grupo: from, mod: isPux, tempo: a})
await sleep(500)
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲
⮑ ${chave} ⮐

🎳 *_Descrição ⤵_*
〔🎯〕⥲ *Tipo:* "GROUP VIP"
〔⏱〕⥲ *Tempo:* ${Number(a) > 0 ? a : `∞ INFINITO`}
〔🔎〕⥲ *Consultas:* ${isPux ? `sim ✔` : `não ✖`}`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
}
break

case 'reembolsar':
if(!q) return reply(`KD a key que vc deseja reembolsar?`)
if(!existKeyRentSystem(q)) return reply("[❗] chave não encontrada ou inexistente ❌")
usu = getClientKey(q)
if(usu.cliente != sender) return reply("Espertinho ksksks mas essa key não é tua pra tu pegar reembolso nela")
nmr = usu.valor
tipo = usu.tipo
rmTypeKey(q)
if(tipo != 2) { addCoinsInVirtualBalance(sender, nmr)
reply(`💠 Saldo reembolsado em sua conta da Black System no valor de R$ ${Number(nmr).toFixed(2)} (Key deletada) 🤭`)
} else { getCoinsUsu(sender).cortesia += 1
saveCoins()
reply(`💠 *CARD CORTESIA* restaurado (Key deletada) 🤭`) }
break

case 'rmkey':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`KD a key que vc deseja apagar?`)
if(!existKeyRentSystem(q)) return reply("[❗] chave não encontrada ou inexistente ❌")
rmTypeKey(q)
reply(`✋🏽😳🤚🏽 A Key ${q} foi deletada do sistema com sucesso ✅`)
break

case 'resetkey':
if(!isOwner) return reply(enviar.msg.dono)
if(Number(q) !== 1) return reply(`Tem certeza disso? Esse comando irá deletar todas as keys presentes no sistema, independente de quais sejam... Se estiver certo disso, use ${prefix+command} 1`)
if(allKeysRentSystem.length <= 0) return reply(`Não há keys salvas no sistema`)
//nmr = 0
for(i of moedas) {
  if(i.keys.length > 0) {
    //nmr += 1
    i.keys = []
    saveCoins()
  }
}
reply(`Todas as keys do sistema foram deletadas com sucesso ✔`)
await sleep(300)
console.log(colors.green(`Restart necessário para save de dados..`))
process.exit()
break

case 'donate':
case 'doar':
case 'apoiar':
if(!q || isNaN(q) || Number(q) <= 0) return reply(`Quer doar e ajudar meu dono? 😍
Retorne após o comando o valor que você deseja doar para o meu dono, ex: ${prefix+command} ${(alerandom(9) + 1) * 5}`)
nmr = Number(q)
if(isGroup) reply(`Vem PV 🥰`)
await sleep(1000)
GenerateQRpix(sender, {text: `Equipe Black System agradece 💞`, footer: `BLACK SYSTEM OFC`, pix: nmr, chave: `mathgames72331621@gmail.com`, type: `email`}, astaup)
break

case 'pix':
setTimeout(() => {reagir("🥹")}, 300)
sendButton(from, {text: `*Caso queira ajudar meu mestre com qualquer quantia... Aqui está o pix dele:* 🙇🏻‍♂️

*Chave ↴*`}, astaup, [{type: `copy_text`, text: `CHAVE EMAIL`, url: `blacksystemofc2025@gmail.com`}], seloctt)
//sendPayment(from, {text: `BLACK SYSTEM OFC`, chave: `c8defcc7-4e1b-4401-be23-d3966df2c410`, type: `aleatorio`}, astaup)
break

case 'cobrar':
if(!isOwner) return reply(enviar.msg.dono)
if(!q.includes(`/`)) return reply(`Separe o número do usuário e o valor da cobrança...
Ex: ${prefix+command} ${addNumberMais(sender)}/5`)
var [cusu, cvalor] = q.split(`/`)
usu = identArroba(cusu)
if(isNaN(cvalor)) return reply(`Retorne um número válido... "${cvalor}" não é número.`)
nmr = Number(cvalor)
if(nmr <= 0) return reply(`A cobrança precisa ser maior ser maior que zero.`)
mention(`*_Enviando cobrança no PV do @${usu.split("@")[0]}..._* 💠`)
await sleep(700)
astaup.sendMessage(usu, {text: `${Number(sendHours(`HH`)) >= 6 && Number(sendHours(`HH`)) < 12 ? `Buenos dias` : Number(sendHours(`HH`)) >= 12 && Number(sendHours(`HH`)) < 18 ? `Buenas tardes` : `Buenas noches`} @${usu.split("@")[0]}, te foi solicitado um pagamento vindo do @${sender.split("@")[0]} 💠`, mentions: [sender, usu]})
await sleep(1100)
GenerateQRpix(usu, {text: `PAGUE CALOTEIRO!!`, footer: `BLACK SYSTEM OFC`, pix: nmr, chave: `mathgames72331621@gmail.com`, type: `email`}, astaup)
break

case 'criador':
ttgp = isGroup ? groupMembers.length * groupAdmins.length + somembros.length : 6
horar = moment.tz('America/Sao_Paulo').format('HH:mm')
datar = moment.tz('America/Sao_Paulo').format('DD/MM')
criador = `🤧 *Ah o meu criador ? matheuzinho o nome da lenda... Ele foi quem desenvolveu esse sistema todo que você está usando* 🥰`
sendUrlDoc(from, criador, 'application/pdf', `${horar}H ┋ ${datar} 📆`, ttgp, NomeDoBot, ``, `https://telegra.ph/file/adad9b9a3606857e380be.jpg`, `https://wa.me/5519982766489`, seloctt)
break

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':
case 'matheus':
reagir("👑")
const { infodono } = require("./dono/info/infodono.js")
sendContact(from, NickDono, NomeDoBot, numerodono_ofc)
sendImage(from, logoslink.logo, infodono(tempo, tempo_emoji, sender, NickDono, nmrdn, NomeDoBot, prefix), seloctt)
break

case 'configurar-bot':
if(!isOwner) return reply(`INDISPONÍVEL`)
astaup.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'comandos-termux':
astaup.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break

case 'destrava':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isVip) return reply(`[ ❗ ] Precisa ser VIP e admin ❌`)
if(!isGroupAdmins) return reply(`Você ainda não é admin 🤪`)
astaup.sendMessage(from, {text: destrava(prefix)}, {quoted: seloctt})
break

case 'getpp':
if(!isVip) return reply(enviar.msg.vip)
if(!menc_os2) return reply(`Marque o usuário que você quer puxar a foto de perfil, a mensagem ou o @`)
try { ppimg = await astaup.profilePictureUrl(`${menc_os2.split('@')[0]}@c.us`, 'image')
} catch { return mention(`[❗] não foi possível pegar a foto de perfil do usuário @${menc_os2.split("@")[0]} ❌`) }
sendImage(from, ppimg, ``, seloblk)
break

case 'lerarquivo': case 'lerfile': {
  if(!isVip) return reply(enviar.msg.vip)
    if(!isQuotedDocument) return reply(`Marque um documento para que eu possa fazer a transcrição...`)
      let { key } = await astaup.sendMessage(from, {text: `🔎 _Transcrevendo áudio... Aguarde_ 🔍`}, {quoted: info})
    await sleep(2000)
    try {
      media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
      doc = await getFileBuffer(media, `document`)
      caminho = `./database/midia/data/black.txt`
      fs.writeFileSync(caminho, doc)
      await sleep(700)
      txt = fs.readFileSync(caminho)
      await astaup.sendMessage(from, {text: txt, edit: key}, {quoted: info})
      await sleep(600)
      return fs.unlinkSync(caminho)
    } catch(e) {
      console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
      await astaup.sendMessage(from, {text: `[❗] Erro, não foi possível ler este arquivo enviado... ❌`, edit: key}, {quoted: info})
    }
  }
break

case 'perfil':
reagir("😸")
usu = sender_ou_n
try {
  ppimg = await astaup.profilePictureUrl(`${usu.split('@')[0]}@c.us`, 'image')
} catch {
  ppimg = semfoto
}
try {
  statusArr = await astaup.fetchStatus(sender_ou_n)
  if(Array.isArray(statusArr) && statusArr.length > 0 && statusArr[0].status && statusArr[0].status.status) {
    bio = statusArr[0].status.status
  } else {
    bio = "🔒 Privada 🔒"
  }
} catch {
  bio = "🔒 Privada 🔒"
}
txt = `╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕ㅤㅤㅤㅤㅤ📦 𝙂𝙀𝙍𝘼𝙇 📦
╽╟ • ɴᴏᴍᴇ: ${getname(usu)}
╽╟ • ɴúᴍᴇʀᴏ: wa.me/${usu.split("@")[0]}
╽╟ • ʙɪᴏ: ${bio}
╽╟ • ꜱᴀʟᴅᴏ: R$ `
if(isJsonIncludes(moedas, usu)) {
  A1 = moedas.map(a => a.id).indexOf(usu)
  txt += `${Number(moedas[A1].saldo).toFixed(2)}`
} else { txt += `00.00` }
txt += `
╽╟ ~>『 ${isAllOwner(usu) ? "✅" : "❌"} 』ᴅᴏɴᴏ
╽╟ ~>『 ${isAdmin(usu) ? "✅" : "❌"} 』ᴀᴅᴍ
╽╟ ~>『 ${isOnlyVip(usu) ? "✅" : "❌"} 』ᴠɪᴩ
╽╟ ~>『 ${isJsonIncludes(vipgp, from) ? "✅" : "❌"} 』ɢʀᴜᴩᴏ ᴠɪᴩ
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`

if(isGroup || isJsonIncludes(level, usu)) {
  txt += `\n\n╓─━═╾╼═╾╼═╾╼═╾╼═╾╼═╾╼═━─┒
┢╕ㅤㅤㅤ📊 𝘾𝙊𝙉𝙏𝘼𝘿𝙊𝙍𝙀𝙎 📊`
  if(isGroup) {
    B2 = countMessage(from).participants.map(b => b.id).indexOf(usu)
    B3 = B2 >= 0 ? countMessage(from).participants[B2] : ""
    txt += `
╽╟ • ❪🗒️ฺ࣭࣪͘ꕸ▸ ᴍᴇɴꜱᴀɢᴇɴꜱ: ${B2 >= 0 ? largeNumber(B3.count.messages) : "0"}
┢┸ • ❪🗄️ฺ࣭࣪͘ꕸ▸ ᴄᴏᴍᴀɴᴅᴏꜱ: ${B2 >= 0 ? largeNumber(B3.count.commands) : "0"}
┢╕`
    }
    if(isJsonIncludes(level, usu)) {
    C1 = level.map(c => c.id).indexOf(usu)
    C2 = level[C1]
    C3 = level.map(i => i)
    C4 = C3.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
    C5 = level.length > 10 ? 10 : level.length
    C6 = []
    for(i = 0; i < C5; i++) {
      if(i != null) {
        C6.push({id: C4[i].id})
      }
    }
    C7 = C6.map(c => c.id).indexOf(usu)
    txt += `
╽╟ • ❪📬ฺ࣭࣪͘ꕸ▸ ʟᴇᴠᴇʟ: ${C2.level}
╽╟ • ❪🗳️ฺ࣭࣪͘ꕸ▸ xᴩ: ${largeNumber(C2.contador)}
╽╟ • ❪💎ฺ࣭࣪͘ꕸ▸ ʀᴀɴᴋ: ${C7 >= 0 ? "Top " + (C7 + 1) : "\"não está no rank\""}
╽╟ • ❪📥ฺ࣭࣪͘ꕸ▸ ᴩᴀᴛᴇɴᴛᴇ: ${patente(C2.contador)}
┢┸ • ❪🚫ฺ࣭࣪͘ꕸ▸ ʙʟᴏqᴜᴇᴀᴅᴏ『 ${C2.block ? "✅" : "❌"} 』`
  }
  txt += `\n┕⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
if(isJsonIncludes(vip, usu)) {
  D1 = vip.map(d => d.id).indexOf(usu)
  D2 = vip[D1]
  txt += `\n\n╓─━═╾╼═╾╼═╾╼═╾╼═╾╼═╾╼═━─┒
┢╕ㅤㅤㅤㅤㅤㅤ💸 𝙑𝙄𝙋 💸`
  txt += !D2.infinito ? `
╽║ ${barrinha(((D2.tempo.dias - 1) * 24) + Number(sendHours("HH")), D2.tempo.total * 24)}
╽╟ • ❪🤑ฺ࣭࣪͘ꕸ▸ _${sendTimeDay(D2.tempo.dias)} restante${Number(sendTimeDay(D2.tempo.dias).slice(0, 2)) !== 1 ? "s" : ""}_` : `
╽║ 〘██████████〙100%
╽╟ • ❪🤑ฺ࣭࣪͘ꕸ▸ _∞ INFINITY_`
  txt += `\n┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
if(isJsonIncludes(cardxp, usu)) {
  E1 = cardxp.map(e => e.id).indexOf(usu)
  E2 = cardxp[E1]
  txt += `\n\n╓─━═╾╼═╾╼═╾╼═╾╼═╾╼═╾╼═━─┒
┢╕ㅤㅤㅤㅤㅤ🔖 𝘾𝘼𝙍𝘿 𝙓𝙋 🔖
╽╟ • 💾⃤ ᴛᴏᴛᴀʟ: ${E2.cards.length}
╽║ `
  txt += E2.active ? `
╽╟ • ❪📼ฺ࣭࣪͘ꕸ▸ ᴍᴜʟᴛɪᴩʟɪᴄᴀᴅᴏʀ: ${E2.cards[E2.mapa].multi}x
╽╟ • ❪📆ฺ࣭࣪͘ꕸ▸ ᴛᴇᴍᴩᴏ: _${sendTimeHours(E2.tempo)} restante${Number(E2.tempo) !== 1 ? "s" : ""}_
╽║ ${barrinha(E2.tempo, E2.cards[E2.mapa].horas)}` : `❌ ᴄᴀʀᴅ ɴãᴏ ᴀᴛɪᴠᴀᴅᴏ ❌`
  txt += `\n┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
mention(txt)
break

case 'perfil2':
reagir("🤭")
//foto de perfil
try {
ppimg = await astaup.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = semfoto
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
//bio do usuário
try {
  ppimg = await astaup.profilePictureUrl(`${usu.split('@')[0]}@c.us`, 'image')
} catch {
  ppimg = semfoto
}
try {
  statusArr = await astaup.fetchStatus(sender_ou_n)
  if(Array.isArray(statusArr) && statusArr.length > 0 && statusArr[0].status && statusArr[0].status.status) {
    bioperfil = statusArr[0].status.status
  } else {
    bioperfil = "🔒 Privada 🔒"
  }
} catch {
  bioperfil = "🔒 Privada 🔒"
}
const dptr = `ㅤㅤ〘 ՏᎬႮ ᏢᎬᎡҒᏆᏞ 〙
⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 *↴*
⇒ ${pushname}

⏤͟͟͞͞ ꦿ𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 *↴*
⇒ wa.me/${sender.split("@")[0]}

⏤͟͟͞͞ ꦿ𝙱𝚒𝚘 *↴*
⇒ ${bioperfil}

🐂⃤ 𝙽í𝚟𝚎𝚕 𝙶𝚊𝚍𝚘『 ${Math.floor(Math.random()*100)}% 』
📱⃤ 𝚂𝚎𝚞 𝙲𝚎𝚕𝚞𝚕𝚊𝚛『 ${info.key.id.length > 21 ? 'Android  🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS 😂😂😅' : 'Zap zap web  😂😂☝🏼😅'} 』
😈⃤ 𝙽í𝚟𝚎𝚕 𝙿𝚞𝚝𝚊『 ${Math.floor(Math.random()*100)}% 』
🥵⃤ 𝙽í𝚟𝚎𝚕 𝙳𝚎 𝙶𝚘𝚜𝚝𝚘𝚜𝚞𝚛𝚊『 ${Math.floor(Math.random()*100)}% 』
🍼⃤ 𝙿𝚛𝚘𝚐𝚛𝚊𝚖𝚊『 R$ ${Math.floor(Math.random()*9999)} 』


ㅤㅤ〘 ᏟϴΝՏᎬᏞᎻϴ 〙
${conselho}

_${tempo}_ ${tempo_emoji}
`
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/criatura.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: seloctt})
await sleep(1000)
astaup.sendMessage(from, {image: {url: ppimg}, caption: dptr}, {quoted: seloctt})
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
}
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':
case 'conselhos':
case 'conselho':
setTimeout(() => {reagir("🥰")}, 300)
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `Oiê, ${tempo} ${pushname} ! ^-^

🍁𝑪𝒐𝒏𝒔𝒆𝒍𝒉𝒐𝒔 𝑩𝒊́𝒃𝒍𝒊𝒄𝒐𝒔 𝒑𝒓𝒂 𝒗𝒐𝒄𝒆̂ 🍁

- ${conselhosb} 

⏤͟͟͞͞ ꦿBot⧽ ${NomeDoBot}
⏤͟͟͞͞ ꦿGrupo⧽ ${groupName}`
astaup.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'frases':
case 'frase':
setTimeout(() => {reagir(tempo_emoji)}, 300)
frases_ = palavrasc[Math.floor(Math.random() * palavrasc.length)]
reply(`${frases_}

⏤͟͟͞͞ ꦿ${NomeDoBot}
_${tempo}_ ${tempo_emoji}`)
break

case 'tabela':
astaup.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'pensador':
if(!q) return reply("Retorne um título para ser pesquisado, ex: "+prefix+command+" amor")
try {
ABC = await fetchJson(`${blacksite}/search/pensador?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
txt = `${"- ".repeat(20)}`
for(i of ABC.resultado) {
txt += `\n${i.frase}\n${"- ".repeat(20)}`
}
reply(txt)
} catch {
reply("Erro")
}
break

case 'frasesearch': case 'frase-search': case 'fs':
if(!q) return reply("Retorne um título para ser pesquisado, ex: "+prefix+command+" amor")
try {
ABC = await fetchJson(`${blacksite}/api/pesquisa/pensador?text=${encodeURI(q)}&apikey=`+API_KEY_FREE)
matheuzinho = ABC.resultado[Math.floor(Math.random()*ABC.resultado.length)]
astaup.sendMessage(from, {image: {url: matheuzinho.image}, caption: matheuzinho.frase+`\n`+`- `.repeat(20)+`\n`+matheuzinho.compartilhamentos}, {quoted: info})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Não foi possível achar frases motivacionais com o título \""+q+"\"")
}
break

case 'amazonsearch': case 'azsch':
if(!q) return reply("Retorne um título para ser pesquisado, ex: "+prefix+command+" livro")
try {
ABC = await fetchJson(`${blacksite}/api/amazon?nome=${encodeURI(q)}&apikey=`+API_KEY_FREE)
matheuzinho = ABC.resultado[Math.floor(Math.random()*ABC.resultado.length)]
astaup.sendMessage(from, {image: {url: matheuzinho.imagem}, caption: `${matheuzinho.titulo}
» ${matheuzinho.valor} «

${matheuzinho.link}`}, {quoted: info})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Não foi possível encontrar produtos com o título \""+q+"\"")
}
break

case 'destrava2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isVip) return reply(`[ ❗ ] Precisa ser VIP e admin ❌`)
if(!isGroupAdmins) return reply(`Você ainda não é admin 🤪`)
astaup.sendMessage(from, {text: destrava2 (prefix)}, {quoted: seloctt})
break 

case 'infobemvindo':
case 'infobv':  
astaup.sendMessage(from, {text: infobemvindo(prefix, pushname)}, {quoted: selo})
break

case 'idiomas':
case 'idioma':
case 'infogtts':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${NomeDoBot}🔥`

astaup.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
case 'infobanghost':  
astaup.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'infolistanegra':
astaup.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'inforgaluguel':
astaup.sendMessage(from, {text: infoaluguel(prefix, pushname)}, {quoted: selo})
break

case 'infotransmitir':
astaup.sendMessage(from, {text: infotransmitir(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
astaup.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
astaup.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

case 'git':
case 'git-bot':  
case 'gitdobot':
case 'gitbot':
reply(`🌐 *Git disponível no site:*
https://github.com/m4thxyz/blackofc`)
break

//========(FUNÇÕES-VIP-AQUI)=======\\

case 'ler':
case 'ocr':
case 'lerfoto':
if(!isVip) return reply(enviar.msg.vip)
if(!isImage && !isQuotedImage) return reply(`Ex: ${prefix+command} < marque uma imagem >`)
try {
getinfoimg = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
gfb = await getFileBuffer(getinfoimg, 'image')
up = await upload(gfb)
ABC = await fetchJson(blacksite+`/api/lerfoto?url=${up}&apikey=`+API_KEY_FREE)
reply(ABC.resultado)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Não foi possível ler a imagem...`)
}
break

case 'rvisu':
case 'revelarvisu':
if(!isVip) return reply(enviar.msg.vip)
if(!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage?.viewOnce && !info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage?.viewOnce && !info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage?.viewOnce) return reply(`marque uma foto/video em visualização unica`)
try{
reagir("👁️")
if(JSON.stringify(info).includes("videoMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewVideo.viewOnce = false
viewVideo.video = {url: viewVideo.url}
viewVideo.caption += "\n\n👁️ *REVELANDO ONE VISION* 👁️"
astaup.sendMessage(from, viewVideo, {quoted: info})
} else if(JSON.stringify(info).includes("imageMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewImage.viewOnce = false
viewImage.image = {url: viewImage.url}
viewImage.caption += "\n\n👁️ *REVELANDO ONE VISION* 👁️"
astaup.sendMessage(from, viewImage, {quoted: info})
} else if(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
var viewAudio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage
viewAudio.viewOnce = false
viewAudio.ptt = true
media = await getFileBuffer(viewAudio, `audio`)
astaup.sendMessage(from, {audio: media}, {quoted: info})
}
} catch(e){
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'listavip':
reagir("💎")
if(!isVip) { reply(enviar.msg.vip)
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
caixa = []
for(v of vip) {
  caixa.push({mapa: vip.map(i => i.id).indexOf(v.id) + 1, id: v.id, dias: v.tempo.dias, infinito: v.infinito, advenced: v.advenced})
}
total = caixa.length
if(isGroup && isJsonIncludes(vipgp, from)) {
  AB = vipgp.map(i => i.id).indexOf(from)
  vg = vipgp[AB]
  for(g of groupMembers) {
    if(!isJsonIncludes(vip, g.id)) caixa.push({mapa: groupMembers.map(i => i.id).indexOf(g.id) + 1 + total, id: g.id, dias: vg.dias, infinito: vg.infinito, advenced: vg.advenced})
  }
}
if(caixa.length <= 0) return reply(`Não há usuários VIP salvos na pasta do bot...`)
txt = `『 🤑 *ALTA REALEZA* 🤑 』
${caixa.map(c =>
`»${c.mapa}«
👤 *Usuário:* @${c.id.split("@")[0]}
⏳ *Tempo:* ${c.infinito ? `∞ *INFINITY [ VIP ]*` : sendTimeDay(c.dias)}
👨🏻‍💻 *Consultas (${c.advenced ? `✅` : `❌`})*`).join(`\n\n`)}`
txt += `\n\nㅤ *TOTAL〘* ${caixa.length} *〙*\n\n⏤͟͟͞͞ ꦿ${tempo} ${tempo_emoji}`
if(caixa.length <= 4) return mencionarIMG(txt, `https://telegra.ph/file/c1d8b48cf13e781b5dfeb.jpg`)
sendButton(from, {image: {url: `https://telegra.ph/file/c1d8b48cf13e781b5dfeb.jpg`}, caption: `『 🤑 *ALTA REALEZA* 🤑 』
*TOTAL〘 ${caixa.length} 〙*`, footer: `⏤͟͟͞͞ ꦿ${tempo} ${tempo_emoji}`}, astaup, [
  {type: 'list', title: `💎 VISUALIZAR 💎`, rowId: [
    {title: `MATHEUZIHO DOMINA`, options: vip.map(c => ({
      name: `👤 𝗨𝗦𝗨𝗔́𝗥𝗜𝗢: ${getname(c.id)}`,
      title: `⏳ 𝗧𝗘𝗠𝗣𝗢: ${c.infinito ? `∞ INFINITY [ VIP ]` : sendTimeDay(c.tempo.dias)}`,
      body: `👨🏻‍💻 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗦 (${c.advenced ? `✅` : `❌`})
📵 𝗔𝗨𝗧𝗢-𝗔𝗙𝗞 (${c.afk.auto.funcao ? `✅` : `❌`})`,
      command: `oi`
    }))}
  ]}
], info)
break

case 'listavipgp': case 'listagpvip':
reagir("💎")
if(!isVip) return reply(enviar.msg.vip)
if(vipgp.length <= 0) return reply(`Não há grupos vips salvos na pasta 💁🏻‍♂️`)
onlygpsvip = []
for(i of allGroups) {
  if(isJsonIncludes(vipgp, i.id)) {
    AB = vipgp.map(b => b.id).indexOf(i.id)
    onlygpsvip.push({id: i.id, nome: i.subject, dias: vipgp[AB].dias, infinito: vipgp[AB].infinito, advenced: vipgp[AB].advenced})
  }
}
txt = `『 🤑 *ALL GROUPS VIP* 🤑 』
${onlygpsvip.map(c =>
`»${onlygpsvip.map(d => d.id).indexOf(c.id) + 1}«
👥 *Grupo:* ${c.nome}
⏳ *Tempo:* ${c.infinito ? `∞ *INFINITY [ VIP ]*` : sendTimeDay(c.dias)}
👨🏻‍💻 *Consultas (${c.advenced ? `✅` : `❌`})*`).join(`\n\n`)}`
txt += `\n\nㅤ *TOTAL〘* ${onlygpsvip.length} *〙*\n\n⏤͟͟͞͞ ꦿ${tempo} ${tempo_emoji}`
mencionarIMG(txt, `https://i.imgur.com/Mk2k4uD.jpeg`)
break

case 'metodos':
if(!isVip) return reply(enviar.msg.vip)
const { metodos } = require('./javascript/metodos.js');
tipo = q
if(tipo.toLowerCase().startsWith("desban")) {
  dbn = q.split('desban')[1]
  if(Number(dbn) > 0 && Number(dbn) <= metodos.desban.length && !dbn.includes('.')) {
    txt = metodos.desban[Number(dbn)-1]
  } else return reply(`Escolha um número de 1-${metodos.desban.length}, ex:\n${prefix+command} desban 2`)
} else if(tipo.toLowerCase().startsWith("sair do -1")) {
  sd1 = q.split('sair do -1')[1]
  if(Number(sd1) > 0 && Number(sd1) <= metodos.sairdomenos1.length && !sd1.includes('.')) {
    txt = metodos.sairdomenos1[Number(sd1)-1]
  } else return reply(`Escolha um número de 1-${metodos.sairdomenos1.length}, ex:\n${prefix+command} sair do -1 2`)
} else if(tipo.toLowerCase().replace("ú", "u").startsWith("desativar numero")) {
  dn = q.replace("ú", "u").split('desativar numero')[1]
  if(Number(dn) > 0 && Number(dn) <= metodos.desativarnumero.length && !dn.includes('.')) {
    txt = metodos.desativarnumero[Number(dn)-1]
  } else return reply(`Escolha um número de 1-${metodos.desativarnumero.length}, ex:\n${prefix+command} desativar número 2`)
} else return reply(`Vc precisa escolher o método:
> ${prefix+command} desban
> ${prefix+command} sair do -1
> ${prefix+command} desativar número`)
reply(txt+`\n\n〘 𝑴𝑨𝑻𝑯𝑬𝑼𝒁𝑰𝑵𝑯𝑶 👑 𝑫𝑶𝑴𝑰𝑵𝑨 〙`)
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'netflix': case 'globoplay': case 'amazonprime': case 'telecine': case 'canvas': case 'hbo': case 'starsplus': case 'sportify':
if(!isJsonIncludes(moedas, sender)) return reply(`Você não possui saldo... Veja ${prefix}me`)
account = `./database/midia/contas/${command}.json`
if(!fs.existsSync(account)) return reply("Banco de dados dessa conta não foi encontrado... Pfvr, chame meu dono para resolver.")
acc = JSON.parse(fs.readFileSync(account))
if(acc.length <= 0) return reply("Nenhuma conta em estoque no momento... Pfvr, volte mais tarde")
if(command == 'netflix') valor = 10
if(command == 'globoplay') valor = 15
if(command == 'amazonprime') valor = 10
if(command == 'telecine') valor = 20
if(command == 'canvas') valor = 5
if(command == 'hbo') valor = 10
if(command == 'starsplus') valor = 5
if(command == 'sportify') valor = 5
AB = moedas.map(i => i.id).indexOf(sender)
if(moedas[AB].saldo < valor) return reply(`Esta ação lhe custaria R$ ${valor.toFixed(2)}, mas o seu saldo se encontra abaixo disso... Faça uma recarga no comando ${prefix}recarga`)
moedas[AB].saldo -= valor
saveJSON(moedas, `./operacao/aluguel/moedas.json`)
BC = alerandom(acc.length)
txt = `ㅤㅤㅤㅤㅤㅤ🌟 ${command.toUpperCase()} 🌟

✉️ *Login:* ${acc[BC].login}
🔑 *Senha:* ${acc[BC].senha}

_Conta debitada no valor de R$ ${valor.toFixed(2)}... Nossa equipe agradece a confiança em nossos serviços_ 🥰`
if(isGroup) { reply(`*Enviando* 🥰`) }
await sleep(1000)
sendMess(sender, txt)
acc.splice(BC, 1)
saveJSON(acc, account)
break

case 'add-netflix': case 'add-globoplay': case 'add-amazonprime': case 'add-telecine': case 'add-canvas': case 'add-hbo': case 'add-starsplus': case 'add-sportify':
if(!isOwner) return reply(`Só meu dono`)
conta = command.split("add-")[1]
account = `./database/midia/contas/${conta}.json`
if(!fs.existsSync(account)) return reply("JSON não encontrado para armazenar os dados... Verifica isso aí")
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [continha, password] = barra.split("/")
if(!continha || !password) return reply(`Separe após o comando, o login e senha com uma barra ( / ), ex:
${prefix+command} teupaidecalinha@gmail.com/12345`)
acc = JSON.parse(fs.readFileSync(account))
if(isJsonIncludes(acc, continha)) return reply("Conta já existente no banco de dados 📂")
acc.push({login: continha, senha: password})
saveJSON(acc, account)
reply(`Conta ${conta.toUpperCase()} adicionada com sucesso ✅`)
break

case 'rm-netflix': case 'rm-globoplay': case 'rm-amazonprime': case 'rm-telecine': case 'rm-canvas': case 'rm-hbo': case 'rm-starsplus': case 'rm-sportify':
if(!isOwner) return reply(`Só meu dono`)
conta = command.split("rm-")[1]
account = `./database/midia/contas/${conta}.json`
if(!fs.existsSync(account)) return reply("JSON não encontrado para armazenar os dados... Verifica isso aí")
if(!q) return reply(`Retorne o email da conta ou o número dela presente no comando ${prefix+"lista-"+conta} para deletar 🗑️`)
acc = JSON.parse(fs.readFileSync(account))
try {
loc = Number(q) ? Number(q) - 1 : acc.map(i => i.login).indexOf(q)
reply(`Conta ${acc[loc].login} deletada com sucesso ✅`)
acc.splice(loc, 1)
return saveJSON(acc, account)
} catch { return reply("Conta não existente no banco de dados 📂") }
break

case 'lista-netflix': case 'lista-globoplay': case 'lista-amazonprime': case 'lista-telecine': case 'lista-canvas': case 'lista-hbo': case 'lista-starsplus': case 'lista-sportify':
if(!isOwner) return reply(`Só meu dono`)
conta = command.split("lista-")[1]
account = `./database/midia/contas/${conta}.json`
acc = JSON.parse(fs.readFileSync(account))
if(!fs.existsSync(account)) return reply("JSON não encontrado para armazenar os dados... Verifica isso aí")
txt = `🌟 *Lista de contas ${conta.toUpperCase()}:*`
for(i = 0; i < acc.length; i++) {
  txt += `\n\n[ ${i+1} ]\n*Login:* ${acc[i].login}\n*Senha:* ${acc[i].senha}`
}
txt += `\n\n📜 *Total:* ${acc.length}`
reply(txt)
break

case 'disney':
if(!isVip) return reply(enviar.msg.vip)
disney = JSON.parse(fs.readFileSync("./database/midia/disney.json"))
moon = disney[Math.floor(Math.random() * disney.length)]
astaup.sendMessage(from, {image: {url: 'https://telegra.ph/file/9cb91bf0953c17ca4268a.jpg'}, caption: `
> Lembre-se: teste a conta para ver se tem acesso ou não, algumas contas não tem mais acesso válido, boa sorte.

> Login: ${moon.login}

> Senha: ${moon.senha}`}, {quoted: info})
break

case 'gerarcpf':
if(!isVip) return reply(enviar.msg.vip)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
astaup.sendMessage(from, {text: `𝐂𝐏𝐅 𝐆𝐄𝐑𝐀𝐃𝐎 𝐂𝐎𝐌『 𝐒𝐔𝐂𝐄𝐒𝐒𝐎 』💻\n\n${cpf}`}, {quoted: seloctt})
break

case 'ddd':
setTimeout(() => {reagir("📱")}, 300)
if(args.length < 1) return reply(`*Digite o DDD para puxar...*\n*Exemplo:* ${prefix + command} 91`)
try {
ABC = await fetchJson(blacksite+`/api/ddd?ddd=${q}&apikey=`+API_KEY_FREE)
dddlist = `Lista de Cidades de ${ABC.cidade} com este DDD ${q} ↴

${ABC.resultado.map(i => `»${(ABC.resultado.indexOf(i)) + 1}« ${i}`).join("\n")}`
reply(dddlist)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro") }
break

case 'listafake': case 'listafakes':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
reagir("🇺🇸")
txt = `🇺🇸 *Lista de números fake presentes neste grupo:*\n`
let totalfake = 0
for(i = 0; i < groupMembers.length; i++) {
  if(groupMembers[i].jid.split(groupMembers[i].jid.slice(2))[0] === ("55")) {} else {
    txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].jid.split("@")[0]}\n`
    totalfake += 1
  }
}
txt += `\n🇺🇸 Total: ${totalfake}`
if(totalfake > 0) {
  var resp = isGroupAdmins ? mention : reply
  resp(txt)
} else {
  reply("Não há números fake neste grupo...")
}
break

case 'brlist': case 'listabr':
if(!isGroup) return reply(enviar.msg.grupo)
reagir("🇧🇷")
txt = `🇧🇷 *Lista de números brasileiros presentes neste grupo:*\n`
let totalbr = 0
for(i = 0; i < groupMembers.length; i++) {
  if(groupMembers[i].jid.split(groupMembers[i].jid.slice(2))[0] === ("55")) {
    if(groupMembers[i].jid.includes(botNumber)) {} else {
      txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].jid.split("@")[0]}\n`
      totalbr += 1
    }
  }
}
txt += `\n🇧🇷 Total: ${totalbr}`
if(totalbr > 0) {
  var resp = isGroupAdmins ? mention : reply
  resp(txt)
} else {
  reply("Não há números brasileiros neste grupo...")
}
break

case 'dddlist': case 'listaddd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Use ${prefix+command} DDD`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 10 || Number(args[0]) > 99) return reply("Retorne um DDD válido")
reagir("🇧🇷")
txt = `🇧🇷 *Lista de números brasileiros com DDD +${args[0]} presentes neste grupo:*\n`
let totalddd = 0
for(i = 0; i < groupMembers.length; i++) {
  if(groupMembers[i].jid.split(groupMembers[i].jid.slice(4))[0] === (`55${args[0]}`)) {
    if(groupMembers[i].jid.includes(botNumber)) {} else {
      txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].jid.split("@")[0]}\n`
      totalddd += 1
    }
  }
}
txt += `\n🇧🇷 Total: ${totalddd}`
if(totalddd > 0) {
  var resp = isGroupAdmins ? mention : reply
  resp(txt)
} else {
  reply(`Não há números com o DDD +${args[0]} neste grupo...`)
}
break

case 'allddd':
if(!isGroup) return reply(enviar.msg.grupo)
caixa = [{br: []}, {gringo: []}]
for(i of groupMembers.map(g => g.jid)) {
  ddi = i.slice(0, 2)
  isBr = ddi == "55" ? true : false
  ddd = i.slice(2, 4)
  if(isBr) {
    if(!isJsonIncludes(caixa[0].br.map(b => b.ddd), ddd)) {
      caixa[0].br.push({ddd: ddd, nmr: [i]})
    } else {
      AB = caixa[0].br.map(a => a.ddd).indexOf(ddd)
      caixa[0].br[AB].nmr.push(i)
    }
  } else {
    caixa[1].gringo.push(i)
  }
}
allbr = caixa[0].br.map(l => l).sort((x, z) => (Number(x.ddd) < Number(z.ddd)) ? -1 : 0)
totaldddbr = 0
for(ab of allbr) {totaldddbr += ab.nmr.length}
allgringo = caixa[1].gringo
totaldddgringo = allgringo.length
resp = isGroupAdmins ? mention : reply
resp(`📱 *Lista de todos os DDD do grupo:*
${totaldddbr > 0 ? `<🇧🇷> _Total de ${totaldddbr} número${totaldddbr != 1 ? "s" : ""} Br presente${totaldddbr != 1 ? "s" : ""} neste grupo:_
${allbr.map(br => `*DDD:* ${br.ddd}
${br.nmr.map(brnmr => `- @${brnmr.split("@")[0]}`).join(`\n`)}`).join(`\n\n`)}` : `_(não há números Br no grupo)_`}

${totaldddgringo > 0 ? `<🇺🇸> _Total de ${totaldddgringo} número${totaldddgringo != 1 ? "s" : ""} gringo${totaldddgringo != 1 ? "s" : ""} presente${totaldddgringo != 1 ? "s" : ""} neste grupo:_
${allgringo.map(fake => `- @${fake.split("@")[0]}`).join(`\n`)}` : `_(não há números estrangeiros neste grupo)_`}`)
break

case 'gerarnmr':
if(!isVip) return reply(enviar.msg.vip)
if(args.length < 1) return reply(`*Digite o DDD para gerar...*\n*Exemplo:* ${prefix + command} 91`)
nmrale1 = `${Math.floor(Math.random() * 3) + 6}`
nmrale2 = `${Math.floor(Math.random() * 3) + 6}`
nmrale3 = `${Math.floor(Math.random() * 3) + 6}`
nmrale4 = `${Math.floor(Math.random() * 3) + 6}`
nmrale5 = `${Math.floor(Math.random() * 3) + 6}`
nmrale6 = `${Math.floor(Math.random() * 3) + 6}`
nmrale7 = `${Math.floor(Math.random() * 3) + 6}`
nmrale8 = `${Math.floor(Math.random() * 3) + 6}`
nmrale = `${nmrale1+nmrale2+nmrale3+nmrale4+nmrale5+nmrale6+nmrale7+nmrale8}`
astaup.sendMessage(from, {text: `*Gerando número de tell com o DDD* ${q}⧽

⇒ ${q}9${nmrale}
wa.me/55${q+nmrale}`}, {quoted: seloctt})
break

case 'encurtalink':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Ex: ${prefix+command} ${blacksite}`)
try {
link = q
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break

case 'criaremail': case 'criar-email':
if(!isVip) return reply(enviar.msg.vip)
try {
ABC = await fetchJson(blacksite+`/api/tempmail/criar-email?apikey=`+API_KEY_FREE)
reply(`*✉️ Email temporário gerado com sucesso:*`)
await sleep(700)
sendMess(from, ABC.resultado)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`) }
break

case 'leremail': case 'lerinbox':
if(!isVip) return reply(enviar.msg.vip)
if(!q.includes("@")) return reply("KD o email pra eu ler?")
login = q.split("@")[0]
domain = q.split("@")[1]
try {
ABC = await fetchJson(blacksite+`/api/tempmail/ler-inbox?domain=${domain}&login=${login}&apikey=`+API_KEY_FREE)
reply(`*✉️ Caixa de entrada:* ${`${ABC.resultado.length}` + ABC.resultado.length > 0 ? "\n\n" : ""}${ABC.resultado.map(i => `• *Enviado de:* ${i.from}
• *Assunto:* ${i.subject}
• *Data:* ${i.date}`).join("\n-\n")}`)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`) }
break

//início das consultas

case 'nome':
case 'nome2':
case 'nome3':
case 'tel':
case 'tel2':
case 'tel3':
case 'tel4':
case 'rg':
case 'cpf':
case 'cpf2':
case 'cpf3':
case 'cpf4':
case 'cpf5':
case 'cnpj':
case 'serasa':
case 'serasa2':
case 'bin':
case 'cep':
case 'cep2':
case 'placa': {
if(!isChatOfc && !isAdvencedVip(sender) && !isAdvencedGroupVip(from)) return reply(enviar.msg.vip)
if(!q) return reply(`Retorne após o comando o dado que deseja pesquisar`)
let { key } = await astaup.sendMessage(from, {text: enviar.msg.consulta}, {quoted: info})//primeira mensagem
await sleep(1000)
try {
consulta = encodeURI(rmLetras(q))
ABC = await fetchJson(blacksite+`/vip/consultas/new?type=${command}&query=${consulta}&token=`+API_KEY_CONSULT)
if(ABC.resultado == undefined) return await astaup.sendMessage(from, {text: `⚠️ *API OFFLINE NO MOMENTO* ⚠️`, edit: key }, {quoted: info})
if(ABC.resultado.includes('on flood wait')) return await astaup.sendMessage(from, {text: `⚠️ *AGUARDE UM MOMENTO, NÃO SOBRECARREGUE A API* ⚠️`, edit: key }, {quoted: info})
txt = `
==============================
\t\t🔎 *CONSULTA DE ${command.toUpperCase()}* 🔍
==============================

${ABC.resultado}

👤 *for* ${pushname}
\t🤖 *by* ${NomeDoBot}`
if(ABC.imagem) return astaup.sendMessage(from, {image: {url: ABC.imagem}, caption: txt, edit: key}, {quoted: info})
await astaup.sendMessage(from, {text: txt, edit: key}, {quoted: info})
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
await astaup.sendMessage(from, {text: `📵 Comando usado de forma errada ou possível erro na busca de dados do sistema 🎲`, edit: key}, {quoted: info})
}}
break

case 'ip': {
if(!isChatOfc && !isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Retorne após o comando o dado que deseja pesquisar`)
let { key } = await astaup.sendMessage(from, {text: enviar.msg.consulta}, {quoted: info})//primeira mensagem
await sleep(1000)
try {
consulta = encodeURI(rmLetras(q))
ABC = await fetchJson(blacksite+`/vip/consultas/new?type=ip&query=${consulta}&token=`+API_KEY_CONSULT)
if(ABC.resultado == undefined) return await astaup.sendMessage(from, {text: `⚠️ *NÃO ENCONTRADO* ⚠️`, edit: key}, {quoted: info})
await astaup.sendMessage(from, {text: ABC.resultado, edit: key}, {quoted: info})
setTimeout(() => {
astaup.sendMessage(from, {location: ABC.location})
}, 700)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
await astaup.sendMessage(from, {text: `📵 Comando usado de forma errada ou possível erro na busca de dados do sistema 🎲`, edit: key}, {quoted: info})
}
}
break

// fim consultas

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'raizq': case 'raizquadrada':
if(!Number(q.replace("√", ""))) return reply("Retorne após o comando o número que você quer encontrar a raiz quadrada")
radical = Number(q.replace("√", ""))
if(!raiz(radical)) {
  divi = divisores(radical)
  if(divi.length <= 0) return reply("Nenhum divisor encontrado...")
  primeiro = []
  for(a of divi) {
    if(raiz(a)) primeiro.push({search: a, resultado: findRaiz(a)})
  }
  if(primeiro.length <= 0) return reply("Nenhuma raiz encontrada...")
  result_x = primeiro[primeiro.length - 1].resultado
  resto = radical / primeiro[primeiro.length - 1].search
  dividir = divisores(resto)
  if(divisores.length > 0) {
    segundo = []
    for(b of dividir) {
      if(raiz(b)) segundo.push({search: b, resultado: findRaiz(b)})
    }
    if(segundo.length > 0) {
      result_x *= segundo[segundo.length - 1].resultado
      result_x += `√` + (resto / segundo[segundo.length - 1].search)
    } else result_x += `√` + resto
  } else result_x += `√` + resto
} else result_x = findRaiz(radical)
reply(`🧮 _Segundo meus cálculos, a √${q.replace("√", "")} é -> *"${result_x}"*_ ヅ`)
break

case 'bhaskara':
if(!q) return reply(`Retorne a equação quadrática após o comando (use a variável "x", exemplo: ${prefix+command} 2x²+4x+2 = 0)`)
a = Number(q.replace("x²", "x2").split("x2")[0])
b = Number(q.replace("x²", "x2").split("x2")[1].split("x")[0])
c = Number(q.split("x")[2].split("=")[0])
txt = `∆ = b² - 4 • a • c
∆ = ${b}² - 4 • ${a} • ${c}
∆ = ${b*b} ${Number(-4*a*c) >= 0 ? `+${-4*a*c}` : -4*a*c}
∆ = ${Number(b*b) + Number(-4*a*c)}
`
delta = Number(b*b) + Number(-4*a*c)
if(delta < 0) return reply("A equação não possui raiz")
raiz = []
for(i = 0; i < Number(delta/2); i++) {
if(Number(i*i) === delta) {
raiz.push(i)
}
}
if(delta != 0 && raiz.length <= 0) return reply(`√${delta} não encontrada`)
txt += `
x = -b ±√∆
         2 • a
x = -(${b}) ±√${delta}
         2 • ${a}
`
if(delta > 0) {
txt += `
x = ${b*Number(-1)} ±${raiz[0]}
         ${a*2}
x' = ${b*Number(-1)} + ${raiz[0]}
         ${a*2}
x' = ${Number(b*Number(-1)) + Number(raiz[0])}
         ${a*2}
x' = ${Number(Number(b*Number(-1)) + Number(raiz[0])) / Number(a*2)}

x'' = ${b*Number(-1)} - ${raiz[0]}
         ${a*2}
x'' = ${Number(b*Number(-1)) - Number(raiz[0])}
         ${a*2}
x'' = ${Number(Number(b*Number(-1)) - Number(raiz[0])) / Number(a*2)}

$ = {${Number(Number(b*Number(-1)) + Number(raiz[0])) / Number(a*2)}, ${Number(Number(b*Number(-1)) - Number(raiz[0])) / Number(a*2)}}`
} else {
txt += `x = ${b*Number(-1)}
       ${a*2}
x = ${Number(b*Number(-1)) / Number(a*2)}
`
}
reply(txt)
break

case 'calculadora':
case 'calcular':  
case 'calc':
case 'math':
if(!q) return reply(`KD a conta matemática pá eu fazer ?`)
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
setTimeout(() => {reagir(react2)}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(`Escreva o novo nome do grupo`)
blat = args.join(" ")
astaup.groupUpdateSubject(from, `${blat}`)
astaup.sendMessage(from, {text: `🙇🏻‍♂️ *Ok alteza, o nome do grupo foi alterado para:* ${q}`}, {quoted: seloctt})
break

case 'chatblack': case 'chatasta':
reagir(react2)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
astaup.groupUpdateSubject(from, `〄 αکｲα ɓσ† ૮ɦαｲ 〄`)
astaup.sendMessage(from, {text: `*_Nome do chat atualizado ✅_*`}, {quoted: seloctt})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply(`Escreva a nova bio do grupo`)
blabla = args.join(" ")
astaup.groupUpdateDescription(from, `${blabla}`)
astaup.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: seloctt})
break

case 'setfotogp':
case 'fotogp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
astaup.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgrupo':
reagir("✅")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
var matheuzinho = await astaup.profilePictureUrl(from, 'image')
} catch {
var matheuzinho = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
linkgc = await astaup.groupInviteCode(from)
return sendButton(from, {text: '*_Aqui está o link do grupo⧽_*\n\nhttps://chat.whatsapp.com/'+linkgc, footer: NomeDoBot}, astaup, [{type: `copy_text`, text: `COPIE AQUI 📂`, url: 'https://chat.whatsapp.com/'+linkgc}], seloctt)
break

case 'novolink':
case 'nlink':
case 'redefinir':
setTimeout(() => {reagir("🧵")}, 300)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await astaup.groupRevokeInvite(from)
await sleep(1000)
link = await astaup.groupInviteCode(from)
if(rmLetras(q) != 'nao') return sendButton(from, {text: `[❗] link redefinido com sucesso 💢`, footer: NomeDoBot}, astaup, [{type: `copy_text`, text: `🥏 𝙇𝙄𝙉𝙆 𝘼𝙌𝙐𝙄 🎳`, url: `https://chat.whatsapp.com/`+link}], seloctt)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro ao tentar redefinir o link") }
break

case 'recrutar': case 'convidar':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroupAdmins || !isVip) return reply("[ ❗ ] *precisa ser ADM e VIP* ❌")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!all_type_number) return reply(`Marque um usuário com o comando ${prefix+command}, a mensagem, o @ ou o número.`)
try {
getlink = `https://chat.whatsapp.com/` + (await astaup.groupInviteCode(from))
} catch(e) {console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Não foi possível pegar o link do grupo...`)}
try { ftgpcmd = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(from, 'image'))}`)).data
} catch { ftgpcmd = semfoto }
if(command == `convidar` && botoes) {
try { ftusu = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(all_type_number.split('@')[0]+`@c.us`, 'image'))}`)).data
} catch(e) { ftusu = semfoto }
img = blacksite+`/api/canvas/jxr/welcome?nome=${getname(all_type_number)}&guilda=${groupName}&perfil=${ftgpcmd}&membro=${groupMembers.length + 1}&avatar=${ftusu}&fundo=`+dataGp[0].wellcome[0].fundobemvindo
} else { img = ftgpcmd }
txt = `${tempo} @${all_type_number.split(`@`)[0]}, o ${isGroupAdmins ? `ADM` : `membro VIP`} @${sender.split(`@`)[0]} te convidou para entrar no grupo ${groupName}... Clique no link acima/abaixo caso queira participar 🥰`
enviado = `${command == `recrutar` ? `Recrutamento` : `Convite`} para se juntar ao grupo ${groupName} enviado no PV do @${all_type_number.split("@")[0]} com sucesso ✔`
if(!botoes) { sendUrlText(all_type_number, txt, groupName, ``, img, getlink)
await sleep(1000)
return mention(enviado) }
try { linkgp = (await axios.get(`https://tinyurl.com/api-create.php?url=${getlink}`)).data
} catch(e) {console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Não foi possível converter o link do grupo...`)}
sendButton(all_type_number, {image: {url: img}, caption: txt, footer: NomeDoBot, mentions: [all_type_number, sender]}, astaup, [{type: `copy_url`, text: `CLIQUE AQUI 🥏`, url: linkgp}])
await sleep(1000)
mention(enviado)
break

case 'listatm':
if(!isOwner) return reply(enviar.msg.dono)
rgp = JSON.parse(fs.readFileSync("./operacao/TMGP.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = `✧͜͡҉𝙂𝙍𝙐𝙋𝙊𝙎-𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙎
________________________________________\n\n`;
for ( i = 0; i < rgp.length; i++) {
bl += `»${i+1}«
ೈ፝͜͡𝙄𝘿: ${rgp[i].id}
ೈ፝͜͡𝙉𝙊𝙈𝙀: ${rgp[i].infonome}
________________________________________\n\n`
}
bl += `*By:* ${NomeDoBot}`
reply(bl)
break

case 'rgtm':
if(!isOwner) return reply(enviar.msg.dono)
rgp = JSON.parse(fs.readFileSync("./operacao/TMGP.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Mas eu já registrei esse grupo ;-;") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./operacao/TMGP.json", JSON.stringify(rgp))
reply("*Grupo registrado com sucesso meu mestre* 🙇🏻‍♂️")
break

case 'tirardatm':
case 'deltm':
if(!isOwner) return reply(enviar.msg.dono)
rgp = JSON.parse(fs.readFileSync("./operacao/TMGP.json"))
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
if(!JSON.stringify(rgp).includes(ustm)) return reply("Não tem como eu tirar da lista um grupo que não está na lista ;-;")
rgp.splice(ustm, 1)
fs.writeFileSync("./operacao/TMGP.json", JSON.stringify(rgp))
reply("*Ok mestre... Este grupo não será mais notificado em transmissões futuras* 🫡")
break

case 'fazertm':
case 'tm':
if(!isOwner) return reply(enviar.msg.dono)
var rgp = JSON.parse(fs.readFileSync("./operacao/TMGP.json"))
if(rgp.length == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n"+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n"+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
/*var MRC_TD = groupMembers.map(i => i.id)*/
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n"+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n"+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n`)
/*black.mentions = MRC_TD*/
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n"+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BLACK* ⚠️\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
astaup.sendMessage(rgp[i].id, DFC)}
reply(`*Mensagem enviada para todos os ${rgp.length} grupos presentes na lista* 🫡`)
break

case 'abrirgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q) return reply(`Retorne após o comando o tempo em que o grupo abrirá, seguindo os exemplos:
${prefix+command} 12:00 _(horário exato)_
ou
${prefix+command} 4h _(daqui a 4 horas a frente)_`)
letra = q.slice(q.length - 1, q.length).toLowerCase()
if(letra == `s`) {
  nmr = Number(q.slice(0, q.length - 1))
  mention(`*Sucesso @${sender.split("@")[0]}, o grupo ${groupName} será aberto em ${q}* ✔`)
  setTimeout(async() => {
    astaup.groupSettingUpdate(from, 'not_announcement')
    await sleep(2500)
    astaup.sendMessage(from, {text: `[❕] *O grupo foi aberto com sucesso após ${q}* ✔`})
  }, nmr * 1000);
} else {
  addOpenCloseGP(from, q, sender, `open`)
  last = getLastOpenCloseGP(from)
  day = last.dias
  mention(`*Sucesso @${sender.split("@")[0]}, o grupo ${groupName} será aberto ${last.dias > 0 ? sendFutureTime([{valor: last.dias, type: `days`}]).toLowerCase().split(` `)[0] + ` ` : ``}às ${last.hora}* ✔`)
}
break

case 'fechargp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q) return reply(`Retorne após o comando o tempo em que o grupo fechará, seguindo os exemplos:
${prefix+command} 12:00 _(horário exato)_
ou
${prefix+command} 4h _(daqui a 4 horas a frente)_`)
letra = q.slice(q.length - 1, q.length).toLowerCase()
if(letra == `s`) {
  nmr = Number(q.slice(0, q.length - 1))
  mention(`*Sucesso @${sender.split("@")[0]}, o grupo ${groupName} será fechado em ${q}* ✔`)
  setTimeout(async() => {
    astaup.groupSettingUpdate(from, 'announcement')
    await sleep(2500)
    astaup.sendMessage(from, {text: `[❗] *O grupo foi fechado com sucesso após ${q}* ❌`})
  }, nmr * 1000);
} else {
  addOpenCloseGP(from, q, sender, `close`)
  last = getLastOpenCloseGP(from)
  day = last.dias
  mention(`*Sucesso @${sender.split("@")[0]}, o grupo ${groupName} será fechado ${last.dias > 0 ? sendFutureTime([{valor: last.dias, type: `days`}]).toLowerCase().split(` `)[0] + ` ` : ``}às ${last.hora}* ⏱`)
}
break

case 'clima':
clime = [ "☁️", "⛅", "⛈️", "🌤️", "🌥️", "🌦️", "🌧️", "🌨️", "🌩️"]
setTimeout(() => {reagir(clime[Math.floor(Math.random() * clime.length)])}, 300)
if (!q) return reply(`Use ${prefix + command} cidade`)
reply(`Pesquisando clima de ${q} ${clime[Math.floor(Math.random() * clime.length)]}`)
qq = q.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${qq}&appid=1d0bdf08a222f8f2da252ef8921ff4ab&units=metric&lang=pt_br`)
if (clima.error) return reply(clima.error)
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm');
date10 = moment.tz('America/Sao_Paulo').format('DD/MM');
if(isGroup) {
climanmr = groupMembers.length * groupAdmins.length + somembros.length
} else {
climanmr = 0.4
}
matheuzinho = `
🌪️ _CLIMA_ 🌪️
*▧⃯⃟📅⃤ Data:* ${date10}
*▧⃯⃟🌎⃤ Cidade:* ${clima.data.name}
*┌───────────────────┐*
*│▧⃯⃟🌡️⃤ Temperatura:* ${clima.data.main.temp.toFixed()}ºC
*│▧⃯⃟🔺⃤ Temp. Max:* ${clima.data.main.temp_max.toFixed()}ºC
*│▧⃯⃟🔻⃤ Temp. Min:* ${clima.data.main.temp_min.toFixed()}ºC
*│▧⃯⃟🌦️⃤ Clima:* ${clima.data.weather[0].description}
*│▧⃯⃟💧⃤ Umidade: ${clima.data.main.humidity}%*
*└───────────────────⃤*
ㅤㅤㅤㅤ〘 ${hora1}h 〙
`
await astaup.sendMessage(from, {
   document: Buffer.from('oi curioso'),
   caption: matheuzinho,
   mimetype: 'application/pdf', // Formato
   fileName: `PREV. DO TEMPO ${clime[Math.floor(Math.random() * clime.length)]}`,
   fileLength: 100000000 * climanmr, // Tamanho (250mb)
   contextInfo: {
    externalAdReply: {
      title: NomeDoBot,
      body: '',
      mediaType: 1,
      thumbnail: await getBuffer(logoslink.menu), // só pega imagens até 300x300 
      showAdAttribution: true, // Coloca true para enviada como anúncio 
      renderLargerThumbnail: true, // Deixa a imagem grande
      sourceUrl: '${blacksite}' // Link que aparece quando aperta
    }
  }
})
break

case 'grupo': case 'gp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return sendListB(from, {text: `*Selecione abaixo a opção para abrir/fechar o grupo* ${groupName} 🙏🏼😔`, footer: `_Clique na lista abaixo para selecionar..._`}, astaup, `♨️ CLIQUE AQUI ♨️`, [{title: `O grupo ${groupName} está ${groupMetadata.announce ? "fechado" : "aberto"}...`, options: [
{title: "ABRIR GRUPO 🔓", body: NomeDoBot, command: prefix+command+" a"},
{title: "FECHAR GRUPO 🔒", body: NomeDoBot, command: prefix+command+" f"}
]}], seloctt)
if(args[0] === 'a') {
if(!groupMetadata.announce) return reply(`O grupo já está aberto...`)
setTimeout(() => {reagir("✅")}, 300)
reply(`*GRUPO ABERTO COM SUCESSO* ✅`)
abrirgp(from) } else if(args[0] === 'f') {
if(groupMetadata.announce) return reply(`O grupo já está fechado...`)
setTimeout(() => {reagir("❌")}, 300)
reply(`*GRUPO FECHADO COM SUCESSO* ❌`)
fechargp(from) }
break

case 'revelafoto':
case 'rft':
setTimeout(() => {reagir("🕵🏻‍♂️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
try {
var rft = await astaup.profilePictureUrl(from, 'image')
} catch {
var rft = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
astaup.sendMessage(from, {image: {url: rft}, caption: groupName}, {quoted: seloctt})
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':
setTimeout(() => {reagir("💬")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {ppUrl = await astaup.profilePictureUrl(from, 'image')
} catch {ppUrl = semfoto}
grupodb = groupMetadata
fmts = formatTimestamp(grupodb.creation * 1000)
txt = `💬 *NOME ↴*
『 ${groupName} 』
🧸 *MEMBROS:* »${groupMembers.length}«
⚜️ *ADMs:* »${groupAdmins.length}«

*< _CRIADO EM ${fmts.day} DE ${convertNumberInMonth(fmts.month).toUpperCase()} DE ${fmts.year}, ÀS ${fmts.hours + ":" + fmts.minutes}_ >*

_DADOS EM GERAL_
🔒 » GRUPO ESTÁ *${grupodb.announce ? `FECHADO` : `ABERTO`}* «
🖍 » MEMBROS *${grupodb.restrict ? `NÃO ` : ``}PODEM* EDITAR OS DADOS DO GRUPO «
👥 » GRUPO *${grupodb.isCommunity ? `` : `NÃO `}ESTÁ* EM COMUNIDADE «
✅ » APROVAÇÃO DE ADMINS PARA ENTRAR NO GRUPO *${grupodb.joinApprovalMode ? `` : `DES`}ATIVADA* «
📤 » MEMBROS *${grupodb.memberAddMode ? `` : `NÃO `}PODEM* ADICIONAR NOVOS USUÁRIOS «

✒️ *DESCRIÇÃO ↴*
${groupDesc || `\"não listada\"`}`
EnvButton(from, [txt, NomeDoBot, ppUrl], astaup, [{text: `🎗 𝗠𝗘𝗡𝗨 🎗`, command: prefix+`menu`}], seloblk)
break

case 'totag':
case 'cita':
case 'hidetag': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = {}
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm.conversation : info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
function escapeRegExp(string) {
return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function replaceCommand(text) {
if(prefix && command) {
let escapedPrefix = escapeRegExp(prefix)
let escapedCommand = escapeRegExp(command)
return text ? text.replace(new RegExp(escapedPrefix + escapedCommand, "gi"), "").trim() : ''
}
return text
}
//console.log("Prefix:", prefix)
//console.log("Command:", command)
//console.log("Pink:", pink)
//console.log("Blue:", blue)
//console.log("Purple:", purple)
//console.log("Yellow:", yellow)
//console.log("Aud_d:", aud_d)
//console.log("Figu_d:", figu_d)
//console.log("Red:", red)
//console.log("Green:", green)
if(pink && !aud_d && !purple) {
DFC = { 
image: { url: pink.url }, 
caption: q.length > 1 ? q : replaceCommand(pink.caption), 
mentions: MRC_TD,
mimetype: pink.mimetype,
fileSha256: pink.fileSha256,
fileLength: pink.fileLength,
height: pink.height,
width: pink.width,
mediaKey: pink.mediaKey,
fileEncSha256: pink.fileEncSha256,
directPath: pink.directPath,
mediaKeyTimestamp: pink.mediaKeyTimestamp,
jpegThumbnail: pink.jpegThumbnail
}
} else if (blue && !aud_d && !purple) {
DFC = { 
video: { url: blue.url }, 
caption: q.length > 1 ? q.trim() : replaceCommand(blue.caption), 
mentions: MRC_TD,
mimetype: blue.mimetype,
fileSha256: blue.fileSha256,
fileLength: blue.fileLength,
height: blue.height,
width: blue.width,
mediaKey: blue.mediaKey,
fileEncSha256: blue.fileEncSha256,
directPath: blue.directPath,
mediaKeyTimestamp: blue.mediaKeyTimestamp,
jpegThumbnail: blue.jpegThumbnail
}
} else if (red && !aud_d && !purple) {
DFC = { text: replaceCommand(red), mentions: MRC_TD }
} else if (!aud_d && !figu_d && green && !purple) {
DFC = { text: replaceCommand(green), mentions: MRC_TD }
} else if (purple) {
DFC = { 
document: { url: purple.url }, 
mentions: MRC_TD,
mimetype: purple.mimetype,
fileSha256: purple.fileSha256,
fileLength: purple.fileLength,
mediaKey: purple.mediaKey,
fileEncSha256: purple.fileEncSha256,
directPath: purple.directPath,
mediaKeyTimestamp: purple.mediaKeyTimestamp
}
} else if (yellow && !aud_d) {
DFC = { 
document: { url: yellow.url }, 
caption: q.length > 1 ? q.trim() : replaceCommand(yellow.caption), 
mentions: MRC_TD,
mimetype: yellow.mimetype,
fileSha256: yellow.fileSha256,
fileLength: yellow.fileLength,
mediaKey: yellow.mediaKey,
fileEncSha256: yellow.fileEncSha256,
directPath: yellow.directPath,
mediaKeyTimestamp: yellow.mediaKeyTimestamp,
jpegThumbnail: yellow.jpegThumbnail
}
} else if (figu_d && !aud_d) {
DFC = { 
sticker: { url: figu_d.url }, 
mentions: MRC_TD,
mimetype: figu_d.mimetype,
fileSha256: figu_d.fileSha256,
fileLength: figu_d.fileLength,
mediaKey: figu_d.mediaKey,
fileEncSha256: figu_d.fileEncSha256,
directPath: figu_d.directPath,
mediaKeyTimestamp: figu_d.mediaKeyTimestamp,
jpegThumbnail: figu_d.jpegThumbnail
}
} else if (aud_d) {
DFC = { 
audio: { url: aud_d.url }, 
mentions: MRC_TD,
mimetype: aud_d.mimetype,
fileSha256: aud_d.fileSha256,
fileLength: aud_d.fileLength,
mediaKey: aud_d.mediaKey,
fileEncSha256: aud_d.fileEncSha256,
directPath: aud_d.directPath,
mediaKeyTimestamp: aud_d.mediaKeyTimestamp,
ptt: true
}
}
console.log("DFC:", DFC)
if(DFC?.text != undefined && DFC?.text.length <= 0) return reply("Marque uma imagem, vídeo, áudio ou escreva algo para o bot retornar a mesma mensagem marcando todos os membros do grupo")
astaup.sendMessage(from, DFC, {quoted: info}).catch(e => {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
})
break

/*case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!menc_prt && !q) return reply("Marque uma imagem, vídeo, áudio ou escreva algo para p bot retornar a mesma mensagem marcando todos os membros do grupo")
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.lid)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? q :pink.caption.replace(new RegExp(prefix+command, "gi"), ``)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), ``).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), ``).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), ``).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), ``).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
astaup.sendMessage(from, DFC).catch(e => {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
})
break*/

case 'marcar': case 'marcar2': case 'marcarwa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
come = command == "marcarwa" ? "wa.me/" : "</> @"
if(somembros.length <= 0) return reply(`${tempo} ${pushname}

_Não foram encontrados membros no grupo_『 ${groupName} 』... _Apenas_ [ *ADMINISTRADORES* ]
_Caso queira marcar os adms, use_ ${prefix}adms`)
txt = q ? q+`\n\n` : ``
txt += somembros.map(i => come+i.split("@")[0]).join("\n")
if(command == "marcar2") sendAudioPTT(astaup, from, `./database/midia/audios/marcar/${alerandom(3)+1}.m4a`, info)
await sleep(700)
if(isQuotedImage || isImage) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
img = await getFileBuffer(boij, 'image')
astaup.sendMessage(from, {image: img, caption: txt, mentions: somembros}, {quoted: info})
} else mention(txt)
break

case 'set-restart':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`Retorne após o comando o intervalo de horas em que o bot irá deletar as pastas de sessão do QR, ex: ${prefix+command} 12
_(nesse caso, o bot irá reiniciar o QR a cada 12 horas)_`)
if(q.toLowerCase() === "reset") {
stopRestartQR()
return reply(`Sistema de restart QR deletado com sucesso... O bot não limpará a conexão automaticamente 🗑`)
} else {
if(isNaN(q)) return reply(`"${q}" não é número.`)
mention(`Sucesso @${sender.split("@")[0]}, o intervalo de restart do QR foi definido para *${q}h*... O próximo restart ocorrerá *${sendFutureTime([{type: `hours`, valor: Number(q)}]).toLowerCase().split(":")[0]}:00*`)
return setHorarioRestart(from, sender, q)
}
break

case 'check-restart': {
if(!isOwner) return reply(enviar.msg.dono)
if(!isRestartQR) return reply(`Nenhum restart do QR pré-definido.`)
h1000 = Number(restartqr.save.split("--")[1]) + Number(restartqr.tempo)
resto = h1000 % 24
divi = h1000 - (resto == 0 ? 24 : resto)
temporestante = converterMin(contarMin((Number(resto) === 0 ? `24` : `00`) + `:00`) - contarMin(sendHours("HH:mm")))
let [hr, min] = temporestante.split(`:`)
reply(`⏱ *Intervalo:* ${restartqr.tempo}h
⏳ *Próximo Restart:* ${resto < 10 ? "0" + String(resto) : resto}:00h${divi > 1 ? `, daqui a ${divi - 1}d` : ``}
_(faltam *${hr} hora${Number(hr) !== 1 ? "s" : ""} e ${min} minuto${Number(min) !== 1 ? "s" : ""}* para a próxima limpeza do QR)_`)
}
break

case 'limparqr':
if(!isOwner) return reply(enviar.msg.dono)
fs.readdir(QRCODEPATH, (err, files) => {
  if(err) {
    console.error("Erro ao listar arquivos:", err);
    aqua.sendMessage(from, {text: "Erro ao listar arquivos."});
  } else {
    let count = 0;
    files.forEach((file) => {
      if(file.startsWith("pre-key") || file.startsWith("sender-key") || file.startsWith("session-")) {
        fs.unlink(path.join(QRCODEPATH, file), (err) => {
          if(err) {
            console.error(`Erro ao excluir ${file}:`, err);
          } else {
            console.log(`${file} excluído com sucesso.`);
            count++;
          }
        });
      }
    });
    reply(`Peso do QR diminuído com sucesso. Reiniciando o bot... 🕶`)
    setTimeout(() => {
      process.exit()
    }, 1000)
  }
});
break;

case 'reviverqr':
if(!isOwner && !isnit) return
//comando para remover todos os arquivos e subdiretórios da pasta .npm
exec('rm -rf ~/.npm/*', (error, stdout, stderr) => {
if(error) {console.error(`Erro ao limpar .npm: ${error.message}`);
} else {console.log(stdout || "Pasta .npm limpa com sucesso.")}
});

//comando para remover arquivos específicos da pasta de sessões
exec('cd "database/astaup-QR" && rm -rf pre-key* sender* session*', (error, stdout, stderr) => {
if(error) {console.error(`Erro ao limpar sessões: ${error.message}`);
} else {console.log(stdout || "Sessões do astaup-QR limpas com sucesso.")}
});

//confirmação e reinicialização
setTimeout(async () => {
reply("*PODE DEIXAR MESTRE*🎖️\n\n⇒ Reiniciando..");
setTimeout(async () => {
process.exit();
}, 1200);
}, 1000);
break

case 'pesoqr':
if(!isOwner) return reply(enviar.msg.dono)
qrpath = QRCODEPATH.replace('./', '')
exec("du " + qrpath, (e1, a1) => {
  if(e1) return console.error(`Erro ao pesar o QR: ${e1}`);
  peso = convertBytes(Number(a1.split("database")[0]) * 1000)
  exec("ls " + qrpath, (e2, a2) => {
    if(e2) return console.error(`Erro ao ler o QR: ${e2}`);
    quant = a2.split("\n").length - 1
    return reply(`📑 O QR está pesando *${peso}* atualmente com *${quant}* pastas de sessão no total.`)
  });
});
break

case 'reviver':
setTimeout(() => {reagir("✅")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(`Tá afim de banir o número do bot é ?`)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await astaup.groupParticipantsUpdate(from, [menc_prt], "add" )
reply(`Usuário revivido com sucesso... 😰`)
break

case 'add':
setTimeout(() => {reagir("✅")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(`Tá afim de banir o número do bot é ?`)
if(!q) return reply("KD o número do indivíduo ?")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
usu = q + "@s.whatsapp.net"
astaup.groupParticipantsUpdate(from, [usu], "add" )
reply("✅ Usuário adicionado ao grupo com sucesso...")
} catch {
reply("Erro 404")
}
break

case 'addgp':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`Hmmm`)
if(!Number(q)) return reply("Apenas números")
reagir("🙂")
var getGroups = await astaup.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
astaup.groupParticipantsUpdate(ingfoo[q].id, [nmrdn], "add" )
setTimeout(() => {
astaup.groupParticipantsUpdate(ingfoo[q].id, [nmrdn], "promote")
astaup.sendMessage(ingfoo[q].id, {text: "*Bem vindo meu senhor* 🙇🏻‍♂️"})
}, 5000)
} catch(erro) {
reply(String(erro))
}
break

case 'sairgp':
case 'sair':
if(isGroup && !isOwner && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
astaup.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
setTimeout(() => {reagir("🫡")}, 300)
if(!isOwner && !isnit) return reply(enviar.msg.dono)
mentions(`Ok meu senhor @${sender.split("@")[0]}, agora você é um ADM do grupo 🙇🏻‍♂️`, [sender], true)
astaup.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
setTimeout(() => {reagir("🥲")}, 300)
if(!isOwner && !isnit) return reply(enviar.msg.dono)
mentions(`Pronto mestre @${sender.split("@")[0]}, rebaixei o senhor para membro comum no grupo ${groupName} 🥹`, [sender], true)
astaup.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
case 'adv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
usu = menc_prt ? menc_prt : q.includes("@") ? q.includes(" ") ? identArroba(q.split(" ")[0]) : identArroba(q) : false
txt = menc_prt ? q ? q : undefined : q.includes(" ") ? q.split(" ").slice(1, q.split(" ").length).join(" ") : undefined
if(!usu) return reply("Marque o alvo que você deseja advertir")
if(usu == botNumber) return reply("Não pode advertir o próprio bot...");
if(usu == nmrdn) return reply("Não pode advertir o próprio dono do bot");
if(groupAdmins.includes(usu)) return reply("Não pode advertir ADMS..");
addAdv(from, usu, txt)
if(isLimitAdvUsu(from, usu)) {
rmAdv(from, usu, `all`)
mention(`Este foi seu aviso final @${usu.split(`@`)[0]}... Por não atentar as suas advertências, te darei um ban de presente 🥰`)
await sleep(1000)
return remover(from, menc_os2)
} else {
nmr = getAdvQuantTotalUsu(from, usu)
if(nmr == 1) return mention(`[❗] Atenção @${usu.split("@")[0]}, você foi advertido... Tome cuidado, pois 3 adv resultarão em banimento ❌`)
return mention(`[❗] Atenção @${usu.split("@")[0]}, você já foi advertido ${nmr} vezes... Na próxima é ban ❌`)
}
break

case 'rmadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
usu = menc_prt ? menc_prt : q.includes("@") ? q.includes(" ") ? identArroba(q.split(" ")[0]) : identArroba(q) : false
txt = menc_prt ? q.toLowerCase() === "all" ? "all" : undefined : q.includes(" ") ? q.split(" ")[1].toLowerCase() === "all" ? "all" : undefined : undefined
if(!usu) return reply("KD o alvo que você deseja retirar a advertência")
if(getAdvQuantTotalUsu(from, usu) <= 0) return reply("Não há advertências neste usuário")
listadv = getUsuInAdv(from, usu).razao
console.log(colors.yellow(listadv))
advtxt = listadv.length <= 1 || txt == "all" ? `Todas as advertências do usuário @${usu.split("@")[0]} foram removidas.` : `Advertência "${listadv[0].principal}" do usuário @${usu.split("@")[0]} retirada com sucesso...`
rmAdv(from, usu, txt)
mention(advtxt)
break

case 'advlist': case 'advlista': case 'listadv': case 'listaadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
ADVT = getGroupInAdv(from).list
if(ADVT.length <= 0) return reply(`Não há membros com advertência neste grupo...`)
mention(`🗂 Lista de usuários com advt neste grupo:
${ADVT.map(i => `»${ADVT.map(a => a.id).indexOf(i.id) + 1}«
👤 *Usuário:* @${i.id.split("@")[0]}
⚠ *Advertências:* ${i.razao.map(r => `
- *Motivo:* _"${r.principal}"_
- *Tempo restante:* ${r.tempo}d`).join(`\n`)}`).join(`\n-\n`)}`)
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
astaup.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
astaup.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
if(!isGroupAdmins) return reply(enviar.msg.adm)
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
astaup.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'wlcm':
if(!isGroupAdmins) return reply(enviar.msg.adm)
reply(`▁▂▃▄▅▆▇█ W̷E̷L̷C̷O̷M̷E̷ █▇▆▅▄▃▂▁
👻 ⏤͟͟͞͞ ꦿ𝙴𝚗𝚝𝚛𝚘𝚞 𝙹á 𝙲𝚑𝚎𝚐𝚊 𝚂𝚎 𝙰𝚙𝚛𝚎𝚜𝚎𝚗𝚝𝚊𝚗𝚍𝚘 𝙰í #numerodele#
📸⃤ 𝙁𝙊𝙏𝙊
✍🏼⃤ 𝙉𝙊𝙈𝙀
🧸⃤ 𝙄𝘿𝘼𝘿𝙀
🏘️⃤ 𝘾𝙄𝘿𝘼𝘿𝙀
💞⃤ 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊

▧⃯⃟⚠️ ݈݇─ 𝙰𝚝𝚎𝚗çã𝚘 𝙰𝚜 𝚁𝚎𝚐𝚛𝚊𝚜 𝙽𝚊 𝙱𝚒𝚘 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 𝙾𝚞 𝚅𝚊𝚒 𝙲𝚘𝚗𝚑𝚎𝚌𝚎𝚛 𝙾 𝙵𝚊𝚖𝚘𝚜𝚘 🤭`)
break

case 'joingp':
if(!isOwner) return reply('```SOMENTE MEU DONO LINDÃO```')
if(!JSON.stringify(bcgp).includes("mensagem")) {
  bcgp.push({tipo: "mensagem", msg: []})
  fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
}
if(!JSON.stringify(bcgp).includes("grupos")) {
  bcgp.push({tipo: "grupos", gps: []})
  fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
}
var [linkM4, msgM4] = q.split('|')
if(!linkM4) return reply('Insira um link de convite ao lado do comando.')
if(!msgM4) return reply(`Vejo que você não inseriu a mensagem que será enviada... Faça assim:\n${prefix+command} link do grupo/mensagem para enviar`)
var getGroups = await astaup.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
if(!linkM4.includes('chat.whatsapp.com/')) return reply('Ops, verifique o link que você inseriu.')
link = linkM4.split('app.com/')[1]
AB = bcgp.map(i => i.tipo).indexOf("mensagem")
AC = bcgp.map(i => i.tipo).indexOf("grupos")
try {
for(i = 0; i < ingfoo.length; i++) {
  bcgp[AC].gps.push({groupId: ingfoo[i].id})
  fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
}
bcgp[AB].msg.push({txt: msgM4, cobrado: false})
fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
astaup.groupAcceptInvite(`${link}`)
return reply(`Todos os grupos da lista foram salvos na pasta... Qualquer grupo que esteja fora da lista será tratado como indigno e réu de receber uma mensagem no PV de cada um dos seus membros`)
} catch(erro) {
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
break

case 'delgp':
if(!isOwner) return reply("Só meu dono")
if(bcgp.length <= 0) return reply(`Não há mensagens salvas...`)
AB = bcgp.map(i => i.tipo).indexOf("mensagem")
matheuzinho = bcgp[AB].msg
if(matheuzinho.length <= 0) return reply(`Não há mensagens salvas...`)
if(!Number(args[0]) || Number(args[0]) < 1 || Number(args[0]) > matheuzinho.length) return reply("Olhe no comando "+prefix+"gplist e escolha o número correspondente a mensagem para deletar")
BC = Number(args[0]) - 1
matheuzinho.splice(BC, 1)
fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
reply("Mensagem da lista deletada com sucesso ✅")
break

case 'gplist':
if(!isOwner) return reply("Só meu dono")
if(bcgp.length <= 0) return reply(`Não há mensagens salvas...`)
AB = bcgp.map(i => i.tipo).indexOf("mensagem")
if(bcgp[AB].msg.length <= 0) return reply(`Não há mensagens salvas...`)
resp = `*Mensagens salvas para envio:*`
matheuzinho = bcgp[AB].msg
for(i = 0; i < matheuzinho.length; i++) {
  resp += `\n• ${i+1} -> ${matheuzinho[i].txt}`
}
reply(resp)
break

case 'listagp':
setTimeout(() => {reagir("🎲")}, 300)
if(!isOwner) return reply(enviar.msg.dono)
gptt = []
for(i of allGroups) {
  try { getlink = `https://chat.whatsapp.com/${(await astaup.groupInviteCode(i.id))}`
  } catch { getlink = `"link indisponível"` }
  nmr = 0
  for(p of i.participants) {
    if(p.admin != null) nmr += 1
  }
  gptt.push({
    id: i.id,
    contador: allGroups.map(a => a.id).indexOf(i.id) + 1,
    nome: i.subject,
    criador: i?.subjectOwner || i?.owner ? getname(i?.owner || i?.subjectOwner).replace(`usuário`, `wa.me/${(i?.subjectOwner || i?.owner).split(`@`)[0]}`) : `"não listado"`,
    admins: nmr,
    membros: i.participants.length - nmr,
    link: getlink
  })
}
if(gptt.length < 0) return reply(`Não há grupos salvos...`)
reply(`🎭 *Exibindo ${gptt.length > 1 ? `todos os ${gptt.length} grupos` : `o único grupo`} da lista ↴*
${gptt.map(i => `»${i.contador}«
♟ *Nome:* ${i.nome}
🎮 *Criador/a do grupo:* ${i.criador}
🕹 *Total de admins:* ${i.admins}
🎱 *Total de membros:* ${i.membros} ${isPrivateChat ? `
🕶 *ID do grupo:* ${i.id}
⚙ *Link do grupo:* ${i.link}` : ``}`).join(`\n\n`)}`)
break

case 'iddogp':
setTimeout(() => {reagir("🧵")}, 300)
if(!isOwner)return reply(enviar.msg.dono)
but = []
for(i of allGroups) {
  but.push({title: i.subject || `"Não listado"`, body: `${i.participants.length} membro${i.participants.length != 1 ? `s` : ``} ao todo`, command: prefix+command+` `+i.id})
}
if(!q || allGroups.map(a => a.id).indexOf(q) < 0) return sendButton(from, {text: `Olhe na lista abaixo e selecione o grupo que você deseja puxar o ID:`, footer: NickDono}, astaup, [{type: `list`, title: `〘 𝗚𝗥𝗨𝗣𝗢𝗦 𝗔𝗤𝗨𝗜 〙`, rowId: [{title: `Listando ${allGroups.length > 1 ? `todos os ${allGroups.length} grupos` : `o único grupo`} da lista...`, options: but}]}], seloctt)
AB = allGroups.map(a => a.id).indexOf(q)
grupo = allGroups[AB]
reply(`_ID do grupo ${grupo.subject} ↴_`)
await sleep(700)
sendMess(from, grupo.id)
break

case 'linkdogp': {
setTimeout(() => {reagir("🧶")}, 300)
if(!isOwner)return reply(enviar.msg.dono)
but = []
for(i of allGroups) {
  but.push({title: i.subject || `"Não listado"`, body: `${i.participants.length} membro${i.participants.length != 1 ? `s` : ``} ao todo`, command: prefix+command+` `+i.id})
}
if(!q || allGroups.map(a => a.id).indexOf(q) < 0) return sendButton(from, {text: `Olhe na lista abaixo e selecione o grupo que você deseja puxar o link:`, footer: NickDono}, astaup, [{type: `list`, title: `〘 𝗚𝗥𝗨𝗣𝗢𝗦 𝗔𝗤𝗨𝗜 〙`, rowId: [{title: `Listando ${allGroups.length > 1 ? `todos os ${allGroups.length} grupos` : `o único grupo`} da lista...`, options: but}]}], seloctt)
let { key } = await astaup.sendMessage(from, {text: `_Buscando grupo_ 🔎`}, {quoted: info})
await sleep(1000)
AB = allGroups.map(a => a.id).indexOf(q)
grupo = allGroups[AB]
try { getlink = `https://chat.whatsapp.com/${(await astaup.groupInviteCode(grupo.id))}`
} catch { return await astaup.sendMessage(from, {text: `Não foi possível puxar o link... É possível que o bot não seja adm neste grupo 😥`, edit: key }, {quoted: info}) }
await astaup.sendMessage(from, {text: `_Link do grupo ${grupo.subject} ↴_
${getlink}`, edit: key }, {quoted: info}) }
break

case 'sairdogp': {
setTimeout(() => {reagir("🧦")}, 300)
if(!isOwner)return reply(enviar.msg.dono)
but = []
for(i of allGroups) {
  but.push({title: i.subject || `"Não listado"`, body: `${i.participants.length} membro${i.participants.length != 1 ? `s` : ``} ao todo`, command: prefix+command+` `+i.id})
}
if(!q || allGroups.map(a => a.id).indexOf(q) < 0) return sendButton(from, {text: `Olhe na lista abaixo e selecione o grupo que você quer que o bot saia:`, footer: NickDono}, astaup, [{type: `list`, title: `〘 𝗚𝗥𝗨𝗣𝗢𝗦 𝗔𝗤𝗨𝗜 〙`, rowId: [{title: `Listando ${allGroups.length > 1 ? `todos os ${allGroups.length} grupos` : `o único grupo`} da lista...`, options: but}]}], seloctt)
AB = allGroups.map(a => a.id).indexOf(q)
let { key } = await astaup.sendMessage(from, {text: `💆🏻‍♂️ Saindo do grupo ${allGroups[AB].subject} 🚶🏻‍♂️`}, {quoted: info})
await sleep(2000)
astaup.groupLeave(q)
await sleep(1000)
await astaup.sendMessage(from, {text: `🙇🏻‍♂️ Pronto chefe, missão dada é missão cumprida 💁🏻‍♂️`, edit: key}, {quoted: info})
}
break

case 'delfilegp': {
setTimeout(() => {reagir("📂")}, 300)
if(!isOwner) return reply(enviar.msg.dono)
but = []
for(i of allGroups) {
  but.push({title: i.subject || `"Não listado"`, body: `${i.participants.length} membro${i.participants.length != 1 ? `s` : ``} ao todo`, command: prefix+command+` `+i.id})
}
if(!q || allGroups.map(a => a.id).indexOf(q) < 0) return sendButton(from, {text: `Olhe na lista abaixo e selecione o grupo que você deseja deletar a dB de arquivos:`, footer: NickDono}, astaup, [{type: `list`, title: `〘 𝗚𝗥𝗨𝗣𝗢𝗦 𝗔𝗤𝗨𝗜 〙`, rowId: [{title: `Listando ${allGroups.length > 1 ? `todos os ${allGroups.length} grupos` : `o único grupo`} da lista...`, options: but}]}], seloctt)
caminho = `./database/grupos/${q}.json`
if(!fs.existsSync(caminho)) {
  console.log(`ID: ${q}\n\n"${caminho}" não existe`)
  return reply(`Grupo não existente ❌`)
}
AB = allGroups.map(a => a.id).indexOf(q)
grupo = {id: q, name: allGroups[AB].subject}
DLT_FL(caminho)
reply(`_Grupo ${grupo.name} por ID *${grupo.id}* deletado da dB com sucesso_ ✔`)
await sleep(700)
console.log(colors.green(`Restart necessário para save de dados..`))
process.exit()
}
break

case 'limpardb':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
let cmcm = countMessage(from)
total = cmcm.participants.length
caixa = []
for(i = 0; i < cmcm.participants.length; i++) {
  if(isJsonIncludes(groupMembers, cmcm.participants[i].id)) {
    caixa.push(cmcm.participants[i])
  }
}
pack = total - caixa.length
if(pack <= 0) return reply("*Todos os ghosts da data base já foram deletados...*")
cmcm.participants = caixa
saveCountMessage(cmcm, from)
reply(`${pack} números foram deletados da pasta com sucesso ✅`)
break

case 'addglobalmessage': case 'addgbmsg':
if(!isOwner) return reply(enviar.msg.dono)
var [h, m1] = q.replace("/ ", "/").replace(" /", "/").replace(" / ", "/").split("/")
if(!h || !m1) return reply(`Retone após o comando o horário e a mensagem que você quer enviar quando o sistema estiver ativado, ex:
${prefix+command} 18:00/se a vida te der um limão, desconfie, pq nada é de graça`)
t = h.split(":")[0]
if(Number(t) < 0 || Number(t) > 24 || t.includes('.')) return reply("Formato de hora inválido... Só existem horas entre 00 e 24 🤡")
c = h.includes(":") ? `` : `:00`
p = h + c
x = p.split(":")[1]
if(Number(x) < 0 || Number(x) > 60 || x.includes('.')) return reply("Formato de hora inválido... Só minutos entre 00 e 60 🤡")
horacerta = `${Number(p.split(":")[0]) >= 10 ? Number(p.split(":")[0]) : `0${Number(p.split(":")[0])}`}:${Number(p.split(":")[1]) >= 10 ? Number(p.split(":")[1]) : `0${Number(p.split(":")[1])}`}`
if(isJsonIncludes(gbmsg[1].msg, horacerta)) {
AB = gbmsg[1].msg.map(i => i.time).indexOf(horacerta)
gbmsg[1].msg.splice(AB, 1)
saveJSON(gbmsg, "./database/gbmsg.json")
}
faq = m1
gbmsg[1].msg.push({time: horacerta, frase: faq, save: "00"})
saveJSON(gbmsg, "./database/gbmsg.json")
reply(`A mensagem "${faq}" foi definida com sucesso às ${horacerta}h... Para ativar no grupo, use ${prefix}gbmsg`)
break

case 'removeglobalmessage': case 'rmgbmsg':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`Para melhor precisão, retorne após o comando, o horário que você deseja deletar... Caso esteja em dúvida, olhe no comando ${prefix}lista-gbmsg todos os horários registrados.`)
t = q.split(":")[0]
if(Number(t) < 0 || Number(t) > 24 || t.includes('.')) return reply("Formato de hora inválido... Só existem horas entre 00 e 24 🤡")
c = q.includes(":") ? `` : `:00`
p = q + c
x = p.split(":")[1]
if(Number(x) < 0 || Number(x) > 60 || x.includes('.')) return reply("Formato de hora inválido... Só minutos entre 00 e 60 🤡")
horacerta = `${Number(p.split(":")[0]) >= 10 ? Number(p.split(":")[0]) : `0${Number(p.split(":")[0])}`}:${Number(p.split(":")[1]) >= 10 ? Number(p.split(":")[1]) : `0${Number(p.split(":")[1])}`}`
AB = gbmsg[1].msg.map(i => i.time).indexOf(horacerta)
if(AB < 0) return reply("Horário não registrado")
gbmsg[1].msg.splice(AB, 1)
saveJSON(gbmsg, "./database/gbmsg.json")
reply("Horário deletado com sucesso ✅")
break

case 'lista-globalmessage': case 'lista-gbmsg':
if(!isOwner) return reply(enviar.msg.dono)
if(gbmsg[1].msg.length <= 0) return reply("Não há horários definidos...")
reply(`📨 *Lista de mensagens e horários..*
📖 *Total:* ${gbmsg[1].msg.length}

${gbmsg[1].msg.map(i => `• *Horário:* ${i.time}h
• *Mensagem:* ${i.frase}`).join("\n-\n")}`)
break

case 'globalmessage': case 'gbmsg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isJsonIncludes(gbmsg[0].gp, from)) {
  gbmsg[0].gp.push({id: from})
  saveJSON(gbmsg, "./database/gbmsg.json")
  return reply(`*Ativada função de mensagens programadas neste grupo com sucesso* ✅`)
} else {
  AB = gbmsg[0].gp.map(i => i.id).indexOf(from)
  gbmsg[0].gp.splice(AB, 1)
  saveJSON(gbmsg, "./database/gbmsg.json")
  return reply(`Sucesso, você desativou as mensagens programadas deste grupo...`)
}
break

case 'atividade':
case 'atividades':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!existsGroupInCountMessage(from)) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage(from).participants
if(grupo.length <= 0) return reply(`Não há membros suficientes no grupo...`)
txt = `🥏 *_Atividade dos membros deste grupo:_*
${grupo.map(g => `*Usuário:* @${g.id.split("@")[0]}
*Menssagens:* ${g.count.messages}
*Comandos:* ${g.count.commands}`).join(`\n\n`)}`
mention(txt)
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(isNaN(q)) return reply(`Retorne após o comando a quantidade de mensagens que você quer puxar...`)
if(!existsGroupInCountMessage(from)) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage(from).participants
caixa = []
for(i of grupo) {
  if(i.count.messages <= Number(q)) caixa.push(i.id)
}
if(caixa.length == 0) return reply(`Não há pessoas com ${q} msg..`)
txt = `_Usuários com ${q.trim()} msg ou menos..._
╔══════════════════╣
${caixa.map(c => `╟ »${caixa.indexOf(c) + 1}« @${c.split("@")[0]}`).join(`
║
`)}
╚═════╣ ${NomeDoBot}`
mention(txt)
break

case 'banghost': case 'banghosts':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isOwner) return reply(enviar.msg.dono)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q || !Number(q) < 0) return reply(`Retorne após o comando a quantidade mínima de mensagens que os usuários devem ter para não serem banidos... Qualquer usuário com mensagens abaixo disso irâo de submarino.
Ex: ${prefix+command} 5`)
hehe = []
nmr = 0
for(a of countMessage(from).participants) {
  if(a.count.messages <= Number(q)) {
    if(!nmrdn.includes(a.id) && !botNumber.includes(a.id)) {
      if(isJsonIncludes(groupMembers, a.id)) hehe.push(a.id)
      if(!isJsonIncludes(groupAdmins, a.id)) nmr += 1
    }
  }
}
if(nmr <= 0) return reply(`Todos os usuários com essa quantidade de mensagens já foram removidos..`)
ativado = isWelkom3
fechargp(from)
await sleep(1000)
reply(`Grupo fechado para limpeza 🗑`)
if(ativado) {
dataGp[0].wellcome[2].bemvindo3 = false
setGp(dataGp)
}
limpeza = 0
total = hehe.length
for(h of hehe) {
  await sleep(1400)
  if(isJsonIncludes(groupAdmins, h)) {
    astaup.sendMessage(from, {text: `Usuário @${h.split("@")[0]} foi poupado do banimento por ser admin 👑`, mentions: [h]})
  } else if(isOnlyVip(h)) {
    astaup.sendMessage(from, {text: `Usuário @${h.split("@")[0]} foi poupado do banimento por ser VIP ⚜`, mentions: [h]})
  } else {
    remover(from, h)
  }
  limpeza += 1
}
if(limpeza >= total) {
  await sleep(1000)
  abrirgp(from)
  await sleep(1000)
  sendMess(from, `Todos os usuários com ${q} msg ou menos foram removidos com sucesso 🗑`)
  if(ativado) {
    dataGp[0].wellcome[2].bemvindo3 = true
    setGp(dataGp)
  }
}
break

case 'verificarnmr':
if(!isOwner) return reply(enviar.msg.dono)
const [result] = await astaup.onWhatsApp(q)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id:`)
setTimeout(() => {
astaup.sendMessage(from, {text: result.jid})
}, 1100)
}
break

case 'wame':
barra = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [nmr, msg] = barra.split('|')
if(!nmr) return reply("KD o número de wpp?")
me = nmr.includes('@') ? nmr.split('@')[1] : nmr.toLowerCase() == "me" ? sender.split('@')[0] : nmr.toLowerCase() == "bot" ? botNumber.split('@')[0] : nmr.toLowerCase() == "dono" ? nmrdn.split('@')[0] : nmr
txt = `wa.me/`+me.replace(new RegExp("[()+-/ +/]", "gi"), "")
if(msg) txt += `?text=`+encodeURI(msg)
reply(txt)
break

case 'rastreamento': case 'rastrear':
if(!isGroup) return reply(enivar.msg.grupo)
if(!q) return reply(`Coloque após o comando o código de rastreamento dos correios, para o bot pesquisar e rastrear o seu produto encomendado`)
try {
reagir(`💌`)
ABC = await fetchJson(`${blacksite}/api/rastreio?code=${q.toUpperCase()}&apikey=${API_KEY_FREE}`)
if(ABC.resultado.length <= 0) return reply(`Código não encontrado ou inexistente ❌`)
reply(`🎁 *RASTREAMENTO DO PEDIDO ${q.toUpperCase()}:*

` + ABC.resultado.map(i =>
`📤 *POSTADO:* ${i.datePost.split(` `).join(` - `)}
📦 *DESCRIÇÃO:* ${i.description}
📬 *TEMPO:* ${i.timeCount}`).join(`\n\n`))
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'correio':
setTimeout(() => {reagir("✉️")}, 300)
var [txt1, txt2] = q.split('/')
if(!txt1) return reply(`KD o número da pessoa ?`)
if(!txt2) return reply(`Separe o número da pessoa e a mensagem com uma /

Ex: ${sender.split('@')[0]}/oi vida`)
if(txt1.includes("@")) return reply(`Não inclua @ no número...`)
msg_ = `*Correio enviado...* ✉️

*Para mais dúvidas, digite:* ${prefix}infocorreio`
reply(msg_)
bla = 
`╔══════════════════╣
╟ 𝙲𝚘𝚛𝚛𝚎𝚒𝚘 𝙰𝚗ô𝚗𝚒𝚖𝚘 🤫
║
╩ㅤ⇒𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚖: ${txt2}
________________________________________

${NomeDoBot} ✉️`
astaup.sendMessage(txt1.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`, {text: bla})
break

case 'correio2':
setTimeout(() => {reagir("✉️")}, 300)
var [txt1, txt2] = q.split('/')
if(!txt1) return reply(`KD o número da pessoa ?`)
if(!txt2) return reply(`Separe o número da pessoa e a mensagem com uma /

Ex: ${sender.split('@')[0]}/oi vida`)
if(!txt1.startsWith("55") && !txt1.startsWith("+55")) return reply(`Não se esqueça do 55 na frente`)
if(txt1.includes("@")) return reply(`Não inclua @ no número...`)
msg_ = `*Correio enviado...* ✉️

*Para mais dúvidas, digite:* ${prefix}infocorreio`
reply(msg_)
bla = 
`╔══════════════════╣
╟ ${pushname} Te Enviou Uma Msg
║
╩ㅤ⇒𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚖: ${txt2}
________________________________________

ೈ፝͜͡✉️ wa.me/${sender.split('@')[0]}`
astaup.sendMessage(txt1.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`, {text: bla})
break

case 'infocorreio':
setTimeout(() => {reagir("📩")}, 300)
infocarta = `*${tempo} ${pushname}, há duas formas de correio:*

[ ${prefix}correio ]
A primeira forma de correio irá enviar uma mensagem para o remetente de forma totalmente anônima...

[ ${prefix}correio2 ]
Já a segunda forma de correio, irá pôr o seu número na carta... Isto é, caso você queira se identificar, ou mesmo, para o remetente entrar em contato com você.

-----------------------------------------------------------

*Em ambas as formas, é necessário pôr o número de forma correta, na seguinte ordem:*
-> Comando+55+DDD+número do indivíduo+/+sua mensagem para ele

_*Nota:* Não pode conter o 9 na frente do número_
❌ 9xxxx-xxxx
✅ xxxx-xxxx
_(Não é necessário pôr o "+", nem o "-")_

*Exemplo:*
-> ${prefix}correio 5519982766489/oi gstz
-> ${prefix}correio2 5519982766489/salve meu pit

*Bjs de luz, Estevão Ferreira* ✨`
astaup.sendMessage(from, {image: {url: `https://telegra.ph/file/87aeadc7997d9eb91bfcb.jpg`}, caption: infocarta}, {quoted: seloctt})
break

case 'msgpv':
reagir("✅")
if(!isOwner) return reply("A vontade de banir pessoas assim não é pouca... 😒")
if(!isMsgPV) {
obrigadoEXT.msgpv = true
setObg(obrigadoEXT)
reply(`✔️ A mensagem no PV foi ativada para todos os comandos que necessitem dela 〰️`)
} else {
obrigadoEXT.msgpv = false
setObg(obrigadoEXT)
reply(`✖️ A mensagem no PV foi desativada... Alguns comandos não enviarão avisos no PV, mas continuarão funcionando ➿`)
}
break

case 'nome-bot':
if(!isOwner  && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
reply(`Ok ${NickDono}, agora eu me chamo ${q}`)
break

case 'nick-dono':
if(!isOwner  && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
reply(`O Nick Do Dono foi alterado para:
> ${q}`)
break

case 'numero-dono':
if(!isOwner && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if(!q) return reply("KD o número de WhatsApp")
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`Ok ${pushname}, transferência de dono feita para wa.me/${q} com sucesso...`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono[0] = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
break

case 'fotomenu':
case 'fundomenu':
if(!isOwner) return reply(enviar.msg.dono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, tem muitos comandos usando essa foto... Tô trocando aqui`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo = res
fs.writeFileSync('./database/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu...`)
}
break

case 'logomenu':
if(!isOwner) return reply(enviar.msg.dono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, tem muitos comandos usando essa foto... Tô trocando aqui`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.menu = res
fs.writeFileSync('./database/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu principal foi alterada com sucesso para: ${logoslink.menu}`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto do menu principal...`)
}
break

case 'logoping': case 'fundoping':
if(!isOwner) return reply(enviar.msg.dono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, já tô trocando...`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.ping = res
fs.writeFileSync('./database/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do ping foi alterada com sucesso para: ${logoslink.ping}`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto do ping...`)
}
break

case 'prefixo-bot':
case 'setprefixs':
case 'setprefixo':
case 'setprefix':
case 'novoprefixo':
if(args.length < 1) return
if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
setting.prefix = args[0]
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
reply(`Novo prefixo definido ( ${args[0]} )`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
astaup.groupUpdateSubject(from, `${body.slice(9)}`)
astaup.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: seloctt})
break

case 'fotobot':
if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if(!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
astaup.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if(!isOwner  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if(!menc_jid2[0] || menc_jid2[1]) return reply("Marque o @ do usuário para roubar a foto do perfil dele, para a do bot..")
let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
try {
pp = await astaup.profilePictureUrl(id)
buffer = await getBuffer(pp)
astaup.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'envmsg':
if(!isOwner && !isnit) return
var [tx1, tx2] = q.split("/")
astaup.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply('Cade o texto?')
for(i of groupMembers) {
await sleep(1000)
var txt = `*${tempo.toUpperCase()}* ${getname(i.id)}

-> ${q}`
sendMess(i.id, txt)
}
break

case 'setpgp': case 'setcofc':
if(!isOwner) return reply(enviar.msg.dono)
if(command == "setpgp") {
obrigadoEXT.idprivategp = from
setObg(obrigadoEXT)
reply("Grupo privado atualizado ✅")
} else {
obrigadoEXT.idchatofc = from
setObg(obrigadoEXT)
reply("Chat oficial atualizado ✅")
}
break

case 'dono1':
case 'defcon5':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.dono)
if(q.length > 8) {
resp = "*『 DEFCON 5 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 1\n🤍 *Status de segurança:* ```Seguro```"
} else {
resp = "*『 DEFCON 5 DESATIVADO 』*"
}
obrigadoEXT.dono1 = q.trim()
dono1 = obrigadoEXT.dono1
setObg(obrigadoEXT)
reply(resp)
break

case 'dono2':
case 'defcon4':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.dono)
if(q.length > 8) {
resp = "*『 DEFCON 4 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 2\n💚 *Status de segurança:* ```Estável```"
} else {
resp = "*『 DEFCON 4 DESATIVADO 』*"
}
obrigadoEXT.dono2 = q.trim()
dono2 = obrigadoEXT.dono2
setObg(obrigadoEXT)
reply(resp)
break

case 'dono3':
case 'defcon3':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.dono)
if(q.length > 8) {
resp = "*『 DEFCON 3 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 3\n💛 *Status de segurança:* ```Alarmante```"
} else {
resp = "*『 DEFCON 3 DESATIVADO 』*"
}
obrigadoEXT.dono3 = q.trim()
dono3 = obrigadoEXT.dono3
setObg(obrigadoEXT)
reply(resp)
break

case 'dono4':
case 'defcon2':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.dono)
if(q.length > 8) {
resp = "*『 DEFCON 2 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 4\n❤️ *Status de segurança:* ```Um passo da guerra```"
} else {
resp = "*『 DEFCON 2 DESATIVADO 』*"
}
obrigadoEXT.dono4 = q.trim()
dono4 = obrigadoEXT.dono4
setObg(obrigadoEXT)
reply(resp)
break

case 'dono5':
case 'defcon1':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.dono)
if(q.length > 8) {
resp = "*『 DEFCON 1 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 5\n🖤 *Status de segurança:* ```Guerra nuclear```"
} else {
resp = "*『 DEFCON 1 DESATIVADO 』*"
}
obrigadoEXT.dono5 = q.trim()
dono5 = obrigadoEXT.dono5
setObg(obrigadoEXT)
reply(resp)
break

case 'dono6':
case 'defcon':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.dono)
if(q.length > 8) {
resp = `⚠️ *Ativação de DEFCONs confirmada...*
🫡 *Bem vindo (a)* wa.me/${q}`
} else {
resp = `⚠️ *Desativação de DEFCONs confirmada...*`
}
obrigadoEXT.dono6 = q.trim()
dono6 = obrigadoEXT.dono6
setObg(obrigadoEXT)
reply(resp)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
setTimeout(() => {reagir("✅")}, 300)
donos = `👑 𝙼𝙴𝚂𝚃𝚁𝙴 𝚂𝚄𝙿𝚁𝙴𝙼𝙾 ↴
wa.me/${numerodono_ofc}

× DΞFᏟϴΝ 5⇒ ${dono1}
× DΞFᏟϴΝ 4⇒ ${dono2}
× DΞFᏟϴΝ 3⇒ ${dono3}
× DΞFᏟϴΝ 2⇒ ${dono4}
× DΞFᏟϴΝ 1⇒ ${dono5}
× LÍDΞR SUPΞRIϴR ↴
wa.me/${dono6}`
ttgp = isGroup ? groupMembers.length * groupAdmins.length + somembros.length : 6
horar = moment.tz('America/Sao_Paulo').format('HH:mm');
datar = moment.tz('America/Sao_Paulo').format('DD/MM');
sendUrlDoc(from, donos, 'application/pdf', `${horar}H ┋ ${datar} 📆`, ttgp, NomeDoBot, '', 'https://telegra.ph/file/adad9b9a3606857e380be.jpg', `https://instagram.com/m4thxyz_`, seloctt)
break

case 'adms':
case 'admins':
case 'chamaradms':
setTimeout(() => {reagir(react2)}, 300)
astaup.sendMessage(from, {text: `⚠️ *CHAMANDO TODOS OS ADMINS...*
${pushname} *solicita a vossa presença* 👀${q ? `\n\n*-> Recado:* _"${q}"_` : ``}`, mentions: groupAdmins}, {quoted: info})
break

case 'cases':
if(!isOwner) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if(caseNames) {
return caseNames.map((caseName, index) => `• ${index + 1} -> ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
astaup.sendMessage(from, { text: listCases() }, { quoted: seloctt });
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply('Ocorreu um erro ao obter as cases.') }
break

case 'totalcmd':
try {
tc = "./database/midia/data/totalcmd.json"
totalcmd = JSON.parse(fs.readFileSync(tc))
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
cont = caseNames.length
totalcmd[0].totalcmd = cont
saveJSON(totalcmd, tc)
reply(`🎲 O bot possui atualmente ${cont} comandos ヅ`)
} catch { reply("[ ❗ ] Erro ao obter o total de comandos ❌") }
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !isOwner) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./operacao/tabela/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./operacao/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./operacao/tabela/tabela-${from}.json`)); 
blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`
mention(blity)
break

case 'infovip':
reply(`Olá ${pushname}, ${tempo.toLowerCase()}... Já se perguntou como se tornar vip e ter acesso aí comandos do menu vip exclusivamente pra vc ??

Bom, para tal façanha, é necessário pagar um valor de R$ ${Number(valoresVIP.vip).toFixed(2)} que será referente a 30 dias de VIP. Você terá os seguintes direitos:
• uso dos comandos do ${prefix}menuvip
• uso do PV do bot quando o mesmo estiver bloqueado
• alguns poderes de ADM
• uso do gpt no PV
• ${prefix}docfake em qualquer canto
• fazer figurinha sem legenda
• uso do menu +18 e seus comandos no PV
• ganho de moedas no RPG

Caso se interessar, favor chamar meu dono no comando ${prefix}dono`)
break

case 'ausente': case 'afk':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOnlyVip(sender)) return reply(enviar.msg.vip)
if(!q) return reply("Digite após o comando o seu motivo de ausência")
addAFK(sender, pushname, isOwner, q)
mention(`Ok ${isOwner ? 'mestre' : 'oh grande ser'}, a partir de agora ${isOwner ? 'o senhor' : 'você'} está "${q}" 🙇🏻‍♂️`)
break

case 'autoafk':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOnlyVip(sender)) return reply(enviar.msg.vip)
setAutoAFK(sender)
setTimeout(() => {
reply(isAutoAFK(sender) ? `Auto AFK ativo com sucesso, o bot irar dar set em seu AFK após ${getUsuVip(sender).afk.auto.horas} hora${getUsuVip(sender).afk.auto.horas != 1 ? 's' : ''} de ausência 📵` : `Auto AFK desativado com sucesso, o bot NÃO irá mis adicionar a mensagem de ausência automaticamente 🔕`)
}, 300)
break

case 'voltei': case 'on': case 'ativo': case 'acordei':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOnlyVip(sender)) return reply(enviar.msg.vip)
if(!getUsuVip(sender).afk.dados.some(iv => iv.ativo)) return reply("Não há registros de ausência de sua parte")
rmAFK(sender)
reply("Bem vindo de volta 🙇🏻‍♂️")
break

case 'servip':
if(!isOwner) return reply(enviar.msg.dono)
if(isJsonIncludes(vip, sender)) return reply(`Mas vc já é VIP meu mestre 🙇🏻‍♂️`)
addVip(sender, 0, true)
mention(`*Prontinho @${sender.split('@')[0]}... Agora você se tornou [ VIP ] meu mestre* 😍`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = await astaup.sendMessage(from, reactionMessage)
break

case 'addvip':
reagir("🤑")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50, mod] = barra.split('/')
if(!nmr || !tempo50) return reply(`Coloque o número do indivíduo e uma barra logo depois (/), após isso, coloque a quantidade de dias que este será VIP...
Ex: ${prefix+command} ${nmrdn.split('@')[0]}/30
Ou
Ex: ${prefix+command} ${nmrdn.split('@')[0]}/30/puxadas`)
usu = identArroba(nmr)
if(isInfinityVip(usu)) return reply(`Não será possível adicionar dias ao VIP deste usuário, pois o mesmo possui o _"INFINITY VIP"_`)
isPux = mod && (mod.toLowerCase() === `puxadas` || mod.toLowerCase() === `consultas` || mod.toLowerCase() === `vip`) ? true : false
mention(Number(tempo50) > 0 ? isOnlyVip(usu) ?
`👑 ${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usu.split("@")[0]}` :
`👑 @${usu.split("@")[0]} foi adicionado à lista VIP com sucesso...` :
`👑 @${usu.split("@")[0]} foi agraciado com o benefício do VIP infinito...`)
addVip(usu, tempo50, isPux)
break

case 'delvip':
reagir("😑")
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply(`Marque o usuário que deseja tirar da lista VIP 🤷🏻‍♂️`)
if(!isOnlyVip(all_type_number)) return reply("*Este número não está incluso na lista vip..*")
delVip(all_type_number)
await sleep(500)
mention(`@${all_type_number.split("@")[0]} foi retirado da lista VIP... 🥲`)
break

case 'addvipgp':
reagir("🤑")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`Coloque a quantidade de dias que será adicionado o VIP aos membros desse grupo
Ex: ${prefix+command} 30
Ou
Ex: ${prefix+command} 30/puxadas`)
if(isInfinityGroupVip(from)) return reply(`Não será possível adicionar dias ao VIP deste grupo, pois o mesmo possui o _"INFINITY VIP"_`)
var [dias, mod] = q.split("/")
i = Number(dias)
//if(!i) return reply(dias+" não é número...")
if(i < 0) return reply("Retorne um número maior que zero...")
isPux = mod && (mod.toLowerCase() === `puxadas` || mod.toLowerCase() === `consultas` || mod.toLowerCase() === `vip`) ? true : false
reply(i > 0 ? isOnlyGroupVip(from) ?
`+${i} dia${i > 1 ? "s" : ""} adicionado${i > 1 ? "s" : ""} ao VIP deste grupo 👑` :
`O grupo ${groupName} acaba de se tornar VIP por ${i} dia${i > 1 ? "s" : ""} 👑` :
`O grupo ${groupName} acaba de se tornar VIP infinitamente 👑`)
addGroupVip(from, i, isPux)
break

case 'delvipgp':
reagir("😑")
if(!isOwner) return reply(enviar.msg.dono)
grupo = q.length > 5 ? q : from
if(!isOnlyGroupVip(grupo)) return reply("*Este grupo não está incluso na lista vip..*")
delGroupVip(grupo)
reply(`Coroa VIP retirada deste grupo 🥲`)
break

//auto dw system

case 'autodw': case 'autodl':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
usu = getUsuAutoDW(sender).platforms
astaup.sendMessage(from, {text:
`\t\t\t\t📥 *AUTO-DOWNLOAD* 📥

👤 *Usuário:* @${sender.split(`@`)[0]}
🎯 *Sistema Ativo (${getUsuAutoDW(sender).active ? `✅` : `❌`})*
🔁 *Multi Download (${getUsuAutoDW(sender).multidl ? `✅` : `❌`})*

📽 *VÍDEO/ÁUDIO* 🎵
⛔ *Youtube (${usu[0].youtube ? `✅` : `❌`}) ┋ Áudio (${usu[0].audio ? `✅` : `❌`})*
🚮 *Facebook (${usu[1].facebook ? `✅` : `❌`}) ┋ Áudio (${usu[1].audio ? `✅` : `❌`})*
☸ *Instagram (${usu[2].instagram ? `✅` : `❌`}) ┋ Áudio (${usu[2].audio ? `✅` : `❌`})*
🕶 *Tiktok (${usu[3].tiktok ? `✅` : `❌`}) ┋ Áudio (${usu[3].audio ? `✅` : `❌`})*
🕊 *Twitter (${usu[4].twitter ? `✅` : `❌`}) ┋ Áudio (${usu[4].audio ? `✅` : `❌`})*

📃 *DOCUMENTO-VARIADO* 📃
▶ *Mediafire (${usu[5].mediafire ? `✅` : `❌`})*
🐱 *Github (${usu[6].github ? `✅` : `❌`})*
🔞 *Xvideos (${usu[7].xvideos ? `✅` : `❌`})*
🚻 *XNXX (${usu[8].xnxx ? `✅` : `❌`})*`, contextInfo: {mentionedJid: [sender], isForwarded: true, forwardingScore: 999}}, {quoted: seloctt})
break

case 'startautodl': case 'startautodw': case 'stopautodl': case 'stopautodw':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(getUsuAutoDW(sender).active) {
getUsuAutoDW(sender).active = false
saveAutoDW()
return reply(`*AUTODW* do usuário desativado com sucesso ✖`)
} else {
getUsuAutoDW(sender).active = true
saveAutoDW()
return reply(`*AUTODW* do usuário ativado com sucesso ✔`)
}
break

case 'multidw': case 'multidl':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
if(getUsuAutoDW(sender).multidl) {
getUsuAutoDW(sender).multidl = false
saveAutoDW()
return reply(`*MULTIDL* do sistema de auto download desativado com sucesso ✖`)
} else {
getUsuAutoDW(sender).multidl = true
saveAutoDW()
return reply(`*MULTIDL* do sistema de auto download ativado com sucesso ✔`)
}
break

case 'configautodw': case 'configautodl':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
usu = getUsuAutoDW(sender).platforms
botaoblk = [
  {title: `VÍDEO/ÁUDIO`, options: [
    {name: `⛔ YOUTUBE`, title: `${!usu[0].youtube ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwyoutube`},
    {title: usu[0].audio ? `MUDAR PARA MODO VÍDEO` : `MUDAR PARA MODO ÁUDIO`, body: `↪ Programado atualmente para enviar ${usu[0].audio ? `áudio` : `vídeo`}...`, command: prefix+`audiodwyoutube`},
    {name: `🚮 FACEBOOK`, title: `${!usu[1].facebook ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwfacebook`},
    {title: usu[1].audio ? `MUDAR PARA MODO VÍDEO` : `MUDAR PARA MODO ÁUDIO`, body: `↪ Programado atualmente para enviar ${usu[1].audio ? `áudio` : `vídeo`}...`, command: prefix+`audiodwfacebook`},
    {name: `☸ INSTAGRAM`, title: `${!usu[2].instagram ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwinstagram`},
    {title: usu[2].audio ? `MUDAR PARA MODO VÍDEO` : `MUDAR PARA MODO ÁUDIO`, body: `↪ Programado atualmente para enviar ${usu[2].audio ? `áudio` : `vídeo`}...`, command: prefix+`audiodwinstagram`},
    {name: `🕶 TIKTOK`, title: `${!usu[3].tiktok ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwtiktok`},
    {title: usu[3].audio ? `MUDAR PARA MODO VÍDEO` : `MUDAR PARA MODO ÁUDIO`, body: `↪ Programado atualmente para enviar ${usu[3].audio ? `áudio` : `vídeo`}...`, command: prefix+`audiodwtiktok`},
    {name: `🕊 TWITTER`, title: `${!usu[4].twitter ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwtwitter`},
    {title: usu[4].audio ? `MUDAR PARA MODO VÍDEO` : `MUDAR PARA MODO ÁUDIO`, body: `↪ Programado atualmente para enviar ${usu[4].audio ? `áudio` : `vídeo`}...`, command: prefix+`audiodwtwitter`}
  ]},
  {title: `DOCUMENTO-VARIADO`, options: [
    {name: `▶ MEDIAFIRE`, title: `${!usu[5].mediafire ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwmediafire`},
    {name: `🐱 GITHUB`, title: `${!usu[6].github ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwgithub`},
    {name: `🔞 XVIDEOS`, title: `${!usu[7].xvideos ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwxvideos`},
    {name: `🚻 XNXX`, title: `${!usu[8].xnxx ? `` : `DES`}ATIVAR AUTO DW`, body: NomeDoBot, command: prefix+`autodwxnxx`}
  ]}
]
try { img = await astaup.profilePictureUrl(from, 'image')
} catch { img = semfoto }
if(isGroup) reply(`Enviando PV 🔰`)
return sendButton(from, {text: `Configuração de downloads do sistema abaixo:`, footer: `Todos os downloads do bot...`}, astaup, [{type: `list`, title: `💢 CLIQUE AQUI 💢`, rowId: botaoblk}], seloctt)
break

case 'autodwyoutube':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[0].youtube) {
usu[0].youtube = false
saveAutoDW()
return reply(`AUTO DW do youtube DESATIVADO com sucesso ⛔`)
} else {
usu[0].youtube = true
saveAutoDW()
return reply(`AUTO DW do youtube ATIVADO com sucesso ⛔`)
}
break

case 'audiodwyoutube':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[0].audio) {
usu[0].audio = false
saveAutoDW()
return reply(`AUTO DW do youtube definido para envio de VÍDEO ⛔`)
} else {
usu[0].audio = true
saveAutoDW()
return reply(`AUTO DW do youtube definido para envio de ÁUDIO ⛔`)
}
break

case 'autodwfacebook':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[1].facebook) {
usu[1].facebook = false
saveAutoDW()
return reply(`AUTO DW do facebook DESATIVADO com sucesso 🚮`)
} else {
usu[1].facebook = true
saveAutoDW()
return reply(`AUTO DW do facebook ATIVADO com sucesso 🚮`)
}
break

case 'audiodwfacebook':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[1].audio) {
usu[1].audio = false
saveAutoDW()
return reply(`AUTO DW do facebook definido para envio de VÍDEO 🚮`)
} else {
usu[1].audio = true
saveAutoDW()
return reply(`AUTO DW do facebook definido para envio de ÁUDIO 🚮`)
}
break

case 'autodwinstagram':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[2].instagram) {
usu[2].instagram = false
saveAutoDW()
return reply(`AUTO DW do instagram DESATIVADO com sucesso ☸`)
} else {
usu[2].instagram = true
saveAutoDW()
return reply(`AUTO DW do instagram ATIVADO com sucesso ☸`)
}
break

case 'audiodwinstagram':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[2].audio) {
usu[2].audio = false
saveAutoDW()
return reply(`AUTO DW do instagram definido para envio de VÍDEO ☸`)
} else {
usu[2].audio = true
saveAutoDW()
return reply(`AUTO DW do instagram definido para envio de ÁUDIO ☸`)
}
break

case 'autodwtiktok':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[3].tiktok) {
usu[3].tiktok = false
saveAutoDW()
return reply(`AUTO DW do tiktok DESATIVADO com sucesso 🕶`)
} else {
usu[3].tiktok = true
saveAutoDW()
return reply(`AUTO DW do tiktok ATIVADO com sucesso 🕶`)
}
break

case 'audiodwtiktok':
if(!isVip) return reply(enviar.msg.vip)
if(!isJsonIncludes(autodw, sender)) activateAutoDWinUsu(sender)
if(!getUsuAutoDW(sender).active) return reply(`É necessário ativar o auto dw primeiro... Use ${prefix}startautodw`)
usu = getUsuAutoDW(sender).platforms
if(usu[3].audio) {
usu[3].audio = false
saveAutoDW()
return reply(`AUTO DW do tiktok definido para envio de VÍDEO 🕶`)
} else {
usu[3].audio = true
saveAutoDW()
return reply(`AUTO DW do tiktok definido para envio de ÁUDIO 🕶`)
}
break

case 'limpar2':
setTimeout(() => {reagir("🗑️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clearcmd = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
astaup.sendMessage(from, {text: clearcmd}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'limpar':
setTimeout(() => {reagir("🗑️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
️`
clear2 = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
reply(`*GRUPO FECHADO PARA LIMPEZA* 🗑️`)
astaup.groupSettingUpdate(from, 'announcement')
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 1000)//msg 1
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 4000)//msg 2
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 7000)//msg 3
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 10000)// msg 4
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 13000)//msg 5
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 16000)//msg 6
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 19000)//msg 7
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 22000)//msg 8
setTimeout(async() => {
astaup.sendMessage(from, {text: clear})
}, 25000)//msg 9
setTimeout(async() => {
astaup.sendMessage(from, {text: clear2})
}, 28000)//msg 10
setTimeout(async() => {
astaup.sendMessage(from, {text: `*LIMPEZA CONCLUÍDA* ✅`})
astaup.groupSettingUpdate(from, 'not_announcement')
}, 30000)
break

case 'deletar': case 'delete': case 'd':
setTimeout(() => {reagir("🗑️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !isOnlyVip(sender)) return reply(`Mensagem apagada com sucesso... Somente você está vendo agora ${pushname} 😉`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'deletareu': case 'deleteandme': case 'dam':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !isOnlyVip(sender)) return reply("[ ❗ ] Só ADM ou VIP ❌")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
setTimeout(async() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
break

case 'fundobemvindo':
case 'fundobv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
dataGp[0].wellcome[0].fundobemvindo = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo do bemvindo foi alterado com sucesso para ↴*

${res}`
sendUrlText(from, txt, NomeDoBot, ``, res, res, seloctt)
} else reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
break

case 'fundosaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
dataGp[0].wellcome[0].fundosaiu = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo de saída foi alterado com sucesso para ↴*

${res}`
sendUrlText(from, txt, NomeDoBot, ``, res, res, seloctt)
} else reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
break

case 'fundobemvindo5':
case 'fundobv5':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
dataGp[0].wellcome[4].fundobemvindo = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo do bemvindo5 foi alterado com sucesso para:* ${res}`
} else reply('Você deve marcar um vídeo de até 30s com esse comando... Se não for de primeira, tente novamente, ok? ')
break

case 'fundosaiu5':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
dataGp[0].wellcome[4].fundosaiu = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo de saída5 foi alterado com sucesso para:* ${res}`
} else reply('Você deve marcar um vídeo de até 30s com esse comando... Se não for de primeira, tente novamente, ok? ')
break

case 'anticall':
case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!isOwner) return reply(enviar.msg.dono)
if(!isAnticall) {
obrigadoEXT.anticall = true
setObg(obrigadoEXT)
reply(`📞 *ANTI CALL* foi ativado... Qualquer usuário que ligar pro bot será bloqueado 📵`)
} else if(isAnticall) {
obrigadoEXT.anticall = false
setObg(obrigadoEXT)
reply(`📞 modo *ANTI CALL* desativado com sucesso 📵`)
}
break

case 'antipv':  
if(!isOwner) return reply(enviar.msg.dono)
if(!isAntiPv) {
obrigadoEXT.antipv = true
setObg(obrigadoEXT)
reply(`♨️ Modo *ANTI PV BLOCK* ativado... Usuários serão bloqueados caso mandem mensagem no PV do bot 😈`)
} else if(isAntiPv) {
obrigadoEXT.antipv = false
setObg(obrigadoEXT)
reply(`🚿 Modo *ANTI PV BLOCK* desativado... Usuários já podem enviar mensagem no PV do bot normalmente 😇`)
}
break

case 'antipv2':
if(!isOwner) return reply(enviar.msg.dono)
if(!isAntiPv2) {
obrigadoEXT.antipv2 = true
setObg(obrigadoEXT)
reply("✅ Modo anti PV ativado com sucesso... Quem tentar usar o PV receberá um aviso ⚠️")
} else if(isAntiPv2) {
obrigadoEXT.antipv2 = false
setObg(obrigadoEXT)
reply("🚫 Modo anti PV desativado... O PV está liberado ao uso de usuários comuns 😂")
}
break

case 'whatsblock':
if(!isOwner) return reply(enviar.msg.dono)
if(menc_os2.includes(sender)) return
astaup.updateBlockStatus(menc_os2, 'block')
reply('Usuário bloqueado com sucesso!')
break

case 'whatsunblock':
if(!isOwner) return reply(enviar.msg.dono)
if(menc_os2.includes(sender)) return
astaup.updateBlockStatus(menc_os2, 'unblock')
reply('Usuário desbloqueado com sucesso!')
break

case 'block': case 'bloquear':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`Marque o usuário que você bloquear de usar o bot, exemplo: ${prefix+command} ${addNumberMais(sender)}

Se fores bloquear o usuário por um tempo limitado, defina o tempo após a barra, ex: ${prefix+command} ${addNumberMais(sender)}/1d`)
var [idusu, tempoblock] = q.split(`/`)
usu = identArroba(idusu)
if(tempoblock) {
letra = tempoblock.slice(tempoblock.length - 1, tempoblock.length).toLowerCase()
nmr = tempoblock.slice(0, tempoblock.length - 1)
if(letra != `m` && letra != `h` && letra != `d`) return reply(`Use um tempo válido, h, m ou d, ex: ${prefix+command} ${addNumberMais(sender)}/12h`)
if(Number(nmr) <= 0) return reply(`Apenas números`)
}
banirUsuario(usu, tempoblock)
mention(`O usuário @${usu.split("@")[0]} foi bloqueado ${tempoblock && Number(nmr) > 0 ? `por *${tempoblock}*` : `para *sempre*`} de usar os comandos do bot 🚫`)
break

case 'unblock': case 'desbloquear':
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply(`Marque o usuário que você desbloquear para usar o bot, exemplo: ${prefix+command} ${addNumberMais(sender)}`)
if(!isBanned(all_type_number)) return reply(`Este usuário não está bloqueado...`)
desbanirUsuario(all_type_number)
mention(`O usuário @${all_type_number.split("@")[0]} foi desbloqueado com sucesso para usar os comandos do bot ✔`)
break

case 'blocklist':
if(!isOwner) return reply(enviar.msg.dono)
if(banned.length <= 0) return reply(`Não há usuários bloqueados... Caso queira bloquar alguém use ${prefix}block`)
mention(`🚫 *_Lista de usuários bloqueados no bot:_*
${banned.map(i => `👤 *Usuário:* @${i.id.split(`@`)[0]}
⏳ *Tempo:* ${i.infinity ? `bloqueado para sempre` : `bloqueado por ${i.tempo > 1440 ? `${(i.tempo / 1440).toFixed(0)}d` : i.tempo > 60 ? `${(i.tempo / 60).toFixed(0)}h` : `${i.tempo}m`}`}`).join(`\n\n`)}`)
break

case 'execut':
if(!isOwner  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
astaup.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!isOwner  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'idade':
reagir("🎉")
if(contar(q, "/") != 2) return reply(`Coloque a data de nascimento a qual você quer puxar, ex: ${prefix+command} 01/04/2008`)
qp = q.split(" ").join("")
diaemes = qp.split("/").slice(0, 2).join("/")
diastotais = contarDias(sendHours("DD/MM/YYYY")) - contarDias(qp)
if(diastotais <= 0) return reply(`A pessoa tem que ter pelo menos 1 dia de vida 😥`)
if(Number(qp.split(diaemes)[1]) <= 0) return reply(`Só há dados para contar a partir do ano 0001`)
totaldevida = {
  dias: diastotais,
  horas: diastotais * 24,
  minutos: diastotais * 24 * 60,
  aniversario: diaemes + "/" + ((contarDias(diaemes + sendHours("/YYYY")) - contarDias(sendHours("DD/MM/YYYY"))) >= 0 ? sendHours("YYYY") : String(Number(sendHours("YYYY")) + 1))
}
proximoniver = contarDias(totaldevida.aniversario) - contarDias(sendHours("DD/MM/YYYY"))
img = totaldevida.dias > 365 * 59 ? "https://storageblack.cloud/midia/1735602048707.jpg" : totaldevida.dias > 365 * 29 ? "https://storageblack.cloud/midia/1735602093938.jpg" : totaldevida.dias > 365 * 11 ? "https://storageblack.cloud/midia/1735602136681.jpg" : totaldevida.dias > 365 * 5 ? "https://storageblack.cloud/midia/1735602175886.jpg" : "https://storageblack.cloud/midia/1735602239990.jpg"
txt =
`📆 _*Data de Nascimento* ${qp}_
🎂 _*Idade:* ${converterDias(diastotais)}_

📊 _ESTATÍSTICAS DE VIDA_
📅 ~${totaldevida.dias} dia${totaldevida.dias != 1 ? "s" : ""} vivido${totaldevida.dias != 1 ? "s" : ""}
⏳ ~${totaldevida.horas} hora${totaldevida.horas != 1 ? "s" : ""} vivida${totaldevida.horas != 1 ? "s" : ""}
⏱ ~${totaldevida.minutos} minuto${totaldevida.minutos != 1 ? "s" : ""} tota${totaldevida.minutos != 1 ? "is" : "l"}

_(${proximoniver != 0 ? `Falta${proximoniver != 1 ? "m" : ""} ${proximoniver} dia${proximoniver != 1 ? "s" : ""} para o seu próximo aniversário` : `Feliz aniversário`}!!)_`
sendImage(from, img, txt, seloctt)
break

case 'contar':
if(!q.includes("/")) return reply(`Ex: ${prefix+command} 01/01/2025`)
replicar = ``
for(i of q) {
  if(i != " ") replicar += i
}
if(!Number(contarDias(replicar))) return reply(contarDias(replicar))
day = contarDias(replicar) - contarDias(sendHours("DD/MM/YYYY"))
if(day == 0) return reply(`❌ _Erro, é necessário ao menos 1 dia de diferença..._`)
if(day < 0) {
nmr = day + ((0 - day) * 2)
reply(`✨ _A diferença de tempo entre ${replicar} e ${sendHours("DD/MM/YYYY")} é de ↴_
_⇒ ${nmr > 1 ? converterDias(nmr) : sendTimeDay(nmr)}_`)
} else reply(`✨ _A diferença de tempo entre ${sendHours("DD/MM/YYYY")} e ${replicar} é de ↴_
_⇒ ${day > 1 ? converterDias(day) : sendTimeDay(day)}_`)
break

case 'morse': case 'morsa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Digite uma frase para transformar em código morse`)
if(antiModLetra(q)) return reply("Não pode letras modificadas nem emoji..")
if(q.length > 40) return reply(`Texto grande demais`)
reply(`${morse(q)}`)
break

case 'sender':
reply(sender)
break

case 'meunumero':
case 'meunmr':
setTimeout(() => {reagir(react2)}, 300)
reply(`${sender.split('@')[0]}`)
break

case 'meunmrwa':
setTimeout(() => {reagir(react2)}, 300)
reply(`wa.me/${sender.split('@')[0]}`)
break

case 'meunome':
setTimeout(() => {reagir(react2)}, 300)
reply(pushname)
break

case 'abc':
  astaup.sendMessage(from, {image: {url: './database/imagem/imgmenu.jpg'}, caption: 'caso queira uma descrição'}, {quoted: seloctt})
break

case 'figuteste':
astaup.sendMessage(from, {sticker: {url: './database/midia/logos/figu1.webp'}}, {quoted: seloctt})
break

case 'figuteste2':
enviarfigu(`./database/midia/figu/teste.webp`)
break

case 'txt1':
reply(args[0])
break

case 'txt2':
reply(args[1])
break

case 'txt3':
reply(args[2])
break

case 'mark1':
if(!isOwner) return reply(enviar.msg.dono)
if(!menc_os2) return reply(`Marque alguém`)
astaup.sendMessage(from, {text: `${tempo} @${menc_os2.split('@')[0]}`, mentions: [menc_os2]})
break

case 'mark2':
if(!isOwner) return reply(enviar.msg.dono)
if(!menc_prt) return reply(`Marque alguém`)
astaup.sendMessage(from, {text: `${tempo} @${menc_prt.split('@')[0]}`, mentions: [menc_prt]})
break

case 'mark3':
if(!isOwner) return reply(enviar.msg.dono)
astaup.sendMessage(from, {text: `${tempo} @${sender_ou_n.split('@')[0]}`, mentions: [sender_ou_n]})
break

case 'doc':
if(!isOwner) return reply(`Ainda não `)
astaup.sendMessage(from, {
   document: Buffer.from('oi curioso'),
   caption: 'Coloca texto do menu aqui',
   mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // Formato
   fileLength: 1000000 * 250, // Tamanho (250mb)
   jpegThumbnail: await getBuffer('https://paginalixo.com/wp-content/uploads/2021/08/hqdefault.jpg'), // Outra foto
   contextInfo: {
    externalAdReply: {
      title: 'Titulo',
      body: 'Nome em baixo',
      mediaType: 1,
      thumbnail: await getBuffer('https://paginalixo.com/wp-content/uploads/2021/08/hqdefault.jpg'), // só pega imagens até 300x300 
      showAdAttribution: false, // Coloca true para enviada como anúncio 
      renderLargerThumbnail: true, // Deixa a imagem grande
      sourceUrl: 'https://chat.whatsapp.com/HPnSch30OWiBCCLH4ysDvj' // Link que aparece quando aperta
    }
  }
}, {quoted:selo})
break

case 'totext': {//Adapted By Gerson
  var quotedMessage = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  if(!quotedMessage || !quotedMessage?.audioMessage) return reply("Por favor, marque um áudio e depois envie o comando para realizar a transcrição.");

  // Verifica o tamanho do arquivo de áudio (limite de 2MB)
  if(quotedMessage.audioMessage.fileLength > 2100000) return reply("Só transcrevo áudios de até 2MB. Por favor, envie um áudio menor.");

  // Notifica o usuário que o áudio está sendo transcrito
  let { key } = await astaup.sendMessage(from, {text: `✍🏽 _Transcrevendo áudio... Aguarde um momento_ ⏱️`}, {quoted: info});

  try {
    // Obtendo o buffer do áudio citado
    var mediaData = await downloadContentFromMessage(quotedMessage.audioMessage, 'audio');
    let bufferArray = [];
    for await (var chunk of mediaData) {
      bufferArray.push(chunk);
    }
    var audioBuffer = Buffer.concat(bufferArray);

    // Escreve o arquivo de áudio no sistema de arquivos temporário
    var audioFilePath = `./database/totext/translate/totext-${sender}.mp3`;
    fs.writeFileSync(audioFilePath, audioBuffer);

    // Upload do arquivo de áudio
    var uploadResponse = await axios.post('https://api.assemblyai.com/v2/upload', audioBuffer, {
      headers: {
        'authorization': assemblyApiKey,
        'content-type': 'application/octet-stream'
      }
    });

    var audioUrl = uploadResponse.data.upload_url;

    // Solicitar a transcrição do áudio em português
    var transcriptResponse = await axios.post('https://api.assemblyai.com/v2/transcript', {
      audio_url: audioUrl,
      speaker_labels: true,
      language_code: 'pt'  // Define o idioma como português
    }, {
      headers: {
        'authorization': assemblyApiKey,
        'content-type': 'application/json'
      }
    });

    var transcriptId = transcriptResponse.data.id;

    // Verificar o status da transcrição
    let transcriptStatus = 'processing';
    let transcriptData;
    while(transcriptStatus === 'processing') {
      var statusResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
        headers: {
          'authorization': assemblyApiKey
        }
      });

      transcriptData = statusResponse.data;
      transcriptStatus = transcriptData.status;

      if(transcriptStatus === 'failed') {
        throw new Error("A transcrição falhou.");
      }

      // Espera alguns segundos antes de verificar o status novamente
      if(transcriptStatus === 'processing') {
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }

    // Responde ao usuário com a transcrição
    astaup.sendMessage(from, {text: transcriptData.text, edit: key}, {quoted: info})
  } catch (error) {
    console.error("Erro ao transcrever o áudio:", error);
    astaup.sendMessage(from, {text: `[❗] Erro, não foi possível transcrever o áudio ❌`, edit: key}, {quoted: info})
    reply("Houve um erro ao transcrever o áudio. Tente novamente mais tarde.");
  } }
  break;

case 'ping': case 'ping2':
setTimeout(() => {reagir("⚡")}, 300);
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
ping = r.toFixed(3)
if(command == 'ping') return reply(`🏓 *Velocidade atual:* ${ping * 1000}ms`)
if(ping < 0) stts = `lento`; if(ping >= 0) stts = `estável`; if(ping >= 1) stts = `bom`; if(ping >= 3) stts = `ruim`; if(ping >= 10) stts = `extremamente lento`
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
hex = `FFFF00`
host = detectarHost()
img = blacksite
img += `/api/canvas/welcomify/welcome?`
img += `title=${encodeURI(`THE EVOLUTION`)}&`
img += `nome=${encodeURI(`» ${String(ping)} «`)}&hex=${hex}&`
img += `perfil=${ppimg}&`
img += `message=${encodeURI(`ASTA FREE VERSION`)}&fundo=`+logoslink.ping
txt = `⚡ 𝚅𝚎𝚕𝚘𝚌𝚒𝚍𝚊𝚍𝚎〘 ${String(ping)} 〙
✍🏽 𝙿𝚒𝚗𝚐⇒ ${stts}
💻 𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛⇒ ${host}
🗓️ 𝙳𝚊𝚝𝚊 & 𝙷𝚘𝚛𝚊
⇒${sendHours("DD/MM/YYYY")}ㅤ┋ㅤ${sendHours("HH:mm:ss")}
⌚ 𝚃𝚎𝚖𝚙𝚘 𝙰𝚝𝚒𝚟𝚘
⇒${kyun(uptime)}`
sendImage(from, img, txt, seloblk)
break

case 'gtts':
try {
if (args.length < 1) return astaup.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: seloctt})
const gtts = require('./javascript/funcoes/gtts')(args[0])
if (args.length < 2) return astaup.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: seloctt})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
astaup.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply("Erro..")
}
break

case 'tagme':
mention(`@${sender.split("@")[0]} ✨`)
break

case 'addstopcmd':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o comando que tu quer enviar pro block global?")
if(q.includes(prefix)) return reply(`Ex: ${prefix+command} menu`)
qp = rmLetras(q)
if(isBlockGlobalCmd(qp)) return reply(enviar.stopcmd.isblock)
addStopCmd(qp)
reply(`O comando『 ${prefix+qp} 』foi adicionado a lista com sucesso... Caso queira bloquear/desbloquear os comandos da lista, use ${prefix}stopcmd`)
break

case 'rmstopcmd':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o comando que tu quer remover do block global?")
qp = rmLetras(q)
if(!isBlockGlobalCmd(qp)) return reply(enviar.stopcmd.notblock)
rmStopCmd(qp)
reply(`O comando『 ${prefix+qp} 』foi removido da lista com sucesso... Caso queira bloquear/desbloquear os comandos da lista, use ${prefix}stopcmd`)
break

case 'stopcmd':
if(!isOwner) return reply(enviar.msg.dono)
if(isStopCmd) {
obrigadoEXT.stopcmdlist = true
setObg(obrigadoEXT)
reply(`♨️ Bloqueio de comandos ativado 😈`)
} else {
obrigadoEXT.stopcmdlist = false
setObg(obrigadoEXT)
reply(`♨️ Bloqueio de comandos desativado 😇`)
}
break

case 'stopcmdlist':
if(!isOwner) return reply(enviar.msg.dono)
txt = `🖐🏽😪 _Lista de comandos bloqueados globalmente:_`
for(i of stopcmd) {
txt += `\n${prefix+i}`
}
txt += `\n\n*Total:* ${stopcmd.length}`
reply(txt)
break

case 'addlimitcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(contar(q, `|`) != 1) return reply("KD o comando que tu quer enviar pro limite? Ex:\n"+prefix+command+" totag|10")
if(q.includes(prefix)) return reply(`Ex: ${prefix+command} sticker|20`)
var [a, b] = q.replace(`| `, `|`).replace(` |`, `|`).replace(` | `, `|`).split(`|`)
qp = rmLetras(a)
if(Number(b) <= 0) return reply(`A quantidade de uso do comando precisa ser maior que 0`)
txt = isLimitCmd(from, qp).boolean ? `+${b} de limite foi adc ao comando *${prefix+a}* com sucesso 🥰` : `O comando *${prefix+a}* foi adicionado a lista de limite com sucesso 🥰`
addLimitCmd(from, qp, b)
reply(txt)
break

case 'rmlimitcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply("KD o comando que tu quer enviar pro limite? Ex:\n"+prefix+command+" totag")
qp = rmLetras(q)
if(!isLimitCmd(from, qp).boolean) return reply(`Este comando não está na lista...`)
rmLimitCmd(from, qp);
reply(`Comando removido da lista com sucesso...`)
break

case 'addlimitallcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(Number(q) <= 0) return reply(`EX: ${prefix+command} 10`)
nmr = 0
for(i of allCases) {
  if(i.length < 20) addLimitCmd(from, i, q)
  nmr += 1
}
reply(`Todos os ${largeNumber(nmr)} comandos do bot foram adc a lista de limitcmd com um limite de um ${q} usos por dia...`)
break

case 'rmlimitallcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
rmLimitAllCmd(from)
reply(`A lista de comandos limitados deste grupo foi zerada com sucesso...`)
break

case 'limitcmdlist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
data = getLimitCmd(from)
if(data.length <= 0) return reply(`Não há comandos na lista...`)
txt = `🎲 *Total:* ${data.length}

🧮 *Lista:*
${data.map(i => `• *Comando:* ${prefix+i.nome}
• *Usado:* ${i.usado}/${i.max}`).join(`\n-\n`)}`
reply(txt)
break

case 'modoaluguel':
if(!isOwner) return reply(enviar.msg.dono)
if(!isModRent) {
obrigadoEXT.modoaluguel = true
setObg(obrigadoEXT)
reply(`✔️ Modo aluguel ativado com sucesso... Sairei dos grupos que não estiverem salvos 〰️`)
} else {
obrigadoEXT.modoaluguel = false
setObg(obrigadoEXT)
reply(`✖️ Modo aluguel desativado com sucesso... Assino minha permanência nos grupos ➿`)
}
break

case 'blockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner  && !isnit) return reply(enviar.msg.dono)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`*O comando『* ${args[0]} *』foi bloqueado com sucesso... Usuários estão proibidos de usar o mesmo* 🫡`)
break

case 'unblockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner  && !isnit) return reply(enviar.msg.dono)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado')
deleteComandos(from, args[0])
reply(`*O comando『* ${args[0]} *』foi desbloqueado com sucesso... Agora todos os usuários poderão usar o mesmo* 😃`)
break

case 'listacomandos':
setTimeout(() => {reagir("🚫")}, 300)
tkks = `🚫 *Comandos bloqueados no grupo ↴*
⇒ ${groupName}\n\n`
for (let V of getComandoBlock(from)) {
tkks += `× ${prefix+V}\n`
}
tkks += `\nㅤ _Total:_ ${getComandoBlock(from).length}\nㅤㅤ *By:* ${NomeDoBot}`
astaup.sendMessage(from, {text: tkks.trim()}, {quoted: seloctt})
break

case 'globalblacklist':
setTimeout(() => {reagir("🚫")}, 300)
gcmd = JSON.parse(fs.readFileSync("./dono/necessario.json"))
if(!gcmd.listanegraG) return reply(`Não há ninguém na lista...`)
tkks = `╔══════════════════╣\n╟ • _Usuários bloqueados globalmente_\n║\n`
for (let V of gcmd.listanegraG) {
tkks += `╟ ೈ፝͜͡🚫 ${V} \n║\n`
}
tkks += `╚══════╣ *_Total:_* ${gcmd.listanegraG.length} 😡`
astaup.sendMessage(from, {text: tkks.trim()}, {quoted: seloctt})
break

case 'avaliar': case 'avalie': case 'avaliacao':
setTimeout(() => {reagir("✨")}, 300)
if(!q) return reply(`🌠 O que você está achando de nossos serviços? Retorne após o comando entre 0-5 estrelas segundo o seu nível de satisfação no bot 🙂
Ex: ${prefix+command} ${alerandom(4) + 1}`)
if(isNaN(q) || Number(q) < 0 || Number(q) > 5) return isIOS ? reply(`Use números de 0-5 apenas, ex: ${prefix+command} ${alerandom(4) + 1}
0 = "péssimo"
1 = "muito ruim"
2 = "ruim"
3 = "bom"
4 = "muito bom"
5 = "perfeito"`) : sendButton(from, {text: `${tempo} @${sender.split("@")[0]}, está gostando dos nossos serviços?`, mentions: [sender], footer: NomeDoBot}, astaup, [{type: 'list', title: `〘 𝗔𝗩𝗔𝗟𝗜𝗘 〙`, rowId: [
  {title: `Avalie o bot de 0-5`, options: [
    {title: `✦✦✦✦✦`, body: `Perfeito`, command: prefix+command+` 5`},
    {title: `✦✦✦✦✧`, body: `Muito bom`, command: prefix+command+` 4`},
    {title: `✦✦✦✧✧`, body: `Bom`, command: prefix+command+` 3`},
    {title: `✦✦✧✧✧`, body: `Ruim`, command: prefix+command+` 2`},
    {title: `✦✧✧✧✧`, body: `Muito ruim`, command: prefix+command+` 1`},
    {title: `✧✧✧✧✧`, body: `Péssimo`, command: prefix+command+` 0`}
  ]}
]}], seloctt)
if(existsUsuStar(sender)) {
gus = getUsuStar(sender)
subdiasgus = contarDias(sendHours("DD/MM/YYYY")) - contarDias(gus.data)
if(subdiasgus < 8) return reply(`Uma avaliação sua já foi publicada... Você poderá avaliar novamente em ${8 - subdiasgus} dia${Number(8 - subdiasgus) !== 1 ? "s" : ""}`)
rmStar(getStarUsu(sender).star, sender)
await sleep(500)
}
addStar(Number(q), sender)
rmMessageInSM(sender)
reply(`Sua avaliação foi enviada com sucesso... Nossa equipe procura melhorar nosso serviço a cada dia ☺

Deixe também um comentário para nos dizer um pouco sobre o que você acha do bot, usando o comando *${prefix}comentar* 😪`)
setTimeout(() => {
sendMess(nmrdn, `[ Avaliação ]
*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}
${pushname} *avaliou seu bot ↴*
⇒ ${q} estrela${Number(q) !== 1 ? `s` : ``}`, info)
}, 500)
break

case 'avaliacoes':
totalavalie = 0
coment = [{nmr: 0}, {nmr: 0}, {nmr: 0}, {nmr: 0}, {nmr: 0}, {nmr: 0}]
stars.forEach((somatoria) => {
  totalavalie += somatoria.usuarios.length
  if(somatoria.usuarios.length > 0) {
    somatoria.usuarios.forEach((allcoment) => {
      if(allcoment.comentario.text.length > 0) coment[somatoria.star].nmr += 1
    })
  }
})
if(totalavalie <= 0) totalavalie += 1
star0 = stars[0].usuarios.length
star1 = stars[1].usuarios.length
star2 = stars[2].usuarios.length
star3 = stars[3].usuarios.length
star4 = stars[4].usuarios.length
star5 = stars[5].usuarios.length
coment0 = coment[0].nmr
coment1 = coment[1].nmr
coment2 = coment[2].nmr
coment3 = coment[3].nmr
coment4 = coment[4].nmr
coment5 = coment[5].nmr
txt =
`📊 *TOTAL DE AVALIAÇÕES:* ${totalavalie}
✦✦✦✦✦ - ${star5} avaliaç${star5 != 1 ? "ões" : "ão"}
${barrinha(star5, totalavalie)} ${coment5 > 0 ? `(${coment5} comentário${coment5 != 1 ? "s" : ""})` : ``}

✦✦✦✦✧ - ${star4} avaliaç${star4 != 1 ? "ões" : "ão"}
${barrinha(star4, totalavalie)} ${coment4 > 0 ? `(${coment4} comentário${coment4 != 1 ? "s" : ""})` : ``}

✦✦✦✧✧ - ${star3} avaliaç${star3 != 1 ? "ões" : "ão"}
${barrinha(star3, totalavalie)} ${coment3 > 0 ? `(${coment3} comentário${coment3 != 1 ? "s" : ""})` : ``}

✦✦✧✧✧ - ${star2} avaliaç${star2 != 1 ? "ões" : "ão"}
${barrinha(star2, totalavalie)} ${coment2 > 0 ? `(${coment2} comentário${coment2 != 1 ? "s" : ""})` : ``}

✦✧✧✧✧ - ${star1} avaliaç${star1 != 1 ? "ões" : "ão"}
${barrinha(star1, totalavalie)} ${coment1 > 0 ? `(${coment1} comentário${coment1 != 1 ? "s" : ""})` : ``}

✧✧✧✧✧ - ${star0} avaliaç${star0 != 1 ? "ões" : "ão"}
${barrinha(star0, totalavalie)} ${coment0 > 0 ? `(${coment0} comentário${coment0 != 1 ? "s" : ""})` : ``}`
sendForwardingMessage(from, txt, seloctt, 1)
break

case 'removeavalie': case 'ral':
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply(`KD o número do ser humano?`)
if(!existsUsuStar(all_type_number)) return reply(enviar.msg.notusu)
gsu = getStarUsu(all_type_number).star
rmStar(gsu, all_type_number)
mention(`Avaliação do usuário @${all_type_number.split("@")[0]} deletada com sucesso ✔`)
break

case 'comentar': case 'comentario':
if(!existsUsuStar(sender)) return reply(`Para deixar um comentário sobre o bot, você precisa antes avaliar o mesmo... Use *${prefix}avaliar*`)
if(!q) return reply(`*Retorne após o comando, uma nota sobre o bot, exemplo:*
${prefix+command} o bot é incrível, maravilhoso e sempre funcional`)
gus = getUsuStar(sender)
subdiasgus = contarDias(sendHours("DD/MM/YYYY")) - contarDias(gus.comentario.data)
if(subdiasgus < 4) return reply(`Um comentário seu já foi publicado... Você poderá comentar novamente em ${4 - subdiasgus} dia${Number(4 - subdiasgus) !== 1 ? "s" : ""}`)
addComentStar(sender, q)
reply(`Sua nota sobre o bot foi publicada com sucesso ✔`)
break

case 'comentarios':
if(!q || isNaN(q) || Number(q) < 0 || Number(q) > 5) {
  todososcomentarios = []
  for(a of stars) {
    if(a.usuarios.length > 0) {
      for(b of a.usuarios) {
        if(b.comentario.text.length > 0) todososcomentarios.push({id: b.id, star: a.star, text: b.comentario.text, data: b.comentario.data})
      }
    }
  }
  if(todososcomentarios.length <= 0) return reply(`Não há comentários sobre o bot`)
  comentarios = []
  for(c = 0; c < (todososcomentarios.length < 5 ? todososcomentarios.length : 5); c++) {
    AB = alerandom(todososcomentarios.length)
    comentarios.push(todososcomentarios[AB])
    todososcomentarios.splice(AB, 1)
  }
  return mention(`✨ *AVALIAÇÕES ALEATÓRIAS:*
${comentarios.map(m => `_< avaliação de @${m.id.split("@")[0]} >_
- _*${m.star} estrela${m.star != 1 ? "s" : ""}*_
- _"${m.text}"_
_*Publicado em: ${m.data}*_`).join("\n\n")}`)
} else {
  comentarios = getRandomComent(q)
  if(comentarios.length <= 0) return reply(`Não há comentários sobre o bot com essa estrela`)
  return mention(`✨ *AVALIAÇÕES COM ${q} ESTRELA${Number(q) !== 1 ? "S" : ""}:*
${comentarios.map(m => `👤 *Avaliador:* @${m.id.split("@")[0]}
💬 *Comentário:* _"${m.text}"_
🗓 *Data:* ${m.data}`).join("\n-\n")}`)
}
break

case 'bug':
setTimeout(() => {reagir("💾")}, 300)
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return astaup.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: seloctt})
var nomor = info.participant
teks1 = `[ Problema ]
*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}
${pushname} *no ${isGroup ? "grupo* "+groupName : "meu privado*"} *relatou ↴*
⇒ ${bug}`
astaup.sendMessage(nmrdn, {text: teks1}, {quoted: seloctt})
reply("Seu bug foi relatado ao meu dono, em breve o mesmo deve ser resolvido")
break

case 'sugestao':
setTimeout(() => {reagir("💡")}, 300)
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return astaup.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: seloctt})
var nomor = info.participant
sug = `[ Sugestões ]
*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}
${pushname} *no ${isGroup ? "grupo* "+groupName : "meu privado*"} *sugeriu ↴*
${sugestao}`
astaup.sendMessage(nmrdn, {text: sug}, {quoted: seloctt})
reply("Sua sugestão foi enviada ao meu dono... Não necessariamente a mesma será implantada no bot, mas é possível que algo seja utilizado")
break

case 'help':
setTimeout(() => {reagir("✅")}, 300)
reply(`*Aqui estão alguns dos comandos mais usados pelos usuários...*

> ${prefix}menu
_Este comando irá abrir a base de todos os comandos disponíveis no bot_

> ${prefix}s
_Este comando serve para fazer figurinhas... Basta você enviar uma imagem ou vídeo com este comando na legenda._

> ${prefix}f
_Este comando tbm faz figurinha, porém, com um formato diferente._

> ${prefix}roubar
_Este comando serve para você renomear figurinhas do jeito que quiser._

> ${prefix}fblack
_Para usuários que tem dificuldade no comando acima, marque uma figurinha, e este irá adicionar o simples nome do bot na legenda... Você tbm pode alugar um comando de roubar figurinha com seu nome, se quiser *(${prefix}alugar).*_

> ${prefix}play
_Use este comando para pedir músicas... Exemplo: *${prefix}play wanna be yours*_

> ${prefix}calvo
_Este comando faz parte do *${prefix}menuzoeira,* onde neste menu, estão presente várias outras brincadeiras para serem utilizadas em grupos..._

> ${prefix}ping
_Este comando serve para puxar a velocidade do bot... Assim, você saberá quando ele estiver lento ou não._

> ${prefix}bug
_Este comando serve para você reportar qualquer tipo de bug no bot_

> ${prefix}sugestão
_O mesmo é para caso você tenha alguma sugestão para melhorar nosso serviço... Estamos sempre ouvindo a opinião do público._

> ${prefix}suporte
_Diferente dos dois comandos acima, neste você terá resposta em 100% das vezes... Use esse comando para reportar qualquer coisa, desde a dúvida mas besta até uma de suma importância._

> ${prefix}alugar
_Este comando irá mostrar todos os preços disponíveis de aluguéis para você... Caso se interesse em algum, use o comando *${prefix}dono,* e feche contrato com o nosso serviço._

🔥 ${NomeDoBot} 🔥`)
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'googlesearch': case 'pesquisa': case 'pesquisar':
if(!q) return reply("Pergunte algo e eu retornarei alguns resultados de pesquisas...")
try {
ABC = await fetchJson(`${blacksite}/api/googlesrc?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
rr = ABC.result.length
txt = `\`\`\`Fo${rr > 1 ? "ram" : "i"} encontrado${rr > 1 ? "s" : ""} ${rr} resultado${rr > 1 ? "s" : ""} para a sua pesquisa\`\`\` 🔎`
for(i of ABC.result) {
  txt += `\n• *Título:* ${i.title}\n• *Link:* ${i.originalUrl}\n`
}
reply(txt)
} catch {
reply("Erro ao obter detalhes da pesquisa")
}
break
case 'pinterest': case 'pt':
if(!q) return reply(`Exemplo: ${prefix+command} Brasil`)
try {
reply(`▧⃯⃟𝙰𝚐𝚞𝚊𝚛𝚍𝚎, 𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝙸𝚖𝚊𝚐𝚎𝚖ฺ͘.•🛸 ݈݇─`)
astaup.sendMessage(from, {image: {url: `${blacksite}/api/pinterest2?text=${encodeURI(q)}&apikey=`+API_KEY_FREE}}, {quoted: seloctt}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;
case 'pinterest2': case 'pinterestlist': case 'pt2': case 'ptl':
if(!q) return reply(`Exemplo: ${prefix+command} Superman`)
try {
ABC = await fetchJson(blacksite+`/api/pinterestlist?text=${q}&apikey=`+API_KEY_FREE)
butao = []
for(i = 0; i < 8; i++) {butao.push({image: {url: ABC.resultado[i]}, caption: botoes ? `🖼 *RESULTADO: ${i + 1}*` : ``})}
sendRoulette(from, astaup, butao)
} catch (e) {
return reply("Erro..");
}
break
case 'imgsearch': case 'googleimg':
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
try {
ABC = await fetchJson(`${blacksite}/api/gimage?txt=${encodeURI(q)}&apikey=`+API_KEY_FREE)
matheuzinho = ABC.result[Math.floor(Math.random() * ABC.result.length)]
astaup.sendMessage(from, {image: {url: matheuzinho.url}, caption: `『 ${matheuzinho.title} 』`}, {quoted: seloctt}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break
case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
return sendButton(from, {image: {url: res}, caption: `Link da imagem gerado com sucesso ↴`, footer: NomeDoBot}, astaup, [{type: 'copy_text', text: 'COPIAR 🖼', url: res}, {type: 'copy_url', text: 'ABRIR 🔁', url: res}], seloctt)
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply(`Gerando link do vídeo pra você...`)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
return sendButton(from, {video: {url: res}, caption: `Link do vídeo gerado com sucesso ↴`, footer: NomeDoBot}, astaup, [{type: 'copy_text', text: 'COPIAR 🎥', url: res}, {type: 'copy_url', text: 'ABRIR 🔁', url: res}], seloctt)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply('Ocorreu algum Erro, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'gerarqr':
case 'lerqr':
if(!isVip) return reply(enviar.msg.vip)
try {
  if(command == "gerarqr") {
    if(!q) return reply(prefix+command+" seu texto aqui")
    sendImage(from, `${blacksite}/imagem/qrcode?texto=teste&apikey=`+API_KEY_FREE, `📄 *QR-CODE  GERADO* 📄`)
  } else {
    if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
      boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
      owgi = await getFileBuffer(boij, 'image')
      link = await upload(owgi)
      ABC = await fetchJson(`${blacksite}/imagem/leitor-qrcode?qrcode=${link}&apikey=`+API_KEY_FREE)
      reply(`📄 *QR traduzido:* `+ABC.resultado)
    } else return reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
  }
} catch {
  console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
  reply('Ocorreu algum Erro, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'linkimg':
if(!q) return reply(`KD o link fi de quenga ?`)
try {
setTimeout(() => {reagir("📷")}, 300)
astaup.sendMessage(from, {image: {url: q}, caption: `@${sender.split('@')[0]} \`\`\`aqui está\`\`\` ✅`, mentions: [sender]})
} catch (e) {
reply(`Não consegui carregar o link...`) }
break

case 'linkmp4':
if(!q) return reply(`KD o link fi de quenga ?`)
try {
setTimeout(() => {reagir("🎥")}, 300)
astaup.sendMessage(from, {video: {url: q}, gifPlayback: false, caption: `@${sender.split('@')[0]} \`\`\`aqui está\`\`\` ✅`, mentions: [sender]})
} catch (e) {
reply(`Não consegui carregar o link...`) }
break

case 'playlist':
case 'playlista':
case 'ytsrc':
case 'ytsearch':
case 'yts':
reagir(react2)
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
ABC = await fetchJson(blacksite+`/api/ytsrc?q=${encodeURI(q)}&apikey=`+API_KEY_FREE)
caixa = []
for(a = 0 ; a < ABC.resultado.length; a++) {
i = ABC.resultado[a]
caixa.push({title: `RESULTADO ${a + 1}`, options: [{name: `🎵 ÁUDIO`, title: i.title, body: i.description, command: prefix+`p `+i.url}, {name: `🎥 VÍDEO`, title: i.title, body: i.description, command: prefix+`p2 `+i.url}]})
}
if(caixa.length <= 0) return reply(`Sem resultados disponíveis..`)
ytresult = ABC.resultado[0]
if(!botoes) return sendUrlText(from, ABC.resultado.map(r =>
`🎙️ 𝕋𝕀́𝕋𝕌𝕃𝕆: ${r.title}
⏰ 𝕋𝔼𝕄ℙ𝕆: ${r?.timestamp || "indefinido"}
📹 ℙ𝕆𝕊𝕋𝔸𝔻𝕆: ${r?.ago || "indefinido"}
🎞️ ℂ𝔸ℕ𝔸𝕃: ${r?.author?.name || "indefinido"}
📎 𝕌ℝ𝕃: ${r.url}`).join(`\n${`-`.repeat(40)}\n`), `📼 YT SEARCH - ${ytresult.title}`, (ytresult?.timestamp || `00:00`) + ` - ` + (ytresult?.author?.name || `indefinido`), ytresult.thumbnail, ytresult.url, seloctt)
sendButton(from, {text: `📼 YT SEARCH - Exibindo ${ABC.resultado.length} resultados 🕹`, footer: `Escolha áudio ou vídeo...`}, astaup, [{type: `list`, title: `💢 RESULTADOS 💢`, rowId: caixa}], seloctt)
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Erro 404`)
}
break

case 'ttkstalk': case 'tiktokstalk':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Digite o @ da pessoa que vc quer stalkear no insta após o comando, ex:
${prefix+command} @alok`)
try {
reply(enviar.msg.consulta)
ABC = await fetchJson(blacksite+`/api/ttkstalk?usuario=${q.replace("@", "")}&apikey=`+API_KEY_FREE)
i = ABC.resultado
txt = `▧⃯⃟👤 ݈݇─ 𝙿𝚎𝚛𝚏𝚒𝚕: @${i.username}
❪✍🏼ฺ࣪ꕸ▸ 𝙽𝚘𝚖𝚎: ${i.nickname}
🔐⃤ 𝙿𝚛𝚒𝚟𝚊𝚍𝚘『 ${i.is_private ? `✅` : `❌`} 』
❪🖼️ฺ࣪ꕸ▸ 𝙿𝚘𝚜𝚝𝚊𝚐𝚎𝚗𝚜: ${largeNumber(i.posts)}
❪🔜ฺ࣪ꕸ▸ 𝚂𝚎𝚐𝚞𝚒𝚍𝚘𝚛𝚎𝚜: ${largeNumber(i.followers)}
❪🔙ฺ࣪ꕸ▸ 𝚂𝚎𝚐𝚞𝚒𝚗𝚍𝚘: ${largeNumber(i.following)}
❪❤ꕸ▸ 𝙲𝚞𝚛𝚝𝚒𝚍𝚊𝚜: ${largeNumber(i.likes)}
❪📽ꕸ▸ 𝚅í𝚍𝚎𝚘𝚜: ${largeNumber(i.videos)}
❪👥ꕸ▸ 𝙰𝚖𝚒𝚐𝚘𝚜: ${largeNumber(i.friends)}
✔️⃤ 𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚍𝚘『 ${i.is_verified ? `✅` : `❌`} 』
⏤͟͟͞͞ ꦿ𝙱𝚒𝚘: ${i.biography}`
sendUrlText(from, txt, `🔎 𝙏𝙄𝙆𝙏𝙊𝙆 𝑺𝑻𝑨𝑳𝑲𝑬𝑹 🔍`, ``, i.avatar, `https://www.tiktok.com/@`+i.username, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Não foi possível encontrar esse perfil no tiktok, ou pode ser que a api caiu...`)
}
break

case 'igstalk': case 'instastalk':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Digite o @ da pessoa que vc quer stalkear no insta após o comando, ex:
${prefix+command} @alok`)
try {
reply(enviar.msg.consulta)
ABC = await fetchJson(blacksite+`/api/igstalk?usuario=${q.replace("@", "")}&apikey=`+API_KEY_FREE)
i = ABC.resultado
txt = `▧⃯⃟👤 ݈݇─ 𝙿𝚎𝚛𝚏𝚒𝚕: @${i.username}
❪✍🏼ฺ࣪ꕸ▸ 𝙽𝚘𝚖𝚎: ${i.fullname}
🔐⃤ 𝙿𝚛𝚒𝚟𝚊𝚍𝚘『 ${i.is_private ? `✅` : `❌`} 』
❪🖼️ฺ࣪ꕸ▸ 𝙿𝚘𝚜𝚝𝚊𝚐𝚎𝚗𝚜: ${largeNumber(i.posts)}
❪🔜ฺ࣪ꕸ▸ 𝚂𝚎𝚐𝚞𝚒𝚍𝚘𝚛𝚎𝚜: ${largeNumber(i.followers)}
❪🔙ฺ࣪ꕸ▸ 𝚂𝚎𝚐𝚞𝚒𝚗𝚍𝚘: ${largeNumber(i.following)}
✔️⃤ 𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚍𝚘『 ${i.is_verified ? `✅` : `❌`} 』
⏤͟͟͞͞ ꦿ𝙱𝚒𝚘: ${i.biography}`
sendUrlText(from, txt, `🔎 𝑰𝑵𝑺𝑻𝑨 𝑺𝑻𝑨𝑳𝑲𝑬𝑹 🔍`, ``, i.profile_photo, `http://instagram.com/`+i.username, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Não foi possível encontrar esse perfil no insta, ou pode ser que a api caiu...`)
}
break

case 'igstory': case 'instastory':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`😀 Retorne após o comando, o @ do usuário na qual você quer puxar os storys... Dexo ressaltar que será feito o download de todos os storys do usuário.
Caso queira um story específico, recomendo usar o comando ${prefix} 🥰
Ex: ${prefix+command} @alok`)
try {
ABC = await fetchJson(blacksite+`/api/igstalk?usuario=${q.replace("@", "")}&apikey=`+API_KEY_FREE)
if(ABC.resultado.stories.length <= 0) return reply(`Não há storys disponíveis para este perfil, ou pode ser que a conta seja privada 🔒`)
reply(`*_Fazendo download... Aguarde um momento_* 🚨`)
for(i of ABC.resultado.stories) {
  if(i.media_type == `video`) {
    await sleep(3000)
    sendVideo(from, i.source)
  }
  if(i.media_type == `image`) {
    await sleep(1000)
    sendImage(from, i.source)
  }
}
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Não foi possível encontrar esse perfil no insta, ou pode ser que a api caiu...`)
}
break

case 'igsdw': case 'igstorydownload':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`KD o link do story do usuário? Ex: ${prefix+command} link do story`)
try {
ABC = await fetchJson(blacksite+`/api/aio?url=${q}&apikey=`+API_KEY_FREE)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`);
sendVideo(from, ABC.resultado.medias[0].url, ABC.resultado.title, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'spotify':
if(!q) return reply(`Use: ${prefix+command} nome da música`)
try {
setTimeout(() => {reagir("💚")}, 300);
ABC = await fetchJson(blacksite+`/api/spotifysearch?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
i = ABC.resultado[0]
link = await fetchJson(blacksite+`/api/dl/spotify?url=${i.url}&apikey=`+API_KEY_FREE)
txt = `ㅤㅤㅤㅤ🎧 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 🎧

❪🎵𝙼ú𝚜𝚒𝚌𝚊ฺ࣭࣪͘ꕸ▸ ${i.title}
❪⏱️𝙳𝚞𝚛𝚊çã𝚘ฺ࣭࣪͘ꕸ▸ ${i.duration}
❪👥𝙰𝚛𝚝𝚒𝚜𝚝𝚊(𝚜)ฺ࣭࣪͘ꕸ▸ ${i.artist.split(` & `).join(', ')}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔৴▸ ${i.url}
----------------------------------------------
𝙱𝚢 ${NomeDoBot}`
thumb = blacksite+`/api/canvas/spotify?nome=${encodeURI(i.title)}&author=${encodeURI(i.artist)}&album=${encodeURI(link.resultado.metadata.album)}&fundo=`+link.resultado.metadata.cover
console.log(colors.green(`imagem: `), colors.white(thumb))
sendUrlText(from, txt, `Ouça agora ${i.title} em seu aplicativo Spotify 🔥`, `Music • Duração: ${i.duration}`, thumb, i.url, seloctt)
sendAudio(from, link.resultado.link, "audio/mpeg")
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply("Erro")
}
break

case 'play3': case 'p3':
if(!isGroup) return reply(`Este menu play está disponível apenas para uso em grupo...`)
reagir("🔥")
if(!q) return reply(`Use: ${prefix+command} nome da música`)
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
}
try {
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_ALEATORY}`)
bla = `
⟬ 🅑ⓁⒶⒸⓀ  🅜ⓊⓈⒾⒸ  »Ⓥ①« ⟭

▧⃯⃟📝 𝙏𝙄́𝙏𝙐𝙇𝙊: ${data[0].titulo}
▧⃯⃟⏱️ 𝙏𝙀𝙈𝙋𝙊: ${data[0].tempo}
▧⃯⃟🎚️ 𝙋𝙊𝙎𝙏𝘼𝘿𝙊: ${data[0].postado}
▧⃯⃟🛠️ 𝘿𝙀𝙎𝘾𝙍𝙄𝘾̧𝘼̃𝙊: ${data[0].desc}

_${tempo} ${pushname}, digite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio (sem as aspas)_
`
music[AB].usus.push({id: sender, urlAudio: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data[0].url}&apikey=#API_KEY_ALEATORY#`, urlVideo: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${data[0].url}&apikey=#API_KEY_ALEATORY#`, title: data[0].titulo})
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
astaup.sendMessage(from, {image: {url: data[0].thumb}, caption: bla}, {quoted: seloctt})
} catch (e) {
return reply(`Sistema parece instável... Execute o ${prefix}p4`);
}
break

case 'play4': case 'p4':
if(!isGroup) return reply(`Este menu play está disponível apenas para uso em grupo...`)
reagir("🔥")
if(!q) return reply(`Use: ${prefix+command} nome da música`)
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
}
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc?q=${q}&apikey=${API_KEY_SABRINA}`)
bla = `
⟬ 🅑ⓁⒶⒸⓀ  🅜ⓊⓈⒾⒸ  »Ⓥ②« ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${ABC.resultado[0].title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${ABC.resultado[0].timestamp} com ${ABC.resultado[0].views} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${ABC.resultado[0].author.name}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${ABC.resultado[0].ago}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${ABC.resultado[0].description}

_${tempo} ${pushname}, digite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio (sem as aspas)_
`
music[AB].usus.push({id: sender, urlAudio: `http://sabapi.tech:8090/api/dl/ytaudio?url=${ABC.resultado[0].url}&apikey=#API_KEY_SABRINA#`, urlVideo: `http://sabapi.tech:8090/api/dl/ytvideo?url=${ABC.resultado[0].url}&apikey=#API_KEY_SABRINA#`, title: ABC.resultado[0].title})
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
astaup.sendMessage(from, {image: {url: ABC.resultado[0].thumbnail}, caption: bla}, {quoted: seloctt})
} catch (e) {
return reply(`Sistema parece instável... Execute o ${prefix}p5`);
}
break

case 'play5': case 'p5':
if(!isGroup) return reply(`Este menu play está disponível apenas para uso em grupo...`)
reagir("🔥")
if(!q) return reply(`Use: ${prefix+command} nome da música`)
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
}
try {
ABC = await fetchJson(`${blacksite}/api/ytsrc?q=${q}&apikey=${API_KEY_FREE}`)
bla = `
⟬ 🅑ⓁⒶⒸⓀ  🅜ⓊⓈⒾⒸ  »Ⓥ③« ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${ABC.resultado[0].title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${ABC.resultado[0].timestamp} com ${ABC.resultado[0].views} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${ABC.resultado[0].author.name}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${ABC.resultado[0].ago}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${ABC.resultado[0].description}

_${tempo} ${pushname}, digite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio (sem as aspas)_
`
music[AB].usus.push({id: sender, urlAudio: `${blacksite}/api/dl/ytaudio?url=${ABC.resultado[0].url}&apikey=#API_KEY_FREE#`, urlVideo: `${blacksite}/api/dl/ytvideo?url=${ABC.resultado[0].url}&apikey=#API_KEY_FREE#`, title: ABC.resultado[0].title})
fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
astaup.sendMessage(from, {image: {url: ABC.resultado[0].thumbnail}, caption: bla}, {quoted: seloctt})
} catch (e) {
return reply(downoff);
}
break

case 'playdoc': case 'pdoc':
if(!q) return reply("KD o nome da música?")
try {
ABC = await fetchJson(`${blacksite}/api/ytsrc?q=${q}&apikey=${API_KEY_FREE}`)
data = ABC.resultado[0]
txt = `
⟬ 🄱🄻🄰🄲🄺 🄳🄾🄲 🄼🅄🅂🄸🄲 ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data.timestamp || "indefinido"} com ${Number(data?.views) > 0 ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data.description || "indefinida"}
`
reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`)
BCD = await fetchJson(blacksite+`/api/dl/ytdl?query=${data.url}&apikey=`+API_KEY_FREE)
astaup.sendMessage(from, {document: {url: BCD.resultado.audio}, caption: txt, mimetype: 'audio/mp4', fileName: data.title+".m4a", fileLength: 1000000 * ((Number(data.timestamp.replace(":", "") || 420) / 100) * (alerandom(1) + 1)), contextInfo: {externalAdReply: {title: NomeDoBot, body: '', mediaType: 1, thumbnail: await getBuffer(`${data.thumbnail}`), showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: data.url}}}, {quoted: seloctt})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
}
break

case 'playdoc2': case 'pdoc2':
if(!q) return reply("KD o nome da vídeo?")
try {
ABC = await fetchJson(`${blacksite}/api/ytsrc?q=${q}&apikey=${API_KEY_FREE}`)
data = ABC.resultado[0]
txt = `
⟬ 🄱🄻🄰🄲🄺 🄳🄾🄲 🄼🄴🄳🄸🄰 ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data.timestamp || "indefinido"} com ${Number(data?.views) > 0 ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data.description || "indefinida"}
`
reply( `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚅í𝚍𝚎𝚘ฺ͘.•🛸 ݈݇─`)
BCD = await fetchJson(blacksite+`/api/dl/ytdl2?query=${data.url}&apikey=`+API_KEY_FREE)
astaup.sendMessage(from, {document: {url: BCD.resultado.video}, caption: txt, mimetype: 'video/mp4', fileName: data.title+".mp4", fileLength: 1000000 * ((Number(data.timestamp.replace(":", "") || 204) / 10) * (alerandom(2) + 1)), contextInfo: {externalAdReply: {title: NomeDoBot, body: '', mediaType: 1, thumbnail: await getBuffer(`${data.thumbnail}`), showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: data.url}}}, {quoted: seloctt})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
}
break

// DOWNLOADS
case 'playvideo':
case 'ytmp4':
case 'play2':
case 'p2':
setTimeout(() => {reagir("🎥")}, 300)
try {
if(!q) return reply(`${prefix+command} link ou nome`);
if(!isUrl(q)) {
  reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚅í𝚍𝚎𝚘ฺ͘.•🛸 ݈݇─`)
  ABC = await fetchJson(`${blacksite}/api/ytsrc?q=${q}&apikey=${API_KEY_FREE}`)
  data = ABC.resultado[0]
  bla = `
\t🎚️ 𝚃𝙸́𝚃𝚄𝙻𝙾: ${data.title}
\t⏱️ 𝚃𝙴𝙼𝙿𝙾: ${data?.timestamp || "indefinido"} com ${Number(data?.views) > 0 ? largeNumber(data?.views) : "indefinidas"} visualizações
\t🎤 𝙲𝙰𝙽𝙰𝙻: ${data?.author?.name || "indefinido"}
\t🎛️ 𝙿𝙾𝚂𝚃𝙰𝙳𝙾: ${data?.ago || "indefinido"}
\t🖨️ 𝙳𝙴𝚂𝙲𝚁𝙸𝙲̧𝙰̃𝙾: ${data?.description || "indefinida"}
`
link = data.url
} else {link = q
bla = ``}
BCD = blacksite+`/api/yt/video4?url=${link}&apikey=`+API_KEY_FREE
//console.log(colors.white('INFO VIDEO DW:'), colors.green(BCD))
sendVideo(from, BCD, bla, seloctt).catch(error => {
console.log(error)
return reply(downon)
})
} catch (e) {
console.error(e)
return reply(downoff);
}
break;
case 'playaudio':
case 'ytmp3':
case 'play':
case 'p': {
  try {
    reagir("🎵")
    if(!q) return reply(`${prefix+command} link ou nome`)
    if(!isUrl(q)) {
      ABC = await fetchJson(blacksite+`/api/ytsrc?q=${q}&apikey=`+API_KEY_FREE)
      data = ABC.resultado[0]
      start = `0:00`
      end = data?.timestamp || `5:32`
      channel = info?.author?.name || `"indefinido"`
      theme = [`anime`, `classic`, `dynamic`, `space`, `space2`]
      //img = blacksite+`/api/canvas/musicardbun/music?nome=${encodeURI(data.title)}&autor=${encodeURI(channel)}&tipo=${theme[alerandom(theme.length)]}&opacity=100&progresso=35&start=${start}&end=${end}&thumb=`+data.thumbnail
      img = data.thumbnail
      //console.log(colors.yellow(`imagem: `), colors.white(img))
      bla = `
\t🎚️ 𝚃𝙸́𝚃𝚄𝙻𝙾: ${data.title}
\t⏱️ 𝚃𝙴𝙼𝙿𝙾: ${data?.timestamp || "indefinido"} com ${Number(data?.views) > 0 ? largeNumber(data?.views) : "indefinidas"} visualizações
\t🎤 𝙲𝙰𝙽𝙰𝙻: ${data?.author?.name || "indefinido"}
\t🎛️ 𝙿𝙾𝚂𝚃𝙰𝙳𝙾: ${data?.ago || "indefinido"}
\t🖨️ 𝙳𝙴𝚂𝙲𝚁𝙸𝙲̧𝙰̃𝙾: ${data?.description || "indefinida"}
`
      audio = data.url
      sendImage(from, img, bla, seloctt)
      //EnvButton(from, [bla, NomeDoBot, img], astaup, [{text: `🎥 𝙑𝙄́𝘿𝙀𝙊`, command: prefix+`p2 `+audio}, {text: `𝘼́𝙐𝘿𝙄𝙊 🎵`, command: prefix+command+` `+audio}], seloctt)
      //if(botoes) return
    } else {
      carregamento(from, `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`, info)
      await sleep(5000)
      audio = q
    }
    BCD = blacksite+`/api/yt/audio4?url=${audio}&apikey=`+API_KEY_FREE
    //console.log(colors.white('INFO AUDIO DW:'), colors.green(BCD))
    sendAudio(from, BCD, "audio/mpeg", seloctt).catch(error => {
      console.log(error)
      reply(downon)
    })
  } catch (e) {
    console.log(e)
    return reply(downoff);
  }
}
break;
case 'playmix': case 'pm':
if(!isGroup) return reply(enviar.msg.grupo)
reagir("🎵")
try {
if(!q) return reply(`${prefix+command} link ou nome`)
ABC = await fetchJson(`${blacksite}/api/ytsrc?q=${q}&apikey=`+API_KEY_FREE)
bla = `
༒W̷E̷L̷C̷O̷M̷E̷༒     ♬
⏤͟͟͞͞ ꦿ@${sender.split('@')[0]}      ♪  
`
for(i = 0; i < 5; i++) {
bla += `
🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${ABC.resultado[i].title || "indefindo"} ↻ ⊲ Ⅱ ⊳ ↺
0:35 ━❍────────-${ABC.resultado[i].timestamp || "5:32"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${ABC.resultado[i].ago || "indefinido"}
`
}
bla += `
${tempo}❣️
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı
`
astaup.sendMessage(from, {image: {url: ABC.resultado[0].thumbnail}, caption: bla, mentions: [sender]})
await sleep(1000)
for(let m = 0; m < 5; m++) {
await sleep(2000)
astaup.sendMessage(from, {audio: {url: blacksite+`/api/yt/audio4?url=${ABC.resultado[m].url}&apikey=`+API_KEY_FREE}, fileName: ABC.resultado[m].title+'.m4a', mimetype: "audio/mp4"}, {quoted: seloctt})
}
} catch (e) {
return reply(downoff);
}
break;
case 'tiktok': case 't': case 'ttk': case 'ttkmp4': case 'tiktokvideo':
if(!q.includes("tiktok")) return reply(`Use ${prefix+command} link do Tiktok`)
try {
ABC = await fetchJson(blacksite+`/download/tiktok2?url=${q}&apikey=`+API_KEY_FREE)
i = ABC.resultado
setTimeout(() => {reagir("🎥")}, 300)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`)
sendVideo(from, i.videoSemWt, `〘 ${i.author} 〙
${i.legenda}`, seloctt)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(downoff) }
break
/*case 'tiktok': case 't': case 'ttk': case 'ttkmp4': case 'tiktokvideo':
if(!q.includes("tiktok")) return reply(`Use ${prefix+command} link do Tiktok`)
try {
  ABC = await fetchJson(blacksite+`/api/tiktokdl2?url=${q}&apikey=`+API_KEY_FREE)
  i = ABC.resultado
  if(i.type == `video`) {
    reagir("🎥")
    reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`)
    astaup.sendMessage(from, {video: {url: i.video}, caption: `〘 ${i.author.nickname} 〙
📖 *Descrição:* ${i.desc}
❤ *Curtidas:* ${i.statistics.likeCount}
💬 *Comentários:* ${i.statistics.commentCount}
↪ *Compartilhamentos:* ${i.statistics.shareCount}`}, {quoted: info})
  } else {
    reagir("📸")
    reply(`▧⃯⃟𝙰𝚐𝚞𝚊𝚛𝚍𝚎, 𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝙸𝚖𝚊𝚐𝚎𝚖ฺ͘.•🛸 ݈݇─`)
    if(i.type == `image`) {
      for(image of i.images) {
        await sleep(1200)
        astaup.sendMessage(from, {image: {url: image}})
      }
      setTimeout(() => {
        sendAudio(from, i.music, `audio/mpeg`, seloctt)
      }, 1000);
    } else return reply(`Nenhum type identificado`)
  }
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(downoff) }
break*/
case 'tiktok2': case 't2': case 'ttk2': case 'ttkmp3': case 'tiktokaudio':
reagir("🎵")
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
ABC = await fetchJson(blacksite+`/download/tiktok2?url=${q}&apikey=`+API_KEY_FREE)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 Á𝚞𝚍𝚒𝚘ฺ࣭࣪͘ꕸ▸`);
sendAudio(from, ABC.resultado.audio, `audio/mpeg`, seloctt).catch(e => {
return reply(downon)
})
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(downoff);
}
break;
case 'tiktok3': case 't3': case 'ttk3': case 'ttkmp42': case 'tiktokvideo2':
try {
  if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
  ABC = await fetchJson(blacksite+`/api/tiktokdl?url=${q}&apikey=`+API_KEY_FREE)
  i = ABC.resultado
  if(i.type == `video`) {
    reagir("🎥")
    reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`)
    sendVideo(from, i.video.playAddr[0], `〘 @${i.author.username} 〙\n${i.description}`, seloctt)
  } else {
    reagir("📸")
    reply(`▧⃯⃟𝙰𝚐𝚞𝚊𝚛𝚍𝚎, 𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝙸𝚖𝚊𝚐𝚎𝚖ฺ͘.•🛸 ݈݇─`)
    for(image of i.images) {
      await sleep(1200)
      sendImage(from, image)
    }
    await sleep(1000)
    sendAudio(from, i.music.playUrl[0], `audio/mpeg`, seloctt)
  }
} catch (e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(downoff) }
break
case 'tiktok4': case 't4': case 'ttk4': case 'ttkmp32': case 'tiktokaudio2':
reagir("🎵")
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
ABC = await fetchJson(blacksite+`/api/tiktokdl?url=${q}&apikey=`+API_KEY_FREE)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 Á𝚞𝚍𝚒𝚘ฺ࣭࣪͘ꕸ▸`);
astaup.sendMessage(from, {audio: {url: ABC.resultado.music.playUrl[0]}, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply(downon)
})
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(downoff);
}
break;
case 'facebook': case 'facevideo':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
ABC = await fetchJson(`${blacksite}/api/v3/facebook?url=${q}&apikey=`+API_KEY_FREE)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`);
astaup.sendMessage(from, {video: {url: ABC.resultado.Normal_video}}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'facebook2': case 'faceaudio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
ABC = await fetchJson(`${blacksite}/download/facebook2?url=${q}&apikey=`+API_KEY_FREE)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 Á𝚞𝚍𝚒𝚘ฺ࣭࣪͘ꕸ▸`);
astaup.sendMessage(from, {audio: {url: ABC.resultado.media.url}, mimetype: "audio/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'twitter': case 'twtdl':
if(!q) return reply(`Faltando o link válido do twitter para download do video ou foto.`);
reagir("😸");
try {
  reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘ฺ࣭࣪͘ꕸ▸`);
  ABC = await fetchJson(`${blacksite}/api/dl/twitter2?url=${q}&apikey=`+API_KEY_FREE);
  for(let i = 0; i < ABC.resultado.media.length; i++) {
    await sleep(1000) // Pausa de 1 segundo(s).
    mytype = ABC.resultado.media[i]
    if(ABC.resultado.type == "video") {
      astaup.sendMessage(from, {video: {url: mytype.url}}, {quoted: seloctt})
    } else {
      astaup.sendMessage(from, {image: {url: mytype.url}}, {quoted: seloctt})
    }
  }
} catch (e) {
  console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
  reply(`Erro`);
}
break
case 'instagram': case 'insta': case 'instavideo': case 'instamp4':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(blacksite+`/api/instagram?url=${q}&apikey=`+API_KEY_FREE)
reply(isJsonIncludes(ABC.resultado, `image`) ? `▧⃯⃟𝙰𝚐𝚞𝚊𝚛𝚍𝚎, 𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝙸𝚖𝚊𝚐𝚎𝚖ฺ͘.•🛸 ݈݇─` : `❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`)
for(i of ABC.resultado) {
await sleep(700)
send = i.type == `video` ? sendVideo : sendImage
send(from, i.url, ``, seloblk)
}
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`[❗] nenhum dado retornado ❌`)
}
break;
case 'instadw': case 'instaaudio': case 'instamp3':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(blacksite+`/api/instagram?url=${q}&apikey=`+API_KEY_FREE)
caixa = []
for(i of ABC.resultado) {if(i.type == `video`) caixa.push(i)}
if(caixa.length <= 0) return reply(`Nenhum áudio encontrado!`)
for(c of caixa) {await sleep(700)
sendAudio(from, c.url, `audio/mpeg`, seloblk)}
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`[❗] nenhum dado retornado ❌`)
}
break;
case 'mediafire':
if(!isVip) return reply(enviar.msg.vip)
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${blacksite}/api/dl/mediafire?url=${q}&apikey=`+API_KEY_FREE)
reply(`📂 *Nome:* ${ABC.resultado.filename}\n🧮 *Tamanho:* ${ABC.resultado.size}\n_Criado em ${ABC.resultado.uploadDate}_`)
astaup.sendMessage(from, {document: {url: ABC.resultado.url}, mimetype: "application/"+ABC.resultado.filetype, fileName: ABC.resultado.filename}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break
case 'mediafire2':
if(!isVip) return reply(enviar.msg.vip)
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${blacksite}/api/dl/mediafire2?url=${q}&apikey=`+API_KEY_FREE)
media = ABC.resultado[0]
reply(`\t\t\t\t\t🔥 *MEDIAFIRE* 🔥\n\n🧵 *Nome:* ${media.nama}\n🧶 *Tamanho:* ${media.size}`)
astaup.sendMessage(from, {document: {url: media.link}, mimetype: "application/"+media.mime, fileName: media.nama}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break
case 'mediafire3':
if(!isVip) return reply(enviar.msg.vip)
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${blacksite}/api/dl/mediafire3?url=${q}&apikey=`+API_KEY_FREE)
media = ABC.resultado
reply(`\t\t\t\t\t🔥 *MEDIAFIRE 3.0* 🔥\n\n🧵 *Nome:* ${media.filename}\n🧶 *Tamanho:* ${media.filesizeH}\n_Criado em ${ABC.resultado.aploud}_`)
astaup.sendMessage(from, {document: {url: media.url}, mimetype: "application/"+media.ext.toLowerCase(), fileName: media.filename}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break

case 'gitclone':
if(!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/m4thxyz/blackofc`)
reply(`*[❕] _Enviando... Aguarde_* ✔`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if(!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
let finishname = filename.split(`-`).splice(0, filename.split(`-`).length - 1).join(`-`)
astaup.sendMessage(from, {document: {url: url}, fileName: finishname+'.zip', mimetype: 'application/zip' }, {quoted: info}).catch(e => {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply(`Erro`)
})
break

case 'docfake':
if(!isVip && !isChatOfc) return reply("[ ❗ ] o uso desde recurso fora do chat oficial está restrito apenas aos usuários VIP ❌")
setTimeout(() => {reagir("📝")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
sp = `/`
docfake = [
  {formato: `pdf`, link: `application/pdf`},
  {formato: `xml`, link: `application/xml`},
  {formato: `zip`, link: `application/zip`},
  {formato: `js`, link: `application/javascript`},
  {formato: `json`, link: `application/json`},
  {formato: `jpg`, link: `image/jpeg`},
  {formato: `ppt`, link: `application/vnd.ms-powerpoint`},
  {formato: `pptx`, link: `application/vnd.openxmlformats-officedocument.presentationml.presentation`},
  {formato: `apk`, link: `application/vnd.android.package-archive`},
  {formato: `txt`, link: `text/plain`},
  {formato: `aac`, link: `audio/aac`},
  {formato: `m4a`, link: `audio/mp4`},
  {formato: `mp4`, link: `video/mp4`},
  {formato: `mp3`, link: `audio/mpeg`},
  {formato: `gif`, link: `image/gif`},
  {formato: `svg`, link: `image/svg+xml`},
  {formato: `png`, link: `image/png`}
]
if(contar(q, sp) != 2) return reply(`*Ops, vejo que você está usando o comando de forma errada... Você deve usar neste formato e exemplo ↴*
*Formato:* ${prefix+command} nome${sp}tamanho${sp}formato

*Exemplo:* ${prefix+command} pack do pé${sp}250${sp}zip

${`-`.repeat(40)}

${docfake.map(d => `• ${d.formato}`).join(`\n`)}`)
barra = q.replace(sp+` `, sp).replace(` `+sp, sp).replace(` ${sp} `, sp)
var [nome, tamanho, tipo] = barra.split(sp)
AB = docfake.map(i => i.formato).indexOf(tipo.toLowerCase())
if(AB < 0) return reply(`O formato "${tipo}" não existe no banco de dados...`)
if(Number(tamanho) < 0) return reply(`O tamanho precisa ser um número maior que zero..`)
//======================\\
astaup.sendMessage(from, {document: fs.readFileSync('./database/midia/docf.txt'), mimetype: docfake[AB].link, fileName: nome+`.`+docfake[AB].formato, fileLength: Number(tamanho) * 1000000, headerType: 4, contextInfo: {forwardingScore: 999, isForwarded:true}}, {quoted: seloblk})
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if(!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await astaup.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
astaup.sendMessage(anu[i], {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'celular': {
if(!q) return reply(`Exemplo: ${prefix+command} moto g54`);
let { key } = await astaup.sendMessage(from, {text: `[❕] _buscando celular_ ✔`}, {quoted: seloctt})
try {
ABC = await fetchJson(blacksite+`/api/celular?nome=${q}&apikey=`+API_KEY_FREE);
i = ABC.resultado
astaup.sendMessage(from, {text: `📱 *Celular:* ${i.title}

❕ *Info:* ${i.info.length > 0 ? i.info : `"INDISPONÍVEL"`}

🔰 *Resumo:* ${i.resumo.length > 0 ? i.resumo.split(`\n\n`).join(`\n\n• `) : `"INDISPONÍVEL"`}`, edit: key}, {quoted: seloctt})
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
astaup.sendMessage(from, {text: `[❗] _erro ao obter os dados_ ❌`, edit: key}, {quoted: seloctt})
} }
break

case 'join': case 'entrar': {
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply('Insira um link de convite ao lado do comando.')
if(!q.includes('chat.whatsapp.com/')) return reply('Ops, verifique o link que você inseriu.')
let { key } = await astaup.sendMessage(from, {text: `[❗] Erro ao entrar no grupo 📵`}, {quoted: info})
link = getIDbyWhatsLink(q)
await sleep(500)
try {
astaup.groupAcceptInvite(`${link}`)
await sleep(500)
astaup.sendMessage(from, {text: `*O bot entrou no grupo com sucesso* 🥰`, edit: key}, {quoted: info})
} catch(erro) {
console.log(erro)
if(JSON.stringify(erro).includes('resource-limit')) return astaup.sendMessage(from, {text: `O grupo já está com o número máximo de membros... Não consigo entrar 🫠`, edit: key}, {quoted: info})
if(JSON.stringify(erro).includes('not-authorized')) return astaup.sendMessage(from, {text: `Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`, edit: key}, {quoted: info})
astaup.sendMessage(from, {text: `Erro, não foi possível entrar no grupo... Melhor adicionar manualmente.`, edit: key}, {quoted: info})
}}
break

case 'request':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
not = `*Use o comando com as 3 escolhas possíveis abaixo:*
• ${prefix+command} -lista
• ${prefix+command} -aceitar
• ${prefix+command} -recusar`
if(!q) return reply(not)
req = await astaup.groupRequestParticipantsList(from)
if(req.length <= 0) return reply(`[❗] não há solicitações no momento ❌`)
if(args[0].toLowerCase() === "-lista") {
  caixa = []
  newreq = req.sort((a, b) => (a.request_time < b.request_time) ? -1 : 0)
  for(r = 0; r < newreq.length; r++) {
    i = newreq[r]
    ftrq = formatTimestamp(i.request_time * 1000)
    /*{
      day: string;
      month: string;
      year: number;
      hours: string;
      minutes: string;
      seconds: string;
    }*/
    lista = `»${r + 1}«\n👤 *Participante:* @${i.phone_number.split("@")[0]}\n📼 *Número:* ${addNumberMais(i.phone_number)}\n📆 *Data & Hora:* ${ftrq.day} de ${convertNumberInMonth(ftrq.month)} de ${ftrq.year}, às ${ftrq.hours}:${ftrq.minutes}\n🎲 *Método:* `
    if(i.request_method == "linked_group_join") {
      comunidade = await astaup.groupMetadata(i.parent_group_jid)
      lista += `\"solicitação por comunidade\"\n🗂 *Comunidade:* ${comunidade.subject}`
    } else if(i.request_method == "non_admin_add") { lista += `\"adicionado por membro\"\n🥋 *Membro Responsável:* @${i.requestor.split("@")[0]}`
    } else lista += `\"link de convite\"`
    caixa.push(lista)
  }
  return mention(`🧮 *Lista total ${req.length != 1 ? `dos ${req.length} participantes` : `do único participante`} na lista de espera deste grupo ↴*\n${caixa.map(c => c).join(`\n-\n`)}`)
} else if(args[0].toLowerCase() === "-aceitar") {
  if(!args[1]) return reply(`KD o número do usuário na lista? Ex:\n${prefix+command} -aceitar 1`)
  if(args[1].toLowerCase() === "all") {
    total = req.length
    nmr = 0
    for(a of req) {
      await sleep(700)
      aceitar(from, a.phone_number)
      nmr += 1
    }
    if(nmr >= total) {
      await sleep(500)
      return mention(`${nmr != 1 ? `Todos os ${nmr} participantes da lista foram aceitos` : `O único participante da lista foi aceito`} pelo admin @${sender.split("@")[0]} com sucesso ✅`)
    }
  } else {
    if(Number(args[1]) < 1 || Number(args[1]) > req.length) return reply(enviar.msg.notusu)
    usu = req[Number(args[1]) - 1].phone_number
    aceitar(from, usu)
    return mention(`O participante @${usu.split("@")[0]} foi aceito pelo admin @${sender.split("@")[0]} com sucesso ✅`)
  }
} else if(args[0].toLowerCase() === "-recusar") {
  if(!args[1]) return reply(`KD o número do usuário na lista? Ex:\n${prefix+command} -recusar 1`)
  if(args[1].toLowerCase() === "all") {
    total = req.length
    nmr = 0
    for(r of req) {
      await sleep(700)
      recusar(from, r.phone_number)
      nmr += 1
    }
    if(nmr >= total) {
      await sleep(500)
      return mention(`${nmr != 1 ? `Todos os ${nmr} participantes da lista foram recusados` : `O único participante da lista foi recusado`} com sucesso pelo admin @${sender.split("@")[0]} ♨`)
    }
  } else {
    if(Number(args[1]) < 1 || Number(args[1]) > req.length) return reply(enviar.msg.notusu)
    usu = req[Number(args[1]) - 1].phone_number
    recusar(from, usu)
    return mention(`O participante @${usu.split("@")[0]} foi recusado pelo admin @${sender.split("@")[0]} com sucesso ♨`)
  }
} else return reply(not)
break

case 'attacc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAcceptGroup) {
dataGp[0].acceptGroup.active = true
setGp(dataGp)
reply(`🌀 Ativou com sucesso o recurso de aceitar automaticamente o membro no grupo 📝`)
} else {
dataGp[0].acceptGroup.active = false
setGp(dataGp)
reply(`‼️ Desativou com sucesso o recurso de aceitar automaticamente o membro no grupo ✔️`)
}
break

case 'setattacc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAcceptGroup) return reply(`É necessário ativar o recurso de auto aceitação primeiro... Use ${prefix}attacc`)
nmr = Number(q.slice(0, q.length - 1))
letra = q.slice(q.length - 1, q.length).toLowerCase()
if(nmr <= 0) return reply(`O tempo precisa ser maior que 0... Ex: ${prefix+command} 10m`)
if(letra != "s" && letra != "m" && letra != "h") return reply(`Use apenas "s", "m" ou "h" para identificar o tempo, ex: ${prefix+command} 10m`)
if(letra == "s") multiplicador = 1
if(letra == "m") multiplicador = 60
if(letra == "h") multiplicador = 3600
nmr *= multiplicador
dataGp[0].acceptGroup.time = nmr
setGp(dataGp)
reply(`O cooldow de tempo para a aceitação automática no grupo ${groupName} foi atualizado para ${q} com sucesso ✅`)
break

case 'allanti':
caminho = `./${sender}.json`
allanti = fs.existsSync(caminho) ? JSON.parse(fs.readFileSync(caminho)) : undefined
if(isGroup) {
  if(fs.existsSync(caminho)) fs.unlinkSync(caminho)
  await sleep(500)
  anticonfig = {
    id: sender,
    group: from,
    name: groupName
  }
  saveJSON(anticonfig, caminho)
  reply(`Vem PV 🥰`)
  await sleep(500)
  //save dos anti em lista
  sendListB(sender, {text: `Escolha na lista abaixo quais serviços você quer ativar/desativar no grupo ${groupName}`, footer: NomeDoBot}, astaup, `💢 SELECIONE AQUI 💢`, [
    {
      title: `Todos os anti abaixo`,
      options: [
        {title: `${isAntiImg ? `DES` : ``}ATIVAR ANTI IMAGE`, body: NomeDoBot, command: prefix+command+` image`},
        {title: `${isAntiVid ? `DES` : ``}ATIVAR ANTI VIDEO`, body: NomeDoBot, command: prefix+command+` video`},
        {title: `${isAntiAudio ? `DES` : ``}ATIVAR ANTI AUDIO`, body: NomeDoBot, command: prefix+command+` audio`},
        {title: `${isAntiSticker ? `DES` : ``}ATIVAR ANTI STICKER`, body: NomeDoBot, command: prefix+command+` sticker`},
        {title: `${Antidoc ? `DES` : ``}ATIVAR ANTI DOCUMENT`, body: NomeDoBot, command: prefix+command+` documento`},
        {title: `${isAntiCtt ? `DES` : ``}ATIVAR ANTI CONTACT`, body: NomeDoBot, command: prefix+command+` contato`},
        {title: `${Antiloc ? `DES` : ``}ATIVAR ANTI LOCATION`, body: NomeDoBot, command: prefix+command+` localizacao`}
      ]
    }
  ], seloctt)
} else {
  if(!q) return reply(enviar.msg.grupo)
  dbgp = allanti != undefined ? JSON.parse(fs.readFileSync(`./database/grupos/${allanti.group}.json`))[0] : undefined
  function saveAllAnti() {saveJSON([dbgp], `./database/grupos/${allanti.group}.json`)}
  if(q == `image`) {//anti imagem
    if(dbgp.antiimg) {
      dbgp.antiimg = false
      saveAllAnti()
      reply(`Recurso anti img desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antiimg = true
      saveAllAnti()
      reply(`Recurso anti img ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else if(q == `video`) {//anti video
    if(dbgp.antivideo) {
      dbgp.antivideo = false
      saveAllAnti()
      reply(`Recurso anti vid desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antivideo = true
      saveAllAnti()
      reply(`Recurso anti vid ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else if(q == `audio`) {//anti audio
    if(dbgp.antiaudio) {
      dbgp.antiaudio = false
      saveAllAnti()
      reply(`Recurso anti audio desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antiaudio = true
      saveAllAnti()
      reply(`Recurso anti audio ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else if(q == `sticker`) {//anti fig
    if(dbgp.antisticker) {
      dbgp.antisticker = false
      saveAllAnti()
      reply(`Recurso anti sticker desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antisticker = true
      saveAllAnti()
      reply(`Recurso anti sticker ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else if(q == `documento`) {//anti doc
    if(dbgp.antidoc) {
      dbgp.antidoc = false
      saveAllAnti()
      reply(`Recurso anti doc desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antidoc = true
      saveAllAnti()
      reply(`Recurso anti doc ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else if(q == `contato`) {//anti ctt
    if(dbgp.antictt) {
      dbgp.antictt = false
      saveAllAnti()
      reply(`Recurso anti ctt desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antictt = true
      saveAllAnti()
      reply(`Recurso anti ctt ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else if(q == `localizacao`) {//anti loc
    if(dbgp.antiloc) {
      dbgp.antiloc = false
      saveAllAnti()
      reply(`Recurso anti loc desativado no grupo ${dbgp.name} com sucesso ✔`)
    } else {
      dbgp.antiloc = true
      saveAllAnti()
      reply(`Recurso anti loc ativado no grupo ${dbgp.name} com sucesso ✔`)
    }
  } else return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('Já Esta ativo')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('Ja esta Desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('Ja esta ativo')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('Ja esta Desativado')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('Ja esta ativo')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('Ja esta Desativado')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('Já Esta ativo')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('Ja esta Desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('Ja esta ativo')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('Ja esta Desativado')
dataGp[0].antidoc = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('Ja esta ativo')
dataGp[0].antictt = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('Ja esta Desativado')
dataGp[0].antictt = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {														 
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiporno':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {														 
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiPorno) return reply('Já está Ativo.')
dataGp[0].antiporno = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti porno neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiPorno) return reply('Já está Desativado.')
dataGp[0].antiporno = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti porno neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'addshieldgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(contar(q, '/') != 1) return reply(`> ${prefix+command} @pessoa/quantidade
_(essa "quantidade" remete a quantos links o usuário pode mandar antes de ser banido)_`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [marc, mxm] = barra.split('/')
usu = identArroba(marc)
if(isShieldGPuser(from, usu)) return reply(enviar.shield.gp.true)
addShieldGP(from, usu, mxm)
mention(`Usuário @${usu.split('@')[0]} está imune do ban ${mxm <= 0 ? `ao enviar links de grupo...` : `a enviar ${mxm} links de grupo nesse chat`} 🧵`)
break

case 'addshieldhard':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(contar(q, '/') != 1) return reply(`> ${prefix+command} @pessoa/quantidade
_(essa "quantidade" remete a quantos links o usuário pode mandar antes de ser banido)_`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [marc, mxm] = barra.split('/')
usu = identArroba(marc)
if(isShieldGPuser(from, usu)) return reply(enviar.shield.hard.true)
addShieldHARD(from, usu, mxm)
mention(`Usuário @${usu.split('@')[0]} está imune do ban ${mxm <= 0 ? `ao enviar links em geral...` : `a enviar ${mxm} links de todos os tipos nesse grupo`} 🧶`)
break

case 'rmshieldgp': case 'rmshieldhard':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!all_type_number) return reply(`Marque o usuário, a mensagem ou o @, de quem você quer retirar a proteção do anti link ${command == "rmshieldgp" ? `GP` : `HARD`}...`)
if(command == "rmshieldgp" && !isShieldGPuser(from, all_type_number)) return reply(enviar.shield.gp.false)
if(command == "rmshieldhard" && !isShieldHARDuser(from, all_type_number)) return reply(enviar.shield.hard.false)
rm = command == "rmshieldgp" ? rmShieldGP : rmShieldHARD
rm(from, all_type_number)
mention(`Escudo do usuário @${all_type_number.split('@')[0]} removido com sucesso...`)
break

case 'shieldgplist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
AB = shieldantilinkgp.map(i => i.groupId).indexOf(from)
txt = `[ ❗ ] *Lista de usuários imunes ao ban por link de grupo:*\n`
for(i of shieldantilinkgp[AB].usus) {
  txt += `
*Membro:* @${i.id.split('@')[0]}
_(${i.infinito ? `imunidade infinita` : `+${i.quant} link${i.quant != 1 ? 's' : ''}`})_`
}
txt += `\n-> *Total:* ${shieldantilinkgp[AB].usus.length}`
mention(txt)
break

case 'shieldhardlist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!JSON.stringify(shieldantilinkhard).includes(from)) {
shieldantilinkhard.push({groupId: from, usus: []})
fs.writeFileSync("./database/shieldantilinkhard.json", JSON.stringify(shieldantilinkhard))
}
AB = shieldantilinkhard.map(i => i.groupId).indexOf(from)
txt = `[ ❗ ] *lista de usuários imunes ao ban por link em geral:*\n`
for(i of shieldantilinkhard[AB].usus) {
  txt += `
*Membro:* @${i.id.split('@')[0]}
_(${i.infinito ? `imunidade infinita` : `+${i.quant} link${i.quant != 1 ? 's' : ''}`})_
`
}
txt += `\n-> *Total:* ${shieldantilinkhard[AB].usus.length}`
mention(txt)
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('Ja esta ativo')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('Ja esta Desativado')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'banlinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBanlinkgp) return reply('Ja esta ativo')
dataGp[0].banlinkgp = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de banir & apagar os links de grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isBanlinkgp) return reply('Ja esta Desativado')
dataGp[0].banlinkgp = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de banir o usuário... Irei só apagar o link ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('Ja esta ativo')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('Ja esta Desativado')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'banlinkhard':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBanLinkHard) return reply('Ja esta ativo')
dataGp[0].banlinkhard = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de banir & apagar os links 📝')
} else if(Number(args[0]) === 0) {
if(!isBanLinkHard) return reply('Ja esta Desativado')
dataGp[0].banlinkhard = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de banir o usuário... Irei só apagar o link ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('Ja esta ativo')
dataGp[0].x9 = true
setGp(dataGp)
reply('🌀 Ativou o recurso de x9 com sucesso... Irei notificar qualquer alteração disponível feita neste grupo 😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('Ja esta Desativado')
dataGp[0].x9 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de x9 neste grupo, não irei notificar mais nenhuma alteração..✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!isOwner) return reply(enviar.msg.dono)
if(!isVisualizar) {
obrigadoEXT.visualizarmsg = true
setObg(obrigadoEXT)
reply('🌀 Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado 📝')
} else if(isVisualizar) {
obrigadoEXT.visualizarmsg = false
setObg(obrigadoEXT)
reply('‼️ Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

/*case 'antispam':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiSpam) return reply('Ja esta ativo')
dataGp[0].antispam = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de ANTI SPAM neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiSpam) return reply('Ja esta Desativado')
dataGp[0].antispam = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de ANTI SPAM neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break*/

case 'antivisu': case 'antivisuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiVisuUnica) return reply('Ja esta ativo')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de revelar visu única neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiVisuUnica) return reply('Ja esta Desativado')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de revelar visu única neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'admcmd':
case 'antimembros':
case 'blockgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiMembros) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('✅ Ativou com sucesso o recurso de só adm utilizar comandos neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiMembros) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('‼️ Desativou o recurso de Só ADM utilizar comandos neste grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('Ja esta ativo')
dataGp[0].antifake = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('Ja esta Desativado')
dataGp[0].antifake = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `💌 *Olá @${sender.split("@")[0]}, os prefixos disponíveis são:*${dataGp[0].prefixos.map(i => `『 ${i} 』`).join("<->")}`
mention(bla)
break

case 'addprefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(antiModLetra(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply("Não pode adc mais de um prefixo de uma só vez...")
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo [ ${q.trim()} ] adicionado com sucesso...`)
break

case 'tirarprefixo':
case 'delprefix':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(antiModLetra(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply("Não pode remover mais de um prefixo de uma só vez...")
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo [ ${q.trim()} ] removido com sucesso...`)
break

case 'infomultiprefixo': case 'infomultiprefix':
if(!isOwner) return reply(enviar.msg.dono)
mention(`${tempo} @${sender.split("@")[0]}, irei te dar uma aula básica de como usar o multiprefixo:

${prefix}addprefixo
(Use este comando para adicionar mais prefixos neste grupo)

${prefix}tirarprefixo
(Use este comando para remover um dos prefixos neste grupo)

${prefix}prefixos
(Este comando irá mostrar todos os prefixos disponíveis neste grupo)

${prefix}multiprefixo
(E o básico de todos, este irá ativar/desativar o sistema de multiprefixo)`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de multi prefixos neste grupo 📝')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de multi prefixos neste grupo✔️')
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Ja esta Desativado')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':
case 'welcome2':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'bemvindo3':
case 'welcome3':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom3) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[2].bemvindo3 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom3) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[2].bemvindo3 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'bemvindo4':
case 'welcome4':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom4) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[3].bemvindo4 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom4) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[3].bemvindo4 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'bemvindo5':
case 'welcome5':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom5) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[4].bemvindo5 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom5) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[4].bemvindo5 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de boas vindas ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de saída ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de boas vindas2 ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de saída2 ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'stickerbv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom3) return reply(`Ative o ${prefix}bemvindo3 1`)
fig = `./database/grupos/figurinhas/sticker-bv-${from}.webp`
if(Number(args[0]) === 0 && fs.existsSync(fig)) {DLT_FL(fig)
dataGp[0].wellcome[2].selobv = false
setGp(dataGp)
return reply(`A figurinha do bem vindo foi deletada com sucesso ✔`)}
if(!isQuotedSticker) return reply(`Marque uma figurinha...`)
sticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
media = await getFileBuffer(sticker, `sticker`)
fs.writeFileSync(fig, media)
if(q) {dataGp[0].wellcome[2].selobv = true
dataGp[0].wellcome[2].legendabv = q
setGp(dataGp)}
reply(`A figurinha do bem vindo foi definida com sucesso ✅`)
break

case 'stickersaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom3) return reply(`Ative o ${prefix}bemvindo3 1`)
fig = `./database/grupos/figurinhas/sticker-saiu-${from}.webp`
if(Number(args[0]) === 0 && fs.existsSync(fig)) {DLT_FL(fig)
dataGp[0].wellcome[2].selosaiu = false
setGp(dataGp)
return reply(`A figurinha de saída foi deletada com sucesso ✔`)}
if(!isQuotedSticker) return reply(`Marque uma figurinha...`)
sticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
media = await getFileBuffer(sticker, `sticker`)
fs.writeFileSync(fig, media)
if(q) {dataGp[0].wellcome[2].selosaiu = true
dataGp[0].wellcome[2].legendasaiu = q
setGp(dataGp)}
reply(`A figurinha de saída foi definida com sucesso ✅`)
break

case 'audiobv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom4) return reply(`Ative o ${prefix}bemvindo4 1`)
mp3 = `./database/grupos/audios/audio-bv-${from}.mp3`
if(Number(args[0]) === 0 && fs.existsSync(mp3)) {DLT_FL(mp3)
dataGp[0].wellcome[3].selobv = false
setGp(dataGp)
return reply(`O áudio do bem vindo foi deletado com sucesso ✔`)}
if(!isQuotedAudio) return reply(`Marque um áudio...`)
audio = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
media = await getFileBuffer(audio, 'audio')
fs.writeFileSync(mp3, media)
if(q) {dataGp[0].wellcome[3].selobv = true
dataGp[0].wellcome[3].legendabv = q
setGp(dataGp)}
reply(`O áudio do bem vindo foi definido com sucesso ✅`)
break

case 'audiosaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom4) return reply(`Ative o ${prefix}bemvindo4 1`)
mp3 = `./database/grupos/audios/audio-saiu-${from}.mp3`
if(Number(args[0]) === 0 && fs.existsSync(mp3)) {DLT_FL(mp3)
dataGp[0].wellcome[3].selosaiu = false
setGp(dataGp)
return reply(`O áudio de saída foi deletado com sucesso ✔`)}
if(!isQuotedAudio) return reply(`Marque um áudio...`)
audio = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
media = await getFileBuffer(audio, 'audio')
fs.writeFileSync(mp3, media)
if(q) {dataGp[0].wellcome[3].selosaiu = true
dataGp[0].wellcome[3].legendabv = q
setGp(dataGp)}
reply(`O áudio de saída foi definido com sucesso ✅`)
break

case 'legendabv5':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = q
if(isWelkom) {
dataGp[0].wellcome[4].legendabv = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de boas vindas ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo5 1`)
}
break

case 'legendasaiu5':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = q
if(isWelkom) {
dataGp[0].wellcome[4].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de saída ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo5 1`)
}
break

case 'legenda-estrangeiro':
case 'legenda-estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda-video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda-imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda-documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de Documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban* 🙅🏻‍♂️`)
break

case 'autobang':
case 'listanegrag':
if(!isOwner) return reply(enviar.msg.dono)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./dono/config-all.json', JSON.stringify(obrigadoEXT, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'delautobang':
case 'tirardalistag':
if(!isOwner) return reply(enviar.msg.dono)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./dono/config-all.json', JSON.stringify(obrigadoEXT, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'admautoban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply('Precisa ser Dono')
if(!q.includes(`chat.whatsapp.com`)) return reply(`Insira o link do grupo...`)
var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    var [_, code] = q.match(linkRegex) || []
    if (!code)return reply('Link Invalido')
    var res = await astaup.groupAcceptInvite(code)
reply("espere um momento")
resp = await astaup.groupMetadata(res)
ggg = resp.participants.filter((i) => i.admin)
nunber = ``
for(number of ggg){
await delay(1000)
dataGp[0].listanegra.push(number.id)
setGp(dataGp)
nunber += `# ${number.id.match(/([0-9A-Za-z]{10,14})/i)[0]}\n`
}
reply(`*Números Adicionados A Lista De Autoban*
*${ggg.length} Pessoas Adicionadas A Lista De Autoban*
${nunber}`)
await delay(1000)
astaup.groupLeave(resp.id)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `⇒ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break

case 'savemp3': case 'savem4a':
if(!isOwner) return reply(enviar.msg.dono)
var [tx, rct] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
if(!tx) return reply("KD o título do áudio?")
if(antiModLetra(tx)) return reply("Não pode letras modificadas nem emoji..")
if(!isQuotedAudio) return reply("Marque um áudio por favor...")
mod = rmLetras(tx)
ini = mod.split(" ").join("_")
media = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
fim = media.mimetype.split("/")[1] == "mpeg" ? "mp3" : media.mimetype.split("/")[1] == "mp4" ? "m4a" : "ogg"
nome = ini+"."+fim
doc = await getFileBuffer(media, 'audio')
fs.writeFileSync(`./database/midia/audios/save/${nome}`, doc)
AB = audios.map(i => i.rm).indexOf(nome)
if(AB >= 0) {
  audios.splice(AB, 1)
  saveJSON(audios, "./database/midia/data/audios.json")
}
audios.push({txt: mod, rm: nome, emoji: rct || ""})
saveJSON(audios, "./database/midia/data/audios.json")
reply(`*O áudio ${nome} foi salvo na pasta com sucesso...* ✅`)
break

case 'delmp3': case 'delm4a':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o título do áudio?")
if(antiModLetra(q)) return reply("Não pode letras modificadas nem emoji..")
mod = rmLetras(q)
ini = mod.split(" ").join("_")
exec(`ls ./database/midia/audios/save`, (err, stdout) => {
  if(err) {
    console.log(err)
  }
  if(stdout) {
    nmr = -1
    caixa = []
    for(i of audios) {
      nmr += 1
      if(ini == i.rm.split(`.`)[0]) caixa.push(nmr)
    }
    if(caixa.length <= 0) return reply(`[❗] áudio não encontrado ou inexistente ❌`)
    AB = caixa[0]
    nome = audios[AB].rm
    DLT_FL(`./database/midia/audios/save/${nome}`)
    audios.splice(AB, 1)
    saveJSON(audios, "./database/midia/data/audios.json")
    reply(`*O áudio ${nome} foi deletado da pasta com sucesso...* ✅`)
  }
})
break

case 'listmp3': case 'listm4a':
if(!isOwner) return reply(enviar.msg.dono)
if(audios.length <= 0) return reply("Não há áudios salvos na pasta")
txt = `🎧 *Total:* ${audios.length}`
for(i = 0; i < audios.length; i++) {
txt += `\n${audios[i].emoji.length > 0 ? audios[i].emoji : react1[Math.floor(Math.random()*react1.length)]}⃤ »${i+1}« ${audios[i].rm}`
}
reply(txt)
break

case 'botversion':
botv = JSON.parse(fs.readFileSync(`./package.json`)).version
sendButton(from, {text: `🎲 Versão atual do bot - ${botv}`, footer: `BLACK SYSTEM FOREVER`}, astaup, [{type: `copy_url`, text: NomeDoBot, url: `https://github.com/m4thxyz/astaofc`}], seloctt)
break

case 'baileys':
blv = JSON.parse(fs.readFileSync(`./node_modules/@m4thxyz_/baileys/package.json`))
sendButton(from, {text: `${tempo_emoji} ${tempo} ${pushname}..`, footer: `Baileys Version - ${blv.version}`}, astaup, [{type: `copy_url`, text: `@m4thxyz_/baileys`, url: blacksite}], seloctt)
break

case 'ia': case 'ias':
setTimeout(() => {reagir("🤖")}, 300)
reply(`IAs disponíveis no bot...
× ${prefix}Lucas (semelhante ao chatgpt V4)
× ${prefix}Matty (semelhante ao Bard)
× ${prefix}Jeff (vai responder em texto)
× ${prefix}Katy (vai responder em áudio)
`)
break

case 'movielist':
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir("🎬")
try {
ABC = await fetchJson(`${blacksite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
txt = `${`- `.repeat(20)}`
for(i of ABC.resultado) {
  txt += `\n*Nome:* ${i.title}\n*Link:* ${i.url}\n${`- `.repeat(20)}`
}
reply(txt)
} catch {
reply(`Erro`)
}
break

case 'movie':
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir("🎬")
if(!q.includes(`m.imdb.com`)) {
try {
matheuzinho = await fetchJson(`${blacksite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
linkM4 = matheuzinho.resultado[0].url
} catch {
return reply("Não foi possível encontrar o filme pedido")
}
} else {
linkM4 = q
}
try {
ABC = await fetchJson(`${blacksite}/api/search/imdb_info?url=${linkM4}&apikey=`+API_KEY_FREE)
i = ABC.resultado
lançamento = i.dataLancamento
notas = i.nota
money = i.dinheiro.orcamento
escrito = `${money.valor}`
nmr = escrito.length
dindin = nmr > 9 ? escrito.slice(0, nmr-9)+"B" : nmr > 6 ? escrito.slice(0, nmr-6)+"M" : nmr > 3 ? escrito.slice(0, nmr-3)+"K" : escrito
txt = `❪🎬ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎: ${i.titulo}
❪🧾ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎 𝙾𝚏𝚒𝚌𝚒𝚊𝚕: ${i.tituloOriginal}
❪💢ฺ࣭࣪͘ꕸ▸ 𝚃𝚒𝚙𝚘: ${i.tipo}
❪🎥ฺ࣭࣪͘ꕸ▸ 𝙶ê𝚗𝚎𝚛𝚘: ${i.genero.map(g => g).join(', ')}
❪⏱️ฺ࣭࣪͘ꕸ▸ 𝙳𝚞𝚛𝚊çã𝚘: ${i.duracao}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙻𝚊𝚗ç𝚊𝚖𝚎𝚗𝚝𝚘: ${Number(lançamento.dia) < 10 ? `0${lançamento.dia}` : lançamento.dia}/${Number(lançamento.mes) < 10 ? `0${lançamento.mes}` : lançamento.mes}/${lançamento.ano}
❪📊ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘: ${notas.ponto}/10 (${notas.total} votos)
❪💱ฺ࣭࣪͘ꕸ▸ 𝙾𝚛ç𝚊𝚖𝚎𝚗𝚝𝚘: ${money.moeda} ${dindin}
❪⚒️ฺ࣭࣪͘ꕸ▸ 𝙿𝚛𝚘𝚍𝚞çã𝚘: ${i.producao.map(p => p).join(', ')}
❪👤ฺ࣭࣪͘ꕸ▸ 𝙳𝚒𝚛𝚎çã𝚘: ${i.diretores[0].direcao.map(d => d).join(', ')}

〘 𝙀𝙇𝙀𝙉𝘾𝙊 〙`
for(e of i.elencoPrincipal) {
  txt += `\n⇒ *${e.nome}* (${e.categoria} - ${e.personagem.map(a => a).join(', ')})`
}
txt += `\n\n▧⃯⃟𝙎𝙄𝙉𝙊𝙋𝙎𝙀৴▸ ${i.trama}`
astaup.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `𝙈𝙊𝙑𝙄𝙀 𝙄𝙉𝙁𝙊 𝘽𝙔 𝘽𝙇𝘼𝘾𝙆 𝙈𝘿`,
    body: ``,
    thumbnail: await getBuffer(i.capa),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: linkM4
  }
}}, {quoted: info})
} catch(err) {
console.log(err)
reply("Não foi possível encontrar os dados desse filme, ou pode ser que a api de pesquisas caiu...")
}
break

case 'bard': {
if(!q) return reply("Retorne após o comando o título de sua pesquisa")
let { key } = await astaup.sendMessage(from, {text: `*Pesquisando... Um momento* 🌐`}, {quoted: seloctt})
await sleep(1000)
try {
ABC = await fetchJson(blacksite+`/api/ia/bard?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
astaup.sendMessage(from, {text: ABC.resultado, edit: key}, {quoted: seloctt})
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
astaup.sendMessage(from, {text: `Erro, não foi possível carregar a resposta... Ou pode ser que a api tenha ficado off ❌`, edit: key}, {quoted: seloctt})
}
}
break

case 'samuel': case 'lucas': case 'chatgpt': case 'gpt': {
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
setTimeout(() => {reagir("🌐")}, 300)
if(!q) return reply(`Pergunte algo, e o ${command} irá responder...`)
let { key } = await astaup.sendMessage(from, {text: `🧐 _Aguarde um momento enquanto eu estou pesquisando..._ 🗯`}, {quoted: seloctt})
try {
ABC = await fetchJson(blacksite+`/api/ia/gpt?query=`+encodeURI(q)+`&apikey=`+API_KEY_FREE)
astaup.sendMessage(from, {text: ABC.resultado, edit: key}, {quoted: seloctt})
} catch (e) {
astaup.sendMessage(from, {text: `Erro, não foi possível carregar a resposta... Ou pode ser que a api tenha ficado off ❌`, edit: key}, {quoted: seloctt})
}
}
break

case 'crimg': case 'imagegpt': case 'mdj': case 'imageai':
setTimeout(() => {reagir("🔰")}, 300)
if(!isVip && !isChatOfc) return reply(enviar.msg.vip)
if(!q) return reply(`KD o título da pesquisa?`)
try {
const imageBuffer = await superimg(q)
astaup.sendMessage(from, {image: imageBuffer}, {quoted: info})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'photoleap': case 'midjourney':
if(!isVip && !isChatOfc) return reply(enviar.msg.vip)
try {
if(!q) return reply("O que você deseja criar através de seu questionamento?");
reply(enviar.espere);
sendImage(from, `https://aemt.me/ai/text2img?text=${q}`, ``, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
}
break

case 'jeff': case 'simi':
setTimeout(() => {reagir("🤓")}, 300)
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if(!q) return reply(`Pergunte algo junto ao comando...`)
try {
ABC = await simih(q)
return reply(ABC)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'katy':
setTimeout(() => {reagir("😍")}, 300)
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if(!q) return reply(`Pergunte algo junto ao comando...`)
try {
const gtts = require('./javascript/funcoes/gtts')(`pt`)
dtt = await simih(q)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
astaup.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo Simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo 😗..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo 😗..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autoaudio': case 'autotranscricao':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutoTranscricao) return reply('Ja esta ativo')
dataGp[0].autotranscricao = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto transcrição neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutoTranscricao) return reply('Ja esta Desativado')
dataGp[0].autotranscricao = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto transcrição neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'autoresposta':
setTimeout(() => {reagir("🔊")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`${prefix+command} 1 / ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto resposta neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto resposta neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modozoeira':
case 'modozueira':
setTimeout(() => {reagir("🤪")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins && !isOwner) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`${prefix+command} 1 / ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isModobn) return reply('o modozoeira já está ativo')
dataGp[0].jogos = true
setGp(dataGp)
reply('🎯 Ativou com sucesso o recurso de Modo zoeira neste grupo 🪀')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('o modozoeira já está Desativado')
dataGp[0].jogos = false
setGp(dataGp)
reply('🎯 Desativou com sucesso o recurso de Modo zoeira neste grupo 🪀')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return reply(enviar.msg.grupo)
setTimeout(() => {reagir("👑")}, 300)
if(!isLevelingOn) return reply(`*É necessário ativar o sistema de level primeiro* 🙆🏻‍♂️
*Use* ${prefix}leveling 1`)
if(level.length > 4) {
matheuzinho = level.map(i => i)
rank = matheuzinho.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level.length > 10) {
var totalR = 10
} else {
var totalR = level.length
}
txt = `▁▂▃▄▅▆▇█ 🔭 𝚁𝙰𝙽𝙺 𝙻𝙴𝚅𝙴𝙻 🔭 █▇▆▅▄▃▂▁`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
    data = levelDBuser(rank[i].id)
txt += `

╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕\t\t\t🎮 ${NomeDoBot} 🎮
╽╟ ~>『 »${i+1}« 』
╽╟ • ɴɪᴄᴋ: ${getname(data.id)}
╽╟ • ɪᴅ: wa.me/${data.id.split('@')[0]}
╽╟ • ʟᴇᴠᴇʟ: ${data.level}
╽╟ • ᴘᴀᴛᴇɴᴛᴇ: ${patente(data.contador)}
╽╟ • xᴘ: ${data.contador}
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
}
caixa = []
for ( i = 0; i < level.length; i++) {
  caixa.push({id: rank[i].id})
}
AB = caixa.map(i => i.id).indexOf(sender)
txt += `\n\n${AB > 9 ? `• ꜱᴜᴀ ᴩᴏꜱɪçãᴏ ɴᴏ ʀᴀɴᴋ ~> ${AB + 1}\n` : ``}🄱🅈: ${NickDono}`
reply(txt)
} else { reply(`Sem dados 🤷🏻‍♂️`) }
break

case 'top10': case 'rank10':
mapa = level.map(i => i)
rank = mapa.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
img = blacksite+`/api/canvas/top?message=${encodeURI("XP:")}&fundo=https://telegra.ph/file/67d9c49eecc1cd1fcd637.jpg`
try { usu1 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[0].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu1 = semfoto }
try { usu2 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[1].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu2 = semfoto }
try { usu3 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[2].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu3 = semfoto }
try { usu4 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[3].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu4 = semfoto }
try { usu5 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[4].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu5 = semfoto }
try { usu6 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[5].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu6 = semfoto }
try { usu7 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[6].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu7 = semfoto }
try { usu8 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[7].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu8 = semfoto }
try { usu9 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[8].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu9 = semfoto }
try { usu10 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[9].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu10 = semfoto }
foto = [usu1, usu2, usu3, usu4, usu5, usu6, usu7, usu8, usu9, usu10]
for(i = 0; i < 10; i++) {
  if(i != null) {
    usu = rank[i]
    nmr = String(i + 1)
    img += `&foto${nmr}=${foto[i]}&nome${nmr}=${encodeURI(getname(usu.id))}&xp${nmr}=${usu.contador}`
  }
}
sendImage(from, img)
break

case 'top1': case 'rank1':
mapa = level.map(i => i)
rank = mapa.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
img = blacksite+`/api/canvas/top?message=${encodeURI("XP:")}&fundo=https://telegra.ph/file/67d9c49eecc1cd1fcd637.jpg`
try { usu1 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[0].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu1 = semfoto }
try { usu2 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[1].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu2 = semfoto }
try { usu3 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[2].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu3 = semfoto }
try { usu4 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[3].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu4 = semfoto }
try { usu5 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[4].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu5 = semfoto }
try { usu6 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[5].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu6 = semfoto }
try { usu7 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[6].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu7 = semfoto }
try { usu8 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[7].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu8 = semfoto }
try { usu9 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[8].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu9 = semfoto }
try { usu10 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${rank[9].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu10 = semfoto }
foto = [usu1, usu2, usu3, usu4, usu5, usu6, usu7, usu8, usu9, usu10]
for(i = 0; i < 10; i++) {
  if(i != null) {
    usu = rank[i]
    nmr = String(i + 1)
    img += `&foto${nmr}=${foto[i]}&nome${nmr}=${encodeURI(getname(usu.id))}&xp${nmr}=${usu.contador}`
  }
}
sendStickerFromUrl(from, img)
break

case 'patente':
case 'level':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isLevelingOn) return reply(`*É necessário ativar o sistema de level primeiro* 🙆🏻‍♂️
*Use* ${prefix}leveling 1`)
if(isYouInLevel(sender)) {
levelstts = levelDBuser(sender)
myexp = levelstts.contador
newpatente = patente(myexp)

AB = dbpt.map(d => d.pat).indexOf(newpatente)
newtt = myexp < 10000000 ? myexp < 5000000 ? dbpt[AB].nmr : 5000000 : myexp
newcont = myexp < 10000000 ? myexp < 5000000 ? dbpt[AB + 1].nmr : 10000000 : myexp

matheuzinho = level.map(i => i)
rank = matheuzinho.sort((a, b) => (a.contador < b.contador) ? 0 : -1)

bar = myexp < 10000000 ? barrinha((myexp - newtt), (newcont - newtt)) : ""
sub = newcont - myexp
//==========reply===========\\
leveltxt = `┏──━━◤ 𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶 ◢━━──┓
╽
╟┓
║┢ 𝙽𝙸𝙲𝙺: ${pushname}
║╽
║┢ 𝙻𝙴𝚅𝙴𝙻: ${levelstts.level}
║╽
║┢ 𝙿𝙰𝚃𝙴𝙽𝚃𝙴: ${newpatente}
║╽
║┢ 𝚇𝙿: ${myexp} ${myexp < 10000000 ? `-> ${newcont}` : ``}
║╽${myexp < 10000000 ? `${bar}\n║╽` : ``}
╙┷━━━━━━━───━━━━━━━┛${myexp < 10000000 ? `\n_Falta${Number(sub) > 1 ? `m` : ``} ${sub} XP para upar o próximo level_` : `_Você alcançou a patente máxima_`}`
a1 = levelstts.level
a2 = (rank.map(i => i.id).indexOf(sender)) + 1
a3 = myexp
a4 = myexp < 10000000 ? newcont : myexp
a5 = Number(myexp < 10000000 ? (((myexp - newtt) / (newcont - newtt)) * 100) : 100).toFixed(0)
} else {
leveltxt = `┏──━━◤ 𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶 ◢━━──┓
╽
╟┓
║┢ 𝙽𝙸𝙲𝙺: ${pushname}
║╽
║┢ 𝙻𝙴𝚅𝙴𝙻: 1
║╽
║┢ 𝙿𝙰𝚃𝙴𝙽𝚃𝙴: Bronze I 🥉
║╽
║┢ 𝚇𝙿: 0
║╽
╙┷━━━━━━━───━━━━━━━┛`
a1 = 0
a2 = level.length + 1
a3 = 0
a4 = 100
a5 = 0
}
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
img = blacksite+`/api/canvas/musicardbun/level?nome=${encodeURI(pushname)}&level=${a1}&brightness=100&perfil=${ppimg}&rank=${a2}&xpb=${a3}&xpa=${a4}&progresso=${a5}`
sendImage(from, img, leveltxt, seloctt)
break

case 'patentes':
if(!isLevelingOn) return reply(`*É necessário ativar o sistema de level primeiro* 🙆🏻‍♂️
*Use* ${prefix}leveling 1`)
setTimeout(() => {reagir(react2)}, 300)
reply(`╔═══════════━━──${dbpt.map(i => `
╟ • ${i.pat}
╚═╦─ • ${i.xp} XP ✨`).join(`
─━╩══════╗
╔════════╩══━━──`)}
─━╩═════════━━──`)
break

case 'addlevel':
if(!isOwner) return reply(enviar.msg.dono)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de level que deseja adicionar
Ex: ${prefix+command} ${addNumberMais(sender)}/2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
addlevel(usu, b)
reply(`${b} leve${Number(b) > 1 ? `is` : `l`} adicionado${Number(b) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!isOwner) return reply(enviar.msg.dono)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de level que deseja remover
Ex: ${prefix+command} ${addNumberMais(sender)}/2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
rmlevel(usu, b)
reply(`${b} leve${Number(b) > 1 ? `is` : `l`} retirado${Number(b) > 1 ? `s` : ``} deste usuário...`)
break

case 'addxp':
if(!isOwner) return reply(enviar.msg.dono)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de XP que deseja adicionar
Ex: ${prefix+command} ${addNumberMais(sender)}/2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
addXP(usu, b)
reply(`${b} experiência${Number(b) > 1 ? `s` : ``} fo${Number(b) > 1 ? `ram` : `i`} adicionada${Number(b) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!isOwner) return reply(enviar.msg.dono)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de XP que deseja adicionar
Ex: ${prefix+command} ${addNumberMais(sender)}/2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
rmXP(usu, b)
reply(`${b} experiência${Number(b) > 1 ? `s` : ``} fo${Number(b) > 1 ? `ram` : `i`} retirada${Number(b) > 1 ? `s` : ``} deste usuário...`)
break

case 'blocklevel':
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply("Marque a pessoa que deseja bloquear do contador")
if(isBlockGetLevelUser(all_type_number)) return reply("Este usuário já está bloqueado...")
blockLevelUser(all_type_number);
reply("✅ Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas 🔰")
break

case 'unblocklevel':
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply("Marque a pessoa que deseja bloquear do contador")
if(!isBlockGetLevelUser(all_type_number)) return reply("Este usuário não está bloqueado...")
unBlockLevelUser(all_type_number);
reply("✅ Usuário desbloqueado do contador com sucesso... As interações do mesmo voltarão a serem contabilizadas 🔰")
break

case 'blocklevel-list': case 'blocklevellist':
if(!isOwner) return reply(enviar.msg.dono)
txt = `[ ❗ ]  *Lista de usuários bloqueados do contador de XP:*\n`
let blocklevellist = 0
for(i = 0; i < level.length; i++) {
  if(level[i].block) {
    txt += `⇒ @${level[i].id.split('@')[0]}\n`
    blocklevellist += 1
  }
}
txt += `\n♨️ Total: ${blocklevellist}`
if(blocklevellist > 0) return mention(txt)
reply("Não há usuários bloqueados")
break

case 'execdblevel': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
if(!isBotoff) return reply(`Para o comando funcionar com maior eficácia, use o comando ${prefix}botoff 😀👍🏻`)
let { key } = await astaup.sendMessage(from, {text: `Iniciando limpeza dos usuários do sistema de leveling 🗑`}, {quoted: info})
execlevel = level.length
alllevel = []
for(a of level) {
  if(isJsonIncludes(allGroups, a.id)) {
    console.log(a.id.slice(0, 2) != "55" ? a.id.split("@")[0] + " (número gringo)" : addNumberMais(a.id))
    alllevel.push(a)
  }
}
ttl = level.length
adc = alllevel.length
sub = ttl - adc
if(sub <= 0) return sendMess(from, `Todos os users do level estão nos grupos com o bot...`)
saveLeVeLdb(alllevel);
astaup.sendMessage(from, {text: sub > 1 ? `Foram encontrados/removidos do sistema de leveling ${sub} usuários que não estavam presentes em nenhum grupo com o bot...` : `1 único usu foi deletado... Nem sei quem era kkkk`, edit: key}, {quoted: info})
await sleep(700)
console.log(colors.green(`Restart necessário para save de dados..`))
process.exit()
}
break

/*case 'rmalllv':
if(!isOwner) return
alllevel = []
for(a of level) {
  patatual = patente(a.contador)
  mappat = dbpt.map(b => b.pat).indexOf(patatual)
  xpatual = dbpt[mappat].nmr
  if(mappat >= 5) {
    patprox = dbpt[mappat - 5].pat
    xpprox = dbpt[mappat - 5].nmr
    sub = xpatual - xpprox
    a.contador -= sub
    a.level = mappat + 1
    alllevel.push(a)
  }
}
saveLeVeLdb(alllevel);
reply(`Acho que foi`)
await sleep(700)
console.log(colors.green(`Restart necessário para save de dados..`))
process.exit()
break*/

case 'execdaylv':
for(a of ranktemp[0].usuarios) {
  if(a.messages.length > 0 && a.messages[0].dias.length > 0 && a.messages[0].dias[0].dia != "01") {
    ul = []
    ul.push(
      {dia: "01", dados: {msg: alerandom(400) + 100, fig: alerandom(200) + 50, ft: alerandom(10) + 5, vid: alerandom(10) + 5, aud: alerandom(10) + 5, ctt: alerandom(2), doc: alerandom(2), loc: alerandom(1)}},
      {dia: "02", dados: {msg: alerandom(400) + 100, fig: alerandom(200) + 50, ft: alerandom(10) + 5, vid: alerandom(10) + 5, aud: alerandom(10) + 5, ctt: alerandom(2), doc: alerandom(2), loc: alerandom(1)}},
      {dia: "03", dados: {msg: alerandom(400) + 100, fig: alerandom(200) + 50, ft: alerandom(10) + 5, vid: alerandom(10) + 5, aud: alerandom(10) + 5, ctt: alerandom(2), doc: alerandom(2), loc: alerandom(1)}}
    )
    a.messages[0].dias = ul
    saveNewTempRank()
  }
}
reply(`Pronto`)
break

case 'rmlevel':
if(!isOwner) return reply(enviar.msg.dono)
if(!all_type_number) return reply("Marque a pessoa que deseja apagar do contador")
if(!JSON.stringify(level).includes(all_type_number)) return reply("Este usuário não está no contador...")
AB = level.map(i => i.id).indexOf(all_type_number)
level.splice(AB, 1)
saveLeVeLdb(level);
reply("✅ Usuário apagado do contador com sucesso...")
break

case 'transferirlevel': case 'trfrlv':
if(!isOwner) return reply(enviar.msg.dono)
if(contar(q, `/`) != 1) return reply(`Este comando é para transferir o level e XP do número antigo de um usuário para o seu novo número... Retorne após o comando o número antigo do usuário, e o seu novo número, separando ambos com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/${addNumberMais(randomUser)}`)
usu1 = identArroba(q.split(`/`)[0])
usu2 = identArroba(q.split(`/`)[1])
if(!isYouInLevel(usu1)) return mention(`O usuário @${usu1.split("@")[0]} não está na database do level...`)
if(!isYouInLevel(usu2)) return mention(`O usuário @${usu2.split("@")[0]} não está na database do level...`)
lv = levelDBuser(usu1).level
cntd = levelDBuser(usu1).contador
addlevel(usu2, lv)
addXP(usu2, cntd)
AB = level.map(i => i.id).indexOf(usu1)
level.splice(AB, 1)
saveLeVeLdb(level)
mention(`Todos os ${lv} leveis e ${cntd} XP foram transferidos para o usuário @${usu2.split("@")[0]} com sucesso ✔`)
break

case 'leveling':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('*[ Adicionar parâmetro 1 ou 0 ]*')
}
break

case 'gerarcard':
if(!isOwner) return reply(enviar.msg.dono)
var [i, v, d] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
if(!i) return reply(`Marque com @ o usuário que vc quer adc o card`)
usu = i.toLowerCase() == "me" ? sender : identArroba(i)
if(!v || !isJsonIncludes(valoresXP, v.toLowerCase())) return reply(`Você deve retornar após o comando, o multiplicador de XP, entre os abaixo:
${valoresXP.map(a => `• ${a.velocidade}`).join(`\n`)}

Exemplo: ${prefix+command} @/${valoresXP[alerandom(valoresXP.length)].velocidade}`)
AB = valoresXP.map(p => p.velocidade).indexOf(v.toLowerCase())
if(!d) return reply(`Ainda falta escolher o tempo... Ex: @/2x/24h`)
nmr = Number(d.slice(0, d.length - 1))
letra = d.slice(d.length - 1, d.length).toLowerCase()
if(letra == `d`) vzs = 24
else vzs = 1
nmr *= vzs
if(!d || !isJsonIncludes(valoresXP[AB].dados, Number(nmr))) return reply(`Você deve retornar após o multiplicador de XP, a quantidade de dias do card, entre os abaixo:
${valoresXP[AB].dados.map(a => `• ${sendLetterTime(a.tempo)}`).join}

Exemplo: ${prefix+command} @/2x/48h`)
addUsuCardXP(mention, prefix, usu, v, d)
break

case 'gerarkeycard': {
if(!isOwner) return reply(enviar.msg.dono)
var [v, d] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
if(!v || !isJsonIncludes(valoresXP, v.toLowerCase())) return reply(`Você deve retornar após o comando, o multiplicador de XP, entre os abaixo:
${valoresXP.map(a => `• ${a.velocidade}`).join(`\n`)}

Exemplo: ${prefix+command} ${valoresXP[alerandom(valoresXP.length)].velocidade}`)
AB = valoresXP.map(p => p.velocidade).indexOf(v.toLowerCase())
if(!d) return reply(`Ainda falta escolher o tempo... Ex: 2x/24h`)
nmr = Number(d.slice(0, d.length - 1))
letra = d.slice(d.length - 1, d.length).toLowerCase()
if(letra == `d`) vzs = 24
else vzs = 1
nmr *= vzs
if(!isJsonIncludes(valoresXP[AB].dados, Number(nmr))) return reply(`Você deve retornar após o multiplicador de XP, a quantidade de dias do card, entre os abaixo:
${valoresXP[AB].dados.map(a => `• ${sendLetterTime(a.tempo)}`).join}

Exemplo: ${prefix+command} 2x/48h`)
gerarTypeKey(sender, {type: 5, grupo: from, tempo: d, velocidade: v.toLowerCase()})
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
await sleep(500)
sendButton(from, {text: `🎲 *_KEY GERADA COM SUCESSO_* 🎲
⮑ ${chave} ⮐

🎳 *_Descrição ⤵_*
〔🎯〕⥲ *Tipo:* "CARD XP"
〔⏱〕⥲ *Tempo:* ${Number(d.slice(0, d.length - 1)) > 0 ? d : `∞ INFINITO`}`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
}
break

case 'buycard':
addCardExperience(sender)
var [v, d] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
if(!isJsonIncludes(valoresXP, v.toLowerCase())) return reply(`Você deve retornar após o comando, o multiplicador de XP, entre os abaixo:
${valoresXP.map(a => `• ${a.velocidade}`).join(`\n`)}

Exemplo: ${prefix+command} ${valoresXP[alerandom(valoresXP.length)].velocidade}`)
AB = valoresXP.map(p => p.velocidade).indexOf(v.toLowerCase())
if(!d) return reply(`Ainda falta escolher o tempo... Ex: 2x/24h`)
nmr = Number(d.slice(0, d.length - 1))
letra = d.slice(d.length - 1, d.length).toLowerCase()
if(letra == `d`) vzs = 24
else vzs = 1
nmr *= vzs
if(!isJsonIncludes(valoresXP[AB].dados, Number(nmr))) return reply(`Você deve retornar após o multiplicador de XP, a quantidade de dias do card, entre os abaixo:
${valoresXP[AB].dados.map(a => `• ${sendLetterTime(a.tempo)}`).join}

Exemplo: ${prefix+command} 2x/48h`)
AC = valoresXP[AB].dados.map(c => c.tempo).indexOf(nmr)
valor = valoresXP[AB].dados[AC].valor
if(getCoinsUsu(sender).saldo < valor) return reply(`💳 Um CARD XP *${v}* válido por *${sendTimeHours(nmr)}* custará *R$ ${(valor).toFixed(2)}*, mas você não possui saldo suficiente para completar a compra... Use o comando *${prefix}recarga* para adicionar saldo a saldo a sua conta e usufruir dos privilégios da loja 😃🎯`)
if(isGroup) reply(`Irei te enviar no PV 🧵`)
rmCoinsInVirtualBalance(sender, valor)
await sleep(1000)
gerarTypeKey(sender, {type: 5, grupo: from, tempo: sendLetterTime(nmr), velocidade: v.toLowerCase(), valor: valor})
dados = getCoinsUsu(sender)
chave = dados.keys[dados.keys.length - 1].key
sendButton(sender, {text: `💡 A chave "${chave}" foi gerada com sucesso... Copie e cole a mesma no seu grupo ou no PV do bot para validar o card e adicionar o seu combo multiplicador de XP 😊`, footer: chave}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI`, url: chave}], seloctt)
break

case 'mycard':
addCardExperience(sender)
card = getCardXPusu(sender).cards
if(card.length <= 0) return reply(`Vc não possui cards multiplicadores de XP... Caso queira adquirir algum, olhe no comando ${prefix}loja o que melhor de satisfazer 🎯`)
txt =
`🔖 *Seus cartões disponíveis:*`
for(i = 0; i < card.length; i++) {
  txt += `\n\n»${i + 1}«
• *Multiplicador:* ${card[i].multi}x
• *Tempo:* ${sendLetterTime(card[i].horas)}
• *Ativo『 ${i == getCardXPusu(sender).mapa && getCardXPusu(sender).active ? "✅" : "❌"} 』*`
}
txt += `\n\n*Total:* ${card.length > 0 ? card.length + `\n_(Use ${prefix}setcard para ativar seu cartão de XP)_` : card.length}`
reply(txt)
break

case 'setcard':
addCardExperience(sender)
usu = getCardXPusu(sender)
card = usu.cards
if(!Number(q) || Number(q) < 1 || Number(q) > card.length || q.includes(".")) return reply(`*Olhe no comando ${prefix}mycard o número referente ao card que vc quer ativar, ex:*
${prefix+command} 1

Saiba tbm que, depois de ativado o card, não há como ativar outro até que este acabe ⚠️`)
if(usu.active) return reply("💌 *Há um card ativo no momento... Espere o mesmo acabar primeiro para ativar outro* 🔖")
i = Number(q) - 1
usu.mapa = i
usu.active = true
usu.tempo = card[i].horas
saveCardXP()
reply(`🔖 *Seu Card ${card[i].multi}x válido por ${sendLetterTime(card[i].horas)} foi ativado com sucesso* ✔️`)
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo ja está banido`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`🚫 *GRUPO BANIDO COM SUCESSO* 🚫`)
} else {
if(!isBanchat) return reply(`Este grupo não está banido`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`✅ *GRUPO DESBANIDO COM SUCESSO* ✅`)
}
break

case 'b':
case 'u':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.dono)
if(command == 'b'){
if(isBanchat) return astaup.sendMessage(sender, {text: `Este grupo ja está banido`}, {quoted: info})
dataGp[0].bangp = true
setGp(dataGp)
} else {
if(!isBanchat) return astaup.sendMessage(sender, {text: `Este grupo não está mais banido`}, {quoted: info})
dataGp[0].bangp = false
setGp(dataGp)
}
break

case 'boton':
case 'botoff':
if(!isOwner) return reply(enviar.msg.dono)
if(command == `botoff`) {
if(isBotoff) return reply(`O bot já está desligado...`)
setTimeout(() => {reagir("❌")}, 300)
obrigadoEXT.botoff = true
setObg(obrigadoEXT)
reply('❌ *Desligando todas as funções do BLACK*')
} else {
if(!isBotoff) return reply(`O bot já está ligado...`)
setTimeout(() => {reagir("✅")}, 300)
obrigadoEXT.botoff = false
setObg(obrigadoEXT)
reply(`✅ *Religando todas as funções do BLACK*`)
}
break

case 'modo+18':
case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está Desativado')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal : ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`🌀 O recurso limite de caracteres já está ativo no grupo 🌀`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`✔️ O recurso limite de caracteres foi ativado nesse grupo📝`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitecglobal':
case 'limitec':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
if(!isOwner) return reply(enviar.msg.dono)
var data = { limitefl: q }
fs.writeFileSync('./jogos/velha/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status': case 'stts':
  setTimeout(() => {reagir("❔")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
txt =
`ㅤㅤ〘 ＳＴＡＴＵＳ 〙
╭════════════════════╯
│
│⇒ Anti Imagem: ${isAntiImg ? '✅' : '❌'}
│⇒ Anti Vídeo: ${isAntiVid ? '✅' : '❌'}
│⇒ Anti Áudio: ${isAntiAudio? '✅' : '❌'}
│⇒ Anti Sticker: ${isAntiSticker ? '✅' : '❌'}
│⇒ Anti Documento: ${Antidoc ? '✅' : '❌'}
│⇒ Anti Contato ${isAntiCtt ? '✅' : '❌'}
│⇒ Anti Localização: ${Antiloc ? '✅' : '❌'}
│⇒ Anti Link Grupo: ${isAntilinkgp ? '✅' : '❌'}
│⇒ Anti BAN Link Grupo: ${!isBanlinkgp ? '✅' : '❌'}
│⇒ Anti Link Hard: ${isAntiLinkHard ? '✅' : '❌'}
│⇒ Anti BAN Link Hard: ${!isBanLinkHard ? '✅' : '❌'}
│⇒ Anti Fake: ${isAntifake ? '✅' : '❌'}
│⇒ Anti Notas: ${isAntiNotas ? '✅' : '❌'}
│⇒ Anti Catalogo: ${isAnticatalogo ? '✅' : '❌'}
│⇒ Anti Palavrão: ${isPalavrao ? '✅' : '❌'}
│⇒ Limite Caracteres: ${isAntiFlood ? '✅' : '❌'}
│⇒ Bem Vindo 1: ${isWelkom ? '✅' : '❌'}
│⇒ Bem Vindo 2: ${isWelkom2 ? '✅' : '❌'}
│⇒ Bem Vindo 3: ${isWelkom3 ? '✅' : '❌'}
│⇒ Bem Vindo 4: ${isWelkom4 ? '✅' : '❌'}
│⇒ Bem Vindo 5: ${isWelkom5 ? '✅' : '❌'}
│⇒ Auto Aceitação: ${isAcceptGroup ? '✅' : '❌'}
│⇒ Simi 1: ${isSimi ? '✅' : '❌'}
│⇒ Simi 2: ${isSimi2 ? '✅' : '❌'}
│⇒ Auto Sticker: ${isAutofigu ? '✅' : '❌'}
│⇒ Auto Resposta: ${isAutorepo ? '✅' : '❌'}
│⇒ Modo Zoeira: ${isModobn ? '✅' : '❌'}
│⇒ Modo RPG: ${isBlackCity ? '✅' : '❌'}
│⇒ Level: ${isLevelingOn ? '✅' : '❌'}
│⇒ Modo +18: ${isNsfw ? '✅' : '❌'}
│⇒ Anti Ligação: ${isAnticall ? '✅' : '❌'}
│⇒ Anti PV Block: ${isAntiPv ? '✅' : '❌'}
│
╰════════════════════╮`
astaup.sendMessage(from, {image: {url: logoslink.logo}, caption: txt}, {quoted: seloctt})
break

case 'reiniciar': case 'rr': {//adapted by math
if(!isOwner) return
var carregar = [
`[ ❗ ] Reiniciando meus sistemas em 5️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 4️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 3️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 2️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 1️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 0️⃣`,
`~_*© black system*_~`
]
let { key } = await astaup.sendMessage(from, {text: tempo+" "+pushname}, {quoted: info})//primeira mensagem
await sleep (1000)
for(let i = 0; i < carregar.length; i++) {
await sleep (1000)
await astaup.sendMessage(from, {text: carregar[i], edit: key }, {quoted: info})
}
await sleep(1000)
process.exit()
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
reagir(react2)
try {
if(!q.trim()) return reply(`Exemplo: ${prefix}emoji 🤔/whatsapp`)
var [emoji, nm] = q.split("/")
if(nm) {
var txtemoji = nm
} else {
var txtemoji = `whatsapp`
}
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/emoji?q=${emoji}/${txtemoji.toLowerCase()}&apikey=`+API_KEY_ALEATORY)
sendStickerFromUrl(from, ABC.rst)
} catch {
return reply("Erro..")
}
break

case 'linktxt':
if(!q) return
reply(`${encodeURI(q)}`)
break

case 'emoji-mix':
case 'emojimix':
case 'emoji2':
var [emj1, emj2] = q.trim().split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reply(`❪∘̥⃟⸽⃟𝙼𝚒𝚜𝚝𝚞𝚛𝚊𝚗𝚍𝚘┋${emj1} e ${emj2}┋𝙴𝚖𝚘𝚓𝚒𝚜∘̥⃟৴▸`)
sendStickerFromUrl(from, `${blacksite}/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_FREE)
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_FREE)) {
return reply("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('*Não consegui combinar esses emojis* 🙇🏻‍♂️')
}
}
break

case 'amongsticker': case 'as':
if(!isVip && !isGroup) return reply(enviar.msg.vip)
if(!q) return reply(`Exemplo:\n\n${prefix + command} Seu Texto`)
if(q.length > 25) return reply("Texto muito grande")
try {
matheuzinho = await getBuffer(`${blacksite}/api/amongus?texto=${encodeURI(q)}&apikey=`+API_KEY_FREE)
bass64 = `data:image/jpeg;base64,${matheuzinho.toString('base64')}`
mantap = await convertSticker(bass64, permuteFigAuthorName(`${NomeDoBot} 📍`), permuteFigPackName(`↑ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘽𝙔`))
stickerM4 = new Buffer.from(mantap, 'base64');
astaup.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch {
reply("Erro")
}
break

case 'gtasticker': case 'gtast':
if(!isVip && !isGroup) return reply(enviar.msg.vip)
if(!q) return reply(`Exemplo:\n\n${prefix + command} Seu Texto`)
if(!q.includes("/")) return reply(`Ex: ${prefix+command} black/matheuzinho`)
var [q1, q2] = q.split("/")
if(q1.length > 25 || q2.length > 25) return reply("Texto muito grande")
try {
matheuzinho = await getBuffer(`${blacksite}/api/gtapassed?txt1=${encodeURI(q1)}&txt2=${encodeURI(q2)}&apikey=`+API_KEY_FREE)
bass64 = `data:image/jpeg;base64,${matheuzinho.toString('base64')}`
mantap = await convertSticker(bass64, permuteFigAuthorName(`${NomeDoBot} 📍`), permuteFigPackName(`↑ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘽𝙔`))
stickerM4 = new Buffer.from(mantap, 'base64');
astaup.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch {
reply("Erro")
}
break

case 'wf': case 'fw': case 'qc': case 'wpp':
if(!q) return reply(`Oh, coloca um texto na frente do comando`)
setTimeout(() => {reagir("✅")}, 300)
tttt = q.includes('/') ? q.split('/')[1] : q
if(tttt.length > 50) return reply("Texto muito grande")
const text = q.includes('/') ? q.split('/')[1] : `${q}`

const username = menc_prt ? getname(menc_prt) : q.includes('/') ? getname(identArroba(q.split('/')[0])).replace("usuário", q.split('/')[0]) : pushname

fotousu = menc_prt ? menc_prt : q.includes('/') ? Number(q.split('/')[0].replace("@", "").replace(new RegExp("[()+-/ +/]", "gi"), "")) ? q.split('/')[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : sender : sender

//IMAGEM DO PERFIL
try {
ppimg = await astaup.profilePictureUrl(fotousu)
} catch {
ppimg = `https://telegra.ph/file/2a7516ef21d72cf8d9452.jpg`
}
//FIM IMAGEM DO PERFIL

//REQUIRES PRA FIGURINHA
const { writeExifImg } = require('./lib/exif')
//FIM DA REQUIERES

//DEFINIÇÃO FIGU
astaup.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await astaup.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
//FIM DEFINIÇÕES FIGU    
    
    
const avatar = `${ppimg}`

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFAFA",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
        astaup.sendImageAsSticker(from, buffer, info, { packname: permuteFigPackName(`↑ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘽𝙔`), author: permuteFigAuthorName(`${NomeDoBot} 📍`) })
});
break

case 'brat':
if(!q) return reply(`Ex: ${prefix+command} eu disse tu xera?`);
try {
setTimeout(() => {reagir('📍')}, 300);
var sticker = new Sticker(); // Sticker
data = await getBuffer(`${blacksite.replace('//', '//brat.')}/brat?text=${encodeURIComponent(q)}`);
sticker.addFile(data); 
sticker.options.metadata = {author: `📌 Criado por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await sticker.start();
await astaup.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
setTimeout(async() => { await fs.unlinkSync(resultadoSt[0].value) }, 20);
} catch(error) {
console.log(error.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply('Erro');
}
break

case 'bratvideo':
if(!q) return await reply(`Exemplo: ${prefix + command} Hello world`);
if(q > 250) return await reply(`Limite de caracteres excedido, máximo 250!`);
setTimeout(() => {reagir('📍')}, 300);
let words = q.split(" ");
let tempDir = path.join(process.cwd(), 'temp');
if(!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
let framePaths = [];
try {
  for(let i = 0; i < words.length; i++) {
    currentText = words.slice(0, i + 1).join(" ");
    resBuffer = await getBuffer(`${blacksite.replace('//', '//brat.')}/brat?text=${encodeURIComponent(currentText)}`);
    framePath = path.join(tempDir, `frame${i}.mp4`);
    fs.writeFileSync(framePath, resBuffer);
    framePaths.push(framePath);
  }
  fileListPath = path.join(tempDir, "filelist.txt");
  fileListContent = "";
  for(let i = 0; i < framePaths.length; i++) {
    fileListContent += `file '${framePaths[i]}'\n`;
    fileListContent += `duration 0.7\n`;
  }
  fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
  fileListContent += `duration 2\n`;
  fs.writeFileSync(fileListPath, fileListContent);
  const outputVideoPath = path.join(tempDir, "output.mp4");
  execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`);
  var sticker = new Sticker(); // Sticker
  sticker.addFile(outputVideoPath);
  sticker.options.metadata = {author: `📌 Criado por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
  resultadoSt = await sticker.start();
  await astaup.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
  setTimeout(async() => {
    await fs.unlinkSync(resultadoSt[0].value);
    framePaths.forEach((frame) => {
      if(fs.existsSync(frame)) fs.unlinkSync(frame);
    });
    if(fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
    if(fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
  }, 20);
} catch(error) { console.log(error.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply('Error'); }
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':
case 'sf':
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
reagir("♻")
aletxt = [`▧⃯⃟𝚁𝚎𝚖𝚘𝚟𝚎𝚗𝚍𝚘 𝙵𝚞𝚗𝚍𝚘ฺ͘.•🛸 ݈݇─`, `▧⃯⃟𝚁𝚎𝚝𝚒𝚛𝚊𝚗𝚍𝚘 𝙵𝚞𝚗𝚍𝚘ฺ͘.•🛸 ݈݇─`]
reply(aletxt[Math.floor(Math.random()*aletxt.length)])
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
owgi = await getFileBuffer(boij, 'image');
resultadoFundo = await removeBG(owgi)
const _sticker_ = new Sticker()
_sticker_.addFile(resultadoFundo.resultado); 
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `📍Criado por↓`
sd = `${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
_sticker_.options.metadata = {pack: satu, author: dua, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await _sticker_.start();
await astaup.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
await astaup.sendMessage(from, {document: fs.readFileSync(resultadoSt[0].value), mimetype: "image/jpeg", fileName: "Caso queira a imagem ✔"})
await fs.unlinkSync(resultadoSt[0].value)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
await reply(`Erro`);
}
} else return reply(`So imagem mn -_-`)
break

case 'fblack':
case 'sblack':
case 'fb':
setTimeout(() => {reagir("✅")}, 300)
if(!isQuotedSticker) return reply(`Marque uma figurinha com o comando...

- ${prefix+command}`)
reply(`▧⃯⃟𝚁𝚎𝚗𝚘𝚖𝚎𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊ฺ͘.•🛸 ݈݇─`)
renameSticker2024(permuteFigPackName(pushname), permuteFigAuthorName(sender), info)
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

case 'rename':
case 'roubar':
setTimeout(() => {reagir("✅")}, 300)
if(!isQuotedSticker) return reply('Marque uma figurinha...')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*Falta um nome para renomear a figurinha... ;-;*')
if(!pack) return reply(`*Necessita de um nome antes da barra ( / ), ex:*
${prefix+command} ${pushname+q}`)
if(!author2) return reply(`*Falta um complemento, ex:*
${prefix+command} ${q}/complemento`)
reply(`𝙿𝚊𝚌𝚔 𝙽𝚊𝚖𝚎: _"${pack.split(`\n`).join(`_\n_`)}"_
𝙰𝚞𝚝𝚑𝚘𝚛 𝙽𝚊𝚖𝚎: _"${author2.split(`\n`).join(`_\n_`)}"_
-------------------------------------------------------------
▧⃯⃟𝚁𝚎𝚗𝚘𝚖𝚎𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊ฺ͘.•🛸 ݈݇─`)
renameSticker2024(pack, author2, info)
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

/*case 'fblack':
case 'sblack':
case 'fb':
setTimeout(() => {reagir("✅")}, 300)
if(!isQuotedSticker) return reply(`Marque uma figurinha com o comando...

- ${prefix+command}`)
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(`▧⃯⃟𝚁𝚎𝚗𝚘𝚖𝚎𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊ฺ͘.•🛸 ݈݇─`)
bas01 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas01, permuteFigAuthorName(pushname), permuteFigPackName(NomeDoBot))
var sti = new Buffer.from(mantap, 'base64');
astaup.sendMessage(from, {sticker: sti, contextInfo: {externalAdReply: {title: `ROUBADA COM SUCESSO 😎👍🏽`, body:"", previewType:"PHOTO", thumbnail: sti}}}, {quoted: seloctt})
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

case 'rename':
case 'roubar':
setTimeout(() => {reagir("✅")}, 300)
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*Falta um nome para renomear a figurinha... ;-;*')
if(!pack) return reply(`*Necessita de um nome antes da barra ( / ), ex:*
${prefix+command} ${pushname+q}`)
if(!author2) return reply(`*Falta um complemento, ex:*
${prefix+command} ${q}/complemento`)
reply(`𝙿𝚊𝚌𝚔 𝙽𝚊𝚖𝚎: _"${pack}"_
𝙰𝚞𝚝𝚑𝚘𝚛 𝙽𝚊𝚖𝚎: _"${author2}"_
-------------------------------------------------------------
▧⃯⃟𝚁𝚎𝚗𝚘𝚖𝚎𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊ฺ͘.•🛸 ݈݇─`)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
astaup.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: seloctt})
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break*/

case 'ususticker': case 'us':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!menc_os2) return reply(`Marque a pessoa de quem você quer transformar a foto de perfil em figurinha...`)
///////////PEGAR A FOTO DO USUÁRIO/////////////
try {
fotoDePerfilDoMath = await astaup.profilePictureUrl(`${menc_os2.split('@')[0]}@c.us`, 'image')
} catch {
return reply("Usuário está sem foto de perfil ❌")
}
//////////////GERAR LINK DA FOTO////////////////
try {
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${fotoDePerfilDoMath}`);
matheuzinho = shortpc.data
} catch {
return reply("Falha ao tentar converter ❌")
}
//////////////FAZER A FIGURINHA/////////////////
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
sendStickerFromUrl(from, matheuzinho)
break

case 'fstiker':
case 'fsticker':
case 'f':
//
if((isQuotedVisuU || isQuotedVisuU2) && !isOwner && isJsonIncludes(menc_prt, nmrdn) && from == `555195227849-1619999724@g.us`) {
banirUsuario(sender, `24h`)
return mention(`Não pode @${sender.split(`@`)[0]}, por querer fazer figurinha de meu dono você será bloqueado por 24h no bot 👍🏻`)
}
//
reagir("✅")
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${blacksite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(astaup, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${blacksite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(astaup, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Marque uma imagem ou vídeo de até 10 segundos com o comando ${prefix+command}`)
}
break

case 'st':
case 'stk':
case 'sticker':
case 's':
//
if((isQuotedVisuU || isQuotedVisuU2) && !isOwner && isJsonIncludes(menc_prt, nmrdn) && from == `120363101256922846@g.us`) {
banirUsuario(sender, `24h`)
return mention(`Não pode @${sender.split(`@`)[0]}, por querer fazer figurinha de meu dono você será bloqueado por 24h no bot 👍🏻`)
}
//
setTimeout(() => {reagir("✅")}, 300)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${blacksite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(astaup, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${blacksite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(astaup, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem ou vídeo de até 10 segundos com o comando ${prefix+command}`)
}
break

case 'rgpackfig': case 'rgpf':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply("KD o MOD \"pack\" da figurinha?")
if(isJsonIncludes(figname, sender)) {
  AB = figname.map(i => i.id).indexOf(sender)
  if(!isJsonIncludes(figname[AB].fig, "pack")) {
    figname[AB].fig.push({mod: "pack", pack: q})
    saveJSON(figname, "./database/figname.json")
    return reply(`*MOD "pack" da figurinha adicionado com sucesso* ✔️`)
  } else {
    BC = figname[AB].fig.map(i => i.mod).indexOf("pack")
    figname[AB].fig[BC].pack = q
    saveJSON(figname, "./database/figname.json")
    return reply(`*MOD "pack" da figurinha alterado com sucesso* ✔️`)
  }
} else {
  figname.push(
    {id: sender, fig: [
      {mod: "pack", pack: q}
      ]
    }  
  )
  saveJSON(figname, "./database/figname.json")
  return reply(`*MOD "pack" da figurinha adicionado com sucesso* ✔️`)
}
break

case 'rgauthorfig': case 'rgaf':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply("KD o MOD \"author\" da figurinha?")
if(isJsonIncludes(figname, sender)) {
  AB = figname.map(i => i.id).indexOf(sender)
  if(!isJsonIncludes(figname[AB].fig, "author")) {
    figname[AB].fig.push({mod: "author", author: q})
    saveJSON(figname, "./database/figname.json")
    return reply(`*MOD "author" da figurinha adicionado com sucesso* ✔️`)
  } else {
    BC = figname[AB].fig.map(i => i.mod).indexOf("author")
    figname[AB].fig[BC].author = q
    saveJSON(figname, "./database/figname.json")
    return reply(`*MOD "author" da figurinha alterado com sucesso* ✔️`)
  }
} else {
  figname.push(
    {id: sender, fig: [
      {mod: "author", author: q}
      ]
    }  
  )
  saveJSON(figname, "./database/figname.json")
  return reply(`*MOD "author" da figurinha adicionado com sucesso* ✔️`)
}
break

case 'rmpackfig': case 'rmpf':
case 'rmauthorfig': case 'rmaf':
case 'rmfigall': case 'rmfa':
if(!isVip) return reply(enviar.msg.vip)
if(isJsonIncludes(figname, sender)) {
  AB = figname.map(i => i.id).indexOf(sender)
  if(command == "rmfigall" || command == "rmfa") {
    figname.splice(AB, 1)
    saveJSON(figname, "./database/figname.json")
    return reply(`*MOD's "pack" & "author" da figurinha deletados com sucesso* ✔️`)
  } else if(command == "rmpackfig" || command == "rmpf") {
    txt = "pack"
  } else {
    txt = "author"
  }
  BC = figname[AB].fig.map(i => i.mod).indexOf(txt)
  if(BC < 0) return reply(`🎲 *Você não registrou o MOD "${txt}" da figurinha para deletar o mesmo* 📛`)
  figname[AB].fig.splice(BC, 1)
  saveJSON(figname, "./database/figname.json")
  return reply(`*MOD "${txt}" da figurinha deletado com sucesso* ✔️`)
} else reply("🎲 *impossível apagar um dado inexistente* 📛")
break

case 's2':
setTimeout(() => {reagir(react2)}, 300)
if(!isVip) { reply(enviar.msg.vip)
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/sovip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
sendStickerFromUrl(from, {url: res})
} else if((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && !q.length <= 1) { 
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
sendStickerFromUrl(from, {url: res})
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 10 segundos..")
}
} catch {
reply(`Deu erro... Talvez o arquivo seja muito grande 😕`)
}
break

case 'name1':
setTimeout(() => {reagir("✅")}, 300)
if(!isOwner) return reply(`;-;`)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var n3 = `name3`
var n4 = `name4`
reply(`name2`)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(astaup, from, owgi, info, { packname:n3, author:n4})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var n3 = `name3`
var n4 = `name4`
reply(`name2`)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(astaup, from, owgi, info, { packname:n3, author:n4})
await DLT_FL(encmedia)
} else {
return reply(`name5 (opcional)`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply(`Marque uma figurinha, e eu vou transformar em imagem...\n\nSe for figurinha animada, use ${prefix}togif`)
try {
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙸𝚖𝚊𝚐𝚎𝚖∘̥⃟৴▸`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
astaup.sendMessage(from, {image: buff}, {quoted: seloctt}).catch(e => {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)));
reply('ERRO!!')
})
} catch {
reply("Erro..")
}
break

//==========(PLAQUINHAS-LOGOS)===========\

case 'placaloli':
if(!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
break

//=============(LOGOS)=============\\

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
case 'starballons':
case 'frozen':
case '3dsilver':
case 'goldtext':
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${blacksite}/api/${command}?texto=${textin}&apikey=`+API_KEY_FREE)
blabla = await getBuffer(bla.resultado.imageUrl)
astaup.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'gameplay':
case 'ffbanner':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("KD o texto ?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${blacksite}/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_FREE)
blabla = await getBuffer(bla.resultado.imageUrl)
astaup.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'cria': 
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'anime1':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'ff1':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
astaup.sendMessage(from, { image: venomk }, {quoted: seloctt })
break	

case 'game':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'ff2':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'anime2':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'entardecer':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'indian':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break 

case 'ffrose':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'ffgren':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break		

case 'chufuyu':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'wolf':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'dragonred':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
astaup.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'purple':              
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
astaup.sendMessage(from, { image: venomk }, {quoted: seloctt, caption: `${teks}`})			     	
break

case 'neon':
case 'matrix':
case 'glow':
case 'glow-advanced':
case 'dropwater':
case 'glitch':
case 'glitch-tik-tok':
case 'harry-potter':
case 'blackpink':
case 'blackpink-roses':
case 'blackpink-style':
case 'blackpink-neon':
case 'thunder':
case 'thunder-generator':
case 'green-horror':
case 'wolf-black-bear':
case 'wolf-galaxy':
case 'wolf-black':
case 'ninja':
case 'pornhub':
case 'marvel-studios':
case 'marvel-studios-metal':
case 'marvel-avengers':
case 'marvel-thor':
case 'deep':
case 'transformer':
case '8-bit':
case 'retro-neon':
case 'cartoon':
case 'shiny':
case 'chrome':
case 'hologram':
case 'rainbow':
case 'wall':
if(!q) return reply(`Ex: ${prefix+command} seu texto`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
try {
ABC = await fetchJson(blacksite+`/api/textpro?type=${command}&text=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(!ABC.status) return reply(`Erro ao gerar a logo... Tente mais tarde :)`)
sendImage(from, ABC.resultado, ``, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'glitch':
case 'galaxy':
case 'galaxy-light':
case 'glossy':
case 'metallic':
case 'graffiti':
case 'mascote':
/*case 'retro':
case 'deadpool':
case 'vintage3d':*/
case 'goldpink':
case 'dragonfire':
case 'pubgavatar':
case 'comics':
case 'amongus':
case 'ffavatar':
case 'lolavatar':
case 'cemiterio':
case 'hallobat':
case 'blood':
case 'halloween':
case 'titanium':
case 'sunset': 
case 'snow':
case 'america':
case 'eraser':
case 'captain':
case 'mascoteneon':
case 'blackpink':
if(!q) return reply(`Ex: ${prefix+command} seu texto`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
try {
ABC = await fetchJson(blacksite+`/api/ephoto?type=${command}&text=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(!ABC.status) return reply(`Erro ao gerar a logo... Tente mais tarde :)`)
sendImage(from, ABC.resultado, ``, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'newyear':
case 'tiger':
case 'pubgvideo':
if(!q) return reply(`Ex: ${prefix+command} seu texto`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
try {
ABC = await fetchJson(blacksite+`/api/ephoto?type=${command}&text=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(!ABC.status) return reply(`Erro ao gerar a logo... Tente mais tarde :)`)
sendVideo(from, ABC.resultado, ``, seloctt)
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`)
}
break

case 'metadinha':
reagir("😍")
try {
ABC = await fetchJson(`${blacksite}/random/metadinha?apikey=`+API_KEY_FREE);
sendRoulette(from, astaup, [{image: {url: ABC.masculina}, caption: `🙇🏻‍♂️ *HOMEM* 🙅🏻‍♂️`}, {image: {url: ABC.feminina}, caption: `🙆🏻‍♀️ *MULHER* 💁🏻‍♀️`}])
} catch (e) {
return reply("Erro..")
}
break;

case 'metadinha2':
reagir("😍")
try {
ABC = await fetchJson(apikeymeta);
matheuzinho = ABC[Math.floor(Math.random()*ABC.length)]
sendRoulette(from, astaup, [{image: {url: matheuzinho.male}, caption: `🙇🏻‍♂️ *HOMEM* 🙅🏻‍♂️`}, {image: {url: matheuzinho.female}, caption: `🙆🏻‍♀️ *MULHER* 💁🏻‍♀️`}])
} catch (e) {
return reply("Erro..")
}
break;

case 'printscreen': case 'printsite': case 'screenshot': case 'screenshots':
if(!q) return reply("Retorne após o comando o link do site que você deseja capturar")
try {
astaup.sendMessage(from, {image: {url: `${blacksite}/api/ssweb?link=${q}&apikey=`+API_KEY_FREE}}, {quoted: info})
} catch (e) {
return reply("Erro..")
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'infosorteio':
case 'helpsorteio':  
astaup.sendMessage(from, {text: infosorteio(sender, prefix), mentions: [sender]}, {quoted: selo})
break

case 'substituir':
if(!isOwner && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
reply(`Arquivo substituído com sucesso 🤭`)
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
setTimeout(() => {reagir("✅")}, 300)
if(!isOwner)return reply(enviar.msg.dono)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
astaup.sendMessage(from, {text:'*Index atualizada* ✅'},{quoted: seloctt})
setTimeout(async () => {
astaup.sendMessage(from, {text: "*Irei reiniciar o bot em 3... 2... 1...*"})
setTimeout(async () => {
process.exit()
}, 2200)
}, 2000)
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'banfake': case 'banfakes':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
caixa = []
for(i of somembros) {
  if(!numerodono.includes(i) && !botNumber.includes(i)) {
    if(Number(i.slice(0, 2)) !== 55) caixa.push(i)
  }
}
if(caixa.length > 0) {
  for(a = 0; a < caixa.length; a++) {
    await sleep(1000)
    remover(from, caixa[a])
  }
} else reply("Não há números fake presentes neste grupo...")
break

case 'fakeban':
case 'b4n':
case 'bam':
setTimeout(() => {reagir("🫡")}, 300)
if(!isGroupAdmins) return reply(enviar.msg.adm)
astaup.sendMessage(from, {text: `*O alvo ↴*
@${menc_os2.split('@')[0]} *foi removido com sucesso...* 🫡`, mentions: [menc_os2]}, {quoted: seloctt})
setTimeout(() => {
astaup.sendMessage(from, {text: `@${menc_os2.split('@')[0]} caiu na pegadinha do malandro 😂`, mentions: [menc_os2]})
}, 120000)
break

case 'suic': case 'suicui': case 'suicidiuio': case 'suicíuidio': case 'suicídio': case 'suicidio': case 'suicídio︎︎︎︎︎︎︎':
if(!isModobn) return reply(enviar.msg.modobz)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isGroup) return reply(enviar.msg.grupo)
if(isOwner || JSON.stringify(vip).includes(sender)) return reply("Você não tem permissão de se matar 😁")
reply(`Não ${pushname}, não se mate 😭💔`)
await sleep(3000)
astaup.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
reply(`Ah, menos um pá eu me preocupar 😪`)
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra': case 'band':
reagir("✅")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
usu = menc_prt ? menc_prt : q.includes("@") ? q.includes(" ") ? identArroba(q.split(" ")[0]) : identArroba(q) : false
motivo = menc_prt ? q ? q : undefined : q.includes(" ") ? q.split(" ").slice(1, q.split(" ").length).join(" ") : undefined
if(!usu) return reply(`Marque o usuário que você deseja banir do grupo, a mensagem ou o @`)

//a pessoa não está no grupo
if(!isJsonIncludes(groupMembers, usu)) return reply("Esse usuário não se encontra mais no grupo...")

//marcaram @ do bot
if(botNumber.includes(usu)) {
  if(!isOwner) {
    reply("Aplicando punição pq tentaram me banir... Cê tem sorte de só perder o ADM")
    return rebaixar(from, sender)
  } else return reply("Qual foi patrão ?")
}

//marcaram @ do dono
if(isAllOwner(usu)) {
  if(!isOwner) {
    reply("Tá achando que vai banir meu dono assim na minha frente ?? Sente o poder do ban então pra ver se é bom 😍")
    await sleep(1000)
    return remover(from, sender)
  } else return reply("Não vou te banir patrão ;-;")
}

//marcaram @ de um vip
if(isJsonIncludes(vip, usu) && !isOwner) {
  reply("O cara quer banir um ser superior kkkkk")
  return rebaixar(from, sender)
}

//não é vip nem dono
sendAudioPTT(astaup, from, './database/midia/audios/ban.m4a', info)
remover(from, usu)
mention(`*USUÁRIO @${usu.split("@")[0]} FOI REMOVIDO COM SUCESSO* 😎👍🏽`)
if(command == "band" && menc_prt) {
  reagir("🗑️")
  await sleep(2000)
  astaup.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}
if(motivo != undefined) {
  setTimeout(() => {
    sendForwardingMessage(usu, `${tempo} @${usu.split("@")[0]}, você foi banido do grupo ${groupName} pelo ADM @${sender.split("@")[0]}, dado o seguinte motivo:\n_"${motivo}"_`, undefined, 1)
  }, 2000);
}
break

case 'vasco':
reagir("🏴‍☠️")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

//a pessoa não está no grupo
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Esse usuário não se encontra mais no grupo...")

//marcaram @ do bot
if(botNumber.includes(menc_os2)) {
if(!isOwner) {
reply("Que vasco o que menó ? Eu sou Palmeirense 💚")
return astaup.groupParticipantsUpdate(from, [sender], "demote")
} else return reply("Qual foi patrão ?")
}

//marcaram @ do dono
if(numerodono.includes(menc_os2)) {
if(!isOwner) {
reply("No No No... Meu Dono é flamenguista 😍")
await sleep(1000)
return astaup.groupParticipantsUpdate(from, [sender], "remove")
} else return reply("Não vou te banir patrão ;-;")
}

//marcaram @ de um vip
if(JSON.stringify(vip).includes(menc_os2) && !isOwner) {
reply("Esse aí não é vascaíno não kkkkk")
return astaup.groupParticipantsUpdate(from, [sender], "demote")
}

//não é vip nem dono
vascoban = ["zagueiro", "atacante", "goleiro", "volante", "ponta esquerda", "ponta direita", "meio campo"]
astaup.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi jogar no Vasco como ${vascoban[Math.floor(Math.random()*vascoban.length)]} ☠️`, mentions: [menc_os2]})
sendAudioPTT(astaup, from, './database/midia/audios/vasco.m4a', info)
await sleep(2000)
astaup.groupParticipantsUpdate(from, [menc_os2], "remove")
break

case 'rankcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(rankcmd.length < 5) return reply("O bot ainda não possui comandos salvos o suficiente para calcular o ranking")
matheuzinho = rankcmd.map(i => i)
rank = matheuzinho.sort((a, b) => (a.usado < b.usado) ? 0 : -1)
txt = `❪💎ฺ࣭࣪͘ꕸ▸ ᴛᴏᴩ 5 ᴄᴏᴍᴀɴᴅᴏꜱ ᴍᴀɪꜱ ᴜꜱᴀᴅᴏꜱ ᴩᴏʀ ᴜꜱᴜáʀɪᴏꜱ ᴇᴍ ɢʀᴜᴩᴏ:`
for(i = 0; i < 5; i++) {
  quant = rank[i].usado
  txt += `\n»${i + 1}«
▧⃯⃟ᴄᴏᴍᴀɴᴅᴏ: ${prefix+rank[i].cmd}
ㅤㅤ▧⃯⃟ᴜꜱᴀᴅᴏ: ${quant} vez${Number(quant) > 1 ? `es` : ``}`
}
try {
  matheuzinho = await astaup.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
  shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${matheuzinho}`);
  ppimg = shortpc.data
} catch(e) { ppimg = semfoto }
sendUrlText(from, txt, pushname, ``, ppimg, `https://wame/`+sender.split("@")[0], seloctt)
break

case 'checkcmd':
if(!q) return reply(`Informe o nome do comando que você quer puxar, ex:
${prefix+command} play`)
if(q.includes(prefix)) return reply(`Não inclua o prefixo na busca...`)
caixa = []
for(i of rankcmd) {
  if(rmLetras(q) == i.cmd) caixa.push(i)
}
if(caixa.length <= 0) return reply(`Não há registros de uso desde comando em minha database...`)
reply(`🎲 O Comando *${prefix+caixa[0].cmd}* foi usado ${caixa[0].usado} vez${Number(caixa[0].usado) !== 1 ? `es` : ``}, segundo o que consta em minha database...`)
break

case 'revealmsg':
if(!isOwner) return reply(enviar.msg.dono)
var getGroups = await astaup.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
if(q.toLowerCase() == "grupo") {
if(!isGroup) return reply(enviar.msg.grupo)
idgp = from
nome = groupName
} else if(Number(args[0]) > 0 && Number(args[0]) <= ingfoo.length) {
idgp = ingfoo[Number(args[0])].id
nome = ingfoo[Number(args[0])].subject
} else {
return reply("Olhe no comando "+prefix+command+"listarevgp o número correspondente ao grupo que você quer ativar/desativar o repasse de mensagens... Ex: "+prefix+command+"2\n\nCaso vc opte por \""+prefix+command+" grupo\", ele irá ativar/desativar este grupo aqui...")
}
if(JSON.stringify(revealmsg).includes(idgp)) {
AB = revealmsg.map(i => i.groupId).indexOf(idgp)
revealmsg.splice(AB, 1)
fs.writeFileSync("./operacao/revealmsg.json", JSON.stringify(revealmsg, null, 2))
reply("Repasse de mensagens do grupo "+nome+" desativado com sucesso 💢")
} else {
revealmsg.push({groupId: idgp})
fs.writeFileSync("./operacao/revealmsg.json", JSON.stringify(revealmsg, null, 2))
reply("Repasse de mensagens do grupo "+nome+" ativado com sucesso ✅")
}
break

case 'listarevgp':
setTimeout(() => {reagir("✅")}, 300)
if(!isOwner) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await astaup.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = "ᏞᏆՏͲᎪ ᎠᎬ ᏀᎡႮᏢϴՏ Ꭰϴ ᏴϴͲ\nͲϴͲᎪᏞ ( "+ingfoo.length+" )\n________________________________________"
for (let i = 0; i < ingfoo.length; i++){
matheuzinho = JSON.stringify(revealmsg).includes(ingfoo[i].id) ? "✅" : "❌"
teks1 += "\n\n»"+i+"«\n⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n〘 "+ingfoo[i].subject+" 〙\n⏤͟͟͞͞ ꦿ𝙸𝙳 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n× "+ingfoo[i].id+"\n⸺͟͞ꪶ𝙰𝚝𝚒𝚟𝚊𝚍𝚘⇒『 "+matheuzinho+" 』\n________________________________________"
}
reply(teks1)
break

case 'resetadsgp':
if(!isOwner) return reply(enviar.msg.dono)
if(!JSON.stringify(adsgp).includes("grupos")) {
  adsgp.push({tipo: "grupos", gps: []})
  fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("mensagens")) {
  adsgp.push({tipo: "mensagens", msgs: []})
  fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
}
AB = adsgp.map(i => i.tipo).indexOf("grupos")
AC = adsgp.map(i => i.tipo).indexOf("mensagens")
adsgp[AB].gps = []
fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
adsgp[AC].msgs = []
fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
reply("Sistema resetado")
break

case 'setadsgp':
if(!isOwner) return reply(enviar.msg.dono)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(adsgp).includes("quantidade")) {
  adsgp.push({tipo: "quantidade", quant: 5})
  fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("grupos")) {
  adsgp.push({tipo: "grupos", gps: []})
  fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("mensagens")) {
  adsgp.push({tipo: "mensagens", msgs: []})
  fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
}
var [linkM4, msgM4] = q.split('|')
AB = adsgp.map(i => i.tipo).indexOf("grupos")
AC = adsgp.map(i => i.tipo).indexOf("mensagens")
if(!linkM4) return reply('Insira um link de convite ao lado do comando.')
if(!msgM4) return reply(`Vejo que você não inseriu a mensagem que será enviada... Faça assim:\n${prefix+command} link do grupo|mensagem para enviar`)
if(linkM4.includes('chat.whatsapp.com/')) {
  link = linkM4.split('app.com/')[1]
  try {
    var getGroups = await astaup.groupFetchAllParticipating()
    var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    var ingfoo = groups.map(v => v)
    ingfoo.sort((a, b) => (a[0] < b.length))
    grupos77 = []
    for(i = 0; i < ingfoo.length; i++) {
      grupos77.push({groupId: ingfoo[i].id})
    }
    adsgp[AB].gps = grupos77
    fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
    adsgp[AC].msgs.push({txt: msgM4, cobrado: false})
    fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
    astaup.groupAcceptInvite(`${link}`)
    return reply(`Todos os grupos da lista foram salvos na pasta... Qualquer grupo que esteja fora da lista será tratado como indigno e réu de receber anúncios em seu chat`)
  } catch(erro) {
    if(String(erro).includes('resource-limit') ) {
      reply('O grupo já está com o alcance máximo de membros.')
    }
    if(String(erro).includes('not-authorized') ) {
      reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
    }
  }
} else return reply('Ops, verifique o link que você inseriu.')
break

case 'setadstime': case 'sat':
if(!isOwner) return reply(enviar.msg.dono)
if(!JSON.stringify(adsgp).includes("quantidade")) {
  adsgp.push({tipo: "quantidade", quant: 5})
  fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!Number(args[0]) || Number(args[0]) < 1) return reply(`Defina a quantidade de mensagens a serem enviadas no grupo ao usar o comando ${prefix}setadsgp

Ex: ${prefix+command} 5`)
if(q.includes(".")) return reply("Não pode números decimais")
AB = adsgp.map(i => i.tipo).indexOf("quantidade")
adsgp[AB].quant = Number(args[0])
fs.writeFileSync("./operacao/adsgp.json", JSON.stringify(adsgp, null, 2))
reply(`Quant. de mensagens definida com sucesso ✅`)
break

case 'rggp':
if(!isOwner) return reply(enviar.msg.dono)
if(JSON.stringify(globegroup).includes(from)) return reply(`Grupo já registrado...`)
try {
var fotogp = await astaup.profilePictureUrl(from, 'image')
} catch {
var fotogp = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
linkgp = await astaup.groupInviteCode(from)
globegroup.push({id: from, thumb: fotogp, nome: groupName, link: `https://chat.whatsapp.com/${linkgp}`})
fs.writeFileSync("./database/globegroup.json", JSON.stringify(globegroup, null, 2))
reply(`Grupo adicionado ao comando global ${prefix}grupos`)
break

case 'rmgp':
if(!isOwner) return reply(enviar.msg.dono)
rmgp = q.length > 8 ? q : from
if(!JSON.stringify(globegroup).includes(rmgp)) return reply(`Grupo não registrado...`)
AB = globegroup.map(i => i.id).indexOf(rmgp)
globegroup.splice(AB, 1)
fs.writeFileSync("./database/globegroup.json", JSON.stringify(globegroup, null, 2))
reply(`Grupo retirado do comando global ${prefix}grupos`)
break

case 'grupos':
if(isGroupAdmins || isVip) {
  if(globegroup.length > 0) {
    gpale = globegroup[Math.floor(Math.random()*globegroup.length)]
    astaup.sendMessage(from, {image: {url: gpale.thumb}, caption: `_⏤͟͟͞͞ ꦿLink do grupo ↴_
⇒ ${gpale.nome}

${gpale.link}`}, {quoted: seloctt})
  } else {
    reply("Não há grupos registrados...")
  }
} else {
  reply("[ ❗ ] só ADM ou VIP ❌")
}
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2) return reply(prefix + command + " @ da pessoa")
if(sender.includes(menc_os2)) return reply(`Não é possível mutar a si mesmo...`)
if(numerodono.includes(menc_os2)) return reply(`Não é possível mutar meu dono...`)
if(botNumber.includes(menc_os2)) return reply(`Não é possível mutar o bot...`)
if(groupAdmins.includes(menc_os2)) return reply(`Não é possível mutar um ADM...`)
if(JSON.stringify(vip).includes(menc_os2)) return reply(`Não é possível mutar um usuário VIP...`)
if(JSON.stringify(mute).includes(from)) {
AB = mute.map(i => i.gpid).indexOf(from)
if(JSON.stringify(mute[AB].mutados).includes(menc_os2)) return reply(`Este usuário já está mutado...`)
mute[AB].mutados.push({id: menc_os2, sn: false})
fs.writeFileSync("./database/mute.json", JSON.stringify(mute, null, 2))
} else {
mute.push({gpid: from,
mutados: [{id: menc_os2, sn: false}]
})
fs.writeFileSync("./database/mute.json", JSON.stringify(mute, null, 2))
}
reply(`Usuário mutado com sucesso... Caso ele fale algo, será banido.`)
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!JSON.stringify(mute).includes(from)) return reply(enviar.msg.notusu)
if(menc_os2) {
var qp = menc_os2
} else {
var qp = identArroba(args[0])
}
AB = mute.map(i => i.gpid).indexOf(from)
BC = mute[AB].mutados.map(a => a.id).indexOf(qp)
if(BC < 0) return reply(enviar.msg.notusu)
mute[AB].mutados.splice(BC, 1)
fs.writeFileSync("./database/mute.json", JSON.stringify(mute, null, 2))
reply(`Usuário desmutado com sucesso...`)
break

case 'mutelist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!JSON.stringify(mute).includes(from)) return reply(`Não há usuários mutados neste grupo...`)
AB = mute.map(i => i.gpid).indexOf(from)
if(Number(mute[AB].mutados.length) > 0) {
txt = `🤫 *Usuários mutados do grupo ↴*
${groupName}
📟 *Total:* ${mute[AB].mutados.length}\n`
for(a = 0; a < mute[AB].mutados.length; a++) {
txt += `• @${mute[AB].mutados[a].id.split('@')[0]}\n`
}
mention(txt)
} else {
reply(`Não há usuários mutados neste grupo...`)
}
break

case 'infomute':
reply(`${tempo} ${pushname}, os comandos disponíveis são:
• ${prefix}mute
• ${prefix}desmute
• ${prefix}mutelist

-> ${prefix}mute
Marque o usuário com @ ou a mensagem dele, para mutar o mesmo...

-> ${prefix}desmute
Marque o usuário com @ ou a mensagem dele, para desmutar o mesmo... O ban não anula o mute.

-> ${prefix}mutelist
Irá mostrar a lista de todos os usuários mutados... Bem, se houver algum.`)
break

case 'inforoleta':
setTimeout(() => {reagir("💀")}, 300)
reply(`Há duas roletas russas funcionando...

[ ${prefix}roleta ]
O bot irá escolher aleatoriamente uma pessoa do grupo, e banir imediatamente...

[ ${prefix}roleta2 ]
A roleta 2 irá fazer a mesma coisa que a de cima... Porém nesta, os ADMs estarão salvos do banimento.`)
break

case 'roleta':
reagir("💀")
if(!isModobn) return reply(enviar.msg.modobz)
if(!isGroupAdmins) return reply(`Você não tem essa permissão... 🖐🏽😔`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
membros = []
for(i = 0; i < groupMembers.length; i++) {
if(groupMembers[i].id != nmrdn && groupMembers[i].id != botNumber && groupMembers[i].id != groupMetadata.owner) membros.push({id: groupMembers[i].id})
}
if(membros.length > 0) {
alerl = membros[Math.floor(Math.random() * membros.length)].id
mention(`Entre os sorteados do grupo ${groupName}, @${alerl.split('@')[0]} hoje não é seu dia de sorte...`)
balas = ["vazio", "vazio", "vazio", "vazio", "vazio", "cheio", "cheio", "cheio"]
balinha = balas[alerandom(balas.length)]
await sleep(1000)
if(balinha == "vazio") return sendMess(from, "Hahaha, tô zoando... sorte sua que o cartucho tava vazio 🤡")
astaup.sendMessage(from, {text: `Suas últimas palavras...`})
astaup.groupParticipantsUpdate(from, [alerl], "remove")
} else {
reply(`Não há membros suficientes no grupo para efetuar a roleta russa...`)
}
break

case 'roleta2':
reagir("💀")
if(!isModobn) return reply(enviar.msg.modobz)
if(!isGroupAdmins) return reply(`Você não tem essa permissão... 🖐🏽😔`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(somembros.length <= 0) return reply(`Só foram encontrados admins no grupo ${groupName}`)
membros = []
for(i = 0; i < somembros.length; i++) {
if(!numerodono.includes(somembros[i]) && !botNumber.includes(somembros[i]) && !groupMetadata.owner.includes(somembros[i])) membros.push({id: somembros[i]})
}
if(membros.length > 1) {
alerl = membros[Math.floor(Math.random() * membros.length)].id
mention(`Entre os sorteados do grupo ${groupName}, @${alerl.split('@')[0]} hoje não é seu dia de sorte...`)
balas = ["vazio", "vazio", "vazio", "vazio", "vazio", "cheio", "cheio", "cheio"]
balinha = balas[alerandom(balas.length)]
await sleep(1000)
if(balinha == "vazio") return sendMess(from, "Hahaha, tô zoando... sorte sua que o cartucho tava vazio 🤡")
astaup.sendMessage(from, {text: `Suas últimas palavras...`})
astaup.groupParticipantsUpdate(from, [alerl], "remove")
} else {
reply(`Não há usuários suficientes para efetuar o sistema de roleta russa...`)
}
break

case 'promover': case 'promo':
setTimeout(() => {reagir("👑")}, 300)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
astaup.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *ACABA DE RECEBER A COROA DE ADMINISTRADOR DO GRUPO... ESPERO QUE HONRE A SUA FUNÇÃO* 👑`, mentions: [menc_os2]})
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/promovido.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': case 'reb':
setTimeout(() => {reagir("🥲")}, 300)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
astaup.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *ACABA DE PERDER A COROA DE ADM DO GRUPO...* 🥲`, mentions: [menc_os2]})
astaup.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'alfabeto':
case 'a':
setTimeout(() => {reagir(react2)}, 300)
if(!q) return reply(`*Ex:* A letra que cair é a inicial da pessoa que vai te fazer feliz esse ano...`)
alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V","W","X","Y","Z"]
reply(`❤️‍🔥 Vamos sortear uma letra para a frase⟩
${q}`)
setTimeout(async() => {
astaup.sendMessage(from, {text: `${alfa[Math.floor(Math.random()*alfa.length)]} ${react2}`})
}, 2000)
break

case 'sorteio2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix+command} de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply('Deu erro, tente novamente :/')
}
break

case 'sorteio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(isJsonIncludes(sorteio, from)) return reply(`Há um sorteio em andamento neste grupo...`)
if(!q) return reply(`Você precisa configurar o sorteio primeiro, definindo horário, participante e emoji... Se tiver mais dúvidas, olhe no ${prefix}infosorteio`)
cont = contar(q, " ")
if(cont != 2 && !isJsonIncludes(sorteio, from)) return reply(`Vejo que você está usando de forma errada... Precisa ser desse jeito:
${prefix+command} 12:45 1/all ❤`)
var [time, part, emj] = q.split(` `)
var [p_win, p_all] = part.split(`/`)
if(!Number(time.replace(":", ""))) return reply(`Pfvr ${pushname}, revise o horário que vc colocou...`)
horacerta = converterMin(contarMin(time))
if(contarMin(horacerta) <= contarMin(sendHours("HH:mm"))) return reply(`O sistema de sortieo está em desenvolvimento... Portanto, selecione um horário acima do atual 🎭`)
total_p = p_all.toLowerCase() == "all" ? groupMembers.length - 1 : p_all
lm = converterMin((contarMin(horacerta) - 5) < 0 ? contarMin("24:00") + (contarMin(horacerta) - 5) : contarMin(horacerta) - 5)
if(Number(p_win) > Number(total_p)) return reply(`A quantidade de ganhadores não pode ser maior que a quantidade de participantes`)
if(!antiModLetra(emj)) return reply(`Você não indicou com emoji, a reação devida...`)
msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.extendedTextMessage?.text
if(!msg) return reply(`Vc não marcou a mensagem ksksks Marque uma mensagem, que no caso é o título do sorteio, e este texto será salvo no banco de dados do bot para ser sorteado no horário determinado 🥰`)
sorteio.push({groupId: from, texto: msg, data: horacerta, dia: sendHours("DD"), emoji: emj, limite: lm, ganhadores: Number(p_win), total: Number(total_p), start: false, participants: []})
saveJSON(sorteio, "./operacao/sorteio.json")
txt = `👤 *Admin:* @${sender.split("@")[0]}
⏳ *Horário:* ${horacerta}

\t\t\t⚠ *ATENÇÃO MEMBROS* ⚠

${msg}

_Se você tiver interesse em participar do sorteio acima, reaja esta mensagem com o emoji "${emj}"_
_Há ${total_p} vagas... Entrada será encerrada ${lm} (admins podem mudar esse limite no comando ${prefix}stms)_`
reagir(emj)
astaup.sendMessage(from, {text: txt, mentions: groupMembers.map(i => i.id)}, {quoted: seloctt})
break

case 'sortelist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = sorteio.map(i => i.groupId).indexOf(from)
if(AB < 0) return reply(enviar.msg.notusu)
txt = `⏳ *Horário do sorteio:* ${sorteio[AB].data}
😎 *Entrada limite:* ${sorteio[AB].limite}
👻 *Total:* ${sorteio[AB].participants.length}/${sorteio[AB].total}
👤 *Participantes:*${sorteio[AB].participants.map(p => `\n• @${p.split("@")[0]}`).join(``)}

\t${sorteio[AB].texto}

_Se você tiver interesse em participar do sorteio acima, basta reagir esta mensagem com o emoji "${sorteio[AB].emoji}"_`
mention(txt)
break

case 'stms':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = sorteio.map(i => i.groupId).indexOf(from)
if(AB < 0) return reply(enviar.msg.notusu)
if(!Number(args[0])) return reply(`Retorne após o comando quantos minutos antes do sorteio, os usuários poderão entrar..., Ex: ${prefix+command} 5`)
nmr = converterMin(contarMin(sorteio[AB].data) - Number(args[0]))
sorteio[AB].limite = nmr
saveJSON(sorteio, "./operacao/sorteio.json")
reply(`O horário limite para participar do sorteio neste grupo foi atualizado com sucesso para ${nmr} ✅`)
break

case 'stopsorte':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = sorteio.map(i => i.groupId).indexOf(from)
if(AB < 0) return reply(enviar.msg.notusu)
sorteio.splice(AB, 1)
saveJSON(sorteio, "./operacao/sorteio.json")
reply(`O sorteio deste grupo foi cancelado com sucesso...`)
break

case 'nuke': case 'arquivargp':
if(!isOwner) return reply(enviar.msg.dono)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.key.fromMe) return 
grupo = groupMembers.map(i => i.id)
grupo.splice(grupo.indexOf(nmrdn), 1)
grupo.splice(grupo.indexOf(botNumber), 1)
if(grupo.length <= 0) return reply("Não há membros para banir aqui...")
for(i = 0; i < grupo.length; i++) {
await sleep(1300)
astaup.groupParticipantsUpdate(from, [grupo[i]], 'remove')
}
break

case 'sorteionumero':
case 'snmr':
setTimeout(() => {reagir("✅")}, 300)
if(!q) return reply(`Escolha um número máximo...
Ex: ${prefix+command} 300`)
reply(`_Sorteando número aleatório entre 0-${q}_`)
setTimeout(async() => {
try {
astaup.sendMessage(from, {text: `*Número sorteado ( ${Math.floor(Math.random()*q)} )*`})
} catch {
astaup.sendMessage(from, {text: `${q} não é número... 😕`})
}
}, 1100)
break

//==========(TTPS/ATTP)============\\

case 'ttp':
try {
if(!q) return reply(`Exemplo: ${prefix+command} black bot`);
reply(`*Gerando figu com a frase* _"${q}"_`);
link = `${blacksite}/api/ttp?texto=${encodeURI(q)}&apikey=`+API_KEY_FREE
matheuzinho = await getBuffer(link)
bass64 = `data:image/jpeg;base64,${matheuzinho.toString('base64')}`
mantap = await convertSticker(bass64, `𝐃𝐎𝐌𝐈𝐍𝐀💡`, `👑 𝐌𝐀𝐓𝐇𝐄𝐔𝐙𝐈𝐍𝐇𝐎`)
stickerM4 = new Buffer.from(mantap, 'base64');
astaup.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch (e) {
return reply("Erro..");
}
break;

case 'attp':
case 'attp1':
case 'attp2':
case 'attp3':
case 'attp4':
case 'attp5':
case 'attp6':
if(!q) return reply("Ei, Cadê o Texto?")
reply(`*Gerando figu com a frase* _"${q.split("\n").join("_\n_")}"_`)
astaup.sendMessage(from, {sticker: {url: blacksite+`/makerfig/rgb?fig=${command}&texto=${encodeURI(q)}&apikey=`+API_KEY_FREE}}, {quoted: info}).catch(e => {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro")
})
break

//======================================\\

case 'cotacao': case 'moeda':
if(!isVip && !isChatOfc) return reply(enviar.msg.vip)
try {
  ABC = await fetchJson(blacksite+`/api/cotacao?moeda=${q ? q : "matheuzinho"}&apikey=`+API_KEY_FREE)
  if(ABC.erro) return reply(ABC.erro)
  i = ABC.resultado[0]
  moda = i.name.split("/")[0]
  mods = moda.split(" ")[0]
  txt = `🪙 *Moeda:* ${moda}
🎲 *Código:* ${i.code}
💰 *Valor atual:* R$ ${Number(i.bid).toFixed(2)} ( 1 ${moda} )
📊 *Variações:*
_• *Mínimo:* ${Number(i.high).toFixed(2)} ${mods+"s"}_
_• *Máximo:* ${Number(i.low).toFixed(2)} ${mods+"s"}_
_• *Percentual:* ${Number(i.pctChange).toFixed(2)}% ( ${i.varBid} )_

Atualizado às ${realtime}`
reply(txt)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro") }
break

//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./database/midia/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./database/midia/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'gerarnick': case 'fazernick': case 'nick':
AB = nicks.map(i => i.id).indexOf(sender)
if(isJsonIncludes(nicks, sender)) {
  nicks.splice(AB, 1)
  saveJSON(nicks, "./database/nicks.json")
}
try {
if(antiModLetra(q)) return reply("Não pode letras modificadas nem emoji..");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: ${prefix+command} matheuzinho`);
ABC = await fetchJson(`${blacksite}/api/fazernick?nome=${encodeURI(q)}&apikey=`+API_KEY_FREE)
txt = `🎗𝐍𝐈𝐂𝐊𝐒 𝐆𝐄𝐑𝐀𝐃𝐎𝐒 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎🎗`
caixa = {id: sender, quant: 2, titulos: []}
for(a = 0; a < ABC.length; a++) {
  sim = a + 1
  txt += `\n${String(sim < 10 ? permuteNumberEmoji(0) : "") + permuteNumberEmoji(sim)}⧽ ${ABC[a]}`
  caixa.titulos.push({nmr: sim, txt: ABC[a]})
}
nicks.push(caixa)
saveJSON(nicks, "./database/nicks.json")
//sendButton(from, {text: AB, footer: NomeDoBot}, astaup, [{type: `list`, title: `〘 𝗡𝗜𝗖𝗞𝗦 𝗔𝗤𝗨𝗜 〙`, rowId: [{title: `matheuzinho t'mama`, options: caixa}]}], seloctt)
reply(txt)
} catch (e) {
return reply("Erro..");
}
break;

case 'copynick':
if(!q) return
sendButton(from, {text: `🎲 *Nick gerado com sucesso:* ${q}`, footer: NomeDoBot}, astaup, [{type: `copy_text`, text: `CLIQUE AQUI PARA COPIAR`, url: q}], seloctt)
break

case 'sn':
  setTimeout(() => {reagir("🤔")}, 300)
  if(!q) return reply(`*Faça uma pergunta para o bot responder com sim/não...*\n*Exemplo:* ${prefix+command} hj tem gol do Ribamar ?`)
  const sn = ['sim', 'não']
  const sn2 = ["creio que", "acredito que", "acho que", "receio que"]
const sn_ = sn[Math.floor(Math.random() * (sn.length))]
const sn2_ = sn2[Math.floor(Math.random() * (sn2.length))]
  sim_nao = `Pergunta⧽ ${q}\n\n*Pensando bem... ${sn2_} ${sn_}* 🤷🏻‍♂️`
reply(sim_nao)
break

case 'campominado': case 'campo-minado':
if(!isGroup) return reply(enviar.msg.grupo)
game = `./jogos/mina-game/campo-minado-${from}.json`
if(!fs.existsSync(game)) {
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [mark, difi] = barra.split("/")
if(!mark.includes("@")) return reply("Marque alguém do grupo para jogar com você, o @ ou a mensagem...")
usu = identArroba(mark)
if(!isJsonIncludes(groupMembers, usu)) return reply("Usuário marcado não está mais entre nós...")
if(usu == botNumber) return reply("Eu sou o bot né meu prç, eu não jogo 🤦🏻‍♂️")
pc = prefix+command
if(q.includes("@") && !q.includes("/")) return mention(`💣 Vc deve escolher entre uma das três dificuldades:
🌟⃤ ${pc+" "+q}/easy
⚡⃤ ${pc+" "+q}/medium
💥⃤ ${pc+" "+q}/hard`)
qp = difi.toLowerCase()
if(qp != "easy" && qp != "medium" && qp != "hard") return mention(`Vc deve escolher entre uma das três dificuldades:
${pc+" "+q}/easy
${pc+" "+q}/medium
${pc+" "+q}/hard`)
if(qp == "easy") { mm = 7; mxm = 9 }
if(qp == "medium") { mm = 14; mxm = 7 }
if(qp == "hard") { mm = 21; mxm = 5 }
delt = []
for(a = 1; a < (mxm + 1); a++) {
  for(b = 1; b < (mxm + 1); b++) {
    if(b == 1) c = "a"
    if(b == 2) c = "b"
    if(b == 3) c = "c"
    if(b == 4) c = "d"
    if(b == 5) c = "e"
    if(b == 6) c = "f"
    if(b == 7) c = "g"
    if(b == 8) c = "h"
    if(b == 9) c = "i"
    delt.push(a+c)
  }
}
caixa = []
for(i = 0; i < mm; i++) {
  valor = alerandom(delt.length)
  caixa.push(delt[valor])
  delt.splice(valor, 1)
}
start = {
  ID: sendHours("DDMMYYYYHHmmss"),
  jogadores: [{id: sender, erros: 3}],
  criador: sender,
  chamado: usu,
  play: 0,
  começou: false,
  dificuldade: qp,
  totalminas: mm,
  totalquad: mxm,
  minas: caixa,
  plantado: []
}
fs.writeFileSync(game, JSON.stringify(start, null, 2))
mention(`⚡ ${tempo} @${usu.split('@')[0]},
@${sender.split('@')[0]} está te desafiando para jogar uma partida eletrizante nível ${qp} de "campo minado" 💣😜

Digite » S « para aceitar e » N « para recusar 🫵🏽😄`)
await sleep(900000)
finish = `./jogos/mina-game/campo-minado-${from}.json`
if(fs.existsSync(finish) && JSON.parse(fs.readFileSync(finish)).ID == sendHours("DDMMYYYYHHmmss")) {
  fs.unlinkSync(finish)
  reply("Sessão expirada 💣")
}
} else {
  campominado = JSON.parse(fs.readFileSync(game))
  if(campominado.começou == true) {
    if(isJsonIncludes(campominado.jogadores, sender)) return reply("Você já está jogando "+pushname)
    return mention(`⚡ Os presentes membros ${campominado.jogadores.map(i => `@`+i.id.split("@")[0]).join(` e `)} estão jogando no momento... Pfvr, aguarde a partida terminar 💣`)
  } else {
    if(campominado.chamado == sender) return mention(`*⚡ Você foi convidado pelo @${campominado.criador.split("@")[0]} para jogar "campo minado" nível ${campominado.dificuldade}... Pfvr, digite sim/não 💣*`)
    if(campominado.criador == sender) return mention(`*😓 Tô aguardando confirmação do @${campominado.chamado.split("@")[0]}...* (Caso queira desistir, use ${prefix}resetmina)`)
    return reply("⚡ Há uma partida em andamento neste grupo 💣")
  }
}
break

case 'resetmina': case 'rmn':
if(!isGroup) return reply(enviar.msg.grupo)
game = `./jogos/mina-game/campo-minado-${from}.json`
if(!fs.existsSync(game)) return reply("Nenhuma sessão em andamento neste grupo 💣😜")
campominado = JSON.parse(fs.readFileSync(game))
if(!isGroupAdmins && campominado.criador != sender) return reply("[ ❗ ] apenas admins do grupo ou quem começou o jogo podem cancelar a partida ❌")
fs.unlinkSync(game)
reply("Partida cancelada 💣😜")
break

case 'infominagame':
reply(`💣 O primeiro passo é chamar alguém pra jogar e escolher a dificuldade, que pode ser easy, medium ou hard... Use o comando ${prefix}campo-minado

😜 Após configurada a dificuldade e chamado o jogador, o mesmo terá que responder com sim/não para iniciar ou terminar o jogo.

🎮 Uma vez aceito, já em jogo, ambos os jogadores terão 3 chances de errar... Basta responder a coordenada como 2b ou 5a, sempre colocando a letra após o número.

🏆 Vence o jogador que mais sobreviver`)
break

case 'freefire': case 'free-fire': {
if(!isGroup) return reply(enviar.msg.grupo)
let { key } = await astaup.sendMessage(from, {text: `Partida iniciada! ⚠`}, {quoted: info})
}
break

case 'addforca':
if(!isOwner) return reply(enviar.msg.dono)
if(contar(q, `/`) != 2) return reply(`Retorne após o comando o tema, a palavra e a dica que você deseja adicionar...
Ex: veículo/carro/tem 4 rodas`)
var [tema, palavra, dica] = q.split(`/`)
rgWordForcaGame(tema, palavra, dica);
txt = `🎗 *_Forca registrada com sucesso_* 🎗
🎭 *Tema:* ${iniMai(tema)}
🎨 *Palavra:* ${iniMai(palavra)}
🧶 *Dica:* ${iniMai(dica)}`
reply(txt)
break

case 'rmforca':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`KD a palavra que você quer deletar?`)
rmWordForcaGame(reply, q);
break

case 'rmtema':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply(`KD o tema que você quer deletar?`)
rmThemeForcaGame(reply, q);
break

case 'listword': case 'listaforca':
if(!isOwner) return reply(enviar.msg.dono)
if(forcaWord.length <= 0) return reply(`[❗] não há palavras salvas ❌`)
txt = forcaWord.map(a => `🎈 _*Tema:* ${iniMai(a.title)}_
📚 _*Palavras ↴*_
${a.words.map(b => `\t🎲 *Nome:* ${iniMai(b.nome)}
\t🧸 *Dica:* ${iniMai(b.desc)}`).join(`\n\n`)}`).join(`\n\n-\n\n`)
reply(txt)
break

case 'forca': case 'startforca':
if(!isGroup) return reply(enviar.msg.grupo)
reagir("🎗")
if(!existSomeWordForcaGame) return reply(`Não há palavras na database do bot para seres distribuidas... Chame o dono do bot para ele adicionar mais palavras 🥰`)
if(isForcaGame(from)) {
  reply(`🎗 Há uma sessão em andamento... Use ${prefix}fc para responder ou ${prefix}rrfc para reiniciar`)
  await sleep(5000)
  return sendTextForcaGame(reply, prefix, from)
}
startForcaGame(reply, prefix, from)
break

case 'myforca': case 'minhaforca': case 'myf':
addUsuarioForca(sender);
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
sendUrlText(from, getUsuDatabaseForca(sender, barrinha), pushname, ``, ppimg, `https://wa.me/`+sender.split("@")[0], seloblk)
break

case 'fc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isForcaGame(from)) return reply(`Não há nenhum jogo em andamento... Para começar, use ${prefix}forca`)
if(!q) return reply(`Retore após o comando a letra ou a palavra toda da forca, ex:
${prefix+command} ${randomLetra.toLowerCase()}`)
jogarLetraForcaGame(mention, from, sender, prefix, q);
break

case 'rfc': case 'rrfc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isForcaGame(from)) return reply(`Não há nenhum jogo em andamento... Para começar, use ${prefix}forca`)
if(command == "rrfc") return restartForcaGame(reply, prefix, from);
resetForcaGame(from);
reply(`🧸 Partida de forca encerrada com sucesso..`)
break

case 'getfile':
if(!isOwner) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!q && !q.startsWith(`./`)) return reply("Tá faltando o caminho até o arquivo... Ex: "+prefix+command+" ./index.js")
try {
nome = q.split(`/`)[contar(q, `/`)]
reply("*Enviando no nosso grupo privado o arquivo "+nome+"*")
await sleep(1000)
astaup.sendMessage(obrigadoEXT.idprivategp, {document: {url: q}, fileName: nome, mimetype: `application/${nome.endsWith(`js`) ? `javascript` : `json`}`})
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`) }
break

case 'criarjson':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o nome do json?")
qp = q.toLowerCase()
if(fs.existsSync(`./database/${qp}.json`)) return reply("JSON já existente")
try {
fs.writeFileSync(`./database/${qp}.json`, JSON.stringify([]))
reply("JSON criado com sucesso ✅")
} catch { reply("Erro") }
break

case 'rmjson':
if(!isOwner) return reply(enviar.msg.dono)
if(!q) return reply("KD o nome do json?")
qp = q.toLowerCase()
if(!fs.existsSync(`./database/${qp}.json`)) return reply("JSON não existente")
try {
fs.unlinkSync(`./database/${qp}.json`)
reply("JSON deletado com sucesso ✔️")
} catch { reply("Erro") }
break

case 'anagrama':
if(!isGroup) return reply('Comando apenas para grupos')
if(!isModobn) return reply(enviar.msg.modobz)
ana = alerandom(palavrasANA.length)
anagrama = `./jogos/anagrama/anagrama-${from}.json`
if(!isGroupAdmins && !fs.existsSync(anagrama)) return reply("Somente admins podem iniciar o jogo do anagrama")
if(args.join(' ') === '1') {
if(fs.existsSync(anagrama)) {
dataAnagrama = JSON.parse(fs.readFileSync(anagrama))
reply(`*O jogo já foi iniciado neste grupo:*
× *Palavra:* ${shuffle(dataAnagrama.embaralhada)}
× *Dica:* ${dataAnagrama.dica}
`)
} else {
saveJSON(palavrasANA[ana], anagrama)
astaup.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ *DESCUBRA A PALAVRA*
│➽ *ANAGRAMA:* ${shuffle(palavrasANA[ana].embaralhada)}
│➽ *DICA:* ${palavrasANA[ana].dica}
╰────────────────────────
`}, {quoted: info})
}
} else if(args.join(' ') ==='0') {
if(!fs.existsSync(anagrama)) return reply('Não tem como desativar o jogo do anagrama, pôs ele não foi ativado')
fs.unlinkSync(anagrama)
reply("Jogo anagrama desativado com sucesso neste grupo...")
} else return reply('Use 1 para ativar o jogo do anagrama\nPara desativar use anagrama 0')
break

case 'revelaranagrama': case 'ran': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
ana = alerandom(palavrasANA.length)
anagrama = `./jogos/anagrama/anagrama-${from}.json`
if(!fs.existsSync(anagrama)) return reply("Jogo anagrama não iniciado...")
dataAnagrama = JSON.parse(fs.readFileSync(anagrama))
resp = dataAnagrama.original
fs.unlinkSync(anagrama)
var bglh = [
`[ ❗ ] Reiniciando o jogo em 5️⃣`,
`[ ❗ ] Reiniciando o jogo em 4️⃣`,
`[ ❗ ] Reiniciando o jogo em 3️⃣`,
`[ ❗ ] Reiniciando o jogo em 2️⃣`,
`[ ❗ ] Reiniciando o jogo em 1️⃣`,
`[ ❗ ] Reiniciando o jogo em 0️⃣`
]
let { key } = await astaup.sendMessage(from, {text: `💢 FINALIZANDO GAME 💢`}, {quoted: info})//primeira mensagem
await sleep(1000)
await astaup.sendMessage(from, {text: `*Fim de jogo, a palavra era ↴*
⇒ 
*Irei resetar o jogo* 😕`, edit: key }, {quoted: info})
await sleep(1000)
for(let b = 0; b < resp.length; b++) {
await astaup.sendMessage(from, {text: `*Fim de jogo, a palavra era ↴*
⇒ ${resp.slice(0, b+1)}
*Irei resetar o jogo* 😕`, edit: key }, {quoted: info})
}
await sleep(1000)
for(let i = 0; i < bglh.length; i++) {
await sleep(1000)
await astaup.sendMessage(from, {text: bglh[i], edit: key }, {quoted: info})
}
saveJSON(palavrasANA[ana], anagrama)
await astaup.sendMessage(from, {text: `╭─────≽「 👾 ANAGRAMA 👾 」
│➽ *DESCUBRA A PALAVRA*
│➽ *ANAGRAMA:* ${shuffle(palavrasANA[ana].embaralhada)}
│➽ *DICA:* ${palavrasANA[ana].dica}
╰────────────────────────`, edit: key }, {quoted: info})
}
break

case 'quizanimais':
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Use ${prefix+command} 1/0 _(1 para começar o jogo, e 0 para desligar)_`)
if(Number(args[0]) === 1) {
if(!isGroupAdmins && !fs.existsSync(`./jogos/quizanimais/quizanimais-${from}.json`)) return reply("Somente admins podem iniciar o jogo... Após iniciado, qualquer membro poderá usar 🐠")
if(fs.existsSync(`./jogos/quizanimais/quizanimais-${from}.json`)) {
QuizbyMath = JSON.parse(fs.readFileSync(`./jogos/quizanimais/quizanimais-${from}.json`))
reply(`_O quiz animais já foi iniciado neste grupo... Tente acertar o animal na foto abaixo_ 🌚`)
setTimeout(() => {
astaup.sendMessage(from, {image: {url: QuizbyMath.foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`})
}, 500)
} else {
matheuzinho = Math.floor(Math.random() * quizanimais.length)
fs.writeFileSync(`./jogos/quizanimais/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[matheuzinho])}`)
astaup.sendMessage(from, {image: {url: quizanimais[matheuzinho].foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`}, {quoted: seloctt})
}
} else if(Number(args[0]) === 0) {
if(!fs.existsSync(`./jogos/quizanimais/quizanimais-${from}.json`)) return reply("Não tem como finalizar um jogo não iniciado...")
fs.unlinkSync(`./jogos/quizanimais/quizanimais-${from}.json`)
reply("Quiz animais finalizado com sucesso ✅")
}
break

case 'revelarquiz': case 'rq':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!fs.existsSync(`./jogos/quizanimais/quizanimais-${from}.json`)) return reply("Não tem como finalizar um jogo não iniciado...")
QuizbyMath = JSON.parse(fs.readFileSync(`./jogos/quizanimais/quizanimais-${from}.json`))
reply(`✅ *Jogo finalizado... O animal era:* ${QuizbyMath.original}

*Irei reiniciar o jogo...*`)
fs.unlinkSync(`./jogos/quizanimais/quizanimais-${from}.json`)
setTimeout(() => {
matheuzinho = Math.floor(Math.random() * quizanimais.length)
fs.writeFileSync(`./jogos/quizanimais/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[matheuzinho])}`)
astaup.sendMessage(from, {image: {url: quizanimais[matheuzinho].foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`}, {quoted: seloctt})
}, 4000)
break

case "button_beta":
case 'buttons': //primeiro a criar esse case usando a baileys pra aparecer no WhatsApp beta atualizado foi o venom
//qualquer outro é kiber
//By Venom Mods
if(!isOwner) return
venom = astaup
prefixo = prefix
botões = [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Nome do Botão",
sections: [
{
title: "Dono / Criador",
rows: [
{           
title: "Menu dono",
id: `${prefixo}menudono`,
disabled: false
}
]
},
{       
title: "Travas / Crash",
rows: [
{           
title: "Multi Crash / Travas",
id: `${prefixo}crash`,
disabled: false
}
]
},
{
rows: [
{           
title: "Menu Crash",
id: `${prefixo}menubug`,
disabled: false
}
]
},                    
{
rows: [
{
title: "Menu Vip",
id: `${prefixo}menuvip`,
disabled: false
}
]
}                                                                                  
]
}) 
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Black Site",
url: "https://blacksystemofc.com.br"
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Voltar",
id: prefixo + "menu"
})
},
{
name: "voice_call",
buttonParamsJson: JSON.stringify({
})
},
{
name: "cta_reminder",
buttonParamsJson: JSON.stringify({
})
},
{
name: "form_message",
buttonParamsJson: JSON.stringify({
})
}                                                     
];

cardImage = {
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image: { url: logoslink.logo } }, { upload: venom.waUploadToServer })),
hasMediaAttachment: true,
title: `Seu texto aqui\n\nBy Venom Mods`,
subtitle: `sim`
}),
nativeFlowMessage: {
buttons: botões,
messageParamsJson: ""
}
};

let venomzin_buttons = generateWAMessageFromContent(from, {
interactiveMessage: {
contextInfo: {
participant: sender,
mentionedJid: [sender, "559784388524@s.whatsapp.net"],
quotedMessage: info.message
},        
carouselMessage: {
cards: [cardImage],
messageVersion: 1,
}
}
},{});

venom.relayMessage(from, venomzin_buttons.message, { messageId: venomzin_buttons.key.id });
break;

case 'blk': //primeiro a criar esse case usando a baileys pra aparecer no WhatsApp beta atualizado foi o venom
//qualquer outro é kiber
//By Venom Mods
if(!isOwner) return
venom = astaup
prefixo = prefix
botões = [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Nome do Botão",
sections: [
{
title: "Dono / Criador",
rows: [
{           
title: "Menu dono",
id: `${prefixo}menudono`,
disabled: false
}
]
},
{       
title: "Travas / Crash",
rows: [
{           
title: "Multi Crash / Travas",
id: `${prefixo}crash`,
disabled: false
}
]
},
{
rows: [
{           
title: "Menu Crash",
id: `${prefixo}menubug`,
disabled: false
}
]
},                    
{
rows: [
{
title: "Menu Vip",
id: `${prefixo}menuvip`,
disabled: false
}
]
}                                                                                  
]
}) 
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "VenomWeb Site",
url: "https://venomweb.site"
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Voltar",
id: prefixo + "menu"
})
},
{
name: "voice_call",
buttonParamsJson: JSON.stringify({
})
},
{
name: "cta_reminder",
buttonParamsJson: JSON.stringify({
})
},
{
name: "form_message",
buttonParamsJson: JSON.stringify({
})
}                                                     
];

let venomzin_buttons2 = generateWAMessageFromContent(from, {
interactiveMessage: {
body: {text: `Texto`},
contextInfo: {
participant: sender,
mentionedJid: [sender],
quotedMessage: info.message
},
nativeFlowMessage: {
  buttons: botões,
  messageParamsJson: "",
}
}
}, {});

venom.relayMessage(from, venomzin_buttons2.message, { messageId: venomzin_buttons2.key.id });
break;

case 'blk5':
if(!isOwner) return
astaup.relayMessage(
      from,
      {
        interactiveMessage: {
          headerType: `IMAGE`,
          body: {text: `Opa mn @${sender.split("@")[0]}`},
          footer: {text: "@m4thxyz_"},
    contextInfo: {participant: sender, mentionedJid: [sender], quotedMessage: info.message},
          nativeFlowMessage: {
            buttons: [{
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Site do Black",
                url: "https://astaup.online",
                merchant_url: "https://astaup.online"
              }),
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "Copie Minha Bucetinha",
                copy_code: "https://xvideos.com.br"
              }),
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "PLAY",
                id: "/play",
                disabled: false
              }),
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "PING",
                id: "/ping",
                disabled: false
              }),
            }],
            messageParamsJson: "",
          },
        },
      },
      {}
    )
break

case 'hentaipack':
if(!isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply(enviar.msg.vip)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true})
} else {
setTimeout(() => {reagir("😳")}, 300)
if(isGroup && !isNsfw) return reply(`Ative o modo +18 primeiro`)
botaoblk = [
{title: "ᴍᴀᴛʜᴇᴜᴢɪɴʜᴏ╰⁔╯ᴅᴏᴍɪɴᴀ",
rows: [
{title: "⸺͟͞ꪶASS 🍑", rowId: `${prefix}ass`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿAHEGAO 🤤", rowId: `${prefix}ahegao`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿBDSM 🔗", rowId: `${prefix}bdsm`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿBLOWJOB 😮", rowId: `${prefix}blowjob`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿCUCKOLD 💥", rowId: `${prefix}cuckold`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿCUM 🥵", rowId: `${prefix}cum`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿERO 🕳️", rowId: `${prefix}ero`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿFEMDOM 🍆", rowId: `${prefix}femdom`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿFOOT 🦶🏼", rowId: `${prefix}foot`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿGANGBANG 🪑", rowId: `${prefix}gangbang`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿGLASSES 🪟", rowId: `${prefix}glasses`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿHENTAI 🎞️", rowId: `${prefix}hentai`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿJAHY 🐈‍⬛", rowId: `${prefix}jahy`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿMASTURBATION 💦", rowId: `${prefix}masturbation`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿORGY 👥", rowId: `${prefix}orgy`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿPANTIES 👙", rowId: `${prefix}panties`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿPUSSY 🌸", rowId: `${prefix}pussy`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿBOOBS 🤲🏽", rowId: `${prefix}boobs`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿTENTACLES 🌿", rowId: `${prefix}tentacles`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿTHIGHS 🗺️", rowId: `${prefix}thighs`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿYURI 🌚", rowId: `${prefix}yuri`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿZETTAI 😏", rowId: `${prefix}zettai`, description: NomeDoBot},
{title: "⏤͟͟͞͞ ꦿKASEDAIKI 🍼", rowId: `${prefix}kasedaiki`, description: NomeDoBot}]
}]
sendlistA(sender, `ㅤㅤㅤ \`\`\`▧⃯⃟só as mais brabas⃤\`\`\``, `ㅤ${NomeDoBot}`, `🔞 *PACK-LOGOS* 🔞`, `〘 ABRIR-MENU 〙`, botaoblk, info)
reply(`Te enviei PV 😏`)
}
break

//início do nsfw

case 'loli':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { loli } = require('./database/midia/nsfw/animes.js')
var totalnsfw = loli[Math.floor(Math.random() * loli.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'trap':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { trap } = require('./database/midia/nsfw/animes.js')
var totalnsfw = trap[Math.floor(Math.random() * trap.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ass':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ass } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = ass[Math.floor(Math.random()*ass.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ahegao':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ahegao } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = ahegao[Math.floor(Math.random()*ahegao.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'bdsm':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { bdsm } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = bdsm[Math.floor(Math.random()*bdsm.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'blowjob':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { blowjob } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = blowjob[Math.floor(Math.random()*blowjob.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'cuckold':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { cuckold } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = cuckold[Math.floor(Math.random()*cuckold.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'cum':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { cum } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = cum[Math.floor(Math.random()*cum.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ero':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ero } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = ero[Math.floor(Math.random()*ero.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'femdom':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { femdom } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = femdom[Math.floor(Math.random()*femdom.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'foot':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { foot } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = foot[Math.floor(Math.random()*foot.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'gangbang':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { gangbang } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = gangbang[Math.floor(Math.random()*gangbang.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ganbganb':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ganbganb } = require('./database/midia/nsfw/animes.js')
var totalnsfw = ganbganb[Math.floor(Math.random() * ganbganb.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'glasses':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { glasses } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = glasses[Math.floor(Math.random()*glasses.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'hentai':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { hentai } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = hentai[Math.floor(Math.random()*hentai.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'hentai2':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { hentai2 } = require('./database/midia/nsfw/animes.js')
var totalnsfw = hentai2[Math.floor(Math.random() * hentai2.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'nekos': {
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { neko2 } = require('./database/midia/nsfw/animes.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
}
break

case 'neko2': {
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { neko2 } = require('./database/midia/nsfw/hentai.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
}
break

case 'jahy':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { jahy } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = jahy[Math.floor(Math.random()*jahy.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'masturbation':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { masturbation } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = masturbation[Math.floor(Math.random()*masturbation.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'orgy':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { orgy } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = orgy[Math.floor(Math.random()*orgy.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'panties':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { panties } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = panties[Math.floor(Math.random()*panties.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'pussy':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { pussy } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = pussy[Math.floor(Math.random()*pussy.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'boobs':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { boobs } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = boobs[Math.floor(Math.random()*boobs.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'tentacles':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { tentacles } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = tentacles[Math.floor(Math.random()*tentacles.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'thighs':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { thighs } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = thighs[Math.floor(Math.random()*thighs.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'yuri':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { yuri } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = yuri[Math.floor(Math.random()*yuri.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'zettai':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { zettai } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = zettai[Math.floor(Math.random()*zettai.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'kasedaiki':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir("🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return astaup.sendMessage(from, {audio: {url:'./database/midia/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir("😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { kasedaiki } = require("./database/midia/nsfw/nsfw.js")
var totalnsfw = kasedaiki[Math.floor(Math.random()*kasedaiki.length)]
astaup.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'amador':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 41) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/AmadorVideo/${numb}.mp4`}
   mag = '🔞AmadorVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break


case 'onlyfans':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 47) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/OnlyfansVideo/%20${numb}.mp4`}
   mag = '🔞OnlyfansVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'porno':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 15) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/PornoVideo/${numb}.mp4`}
   mag = '🔞PornoVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'egrilvideo':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")  
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 14) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/EgrilVideo/%20${numb}.mp4`}
   mag = '🔞EgrilVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'aline':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 65) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/%20${numb}.jpg`}
    mag = '🔞AlineFaria🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'alifox':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 59) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFox/%20${numb}.jpg`}
   mag = '🔞AlineFox🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'alycai':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlyciaRibeiro/%20${numb}.jpg`}
   mag = '🔞AlyciaRibeiro🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'amichan':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Amiichan/%20${numb}.jpg`}
   mag = '🔞Amiichan🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'aninha':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AninhaLopes/%20${numb}.jpg`}
   mag = '🔞AninhaLopes🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'baby':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 36) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BabyMatoso/%20${numb}.jpg`}
   mag = '🔞BabyMatoso🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'belle':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 31) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BelleDelphine/%20${numb}.jpg`}
   mag = '🔞BelleDelphine🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'brenda':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 25) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BrendaTrindade/%20${numb}.jpg`}
   mag = '🔞BrendaTrindade🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'cami':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/CamiBrito/%20${numb}.jpg`}
   mag = '🔞CamiBrito🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'clowniac':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Cclowniac/%20${numb}.jpg`}
   mag = '🔞Cclowniac🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'galvao':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 32) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/FehGalvao/%20${numb}.jpg`}
   mag = '🔞FehGalvao🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'giovanna':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 34) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/GiovannaCampomar/%20${numb}.jpg`}
   mag = '🔞GiovannaCampomar🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'isadora':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${numb}.jpg`}
   mag = '🔞ISADORA MARTINEZ🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'isa':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 21) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${numb}.jpg`}
   mag = '🔞IsaWaifu🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'lay':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 25) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${numb}.jpg`}
   mag = '🔞LayNuniz🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'leticia':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LeticiaShirayuki/%20${numb}.jpeg`}
   mag = '🔞LeticiaShirayuki🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'marina':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 27) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${numb}.jpg`}
   mag = '🔞MarinaMui🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'maru':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 40) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg`}
   mag = '🔞MaruKarv🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'princesa':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 32) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${numb}.jpg`}
   mag = '🔞McPrincesa🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'meadinha':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 33) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Me1adinha/%20${numb}.jpg`}
   mag = '🔞Me1adinha🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'nath':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 23) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NathBister%C3%A7o/%20${numb}.jpg`}
   mag = '🔞NathBister🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'nega':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 21) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NegaBarbie/%20${numb}.jpg`}
   mag = '🔞NegaBarbie🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'polonesa':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PolonesaDoHype/%20${numb}.jpg`}
   mag = '🔞PolonesaDoHype🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'pornofot':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 44) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoFoto/%20${numb}.jpg`}
   mag = '🔞PornoFoto🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'rute':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/RuteRocha/%20${numb}.jpg`}
   mag = '🔞RuteRocha🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'vita':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg`}
   mag = '🔞VitaCelestine🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'carnie':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg`}
   mag = '🔞carniello🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'egril':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
   numb = Math.floor(Math.random() * 36) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${numb}.jpg`}
   mag = '🔞egril🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'neter':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir("😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg`}
   mag = '🔞netersg🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await astaup.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'xvideos': case 'xv':
reagir("😳")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
if(!isUrl(q)) {
ABC = await fetchJson(`${blacksite}/api/xvsearch?q=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
i = ABC.resultado[alerandom(ABC.resultado.length)]
media = await fetchJson(`${blacksite}/api/xvideos?url=${i.link}&apikey=`+API_KEY_FREE)
txt = `📝 *TÍTULO:* ${i.titulo}
🤭 *DESCRIÇÃO:* ${media.resultado.desc}
⏳ *DURAÇÃO:* ${i.duracao}
🔗 *LINK:* ${i.link}`
sendUrlText(sender, txt, `🔞 Search XV - `+i.titulo, media.resultado.desc, i.thumbnail, i.link, info)
await sleep(1000)
sendVideo(sender, media.resultado.download)
} else {
media = await fetchJson(`${blacksite}/api/xvideos?url=${q}&apikey=`+API_KEY_FREE)
ABC = await fetchJson(`${blacksite}/api/info/translate?texto=${encodeURI(media.resultado.titulo)}&ling=pt&apikey=`+API_KEY_FREE)
if(isGroup) reply(`Chega PV lek 😈`)
await sleep(1000)
sendVideo(sender, media.resultado.download, "🔞 XV - "+ABC.result, info)
}
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro") }
break

case 'xvs': case 'xvsearch': case 'xvideossearch':
reagir("🔞")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
ABC = await fetchJson(blacksite+`/api/xvsearch?q=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
blk = []
for(i of ABC.resultado) {
blk.push({title: i.titulo, body: `⏱ ${i.duracao} - ${NomeDoBot}`, command: prefix+`xv `+i.link})
}
sendListB(from, {text: `🔥 *Exibindo ${ABC.resultado.length} resultados para a sua pesquisa:*`, footer: `_${q}_`}, astaup, `🔞 RESULTADOS AQUI 🔞`, [{title: `APENAS MAIORES DE 18 ANOS`, options: blk}], seloctt)
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro") }
break

case 'xnxx':
reagir("🔥")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
if(!isUrl(q)) {
ABC = await fetchJson(blacksite+`/api/xnxx?q=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
i = ABC.resultado[alerandom(ABC.resultado.length)]
media = await fetchJson(blacksite+`/api/xnxxdl?url=${i.link}&apikey=`+API_KEY_FREE)
txt =
`📝 *TÍTULO:* ${i.title}
⏳ *DURAÇÃO:* ${i.duration}
🥏 *QUALIDADE:* ${i.quality}
📊 *VIEWS:* ${i.views}
🔗 *LINK:* ${i.link}`
sendUrlText(sender, txt, `🧿 Search XNXX - `+i.title, media.resultado.keyword, i.thumb, i.link, info)
sendVideo(sender, media.resultado.url)
} else {
media = await fetchJson(blacksite+`/api/xnxxdl?url=${q}&apikey=`+API_KEY_FREE)
if(isGroup) reply(`Chega PV lek 😈`)
await sleep(1000)
sendVideo(sender, media.resultado.url)
}
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply("Erro") }
break

case 'pornhubsearch': case 'phsch': case 'ph':
reagir("🔥")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
if(!isUrl(q)) {
ABC = await fetchJson(blacksite+`/api/phsearch?q=${encodeURI(q)}&apikey=`+API_KEY_FREE)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
i = ABC.resultado[alerandom(ABC.resultado.length)]
media = await fetchJson(blacksite+`/api/pornhub?url=${i.url}&apikey=`+API_KEY_FREE)
txt =
`📝 *TÍTULO:* ${i.title}
⏳ *DURAÇÃO:* ${i.duration}
📊 *VIEWS:* ${i.views}
💁🏼‍♀️ *ATRIZES:* ${media.result.pornstars.join(`, `)}
🔮 *CANAL:* ${media.result.provider.username}
🔗 *LINK:* ${i.link}`
sendUrlText(sender, txt, `☣ Search PORNHUB - `+i.title, media.result.tags.join(`, `), i.preview, i.link, info)
try {sendVideo(sender, media.result.mediaDefinitions[0].videoUrl)} catch {}
} else {
media = await fetchJson(blacksite+`/api/pornhub?url=${q}&apikey=`+API_KEY_FREE)
a = media.result
ABC = await fetchJson(blacksite+`/api/info/translate?texto=${encodeURI(a.title)}&ling=pt&apikey=`+API_KEY_FREE)
if(isGroup) reply(`Chega PV lek 😈`)
await sleep(1000)
txt =
`📝 *TÍTULO:* ${a.title}
⏳ *DURAÇÃO:* ${a.durationFormatted}
🎲 *POSTADO:* ${a.uploadDate}
📊 *VIEWS:* ${largeNumber(a.views)}
✔ *LIKES:* ${a.vote.up}
✖ *DESLIKES:* ${a.vote.down}
📊 *CLASSIFICAÇÃO:* ${a.vote.rating}

💁🏼‍♀️ *ATRIZES:*
${a.pornstars.map(p => `• ${p}`).join(`\n`)}

🎭 *CATEGORIAS:*
${a.categories.map(c => `• ${c}`).join(`\n`)}

🔮 *CANAL:* ${a.provider.username}
🔗 *LINK:* https://pt.pornhub.com${a.provider.url}`
sendUrlText(sender, txt, a.title, a.tags.join(`, `), a.preview, a.url, info)
try {sendVideo(sender, a.mediaDefinitions[0].videoUrl, "🔞 PH - "+ABC.result, info)} catch {}
}
} catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply(`Erro`) }
break

case 'plaq': case 'plaq1':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
astaup.sendMessage(sender, {image: {url: `https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${q}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`}, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq2':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
astaup.sendMessage(sender, {image: {url: `https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`}, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq3':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
astaup.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq4':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
astaup.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq5':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
astaup.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq6':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
astaup.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

//fim do nsfw

case 'chance':
setTimeout(() => {reagir("🤔")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
var avb = body.slice(7)
if(args.length < 1) return astaup.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do M4 ganhar na loteria`}, {quoted: seloctt})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}% 🤷🏻‍♂️`
mention(hasil)
break

case 'nazista':
  setTimeout(() => {reagir("💂🏼‍♂️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {text: `*Salve Hitler* 💂🏼‍♂️

⇒ @${sender_ou_n.split("@")[0]}

*Sai dessa vida...*`, mentions: [sender_ou_n]})
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.nazista}, caption: `*O QUANTO VOCÊ É NAZISTA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  NAZISTA 卐

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gay':
  setTimeout(() => {reagir("🏳️‍🌈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {text: `*Mn... Tu é ?* 🫵🏽🤨🏳️‍🌈

⇒ @${sender_ou_n.split("@")[0]}

*Pesquisando...*`, mentions: [sender_ou_n]})
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 41 ) {var bo = 'você é né?😏'} else if(boiola == 42 ) {var bo = 'você é né?😏'} else if(boiola == 43 ) {var bo = 'você é né?😏'} else if(boiola == 44 ) {var bo = 'você é né?😏'} else if(boiola == 45 ) {var bo = 'você é né?😏'} else if(boiola == 46 ) {var bo = 'você é né?😏'} else if(boiola == 47 ) {var bo = 'você é né?😏'} else if(boiola == 4 ) {var bo = 'você é né?😏'} else if(boiola == 49 ) {var bo = 'você é né?😏'} else if(boiola == 50 ) {var bo = 'você é ou não?🧐'} else if(boiola > 51) {var bo = 'você é gay🙈'
}
astaup.sendMessage(from, {image: {url: links.gay}, caption: `*O QUANTO VOCÊ É GAY ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  GAY 🌈

${bo}

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: seloctt})
}, 7000)
break

case 'feio': case 'feia':
  setTimeout(() => {reagir("🤡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {text: `*Kkk pesquisando sua ficha de feio (a)* 🤡

⇒ @${sender_ou_n.split("@")[0]}

*Um segundo...*`, mentions: [sender_ou_n]})
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'Ainda tá na média'} else if(feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'Feiooo'} else if(feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if(feio > 51) {var bo = 'você é Feio demais 🙈'} 

astaup.sendMessage(from, {image: {url: links.feio}, caption: `*O QUANTO VOCÊ É FEIO (A)?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  FEIO (A) 🤡
 
 ${bo}

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: seloctt})
}, 7000)
break 

case 'corno': case 'corna':
  setTimeout(() => {reagir("🤟🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Foi um chifre desse que a NASA usou pra fazer contato com os ETs* 🐂

⇒ @${sender_ou_n.split("@")[0]}

*Tamanho desse trem... kk*`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.corno}, caption: `*O QUANTO VOCÊ É CORNO (A)?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  CORNO 🤟🏽

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'hetero': case 'hétero':
  setTimeout(() => {reagir("🏁")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Puxando sua ficha de hétero* 🏁

⇒ @${sender_ou_n.split("@")[0]}

*Aguarde...*`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.hetero}, caption: `*O QUANTO VOCÊ É HÉTERO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  HÉTERO 🏁

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'vesgo': case 'vesga':
  setTimeout(() => {reagir("👀")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
if(command == `vesgo`) {
var txt = `irmão`
} else {
var txt = `irmã`
}
astaup.sendMessage(from, {text:`*Olha pra cá ${txt} kakakaka* 🙄

⇒ @${sender_ou_n.split("@")[0]}

*Um segundo...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.vesgo}, caption: `*O QUANTO VOCÊ É VESGO (A) ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  VESGO 👁️👄👁️

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'bebado': case 'bêbada':
  setTimeout(() => {reagir("🥴")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Bebe não mn, isso faz mal...* 🥴

⇒ @${sender_ou_n.split("@")[0]}

*Salvo se for pra esquecer o/a ex...* 😭`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.bebado}, caption:`*O QUANTO VOCÊ É BÊBADO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  BÊBADO 🥴

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gado': case 'gada':
  setTimeout(() => {reagir("🐂")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Ui, ${command} d+* 🐂

⇒ @${sender_ou_n.split("@")[0]}

*Calma ae kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.gado}, caption: `*O QUANTO VOCÊ É GADO(A)?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  GADO 👉🏽 🐂👈🏽

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gostoso':
  setTimeout(() => {reagir("😏")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Vamos ver o quanto você é gostoso 😏

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.gostoso}, caption: `*O QUANTO VOCÊ É GOSTOSO ?*

⇒ @${sender_ou_n.split("@")[0]}

Você é ✮${random}✮ gostoso 😏

${NomeDoBot}🎖️`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gostosa':
  setTimeout(() => {reagir("😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Pesquisando sua ficha de gostosa* 😳

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.gostosa}, caption: `*O QUANTO VOCÊ É GOSTOSA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  GOSTOSA 😳

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'pau':
  setTimeout(() => {reagir("😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Medindo o tamanho do seu pau* 😳\n\n⇒ @${sender_ou_n.split("@")[0]}\n\n*Calma ae kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 30)}`
astaup.sendMessage(from, {image: {url: links.pau}, caption: `*Oh mds*

⇒ @${sender_ou_n.split("@")[0]}

Seu pau mede ✮${random}cm✮ 😳

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'bct':
case 'buceta':
case 'xrc':
case 'xereca':
  setTimeout(() => {reagir("😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Medindo o tamanho da sua ${command}* 😳\n\n⇒ @${sender_ou_n.split("@")[0]}\n\n*Calma ae kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 20)}`
astaup.sendMessage(from, {image: {url: links.buceta}, caption: `*Eita kkkk*

⇒ @${sender_ou_n.split("@")[0]}

Sua ${command} mede ✮${random}cm✮ 😳

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'pocoto':
  setTimeout(() => {reagir("🐴")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/pocoto.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Cavalgando e pesquisando... O quanto você é pocoto* 🐴

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.pocoto}, caption: `*O QUANTO VOCÊ É POCOTO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  POCOTO 🐴

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'puta': case 'prostituta':
  setTimeout(() => {reagir("😈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Pesquisando o quanto você é puta* 😈

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.puta}, caption: `*O QUANTO VOCÊ É PUTA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  PUTA 😈

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'calvo': case 'calva':
  setTimeout(() => {reagir("👨🏼‍🦲")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Vai comprar um produto aí, enquanto eu pesquiso o quanto você é ${command}* 👨🏼‍🦲

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.calvo}, caption: `*O QUANTO VOCÊ É CALVO (A) ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  ${command.toUpperCase()} 👨🏼‍🦲

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'rico': case 'rica':
  setTimeout(() => {reagir("🤑")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Eitah kkk Já faz o pix enquanto eu puxo sua conta do banco* 🤑

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.rico}, caption: `*O QUANTO VOCÊ É RICO (A) ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  RICO 🤑

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'pobre':
  setTimeout(() => {reagir("🤣")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Zero comentários... Kkkk vamos ver o quanto você é pobre* 🤣

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.pobre}, caption: `*O QUANTO VOCÊ É POBRE ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  POBRE 🤣

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'lindo': case 'bonito':
setTimeout(() => {reagir("🤩")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Que que isso papai* 🤩

⇒ @${sender_ou_n.split("@")[0]}

*Olha essa lindeza...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.lindo}, caption: `*O QUANTO VOCÊ É LINDO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  LINDO 🤩

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'linda': case 'bonita':
  setTimeout(() => {reagir("😍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Opaisso ADM... cê tá vendo isso ?* 😍

⇒ @${sender_ou_n.split("@")[0]}

*Xonei nela...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.linda}, caption: `*O QUANTO VOCÊ É LINDA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  LINDA 😍

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'noia':
  setTimeout(() => {reagir("👽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*iqjakdksjgaijduaha eu sla* 👽

⇒ @${sender_ou_n.split("@")[0]}

*Calma ae, kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.noia}, caption: `*O QUANTO VOCÊ É NOIA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  NOIA 👽

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'sigma':
  setTimeout(() => {reagir("🍷")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Conversa de alto nível senhores* 🗿🍷

⇒ @${sender_ou_n.split("@")[0]}

*Aguarde...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.sigma}, caption: `*O QUANTO VOCÊ É SIGMA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  SIGMA 🗿🍷

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'beta':
  setTimeout(() => {reagir("🤓")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {text:`*Processando seu nível de beta* 🤓

⇒ @${sender_ou_n.split("@")[0]}

*Aguarde...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
astaup.sendMessage(from, {image: {url: links.beta}, caption: `*O QUANTO VOCÊ É BETA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  BETA 🤓

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'amor':
case 'odio':
if(!isModobn) return reply(enviar.msg.modobz)
if(command == `amor`) {
if(!menc_os2) return reply(`Marque a pessoa para quem você quer dedicar o seu amor...`)
astaup.sendMessage(from, {text: `Olá @${menc_os2.split('@')[0]}, ${tempo} ^^
@${sender.split('@')[0]} mandou dizer que te ama 🥺💖`, mentions: [menc_os2, sender]}, {quoted: seloctt})
enviarfigu(`./database/midia/figu/loveyou.webp`)
} else {
if(!menc_os2) return reply(`Marque a pessoa para quem você quer dedicar o seu ódio...`)
astaup.sendMessage(from, {text: `Olá @${menc_os2.split('@')[0]}, ${tempo} '-'
@${sender.split('@')[0]} mandou dizer que te odeia com todas as forças 🖕🏽😝`, mentions: [menc_os2, sender]}, {quoted: seloctt})
enviarfigu(`./database/midia/figu/hateyou.webp`)
}
break

case 'matar':
case 'mata':
  setTimeout(() => {reagir("💀")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não irei matar o meu dono... Mas posso matar você 😈')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.matar}, gifPlayback: true, caption: `*⚔️VOCÊ ACABA DE MATAR O (A)⚔️*

⇒ @${menc_os2.split('@')[0]} 🗡️👺

${NomeDoBot} ✨`, mentions: [menc_os2]})
break 


case 'beijo': case 'beijar':
  setTimeout(() => {reagir("💋")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.beijo}, gifPlayback: true, caption: `*VOCÊ DEU UM BEIJO TOTOSO NA (O)*

  ⇒  @${menc_os2.split('@')[0]} 👉🏽💞👈🏽🥺

 ✮${NomeDoBot}✮` , mentions: [menc_os2]})
break

case 'biografia':
case 'bio':
try {
  statusArr = await astaup.fetchStatus(sender_ou_n)
  if(Array.isArray(statusArr) && statusArr.length > 0 && statusArr[0].status && statusArr[0].status.status) {
    status = statusArr[0].status.status
  } else {
    status = "🔒 Privada 🔒"
  }
} catch {
  status = "🔒 Privada 🔒"
}
reply(status)
break

case 'tapa':
  setTimeout(() => {reagir("😏")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um tapa, a mensagem ou o @')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.tapa}, gifPlayback: true, caption: `*VOCÊ DEU UM TAPA NA RABA DA*

 ⇒   @${menc_os2.split('@')[0]} 👉🏽👈🏽😏

✮${NomeDoBot}✮`, mentions: [menc_os2]})
break

case 'chute':
case 'chutar':
  setTimeout(() => {reagir("🤡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Você não está autorizado a chutar meu dono... 😐')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.chute}, gifPlayback: true, caption: `*VOCÊ DEU UMA BICUDA NO(A)*

 ⇒ @${menc_os2.split('@')[0]} 👉🏽👈🏽🤡

✮${NomeDoBot}✮`, mentions: [menc_os2]})
break 

case 'abraco':
case 'abraço':
case 'abraçar':
  setTimeout(() => {reagir("🤗")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um abraço, a mensagem ou o @')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.abraco}, gifPlayback: true, caption: `*VOCÊ DEU UM ABRAÇO APERTADO NO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🫂

${NomeDoBot} 🤗`, mentions: [menc_os2]})
break

case 'soco':
case 'socar':
  setTimeout(() => {reagir("👊🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um soco, a mensagem ou o @')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Vou te descer na porrada irmão... Mexeu com meu dono; mexeu comigo 👊🏽')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.socar}, gifPlayback: true, caption: `*VOCÊ DEU UM MURRO NA CARA DO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🤡

${NomeDoBot} 👊🏽`, mentions: [menc_os2]})
break

case 'mano':
case 'bro':
case 'brother':
case 'toque':
case 'tocar':
setTimeout(() => {reagir("🤝🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um aperto de mão, a mensagem ou o @')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.bro}, gifPlayback: true, caption: `*VOCÊ DEU UM APERTO DE MÃO NO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🤜🏽🤛🏽

${NomeDoBot} 🤝🏽`, mentions: [menc_os2]})
break

case 'estuprar': case 'estupro':
setTimeout(() => {reagir("🌚")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
if(!isNsfw) return reply(enviar.msg.modonsfw)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer estuprar, a mensagem ou o @')
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
astaup.sendMessage(from, {video: {url: links.estuprar}, gifPlayback: true, caption: `*VOCÊ ACABOU DE ESTUPRAR O (A)*

⇒ @${menc_os2.split('@')[0]} 🕳️🙈

${NomeDoBot} 🌚🍷`, mentions: [menc_os2]})
break

case 'namorar': case 'namoracomigo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
setTimeout(() => {reagir("❤")}, 300)
if(!menc_os2) return reply(`Marque um usuário para pedir este em namoro, a mensagem ou o @`)
if(botNumber.includes(menc_os2)) return reply(`Não pode pedir o bot em namoro kkk 😂`)
if(sender.includes(menc_os2)) return reply(`Tu não pode pedir tu msm em namoro kkk 😂`)
if(userIsAffair(sender)) {
  x9cmd = getOutherCasal(sender)
  mention(`💞 Você já está ${userIsMarriage(sender) ? "casado" : "em um relacionamento sério"} com o/a @${x9cmd.split('@')[0]}.. 🥰`)
  await sleep(500)
  return sendButton(x9cmd, {text: `🐂 Aí ${getname(x9cmd)}, tua dupla @${sender.split("@")[0]} tá pedido outra pessoa em namoro ali...`, footer: `Vai perdoar esse chifre? 🐂😂`, mentions: [sender]}, astaup, [{type: `cmd`, text: `𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 💔`, command: prefix+`terminar`}])
}
if(userIsAffair(menc_os2)) {
  x9cmd = getOutherCasal(menc_os2)
  mention(`Cê para lek, O/a @${menc_os2.split("@")[0]} ${userIsAffair(sender) ? "é casado/a" : "está namorando"} com o/a @${x9cmd.split('@')[0]}`)
  await sleep(500)
  return sendButton(x9cmd, {text: `🐂 Aí ${getname(x9cmd)}, tão pedindo a tua dupla @${menc_os2.split("@")[0]} em namoro ali...`, footer: `Vai perdoar esse chifre? 🐂😂`, mentions: [menc_os2]}, astaup, [{type: `cmd`, text: `𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 💔`, command: prefix+`terminar`}])
}
delGeralOrder(menc_os2)
addOrderAffair(sender, menc_os2, from)
txt = `${tempo_emoji} *${tempo.toUpperCase()}*
⇒ @${menc_os2.split('@')[0]}

_${pushname} está te pedindo em namoro... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar_ 🥰`
astaup.sendMessage(from, {video: {url: links.namoracomigo}, caption: txt, gifPlayback: true, mentions: [menc_os2]}, {quoted: seloctt})
break

case 'casar': case 'casacomigo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
setTimeout(() => {reagir("💍")}, 300)
if(!menc_os2) return reply(`Marque um usuário para pedir este em casamento, a mensagem ou o @`)
if(botNumber.includes(menc_os2)) return reply(`Não pode pedir o bot em casamento kkk 😂`)
if(sender.includes(menc_os2)) return reply(`Tu não pode pedir tu msm em casamento kkk 😂`)
if(!userIsAffair(sender)) return reply(`Para pedir alguém em casamento, você precisa primeiro estar namorando essa pessoa...`)
x9cmd = getOutherCasal(sender)
if(userIsMarriage(sender)) {
  mention(`💞 Você já está casado/a com o/a @${x9cmd.split('@')[0]}.. 🥰`)
  await sleep(500)
  return astaup.sendMessage(x9cmd, {text: `🐂 Aí ${getname(x9cmd)}, tua dupla @${sender.split("@")[0]} tá pedido outra pessoa em casamento ali...`, mentions: [sender]}, {quoted: info})
}
if(menc_os2 != x9cmd) {
  mention(`Sua dupla é o/a @${x9cmd.split('@')[0]}... Fica esperto em 🐂`)
  await sleep(500)
  return astaup.sendMessage(x9cmd, {text: `🐂 Aí ${getname(x9cmd)}, tua dupla @${sender.split("@")[0]} tá pedido outra pessoa em casamento ali...`, mentions: [sender]}, {quoted: info})
}
if(isUserOrderMarriage(sender, true)) return mention(`👻 Você já pediu sua dupla @${x9cmd.split('@')[0]} em casamento... Aguarde resposta ou use ${prefix}cancelar`)
addOrderMarriage(sender, from)
txt = `${tempo_emoji} *${tempo.toUpperCase()}*
⇒ @${menc_os2.split('@')[0]}
  
_${pushname} está te pedindo em casamento... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar_ 🫴🏽💍`
astaup.sendMessage(from, {video: {url: links.casacomigo}, caption: txt, gifPlayback: true, mentions: [menc_os2]}, {quoted: seloctt})
break

case 'terminar': case 'termino': case 'divorciar': case 'divorcio':
if(Number(args[0]) !== 1) return reply(`Tem crtz disso ${pushname} ? Se estiver mesmo disposto a ${command.startsWith("termi") ? "terminar" : "divorciar"} com sua dupla, use ${prefix+command} 1`)
if(!userIsAffair(sender)) return reply(`Você não está se relacionando com ninguém para terminar ou se divorciar...`)
delGeralOrder(sender)
reply(`${command.startsWith("termi") ? "Término" : "Divórcio"} efetuado com sucesso 💔`)
break

case 'cancelar':
if(isUserOrderAffair(sender, true)) {
delGeralOrder(sender)
} else if(isUserOrderMarriage(sender, true)) {
saveOrderMarriage(sender, false)
} else return reply(`Não há pedidos de namoro nem casamento...`)
reply(`👻 O pedido a sua dupla foi cancelado com sucesso...`)
break

case 'alterardatadenamoro': case 'addn': {
if(!isOwner) return reply(enviar.msg.dono)
if(!q || contar(q, `|`) != 1 || contar(q, `/`) != 2) return mention(`Retorne o usuário que você quer alterar e a data após, exemplo:
${prefix+command} @${sender.split("@")[0]}|${sendHours("DD/MM/YYYY")}`)
var [usudtnmr, dtusunmr] = q.split("|")
usu = identArroba(usudtnmr)
if(!userIsAffair(usu)) return reply(`User não está namorando ninguém para efetuar essa mudança!`)
var [dianamoro, mesnamoro, anonamoro] = dtusunmr.split("/")
if(Number(dianamoro) < 1 || Number(dianamoro) > 31) return reply(`❌ "${dianamoro}" inválido, dias só valem de 1-31 [❗]`)
if(Number(mesnamoro) < 1 || Number(mesnamoro) > 12) return reply(`❌ "${mesnamoro}" inválido, meses só valem de 1-12 [❗]`)
if(Number(anonamoro) < 0) return reply(`❌ "${anonamoro}" inválido, anos só valem a partir de 0 [❗]`)
dn = (Number(dianamoro) < 10 ? '0' : '') + String(Number(dianamoro))
mn = (Number(mesnamoro) < 10 ? '0' : '') + String(Number(mesnamoro))
an = (Number(anonamoro) < 10 ? '000' : Number(anonamoro) < 100 ? '00' : Number(anonamoro) < 1000 ? '0' : '') + String(Number(anonamoro))
let ggo = getGeralOrder(usu)
ggo.dados.namoro[0].data.dia = dn
ggo.dados.namoro[0].data.mes = mn
ggo.dados.namoro[0].data.ano = an
saveRelationShip()
db = [usu, getOutherCasal(usu)]
mention(`💞 _A data de namoro da dupla ${db.map(d => '@'+d.split('@')[0]).join(' e ')} foi atualizada com sucesso para ${[dn, mn, an].join('/')}_`)
}
break

case 'alterardatadecasamento': case 'addc': {
if(!isOwner) return reply(enviar.msg.dono)
if(!q || contar(q, `|`) != 1 || contar(q, `/`) != 2) return mention(`Retorne o usuário que você quer alterar e a data após, exemplo:
${prefix+command} @${sender.split("@")[0]}|${sendHours("DD/MM/YYYY")}`)
var [usudtnmr, dtusunmr] = q.split("|")
usu = identArroba(usudtnmr)
if(!userIsMarriage(usu)) return reply(`User não está casado com sua dupla para efetuar essa mudança!`)
var [diacasamento, mescasamento, anocasamento] = dtusunmr.split("/")
if(Number(diacasamento) < 1 || Number(diacasamento) > 31) return reply(`❌ "${diacasamento}" inválido, dias só valem de 1-31 [❗]`)
if(Number(mescasamento) < 1 || Number(mescasamento) > 12) return reply(`❌ "${mesnamoro}" inválido, meses só valem de 1-12 [❗]`)
if(Number(anocasamento) < 0) return reply(`❌ "${anocasamento}" inválido, anos só valem a partir de 0 [❗]`)
dn = (Number(diacasamento) < 10 ? '0' : '') + String(Number(diacasamento))
mn = (Number(mescasamento) < 10 ? '0' : '') + String(Number(mescasamento))
an = (Number(anocasamento) < 10 ? '000' : Number(anocasamento) < 100 ? '00' : Number(anocasamento) < 1000 ? '0' : '') + String(Number(anocasamento))
let ggo = getGeralOrder(usu)
ggo.dados.casamento[0].data.dia = dn
ggo.dados.casamento[0].data.mes = mn
ggo.dados.casamento[0].data.ano = an
saveRelationShip()
db = [usu, getOutherCasal(usu)]
mention(`💘 _A data de casamento da dupla ${db.map(d => '@'+d.split('@')[0]).join(' e ')} foi atualizada com sucesso para ${[dn, mn, an].join('/')}_`)
}
break

case 'minhadupla': case 'dupla': {
setTimeout(() => {reagir("❤️‍🩹")}, 300);
if(!userIsAffair(sender)) return reply(`Você não está casado (a) com ninguém... Sinto muito 😕`)
if(isUserOrderAffair(sender, true)) return reply(`A pessoa quem você pediu em namoro não aceitou o pedido ainda... Portanto, não é possível consultar os dados da dupla 😶‍🌫️`)
let gct = getCasalTime(sender)
let ggo = getGeralOrder(sender)
let ndt = ggo.dados.namoro[0].data
let cdt = userIsMarriage(sender) ? ggo.dados.casamento[0].data : {}
db = [sender, getOutherCasal(sender)]

try { foto1 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${db[0].split("@")[0]}@c.us`, 'image'))}`)).data
} catch(e) { foto1 = semfoto }

try { foto2 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await astaup.profilePictureUrl(`${db[1].split("@")[0]}@c.us`, 'image'))}`)).data
} catch(e) { foto2 = semfoto }

logocasal = blacksite+`/api/canvas/ship?foto1=${foto1}&foto2=${foto2}&mat=100&fundo=https://telegra.ph/file/070ced9a362da470ae3f9.jpg`

if(gct.niver.affair) {
  if(gct.niver.month) {
    tempo_total = `_Namorando a exatamente ${gct.data.meses} m${gct.data.meses != 1 ? "eses" : "ês"}_`
    tempo_total += `\n\t\t*_Parabéns_* 💖✨`
  } else if(gct.niver.year) {
    tempo_total = `_Namorando a exatamente ${gct.data.anos} ano${gct.data.anos != 1 ? "s" : ""}_`
    tempo_total += `\n\t\t*_Parabéns_* 💗😍`
  }
} else if(gct.niver.marriage) {
  if(gct.niver.month) {
    tempo_total = `_Casados a exatamente ${gct.data.meses} m${gct.data.meses != 1 ? "eses" : "ês"}_`
    tempo_total += `\n\t\t*_Feliz aniversário_* 💘🛐`
  } else if(gct.niver.year) {
    tempo_total = `_Casados a exatamente ${gct.data.anos} ano${gct.data.anos != 1 ? "s" : ""}_`
    tempo_total += `\n\t\t*_Feliz aniversário_* 😍💍`
  }
} else tempo_total = gct.message

data_pedido = `📆⃤ Namorando desde ${ndt.dia}/${ndt.mes}/${ndt.ano}`
if(userIsMarriage(sender)) data_pedido += `\n💍⃤ Casados desde ${cdt.dia}/${cdt.mes}/${cdt.ano}`

txt = `
💕 ${userIsMarriage(sender) ? 'Casamento' : 'Namoro'} entre ↴
『😍』@${db[0].split('@')[0]}
ㅤ &
〘❤️‍🩹〙@${db[1].split('@')[0]}
⇒ ${tempo_total}
---------------------------------------------------------
${data_pedido}`
mencionarIMG(txt, logocasal)
}
break

case 'listanamoro':
case 'listacasamento':
case 'listarelacionamento':
case 'listarelacao':
case 'listrs':
case 'rslist':
if(!isOwner) return reply(enviar.msg.dono)
if(relationShip.length <= 0) return reply(`Não há ninguém namorando no bot`)
sendButton(from, {text: `💕 Lista de casais do bot:`, footer: `Total: ${relationShip.length}`}, astaup, [
  {type: 'list', title: `💢 CLIQUE AQUI 💢`, rowId: [
    {
      title: NomeDoBot,
      options: relationShip.map(r => (
        {
          title: `👥 𝗖𝗔𝗦𝗔𝗟: ${r.ids.map(s => getname(s).replace('usuário', s.split('@')[0])).join(' & ')}`,
          body: `𝗡𝗔𝗠𝗢𝗥𝗔𝗗𝗢𝗦 [${r.namoro.length > 0 && r.namoro[0].ativo ? '✔' : '✖'}]\n𝗖𝗔𝗦𝗔𝗗𝗢𝗦 [${r.casamento.length > 0 && r.casamento[0].ativo ? '✔' : '✖'}]`,
          command: prefix+`checkrs `+r.ids[0].split('@')[0]
        }
      ))
    }
  ]}
], info)
break

case 'checkrs': {
setTimeout(() => {reagir("❤️‍🩹")}, 300);
if(!isOwner) return reply(enviar.msg.dono)
let usu = identArroba(q)
if(!userIsAffair(usu)) return reply(`Você não está casado (a) com ninguém... Sinto muito 😕`)
if(isUserOrderAffair(usu, true)) return reply(`A pessoa quem você pediu em namoro não aceitou o pedido ainda... Portanto, não é possível consultar os dados da dupla 😶‍🌫️`)
let gct = getCasalTime(usu)
let ggo = getGeralOrder(usu)
let ndt = ggo.dados.namoro[0].data
let cdt = userIsMarriage(usu) ? ggo.dados.casamento[0].data : {}
db = [usu, getOutherCasal(usu)]

data_pedido = `📆⃤ Namorando desde ${ndt.dia}/${ndt.mes}/${ndt.ano}`
if(userIsMarriage(sender)) data_pedido += `\n💍⃤ Casados desde ${cdt.dia}/${cdt.mes}/${cdt.ano}`

txt = `
💕 *DADOS DO ${userIsMarriage(usu) ? 'CASAMENTO' : 'NAMORO'}:*
${!userIsAffair(usu) && !isUserOrderAffair(usu, true) ? `_"user não está namorando"_` : `${isUserOrderAffair(usu, true) ? `_"pedido de namoro aguardando confirmação"_` : `👤 *${userIsMarriage(usu) ? `Matrimônio` : `Relacionamento`}:* ${db.map(d => `@${d.split('@')[0]}`).join(' e ')}
⏳ *Tempo:* ${gct.message.toLowerCase()}`}
---------------------------------------------------------
📅 _"pedido de *namoro* feito em ${ndt.dia}/${ndt.mes}/${ndt.ano}, às ${ndt.hora}:${ndt.minuto}:${ndt.segundo}${userIsMarriage(usu) ? `_
_pedido de *casamento* feito em ${cdt.dia}/${cdt.mes}/${cdt.ano}, às ${cdt.hora}:${cdt.minuto}:${cdt.segundo}` : ``}"_`}
`
mention(txt)
}
break

case 'dogolpe': case 'golpe': case 'golpista':
setTimeout(() => {reagir("😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply(`Marque a mensagem da pessoa ou use:\n${prefix+command} @alguém do grupo`)
random = `${Math.floor(Math.random() * 100)}`
golpenmr = random
if(golpenmr < 25){var golpetxt = `Não é golpe`}; if(golpenmr >= 25 && golpenmr < 50){var golpetxt = `Varia de pessoa pra pessoa`}; if(golpenmr >=50 && golpenmr < 75){var golpetxt = `Idiota gosta de ferir sentimentos`}; if(golpenmr > 75){var golpetxt = `Famoso destrói corações`}
astaup.sendMessage(from, {text:`@${menc_os2.split("@")[0]} é golpe ? 🤔

*CALCULANDO GOLPE⟩* ✮${random}%✮

${golpetxt} 💔🤡`, mentions: [menc_os2]})
break

case 'shipo': case 'shippe': case 'shipe': case 'shipar':
setTimeout(() => {reagir("😏")}, 300)
if(!menc_os2) return reply(`Marque a mensagem da pessoa ou use:\n${prefix+command} @alguém do grupo`)
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
mention(`*Hmm... Eu shipo o (a):*
 ⏤͟͟͞͞ ꦿ😍⧽ @${menc_os2.split("@")[0]}
*Com o (a):*
 ⏤͟͟͞͞ ꦿ😏⧽ @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}

 Com uma porcentagem de⧽ ✮${Math.floor(Math.random() * 100)+"%"}✮ ❤️`)
break

case 'casal':
setTimeout(() => {reagir("😍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
txt = `*Hmmm.... Eu Shipo eles 2💘💘*
1= @${groupMembers[alerandom(groupMembers.length)].id.split("@")[0]}
e esse
2= @${groupMembers[alerandom(groupMembers.length)].id.split("@")[0]}
com uma porcentagem de: ${alerandom(100)}%`
mention(txt)
break

case 'rankgrupos': case 'rankgruposativos':
if(!isGroup) return reply(enviar.msg.grupo)
ativos = []
for(a of allCountMessage()) {
  if(isJsonIncludes(allGroups, a.groupId)) {
    AB = allGroups.map(c => c.id).indexOf(a.groupId)
    grupo = allGroups[AB]
    totalmessage = 0
    totalcmd = 0
    maisativo = {id: ``, total: 0}
    for(b of a.participants) {
      if(isJsonIncludes(grupo.participants, b.id)) {
        totalmessage += b.count.messages
        totalcmd += b.count.commands
        if((b.count.messages + b.count.commands) > maisativo.total) {
          maisativo.id = b.id
          maisativo.total = b.count.messages + b.count.commands
        }
      }
    }
    ativos.push({nome: grupo.subject, mensagens: totalmessage, comandos: totalcmd, membro: maisativo.id})
  }
}
if(ativos.length < 2) return reply(`Não há grupos suficientes para contar no rank`)
gprk = ativos.map(i => i)
rank = gprk.sort((w, z) => ((w.mensagens + w.comandos) < (z.mensagens + z.comandos)) ? 0 : -1)
txt =
`🎭 𝐓𝐎𝐏 "${ativos.length < 5 ? ativos.length : 5}" 𝐆𝐑𝐔𝐏𝐎𝐒 𝐌𝐀𝐈𝐒 𝐀𝐓𝐈𝐕𝐎𝐒 𝐍𝐎 𝐁𝐎𝐓:`
for(g = 0; g < 5; g++) {
gp = rank[g]
txt +=`

»${g + 1}«
\t\t👥 𝚐𝚛𝚞𝚙𝚘: ${gp.nome}
\t💬 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜: ${largeNumber(gp.mensagens) + (gp.mensagens > 1000 ? ` (${gp.mensagens})` : ``)}
\t\t\t💻 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜: ${largeNumber(gp.comandos) + (gp.comandos > 1000 ? ` (${gp.comandos})` : ``)}
🗣 𝚖𝚎𝚖𝚋𝚛𝚘 𝚖𝚊𝚒𝚜 𝚊𝚝𝚒𝚟𝚘: @${gp.membro.split(`@`)[0]}`
}
mention(txt)
break

case 'rankativos':
case 'rankativo':  
if(!isGroup) return reply(enviar.msg.grupo)
grupo = countMessage(from).participants.map(i => i)
rank = grupo.sort((a, b) => ((a.count.messages + a.count.commands) < (b.count.messages + b.count.commands)) ? 0 : -1)
caixa = []
for(i = 0; i < (countMessage(from).participants.length < 5 ? countMessage(from).participants.length : 5); i++) {
caixa.push({nmr: i+1, id: rank[i].id, messages: rank[i].count.messages, commands: rank[i].count.commands})

}
if(caixa.length <= 0) return reply(`Não há membros suficientes no grupo para efetuar o rank...`)
txt = `❤️‍🔥 *${countMessage(from).participants.length < 5 ? countMessage(from).participants.length : 5} mais ativos do grupo ↴*
⏤͟͟͞͞ ꦿ${groupName}

${caixa.map(c => `»${c.nmr}« @${c.id.split('@')[0]}
\t⇒𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜: ${largeNumber(c.messages)}
\t\t⇒𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜: ${largeNumber(c.commands)}`).join(`\n\n`)}`
mention(txt)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
grupo = countMessage(from).participants.map(i => i)
rank = grupo.sort((a, b) => ((a.count.messages + a.count.commands) < (b.count.messages + b.count.commands)) ? -1 : 0)
caixa = []
for(i = 0; i < (countMessage(from).participants.length < 5 ? countMessage(from).participants.length : 5); i++) {
caixa.push({nmr: i+1, id: rank[i].id, messages: rank[i].count.messages, commands: rank[i].count.commands})

}
if(caixa.length <= 0) return reply(`Não há ghosts neste grupo...`)
txt = `👻 *Top ${countMessage(from).participants.length < 5 ? countMessage(from).participants.length : 5} mais ghosts deste grupo ↴*

${caixa.map(c => `»${c.nmr}« @${c.id.split('@')[0]}
*Mensagens:* ${c.messages}
*Comandos:* ${c.commands}`).join(`\n\n`)}`
mention(txt)
break

case 'check':
if(menc_os2) {
mark = menc_os2
} else {
mark = sender
}
wppuser(mark)
try {
checkimg = await astaup.profilePictureUrl(`${mark.split('@')[0]}@c.us`, 'image')
} catch {
checkimg = "https://telegra.ph/file/5446d1f9da3df07e98699.jpg"
}
check = `
⏤͟͟͞͞ ░⃟⃛ ➮ @${mark.split('@')[0]}
╭═════════════════╮
╟ ▧⃯⃟🔱 *ADM『 ${groupAdmins.includes(mark) ? `✅` : `❌`} 』*
╟ ▧⃯⃟⚜️ *CRIADOR (A) DO GRUPO『 ${groupMetadata.owner.includes(mark) ? `✅` : `❌`} 』*
╟ ▧⃯⃟💎 *VIP『 ${isJsonIncludes(vip, mark) ? `✅` : isJsonIncludes(vipgp, from) ? `✅` : `❌`} 』*
╟ ▧⃯⃟👑 *DONO『 ${numerodono.includes(mark) ? `✅` : `❌`} 』*
╰═════════════════╯`
astaup.sendMessage(from, {image: {url: checkimg}, caption: check, mentions: [mark]})
break

case 'checkativo':
setTimeout(() => {reagir("📖")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(menc_os2.includes(sender)) return reply(`Para puxar os próprios dados, use ${prefix}checkme`)
if(!existsUserInCountMessage(from, menc_os2)) return reply(enviar.msg.notusu)
usu = getUserInCountMessage(from, menc_os2)
mention(`
▄︻̷̿┻̿═━一 🅲🅷🅴🅲🅺
⇒@${menc_os2.split('@')[0]}
________________________________________

⏤͟͟͞͞ ꦿ𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 *↴*
⇒( ${AC >= 0 ? usu.count.messages : 0} )

⏤͟͟͞͞ ꦿ𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜 *↴*
⇒( ${AC >= 0 ? usu.count.commands : 0} )
________________________________________

ೈ፝͜͡📖 ${NomeDoBot}
`)
break

case 'checkme':
setTimeout(() => {reagir("📖")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
usu = existsUserInCountMessage(from, sender) ? getUserInCountMessage(from, sender) : {}
txt =
`
ㅤㅤ»⟩ S̷U̷A̷ A̷T̷I̷V̷I̷D̷A̷D̷E̷ ⟨«
╭════════════════╯
 | 🧾⃤ grupσ: ${groupName}
 | ✏️⃤ níck: ${pushname}
 | 📖⃤ mєnsαgєns: ${existsUserInCountMessage(from, sender) ? usu.count.messages : 0}
 | 💻⃤ cσmαndσs: ${existsUserInCountMessage(from, sender) ? usu.count.commands : 0}
╰════════════════╮
`
try {img = await astaup.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch { img = semfoto }
sendUrlText(from, txt, NomeDoBot, ``, img, `https://wa.me/`+sender.split("@")[0], seloctt)
break

case 'rankcorno':
if(!isGroup) return reply(`[❗] Este comando só pode ser usado em grupo...`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ABC = `
*Esses são os cornos do grupo* ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n✮${setting.NomeDoBot}✮`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ABC, membr, true)
break

case 'rankgostoso': case 'rankgostosos':
if(!isGroup) return reply(`[❗] Este comando só pode ser utilizado em grupo`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
membr = []
const ogstz1 = groupMembers
const ogstz2 = groupMembers
const ogstz3 = groupMembers
const ogstz4 = groupMembers
const ogstz5 = groupMembers
const ogstzs1 = ogstz1[Math.floor(Math.random() * ogstz1.length)]
const ogstzs2 = ogstz2[Math.floor(Math.random() * ogstz2.length)]
const ogstzs3 = ogstz3[Math.floor(Math.random() * ogstz3.length)]
const ogstzs4 = ogstz4[Math.floor(Math.random() * ogstz4.length)]
const ogstzs5 = ogstz5[Math.floor(Math.random() * ogstz5.length)]
const ogstzmsg = [`trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`, ` mandando nuds no pv do dono ☺️ by: ${NickDono}`]
const ogstzmsg_ = ogstzmsg[Math.floor(Math.random() * (ogstzmsg.length))]
ABC = `
Parados !✋🏽😶🤚🏽

1= ✋🏽😶@${ogstzs1.id.split('@')[0]}😶🤚🏽


2= ✋🏽😶@${ogstzs2.id.split('@')[0]}😶🤚🏽


3= ✋🏽😶@${ogstzs3.id.split('@')[0]}😶🤚🏽


4= ✋🏽😶@${ogstzs4.id.split('@')[0]}😶🤚🏽


5= ✋🏽😶@${ogstzs5.id.split('@')[0]}😶🤚🏽


Multa por serem gostosos dms 😳 pague pena ${ogstzmsg_}`
membr.push(ogstzs1.id)
membr.push(ogstzs2.id)
membr.push(ogstzs3.id)
membr.push(ogstzs4.id)
membr.push(ogstzs5.id)
mentions(ABC, membr, true)
break

case 'rankgostosa': case 'rankgostosas':
if(!isGroup) return reply(`[❗] Este comando só pode ser utilizado em grupo`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
membr = []
const agstz1 = groupMembers
const agstz2 = groupMembers
const agstz3 = groupMembers
const agstz4 = groupMembers
const agstz5 = groupMembers
const agstzs1 = agstz1[Math.floor(Math.random() * agstz1.length)]
const agstzs2 = agstz2[Math.floor(Math.random() * agstz2.length)]
const agstzs3 = agstz3[Math.floor(Math.random() * agstz3.length)]
const agstzs4 = agstz4[Math.floor(Math.random() * agstz4.length)]
const agstzs5 = agstz5[Math.floor(Math.random() * agstz5.length)]
const agstzmsg = [`trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`, ` mandando nuds no pv do dono ☺️ by: ${NickDono}`]
const agstzmsg_ = agstzmsg[Math.floor(Math.random() * (agstzmsg.length))]
ABC = `
Paradas !✋🏽😶🤚🏽

1= ✋🏽😶@${agstzs1.id.split('@')[0]}😶🤚🏽


2= ✋🏽😶@${agstzs2.id.split('@')[0]}😶🤚🏽


3= ✋🏽😶@${agstzs3.id.split('@')[0]}😶🤚🏽


4= ✋🏽😶@${agstzs4.id.split('@')[0]}😶🤚🏽


5= ✋🏽😶@${agstzs5.id.split('@')[0]}😶🤚🏽


Multa por serem gostosas dms 😳 pague pena ${agstzmsg_}`
membr.push(agstzs1.id)
membr.push(agstzs2.id)
membr.push(agstzs3.id)
membr.push(agstzs4.id)
membr.push(agstzs5.id)
mentions(ABC, membr, true)
break

case 'rankgay': case 'rankgays':
setTimeout(() => {reagir("🌈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS GAYS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🌈⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankhetero':
  setTimeout(() => {reagir("🏁")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS HÉTEROS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🏁⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankgado': case 'rankgados':
setTimeout(() => {reagir("🐂")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS GADOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🐂⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'ranknazista': case 'ranknazistas':
  setTimeout(() => {reagir("💂🏼‍♂️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS NAZISTAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `💂🏼‍♂️⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankotaku': case 'rankotakus':
  setTimeout(() => {reagir("🧽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS OTAKUS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🧽⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankpau':
  setTimeout(() => {reagir("🍆")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*Esses são os cara com maior e menor pau do grupo* ${groupName}\n\n`
TMPAU = ["Minúsculo", `Pequenininho chega ser até fofo 🥺`, `Pequeno`, `Mediano`, `Grandinho 🥵`, `Grande até`, `Gigantesco`, `Enorme`, `QUEIMADO !! Tão grande que bateu no sol e queimou`, `Ponte Rio Niterói`, "Nem existe"]
for (var i = 0; i < 5; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n${TMPAU[Math.floor(Math.random() * TMPAU.length)]}\n`
}
ABC += `\nBy 🔥 ${NomeDoBot} 🔥`
mention(ABC);
break;

case 'rankbct':
case 'rankbuceta':
case 'rankxrc':
case 'rankxereca':
setTimeout(() => {reagir("😏")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSAS SÃO AS MAIS BUCETUDAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `😏⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankpocoto':
setTimeout(() => {reagir("🐴")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS POCOTO DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🐴⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'ranklindo':
case 'ranklinda':
case 'rankbonito':
case 'rankbonita':
setTimeout(() => {reagir(react2)}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
lindo = ["Base da Virgínia", "Sem comentários...", "Feio que dá dó", "Feio mas engraçado", "Feio (a)", "Nada que uma maquiagem não resolva", "Na média", "Nem um, nem outro", "Bonito (a)", "Nada mal", "Lindo (a)", "Extremamente lindo (a)", "Perfeito (a)"]
ABC = `*GRAU DE LINDEZA DO GRUPO⟩*
⇒${groupName}\n`
for (var i = 0; i < 5; i++) {
ABC += `✮ @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split("@")[0]}\nㅤ⇒${lindo[Math.floor(Math.random()*lindo.length)]}\n\n`
}
mention(ABC);
break

case 'rankputa':
setTimeout(() => {reagir("😈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSAS SÃO AS MAIS PUTAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `😈⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankcalvo':
  setTimeout(() => {reagir("👨🏼‍🦲")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS CALVOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `👨🏼‍🦲⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankrico':
  setTimeout(() => {reagir("🤑")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS RICOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤑⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankpobre':
  setTimeout(() => {reagir("🤣")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS POBRES DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤣⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankpobre':
  setTimeout(() => {reagir("🤣")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS POBRES DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤣⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankfeio':
  setTimeout(() => {reagir("🤡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS FEIOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤡⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break
case 'rankvesgo':
  setTimeout(() => {reagir("👀")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS VESGO DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `👀⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'ranknoia':
  setTimeout(() => {reagir("👽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS NOIA DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `👽⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'ranksigma':
  setTimeout(() => {reagir("🗿")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS SIGMA DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🗿🍷⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankbeta':
  setTimeout(() => {reagir("🤓")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS BETAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤓⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'piadas': case 'piada':
setTimeout(() => {reagir("😂")}, 300)
reply(`*_Sorteando_*

${pia[Math.floor(Math.random() * (pia.length))]}
________________________________________
*_By Black 2K25_*`)
break

case 'cantada':
case 'cantadas':
setTimeout(() => {reagir("😏")}, 300)
const cantm1 = ['Você não é mexicana mas mexicomigo', 'Eu não sou gato, mas me miamarro em vc', 'Pra virar bombom, só falta a valsa... Pq vc já é um sonho', 'Eu não sou astronauta mas eu posso te fazer chegar aos céus', 'Se beleza fosse crime, vc seria inocente', 'Se beleza fosse merda, vc estaria toda cagada', 'Se o universo soubesse o quanto eu te amo... Ele teria vergonha de ser tão pequeno', 'A lua deve estar cansada de me ouvir falar de vc', 'Cansei de correr atrás de vc... Agora eu vou de moto', 'Me chame de thur, pq o Ar eu perdi quando te vi', 'Me passa seu insta aí... Minha mãe disse pra eu seguir meu sonho', 'Vc é um eixo terrestre ? Pq meu mundo gira em torno de vc', 'Tem algo de errado no meu celular... Não consigo encontrar seu número nele', 'Rosas são vermelhas, violetas são azuis... Eu não sei rimar, mas posso namorar com vc ?', 'Tá calor né ? Mas não é de hj que eu me derreto por vc...', 'Estou sentindo uma dor no peito... Espero que seja amor, porque se for infarto, eu nunca mais te verei', 'Se te amar um dia me matar, saiba que eu morri sorrindo', 'Eu tenho uma memória terrível... Felizmente, vc é inesquecível', 'Seu nome é Google ? Pq em vc, tem tudo o que eu preciso...']
const cantm2 = cantm1[Math.floor(Math.random() * (cantm1.length))]
cantmtxt = `*_Chega na mina e fala assim..._*

_"${cantm2}"_ 😏
*_By ~M4TH 2K25_*`
astaup.sendMessage(from, {text: cantmtxt, mentions: [menc_os2]})
astaup.sendMessage(from, {audio: {url:'./database/midia/audios/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'cantada+18':
case 'cantadas+18':
if(!isNsfw) return reply(`*Este comando só pode ser executado com o modo+18 ativo...*
*Para ativa-lo, digite* ${prefix}modo+18`)
setTimeout(() => {reagir("🌚")}, 300)
const cantf1 = ['Não quero problema para cima de mim, só se o problema for você', 'Minha roupa ficaria linda jogada no chão do seu quarto', 'Me chama de videogame e me joga no sofá', 'Sabe que horas são? hora da gente se pegar', 'Eu não sei fazer seu mundo girar, mas sei fazer sua cama balançar', 'Estou pegando no sono, mas queria estar pegando você', 'Minha boca na sua, rola? Se quiser, a gente tira a vírgula...', 'Gosto de café assim como de sexo... Quente, forte e todos os dias', 'Oi, a minha cama mandou perguntar se você quer dormir aqui', 'Queria ser o seu sabonete, para deslizar no seu corpo', 'Vc é fazendeira ? Pq vc fez o meu pepino crescer...', 'Posso te chamar de picolé de uva ? Pra vc deixar minha boca roxa...', 'Me chama de Buzz Lightyear e deixa eu te mostrar o infinito e além...', 'Deixa eu te ensinar o que eu aprendi com Danone... Enquanto você me ensina o que aprendeu com pirulito']
const cantf2 = cantf1[Math.floor(Math.random() * (cantf1.length))]
cantftxt = `*Cantadas +18 pra vc...*

_"${cantf2}"_ 🥵
*_By_* 🔥 ${NomeDoBot} 🔥`
reply(cantftxt)
break

case 'akinator':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) return reply("Volte mais tarde...")
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
jogo.now = true
akinator.splice(0, 1)
fs.writeFileSync("./jogos/akinator.json", JSON.stringify(akinator, null, 2))
}
if(!JSON.stringify(akinator).includes(from)) {
reply(`Atenção ${pushname}, irei iniciar o jogo do akinator... Responda com "Sim", "Não", "Não sei", "Provavelmente Sim" ou "Provavelmente não" (sem as aspas)`)
dateAKI = moment.tz('America/Sao_Paulo').format('DD')
var region = 'pt'
var childMode = false;
var proxy = undefined;
let startAki = async () => {
global.aki = new Aki({ region, childMode, proxy });
await aki.start()
}
await startAki()
jogo.now = false
jogo.jogador = sender
akinator.push({id: from, jogador: sender, finish: 0, dia: dateAKI})
fs.writeFileSync("./jogos/akinator.json", JSON.stringify(akinator, null, 2))
reply(`*⏤͟͟͞͞ ꦿAKINATOR* 🧙🏼‍♂️
🔮⃤ ${aki.question}`)
} else return mention(`@${akinator[akinator.map(i => i.id).indexOf(from)].jogador.split('@')[0]} já iniciou a partida, espere ele/a terminar...`)
break

case 'resetaki':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && !isOwner) return reply("Nenhuma sessão em andamento... 🧙🏼‍♂️")
if(akinator.length <= 0) return reply("Nenhuma sessão em andamento... 🧙🏼‍♂️")
matheuzinho = isOwner ? 0 : akinator.map(i => i.id).indexOf(from)
if(akinator[matheuzinho].jogador == sender || isGroupAdmins || isOwner) {
jogo.now = true
akinator.splice(matheuzinho, 1)
fs.writeFileSync("./jogos/akinator.json", JSON.stringify(akinator, null, 2))
reply("🧙🏼‍♂️ Akinator resetado com sucesso ✨")
} else {
reply("[ ❗ ] Somente admins do grupo ou a pessoa que iniciou o jogo podem finalizar o akinator ❌")
}
break

case 'infowa':
datewa = sendHours('MM');
datetime = `${(Number(datewa) - 3)}`
infowa2 = `${tempo} ${pushname} ${tempo_emoji}

Aproximadamente 1 ano e ${datetime} meses atrás, Mark Zuckerberg, dono do whatsapp, atualizou o mesmo, quebrando assim, a nossa conexão com a Baileys.

A Baileys é uma web criptopasta em que todos os bot de whatsapp puxam, de forma hiperbólica, inúmeras informações para seu funcionamento... Desde então, as listas e botões pararam de funcionar. Com um esforço incansável, nós, criadores e desenvolvedores, conseguimos uma baileys, em que os botões estavam funcionando perfeitamente em grupos, e as listas no privado. Bem, parece que até isso foi retirado de nós...

Novamente houve uma atualização na conexão do whatsapp, e dessa vez, o botões foram realmente de base...

O bot está funcionando em perfeito estado, em relação a outros comandos... Apenas os botões e listas foram desativados, devido não estarem funcionando.

Caso haja ainda algum bug que necessite de conserto, use o comando ${prefix}bug para reportar o mesmo... Se houver solução, irei imediatamente arrumar. Caso contrário, só podemos esperar que seja descoberto ou criada uma nova conexão para os bot, pq a Baileys, não funciona mais.

Conto com a sua compreensão ${pushname}... Repasse para a maioria de usuários de bot de whatsapp que conseguir, pois isso é um problema global. Não é problema no Black, nem no bot que você usa, nem na hospedagem... É problema no próprio whatsapp, e como todos os bot utilizam a mesma conexão *(por ser a única que existe)*, todos estão sofrendo com esse problema.

Nosso grupo tbm está disponível no comando ${prefix}blackgp. Lá, você tem um contato maior com vários usuários, obtendo maiores informações assim tbm.

✅ *Ass:* ${NickDono}
ㅤ✍🏽 *BY:* ${NomeDoBot}`
reply(infowa2)
break

case 'dado':
if(!isModobn) {
setTimeout(() => {reagir("❌")}, 300)
return reply(enviar.msg.modobz)
} else {
setTimeout(() => {reagir("🎲")}, 300)
reply(`▧⃯⃟𝚂𝚘𝚛𝚝𝚎𝚊𝚗𝚍𝚘 𝙳𝚊𝚍𝚘ฺ͘.•🛸 ݈݇─`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/midia/figu/${dadoale}.webp`)
}
break

case 'caraoucoroa':
setTimeout(() => {reagir("🪙")}, 300)
if(!isModobn) {
setTimeout(() => {reagir("❌")}, 300)
return reply(enviar.msg.modobz)
} else {
enviarfigu(`./database/midia/figu/caraoucoroa.webp`)
setTimeout(async() => {
cr1 = [`cara 😎`, `coroa 👑`]
txtcr = `ೈ፝͜͡𝙈𝙊𝙀𝘿𝘼 𝙎𝙊𝙍𝙏𝙀𝘼𝘿𝘼:
> ${cr1[Math.floor(Math.random()*cr1.length)]}`
reply(txtcr)
}, 1000)
}
break

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
if(menc_os2.includes(botNumber)) return reply("Estou aqui para ser mediador e não jogador...")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./jogos/velha/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./jogos/velha/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./jogos/velha/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
astaup.sendMessage(from, {text: chatMove}, {quoted: seloctt,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", ""); console.log(argss)
boardnow.O = identArroba(argss[1]).split("@")[0];
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./jogos/velha/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
mention(strChat)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if(fs.existsSync("./jogos/velha/db/" + from + ".json")) {
DLT_FL("./jogos/velha/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./jogos/velha/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'ppt':
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "*Vitória do jogador* 🙇🏻‍♂️"
}
if(vit == "derrota") {
var tes = "*A vitória é do BOT* 🤖"
}
if(vit == "empate") {
var tes = "*O jogo terminou em empate* 🤜🏽🤛🏽"
}
reply(`${NomeDoBot} *jogou:*
> ${pptb}

${pushname} *jogou:*
> ${args}`)
setTimeout(async() => {
reply(tes)
}, 2000)
break

case 'cassino':
inicio_frutas = ['🍊', '🍒', '🍐', '🔔', '🍇', '🍌']
total_frutas = []
for(a of inicio_frutas) {
  for(b = 0; b < inicio_frutas.length; b++) {
    for(c = 0; c < inicio_frutas.length; c++) {
      total_frutas.push(`${a}/${inicio_frutas[b]}/${inicio_frutas[c]}`)
    }
  }
}
random_frutas = total_frutas[alerandom(total_frutas.length)]
var [ft1, ft2, ft3] = random_frutas.split("/")
if(ft1 == ft2 && ft2 == ft3) { victory = "VOCÊ GANHOU !!!"
addCoinsInVirtualBalance(sender, 1)
} else { victory = "ㅤVocê perdeu..." }
const cassino = (result, vic) => {return `
ㅤㅤㅤ┏━━━━❪🎰❫━━━━\t\t\t\t
ㅤㅤㅤ┣► ${result}◄┛
ㅤㅤㅤ┗━━━━❪💰❫━━━━

ㅤㅤㅤ  ${vic ? `*`+vic+`*` : ``}`}
let { key } = await astaup.sendMessage(from, {text: cassino(`❗ : ❗ : ❗`)}, {quoted: info})
await sleep(700)
await astaup.sendMessage(from, {text: cassino(`❓ : ❓ : ❓`), edit: key}, {quoted: info})
await sleep(700)
await astaup.sendMessage(from, {text: cassino(`${ft1} : ❓ : ❓`), edit: key}, {quoted: info})
await sleep(700)
await astaup.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ❓`), edit: key}, {quoted: info})
await sleep(700)
await astaup.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ${ft3}`), edit: key}, {quoted: info})
await sleep(700)
await astaup.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ${ft3}`, victory), edit: key}, {quoted: info})
break

case 'eununca':
reagir("❤️‍🔥")
if(!isModobn) return reply(enviar.msg.modobz)
const euja1 = ['Eu nunk fiquei com dois/duas numa festa', 'Eu nunk meti chifre no namorado (a)', 'Eu nunk fui corno', 'Eu nunk roubei nada do supermercado', 'Eu nunk beijei alguém do mesmo sexo que eu', 'Eu nunk parei alguém na rua achando que era um conhecido', 'Eu nunk joguei fora a comida e fiz que comi', 'Eu nunk fuji de casa', 'Eu nunk fiz coisas +18 em casa', 'Eu nunk fumei ou usei drogas']
euja2 = euja1[Math.floor(Math.random() * (euja1.length))]
eununcatxt = `*_Sorteando..._*

> _"${euja2}"_`
sendAsPoll(from, eununcatxt, ["Eu já 🌚", "Eu nunca 🌝"])
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot': case 'boot': case 'asta':
setTimeout(() => {reagir("😡")}, 300)
sendAudioPTT(astaup, from, './database/midia/audios/qsaco.m4a', info)
break

case 'infobot':
setTimeout(() => {reagir("👻")}, 300)
sendAudioPTT(astaup, from, './database/midia/audios/infobot.m4a', info)
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversemp4':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
astaup.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloctt})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
astaup.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloctt })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
astaup.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloctt })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
case 'viraraudio':
setTimeout(() => {reagir("✅")}, 300)
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 Á𝚞𝚍𝚒𝚘∘̥⃟৴▸`)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: seloctt})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'p': {
  try {
    reagir("🎵")
    if(!q) return reply(`${prefix+command} link ou nome`)
    if(!isUrl(q)) {
      ABC = await fetchJson(blacksite+`/api/ytsrc?q=${q}&apikey=`+API_KEY_FREE)
      data = ABC.resultado[0]
      start = `0:00`
      end = data?.timestamp || `5:32`
      channel = info?.author?.name || `"indefinido"`
      theme = [`anime`, `classic`, `dynamic`, `space`, `space2`]
      img = blacksite+`/api/canvas/musicardbun/music?nome=${encodeURI(data.title)}&autor=${encodeURI(channel)}&tipo=${theme[alerandom(theme.length)]}&opacity=100&progresso=35&start=${start}&end=${end}&thumb=`+data.thumbnail
      console.log(colors.yellow(`imagem: `), colors.white(img))
      bla = `
🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data?.timestamp || "indefinido"} com ${Number(data?.views) > 0 ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data?.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data?.description || "indefinida"}
`
      audio = data.url
      sendImage(from, img, bla, seloctt)
      //EnvButton(from, [bla, NomeDoBot, img], astaup, [{text: `🎥 𝙑𝙄́𝘿𝙀𝙊`, command: prefix+`p2 `+audio}, {text: `𝘼́𝙐𝘿𝙄𝙊 🎵`, command: prefix+command+` `+audio}], seloctt)
      //if(botoes) return
    } else {
      carregamento(from, `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`, info)
      await sleep(5000)
      audio = q
    }
    BCD = await fetchJson(blacksite+`/api/yt/audio?url=${audio}&apikey=`+API_KEY_FREE)
    sendAudio(from, BCD.resultado.url, "audio/mpeg", seloctt).catch(error => {
      console.log(error.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
      reply(downon)
    })
  } catch (e) {
    console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
    return reply(downoff);
  }
}
break;

case 'shazam':{
if(!isVip) return reply(enviar.msg.vip)
if(!isQuotedAudio) return reply('⚠️ Envie o áudio para eu detectar o nome da música!')
let music = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let mime = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.mimetype
let m = mime.split('/')[1]
fs.writeFileSync('./database/totext/' + sender + '.' + m, music)
let base64 = fs.readFileSync('./database/totext/' + sender + '.' + m, { encoding: "base64" })
try {
let hasil = await arcloud(base64)
ABC = await fetchJson(blacksite+`/api/ytsrc?q=${hasil[0].titulo}&apikey=`+API_KEY_FREE)
data = ABC.resultado[0]
audio = await fetchJson(blacksite+`/api/yt/audio?query=${data.url}&apikey=`+API_KEY_FREE)
} catch (e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
return reply('Desculpe, não consegui identificar a música. Por favor, tente novamente!️')
}
setTimeout(() => {reagir(`⚡`)}, 300)
txt = `🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data?.timestamp || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data?.ago || "indefinido"}`
sendUrlText(from, txt, `⚡ SHAZAM - ${data.title}`, `${largeNumber(data?.views || 1) || "indefinidas"} visualizações`, data.thumbnail, data.url, seloblk)
sendAudio(from, audio.resultado.url, 'audio/mpeg')
DLT_FL('./database/totext/' + sender + '.' + m)
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
astaup.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage && info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated) {
let media = await downloadAndSaveMediaMessage(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
try {
reply('[❗] convertendo em gif, aguarde ♨')
a = await webp_mp4(media)
mp4 = await getBuffer(a.result)
astaup.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
} catch(e) {
console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
reply('Erro ao converter para gif')
}
await fs.unlinkSync(media)
} else {
reply('*[ ❗ ] Marque a figurinha animada!*')
}
break

case 'cartonizar': case 'cartoon':
try { 
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
reply(`[❗] Desenhando pixel a pixel, isso pode demorar 💢`)
astaup.sendMessage(from, {image: {url:`http://br3.bronxyshost.com.br:4017/imagem/cartoon?img=${link}&apitoken=Aqua`}}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem com rosto visível!') 
}
} catch (e) {
reply('ERROR!!')
}
break

case 'toanime': case 'tohd': case 'tozombie':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
reply(`[❗] Desenhando pixel a pixel, isso pode demorar 💢`)
ABC = await fetchJson(`${blacksite}/api/ia/${command}?link=${link}&apikey=`+API_KEY_FREE)
sendImage(from, ABC.resultado.image_data).catch(e => {
return reply("Erro ao converter a imagem")
})
} else {
reply('Marque uma imagem para eu atribuir o efeito')
}
break

case 'affect': case 'comunismo': case 'mms': case 'bobross': case 'bolsonaro': case 'blur': case 'beautiful': case 'circle': case 'del': case 'invert': case 'facepalm': case 'rip': case 'wasted': case 'wanted': case 'trash': case 'sepia': case 'pixelate': case 'lgbt':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
reply(`[❗] Desenhando pixel a pixel, isso pode demorar 💢`)
sendImage(from, `${blacksite}/api/canvas/${command}?link=${link}&apikey=`+API_KEY_FREE)
} catch {
return reply("Erro ao converter a imagem")
}
} else {
reply('Marque uma imagem para eu atribuir o efeito')
}
break

case 'legenda':
try {
var [txt1, txt2] = q.split("/")
if(!q.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Black/Bot`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
astaup.sendMessage(from, {image: {url: `${blacksite}/api/legenda?url=${res}&texto1=${txt1}&texto2=${txt2}&apikey=`+API_KEY_FREE}}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem...!')
}
} catch (e) {
return reply('ERROR!!')
}
break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return astaup.sendMessage(from, {text: `Uma dessas opções estão ativada, mas por você ser ADM, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)`}, {quoted: seloctt})
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
astaup.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
astaup.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
astaup.sendMessage(from, {text: 'reporte aos adm o ocorrido ', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !isOwner && !isVip && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply('Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.')
console.log(colors.red('Deram Spam de caracteres..'))
}, 100)
setTimeout(async () => {
setTimeout(() => {
astaup.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
astaup.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mp4", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
astaup.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mp4", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
astaup.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./javascript/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
astaup.sendMessage(from, {audio: buffer, ptt:true}, {quoted: seloctt})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

EnvAudio2_GTTS("pt", `São ${realtime}`, "que horas sao?")

if(budy2 === `abrir grupo` && isGroup && isGroupAdmins && isBotGroupAdmins && groupMetadata.announce == true) {
setTimeout(() => {reagir("✅")}, 300)
astaup.groupSettingUpdate(from, 'not_announcement')
reply(`✅ *${tempo} à todos... O grupo foi aberto novamente*`)
}

if(budy2 === `fechar grupo` && isGroup && isGroupAdmins && isBotGroupAdmins && groupMetadata.announce == false) {
setTimeout(() => {reagir("🚫")}, 300)
astaup.groupSettingUpdate(from, 'announcement')
reply(`🚫 *Grupo fechado... As suas ordens vossa senhoria*`)
}

if(budy2 === 'prefixo' && !isBanchat) {
setTimeout(() => {reagir("🥰")}, 500)
reply(`*Prefixo de comandos usado〘 ${prefix} 〙 ❤️‍🔥*`)
}

if(!isGroup && isOwner && info?.message?.extendedTextMessage?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid) {reply(`🎳 _*ID do canal:* ${info?.message?.extendedTextMessage?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid}_`)}

//início das funções do namoro/casamento

if(!isNaN(budy2) && isJsonIncludes(nicks, sender)) {
  AB = nicks.map(i => i.id).indexOf(sender)
  caixa = []
  for(i of nicks[AB].titulos) {
    if(Number(budy2) === Number(i.nmr)) caixa.push(i.txt)
  }
  if(caixa.length > 0) {
    sendForwardingMessage(from, caixa[0], seloctt, 1)
    if(nicks[AB].quant > 1) {
      nicks[AB].quant -= 1
      saveJSON(nicks, "./database/nicks.json")
    } else {
      nicks.splice(AB, 1)
      saveJSON(nicks, "./database/nicks.json")
    }
  }
}

if(isJsonIncludes(relationShip, sender)) {
  mini = rmLetras(budy2)
  let ggodb = getGeralOrder(sender)
  if(isGroup && ggodb.exists && ggodb.dados.pedido.length > 1 && ggodb.dados.pedido[2] == from) {
    if(isUserOrderAffair(sender)) {
      if(mini == "sim" || mini == "s") {
        acceptOrderAffair(sender)
        return sendButton(from, {text: `💞 Felicitações @${getOutherCasal(sender).split('@')[0]}, parece que o @${sender.split("@")[0]} aceitou seu pedido de namoro... Seus dados podem ser acessados no botão abaixo 🥰`, mentions: [getOutherCasal(sender), sender], footer: NomeDoBot}, astaup, [{type: `cmd`, text: `𝙈𝙄𝙉𝙃𝘼 𝘿𝙐𝙋𝙇𝘼 💘`, command: prefix+`dupla`}], seloctt)
      }
      if(mini == "nao" || mini == "n") {
        mention(`😔 Sinto muito @${getOutherCasal(sender).split('@')[0]}, parece que o usu ${pushname} recusou seu pedido de namoro...`)
        return delGeralOrder(sender)
      }
    }
    if(isUserOrderMarriage(sender)) {
      if(mini == "sim" || mini == "s") {
        saveOrderMarriage(sender)
        return sendButton(from, {text: `💍 Felicitações @${getOutherCasal(sender).split('@')[0]}, parece que o @${sender.split("@")[0]} aceitou seu pedido de casamento... Seus dados foram atualizados na dupla 👻`, mentions: [getOutherCasal(sender), sender], footer: NomeDoBot}, astaup, [{type: `cmd`, text: `𝙈𝙄𝙉𝙃𝘼 𝘿𝙐𝙋𝙇𝘼 💞`, command: prefix+`dupla`}], seloctt)
      }
      if(mini == "nao" || mini == "n") {
        saveOrderMarriage(sender, false)
        mention(`😪 Sinto muito @${getOutherCasal(sender).split('@')[0]}, parece que o usu @${sender.split("@")[0]} recusou seu pedido de casamento... Felizmente, vocês ainda são um casal de namorados 🥰`)
      }
    }
  }
}

//fim das funções do namoro/casamento

if(budy2.toLowerCase().startsWith("matty") && !isBanchat && !isBotoff) {
  if(args.length <= 0) return reply("Oi 👀")
  if(!isGroup && !isVip) return
  reagir(`🙇🏻‍♂️`)
  try {
    ABC = await fetchJson(blacksite+`/api/ia/bard?query=${encodeURI(q)}&apikey=`+API_KEY_FREE)
    reply(ABC.resultado)
  } catch(e) { console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
  reply("Nsei") }
}

if((budy2.startsWith("black") || budy2.startsWith("asta")) && !isBanchat && !isBotoff) {
  reagir("👀")
  //writing()
  await sleep(1000)
  if(budy2.split(" ").length <= 1) return EnvButton(from, ["Fl ✋🏽😳🤚🏽", `${tempo} ${pushname}`], astaup, [{text: `𝙈𝙀𝙉𝙐 ✨`, command: prefix+`menu`}], seloctt)
  try {
    txt = budy2.split(" ")
    ABC = await fetchJson(blacksite+`/api/ia/blackboxpro?query=${encodeURI(txt.splice(1, txt.length).join(" "))}&apikey=`+API_KEY_FREE)
    return sendForwardingMessage(from, ABC.resultado, seloctt, 1)
  } catch(e) {
    console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
    return reagir(`🤷🏻‍♂️`)
  }
}

if(isAutorepo) {

if(budy2.includes("matheus")) {setTimeout(() => {reagir('💎')}, 300);}

if(audios.length > 0 && isGroup) {
  for(i of audios) {
    caminho = `./database/midia/audios/save/${i.rm}`
    if(rmLetras(budy2).includes(i.txt) && fs.existsSync(caminho)) {
      if(i.emoji.length > 0) reagir(i.emoji)
      sendAudioPTT(astaup, from, caminho, info)
    }
  }
}

if(budy2.toLowerCase() === "oi") {
resp = [`${tempo} ${pushname}, posso ajudar em algo?`, `${tempo} ${pushname}, como você está?`, `${tempo} ${pushname}, tudo bem por aqui?`]
reply(resp[alerandom(resp.length)])
}

if(budy2.includes("lucas") && !body.toLowerCase().startsWith('lucas') && isGroup) {
setTimeout(() => {reagir("🤭")}, 300)
reply(`*Ah o Lucas, primo do meu dono... Eles são inseparáveis* 🥰
Você pode usar ele para pesquisar no gpt`)
setTimeout(async() => {
enviarfigu(`./database/midia/figu/lucasfigu.webp`)
}, 500)
}

if(budy2.toLowerCase().startsWith('lucas') && args.length > 0) {
reagir("🤩")
try {
ABC = await fetchJson(blacksite+`/api/ia/luke?query=`+encodeURI(q)+`&apikey=`+API_KEY_FREE)
reply(ABC.resultado)
} catch (e) {
reply('Erro')
}
}

if(budy2.toLowerCase().startsWith('katy') && args.length > 0 && isGroup) {
setTimeout(() => {reagir("😍")}, 300)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
const gtts = require('./javascript/funcoes/gtts')(`pt`)
dtt = datasimi.message
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
astaup.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch (e){
return reply("Nsei")
}
}

if(budy2.toLowerCase().startsWith('jeff') && args.length > 0 && isGroup) {
setTimeout(() => {reagir("🤓")}, 300)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Nsei")
}
}

if(budy2 === "bot") {
blars = ["Oi delícia", "Oi amor da minha vida", "Oi princesa do meu coração"] 
blarnd = blars[Math.floor(Math.random() * blars.length)]
reply(blarnd)
}

if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
astaup.sendMessage(from, {text: adivinha}, {quoted: seloctt})
}

if(budy2 === ":)") {
astaup.sendMessage(from, {text: `hihi ^-^`})
}

if(budy2.toLowerCase() === "f") {
astaup.sendMessage(from, {text: '```Press F no chat```'})
}

if(budy2.toLowerCase() === "kkkk") {
reagir("😂")
}

if(budy2.toLowerCase() === "bot ruim") {
setTimeout(() => {reagir("🤬")}, 300)
reply(`FILHO DA PUTA, VOU COMER SEU CU. ARROMBADO DO CARALHO, SUA MÃE ALUGA A BUCETA PRA COMPRAR FIXADOR DE DENTADURA PRO SEU PAI, AQUELE CORNO BROXA. CHIFRUDO, VOU ENFIAR MEU BRAÇO NO SEU ÂNUS E ARRANCAR SEU INTESTINO. LOGO DEPOIS VOU ENFORCAR SUA AVÓ COM ELE, AQUELA VELHA BISCATE QUE FAZ CROCHÊ PRA FORA EM TROCA DE PICA.\n\nSUAS TIAS TÊM PÊLO NO DENTE E SUA IRMÃ TEM POLENGUINHO NA VIRILHA, SEU GRANDE FILHO DA PRÊULA. SUA MÃE DAVA LEITE DA CABEÇA DO PAU DO SEU PAI PRA VOCÊ BEBER, FILHO DA PUTA. ISSO MESMO, VOCÊ TOMAVA MAMADEIRA DE PORRA DESDE CRIANÇA. POR ISSO É O RETARDADO MENTAL QUE É HOJE, SEU ZÉ BEBEDOR DE SUCO DE CARALHO.\n\nO PADRE TE BENZEU COM ÁGUA PARADA, HOJE VOCÊ SOFRE OS EFEITOS RETARDADOS DO AEDES AEGYPT QUE SE ALOJA DENTRO DO SEU OUVIDO, SEU MONTE DE ESTERCO. SEU AVÔ ARROMBADO USA FRALDA E TE OBRIGA A LIMPAR OS CAGÕES DELE COM UMA COLHER DE DANONINHO, SEU CAPACHO DO CARALHO.\n\nSUA MÃE TE FAZ DORMIR COM O REX, AQUELE CHIUAUA FILHO DA PUTA E CHEIO DE SARNA. E DURANTE A MADRUGADA O REX ABUSA SEXUALMENTE DE VOCÊ, ATÓLA A PATINHA DENTRO DESSE SEU CU PELÚDO, SEU FRACASSADO. LEMBRA DA JANDIRA, AQUELA SUA PRIMA MONOTETA ? POIS É, ENFIEI UM TACO DE BASEBALL NO CU DELA. A MÃE DELA DEU O FLAGRANTE NA GENTE E AO INVÉS DE FICAR BRAVA, PEDIU O TACO EMPRESTADO. VADIA DO CARALHO ESSA SUA TIA, SÓ PODE TER APRENDIDO COM SUA MÃE, AQUELA BISCATE.\n\nQUE ALIÁS, CONTINUA CHUPANDO O CARALHO DO ZÉ DO PACOTE, O TRAFICANTE QUE MORA AÍ DO LADO DA SUA CASA DE BARRO, SEU FILHO DUMA MACONHEIRA VAGABUNDA. O CABELO DA SUA MÃE É TÃO RUIM QUE ELA FAZ CHAPINHA NOS PÊLOS DO SOVACO E USA UM DESODORANTE COM CONDICIONADOR CAPILAR, AQUELA VELHA CARCOMIDA DESGRAÇADA.\n\nVOCÊ FOI ENCONTRADO NO LIXO, SEU MERDA. E ATÉ HOJE SUA MÃE PEDE DESCULPAS PRA DEUS PELO PEDAÇO DE MERDA QUE PARIU. ATÉ TE EMBALOU NUM SACO PRETO ANTES DE JOGAR NO LIXO, MAS VOCÊ É TÃO HORRÍVEL QUE UM MENDIGO TE ENCONTROU E QUASE TE COMEU ACHANDO QUE TU ERA UMA LAZANHA, SEU ESCROTO FILHO DA PUTA. SEU PAI VENDE CARTA DE MAGIC ROUBADA PRA JOGAR UMA HORA NA LAN HOUSE E ENTRAR EM SITE PORNÔ. DEPOIS ELE SE MASTURBA E GOZA DENTRO DO SEU TRAVESSEIRO. ISSO MESMO, AQUELA MANCHA BRANCA QUE INSISTE EM APARECER TODA VEZ QUE VOCÊ ACORDA NÃO É SUA SALíVA, SEU FILHO DA PUTA.\n\nVOCÊ SEMPRE FOI O MAIS ALOPRADO DA CLASSE. LEMBRA QUANDO ENFIARAM UM GIZ NO SEU CU ? VOCÊ FICOU UMA SEMANA CAGANDO BRANCO, PARECIA GESSO. E QUANDO VOCÊ IA RECLAMAR COM A PROFESSORA, ELA TE MANDAVA CALAR A BOCA. AQUELA VELHA SEMPRE SOUBE QUE VOCÊ TEM PROBLEMAS MENTAIS, SEU RETARDADO. AÍ VOCÊ TINHA QUE CALAR ESSA SUA BOCA ENQUANTO O GIZ DERRETIA DENTRO DO SEU INTESTINO, HAHA.\n\nFRACASSADO, VÊ SE PASSA UMA GILLETTE NESSE SEU BIGODINHO RIDÍCULO. TU PARECE O MANO BROWN, PORRA. E DÁ UM JEITO NESSAS SUAS TETINHAS DE BRIGADEIRO, ELAS ESTÃO COMEÇANDO A FEDER. TODA VEZ QUE EU PASSO DO SEU LADO, SINTO CHEIRO DE CACHORRO MORTO. QUE ALIÁS, SE ASSEMELHA AO CHEIRO DA XAVASCA DA SUA MÃE, AQUELA LEITOA MALDITA. DIZ PRA ELA CONGELAR O FEIJÃO QUE HOJE EU VOU CHEGAR TARDE, SEU PUTO. SEU FILHO DUMA PUTA DO CARALHO SE ENXERGA PORRA...\n\nVAI TOMAR NO MEIO DA ÍRIS DO OLHO DO TEU CÚ SEU FILHO DUMA VENDEDORA DE PIROCÓPTERO! SEU PAI VENDE BILHETE DE LOTERIA ESPORTIVA NA FRENTE DA SAPATARIA SEU FILHO DUMA PUTA DO CARALHO.! TOMARA Q SUA VÓ ESCORREGUE NO BOX ENQTO TIVER TOMANDO BANHO E CAIA DE TESTA NA SABONETEIRA SEU CORNO DO CARALHO.! QUERO MAIS EH QUE VC SE FODA JUNTO COM TODA A SUA FAMÍLIA AKELE BANDO DE CATADOR DE GARRAFA DO CENTRO COMUNITÁRIO.!\n\nSUA MÃE DA AULA DE MAMULENGO PROS PRESIDIÁRIOS DO CARANDIRÚ SEU FILHO DA PUTA.! SEU PAI ANDA PUXANDO UMA CARROÇA PELA CIDADE CATANDO PAPELÃO PRA DEPOIS FAZER UM PACOTÃO E VENDER TUDO POR 1 REAL! SUA MÃE ENCAPA SEUS LIVROS E CADERNOS COM SACO DE ARROZ TIO JOÃO SEU FILHO DUMA LAVADERA DO CARALHO.! SEU PAI VENDE REDE NO FAROL SEU FILHO DA PUTA.! SEU AVÔ CONSERTA PANELA DE PRESSÃO E AMOLA FACA DE PORTA EM PORTA SEU FILHU DUM PÉ DE AIPIM.! SEU PAI FAZ CARRETO DE KOMBI PORRA... CARALHO.! VAI TOMA NO CÚ SEU FILHO DA PUTA EH ESSA PORRA DESSE CARALHO ESPACIAL VUANU ATRÁS DE VOCÊ PORRA VAI TOMA NO CÚ CARALHO.!\n\nQUERO MAIS EH Q VC SE FODA E QUE A TOWNER Q SEU PAI USA PRA TRABALHAR (PERUEIRO FILHO DA PUTA) PEGUE FOGO COM VC, SUA MÃE, SUA IRMÃ, SUA VÓ E MAIS 3 CLIENTES... SEM CONTAR TBM Q QUERO Q TENHA INFILTRAÇÃO NO SEU BARRACO TODO.! QUERO Q SUA FAMÍLIA TODA SEJA VÍTIMA DUMA EPIDEMIA DE MALÁRIA E FEBRE AMARELA.! E DIGO MAIS! DESEJO QUE VOCÊ TENHA CANCER NO CÉREBRO E QUE SUA MÃE CAIA COM O CÚ NA QUINA DA MESA DA SALA.!\n\nSUA MÃE GUARDA PÉ DE MOLEQUE E SUSPIRO QUE ELA FAZ PRA VENDE EM PACOTE DE MANTEIGA CAMPESINA SEU FILHO DUMA BISCATE RAMPEIRA E SEM DONO DO CARALHO QUERO MAIS EH Q VC MORRA JUNTO COM TODA SUA FAMÍLIA PORRA CARALHO VAI TOMA NO CÚ MERDA VAI SE FUDER... FILHO DUM SACO DE ADUBO MANAH...! SEU PAI FAZ GLOBO DA MORTE DE BARRAFORTE COM SUA MÃE NA GARUPA FILHO DA PUTA.!\n\nSUA MÃE AGUENTA A TORCIDA TODA DO CORINTHIANS E DO FLAMENGO SOZINHA E AINDA PEDE BIS SEU CORNO DO CARALHO, FILHO DA PUTA! SEU PAI É FEIRANTE AQUELE CORNO VENDEDOR DE ALFACE! SUA MÃE PEDE ESMOLA JUNTO COM TEUS TIOS NA FAROL AQUELA MULAMBA DO CARALHO!...SEU MÃE VENDE AMENDOIM SEM CAMISA NO ESTADIO DE FUTEBOL SEU FILHO DUMA VAGABUNDA VADIA! SEU PAI É GAY IGUAL A VOCE SEU FILHO DUMA CADELA SARNENTA, PEGUEI ELE NA GRAVAÇÃO DO PROGRAMA DO LEÃO LOBO PARTICIPANDO DE UMA SURUBA JUNTO COM O CLODOVIL SUA BICHA ENRUSTIDA DO CARALHO!...\n\nSUA MÃE É UMA PISTOLEIRA, (E DAS BOAS) FEZ SERVIÇO COMPLETO PRA MIM E PRA MINHA GALERA, SEU FILHO DE UMA VERDADEIRA PUTA MALDITA!...SEU PAI AQUELE CORNO DO CACETE É GARI, E SUA MÃE É VARREDORA DE RUA SEU FILHO DO CAPETA!...\n\nESPERO QUE VOCE SE FODA, MAS QUE SE FODA MESMO, E QUE VOCE SEJA ATROPELADO POR UM TREM, E QUANDO SEUS PEDAÇOS CHEGAREM NO IML, O LEGISTA AINDA COMA SEU CU HAHAHAHA, ATÉ MORTO SE TA DANDO O RABO RAPAZ... SE FODE FILHO DE UMA RAPARIGA DO MATO...SUA MÃE DIRIGI CAMINHÃO COM AS TETAS DE FORA, AQUELA VACA GORDA FILHA DA PUTA! ...SEU PAI TEM CARTEIRINHA VIP NO GALA GAY AQUELE TRANSFORMISTA DO CARALHO...PORRA! VAI SE FUDE SEU NERD DO CARALHO!...VOCE NÃO NASCEU, VOCE FOI CAGADO SEU MONTE DE MERDA DE CAVALO!`)
}

if(budy2.includes("bom dia")) {
//talking()
await sleep(1000)
hora5 = Number(moment.tz('America/Sao_Paulo').format('HH'))
if(hora5 >= 6 && hora5 < 12){
setTimeout(() => {reagir("☀️")}, 300)
sendAudioPTT(astaup, from, './database/midia/audios/bomdia.m4a', info)
}; if(hora5 >= 12 && hora5 <= 18){
setTimeout(() => {reagir("🍃")}, 300)
reply(`Está de tarde... 🍃`)
sendAudioPTT(astaup, from, './database/midia/audios/boatarde.m4a', info)
}; if(hora5 >= 18 && hora5 <= 23){
setTimeout(() => {reagir("🌙")}, 300)
reply(`Está de noite... 🌙`)
sendAudioPTT(astaup, from, './database/midia/audios/boanoite.m4a', info)
}; if(hora5 >= 0 && hora5 < 6){
setTimeout(() => {reagir("🌑")}, 300)
reply(`Está de madrugada... 🌑`)
sendAudioPTT(astaup, from, './database/midia/audios/boanoite.m4a', info)
}
}

if(budy2.includes("boa tarde")) {
//talking()
await sleep(1000)
hora5 = Number(moment.tz('America/Sao_Paulo').format('HH'))
if(hora5 >= 12 && hora5 < 18){
setTimeout(() => {reagir("🍃")}, 300)
sendAudioPTT(astaup, from, './database/midia/audios/boatarde.m4a', info)
}; if(hora5 >= 18 && hora5 <= 23){
setTimeout(() => {reagir("🌙")}, 300)
reply(`Está de noite... 🌙`)
sendAudioPTT(astaup, from, './database/midia/audios/boanoite.m4a', info)
}; if(hora5 >= 0 && hora5 < 6){
setTimeout(() => {reagir("🌑")}, 300)
reply(`Está de madrugada 🌑`)
sendAudioPTT(astaup, from, './database/midia/audios/boanoite.m4a', info)
}; if(hora5 >= 6 && hora5 < 12){
setTimeout(() => {reagir("☀️")}, 300)
reply(`Está de dia ☀️`)
sendAudioPTT(astaup, from, './database/midia/audios/bomdia.m4a', info)
}
}

if(budy2.includes("boa noite")) {
//talking()
await sleep(1000)
hora5 = Number(moment.tz('America/Sao_Paulo').format('HH'))
if(hora5 >= 18 && hora5 <= 23){
setTimeout(() => {reagir("🌙")}, 300)
sendAudioPTT(astaup, from, './database/midia/audios/boanoite.m4a', info)
}; if(hora5 >= 0 && hora5 < 6){
setTimeout(() => {reagir("🌑")}, 300)
sendAudioPTT(astaup, from, './database/midia/audios/boanoite.m4a', info)
}; if(hora5 >= 6 && hora5 < 12){
setTimeout(() => {reagir("☀️")}, 300)
reply(`Está de dia... ☀️`)
sendAudioPTT(astaup, from, './database/midia/audios/bomdia.m4a', info)
}; if(hora5 >= 12 && hora5 < 18){
setTimeout(() => {reagir("🍃")}, 300)
reply(`Está de tarde... 🍃`)
sendAudioPTT(astaup, from, './database/midia/audios/boatarde.m4a', info)
}
}

}

if(messagesC.includes('exec')) {
if(!isOwner && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.indexOf(PR_String) >= 0) {
 if(!isGroupAdmins) {
 astaup.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted: seloctt})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
astaup.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
setTimeout( () => {
astaup.sendMessage(from, {text: `⚠️ *APLICANDO PUNIÇÃO AO USUÁRIO POR CITAR UMA PALAVRA PROIBIDA NESTE GRUPO*`}).catch(e => {
astaup.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted: seloctt})
})       							
}, 200)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

//===============(SIMIH-1)===============\\

if(isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
setTimeout(() => {reagir("❌")}, 1000)
//writing()
await sleep(1000)
AB = similarityCmd(command)
notcmd = privateCmd(sender, prefix+command, AB[0].comando, AB[0].porcentagem)
butao = []
if(AB[0].porcentagem > 0) butao.push({text: `🔎 𝗦𝗨𝗚𝗘𝗦𝗧𝗔̃𝗢`, command: AB[0].comando + (budy.split(prefix+command).length > 1 ? budy.split(prefix+command)[1] : ``)})
butao.push({text: `${AB[0].porcentagem <= 0 ? `🔎 ` : ``}𝗠𝗘𝗡𝗨 🔍`, command: prefix+`menu`})
EnvButton(from, [notcmd, NomeDoBot], astaup, butao, seloctt)
}

if((budy.toLowerCase() === `reiniciar` || budy.toLowerCase() === `reinicia`) && isOwner && !isBot) {reply(`_Reiniciando sistemas..._ 🤖`)
await sleep(700)
process.exit()}

if(budy2 === 'nome grupos' && isOwner) {
  if(!isGroup) return reply('Só funciona em grupo.')
  for(g of allGroups) {
    if(isGroupInRent(g.id)) {
      getGroupRent(g.id).nome = g.subject
      saveRent()
    }
  }
}

if(isGroup && isAudio && isAutoTranscricao) {
  var audioMessage = info?.message?.audioMessage
  try {
    if(audioMessage.fileLength <= 2100000) {
      var mediaData = await downloadContentFromMessage(audioMessage, 'audio');
      let bufferArray = [];
      for await(var chunk of mediaData) {
        bufferArray.push(chunk);
      }
      var audioBuffer = Buffer.concat(bufferArray);
      var audioFilePath = `./database/totext/translate/totext-${sender}.mp3`;
      fs.writeFileSync(audioFilePath, audioBuffer);
      var uploadResponse = await axios.post('https://api.assemblyai.com/v2/upload', audioBuffer, {headers: {'authorization': assemblyApiKey, 'content-type': 'application/octet-stream'}});
      var audioUrl = uploadResponse.data.upload_url;
      var transcriptResponse = await axios.post('https://api.assemblyai.com/v2/transcript', {audio_url: audioUrl, speaker_labels: true, language_code: 'pt'}, {headers: {'authorization': assemblyApiKey, 'content-type': 'application/json'}});
      var transcriptId = transcriptResponse.data.id;
      let transcriptStatus = 'processing';
      let transcriptData;
      while(transcriptStatus === 'processing') {
        var statusResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {headers: {'authorization': assemblyApiKey}});
        transcriptData = statusResponse.data;
        transcriptStatus = transcriptData.status;
        if(transcriptStatus === 'failed') {throw new Error("A transcrição falhou.")}
        if(transcriptStatus === 'processing') {await new Promise(resolve => setTimeout(resolve, 3000))}
      }
      if(transcriptData.text) {
        //writing()
        await sleep(1000)
        reply(transcriptData.text)
      } else console.log(`Erro ao enviar a auto transcrição`)
    }
  } catch(e) {console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))}
}

if(isGroup && budy2.includes('@') && vip.length > 0) {
  let findafk = []
  budy2.split(' ').forEach(a123vip => {
    if(a123vip.includes('@')) {
      findafk.push(identArroba(a123vip))
    }
  })
  let matheuzinho = []
  findafk.forEach(b123vip => {
    if(vip.some(s => s.id == b123vip)) {
      let vipinfo = vip.filter(s => s.id == b123vip)[0]
      let dadosafk = vipinfo.afk.dados
      let filtro = dadosafk.filter(f => f.ativo)
      if(filtro.length > 0) {
        let timst = formatTimestamp(filtro[0].data)
        let tempoDeAusente = sendHours('DD/MM') == `${timst.day}/${timst.month}` ? `${timst.hours}:${timst.minutes}` : `${timst.day}/${timst.month} às ${timst.hours}:${timst.minutes}`
        let afkpush = {
          id: vipinfo.id,
          nome: filtro[0].nome,
          dono: filtro[0].dono,
          motivo: filtro[0].motivo,
          data: filtro[0].data,
          tempooff: tempoDeAusente
        }
        console.log(colors.green(afkpush))
        matheuzinho.push(afkpush)
      }
    }
  })
  if(matheuzinho.length > 0) {
    nomes = matheuzinho.length > 1 ? matheuzinho.map(n => n.nome).join(', ') : matheuzinho[0].nome
    cax = ["Já ", "Por outro lado, ", "Agora ", "Dessa vez "]
    ale = ["Aguarde um momento 😪", "Segura as pontas 😀", "Volte mais tarde ✋🏽", "Terás tuas dúvidas respondidas quando ele/a voltar 😶‍🌫️", "Quando ele/a voltar, irá responder todas as suas dúvidas 🫶🏽"]
    if(matheuzinho[0].dono) {
      txt =
`Olá ${pushname} ^-^

Infelizmente, o ${nomes} est${matheuzinho.length > 1 ? 'ão' : 'á'} indisponíve${matheuzinho.length > 1 ? 'is' : 'l'} no momento... 😔 ${matheuzinho.map(m => `${matheuzinho.length > 1 ? `o @${m.id.split('@')[0]}` : `Ele`} está 『 ${m.motivo} 』 desde ${m.tempooff}.`).join(` ${cax[Math.floor(Math.random()*cax.length)]}`)}${matheuzinho.length > 1 ? '\n\nQuando eles voltarem, irão' : '.. Quando ele voltar, irá'} responder todas as suas dúvidas 🫶🏽

Tenha ${tempo_pro + " " + tempo.toLowerCase() + " " + tempo_emoji}`
    } else {
      txt = `${tempo} ${pushname} '-' ${matheuzinho.map(g => `\nO/a @${g.id.split('@')[0]} está "${g.motivo}" desde ${g.tempooff}... ${ale[Math.floor(Math.random()*ale.length)]}`).join(``)}`
    }
    mention(txt)
  }
}

if(existKeyRentSystem(body)) validarKey(from, sender, prefix, astaup, mention, isGroup, body)

if(!isCmd && body.includes(`http`) && isJsonIncludes(autodw, sender)) idAllLinkAutoDW(astaup, from, sender, body, info)

if(isGroup && JSON.stringify(revealmsg).includes(from)) {
  matheuzinho = info.message
  if(type == "stickerMessage") {
    blk = await getFileBuffer(matheuzinho.stickerMessage, 'sticker')
    if(matheuzinho?.stickerMessage?.contextInfo?.quotedMessage) {
      mentioned = matheuzinho.stickerMessage.contextInfo.participant
      astaup.sendMessage(obrigadoEXT.idprivategp, {sticker: blk, contextInfo: {externalAdReply: {title: `${pushname} (${addNumberMais(sender)})`}}}, {quoted: {
        key: {
          fromMe: false,
          participant: mentioned
        },
        message: matheuzinho.stickerMessage.contextInfo.quotedMessage
      }})
    } else astaup.sendMessage(obrigadoEXT.idprivategp, {sticker: blk, contextInfo: {externalAdReply: {title: `${pushname} (${addNumberMais(sender)})`}}})
  }
  if(type == "imageMessage") {
    blk = await getFileBuffer(matheuzinho.imageMessage, 'image')
    if(matheuzinho?.imageMessage?.contextInfo?.quotedMessage) {
      mentioned = matheuzinho.imageMessage.contextInfo.participant
      astaup.sendMessage(obrigadoEXT.idprivategp, {image: blk, caption: (matheuzinho?.imageMessage?.caption || ``) + `\n\n> ${pushname} (${addNumberMais(sender)})`}, {quoted: {
        key: {
          fromMe: false,
          participant: mentioned
        },
        message: matheuzinho.imageMessage.contextInfo.quotedMessage
      }})
    } else astaup.sendMessage(obrigadoEXT.idprivategp, {image: blk, caption: (matheuzinho?.imageMessage?.caption || ``) + `\n\n> ${pushname} (${addNumberMais(sender)})`})
  }
  if(type == "audioMessage") {
    blk = await getFileBuffer(matheuzinho.audioMessage, 'audio')
    if(matheuzinho?.audioMessage?.contextInfo?.quotedMessage) {
      mentioned = matheuzinho.audioMessage.contextInfo.participant
      astaup.sendMessage(obrigadoEXT.idprivategp, {audio: blk, contextInfo: {externalAdReply: {title: `${pushname} (${addNumberMais(sender)})`}}}, {quoted: {
        key: {
          fromMe: false,
          participant: mentioned
        },
        message: matheuzinho.audioMessage.contextInfo.quotedMessage
      }})
    } else astaup.sendMessage(obrigadoEXT.idprivategp, {audio: blk, contextInfo: {externalAdReply: {title: `${pushname} (${addNumberMais(sender)})`}}})
  }
  if(type == "videoMessage") {
    if(matheuzinho.seconds <= 120) {
      if(matheuzinho?.gifPlayback && matheuzinho?.gifPlayback == true) {
        gif = true
      } else { gif = false }
      blk = await getFileBuffer(matheuzinho.videoMessage, 'video')
      if(matheuzinho?.videoMessage?.contextInfo?.quotedMessage) {
        mentioned = matheuzinho.videoMessage.contextInfo.participant
        astaup.sendMessage(obrigadoEXT.idprivategp, {video: blk, caption: (matheuzinho?.videoMessage?.caption || ``) + `\n\n> ${pushname} (${addNumberMais(sender)})`}, {quoted: {
          key: {
            fromMe: false,
            participant: mentioned
          },
          message: matheuzinho.videoMessage.contextInfo.quotedMessage
        }})
      } else astaup.sendMessage(obrigadoEXT.idprivategp, {video: blk, caption: (matheuzinho?.videoMessage?.caption || ``) + `\n\n> ${pushname} (${addNumberMais(sender)})`, gifPlayback: gif})
    }
  }
  if(type == "conversation" && !matheuzinho?.extendedTextMessage?.text) {
    astaup.sendMessage(obrigadoEXT.idprivategp, {text: matheuzinho.conversation + `\n\n> ${pushname} (${addNumberMais(sender)})`})
  }
  if(type == "extendedTextMessage" && matheuzinho?.extendedTextMessage?.text) {
    mentioned = matheuzinho.extendedTextMessage.contextInfo.participant
    astaup.sendMessage(obrigadoEXT.idprivategp, {text: matheuzinho.extendedTextMessage.text + `\n\n> ${pushname} (${addNumberMais(sender)})`}, {quoted: {
      key: {
        fromMe: false,
        participant: mentioned
      },
      message: matheuzinho.extendedTextMessage.contextInfo.quotedMessage
    }})
  }
  /*if(q != undefined) {
    sendMess(obrigadoEXT.idprivategp, "👥 *Grupo:* "+groupName+"\n👤 *Usuário:* "+pushname+"\n📱 *Número:* wa.me/"+sender.split("@")[0]+"\n🗣️ *Mensagem:* "+body)
  }*/
}

if(isGroup && isJsonIncludes(sorteio, from) && info.message?.reactionMessage) {
  rc = info.message.reactionMessage
  AB = sorteio.map(i => i.groupId).indexOf(from)
  min = (contarMin(sorteio[AB].data) + (contarMin(sorteio[AB].data) < contarMin(sendHours("HH:mm")) ? 1440 : 0) + (contarDias(sendHours("DD/MM/YYYY")) * 1440)) - ((contarDias(sendHours("DD/MM/YYYY")) * 1440) + contarMin(sendHours("HH:mm")))
  if(convertUserID(rc.key.participant) == botNumber && rc.text == sorteio[AB].emoji && (contarMin(sendHours("HH:mm")) + (contarDias(sendHours("DD/MM/YYYY")) * 1440)) < (contarMin(sorteio[AB].data) + (contarDias(sendHours("DD/MM/YYYY")) * 1440) + (contarMin(sendHours("HH:mm")) > contarMin(sorteio[AB].data) ? 1440 : 0)) && !isJsonIncludes(sorteio[AB].participants, sender) && sorteio[AB].participants.length < sorteio[AB].total) {
    sorteio[AB].participants.push(sender)
    saveJSON(sorteio, "./operacao/sorteio.json")
    hehe = min > 60 ? `${(min - (min % 60)) / 60} hora${((min - (min % 60)) / 60) !== 1 ? "s" : ""} e ${min % 60} minuto${(min % 60) !== 1 ? "s" : ""}` : min > 5 ? `${min} minutos` : `alguns minutos`
    txt = `_Bem vindo (a) *@${sender.split("@")[0]}*, você é o/a usuário (a) ${sorteio[AB].participants.length}/${sorteio[AB].total}... Fique atento (a), o sorteio ocorrerá em ${hehe}_ 🥰`
    astaup.sendMessage(from, {text: txt, mentions: [sender]})
    if(sorteio[AB].participants.length >= sorteio[AB].total) {
      await sleep(1000)
      astaup.sendMessage(from, {text: `[❗] O último participante entrou... Vagas encerradas ❌`, mentions: groupMembers.map(i => i.id)})
    }
  }
}

async function sortTime() {
  if(sorteio.length > 0) {
    for(a of sorteio) {
      grupo = (await astaup.groupMetadata(a.groupId)).participants
      menc = []
      if(contarMin(sendHours("HH:mm")) >= contarMin(a.data) && !a.start) {
        a.start = true
        saveJSON(sorteio, "./operacao/sorteio.json")
        if(a.participants.length > a.ganhadores) {
          txt = `\t\t\t\t\t⚠ *ATENÇÃO* ⚠\n_Iremos dar início ao sorteio de ↴_\n⇒ ${a.texto}\n_Com direito a ${a.ganhadores} ganhador${a.ganhadores != 1 ? "es" : ""}_\n\n`
          if(a.ganhadores > 1) {
            txt += `🎉🥳 _Nossos ganhadores ${tempo == "Bom dia" ? "deste dia" : tempo == "Boa tarde" ? "desta tarde" : "desta noite"} são:_`
            caixa = a.participants
            for(b = 0; b < a.ganhadores; b++) {
              pp = alerandom(caixa.length)
              txt += `\n • @${caixa[pp].split("@")[0]}`
              menc.push(caixa[pp])
              caixa.splice(pp, 1)
            }
          } else {
            usu = a.participants[alerandom(a.participants.length)]
            menc.push(usu)
            txt += `🎉🥳 _Nosso único e maior sortudo/a de hoje é:\t\t\n\t\t\t» @${usu.split("@")[0]} «`
          }
          txt += `\n\n🥰 *_PARABÉNS_*`
        } else {
          for(c of grupo) {
            if(c.admin == "admin") menc.push(c.id)
          }
        txt = `😕 Visto que dado o horário do sorteio, haviam apenas ${a.participants.length}/${a.ganhadores} participantes, não foi possível realizar o mesmo...`
        }
        astaup.sendMessage(a.groupId, {text: txt, mentions: menc})
        AB = sorteio.map(s => s.groupId).indexOf(a.groupId)
        sorteio.splice(AB, 1)
        saveJSON(sorteio, "./operacao/sorteio.json")
      }
    }
  }
}

sortTime();

if(body != undefined && !info?.message?.reactionMessage && !info?.message?.pollUpdateMessage && isGroup && isLevelingOn) {
  usu = sender
  if(!isYouInLevel(usu)) {
    level.push({id: usu, level: 1, contador: 0, block: false})
    saveLeVeLdb(level)
  } else {
    if(!isBlockGetLevelUser(usu)) {
      if(isImage || isAudio || isCmd) { quantxp = 2 } else if(isVideo || isSticker) { quantxp = 3 } else if(isContact) { quantxp = 4 } else if(isLocation) { quantxp = 5 } else { quantxp = 1 }
      if(isJsonIncludes(cardxp, usu) && getCardXPusu(usu).active) {
        cardusu = getCardXPusu(usu)
        card = quantxp * cardusu.cards[cardusu.mapa].multi
      } else { card = quantxp }
      butao = [{type: `cmd`, text: `𝙈𝙔 𝙇𝙀𝙑𝙀𝙇 ✨`, command: prefix+`level`}, {type: `cmd`, text: `𝙍𝘼𝙉𝙆 🏆`, command: prefix+`rank`}]
      for(i = 0; i < card; i++) {
        lvusu = levelDBuser(usu)
        addXP(usu, 1)
        switch(lvusu.contador) {
          case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
            addlevel(usu, 1)
            txt =
`╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕\t\t\t\t💎 𝗟𝗘𝗩𝗘𝗟 𝗨𝗣 💎
╽║
╽╟ • ᴜꜱᴜᴀ́ʀɪᴏ: @${usu.split("@")[0]}
╽║
╽╟ • ᴛᴏᴛᴀʟ ᴇxᴘᴇʀɪᴇɴᴄᴇ ~>『 ${lvusu.contador} XP 』
╽║
╽╟ • ɴᴇᴡ ᴘᴀᴛᴇɴᴛᴇ: ${patente(lvusu.contador + 1)}
╽║
╽╟ • ʟᴇᴠᴇʟ ᴅᴇꜱʙʟᴏǫᴜᴇᴀᴅᴏ ↴
╽║\t\t\t\t${lvusu.level-1} -> ${lvusu.level} 🎟️
╽║
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
          //sendButton(from, {text: txt, footer: NomeDoBot, mentions: [usu]}, astaup, usu, butao)
          astaup.sendMessage(from, {text: txt, mentions: [usu]})
        break
        case 10000000:
          addlevel(usu, 1)
          txt =
`✨ Parabéns ${pushname}, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano Da Black System 🎩*

🔬 Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo} ${tempo_emoji}`
        sendButton(from, {text: txt, footer: NomeDoBot, mentions: [usu]}, astaup, usu, butao)
        break
        case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
          addlevel(usu, 1)
          txt =
`╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕\t\t\t🎇 𝗦𝗨𝗣𝗥𝗘𝗠𝗘 𝗟𝗘𝗩𝗘𝗟 𝗨𝗣 🎇
╽║
╽╟ • ᴜꜱᴜᴀ́ʀɪᴏ: @${usu.split("@")[0]}
╽║
╽║\t『 🎩 𝚅𝚎𝚝𝚎𝚛𝚊𝚗𝚘 𝙳𝚊 𝙱𝚕𝚊𝚌𝚔 𝚂𝚢𝚜𝚝𝚎𝚖 🎩 』
╽║
╽╟ • ᴛᴏᴛᴀʟ ᴇxᴘᴇʀɪᴇɴᴄᴇ ~>『 ${lvusu.contador} XP 』
╽║
╽╟ • ʟᴇᴠᴇʟ ᴅᴇꜱʙʟᴏǫᴜᴇᴀᴅᴏ ↴
╽║\t\t\t\t${lvusu.level-1} -> ${lvusu.level} 🎟️
╽║
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
          //sendButton(from, {text: txt, footer: NomeDoBot, mentions: [usu]}, astaup, usu, butao)
          astaup.sendMessage(from, {text: txt, mentions: [usu]})
          break
        }
      }
    }
  }
}

if(isGroup && fs.existsSync(`./jogos/mina-game/campo-minado-${from}.json`)) {
  game = `./jogos/mina-game/campo-minado-${from}.json`
  campominado = JSON.parse(fs.readFileSync(game))
  if(campominado.começou == false) {
    mini = budy2.toLowerCase().replace("ã", "a")
    if(campominado.chamado == sender) {
      if(mini === "sim" || mini === "s") {
        campominado.começou = true
        campominado.jogadores.push({id: sender, erros: 3})
        saveJSON(campominado, game)
        txt = `⚠️ Atenção @${campominado.criador.split("@")[0]}, ${getname(sender)} aceitou seu desafio 💣😜\nEscreva a coordenada do campo para jogar e ${prefix}infominagame para obter mais informações\n\n${`☸️1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣`.slice(0, Number(campominado.totalquad * 3) + 2)}`
        for(i = 1; i < (campominado.totalquad + 1); i++) {
          txt += `\n`
          if(i == 1) txt += ` Ａ `
          if(i == 2) txt += ` Ｂ `
          if(i == 3) txt += ` Ｃ `
          if(i == 4) txt += ` Ｄ `
          if(i == 5) txt += ` Ｅ `
          if(i == 6) txt += ` Ｆ `
          if(i == 7) txt += ` Ｇ `
          if(i == 8) txt += ` Ｈ `
          if(i == 9) txt += ` Ｉ `
          txt += `🟫`.repeat(campominado.totalquad)
        }
        mention(txt)
      }
      if(mini === "nao" || mini === "n") {
        mention(`😓 Sinto muito @${campominado.criador.split("@")[0]}, ${getname(sender)} não aceitou seu desafio (mata ele ${getname(campominado.criador)} 😈) 💣`)
        fs.unlinkSync(game)
      }
    }
  } else {
    if(isJsonIncludes(campominado.jogadores, sender)) {
      hehe = campominado.play == 0 ? 1 : 0
      mxm = campominado.totalquad
      delt = []
      for(v = 1; v < (mxm + 1); v++) {
        for(r = 1; r < (mxm + 1); r++) {
          if(r == 1) w = "a"
          if(r == 2) w = "b"
          if(r == 3) w = "c"
          if(r == 4) w = "d"
          if(r == 5) w = "e"
          if(r == 6) w = "f"
          if(r == 7) w = "g"
          if(r == 8) w = "h"
          if(r == 9) w = "i"
          delt.push(v+w)
        }
      }
      caixa = []
      for(a = 1; a < (mxm + 1); a++) {
        if(a == 1) { c = ` Ａ `; c2 = "a" }
        if(a == 2) { c = ` Ｂ `; c2 = "b" }
        if(a == 3) { c = ` Ｃ `; c2 = "c" }
        if(a == 4) { c = ` Ｄ `; c2 = "d" }
        if(a == 5) { c = ` Ｅ `; c2 = "e" }
        if(a == 6) { c = ` Ｆ `; c2 = "f" }
        if(a == 7) { c = ` Ｇ `; c2 = "g" }
        if(a == 8) { c = ` Ｈ `; c2 = "h" }
        if(a == 9) { c = ` Ｉ `; c2 = "i" }
        caixa.push({letra: c, exp: []})
        for(b = 1; b < (mxm + 1); b++) {
          d = `${b + c2}`
          e = campominado.plantado.includes(d) ? campominado.minas.includes(d) ? `💣` : `🟩` : `🟫`
          caixa[a - 1].exp.push({nmr: d, esc: e})
        }
      }
      rev = budy2.toLowerCase()
      miniletra = Number(rev.slice(0, 1)) ? rev : reverse(rev)
      if(delt.includes(miniletra)) {
        if(campominado.jogadores[campominado.play].id == sender) {
          if(campominado.plantado.includes(miniletra)) return reply("Coordenada já escolhida 🤦🏻‍♂️")
          campominado.plantado.push(miniletra)
          campominado.play = hehe
          saveJSON(campominado, game)
          for(a1 = 0; a1 < caixa.length; a1++) {
            for(a2 = 0; a2 < caixa[a1].exp.length; a2++) {
              if(isJsonIncludes(campominado.plantado, miniletra) && miniletra == caixa[a1].exp[a2].nmr) {
                caixa[a1].exp[a2].esc = `🟩`
              }
            }
          }
          if(campominado.minas.includes(miniletra)) {
            AB = campominado.jogadores.map(t => t.id).indexOf(sender)
            if(campominado.jogadores[AB].erros > 1) {
              campominado.jogadores[AB].erros -= 1
              saveJSON(campominado, game)
              for(b1 = 0; b1 < caixa.length; b1++) {
                for(b2 = 0; b2 < caixa[b1].exp.length; b2++) {
                  if(isJsonIncludes(campominado.minas, miniletra) && miniletra == caixa[b1].exp[b2].nmr) {
                    caixa[b1].exp[b2].esc = `💣`
                  }
                }
              }
              reply(`BOOM!! 💣 cê explodiu meu prç 😂 felizmente cê ainda tem +${campominado.jogadores[AB].erros} chance${Number(campominado.jogadores[AB].erros) > 1 ? "s" : ""}`)
            } else {
              for(b1 = 0; b1 < caixa.length; b1++) {
                for(b2 = 0; b2 < caixa[b1].exp.length; b2++) {
                  if(isJsonIncludes(campominado.minas, miniletra) && miniletra == caixa[b1].exp[b2].nmr) {
                    caixa[b1].exp[b2].esc = `💣`
                  }
                  if(isJsonIncludes(campominado.minas, caixa[b1].exp[b2].nmr) && caixa[b1].exp[b2].esc == `🟫`) {
                    caixa[b1].exp[b2].esc = `⚠`
                  }
                }
              }
              mention(`ㅤㅤㅤㅤㅤㅤ🏆 *WIN!!!* 🏆\n\n${`☸️1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣`.slice(0, Number(campominado.totalquad * 3) + 2)}\n${caixa.map(x => x.letra+`${x.exp.map(y => y.esc).join("")}`).join(`\n`)}\n\n*@${sender.split("@")[0]} explodiu haha* 💣😜\n*Parabéns @${campominado.jogadores[hehe].id.split("@")[0]} por ter sobrevivido... Você ganhou* 🎉🥳`)
              return fs.unlinkSync(game)
            }
          }
          //reboot
          await sleep(500)
          mention(`*Sua vez @${campominado.jogadores[hehe].id.split("@")[0]} 😜*\n${`☸️1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣`.slice(0, Number(campominado.totalquad * 3) + 2)}\n${caixa.map(x => x.letra+`${x.exp.map(y => y.esc).join("")}`).join(`\n`)}`)
        } else return mention(`*Agora é vez do @${campominado.jogadores[campominado.play].id.split("@")[0]} jogar* 💣`)
      }
    }
  }
}

if(isGroup && isJsonIncludes(adivinharnmr, from)) {
  AB = adivinharnmr.map(i => i.groupId).indexOf(from)
  AC = adivinharnmr[AB].participants.map(i => i.id).indexOf(sender)
  if(AC >= 0) {
    advnrnmr = adivinharnmr[AB].participants[AC]
    mini = rmLetras(budy2)
    if(!advnrnmr.fim) {
      if(mini == "pronto") {
        if(advnrnmr.progresso != 5) {
          if(advnrnmr.progresso == 0) txt = `🧙🏽‍♂️ _*Passo nº1:* pense em um número aleatório entre 5-50_`
          if(advnrnmr.progresso == 1) txt = `🧙🏽‍♂️ _*Passo nº2:* multiplique esse número por 2_`
          if(advnrnmr.progresso == 2) {
            nmr = (alerandom(14) + 1) * 2
            advnrnmr.resultado = nmr / 2
            saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
            txt = `🧙🏽‍♂️ _*Passo nº3:* agora adicione +${nmr} a este resultado_`
          }
          if(advnrnmr.progresso == 3) txt = `🧙🏽‍♂️ _*Passo nº4:* feito isso, divida o resultado por 2_`
          if(advnrnmr.progresso == 4) txt = `🧙🏽‍♂️ _*Passo nº5:* agora subtraia este resultado pelo primeiro número que você pensou_`
          advnrnmr.progresso += 1
          saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
          return reply(txt)
        } else {
          advnrnmr.fim = true
          saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
          return reply(`🧙🏽‍♂️ _Pela minha extrema sabedoria, posso presumir que o resultado final seja igual a ↴_\n\t\t\t\t\t\t\t» ${advnrnmr.resultado} «\n\n_Se eu acertei, digite *"sim"...* Caso contrário, digite *"não"* (sem as aspas é claro)_`)
        }
      }
    } else {
      if(mini == "sim" || mini == "nao") {
        snrp = mini == "sim" ? "🧙🏽‍♂️ O grande sábio sempre tem todas as respostas ✨" : "🧙🏽‍♂️ Podes mentir o quanto quiser, mas nós dois sabemos a resposta..."
        adivinharnmr[AB].participants.splice(AC, 1)
        saveJSON(adivinharnmr, `./jogos/adivinharnmr.json`)
        return reply(snrp)
      }
    }
  }
}

//início do anagrama
if(fs.existsSync(`./jogos/anagrama/anagrama-${from}.json`) && isGroup && isModobn) {
  ana = alerandom(palavrasANA.length)
  anagrama = `./jogos/anagrama/anagrama-${from}.json`
  dataAnagrama = JSON.parse(fs.readFileSync(anagrama))
  if(rmLetras(budy2.toLowerCase().slice(0, 4)) == rmLetras(dataAnagrama.original.toLowerCase().slice(0, 4)) && rmLetras(budy2.toLowerCase()) != rmLetras(dataAnagrama.original.toLowerCase())) return reply(`Quase lá ${pushname}`)
  if(rmLetras(budy2.toLowerCase()) == rmLetras(dataAnagrama.original.toLowerCase())) {
    var bglh = [
      `[ ❗ ] Irei reiniciar o jogo em 3️⃣`,
      `[ ❗ ] Irei reiniciar o jogo em 2️⃣`,
      `[ ❗ ] Irei reiniciar o jogo em 1️⃣`,
      `✅ START THE GAME ✅`
    ]
    let { key } = await astaup.sendMessage(from, {text: `Parabéns ${pushname}, você acertou a palavra do anagrama... 🎉🥳`}, {quoted: info})//primeira mensagem
    await sleep(1000)
    for(let i = 0; i < bglh.length; i++) {
      await sleep(1000)
      await astaup.sendMessage(from, {text: bglh[i], edit: key }, {quoted: info})
    }
    saveJSON(palavrasANA[ana], anagrama)
    astaup.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ *DESCUBRA A PALAVRA*
│➽ *ANAGRAMA:* ${shuffle(palavrasANA[ana].embaralhada)}
│➽ *DICA:* ${palavrasANA[ana].dica}
╰────────────────────────
`}, {quoted: info})
  }
}
//fim do anagrama

if(fs.existsSync(`./jogos/quizanimais/quizanimais-${from}.json`) && budy2.includes(`${JSON.parse(fs.readFileSync(`./jogos/quizanimais/quizanimais-${from}.json`)).original.toLowerCase().replace("ã", "a").replace("á", "a").replace("ê", "e").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ô", "o").replace("ú", "u")}`) && isGroup && args.length <= 2) {
fs.unlinkSync(`./jogos/quizanimais/quizanimais-${from}.json`)
var bglh = [
`[ ❗ ] Irei reiniciar o jogo em 3️⃣`,
`[ ❗ ] Irei reiniciar o jogo em 2️⃣`,
`[ ❗ ] Irei reiniciar o jogo em 1️⃣`,
`✅ START THE GAME ✅`
]
let { key } = await astaup.sendMessage(from, {text: `Parabéns, você acertou o animal 🎉`}, {quoted: seloctt})//primeira mensagem
await sleep(1000)
for(let i = 0; i < bglh.length; i++) {
await sleep(1000)
await astaup.sendMessage(from, {text: bglh[i], edit: key }, {quoted: seloctt})
}
matheuzinho = Math.floor(Math.random() * quizanimais.length)
fs.writeFileSync(`./jogos/quizanimais/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[matheuzinho])}`)
astaup.sendMessage(from, {image: {url: quizanimais[matheuzinho].foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`})
}

if(JSON.stringify(music).includes(from) && isGroup) {
  AB = music.map(i => i.groupId).indexOf(from)
  if(JSON.stringify(music[AB].usus).includes(sender)) {
    BC = music[AB].usus.map(i => i.id).indexOf(sender)
    if(budy2.toLowerCase().replace("á", "a") === `audio` && isGroup) {
      link = music[AB].usus[BC].urlAudio.replace(`#API_KEY_ALEATORY#`, API_KEY_ALEATORY).replace(`#API_KEY_SABRINA#`, API_KEY_SABRINA).replace(`#API_KEY_FREE#`, API_KEY_FREE)
      music[AB].usus.splice(BC, 1)
      fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
      try {
        reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`)
        astaup.sendMessage(from, {audio: {url: link}, mimetype: "audio/mpeg"}, {quoted: seloctt}).catch(e => {
          return reply(downon)
        })
      } catch (e) {
        return reply(downoff)
      }
    }
    if(budy2.toLowerCase().replace("í", "i") === `video` && isGroup) {
      link = music[AB].usus[BC].urlVideo.replace(`#API_KEY_ALEATORY#`, API_KEY_ALEATORY).replace(`#API_KEY_SABRINA#`, API_KEY_SABRINA).replace(`#API_KEY_FREE#`, API_KEY_FREE)
      music[AB].usus.splice(BC, 1)
      fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
      try {
        reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚅í𝚍𝚎𝚘ฺ͘.•🛸 ݈݇─`)
        astaup.sendMessage(from, {video: {url: link}, mimetype: "video/mp4"}, {quoted: seloctt}).catch(e => {
          return reply(downon)
        })
      } catch (e) {
        return reply(downoff)
      }
    }
    if(budy2.toLowerCase() === `doc` && isGroup) {
      link = music[AB].usus[BC].urlAudio.replace(`#API_KEY_ALEATORY#`, API_KEY_ALEATORY).replace(`#API_KEY_SABRINA#`, API_KEY_SABRINA).replace(`#API_KEY_FREE#`, API_KEY_FREE)
      nome = music[AB].usus[BC].title
      music[AB].usus.splice(BC, 1)
      fs.writeFileSync("./database/music.json", JSON.stringify(music, null, 2))
      try {
        reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝙳𝚘𝚌𝚞𝚖𝚎𝚗𝚝𝚘ฺ͘.•🛸 ݈݇─`)
        astaup.sendMessage(from, {document: {url: link}, fileName: nome+'.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
          return reply(downon)
        })
      } catch (e) {
        return reply(downoff)
      }
    }
  }
}

if(JSON.stringify(vdddsf).includes(from) && isGroup) {
  AB = vdddsf.map(b => b.idgp).indexOf(from)
  if(JSON.stringify(vdddsf[AB].jogadores).includes(sender)) {
    BC = vdddsf.map(a => a.idvd).indexOf("matheuzinho")
    CD = vdddsf[AB].jogadores.map(i => i.id).indexOf(sender)
    if(budy2.toLowerCase() === "verdade") {
      if(vdddsf[AB].jogadores[CD].tipo == 1) {
        vdddsf[AB].jogadores.splice(CD, 1)
        fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
        sendStickerFromUrl(from, `https://telegra.ph/file/4b43ac115d66362540612.jpg`)
      } else if(vdddsf[AB].jogadores[CD].tipo <= 0) {
        alevdd = Math.floor(Math.random() * vdddsf[BC].verdades.length)
        vdddsf[AB].jogadores[CD].vdouds = vdddsf[BC].verdades[alevdd].vdd
        vdddsf[AB].jogadores[CD].tipo = 1
        fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
        reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 VERDADE 』
✓ -> ${vdddsf[BC].verdades[alevdd].vdd}

_(responda com verdade ou mentira)_`)
      }
    }
    if(budy2.toLowerCase() === "mentira") {
      vdddsf[AB].jogadores.splice(CD, 1)
      fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
      sendStickerFromUrl(from, `https://telegra.ph/file/22e467ada05df439e3401.jpg`)
    }
    if(budy2.toLowerCase() === "desafio") {
      aledsf = Math.floor(Math.random() * vdddsf[BC].desafios.length)
      vdddsf[AB].jogadores[CD].vdouds = vdddsf[BC].desafios[aledsf].dsf
      vdddsf[AB].jogadores[CD].tipo = 2
      fs.writeFileSync("./jogos/vdddsf.json", JSON.stringify(vdddsf, null, 2))
      reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[BC].desafios[aledsf].dsf}

_(quando concluir o desafio, use ${prefix}pronto)_`)
    }
  }
}

if(body != undefined && isGroup && bcgp.length > 0) {
  AB = bcgp.map(i => i.tipo).indexOf("mensagem")
  AC = bcgp.map(i => i.tipo).indexOf("grupos")
  if(bcgp[AB].msg.length <= 0) return
  if(bcgp[AC].gps.length <= 0) return
  if(!JSON.stringify(bcgp[AC].gps).includes(from)) {
    grupo = from
    m = bcgp[AB].msg[0]
    if(m.cobrado == false) {
      msgEmMassa = m.txt
      m.cobrado = true
      fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
      for(i of somembros) {
        astaup.sendMessage(i, {text: msgEmMassa})
      }
      await sleep(5000)
      astaup.groupLeave(grupo)
      bcgp[AB].msg.splice(0, 1)
      fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
      if(bcgp[AB].msg.length > 0) {
        bcgp[AC].gps.push({groupId: grupo})
        fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
      } else {
        bcgp[AC].gps = []
        fs.writeFileSync("./operacao/bcgp.json", JSON.stringify(bcgp, null, 2))
      }
    }
  }
}

//início do akinator

if(isGroup && isJsonIncludes(akinator, from)) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(akinator[AB].jogador == sender && Number(akinator[AB].dia) === Number(sendHours("DD"))) {
    mini = budy2.toLowerCase().replace("ã", "a")
    if(mini == "sim" || mini == "s" || mini == "nao" || mini == "n" || mini == "nao sei" || mini == "nsei" || mini == "provavelmente sim" || mini == "tlvz sim" || mini == "talvez sim" || mini == "provavelmente nao" || mini == "tlvz nao" || mini == "talvez nao") {
      if(akinator[AB].finish > 0) {
        if(mini == "sim" || mini == "s") {
          akinator.splice(AB, 1)
          saveJSON(akinator, "./jogos/akinator.json")
          reply(`Sabia mlk, eu sou demais 🥳`)
        } else if(mini == "nao" || mini == "n") {
          akinator.splice(AB, 1)
          saveJSON(akinator, "./jogos/akinator.json")
          reply(`Hmm não foi dessa vez... Quem sabe na próxima 🧙🏼‍♂️`)
        }
      } else {
        if(aki.progress >= 90 || aki.currentStep >= 90) {
          await aki.win()
          jogo.now = true
          akinator[AB].finish += 1
          saveJSON(akinator, "./jogos/akinator.json")
          i = aki.answers[0]
          txt = `『 ${i.name}: ${i.description} 』\n🧙🏼‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei ? _(responda com "sim" ou "não", sem as aspas)_`
          sendImage(from, i.absolute_picture_path, txt, seloctt)
        } else {
          if(mini == "sim" || mini == "s") nmr = "0"
          if(mini == "nao" || mini == "n") nmr = "1"
          if(mini == "nao sei" || mini == "nsei") nmr = "2"
          if(mini == "provavelmente sim" || mini == "tlvz sim" || mini == "talvez sim") nmr = "3"
          if(mini == "provavelmente nao" || mini == "tlvz nao" || mini == "talvez nao") nmr = "4"
          per = progresso(aki.progress, 100)
          await aki.step(nmr)
          reply(`*⏤͟͟͞͞ ꦿAKINATOR* 🧙🏼‍♂️\n🔮⃤ ${aki.question}\n\n${per}`)
        }
      }
    }
  }
}

//fim do akinator

async function msgGlobal() {
  if(gbmsg[1].msg.length > 0) {
    if(gbmsg[0].gp.length > 0) {
      horacerta = moment.tz('America/Sao_Paulo').format('HH:mm')
      day = moment.tz('America/Sao_Paulo').format('DD')
      for(a of gbmsg[1].msg) {
        if(Number(a.time.replace(":", "")) === Number(horacerta.replace(":", ""))) {
          if(Number(a.save) !== Number(day)) {
            a.save = day
            fs.writeFileSync("./database/gbmsg.json", JSON.stringify(gbmsg, null, 2))
            for(b of gbmsg[0].gp) {
              setTimeout(() => {
                astaup.sendMessage(b.id, {text: a.frase})
              }, 1000)//1 segundo
            }
          }
        }
      }
    }
  }
}

msgGlobal();

async function funcgpByM4() {
  if(funcgp.length > 0) {
    for(a of funcgp) {
      config = funcgp.map(i => i.id).indexOf(a.id)
      if(a.tabela.length > 0) {
        for(b of a.tabela) {
          if(b.tipo == 1) tgp = "ss"
          if(b.tipo == 2) tgp = "mm"
          if(b.tipo == 3) tgp = "HH"
          if(Number(b.save) !== Number(moment.tz('America/Sao_Paulo').format(tgp))) {
            b.save = Number(moment.tz('America/Sao_Paulo').format(tgp))
            fs.writeFileSync("./operacao/funcgp.json", JSON.stringify(funcgp, null, 2))
            if(b.tempo > 1) {
              b.tempo -= 1
              fs.writeFileSync("./operacao/funcgp.json", JSON.stringify(funcgp, null, 2))
            } else {
              if(b.poder == 1) {
                astaup.groupSettingUpdate(a.id, 'announcement')
                sendMess(a.id, `[ ❗ ] O grupo foi fechado após ${b.ordem} pelo ADM ${b.nome} ❌`)
                closegp = funcgp[config].tabela.map(i => i.idfunc).indexOf(b.idfunc)
                funcgp[config].tabela.splice(closegp, 1)
                fs.writeFileSync("./operacao/funcgp.json", JSON.stringify(funcgp, null, 2))
              } else {
                astaup.groupSettingUpdate(a.id, 'not_announcement')
                sendMess(a.id, `[ ❕ ] O grupo foi aberto após ${b.ordem} pelo ADM ${b.nome} ✅`)
                opengp = funcgp[config].tabela.map(i => i.idfunc).indexOf(b.idfunc)
                funcgp[config].tabela.splice(opengp, 1)
                fs.writeFileSync("./operacao/funcgp.json", JSON.stringify(funcgp, null, 2))
              }
            }
          }
        }
      }
    }
  }
}

funcgpByM4();

//========================================\\
}
}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_FREE)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./start.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e.replace(API_KEY_FREE, '*'.repeat(API_KEY_FREE.length)))
}
})
}
}
}
startBlack().catch(e => {
return console.log(e+" -INDEX..ERROS")
})