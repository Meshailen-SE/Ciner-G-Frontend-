import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
// import { EventBusService } from './shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  // private roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;
  title: any;

  constructor(private storageService: StorageService, private authService: AuthService) { }
  // constructor(private storageService: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.isLoggedIn = !!this.storageService.isLoggedIn();
    this.isLoggedIn = !!this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        // this.storageService.clean();
        // this.storageService['clean']();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
