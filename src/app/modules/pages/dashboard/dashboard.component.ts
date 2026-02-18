import { Component } from '@angular/core';
import { BreadcrumbsComponent, BarChartComponent } from "@app/shared/ui";
import { ChartComponent } from "@app/shared/ui/chart/chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [BreadcrumbsComponent, BarChartComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  breadcrumbs!: string[];

  constructor(){}

}
