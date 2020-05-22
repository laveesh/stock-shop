import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-shop';
  constructor(
    private userService: UserService,
    private auth: AuthService,
    router: Router
  ) {
    auth.user$.subscribe(user => {
      if (!user) {
        return;
      }

      userService.save(user);

      const returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) {
        return;
      }

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
