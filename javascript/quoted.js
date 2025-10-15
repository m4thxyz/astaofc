const fs = require(`fs`)

const { rmLetras } = require(`../config`)

const { getname } = require(`../database/pushnames/senderlid.js`)

const allQuotedName = [
    {
        type: `meta`,
        name: `Meta AI`,
        whatsapp: `13135550002`
    },
    {
        type: `nubank`,
        name: `NuBank`,
        whatsapp: `551151807064`
    },
    {
        type: `microsoft`,
        name: `Microsoft Company`,
        whatsapp: `18772241042`
    },
    {
        type: `mp`,
        name: `Mercado Pago`,
        whatsapp: `5511913024047`
    },
    {
        type: `99`,
        name: `99 pay`,
        whatsapp: `551128386754`
    },
    {
        type: `ifood`,
        name: `IFood`,
        whatsapp: `5511943046009`
    },
    {
        type: `shopee`,
        name: `Shopee`,
        whatsapp: `551321911090`
    }
]

const getInfoQuoted = (name) => {
    caixa = []
    for(i of allQuotedName) {
        if(rmLetras(name) === i.type) caixa.push(i)
    }
    return caixa[0]
}

const existEnterpriseInQuoted = (name) => {
    caixa = []
    for(i of allQuotedName) {
        if(rmLetras(name) === i.type) caixa.push(i)
    }
    return caixa.length > 0 ? true : false
}

const allQuotedCtt = (empresa) => {
    if(empresa.includes("@") && Number(empresa.split("@")[0])) {
        usu = getname(empresa)
        return {
            "key": {
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast", 
                "fromMe": false, 
            },
            "message": {
                "contactMessage": {
                    "displayName": usu,
                    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${usu};;;\nFN:${usu}\nitem1.TEL;waid=${empresa.split("@")[0]}:${empresa.split("@")[0]}\nitem1.X-ABLabel:Celular\nEND:VCARD`, 
                    "contextInfo": {
                        "forwardingScore": 1,  
                        "isForwarded": true  
                    }
                }
            }
        }
    }
    if(!existEnterpriseInQuoted(empresa)) return console.log(`As únicas empresas disponíves são:\n${allQuotedName.map(m => `- ${m.type}`).join(`\n`)}`)
    getinfo = getInfoQuoted(empresa)
    return {
        "key": {
            "participant": getinfo.whatsapp+"@s.whatsapp.net",
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
        },
        "message": {
            "contactMessage": {
                "displayName": getinfo.name, 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${getinfo.name};;;\nFN:${getinfo.name}\nitem1.TEL;waid=${getinfo.whatsapp}:${getinfo.whatsapp}\nitem1.X-ABLabel:Celular\nEND:VCARD`, 
                "contextInfo": {
                    "forwardingScore": 1,  
                    "isForwarded": true  
                }
            }
        }
    }
}

module.exports = allQuotedCtt