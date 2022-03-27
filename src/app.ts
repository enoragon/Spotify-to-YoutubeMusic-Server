import express from 'express';
import { SERVER_PORT } from './config';

const app = express();

app.get('/toto', (req, res) => {
    res.send('Hello toto');
});

app.listen(SERVER_PORT, function () {
    console.log(`App is listening on port ${SERVER_PORT} !`);
});
