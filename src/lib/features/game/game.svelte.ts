import { getRandomWord } from '$lib/words';
import { kbd, type Kbd } from '../keyboard/kbd.svelte';

interface PlayerStatsState {
	level: number;
	points: number;
}

class PlayerStats {
	level: number = $state(1);
	points: number = $state(0);

	levelUp() {
		this.level += 1;
	}

	addPoints(points: number) {
		this.points += points;
	}

	snapshot(): PlayerStatsState {
		return {
			level: $state.snapshot(this.level),
			points: $state.snapshot(this.points)
		};
	}

	init({ level, points }: PlayerStatsState) {
		this.level = level;
		this.points = points;
	}
}

interface GameState {
	attempts: string[];
	attemptNum: number;
	guess: string;
	answer: string;
	levelCompleted: boolean;
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
	answer: string = $state(getRandomWord().toUpperCase());
	levelCompleted: boolean = $state(false);
	// --------
	levelPassed: boolean = $derived(this.attempts.includes(this.answer));
	pointsGained: number = $derived(
		this.levelCompleted ? Game.ATTEMPT_POINT_MAP[this.attemptNum] : 0
	);
	// --------
	constructor(
		public playerStats: PlayerStats,
		public kbd: Kbd
	) {
		this.playerStats = playerStats;
		this.kbd = kbd;
	}

	nextLevel() {
		this.playerStats.levelUp();
		this.playerStats.addPoints(this.pointsGained);
		this.attempts = ['', '', '', '', '', ''];
		this.attemptNum = 1;
		this.guess = '';
		this.answer = getRandomWord().toUpperCase();
		this.levelCompleted = false;
		this.kbd.reset();
	}

	snapshot(): GameState {
		return {
			attempts: $state.snapshot(this.attempts),
			attemptNum: $state.snapshot(this.attemptNum),
			guess: $state.snapshot(this.guess),
			answer: $state.snapshot(this.answer),
			levelCompleted: $state.snapshot(this.levelCompleted)
		};
	}

	init({ attempts, attemptNum, guess, answer, levelCompleted }: GameState) {
		this.attempts = attempts;
		this.attemptNum = attemptNum;
		this.guess = guess;
		this.answer = answer;
		this.levelCompleted = levelCompleted;
	}
}

export const playerStats = new PlayerStats();
export const game = new Game(playerStats, kbd);
