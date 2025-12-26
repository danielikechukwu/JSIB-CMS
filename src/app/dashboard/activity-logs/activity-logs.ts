import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-activity-logs',
  imports: [],
  templateUrl: './activity-logs.html',
  styleUrl: './activity-logs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ActivityLogs {}
