const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Routes
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/assets/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/assets/notes.html')));



// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));