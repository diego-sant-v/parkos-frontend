import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Menus } from '../../models/menus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menusList: Array<Menus> = [];
  activeMenu: string = '';
  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.generateMenusList();
  }

  navigateMenu(menu: Menus) {
    this.activeMenu = menu.name;
    this.router.navigate([menu.pathUrl]);
  }

  generateMenusList() {
    this.menusList = [
      {
        badge: "Ao vivo",
        name: "Dashboard",
        icon: "layout-dashboard",
        pathUrl: "/dashboard"
      },

      {
        badge: "1.204",
        name: "Veículos",
        icon: "plus",
        pathUrl: "/vehicle"
      },

      {
        badge: "",
        name: "Cadastrar Veículo",
        icon: "plus",
        pathUrl: "/add-vehicle"
      }
    ];
  }
}
