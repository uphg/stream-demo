// 使用 Stream 流创建文件
const fs = require('fs')
const stream = fs.createWriteStream('./big_file.txt')

for (let i = 0; i < 1000000; i++) {
  stream.write(`这是第 ${i} 行内容，我们需要很多很多内容，要不停地写文件噢噢噢噢噢噢回车\n`)
}

stream.end()
console.log('done')