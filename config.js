const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Teskodin:@Tesko1234@tesko.zea94.mongodb.net/?retryWrites=true&w=majority&appName=Tesko"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "null";
global.gurl  =process.env.GURL  || "null";
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Tesko" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349128930328,2348148798299";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDg2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSzVaNzJMM0swYU5mZGt2RDdUZ24rbUhWUitHdGlLTzRYdVRVcUpFb3A1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTI4OTMwMzI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQ0E1RkU5QTI1MEM4Mjg2QTQ3N0MwMEJFOTRGNzBGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMDM1NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicWo1ZW5kbkhRc2E5aEZxbjNhY1Y5QVwiLFxuICBcInBob25lSWRcIjogXCJlMzliYmY5MS1mZWM0LTQyYzItYjEwNy0xODczY2U0MDRlODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICA1NyxcbiAgICAgIDMzLFxuICAgICAgMjI4LFxuICAgICAgMTEsXG4gICAgICAxNDYsXG4gICAgICA0NyxcbiAgICAgIDYxLFxuICAgICAgMTEzLFxuICAgICAgMSxcbiAgICAgIDE3MSxcbiAgICAgIDEwLFxuICAgICAgMTk5LFxuICAgICAgMzAsXG4gICAgICAyNSxcbiAgICAgIDE2MixcbiAgICAgIDIyNyxcbiAgICAgIDYxLFxuICAgICAgMTM5LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE1MSxcbiAgICAgIDQwLFxuICAgICAgMjUwLFxuICAgICAgMTc1LFxuICAgICAgMjU0LFxuICAgICAgMTQzLFxuICAgICAgNDAsXG4gICAgICAxMzcsXG4gICAgICA5OSxcbiAgICAgIDI1MyxcbiAgICAgIDIwOSxcbiAgICAgIDI0MCxcbiAgICAgIDExMixcbiAgICAgIDIwNCxcbiAgICAgIDI1MyxcbiAgICAgIDIxNixcbiAgICAgIDI1MyxcbiAgICAgIDE2MCxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYOVBEM0NZQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyODkzMDMyODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklOVEVSTkVUX0dVUlVcIixcbiAgICBcImxpZFwiOiBcIjE2NDA1OTY2NDEyNjA2MjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT3QrcGNFRUt5SnRMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjV0blh6aDFvMlZ5N2ZIWjl5ejdDaWRjSzFEcWtkUEFQTjB3OXh2VUlnMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUUJxZ0owMW9yV1FnS3drRzNNWFpMRGtKa3V0N3FBU0ZtREhiQkVPa2VTWkVlYi9UcmxsZ0kyYzUydEpDOWh0YnM0ZkhBZ1JaZE1NQ2N0eTVuWEQzQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQzhWVWZzN1ViSFQvbThUTlBRcko3WVpxTHpvanhnaWRGTS9MZmZVSFc2UnRTMnk1aEpaQmUvR0ZSZ0RrWDVRTVp2YmhGeFdpQWwyNHpZcGJkZlI4Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyODkzMDMyODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAwMzU2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJidVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFk3NGpLdlUyek53NWxvSUtLS1I3NkhESUxKeWR2dmV3dytUV2dvM1VKUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTIzOTgwOTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tesko ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Tesko",
  ownername:process.env.OWNER_NAME|| "Tesko",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Tesko"  ).toUpperCase(),



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
