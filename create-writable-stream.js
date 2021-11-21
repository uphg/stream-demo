// 创建一个可写流
const { Writable } = require('stream')

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
})

process.stdin.pipe(outStream)
// 上面相当于运行以下代码
// process.stdin.on('data', (chunk) => {
//   outStream.write(chunk)
// })