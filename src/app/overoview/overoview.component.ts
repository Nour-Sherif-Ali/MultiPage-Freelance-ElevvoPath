import { Component, OnInit } from '@angular/core';
import { RecentActivityComponent } from '../recentactivity/recentactivity.component';
import { ChartComponent } from '../chart/chart.component';
import { SummaryCardComponent } from '../summary-card/summary-card.component';

@Component({
  selector: 'app-overview',
  imports: [RecentActivityComponent , ChartComponent, SummaryCardComponent],
  templateUrl: './overoview.component.html',
  styleUrls: ['./overoview.component.css']
})
export class OverviewComponent implements OnInit {
  summaryCards = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+12.5%',
      isPositive: true,
      iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      iconClass: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Monthly Earnings',
      value: '$12,450',
      change: '+8.2%',
      isPositive: true,
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
      iconClass: 'bg-green-100 text-green-600'
    },
    {
      title: 'Tasks Due',
      value: '7',
      change: '-2.1%',
      isPositive: false,
      iconPath: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      iconClass: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Active Clients',
      value: '12',
      change: '+3.1%',
      isPositive: true,
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
      iconClass: 'bg-purple-100 text-purple-600'
    }
  ];

  earningsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earnings',
        data: [8500, 9200, 7800, 11400, 10200, 12450],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      }
    ]
  };

  projectStatusChartData = {
    labels: ['Completed', 'In Progress', 'Pending', 'On Hold'],
    datasets: [
      {
        data: [12, 8, 3, 1],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(249, 115, 22)',
          'rgb(239, 68, 68)'
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }
    ]
  };

  ngOnInit(): void {}
}