class PlayerStats {
	level: number = $state(1);
	points: number = $state(0);

	levelUp() {
		this.level += 1;
	}

	addPoints(points: number) {
		this.points += points;
	}
}

class Game {
	static ATTEMPT_POINT_MAP: {
		[attemptNum: number]: number;
	} = {
		1: 25,
		2: 20,
		3: 15,
		4: 10,
		5: 5,
		6: 2
	};
	// --------
	attempts: string[] = $state(['', '', '', '', '', '']);
	attemptNum: number = $state(1);
	guess: string = $state('');
	answer: string = $state('APPLE');
	// --------
	levelPassed: boolean = $derived(this.attempts.includes(this.answer));
	levelCompleted: boolean = $derived(!this.attempts.includes('') || this.levelPassed);
	pointsGained: number = $derived(
		this.levelCompleted ? Game.ATTEMPT_POINT_MAP[this.attemptNum] : 0
	);
	// --------
	constructor(public playerStats: PlayerStats) {
		this.playerStats = playerStats;
	}
}

const playerStats = new PlayerStats();
export const game = new Game(playerStats);
