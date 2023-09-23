const crypto = require('crypto')

const secretKey = 'sha256-12345677890-12345677890-12345677890-12345677890-12345677890'

const hash = crypto.createHash('sha512', secretKey)

console.log(hash);

const hashUpdated = hash.update('secret-password')

console.log(hashUpdated);

console.log(hashUpdated.digest('hex')) 


