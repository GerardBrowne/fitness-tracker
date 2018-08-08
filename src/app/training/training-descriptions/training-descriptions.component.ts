import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';


export interface ExerciseDescription {
	name: string;
	description: string;
}

@Component({
	selector: 'app-training-descriptions',
	templateUrl: './training-descriptions.component.html',
	styleUrls: ['./training-descriptions.component.css']
})
export class TrainingDescriptionsComponent implements OnInit {
	descriptions: ExerciseDescription[] = [
		{ name: 'Supermans', description: 'Who doesnt want to think they have super powers?' },
		{ name: 'Push Ups', description: 'The Push-up is an oldie but goodie.' },
		{ name: 'Downward Facing Dog', description: 'A wonderful calf stretch.' },
		{ name: 'Crunches', description: 'A proper sit-up/crunch.  Core Power!' },
		{ name: 'Front Plank', description: 'Your back and abs will love you.' },
		{ name: 'Cobra', description: 'A great way to get ready for a busy day.' },
		{ name: 'Squat Jumps', description: 'Heart rate work.' },
		{ name: 'Forward Lunge', description: 'A one leg exercise for the rest of your life.' },
		{ name: 'Glute Bridge', description: 'People do yoga – and this is a great entry.' },
		{ name: 'Side Lunge', description: 'Movement into what becomes a static pose.' },
		{ name: 'Single Leg Stand', description: 'Do this one while brushing your teeth.' },
		{ name: 'Supine Reverse Crunches', description: 'If you feel pain – STOP.' }
	];
	constructor() { }

	ngOnInit() {
	}

}
