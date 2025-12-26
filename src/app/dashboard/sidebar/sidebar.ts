import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '../../store/store';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  private _router = inject(Router);
  private _store = inject(Store);

  resolveSideNav(): void {
    if (this._store.store().isMobile) {
      this._store.updateStore({ openSideNav: false });
    }
  }

  analyticsReport(): void {
    this._router.navigateByUrl('/app/analytics-report');
  }

  logout(): void {
    this._router.navigateByUrl('/auth');
  }
}
