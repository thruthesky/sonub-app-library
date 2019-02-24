import { Component, OnInit, Input } from '@angular/core';
import { ToolbarMenu } from 'sonub-app-library/sonub-app-library-interfaces';


@Component({
  selector: 'app-footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  styleUrls: ['./footer-toolbar.component.scss']
})
export class FooterToolbarComponent implements OnInit {


  @Input() menus: ToolbarMenu[] = [
    {
      title: 'Home',
      icon: 'home',
      url: '/'
    },
    {
      title: 'Gallery',
      icon: 'photos',
      url: '/'
    },
    {
      title: 'Contact',
      icon: 'contact',
      url: '/'
    },
    {
      title: 'Help',
      icon: 'help',
      url: '/'
    },
    {
      title: 'Mneu',
      icon: 'menu',
      url: '/',
      showSideMenu: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}


