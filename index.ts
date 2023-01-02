import express from 'express';
const app = express();

app.get('/saludo', (_req, res) => {
    res.send('Hello Full Stack!');
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

