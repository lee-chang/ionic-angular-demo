import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.auth.login(email!, password!)
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
