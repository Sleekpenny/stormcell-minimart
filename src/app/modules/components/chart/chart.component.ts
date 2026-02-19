import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from "../../../shared/ui/bar-chart/bar-chart.component";

@Component({
  selector: 'app-chart',
  imports: [BarChartComponent],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  chartOptions = {
    series: [
      {
        name: 'Revenue',
        data: [220, 390, 270, 330, 85, 165, 290, 215, 365, 270, 220, 315]
      }
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '20%',
        distributed: false,
        colors: {
          ranges: [{
            from: 0,
            to: 1000,
            color: '#e11d48',// red/pink color
          }]
        }
      }
    },
    colors: ['#e11d48'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      markers: {
        width: 8,
        height: 8,
        radius: 12
      },
      labels: {
        colors: ['#64748b']
      }
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#64748b',
          fontSize: '15px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          colors: '#64748b',
          fontSize: '15px'
        }
      }
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (value: number) => `$${value}`
      }
    }
  };

  // Multiple series data
seriesData = {
  revenue: [220, 390, 270, 330, 85, 165, 290, 215, 365, 270, 220, 315],
  stores: [180, 240, 200, 280, 120, 140, 230, 190, 310, 240, 200, 270],
  referrals: [150, 200, 180, 240, 100, 120, 200, 160, 280, 210, 180, 240],
  users: [300, 350, 320, 380, 200, 250, 340, 290, 400, 330, 300, 360]
};

activeTab = 'revenue';

// Update chart when tab changes
changeTab(tab: string) {
  this.activeTab = tab;
  this.chartOptions = {
    ...this.chartOptions,
    series: [{
      name: tab.charAt(0).toUpperCase() + tab.slice(1),
      data: this.seriesData[tab as keyof typeof this.seriesData]
    }]
  };
}

}
