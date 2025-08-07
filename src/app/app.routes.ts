
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overoview/overoview.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent , title: 'Overview'},
  { path: 'projects', component: ProjectsComponent , title: 'Projects'},
  { path: 'profile', component: ProfileComponent,title: 'Profile' }
];
