import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class MemberService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getMembers() {
        return this.http.get('http://localhost:8000/members');
    }

    // Uses http.get() to load data 
    getMemberByEmail(email: string, password: string) {
        console.log(email);
        return this.http.get('http://localhost:8000/memberByEmail/'+email);
    }

    // Uses http.post() to post data 
    addMembers(firstName: string, lastName: string, email: string, password: string) {
        this.http.post('http://localhost:8000/members',{ firstName, lastName, email, password }).subscribe((responseData) => {
         console.log(responseData);
       });
    location.reload(); 
    }

    deleteMember(memberId: string) {
        this.http.delete("http://localhost:8000/members/" + memberId)
          .subscribe(() => {
              console.log('Deleted: ' + memberId);
          });
        location.reload();   
      }

    updateMembers(memberId: string, firstName: string, lastName: string, email: string, password: string) {
    //request path http://localhost:8000/members/5xbd456xx 
    //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/members/" 
             + memberId,{ firstName, lastName, email, password })
          .subscribe(() => {
              console.log('Updated: ' + memberId);
          });
          location.reload();
    }

    
}
