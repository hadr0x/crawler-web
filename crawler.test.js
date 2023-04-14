const {expect, test} = require('@jest/globals')
const {normalizeURL} = require('./crawler.js')


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