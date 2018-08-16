import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';

@NgModule({
	declarations: [
		SignupComponent,
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		FlexLayoutModule
	],
	exports: [
	]
})

export class AuthModule {

}
