import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServiceService } from './my-service.service';
import { RootService } from './forRoot/root.service';
import { ChildService } from './forChild/child.service'

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class ExampleModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: ExampleModule,
      // Añadir provider
      providers: []
    }
  }

  static forChild(): ModuleWithProviders{
    return {
      ngModule: ExampleModule,
      // Añadir provider
      providers: []
    }
  }

 }