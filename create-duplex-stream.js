const { Duplex } = require('stream')

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  },
  read(size) {
    const char = String.fromCharCode(this.currentCharCode++)
    this.push(char)
    if (this.currentCharCode > 90) { // Z 的字符编码为 90
      this.push(null); // 数据推完了
    }
  }
})

inoutStream.currentCharCode = 65
process.stdin.pipe(inoutStream).pipe(process.stdout)