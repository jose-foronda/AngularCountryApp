import { Component, NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

const routes: Routes = [
{
    path: 'por-capital',
    component: PorCapitalComponent
},
{
    path: 'por-pais',
    component: PorPaisComponent
},
{
    path: 'por-region',
    component: PorRegionComponent
},
{
    path: 'por-capital',
    component: PorCapitalComponent
},
{
    path: 'by/:id',
    component: VerPaisComponent
}

]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountriesRoutingModule {}