import { Subject } from 'rxjs/Subject';
import { Exercise } from './exercise.model';

export class TrainingService {
	exerciseChanged = new Subject<Exercise>();
	private availableExercises: Exercise[] = [
		{ id: 'supermans', name: 'Supermans', duration: 45, calories: 60 },
		{ id: 'push-ups', name: 'Push Ups', duration: 30, calories: 90  },
		{ id: 'downward-facing-dog', name: 'Downward Facing Dog', duration: 60, calories: 100 },
		{ id: 'crunches', name: 'Crunches', duration: 60, calories: 100 },
		{ id: 'front-plank', name: 'Front Plank', duration: 30, calories: 50 },
		{ id: 'cobra', name: 'Cobra', duration: 120, calories: 140 },
		{ id: 'squat-jumps', name: 'Squat Jumps', duration: 120, calories: 180, },
		{ id: 'forward-lunge', name: 'Forward Lunge', duration: 60, calories: 100 },
		{ id: 'glute-bridge', name: 'Glute Bridge', duration: 90, calories: 120 },
		{ id: 'side-lunge', name: 'Side Lunge', duration: 30, calories: 50 },
		{ id: 'single-leg-stand', name: 'Single Leg Stand', duration: 45, calories: 60 },
		{ id: 'supine-reverse-crunches', name: 'Supine Reverse Crunches', duration: 30, calories: 50 }
	];
	private runningExercise: Exercise;
	private exercises: Exercise[] = [];

	getAvailableExercises() {
		return this.availableExercises.slice();
	}

	startExercise(selectedId: string) {
		this.runningExercise = this.availableExercises.find(
			ex => ex.id === selectedId
		);
		this.exerciseChanged.next({ ...this.runningExercise });
	}

	completeExercise() {
		this.exercises.push({
			...this.runningExercise,
			date: new Date(),
			state: 'completed'
		});
		this.runningExercise = null;
		this.exerciseChanged.next(null);
	}

	cancelExercise(progress: number) {
		this.exercises.push({
			...this.runningExercise,
			duration: this.runningExercise.duration * (progress / 100),
			calories: this.runningExercise.calories * (progress / 100),
			date: new Date(),
			state: 'cancelled'
		});
		this.runningExercise = null;
		this.exerciseChanged.next(null);
	}

	getRunningExercise() {
		return { ...this.runningExercise };
	}

	getCompletedOrCancelledExercises() {
		return this.exercises.slice();
	}

}
