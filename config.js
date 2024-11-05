const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Internetguru:@Tesko1234@cluster0.zea94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Internetguru:@Tesko1234@cluster0.zea94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_46_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkRkt1TkdIK2JTbUlzUGFqdGFXcFVHalcrdXcvQnFCTmo0SnEwZFhQWitNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjg5MzAzMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI3RjJGMEREQjVEOTQ1ODc4NjFGMzY0NTdFMDA4QjU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDg1MDM1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwWmtxc2I5ZFNNYUQySFl5aWp4MGl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzMDUzNTUzLTIxZjktNDhkYy04MDFhLTM3MDQ4N2RiYzc1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICA4MyxcbiAgICAgIDE2MixcbiAgICAgIDM3LFxuICAgICAgMTg5LFxuICAgICAgMjM4LFxuICAgICAgMjMxLFxuICAgICAgMTkzLFxuICAgICAgNjgsXG4gICAgICA5OCxcbiAgICAgIDE0NixcbiAgICAgIDgxLFxuICAgICAgMTQyLFxuICAgICAgMTQwLFxuICAgICAgMzEsXG4gICAgICAxNDksXG4gICAgICAxOTIsXG4gICAgICAxNzAsXG4gICAgICA0NyxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgODAsXG4gICAgICAxNjcsXG4gICAgICAyMTUsXG4gICAgICAzNyxcbiAgICAgIDE0OSxcbiAgICAgIDE4NCxcbiAgICAgIDIxOCxcbiAgICAgIDQ2LFxuICAgICAgMTAxLFxuICAgICAgMjA1LFxuICAgICAgMTk2LFxuICAgICAgNzcsXG4gICAgICAzNCxcbiAgICAgIDIxNixcbiAgICAgIDE5OCxcbiAgICAgIDIyMixcbiAgICAgIDgsXG4gICAgICAxNzAsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOM0tGOEgxTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyODkzMDMyODoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklOVEVSTkVUX0dVUlVcIixcbiAgICBcImxpZFwiOiBcIjE2NDA1OTY2NDEyNjA2MjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK3QrcGNFRUs3Y3Fya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjV0blh6aDFvMlZ5N2ZIWjl5ejdDaWRjSzFEcWtkUEFQTjB3OXh2VUlnMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUXVUdU9maDZXc1NjYU5zZVBJTjNCRzlSMG04M2xEekdJL1ZHbHJyUXlQSnZrUmc4aDVkRkx1Qm5MTVYzR0VxN3pTVCtiWkREOHNvNlpOdUFHS0ZDQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDN3OFdUVG4yWDRPUkJqZU5zZkJmUEFlSG9EWkZtbHZ5bThtV0Ryckl5NlhFWnRibHV2a3ZMWUgvKzJHZUFsN1hRdWJKQ3ZVVEQrTDN2WFRFWUovakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyODkzMDMyODoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg1MDM1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJidVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFk3NGpLdlUyek53NWxvSUtLS1I3NkhESUxKeWR2dmV3dytUV2dvM1VKUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTIzOTgwOTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
