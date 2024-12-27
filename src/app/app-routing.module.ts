import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { CompteComponent } from './compte/compte.component';
import { CompteFormComponent } from './compte-form/compte-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'client', component: ClientComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'compte-form', component: CompteFormComponent },
  { path: 'compte-form/:rib', component: CompteFormComponent },
  { path: 'ajoutclient', component: ClientFormComponent },
  { path: 'client/:id/edit', component: ClientFormComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
