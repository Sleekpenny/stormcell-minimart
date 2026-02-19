import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "@app/shared/ui";
import { StatisticsCardComponent, ContainerComponent, RequestTableComponent } from "@app/modules/components";
import { pageContent } from '@app/core';

@Component({
  selector: 'app-list',
  imports: [BreadcrumbsComponent, StatisticsCardComponent, ContainerComponent, RequestTableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone : true
})
export class ListComponent {
  breadcrumbs!: string[];
  stats= pageContent.stats_support

  tableHeaders = [
    { key: 'request_id', label: 'Request Id ', align: 'center' as const, type: 'text' as const },
    { key: 'created_at', label: 'Created At', align: 'center' as const, type: 'text' as const },
    { key: 'user', label: 'User', align: 'center' as const, type: 'text' as const },
    { key: 'subject', label: 'Subject', align: 'center' as const, type: 'text' as const },
    { key: 'status', label: 'Status', align: 'center' as const, type: 'status' as const },
  ];

  support_list = [
    {
      id: '1',
      request_id: '764738',
      created_at: '21 Sept, 2020',
      user: 'Raph Edwards',
      subject: 'Admin',
      status: 'Sovled',
    },
    {
      id: '2',
      request_id: '764368',
      created_at: '21 Sept, 2020',
      user: 'Arlene McCloy',
      subject: 'User',
      status: 'Pending',
    },
    {
      id: '3',
      request_id: '764368',
      created_at: '21 Oct, 2020',
      user: 'Darlene Robertson',
      subject: 'Admin',
      status: 'Solved',
    },
    {
      id: '4',
      request_id: '73736',
      created_at: '21 Oct, 2020',
      user: 'Annette Black',
      subject: 'User',
      status: 'Solved',
    },
    {
      id: '5',
      request_id: '678543',
      created_at: '21 Nov, 2020',
      user: 'Cody Fisher',
      subject: 'User',
      status: 'Solved',
    },
    {
      id: '6',
      request_id: '12345',
      created_at: '21 Nov, 2020',
      user: 'Jane Cooper',
      subject: 'Admin',
      status: 'Solved',
    },
    {
      id: '7',
      request_id: '674767',
      created_at: '21 Nov, 2020',
      user: 'Cody Fisher',
      subject: 'User',
      status: 'Pending',
    },
    {
      id: '8',
      request_id: '73736',
      created_at: '21 Oct, 2020',
      user: 'Annette Black',
      subject: 'Admin',
      status: 'Pending',
    },
  ];

  handleRowClick(row: any): void {
    console.log('Row clicked:', row);
  }

  handleActionClick(row: any): void {
    console.log('Action clicked:', row);
  }
}
