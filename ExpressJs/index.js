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

app.put('/courses/:id', function(req, res) {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found!');
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete('/courses/:id', function(req, res) {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found!');
    }
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});


app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});