import express from "express";
import dotenv from "dotenv";
import os from "os"

// Load environment variables from the .env file
dotenv.config();

const app = express();

// Get the port from the environment variables
let port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    // Get the hostname of the current machine
    const hostname = os.hostname();
    console.log(`Hostname: ${hostname}`);
    let header = req.headers;
    res.send({ header: header, hostname: hostname });
});
app.get('/find', (req, res) => {
    // Get the hostname of the current machine
    const hostname = os.hostname();
    console.log(`Hostname: ${hostname}`);
    res.send({ hostname: hostname });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
