import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  id: number;
  type: 'project' | 'payment' | 'task' | 'client';
  title: string;
  description: string;
  time: string;
}

@Component({
  selector: 'app-recent-activity',
  imports: [CommonModule],
  templateUrl: './recentactivity.component.html',
  styleUrls: ['./recentactivity.component.css']
})
export class RecentActivityComponent implements OnInit {
  activities: Activity[] = [
    {
      id: 1,
      type: 'project',
      title: 'Project Updated',
      description: 'E-commerce website project status changed to "In Progress"',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      description: 'Received $2,500 payment for Portfolio Website',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'task',
      title: 'Task Completed',
      description: 'Completed wireframe design for mobile app',
      time: '2 days ago'
    },
    {
      id: 4,
      type: 'client',
      title: 'New Client Message',
      description: 'Sarah Johnson sent you a message about the website revisions',
      time: '3 days ago'
    },
    {
      id: 5,
      type: 'project',
      title: 'Project Delivered',
      description: 'Successfully delivered the React Dashboard project',
      time: '1 week ago'
    }
  ];

  ngOnInit(): void {}

  getActivityIconClass(type: string): string {
    switch (type) {
      case 'project':
        return 'bg-blue-100 text-blue-600';
      case 'payment':
        return 'bg-green-100 text-green-600';
      case 'task':
        return 'bg-purple-100 text-purple-600';
      case 'client':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  getActivityIconPath(type: string): string {
    switch (type) {
      case 'project':
        return 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10';
      case 'payment':
        return 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1';
      case 'task':
        return 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4';
      case 'client':
        return 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z';
      default:
        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }
}