import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestPageComponent } from './components/test-page/test-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestPageComponent },
  { pathMatch: 'full', redirectTo:'login', path:'**'  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


