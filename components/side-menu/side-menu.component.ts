import { Component, OnInit, Input } from '@angular/core';
import { SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { Router } from '@angular/router';
import { SonubAppLibraryService } from 'sonub-app-library/services/sonub-app-library.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() contentId = '';
  @Input() menus: SideMenu[] = [
    {
      title: { en: 'No menu set', ko: '' },
      url: '/',
      icon: 'close'
    }
  ];
  constructor(
    private router: Router,
    public s: SonubAppLibraryService
  ) {
  }

  ngOnInit() {
  }

  onClick(menu: SideMenu) {
    if (menu.close) {
    } else if (menu.openWindow) {
      window.open(menu.url, '_blank');
    } else {
      this.router.navigateByUrl(menu.url);
    }

  }
}

