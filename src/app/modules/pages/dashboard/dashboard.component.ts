import { Component } from '@angular/core';
import { BreadcrumbsComponent, BarChartComponent } from "@app/shared/ui";
import { ChartComponent } from "@app/modules/components/chart/chart.component";
import { StatisticsCardComponent, ContainerComponent } from "@app/modules/components";
import { pageContent } from '@app/core';

@Component({
  selector: 'app-dashboard',
  imports: [BreadcrumbsComponent, ChartComponent, StatisticsCardComponent, ContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  breadcrumbs!: string[];
  stats = pageContent.stats;

  constructor(){}

}
