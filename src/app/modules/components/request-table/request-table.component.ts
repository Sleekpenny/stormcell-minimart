import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-request-table',
  imports: [
    RouterLink,
  ],
  templateUrl: './request-table.component.html',
  styleUrl: './request-table.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestTableComponent {
  @Input() headers: any[] = [];
  @Input() data: any[] = [];
  @Input() showCheckbox = true;
  @Input() showActions = true;
  
  @Output() rowClick = new EventEmitter<any>();
  @Output() actionClick = new EventEmitter<any>();
  @Output() toggleChange = new EventEmitter<{ row: any; value: boolean }>();

  getStatusClass(status: string): string {
    const statusMap: Record<string, string> = {
      'Completed': 'bg-green-50 text-green-700 ',
      'Pending': 'bg-gray-50 text-gray-700 ',
      'Refunded': 'bg-yellow-50 text-yellow-700 ',
      'Canceled': 'bg-red-50 text-red-700 ',
      'Cancelled': 'bg-red-50 text-red-700 ',
    };
    return statusMap[status] || 'bg-gray-50 text-gray-700';
  }

  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }

  onActionClick(row: any): void {
    this.actionClick.emit(row);
  }

  onToggle(row: any): void {
    const header = this.headers.find(h => h.type === 'toggle');
    if (header) {
      const newValue = !row[header.key];
      row[header.key] = newValue;
      this.toggleChange.emit({ row, value: newValue });
    }
  }
  }
