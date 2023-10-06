import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: [{ value: '', disabled: true }],
        state: [{ value: '', disabled: true }],
        pincode: ['', Validators.required],
      })
    });
  }

  fillAddressData = () => {
    const pin = this.registerForm.get('address.pincode').value;
    console.log(pin);
    this.userService.getAddressByPincode(pin)
    // use pipe here 
      .subscribe({
        next: (resp) => {
          const addressData = resp.records[0];
          console.log(addressData.district);
          console.log(addressData.statename);
          this.registerForm.patchValue({
            address: {
              city: addressData.district,
              state: addressData.statename
            }
          });
        },
        error: (err) => { console.log(err) }
      })
  };

  submitRegister = () => {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.userService.register(registerData)
        .subscribe((resp) => {
          console.log(resp);
          alert(`Hi ${resp.username}! You've successfully registered. Redirecting to login...`);
          this.registerForm.reset();
          this.router.navigate(['login']);

        });
    }
  };
}




