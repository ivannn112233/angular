import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CabeceraComponent } from './sitio/cabecera/cabecera.component';
import { BodyComponent } from './sitio/body/body.component';
import { FoonterComponent } from './sitio/foonter/foonter.component';

export const routes: Routes = [
    { 
        path: 'cabecera', component: CabeceraComponent 

    }
    ,
    {
        path: 'body', component: BodyComponent
    }
    ,
    {
        path:'foonter',component: FoonterComponent
    }
];
