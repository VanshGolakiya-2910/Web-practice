const { error } = require("console")
const fs = require("fs")
console.log("12312312")
console.log("12312312")
console.log("12312312")
console.log("12312312")
console.log("12312312")
fs.writeFile("test.txt" ,"This is Vansh" , (error) => {
    if(error){
        console.log(error)
    }
})
fs.readFile("test.txt" , "utf-8" ,(error , data ) => {
    if(error)
    {
        console.log(error)
    }
    else{
        console.log(data)
    }
})
fs.appendFile("test.txt" ,"My surname is golakiya" , (error) => {
    if(error){
        console.log(error)
    }
})
fs.readFile('somefile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

fs.writeFileSync("test.txt" ,"This is Vansh" )
fs.readFileSync("test.txt" , "utf-8" ,(error , data ) => {
    if(error)
    {
        console.log(error)
    }
    else{
        console.log(data)
    }
})
fs.appendFileSync("test.txt" ,"My surname is golakiya")
fs.readFileSync('somefile.txt', 'utf8');

console.log("12312312")
console.log("12312312")
console.log("12312312")
console.log("12312312")
console.log("12312312")


// fs.unlinkSync('test.txt')