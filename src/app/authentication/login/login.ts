import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm } from './model/type';
import { HotToastService } from '@ngxpert/hot-toast';
import { NgClass } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login implements OnInit {
  private _toast = inject(HotToastService);
  private router = inject(Router);

  protected loginForm!: FormGroup<LoginForm>;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  submitLoginForm(): void {
    // if (this.loginForm.invalid) {
    //   this._toast.error('Please fill required field');
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }

    const login = this.loginForm.getRawValue();

    this.router.navigateByUrl('/app');

    console.log('Login: ', this.loginForm.value);
  }
}
