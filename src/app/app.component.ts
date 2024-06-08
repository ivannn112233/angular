import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './sitio/cabecera/cabecera.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './sitio/body/body.component';
import { FoonterComponent } from './sitio/foonter/foonter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CabeceraComponent,BodyComponent,FoonterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proy6';
}
