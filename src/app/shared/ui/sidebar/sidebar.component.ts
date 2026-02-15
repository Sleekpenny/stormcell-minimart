import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { userInfo, utilis } from '@app/core'

@Component({
  selector: 'app-sidebar',
  imports: [ RouterLink ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Output() toggleSidebar = new EventEmitter<any>()
  @Input() user!: userInfo;
  @Input() isSidebarOpen!: boolean;

  navLinks = utilis.navLinks;

  closeSidebarOnMobile (){
    { if (window.innerWidth < 1024) this.isSidebarOpen = false; };
  } 

  teams = ['Heroicons', 'Tailwind Labs', 'Workcation'];
}
