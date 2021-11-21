// 创建一个 Node 服务用于读取文件
const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.on('request', (request, response) => {
  fs.readFile('./big_file.txt', (error, data) => {
    if (error) throw error
    response.end(data)
    console.log('done')
  })
})

server.listen(8888)
console.log('监听 8888 端口')