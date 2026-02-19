import { Component, Input } from '@angular/core';
import { MediaCardComponent } from "@app/shared/ui";

@Component({
  selector: 'app-media-content',
  imports: [MediaCardComponent],
  templateUrl: './media-content.component.html',
  styleUrl: './media-content.component.scss',
  standalone: true
})
export class MediaContentComponent {
  @Input() mediaFiles: any;
}
