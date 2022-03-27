import express from 'express';
import 'express-async-errors';
import { SERVER_PORT } from './config';

const app = express();

app.get('/', async (req, res) => {
    res.json({ test: 'hello' });
});

app.listen(SERVER_PORT, function () {
    console.log(`App is running on http://localhost:${SERVER_PORT}`);
});
