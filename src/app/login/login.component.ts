import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email: string;
  password: string;

  members: any;


  //initialize the call using MemberService 
  constructor(private _myService: MemberService) { }

  onSubmit(){
    console.log("You submitted : "+ this.email + " " + this.password );
    this._myService.getMemberByEmail(this.email, this.password).subscribe(
      //Read data and assign to public variable members
      data => {  
        this.members = data;
        
        if(!this.members) {
          alert("You are not member");
        } else {
          if (this.members.password !== this.password) {
            alert("Please check your password");
          } else {
            alert("Welcome !!");
          }
        }
      },
      err => console.error(err),
      () => console.log('finished loading')
    );
    //console.log(this.members, 'this.members');
    

   
  }

  ngOnInit() { }

}
