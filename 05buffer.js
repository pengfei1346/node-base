// Buffer 库为 Node.js 带来了一种存储原始数据的方法

//Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

// const buf = Buffer.from('runoob','ascii','utf8')
//
// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));
//
// // 输出 cnVub29i
// console.log(buf.toString('base64'));

/***************/
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com啊");
// console.log("写入字节数 : "+  len);

/************************/
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);










