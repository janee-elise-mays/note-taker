const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Routes
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/assets/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/assets/notes.html')));

module.exports = (app) => {
    // Display all notes
    app.get('/api/notes', (req, res) => res.json(noteInput));

    // Create new notes - takes JSON dataInput
    app.post('/api/notes', (req, res) => {
        noteInput.push(req.body);
    });
};
// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));