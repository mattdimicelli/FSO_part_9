import express from 'express';
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get('/bmi' , (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const weight: any = req.query.weight;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const height: any = req.query.height;
        if (typeof weight !== 'undefined' && typeof height !== 'undefined' && !isNaN(Number(weight)) && !isNaN(Number(height))) {
            try {
                const msg: string = calculateBmi(+height, +weight);
                res.json(msg);
            } catch (e) {
                res.status(400).json(e);
            }
        } else {
            res.status(400).json('The height and weight query parameters must be positive integers');
        }
});

app.post('/exercise', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (req.body.daily_exercises === undefined || req.body.target === undefined) {
            res.status(400).json({error: 'parameters missing'});
        }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const dailyExercises: Array<number> = req.body.daily_exercises;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const target = Number(req.body.target);
        if (isNaN(target)) {
            res.status(400).json({error: 'malformatted parameters'});
        } else if (!Array.isArray(dailyExercises)) {
            res.status(400).json({error: 'malformatted parameters'});
        } else if (dailyExercises.filter(v => typeof v !== 'number').length > 0) {
            res.status(400).json({error: 'malformatted parameters'});
        }
        try {
            const results = calculateExercises(dailyExercises, target);
            res.json(results);
        } catch (e) {
            res.status(400).json({error: 'malformatted parameters'});
        }
});

app.get('/saludo', (_req, res) => {
    res.send('Hello Full Stack!');
});


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

