import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullLoaderComponent } from "./shared/ui";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FullLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = '';
  showsplash: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showsplash = false;
    }, 2000);
  }
}