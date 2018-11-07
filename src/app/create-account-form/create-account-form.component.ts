import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';  //Mod12 III.#4
import {ActivatedRoute, ParamMap } from '@angular/router'; //Mod12 III.#4

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() password: string;
  
  private mode = 'Add'; //Mod12 III.#4 default mode- priv class var to keep what will be added/edited
  private id: string;   //Mod12 III.#4 student ID - priv class var to keep what record will be edited

  //initialize the call using MemberService 
  constructor(private _myService: MemberService, private router:Router, 
  public route: ActivatedRoute  //Mod12 III.#4 add public route parameter to constructor
  ){}  
  onSubmit(){
    console.log("You submitted : "+ this.firstName + " " + this.lastName + " " + this.email + " " + this.password );
    if(this.mode == 'Add') //Mod12 III.#7 revised here w/if stmts to check mode add/edit
      this._myService.addMembers(this.firstName ,this.lastName, this.email, this.password);
    alert("Welcome new member!");
    if(this.mode == 'Edit')
      this._myService.updateMembers(this.id, this.firstName ,this.lastName, this.email, this.password);
  }

  //Mod12 III.#4 -- if update button clicked, route will check for _id, if there's _id it will go to edit, else go to add
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'Edit'; //request had a parameter _id 
           this.id = paramMap.get('_id');}
       else {this.mode = 'Add';
           this.id = null; }
     });
  }
  

}
