import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "@app/shared/ui";
import { StatisticsCardComponent, ContainerComponent, RequestTableComponent } from "@app/modules/components";
import { pageContent } from '@app/core';

@Component({
  selector: 'app-revenue',
  imports: [BreadcrumbsComponent, StatisticsCardComponent, ContainerComponent, RequestTableComponent],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss',
  standalone: true
})
export class RevenueComponent {
  breadcrumbs!: string[];
  stats = pageContent.stats_revenue;

  tableHeaders = [
    { key: 'type', label: 'Type', align: 'right' as const, type: 'text' as const },
    { key: 'store', label: 'Store', align: 'right' as const, type: 'text' as const },
    { key: 'country', label: 'Country', align: 'right' as const, type: 'text' as const },
    { key: 'value', label: 'Value', align: 'right' as const, type: 'text' as const },
    { key: 'status', label: 'Status', align: 'right' as const, type: 'status' as const },
  ];

  transactions = [
    {
      id: '1',
      type: 'Subscription',
      store: 'Luisa Via Roma',
      country: 'Kuwait',
      value: '$16,500.00',
      status: 'Completed',
    },
    {
      id: '2',
      type: 'Referral',
      store: 'Revolve',
      country: 'Kazakhstan',
      value: '$1,878.50',
      status: 'Pending',
    },
    {
      id: '3',
      type: 'Subscription',
      store: 'Marks and Spencer',
      country: 'Korea, South',
      value: '$102.00',
      status: 'Refunded',
    },
    {
      id: '4',
      type: 'Subscription',
      store: 'MyTheresa',
      country: 'Indonesia',
      value: '$15,000,000.00',
      status: 'Canceled',
    },
    {
      id: '5',
      type: 'Referral',
      store: 'Coggles',
      country: 'Italy',
      value: '$96.00',
      status: 'Completed',
    },
    {
      id: '6',
      type: 'Referral',
      store: 'Amazon Fashion',
      country: 'Japan',
      value: '$349.00',
      status: 'Completed',
    },
    {
      id: '7',
      type: 'Subscription',
      store: 'Boohoo',
      country: 'Honduras',
      value: '$680.00',
      status: 'Completed',
    },
    {
      id: '8',
      type: 'Subscription',
      store: 'ASOS',
      country: 'United Kingdom',
      value: '$234.50',
      status: 'Pending',
    },
    {
      id: '9',
      type: 'Referral',
      store: 'Zara',
      country: 'Spain',
      value: '$567.80',
      status: 'Completed',
    },
    {
      id: '10',
      type: 'Subscription',
      store: 'H&M',
      country: 'Sweden',
      value: '$89.99',
      status: 'Refunded',
    },
  ];

  handleRowClick(row: any): void {
    console.log('Row clicked:', row);
  }

  handleActionClick(row: any): void {
    console.log('Action clicked:', row);
  }
}
