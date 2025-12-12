import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '../../store/store';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  private _router = inject(Router);
  private _store = inject(Store);

  ngOnInit(): void {}

  resolveSideNav(): void {
    if (this._store.store().isMobile) {
      this._store.updateStore({ openSideNav: false });
    }
  }

  logout(): void {
    this._router.navigateByUrl('/auth');
  }
}
