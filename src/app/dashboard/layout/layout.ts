import { Component, DestroyRef, inject, linkedSignal, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs';
import { Store } from '../../store/store';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, Sidebar, Topbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export default class Layout implements OnInit {
  // Dependency injections
  private _breakPoint = inject(BreakpointObserver);
  private _destroyRef = inject(DestroyRef);
  private _store = inject(Store);
  protected openSideNav = linkedSignal(() => this._store.store().openSideNav);

  ngOnInit(): void {
    console.log('Layout');

    this._breakPoint.observe([Breakpoints.Handset]).subscribe((result) => {
      console.log(result);
      const state: boolean = result.matches;
      this._store.updateStore({ openSideNav: state ? false : true, isMobile: state });
    });
  }
}
