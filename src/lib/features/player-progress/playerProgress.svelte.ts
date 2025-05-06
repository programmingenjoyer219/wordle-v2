export var gameLevel = $state({ value: 1 });
export var gamePoints = $state({ value: 0 });

export const pointsToGive = {
	1: 25,
	2: 20,
	3: 15,
	4: 10,
	5: 5,
	6: 2
};

export function goToNextLevel(): void {
	gameLevel.value += 1;
}

export function incrementGamePoints(points: number) {
	gamePoints.value += points;
}
