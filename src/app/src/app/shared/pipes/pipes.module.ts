import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './timediff.pipe';

export const pipesComponentsList = [FilterPipe];

@NgModule({
  imports: [CommonModule],
  declarations: pipesComponentsList,
  exports: pipesComponentsList
})

export class pipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: pipesModule
    }
  }
}