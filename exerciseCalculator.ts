interface CalculatedStats {
    periodLength: number,
    trainingDays: number,
    target: number,
    average: number,
    success: boolean,
    rating: 1 | 2 | 3,
    ratingDescription: string,
}
function calculateExercises(hoursTrained: Array<number>, dailyHoursTarget: number): CalculatedStats {
    const daysTotal: number = hoursTrained.length;
    const daysTrained: number = hoursTrained.filter(value => value > 0).length;
    const dailyHoursCalculated: number = hoursTrained.reduce((v,a) => v + a, 0) / daysTotal;
    const objectiveReached: boolean = dailyHoursCalculated >= dailyHoursTarget;
    const rating: 1 | 2 | 3 = dailyHoursCalculated < dailyHoursTarget ? 1 : dailyHoursCalculated === dailyHoursTarget ? 2 : 3;
    let explanation: string;
    if (rating === 1) {
        explanation = 'You can do better';
    } else if (rating === 2) {
        explanation = 'You reached your goal';
    } else {
        explanation = 'You did great!';
    }

    return {
        periodLength: daysTotal,
        trainingDays: daysTrained,
        average: dailyHoursCalculated,
        success: objectiveReached,
        rating,
        ratingDescription: explanation,
        target: dailyHoursTarget
    };
}

// const input: Array<string> = process.argv;
// if (isNaN(Number(input[2]))) {
//     throw new Error('The first argument, the target daily hours, must be a number');
// }
// const dailyHoursTarget = Number(input[2]);
// const hoursTrained: Array<number> = input.slice(3).map(v => {
//     if (isNaN(Number(v))) {
//         throw new Error('All arguments must be numbers');
//     } else {
//         return Number(v);
//     }
// });
//
// try {
//     console.log(calculateExercises(hoursTrained, dailyHoursTarget));
// } catch (e) {
//     let message;
//     if (e instanceof Error) message = e.message;
//     else message = String(e);
//     console.log('Error:', message);
// }

export {calculateExercises};