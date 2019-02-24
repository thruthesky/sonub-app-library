import { Component, OnInit, Input } from '@angular/core';
import { ToolbarMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Input() menu: ToolbarMenu;
  constructor(
    private router: Router,
    private menuController: MenuController
  ) { }

  ngOnInit() {
  }


  onClick() {
    // console.log('menu click on', this.menu);
    if ( this.menu.openSideMenu ) {
      this.menuController.open();
    } else {
      this.router.navigateByUrl( this.menu.url );
    }
  }
}


