import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, HomePageComponent, AboutPageComponent]
})
export class SharedModule { }
