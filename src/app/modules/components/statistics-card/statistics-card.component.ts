import { Component, ChangeDetectionStrategy, Input} from '@angular/core';
import { StatsCardComponent } from "@app/shared/ui";

@Component({
  selector: 'app-statistics-card',
  imports: [StatsCardComponent],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StatisticsCardComponent {
  @Input() stats: any;
  @Input() classList!: string;
}
