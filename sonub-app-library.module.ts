import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { FooterToolbarComponent } from './components/footer-toolbar/footer-toolbar.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { SonubAppLibraryService } from './services/sonub-app-library.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        IonicModule
    ],
    exports: [
        SideMenuComponent,
        MenuButtonComponent,
        FooterToolbarComponent,
        HeaderToolbarComponent
    ],
    declarations: [
        SideMenuComponent,
        MenuButtonComponent,
        FooterToolbarComponent,
        HeaderToolbarComponent
    ],
    providers: [
        SonubAppLibraryService
    ],
})
export class SonubAppLibraryModule { }



