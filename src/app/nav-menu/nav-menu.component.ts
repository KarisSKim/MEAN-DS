import { Component, OnInit } from '@angular/core';
//import { MemberService } from '../member.service';  

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
/*
  logStu = false;  //Variable initialized to false for button in menu "Login" because nothing is clicked yet
  formStu = false; //Variable initialized to false for button in menu "Create Account" because nothing is clicked yet
  listStu = false; //Variable initialized to false for button in menu "Show Members" because nothing is clicked yet
  Cpw = false; 

  //Method called when menu button Login is clicked
  showLogin(){
    this.listStu = false;  //keep Show Members button variable to false
    this.formStu = false;  //keep Create Account button variable to false
    this.Cpw = false;      //keep Change Password button variable to false
    this.logStu = !this.logStu; //flip Login button variable to true
    return this.logStu;  //return value of Login button
  };

  //Method called when menu button Create Account is clicked
  showForm(){ 
    this.listStu = false;  //keep Show Members button variable to false
    this.logStu = false;   //keep Login button variable to false
    this.Cpw = false;      ///keep Change Password button variable to false
    this.formStu = !this.formStu;  //flip Create Account button variable to true
    return this.formStu;  //return value of Create Account button
  };

  //Method called when menu button Show Members is clicked
  showList(){
    this.logStu = false    //keep Login button variable to false
    this.formStu = false;  //keep Create Account button variable to false
    this.Cpw = false;      //keep Change Password button variable to false
    this.listStu = !this.listStu; //flip Show Members button variable to true
    return this.listStu;  //return value of Show Members button
  };
 
  //Method called when menu button Change Password is clicked
  showChangePW(){
    this.logStu = false;   //keep Login button variable to false
    this.formStu = false;  //keep Create Account button variable to false
    this.listStu = false;  //keep Show Members button variable to false
    this.Cpw = !this.Cpw;  //flip Change Password button variable to true
    return this.Cpw;  //return value of Change Password button
  };
*/
ngOnInit (){}  
}
