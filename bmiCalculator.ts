function calculateBmi(heightCm: number, weightKg: number) {
    const heightM: number = heightCm * 0.01;
    const bmi: number = weightKg / (heightM ** 2);
    if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal (healthy weight)';
    } else if (bmi > 24.9) {
        return 'Overweight';
    }
}
const input: Array<string> = process.argv;
if (input.length < 3) {
    throw new Error('Must provide a height and a weight');
} else if (input.length > 4) {
    throw new Error('Too many arguments given');
}
let heightCm: number;
let weightKg: number;
if(isNaN(Number(process.argv[2]))) {
    throw new Error('the first argument, the height in cm, must be a number');
} else if (isNaN(Number(process.argv[3]))) {
    throw new Error('the 2nd argument, the weight in kg, must be a number');
} else {
    heightCm = Number(process.argv[2]);
    weightKg = Number(process.argv[3]);
}

try {
    console.log(calculateBmi(heightCm, weightKg));
} catch (e) {
    console.log('Problem running script:', e.message);
}