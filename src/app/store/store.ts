import { Injectable, signal } from '@angular/core';
import { StoreDto } from './model/type';

@Injectable({
  providedIn: 'root',
})
export class Store {
  private _store = signal<StoreDto>({
    isMobile: false,
    openSideNav: false,
    routeDetail: {},
  });

  private getStore() {
    return this._store();
  }

  updateStore(state: Record<string, unknown>): void {
    this._store.update((store) => ({
      ...store,
      ...state,
    }));

    console.log(this.getStore());
  }

  readonly store = this._store.asReadonly();
}
