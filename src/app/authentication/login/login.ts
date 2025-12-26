/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginForm } from './model/type';
import { HotToastService } from '@ngxpert/hot-toast';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { form, Field, required, email, SchemaPathTree, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass, RouterModule, Field, NgOptimizedImage],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Login {
  private _toast = inject(HotToastService);
  private router = inject(Router);

  protected loginModel = signal<LoginForm>(this.initLoginFormData());
  protected loginForm = form(this.loginModel, this.initLoginFormValidator());

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.loginForm().value());
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with:', credentials);
      this.loginForm().reset(this.initLoginFormData());
      this._toast.success('Login successful!');
      this.router.navigateByUrl('/app');
      // Add your login logic here
    });
  }

  initLoginFormData(): LoginForm {
    return {
      email: '',
      password: '',
    };
  }

  initLoginFormValidator(): (fieldPath: SchemaPathTree<LoginForm>) => void {
    return (fieldPath: SchemaPathTree<LoginForm>) => {
      required(fieldPath.email, { message: 'Email is required' });
      email(fieldPath.email, { message: 'Enter a valid email address' }),
        required(fieldPath.password, { message: 'Password is required' });
    };
  }
}
