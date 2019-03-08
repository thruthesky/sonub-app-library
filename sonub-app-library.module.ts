import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LibraryService } from '../../src/app/services/library.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        IonicModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        LibraryService
    ],
})
export class SonubAppLibraryModule { }



