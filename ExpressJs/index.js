const express = require('express');
const app = express();
app.use(express.json());

let courses = [
    { id: 1, name: 'java' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'python' },
   
];

app.get('/courses', function(req, res) {
    res.json(courses);
});


app.post('/courses', function(req, res) {
    console.log(req.body);
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});