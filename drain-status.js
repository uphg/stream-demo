// Writable streams 的 drain 事件触发示例
// 参考：https://nodejs.org/api/stream.html#stream_event_drain
const fs = require('fs')

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 1000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
        if (ok === false) {
          console.log('堵塞了，不能再写了')
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', () => {
        console.log('水流干了')
        write()
      });
    }
  }
}

const writer = fs.createWriteStream('./big_file.txt')
writeOneMillionTimes(writer, 'Hello World!')