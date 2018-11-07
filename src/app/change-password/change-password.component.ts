import { Component, OnInit, Input } from '@angular/core';
//import {ActivatedRoute, ParamMap, Router } from '@angular/router'; //Mod12 III.#4

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @Input() oldEmail: string; //Bind oldEmail string variable value from app.component.html with @Input()
  @Input() oldPassword: string; //Bind oldPassword string variable value from app.component.html with @Input()
  @Input() newPassword: string;
  //private mode = 'add'; //default mode  //Mod12 III.#4
  //private id: string; //student ID      //Mod12 III.#4

  constructor(){}
    //private router: Router, public route: ActivatedRoute) {} //Mod12 III.#4
    
  onSubmit(){
    console.log("You submitted : "+ this.newPassword);
    //this._myService.addMembers("","",this.email, this.password); //Don't know how to overwrite old password with new
    alert("Don't forget your new password!");
  }
  
  ngOnInit(){}
  /*Mod12 III.#4
  ngOnInit(){ 
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; //request had a parameter _id 
           this.id = paramMap.get('_id');}
       else {this.mode = 'add';
           this.id = null; }
     });
  }*/   
}
