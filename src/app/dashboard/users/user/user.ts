import { Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ManageFinancials } from './model/type';
import { form, Field } from '@angular/forms/signals';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [Dialog, Field, NgClass],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export default class User {
  protected showManageFinancialsModal = signal<boolean>(false);

  protected manageFinancialModel = signal<ManageFinancials>(this.initManageFinancialsModel());

  protected manageFinancialForm = form(this.manageFinancialModel);

  navigateBack(): void {
    history.back();
  }

  initManageFinancialsModel(): ManageFinancials {
    return {
      feePaid: 0,
      comment: '',
    };
  }

  initManageFinancialsValidators() {}

  onCreateManageFinancials(event: Event): void {}
}
