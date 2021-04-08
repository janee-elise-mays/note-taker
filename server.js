const express = require('express');

const app = express();
const PORT = 8080;

// Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join)
})


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));