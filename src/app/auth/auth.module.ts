import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { AngularFireAuthModule } from '../../../node_modules/angularfire2/auth';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	declarations: [
		SignupComponent,
		LoginComponent
	],
	imports: [
		ReactiveFormsModule,
		AngularFireAuthModule,
		SharedModule,
		AuthRoutingModule
	]
})

export class AuthModule {}
