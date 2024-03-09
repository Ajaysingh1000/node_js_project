const fs = require('fs')
const path = require('path')

// for ( i=1;i<4;i++){
//     fs.writeFileSync(`file${i}.txt`," ")

// }

const file_path = path.join(__dirname,'files');

// for (i=1;i<5;i++){
//     fs.writeFileSync(`${file_path}\\hello${i}.txt`,"this is new file ")
//     // fs.unlinkSync(`${file_path}\\hello${i}.txt`)

// }

fs.readdir(file_path,(err,file)=>{
    // console.log(file);
    file.forEach((Element)=>{
        console.log(Element);
    })
})