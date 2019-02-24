import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        IonicModule
    ],
    exports: [
        SideMenuComponent
    ],
    declarations: [
        SideMenuComponent
    ],
    providers: [],
})
export class SonubAppLibraryModule { }

