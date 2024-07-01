// const fs = require('fs');

// fs.readFile('message.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log('Read from file:', data);

//     fs.appendFileSync('message.txt', '\nclass is going on', function(err) {
//         if (err) throw err;
//         console.log('New message appended!');
//     });
// });


// fs.mkdir('newDir', function(err) {
//     if (err) throw err;
//     console.log('New directory created!');
// });


// fs.rmdir('newDir', function(err) {
//     if (err) throw err;
//     console.log('Directory deleted!');
// });


// fs.rename('message.txt', 'newMessage.txt', function(err) {
//     if (err) throw err;
//     console.log('File renamed!');
// });

// const p = '/home/aayush/my-node-app/newMessage.txt';

// const path = require('path');
// const dirname = path.dirname(p);
// const extension = path.extname(p);
// console.log('Dirname:', dirname);
// console.log('Extension:', extension);  


// const fs = require('fs');
// const path = require('path');


// const folderPath = path.join(__dirname, 'newDir');


// const filePath = path.join(__dirname, 'message.txt');


// const destinationPath = path.join(folderPath, 'message.txt');


// fs.copyFileSync(filePath, destinationPath);


const http = require('http');

const server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html> <head> <title> Node App </title>   </head>   <body>     <h1>Welcome to my Node App!</h1>   </body> </html>');
    
    res.end();
});

const port = 3000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});   

