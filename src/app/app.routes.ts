import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {path:'crud-component', component: CrudComponent},
    {path:'calculator-component', component: CalculatorComponent},    
    {path:'user-details-component/:id', component: UserDetailsComponent},
    {path: '**', component: PageNotFoundComponent }
];
