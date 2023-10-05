import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitRegister = () => {
    console.log('submit');
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.userService.register(registerData)
        .subscribe((resp) => {
          alert(`Hi ${resp.username}! You've successfully registered.`);
          this.registerForm.reset();
        });
    }
  };
}


