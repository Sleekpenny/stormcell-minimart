import { Component } from '@angular/core';
import { ContainerComponent, RequestTableComponent } from "@app/modules/components";
import { BreadcrumbsComponent } from "@app/shared/ui";

@Component({
  selector: 'app-locations',
  imports: [ContainerComponent, RequestTableComponent, BreadcrumbsComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  standalone: true
})
export class LocationsComponent {

  breadcrumbs!: string[];

  tableHeaders = [
    { key: 'country_code', label: 'Country Code', align: 'right' as const, type: 'text' as const },
    { key: 'country', label: 'Country', align: 'right' as const, type: 'text' as const },
    { key: 'phone_code', label: 'Phone Code', align: 'right' as const, type: 'text' as const },
    { key: 'sync_date', label: 'Sync Date ', align: 'right' as const, type: 'text' as const },
    { key: 'status', label: 'Status', align: 'center' as const, type: 'toggle' as const },
  ];

  countries = [
    {
      id: '1',
      country_code: 'NIG',
      country: 'Nigeria',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '2',
      country_code: 'NID',
      country: 'India',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '3',
      country_code: 'UK',
      country: 'United Kingdom',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '4',
      country_code: 'RU',
      country: 'Russia',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '5',
      country_code: 'CHN',
      country: 'China',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '6',
      country_code: 'FR',
      country: 'France',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '7',
      country_code: 'USA',
      country: 'United States',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },
    {
      id: '8',
      country_code: 'KR',
      country: 'Korea',
      phone_code: '+234',
      sync_date: '8 Sept, 2020',
      status: true,
    },

  ];

  handleRowClick(row: any): void {
    console.log('Row clicked:', row);
  }

  handleActionClick(row: any): void {
    console.log('Action clicked:', row);
  }

  handleToggleChange(event: { row: any; value: boolean }): void {
    console.log('Toggle changed:', event.row.country, 'Active:', event.value);
  }
}
