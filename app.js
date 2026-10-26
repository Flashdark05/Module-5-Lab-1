// app.js
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Mount your custom logging middleware globally before defining any route bindings
app.use(loggerMiddleware);

// Define a test base route
app.get('/', (req, res) => {
    res.send('The Express server is running, and traffic middleware tracking is active!');
});

// Start the server listener
app.listen(PORT, () => {
    console.log(`Server listening dynamically at http://localhost:${PORT}`);
});
