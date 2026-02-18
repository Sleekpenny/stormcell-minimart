import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent, SidebarComponent } from "@app/shared/ui";


@Component({
  selector: 'app-master-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css'
})
export class MasterLayoutComponent {
  readonly isLive: boolean = true
  isSidebarOpen = false;
  isTeamOpen = false;

  get width() {
    return 'max-w-[100rem] mx-auto'
  }

  user = { name: 'Asemokhe Courage', avatar: 'https://i.pravatar.cc/32' };

  toggleSidebar () {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize = ({ target }: Event) => { if ((target as Window).innerWidth >= 1024) this.isSidebarOpen = false; };
}

