import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowMembersComponent } from './show-members/show-members.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CreateAccountFormComponent,
    LoginComponent,
    ChangePasswordComponent,
    NotFoundComponent,
    ShowMembersComponent,
    DefaultComponent    
  ],

  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  exports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],

  providers: [MemberService],
  bootstrap: [AppComponent]
})

export class AppModule { }
