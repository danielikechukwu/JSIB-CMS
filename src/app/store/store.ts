import { Injectable, signal } from '@angular/core';
import { StoreDto } from './model/type';

@Injectable({
  providedIn: 'root',
})
export class Store {
  private _store = signal<StoreDto>({
    isMobile: false,
    openSideNav: false,
  });

  private getStore() {
    return this._store();
  }

  updateStore(state: { [key: string]: any }) {
    this._store.update((store) => ({
      ...store,
      ...state,
    }));

    console.log(this.getStore());
  }

  readonly store = this._store.asReadonly();
}
