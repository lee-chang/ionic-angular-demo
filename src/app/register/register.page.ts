import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .register(email!, password!)
        .then((user) => {
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
