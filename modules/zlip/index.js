const zlip = require('zlib')
const gzip = zlip.createGzip()
const fs = require('fs')
const readableStream  = fs.ReadStream('test/content.txt', { highWaterMark: 100} )
const output = fs.WriteStream('test/content.txt.gz')

readableStream .on('data', d => {
    setTimeout(() => {
        console.log(d.toString())
    }, 1000)

})

readableStream.pipe(gzip).pipe(output)


