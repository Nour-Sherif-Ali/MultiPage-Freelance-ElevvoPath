import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() type: ChartType = 'bar';
  @Input() data: any;
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;
  selectedPeriod = '7D';
  periods = ['7D', '1M', '3M', '1Y'];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
          },
        },
        scales: this.type === 'bar' ? {
          y: {
            beginAtZero: true,
            grid: {
              color: '#f3f4f6',
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        } : undefined,
      },
    };

    this.chart = new Chart(ctx, config);
  }
}