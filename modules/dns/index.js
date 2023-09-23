const dns = require('dns')

dns.lookup('berkayakcay.com', (err, address, family) => {
    console.log(address, family)
})


dns.resolve('berkayakcay.com', (err, address) => {
    console.log(address)
})


console.log(dns.getServers())
