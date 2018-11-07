import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  //Declare variable to hold response and make it public to be accessible from app.components.html
  public members;
  //Initialize the call using MemberService 
  constructor(private _myService: MemberService) { }
  ngOnInit(){
    this.getMembers();
  }
  getMembers() {
   this._myService.getMembers().subscribe(
      //Read data and assign to public variable members
      data => { this.members = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(memberId: string) {
    this._myService.deleteMember(memberId);
  }
 
}
