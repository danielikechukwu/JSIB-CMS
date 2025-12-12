import { Component, inject, model } from '@angular/core';
import { Store } from '../../store/store';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  protected _store = inject(Store);

  openSideNav = model.required<boolean>();
}
