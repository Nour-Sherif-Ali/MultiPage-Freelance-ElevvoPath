import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  type: 'project' | 'payment' | 'task';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-notification-dropdown',
  imports: [CommonModule],
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.css']
})
export class NotificationDropdownComponent {
  isOpen = false;
  notifications: Notification[] = [
    {
      id: 1,
      type: 'project',
      title: 'New Project Assigned',
      message: 'E-commerce website project has been assigned to you.',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'You received $2,500 for the Portfolio Website project.',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'task',
      title: 'Task Completed',
      message: 'Mobile app wireframes have been marked as complete.',
      time: '3 hours ago',
      read: true
    }
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  getNotificationIconClass(type: string): string {
    switch (type) {
      case 'project':
        return 'bg-blue-100 text-blue-600';
      case 'payment':
        return 'bg-green-100 text-green-600';
      case 'task':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isOpen = false;
    }
  }
}