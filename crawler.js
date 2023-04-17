const {JSDOM} = require('jsdom')

async function crawlPage(currentURL){
    try{
        const resp = await fetch(currentURL)
        if (resp.status > 399){
            console.log(`error with status: ${resp.status} on page: ${currentURL}`)
            return
        }
        const contentType = resp.headers.get('content-type')
        if (!contentType.includes('text/html')){
            console.log(`not html responde, content-type: ${contentType} on page: ${currentURL}`)
            return
        }
        console.log(await resp.text())
    } catch(err){
        console.log(`error: ${err.message} on page: ${currentURL}`)
    }
}

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
    getURLfromHTML,
    crawlPage
}