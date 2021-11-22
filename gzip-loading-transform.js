const fs = require('fs')
const zlib = require('zlib')
const filePath = process.argv[2]

const { Transform } = require('stream')

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.')
    callback(null, chunk)
  }
})

fs.createReadStream(filePath)
  .pipe(zlib.createGzip())
  .pipe(reportProgress) // 每次处理一段 chunk 都打一个 "."
  .pipe(fs.createWriteStream(filePath + '.gz'))
  .on('finish', () => console.log('\nDone')) // 文件处理结束后打出 Done