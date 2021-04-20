const fetch = require('node-fetch')
const fs = require('fs')
const FormData = require('form-data')
 
 
function uploadimg (filename, name) {
    var image = fs.createReadStream(filename)
    var form = new FormData()
    form.append('image', image, name)
     
    const upload = fetch('https://storage.naufalhoster.xyz', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
            return result
        })
        .catch(e => {
            return e
        })
    return upload
}



case 'tomp4':
									
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (bos.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(bos).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await rvan.downloadAndSaveMediaMessage(encmedia)
						anu = await uploadimg(media, Date.now() + '.webp')
						console.log(anu)
						reply(mess.wait)
						buffer = await getBuffer(`https://api-self.herokuapp.com/api/webp2mp4?img_url=${anu.result.image}`)
						rvan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', caption: 'Nih..'})
					         break
		case 'togif':
									
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (bos.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(bos).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await rvan.downloadAndSaveMediaMessage(encmedia)
						anu = await uploadimg(media, Date.now() + '.webp')
						console.log(anu)
						reply(mess.wait)
						buffer = await getBuffer(`https://api-self.herokuapp.com/api/webp2mp4?img_url=${anu.result.image}`)
						rvan.sendMessage(from, buffer, video, {mimetype: 'video/gif', caption: 'Nih..'})
					         break
		
