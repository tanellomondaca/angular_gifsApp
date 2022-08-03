import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsPageComponent } from '../gifs/gifs-page/gifs-page.component';



@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
   SidebarComponent
  ]
})
export class SharedModule { }
