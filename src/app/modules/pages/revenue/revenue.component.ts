import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "@app/shared/ui";

@Component({
  selector: 'app-revenue',
  imports: [BreadcrumbsComponent],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss',
  standalone: true
})
export class RevenueComponent {
  urls!: string[];
}
