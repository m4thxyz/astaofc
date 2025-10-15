# @yupra/baileys

## ⚡ High-Performance Pterodactyl Panel Server  
[🌟 Access Yupra Panel](https://yupra.my.id/)  
**https://yupra.my.id/**

> High-performance Pterodactyl panel with full admin support and reliable server hosting.

---

### 💝 Donation (Solana)
```
8xN639anSq5q64793tseCjPaXNgXEPaKxr91CKEuggKd
```

---

## 🤖 @yupra/baileys — WhatsApp Web API Library

@yupra/baileys is a modern, TypeScript-based library for WhatsApp Web API integration, with built-in fixes for group identifiers like `@lid` and `@jid`.

### ✨ Features
- 🧠 Intelligent `@lid` and `@jid` mapping
- 📱 Multi-device support
- 🔐 End-to-End Encryption support
- 💬 Handles all WhatsApp message types
- ⚡ Fast and modern TypeScript codebase

### 📦 Installation

```bash
npm install @yupra/baileys
# or
yarn add @yupra/baileys
```

### 🚀 Quick Example

```ts
import makeWASocket from '@yupra/baileys'
import { getSenderLid, toJid } from '@yupra/baileys'

const sock = makeWASocket({ printQRInTerminal: true })

sock.ev.on('messages.upsert', ({ messages }) => {
    const msg = messages[0]
    const info = getSenderLid(msg) // logs the sender LID
    const jid = toJid(info.lid)
    console.log('normalized jid:', jid)
})
```

### 🧪 Advanced Usage (Multi-file Auth)

```ts
import makeWASocket, { useMultiFileAuthState } from "@yupra/baileys"

async function start() {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info")
    const sock = makeWASocket({ auth: state, printQRInTerminal: true })

    sock.ev.on("creds.update", saveCreds)
    sock.ev.on("messages.upsert", ({ messages }) => {
        for (const m of messages) {
            console.log(m.key.remoteJid, m.message?.conversation)
        }
    })
}

start()
```

---

## 🖥 Run Your WhatsApp Bot with Yupra Panel

Deploy your WhatsApp bot easily using the Pterodactyl-based Yupra Panel and enjoy full admin support.  
➡️ [Launch Panel](https://yupra.my.id/)

---

### ⚠️ Disclaimer
This project is not affiliated with WhatsApp Inc. Use it responsibly. Avoid spam, abuse, or any illegal activities.

---

### 📄 License
MIT © 2024 Yupra Network
