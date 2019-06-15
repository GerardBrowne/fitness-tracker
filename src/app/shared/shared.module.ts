import { NgModule } from '../../../node_modules/@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		FlexLayoutModule
	],
	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		FlexLayoutModule
	]
})
export class SharedModule {}
