import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Use this in register component 
  // reference: 'https://data.gov.in/resource/all-india-pincode-directory-contact-details-along-latitude-and-longitude#api';

  addressApi: string = 'https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd';
  apiKey: string = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

  getAddressByPincode = (pincode: number): Observable<any> => {
    return this.http.get(`${this.addressApi}?api-key=${this.apiKey}&format=json&filters%5Bpincode%5D=${pincode}`);
  };

  // username:
	// password:
	// confirm-password:
	// address:
	// 	street:
	// 	city: 
	// 	state:
	// 	pin: 500001
	// 	country: India 



  register = (registerData: any): Observable<any> => {
    console.log(registerData);
    return this.http.post(this.userUrl, registerData)
      .pipe(shareReplay(1, 20000))
  };

  // login = (loginData: any): Observable<any> => {
  //   console.log(loginData);  
  //   return this.http.get(`${this.userUrl}?username=${loginData.username}`);
  // };

  login = (loginData: any): Observable<any> => {
    console.log(loginData);
    return this.http.get(`${this.userUrl}?username=${loginData.username}`);
  };



}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   userUrl: string = 'https://jsonplaceholder.typicode.com/users';

//   constructor(private http: HttpClient) { }

//   register = (registerData: any): Observable<any> => {
//     console.log(registerData);
//     return this.http.post(this.userUrl, registerData);
//   };

//   login = (loginData: any): Observable<any> => {
//     console.log(loginData); // side-effect 
//     return this.http.get(`${this.userUrl}?username=${loginData.username}`);
//   };

//   // If possible, use this in register component 
//   // reference: 'https://data.gov.in/resource/all-india-pincode-directory-contact-details-along-latitude-and-longitude#api';

//   addressApi: string = 'https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd';
//   apiKey: string = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

//   getAddressByPincode = (pincode: number): Observable<any> => {
//     return this.http.get(`${this.addressApi}?api-key=${this.apiKey}&format=json&filters%5Bpincode%5D=${pincode}`);
//   };


// }

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private isLoggedIn: boolean = false;

//   userUrl: string = 'https://jsonplaceholder.typicode.com/users';

//   constructor(private http: HttpClient) { }

//   register = (registerData: any): Observable<any> => {
//     console.log(registerData);
//     return this.http.post(this.userUrl, registerData);
//   };

//   login = (loginData: any): Observable<any> => {
//     console.log(loginData);
//     return this.http.get(`${this.userUrl}?username=${loginData.username}`);
//   };

//   getIsLoggedIn = (): boolean => {
//     return this.isLoggedIn;
//   };

//   setIsLoggedIn = (isLogged: boolean) => {
//     this.isLoggedIn = isLogged;
//   };

//   logout() {
//     this.isLoggedIn = false;
//     localStorage.removeItem('loggedInUser');
//   }

// }


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   userUrl: string = 'https://jsonplaceholder.typicode.com/users';

//   constructor(private http: HttpClient) { }

//   register = (registerData: any): Observable<any> => {
//     console.log(registerData);
//     return this.http.post(this.userUrl, registerData);
//   };

//   login = (loginData: any): Observable<any> => {
//     console.log(loginData);
//     return this.http.get(`${this.userUrl}?username=${loginData.username}`);
//   };

// }
