import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { AuthService } from './auth/auth.service';
import { UIService } from './shared/ui.service';
import { TrainingService } from './training/training.service';

import { reducers } from './app.reducer';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		HeaderComponent,
		SidenavListComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		FlexLayoutModule,
		AngularFireModule.initializeApp(environment.firebase),
		AuthModule,
		AngularFirestoreModule,
		StoreModule.forRoot(reducers)
	],
	providers: [AuthService, TrainingService, UIService],
	bootstrap: [AppComponent],
})
export class AppModule { }
