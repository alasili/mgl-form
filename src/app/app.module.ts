import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';


import {OrhDemo} from './app.component';
import {NgxOrhonMglComponentModule} from "ngx-orhon-mgl-component";


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ScrollingModule,
        DragDropModule,
        NgxOrhonMglComponentModule
    ],
    declarations: [OrhDemo],
    bootstrap: [OrhDemo],
})
export class AppModule {
}
