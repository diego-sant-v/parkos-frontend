import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Menus } from '../../model/menus.model';
import { ParkOsService } from '../../service/parkos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  countAllParked: Number = 0;

  constructor(private parkosService: ParkOsService){}

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
    this.countParked();
  }

  countParked(){
    this.parkosService.countParkedVehicles().subscribe(res => {
      this.countAllParked = res;
    })
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
        badge: this.countAllParked.toString(),
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