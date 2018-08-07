import { Excercise } from './excercise.model';

export class TrainingService {
	private availableExcercises: Excercise[] = [
		{ id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
		{ id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
		{ id: 'pull-ups', name: 'Pull Ups', duration: 120, calories: 18 },
		{ id: 'sit-ups', name: 'Sit Ups', duration: 60, calories: 8 }
	];

	getAvailableExcercises() {
		return this.availableExcercises.slice();
	}
}
