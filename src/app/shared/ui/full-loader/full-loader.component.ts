import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-full-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './full-loader.component.html',
  styleUrl: './full-loader.component.scss'
})
export class FullLoaderComponent {

}
