import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  standalone: true
})
export class ContainerComponent {
  @Input() title!:string;
  @Input() entity!:boolean;
}
