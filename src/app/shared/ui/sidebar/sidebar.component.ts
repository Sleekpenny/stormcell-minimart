import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { userInfo, utilis } from '@app/core';


@Component({
  selector: 'app-sidebar',
  imports: [ RouterLink, RouterLinkActive, NgClass ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Output() toggleSidebar = new EventEmitter<any>()
  @Output() toggleTeam = new EventEmitter<any>()
  @Input() user!: userInfo;
  @Input() isSidebarOpen!: boolean;
  @Input() isTeamOpen!: boolean;

   navLinks = utilis.navLinks;
   openLinks: Record<string, boolean> = {};

  closeSidebarOnMobile (){
    { if (window.innerWidth < 1024) this.isSidebarOpen = false; };
  } 

  toggleLink(label: string, event: Event): void {
    event.stopPropagation();
    this.openLinks[label] = !this.openLinks[label];
  }

  teams = utilis.teams;
}
