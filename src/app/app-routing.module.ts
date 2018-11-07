import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { ShowMembersComponent } from './show-members/show-members.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultComponent } from './default/default.component';

const routes: Route[] = [ {
  path: '',                     //default component to display
   component: DefaultComponent
 },       {
   path: 'login',        
   component: LoginComponent
 },       {
  path: 'createaccount',         
  component: CreateAccountFormComponent
 },        {
  path: 'editMember/:_id',         //when update button clicked 
  component: CreateAccountFormComponent
},        {
  path: 'showmembers',         
  component: ShowMembersComponent
},        {
   path: 'changepassword',       
   component: ChangePasswordComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule],
})
export class AppRoutingModule { }
