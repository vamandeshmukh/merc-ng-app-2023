import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  register = (registerData: any): Observable<any> => {
    console.log(registerData);
    return this.http.post(this.userUrl, registerData);
  };

  login = (loginData: any): Observable<any> => {
    console.log(loginData);
    return this.http.get(`${this.userUrl}?username=${loginData.username}`);
  };

}
