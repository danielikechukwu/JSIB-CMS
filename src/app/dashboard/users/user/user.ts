import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ManageFinancials } from './model/type';
import { form, Field, submit } from '@angular/forms/signals';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [Dialog, Field, NgClass],
  templateUrl: './user.html',
  styleUrl: './user.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  onCreateManageFinancials(event: Event): void {
    event.preventDefault();
    console.log(this.manageFinancialForm().value());
    submit(this.manageFinancialForm, async () => {
      const credentials = this.manageFinancialModel();
      console.log('Logging in with:', credentials);
      this.manageFinancialForm().reset(this.initManageFinancialsModel());
    });
  }
}
