import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import { userInfo } from '@app/core';
import { ThemeComponent } from "../theme/theme.component";
@Component({
  selector: 'app-header',
  imports: [ThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<any>()
  @Input() user!: userInfo;
  alarm: string ='https://unpkg.com/heroicons@2.0.18/24/outline/bell.svg'
}
