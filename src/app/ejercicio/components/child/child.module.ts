import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';
import { ExampleModule } from '../../services/example.module';

const routes: Routes = [
	{
		path: '',
		component: ChildComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		// Importar forChild
	],
	declarations: [ChildComponent],
	entryComponents: [ChildComponent]
})
export class ChildModule { }
