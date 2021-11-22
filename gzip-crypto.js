// 使用 crypto 模块加密 gzip 文件
const fs = require('fs')
const zlib = require('zlib')
const filePath = process.argv[2]
const crypto = require('crypto')
const { Transform } = require('stream')
const { Buffer } = require('buffer')

const PASSWORD = 'ExchangePasswordPasswordExchange'
const iv = Buffer.from(crypto.randomBytes(8))
ivString = iv.toString('hex')

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.')
    callback(null, chunk)
  }
})

fs.createReadStream(filePath)
  .pipe(crypto.createCipheriv('aes-256-cbc', PASSWORD, ivString)) // 一定要先加密，再 gzip 压缩
  .pipe(zlib.createGzip())
  .pipe(reportProgress)
  .pipe(fs.createWriteStream(filePath + '.gz'))
  .on('finish', () => console.log('\nDone'))