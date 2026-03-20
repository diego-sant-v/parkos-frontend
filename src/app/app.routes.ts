import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './components/home/home';
import { Vehicle } from './components/vehicle/vehicle';
import { AddVehicle } from './components/add-vehicle/add-vehicle';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'home', component: Home },
      { path: 'dashboard', component: Dashboard },
      { path: 'vehicle', component: Vehicle },
      { path: 'add-vehicle', component: AddVehicle },
    ]
  }
];