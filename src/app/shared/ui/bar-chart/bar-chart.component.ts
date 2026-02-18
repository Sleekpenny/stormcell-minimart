import { afterNextRender, Component, ElementRef, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  imports: [  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent {
  @ViewChild('chart', { static: true }) chartElement!: ElementRef;
  @Input() options: any;
  
  private chart?: ApexCharts;

  constructor() {
    afterNextRender(() => {
      if (this.options) {
        this.chart = new ApexCharts(this.chartElement.nativeElement, this.options);
        this.chart.render();
      }
    });
  }  

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
