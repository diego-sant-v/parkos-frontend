import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Menus } from '../../models/menus.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

  menusList: Menus[] = [];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onMenuClick() {
    this.menuOpen = false;
  }

  ngOnInit(): void {
    this.generateMenusList();
  }

  generateMenusList() {
    this.menusList = [
      {
        badge: "Ao vivo",
        name: "Dashboard",
        icon: "layout-dashboard",
        pathUrl: "dashboard"
      },
      {
        badge: "1.204",
        name: "Veículos",
        icon: "car",
        pathUrl: "vehicle"
      },
      {
        badge: "",
        name: "Cadastrar Veículo",
        icon: "plus",
        pathUrl: "add-vehicle"
      }
    ];
  }
}