interface CalculatedStats {
    daysTotal: number,
    daysTrained: number,
    dailyHoursTarget: number,
    dailyHoursCalculated: number,
    objectiveReached: boolean,
    rating: 1 | 2 | 3,
    explanation: string,
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
        daysTotal,
        daysTrained,
        dailyHoursCalculated,
        objectiveReached,
        rating,
        explanation,
        dailyHoursTarget
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));