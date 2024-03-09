// console.log(__dirname);

const fs = require('fs')

const path = require('path')

const dirPath = path.join(__dirname,'crud')

const filepath = `${dirPath}/apple.txt`

// fs.writeFileSync(filepath,"this is a new file")


           // read the paticular file 

// fs.readFile(filepath,'utf8',(err,data)=>{
//     console.log(data);

// })

// let val = fs.readFileSync(filepath)
// console.log(val.toString());

          // update the particular file 

// fs.appendFile(filepath,"this is a apple file", (err)=>{
//     // if (err) throw err;
//     // console.log("this is working");
//     if (!err) console.log("file is updated");
// })


          // rename the particular file

// fs.rename(dirPath,`${filepath}/fruit.txt`, (err)=>{
//     if (!err) console.log("file updated");

// })

          // delete the particular file 

// fs.unlinkSync(filepath)

