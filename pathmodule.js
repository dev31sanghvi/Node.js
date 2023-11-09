const path = require('path');

const b=path.dirname(notes);

const a = path.basename('c:\\temp\\myfile.html');
console.log(a);
console.log(b);

const c= path.extname(__filename);
console.log(__filename,c);
