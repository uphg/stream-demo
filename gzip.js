// 根据输入文件路径 使用 gzip 压缩指定文件
const fs = require('fs')
const zlib = require('zlib')
const filePath = process.argv[2]

fs.createReadStream(filePath)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(filePath + '.gz'))