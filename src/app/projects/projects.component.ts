import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Project {
  id: number;
  name: string;
  description: string;
  client: string;
  budget: string;
  deadline: string;
  status: string;
  progress: number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  activeFilter = 'All';
  statusFilters = ['All', 'In Progress', 'Completed', 'Pending', 'On Hold'];

  projects: Project[] = [
    {
      id: 1,
      name: 'E-commerce Website',
      description: 'Modern online store with React and Node.js',
      client: 'Tech Solutions Inc.',
      budget: '$8,500',
      deadline: 'Dec 15, 2024',
      status: 'In Progress',
      progress: 65
    },
    {
      id: 2,
      name: 'Mobile App Design',
      description: 'iOS and Android app UI/UX design',
      client: 'Startup Co.',
      budget: '$5,200',
      deadline: 'Nov 30, 2024',
      status: 'Completed',
      progress: 100
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Personal portfolio for photographer',
      client: 'Sarah Johnson',
      budget: '$2,800',
      deadline: 'Jan 10, 2025',
      status: 'Pending',
      progress: 20
    },
    {
      id: 4,
      name: 'Dashboard Analytics',
      description: 'Business intelligence dashboard',
      client: 'Data Corp',
      budget: '$12,000',
      deadline: 'Feb 28, 2025',
      status: 'In Progress',
      progress: 40
    },
    {
      id: 5,
      name: 'Landing Page',
      description: 'Product launch landing page',
      client: 'Marketing Agency',
      budget: '$1,800',
      deadline: 'Dec 1, 2024',
      status: 'On Hold',
      progress: 10
    },
    {
      id: 6,
      name: 'API Development',
      description: 'RESTful API for mobile application',
      client: 'Mobile Solutions',
      budget: '$6,500',
      deadline: 'Jan 25, 2025',
      status: 'In Progress',
      progress: 75
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.status === this.activeFilter);
  }

  ngOnInit(): void {}

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'On Hold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}