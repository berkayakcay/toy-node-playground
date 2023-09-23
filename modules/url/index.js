const url = require('url')

const myUrl = new URL('https://berkayakcay.com:443/?q=docker')

console.log(myUrl.href)
console.log(myUrl.pathname)
console.log(myUrl.hash)
console.log(myUrl.hostname)
console.log(myUrl.port)
console.log(myUrl.protocol)