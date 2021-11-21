const { Readable } = require('stream')

const inStream = new Readable({
  read(size) {
    const char = String.fromCharCode(this.currentCharCode++)
    this.push(char)
    console.log(`推了 ${char}`)
    if (this.currentCharCode > 90) { // Z 的字符编码为 90
      this.push(null); // 数据推完了
    }
  }
})

inStream.currentCharCode = 65
inStream.pipe(process.stdout) // 每次读数据都输出