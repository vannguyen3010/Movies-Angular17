import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;

  @Input({required:true}) userImg: string = '';
  navList = ["Home","TV Shows", "New & Popular", "My List", "Browse by Language"]
}
