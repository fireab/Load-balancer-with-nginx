import express from "express";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const app = express();

// Get the port from the environment variables
let port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    let header = req.headers;
    res.send(header);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
