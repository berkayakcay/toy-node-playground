const fs = require('fs')


fs.writeFile('test/index.txt', 'HELLO', (err) => {
    console.log('ERROR: ', err)
}
)

fs.writeFileSync('test/index-async.txt', 'HELLO ASYNC', (err) => {
    console.log('ERROR:', err)
})


for (let index = 0; index < 20; index++) {
    fs.appendFile('test/index.txt', '\nNEW LINE', (err) => {
        console.log('ERROR:', err)
    })
}


fs.open('test/index.txt', 'w', (err) => {
    console.log('FILE OPENED')
})


fs.readFile('test/index.txt', (err, data) => {
    console.log('FILE CONTENT: ', data.toString())
})


fs.unlink('test/indext-test.txt', (err) => {
    console.log('ERROR: ', err)
})


fs.copyFile('test/index.txt', 'test/index-copy.txt', (err) => {
    console.log('ERROR: ', err)
})

fs.rename('test/index-copy.txt', 'test/index-copy-renamed.txt', (err) => {
    console.log('ERROR: ', err)
})

fs.mkdir('test/a/b/c', true, (err) => {
    console.log('ERROR: ', err)
})

fs.opendir('test', async(err, data) => {
    for (const d of data){
        console.log('name', d.name, 'isFile', d.isFile(), 'isDirectory', d.isDirectory())
    }
})