import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import spotifyFactory from 'spotify-url-info';
import fetch from 'cross-fetch';
import { PORT } from './config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const spotify = (spotifyFactory as any)(fetch) as typeof spotifyFactory;

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    const data = await spotify.getData('https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas');

    res.json(data);
});

app.listen(PORT, function () {
    console.log(`App is running on http://localhost:${PORT}`);
});
