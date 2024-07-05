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
const path = require('path');
const fs = require('fs');
// Create an HTTP server
const server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/login') {
        res.write('<html> <head> <title> Login Page </title> </head> <body> <h1>Welcome to Login Page!</h1> </body> </html>');
        res.end();
    } else {
        const filePath = path.join(__dirname, 'index.html');
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.write('<html> <head> <title> Error </title> </head> <body> <h1>Internal Server Error</h1> </body> </html>');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

const port = 3000;
const hostname = 'localhost';

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});




