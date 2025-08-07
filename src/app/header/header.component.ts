import { Component, EventEmitter, Output } from '@angular/core';
import { NotificationDropdownComponent } from "../notification-dropdown/notification-dropdown.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NotificationDropdownComponent]
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}