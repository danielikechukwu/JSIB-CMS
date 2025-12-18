import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm } from './model/type';
import { HotToastService } from '@ngxpert/hot-toast';
import { NgClass } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { form, Field, required, email, SchemaPathTree, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass, RouterModule, Field],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Login implements OnInit {
  private _toast = inject(HotToastService);
  private router = inject(Router);

  protected loginModel = signal<LoginForm>(this.initLoginFormData());
  protected loginForm = form(this.loginModel, this.initLoginFormValidator());

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.loginForm().value());
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with:', credentials);
      this.loginForm().reset(this.initLoginFormData());
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
      required(fieldPath.email, { message: 'Email is required' }),
        email(fieldPath.email, { message: 'Enter a valid email address' }),
        required(fieldPath.password, { message: 'Password is required' });
    };
  }
}
