// 查看 Stream 方法的原型链
const fs = require('fs')
const stream = require('stream')
const events = require('events')

const readStream = fs.createReadStream('big_file.txt')

console.log('readStream')
console.log(readStream)

console.log('\nstream')
console.log(stream.prototype)

console.log('\nevents')
console.log(events.prototype)

console.log()