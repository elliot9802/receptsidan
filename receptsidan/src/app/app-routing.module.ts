import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptlistanComponent } from './receptlistan/receptlistan.component';
import { ReceptsidorComponent } from './receptsidor/receptsidor.component';

const routes: Routes = [
  { path: '', component: ReceptlistanComponent },
  { path: 'recipe/:id', component: ReceptsidorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
