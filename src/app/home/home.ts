import { Component } from '@angular/core';
import { Sidebar } from "../layout/sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
