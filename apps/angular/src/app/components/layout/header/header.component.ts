import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {IsActiveMatchOptions, RouterLink, RouterLinkActive} from '@angular/router';
import {routes} from '../../../app.routes';
import {MoonIconComponent} from '../../icons/moon-icon/moon-icon.component';
import {SunIconComponent} from '../../icons/sun-icon/sun-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterLink, RouterLinkActive, MoonIconComponent, SunIconComponent],
})
export class HeaderComponent implements OnInit {
  protected isMobileNavOpen = false;
  protected isDarkMode = localStorage.getItem('data-mode') ? true : false;
  protected appRoutes = routes.filter(route => route.title);

  protected routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'exact',
  };

  public ngOnInit(): void {
    this.updateDarkMode();
  }

  protected toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  protected toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkMode();
  }

  private updateDarkMode(): void {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-mode', 'dark');
      localStorage.setItem('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
      localStorage.removeItem('data-mode');
    }
  }
}
