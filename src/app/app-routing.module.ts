import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Reason1Component } from './reason1/reason1.component';
import { Reason2Component } from './reason2/reason2.component';
import { Reason3Component } from './reason3/reason3.component';
import { Reason4Component } from './reason4/reason4.component';
import { Reason5Component } from './reason5/reason5.component';
import { Reason6Component } from './reason6/reason6.component';
import { Reason7Component } from './reason7/reason7.component';
import { Reason8Component } from './reason8/reason8.component';
import { Reason9Component } from './reason9/reason9.component';
import { Reason10Component } from './reason10/reason10.component';
import { Reason11Component } from './reason11/reason11.component';
import { Reason12Component } from './reason12/reason12.component';
import { Reason13Component } from './reason13/reason13.component';
import { Reason14Component } from './reason14/reason14.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardComponent },
  { path: 'ilu1', component: Reason1Component },
  { path: 'ilu2', component: Reason2Component },
  { path: 'ilu3', component: Reason3Component },
  { path: 'ilu4', component: Reason4Component },
  { path: 'ilu5', component: Reason5Component },
  { path: 'ilu6', component: Reason6Component },
  { path: 'ilu7', component: Reason7Component },
  { path: 'ilu8', component: Reason8Component },
  { path: 'ilu9', component: Reason9Component },
  { path: 'ilu10', component: Reason10Component },
  { path: 'ilu11', component: Reason11Component },
  { path: 'ilu12', component: Reason12Component },
  { path: 'ilu13', component: Reason13Component },
  { path: 'ilu14', component: Reason14Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
