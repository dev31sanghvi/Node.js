const fs = require('fs');

//callback 
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })

 const a= fs.readFileSync('file.txt');
console.log(a);
//fs.readFileSync() method is an inbuilt application programming interface of the fs module which is used to read the file and return its content. 


fs.writeFileSync('file2.txt','this is dev sanghvi',()=>{
console.log('written content to the file');
});
console.log("finishes reading file");

