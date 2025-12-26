import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  linkedSignal,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import Sidebar from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '../../store/store';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Event, Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, Topbar, NgOptimizedImage],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Layout implements OnInit {
  // Dependency injections
  private _breakPoint = inject(BreakpointObserver);
  private _destroyRef = inject(DestroyRef);
  private _store = inject(Store);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  protected openSideNav = linkedSignal(() => this._store.store().openSideNav);

  ngOnInit(): void {
    this._breakPoint.observe([Breakpoints.Handset]).subscribe((result) => {
      const state: boolean = result.matches;
      this._store.updateStore({ openSideNav: state ? false : true, isMobile: state });
    });
  }

  title = toSignal(
    this._router.events.pipe(
      takeUntilDestroyed(this._destroyRef),
      map((event: Event) => {
        if (event instanceof NavigationEnd) {
          const routeDetail = { ...this._store.store().routeDetail };
          routeDetail.url = event.url;
          this._store.updateStore({ routeDetail: routeDetail });

          let route = this._route;

          while (route.firstChild) {
            route = route.firstChild;
          }

          const title = route.snapshot.data['title'] ?? '';

          routeDetail.title = title;

          this._store.updateStore({ routeDetail: routeDetail });
        }
      }),
    ),
  );
}
