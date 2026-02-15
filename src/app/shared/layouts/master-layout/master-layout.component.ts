import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, FooterComponent, CookiesCheckComponent, TopHeaderComponent } from '@shared/components';
import { isLive } from '@app/core/utils/config';
import { GlobalsService } from '@app/core';
import { SupportButtonsComponent } from 'livechat-assistant'
import { UserAuthHeaderComponent } from "../../ui/user-auth-header/user-auth-header.component";

@Component({
  selector: 'app-master-layout',
  imports: [
    HeaderComponent, FooterComponent,
    SupportButtonsComponent, RouterOutlet,
    CookiesCheckComponent,
    TopHeaderComponent,
    UserAuthHeaderComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css'
})
export class MasterLayoutComponent {
  readonly isLive: boolean = isLive
  private readonly globals: GlobalsService = inject(GlobalsService);

  get width(): string {
    return this.globals.widthClass
  }

  get activeTextColor(): string {
    return this.globals.activeTextColor
  }

  get activeColor(): string {
    return this.globals.activeColor
  }
}

