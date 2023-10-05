import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin = () => {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.userService.login(loginData)
        .subscribe((resp) => {
          // code for jsonplaceholder typicode service 
          console.log(resp);
          if (resp.length > 0 && resp[0].username === loginData.username && resp[0].username === loginData.password) {
            alert(`Hi ${resp[0].username}! You've successfully logged in.`);
            this.loginForm.reset();
          }
          else {
            alert('Invalid credentials!');
            this.loginForm.reset();
          }
        });
    }
  };

}
