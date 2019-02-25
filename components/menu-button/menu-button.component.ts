import { Component, OnInit, Input } from '@angular/core';
import { ToolbarMenu } from 'sonub-app-library/sonub-app-library-interfaces';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SonubAppLibraryService } from 'sonub-app-library/services/sonub-app-library.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Input() menu: ToolbarMenu;
  constructor(
    private router: Router,
    private menuController: MenuController,
    public s: SonubAppLibraryService
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


