import { InterieurFormComponent } from './pages/clients/form/interieurForm/interieurForm.component';
import { ServiceComponent } from './pages/clients/services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'services',
        component: ServiceComponent,
        pathMatch: 'full'
    },
    {
        path: 'services/interieur',
        component: InterieurFormComponent,
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
