function calculateBmi(heightCm: number, weightKg: number) {
    const heightM: number = heightCm * 0.01;
    const bmi: number = weightKg / (heightM ** 2);
    if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal (healthy weight)';
    }
}

console.log(calculateBmi(180, 74))