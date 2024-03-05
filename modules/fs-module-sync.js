const {readFileSync, writeFileSync}=require('fs');//this way we only import the methods we require.
/*const fs=require('fs')
const first=fs.readFileSync() */
const first= readFileSync('../content/first.txt', 'utf-8');//utf-8 is the default encoding method 
const second= readFileSync('../content/second.txt', 'utf-8');
console.log(first, second);

//writeFileSync('../content/result-sync.txt', `Hello world`);//this will create the result-sync.txt file and write hello world in it. The first parameter is the path and the second parameter is what you want to write to the file.
writeFileSync('../content/result-sync.txt', `Here is the result: ${first}, ${second}`);
