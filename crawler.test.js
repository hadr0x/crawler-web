const {expect, test} = require('@jest/globals')
const {normalizeURL, getURLfromHTML} = require('./crawler.js')


test('Normalize URL',() =>{
    const input = 'https://www.google.com'
    const norm = normalizeURL(input)
    const output = 'www.google.com/'
    expect(norm).toEqual(output)
})

test('Normalize URL for capital letters',() =>{
    const input = 'https://www.GOOgle.com/SEARCH'
    const norm = normalizeURL(input)
    const output = 'www.google.com/search'
    expect(norm).toEqual(output)
})

test('Normalize URL',() =>{
    const input = 'https://www.google.com/search?q=normalize+url&oq=normalize+url&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMgkIAhAAGBMYgAQyCQgDEAAYExiABDIJCAQQABgTGIAEMgkIBRAAGBMYgAQyCQgGEAAYExiABDIJCAcQABgTGIAEMgkICBAAGBMYgAQyCggJEAAYExgWGB7SAQcxOTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
    const norm = normalizeURL(input)
    const output = 'www.google.com/search'
    expect(norm).toEqual(output)
})

test('Get Urls from HTML',()=>{
    const bodyHTML = `
<html>
    <body>
        <a href="https://www.google.com/search">qui</a>
        <a href="https://www.facebook.com/blog">la</a>
    </body>
</html>
`
    const actual = getURLfromHTML(bodyHTML)
    const output =['https://www.google.com/search', 'https://www.facebook.com/blog']
    expect(actual).toEqual(output)
})

test('Get Urls from HTML error',()=>{
    const bodyHTML = `
<html>
    <body>
        <a href="Invalid">.</a>
        <a href="https://www.facebook.com/blog">FB</a>
        <a href="https://www.amazon.com">Amazon</a>
        <a href="Nothing">.</a>
    </body>
</html>
`
    const actual = getURLfromHTML(bodyHTML)
    const output =['https://www.facebook.com/blog','https://www.amazon.com/']
    expect(actual).toEqual(output)
})