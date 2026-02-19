import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [NgClass],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardComponent {
  @Input() card: any;
}
