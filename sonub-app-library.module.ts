import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { FooterToolbarComponent } from './components/footer-toolbar/footer-toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        IonicModule
    ],
    exports: [
        SideMenuComponent,
        MenuButtonComponent,
        FooterToolbarComponent
    ],
    declarations: [
        SideMenuComponent,
        MenuButtonComponent,
        FooterToolbarComponent
    ],
    providers: [],
})
export class SonubAppLibraryModule { }



