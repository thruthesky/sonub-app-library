import { Component, OnInit, Input } from '@angular/core';
import { SideMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() contentId = '';
  @Input() menus: SideMenu[] = [
    {
      title: 'No menu set',
      url: '/',
      icon: 'close'
    }
  ];
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  onClick( menu: SideMenu) {
    // routerLink="{{ menu.url }}"
    if ( ! menu.close ) {
      this.router.navigateByUrl( menu.url );
    }
  }

}

