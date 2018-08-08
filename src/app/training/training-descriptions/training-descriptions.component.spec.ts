import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDescriptionsComponent } from './training-descriptions.component';

describe('TrainingDescriptionsComponent', () => {
	let component: TrainingDescriptionsComponent;
	let fixture: ComponentFixture<TrainingDescriptionsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TrainingDescriptionsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TrainingDescriptionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
