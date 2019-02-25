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
      title: { en: 'Home' },
      icon: 'home',
      url: '/'
    },
    {
      title: { en: 'Gallery' },
      icon: 'photos',
      url: '/'
    },
    {
      title: { en: 'Contact', ko: '연락처' },
      icon: 'contact',
      url: '/'
    },
    {
      title: { en: 'Help', ko: '도움말' },
      icon: 'help',
      url: '/'
    },
    {
      title: { en: 'Mneu', ko: '메뉴' },
      icon: 'menu',
      url: '/',
      openSideMenu: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}


