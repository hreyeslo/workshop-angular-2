import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RootComponent } from './ejercicio/components/root/root.component';
import { ExampleModule } from './ejercicio/services/example.module';

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./ejercicio/components/child/child.module').then(m => m.ChildModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // Importar forRoot
  ],
  declarations: [AppComponent, RootComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
