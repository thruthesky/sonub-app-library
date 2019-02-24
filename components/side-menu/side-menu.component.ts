import { Component, OnInit, Input } from '@angular/core';

interface AppMenu {
  name: string;
  url: string;
  icon: string;
}
type AppMenus = AppMenu[];

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() contentId = '';
  @Input() menus: AppMenus = [
    {
      name: 'No menu set',
      url: '/',
      icon: 'close'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

