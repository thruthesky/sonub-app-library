# sonub-app-library

Sonub App Library

## How to use

### Footer Toolbar

* Menus should be added upto 5 only. If there is more than five, then it may look urgly.

#### Opennning sidemenu

* set `openSideMenu` to true to open the menu.

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
            url: '/'
        },
        {
            title: '갤러리',
            icon: 'photos',
            url: '/'
        },
        {
            title: '게시판',
            icon: 'chatboxes',
            url: '/'
        },
        {
            title: '오시는길',
            icon: 'map',
            url: '/'
        },
        {
            title: '메뉴',
            icon: 'menu',
            url: '/',
            showSideMenu: true
        }
    ];
    constructor() { }
}
````

* Use it on component

```` html
<ion-footer class="app-footer">
  <app-footer-toolbar [menus]=" a.menus "></app-footer-toolbar>
</ion-footer>
````

* Declare sidemenu
