import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user',
  imports: [TableModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export default class User {
  protected users = [
    {
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
}
