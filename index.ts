import express from 'express';
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.get('/bmi' , (req, res) => {
        const { weight, height } = req.query;
        console.log(weight, height);
        if (typeof weight !== 'undefined' && typeof height !== 'undefined' && !isNaN(Number(weight)) && !isNaN(Number(height))) {
            try {
                const msg = calculateBmi(+height, +weight);
                res.json(msg);
            } catch (e) {
                res.status(400).json(e);
            }
        } else {
            res.status(400).json('The height and weight query parameters must be positive integers');
        }
});
app.get('/saludo', (_req, res) => {
    res.send('Hello Full Stack!');
});


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

