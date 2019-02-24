# sonub-app-library

Sonub App Library

## Resources

* See [Simple Sonub App](https://github.com/thruthesky/simple-sonub-app) for example.

## Installation

* Simple add as git submodule.

## How to use

### Footer Toolbar

* Menus should be added upto 5 only. If there is more than five, then it may look urgly.

#### Opennning sidemenu

* set `showSideMenu` to true to open the menu.

#### Example of Menu

* Declare menus on app service.

```` ts
import { Injectable } from '@angular/core';
import { ToolbarMenu } from 'sonub-app-library/sonub-app-library-interfaces';

@Injectable()
export class AppService {
    menus: ToolbarMenu[] = [
        {
            title: '홈',
            icon: 'home',
            url: '/home'
        },
        {
            title: '갤러리',
            icon: 'photos',
            url: '/gallery'
        },
        {
            title: '게시판',
            icon: 'chatboxes',
            url: '/fourm'
        },
        {
            title: '오시는길',
            icon: 'map',
            url: '/map'
        },
        {
            title: '메뉴',
            icon: 'menu',
            openSideMenu: true
        }
    ];
    constructor() { }
}
````

* Use it on component.

* `<app-footer-toolbar>` should be used in app component.

```` html
<ion-footer class="app-footer">
  <app-footer-toolbar [menus]=" a.menus "></app-footer-toolbar>
</ion-footer>
````

#### Declare sidemenu.

* You can add side menu settings on app service.

* And add `<app-side-menu>` on app component.
