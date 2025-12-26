/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { CreateNewUser, Status, UpdateUser } from './model/types';
import { email, form, required, SchemaPathTree, Field, submit } from '@angular/forms/signals';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Popover } from 'primeng/popover';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, TableModule, Dialog, Field, NgClass, Popover, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class User {
  protected users = [
    {
      id: 'e2760add-9fd7-42ea-8774-a81e89f86ab5',
      title: 'prof.',
      first_name: 'peter',
      last_name: 'janet',
      institution: 'university of lagos',
      department: 'computer science',
      role: ['author', 'moderator', 'finalizer'],
      email: 'janet@me.com',
      status: 'inactive',
    },
    {
      id: 'ff389f4d-7955-495f-a3c3-cb45ad99ae54',
      title: 'prof.',
      first_name: 'henry',
      last_name: 'kelly',
      institution: 'university of benin',
      department: 'lab science',
      role: ['author', 'moderator'],
      email: 'kelly@me.com',
      status: 'active',
    },
    {
      id: 'a569a879-5037-4fff-ad57-8fdda9e98fee',
      title: 'engr.',
      first_name: 'kelvin',
      last_name: 'philip',
      institution: 'convenant university',
      department: 'artificial intelligence/machine learning',
      role: ['author'],
      email: 'philip@me.com',
      status: 'inactive',
    },
  ];
  protected showCreateNewUserModal = signal<boolean>(false);
  protected showUpdateUserModal = signal<boolean>(false);
  protected createNewUserModel = signal<CreateNewUser>(this.initCreateNewUserModel());
  protected updateUserModel = signal<UpdateUser>(this.initUpdateUserModel());
  protected updateUserForm = form(this.updateUserModel, this.initUpdateUserFormValidation());
  protected createNewUserForm = form(
    this.createNewUserModel,
    this.initCreateNewUserFormValidation(),
  );
  protected status = Status;

  constructor() {
    effect(() => {
      if (!this.showCreateNewUserModal()) {
        this.createNewUserForm().reset(this.initCreateNewUserModel());
      }
    });
  }

  enableUser(): void {
    console.log('Enable User');
  }

  disableUser(): void {
    console.log('Disable User');
  }

  updateUser(user: unknown): void {
    this.showUpdateUserModal.set(!this.showUpdateUserModal());
    console.log('User: ', user);
  }

  saveChanges(user: unknown): void {
    console.log('User: ', user);
  }

  initCreateNewUserModel(): CreateNewUser {
    return {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      role: '',
    };
  }

  initUpdateUserModel(): UpdateUser {
    return {
      title: '',
      firstName: '',
      lastName: '',
      institution: '',
      department: '',
      phoneNumber: '',
      alternativePhoneNumber: '',
      gender: '',
    };
  }

  initCreateNewUserFormValidation(): (fieldPath: SchemaPathTree<CreateNewUser>) => void {
    return (fieldPath: SchemaPathTree<CreateNewUser>) => {
      (email(fieldPath.email, { message: 'enter a validate email address' }),
        required(fieldPath.email, { message: 'email is required' }),
        required(fieldPath.firstName, { message: 'first name is required' }),
        required(fieldPath.lastName, { message: 'last name is required' }),
        required(fieldPath.role, { message: 'role is required' }),
        required(fieldPath.title, { message: 'title is required' }));
    };
  }

  initUpdateUserFormValidation(): (fieldPath: SchemaPathTree<UpdateUser>) => void {
    return (fieldPath: SchemaPathTree<UpdateUser>) => {
      (required(fieldPath.institution, { message: 'institution is required' }),
        required(fieldPath.firstName, { message: 'first name is required' }),
        required(fieldPath.lastName, { message: 'last name is required' }),
        required(fieldPath.department, { message: 'department is required' }),
        required(fieldPath.phoneNumber, { message: 'phone number is required' }),
        required(fieldPath.gender, { message: 'gender is required' }),
        required(fieldPath.alternativePhoneNumber, {
          message: 'alternative phone number is required',
        }),
        required(fieldPath.title, { message: 'title is required' }));
    };
  }

  onCreateNewUser(event: Event): void {
    event.preventDefault();
    console.log(this.createNewUserForm().value());
    submit(this.createNewUserForm, async () => {
      const credentials = this.createNewUserModel();
      console.log('Logging in with:', credentials);
      this.createNewUserForm().reset(this.initCreateNewUserModel());

      // Add your login logic here
    });
  }

  onUpdateUser(event: Event): void {
    event.preventDefault();
    console.log(this.updateUserForm().value());
    submit(this.updateUserForm, async () => {
      const credentials = this.updateUserModel();
      console.log('Logging in with:', credentials);
      this.updateUserForm().reset(this.initUpdateUserModel());

      // Add your login logic here
    });
  }
}
