const {JSDOM} = require('jsdom')

function getURLfromHTML(bodyHTML){
    const urls = []
    const dom = new JSDOM(bodyHTML)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const link of linkElements){
        try{
            const urlObj = new URL(link.href)
            urls.push(urlObj.href)
        }catch(err){
            console.log(`error: ${err.message}`)
        }
    }
    return urls
}

function normalizeURL(stringURL){
    const urlObj = new URL(stringURL)
    const hostname = urlObj.hostname
    const pathname = urlObj.pathname.toLowerCase()
    return `${hostname}${pathname}`
}

module.exports = {
    normalizeURL,
    getURLfromHTML
}