const express = require('express');

const app = express();
const PORT = 8080;

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `index.html`))
});


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));