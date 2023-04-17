const {crawlPage} = require('./crawler.js')

function main(){
    if (process.argv.length < 3){
        console.log('No URL to crawl')
        process.exit(1)
    }
    if (process.argv.length > 3){
        console.log('It is necessary only one URL')
        process.exit(1)
    }
    const baseURL = process.argv[2]
    crawlPage(baseURL)

}

main()