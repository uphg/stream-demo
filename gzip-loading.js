// 根据输入文件路径 使用 gzip 压缩指定文件
const fs = require('fs')
const zlib = require('zlib')
const filePath = process.argv[2]

fs.createReadStream(filePath)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('.')) // 每次处理一段 chunk 都打一个 "."
  .pipe(fs.createWriteStream(filePath + '.gz'))
  .on('finish', () => console.log('\nDone')) // 文件处理结束后打出 Done