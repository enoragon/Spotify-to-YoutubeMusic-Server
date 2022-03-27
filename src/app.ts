import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import spotifyFactory from 'spotify-url-info';
import fetch from 'cross-fetch';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import YoutubeMusicApi from 'youtube-music-api';
import { PORT } from './config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const spotify = (spotifyFactory as any)(fetch) as typeof spotifyFactory;

const app = express();

app.use(cors());

app.get('/spotify/:id', async (req, res) => {
    const spotifyId = req.params.id;

    if (!spotifyId) {
        res.send(400);
        return;
    }

    const [track] = await spotify.getTracks(`https://open.spotify.com/track/${spotifyId}`);

    const title = track.name;
    const artist = track.artists?.[0].name;

    const api = new YoutubeMusicApi();

    await api.initalize();

    const { content } = await api.search(`${title} by ${artist}`);

    if (!content) {
        res.send(500);
        return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const song = content.find((res: any) => res.type === 'song');

    if (!song) {
        res.send(404);
        return;
    }

    const youtubeMusicUrl = `https://music.youtube.com/watch?v=${song.videoId}`;

    res.json({ youtubeMusicUrl });
});

app.listen(PORT, function () {
    console.log(`App is running on http://localhost:${PORT}`);
});
