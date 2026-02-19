import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-media-card',
  imports: [],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  standalone: true
})
export class MediaCardComponent {
  @Input() imageUrl = '';
  @Input() fileName = '';
  @Input() uploadTime = '';
  @Input() fileSize = '';

  @Output() edit = new EventEmitter<void>();
  @Output() download = new EventEmitter<void>();
  @Output() copyUrl = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  showMenu = false;

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }

}
