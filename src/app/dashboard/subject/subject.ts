import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Subject {}
