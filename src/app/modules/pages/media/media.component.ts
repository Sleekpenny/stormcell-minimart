import { Component } from '@angular/core';
import { MediaContainerComponent, MediaContentComponent } from "@app/modules/components";
import { BreadcrumbsComponent } from "@app/shared/ui";

@Component({
  selector: 'app-media',
  imports: [MediaContainerComponent, BreadcrumbsComponent, MediaContentComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss',
  standalone: true
})
export class MediaComponent {
  breadcrumbs!: string[];
  mediaFiles = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      fileName: 'profile_photo.pdf',
      uploadTime: '1m',
      fileSize: '6.82 KB'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      fileName: 'business_proposal.pdf',
      uploadTime: '5m',
      fileSize: '2.1 MB'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      fileName: 'marketing_strategy.pdf',
      uploadTime: '12m',
      fileSize: '1.5 MB'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      fileName: 'financial_report.pdf',
      uploadTime: '23m',
      fileSize: '3.4 MB'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      fileName: 'team_presentation.pdf',
      uploadTime: '35m',
      fileSize: '5.2 MB'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      fileName: 'project_overview.pdf',
      uploadTime: '1h',
      fileSize: '890 KB'
    },
    {
      id: '7',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      fileName: 'client_contract.pdf',
      uploadTime: '2h',
      fileSize: '4.7 MB'
    },
    {
      id: '8',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      fileName: 'annual_budget.pdf',
      uploadTime: '3h',
      fileSize: '2.8 MB'
    },
    {
      id: '9',
      imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
      fileName: 'invoice_2026.pdf',
      uploadTime: '5h',
      fileSize: '156 KB'
    },
    {
      id: '10',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      fileName: 'employee_handbook.pdf',
      uploadTime: '1d',
      fileSize: '6.1 MB'
    },
    {
      id: '11',
      imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      fileName: 'design_mockups.pdf',
      uploadTime: '2d',
      fileSize: '8.3 MB'
    },
    {
      id: '12',
      imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
      fileName: 'meeting_notes.pdf',
      uploadTime: '3d',
      fileSize: '234 KB'
    }
  ];
}
