import { NgModule } from '@angular/core'; 
import { Routes, RouterModule} from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact', //Cualquier otra ruta va al home
        component: ContactPageComponent
    },
    {
        path: '**', //Cualquier otra ruta va al home
        redirectTo: 'home'
    }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }