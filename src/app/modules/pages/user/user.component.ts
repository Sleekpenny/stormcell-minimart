import { Component } from '@angular/core';
import { ContainerComponent, RequestTableComponent } from "@app/modules/components";
import { BreadcrumbsComponent } from "@app/shared/ui";

@Component({
  selector: 'app-user',
  imports: [ContainerComponent, BreadcrumbsComponent, RequestTableComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true
})
export class UserComponent {
  breadcrumbs!: string[];

  tableHeaders = [
    { key: 'user_id', label: 'User Id ', align: 'center' as const, type: 'text' as const },
    { key: 'name', label: 'Name', align: 'center' as const, type: 'text' as const },
    { key: 'type', label: 'Type', align: 'center' as const, type: 'text' as const },
    { key: 'created_at', label: 'Created At', align: 'center' as const, type: 'text' as const },
    { key: 'status', label: 'Status', align: 'center' as const, type: 'status' as const },
  ];

  users = [
    {
      id: '1',
      user_id: '764738',
      name: 'Raph Edwards',
      type: 'Admin',
      created_at: '21 Sept, 2020',
      status: 'Active',
    },
    {
      id: '2',
      user_id: '764368',
      name: 'Arlene McCloy',
      type: 'User',
      created_at: '21 Sept, 2020',
      status: 'Active',
    },
    {
      id: '3',
      user_id: '764368',
      name: 'Darlene Robertson',
      type: 'Admin',
      created_at: '21 Oct, 2020',
      status: 'Active',
    },
    {
      id: '4',
      user_id: '73736',
      name: 'Annette Black',
      type: 'User',
      created_at: '21 Oct, 2020',
      status: 'Inactive',
    },
    {
      id: '5',
      user_id: '678543',
      name: 'Cody Fisher',
      type: 'User',
      created_at: '21 Nov, 2020',
      status: 'Banned',
    },
    {
      id: '6',
      user_id: '12345',
      name: 'Jane Cooper',
      type: 'Admin',
      created_at: '21 Nov, 2020',
      status: 'Banned',
    },
    {
      id: '7',
      user_id: '674767',
      name: 'Cody Fisher',
      type: 'User',
      created_at: '21 Nov, 2020',
      status: 'Suspended',
    },
    {
      id: '8',
      user_id: '73736',
      name: 'Annette Black',
      type: 'Admin',
      created_at: '21 Oct, 2020',
      status: 'Inactive',
    },
  ];

  handleRowClick(row: any): void {
    console.log('Row clicked:', row);
  }

  handleActionClick(row: any): void {
    console.log('Action clicked:', row);
  }

}
