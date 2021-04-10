const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid').v4;

const app = express();
const PORT = 8080;

// Routes
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/assets/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/assets/notes.html')));

// Display all notes
app.get('/api/notes', (req, res) => {
    let noteInput = fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf-8');
    noteInput = JSON.parse(noteInput);
    res.json(noteInput)
});

// Create new notes - takes JSON dataInput
app.post('/api/notes', (req, res) => {
    let noteInput = fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf-8');
    noteInput = JSON.parse(noteInput);
    req.body.id = uuid();
    noteInput.push(req.body);
    noteInput = JSON.stringify(noteInput);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), noteInput);
    console.log(req.body);
    res.json(noteInput);
});

app.delete('/api/notes/:id', (req, res) => {
    const noteID = req.params.id;
    let noteInput = fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf-8');
    noteInput = JSON.parse(noteInput);
    // remove the note from the noteinput (the one with the matching id)  filter/splice function
    fs.writeFileSync(path.join(__dirname, './db/db.json'), noteInput);
    // write the notes array back to the file (fs.writeFileSync) similar for delete
    res.json(noteInput);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));