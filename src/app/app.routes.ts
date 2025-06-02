import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { EventList } from './components/events/event-list/event-list';
import { EventDetails } from './components/events/event-details/event-details';
import { About } from './components/about/about';
import { Dashboard } from './components/admin/dashboard/dashboard';
import { UserManagement } from './components/admin/user-management/user-management';
import { EventManagement } from './components/admin/event-management/event-management';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventList },
  { path: 'events/:id', component: EventDetails },
  { path: 'about', component: About },
  { 
    path: 'admin', 
    children: [
      { path: '', component: Dashboard },
      { path: 'users', component: UserManagement },
      { path: 'events', component: EventManagement }
    ]
  },
  { path: '**', redirectTo: '' }
];
