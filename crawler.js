function normalizeURL(stringURL){
    const urlObj = new URL(stringURL)
    const hostname = urlObj.hostname
    const pathname = urlObj.pathname.toLowerCase()
    return `${hostname}${pathname}`
}

module.exports = {
    normalizeURL
}


// const x = normalizeURL('https://www.google.com/SEARCH')
// console.log(x)