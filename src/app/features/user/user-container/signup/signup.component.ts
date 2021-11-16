import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
  });

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      this.authService
        .signUp(this.signupForm.getRawValue())
        .subscribe((res) => {
          console.log(res);
          this.signupForm.reset();
          this.router.navigate(['users/login']);
        });
    }
  }
}
