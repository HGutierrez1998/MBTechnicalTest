import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { FootersComponent } from "../shared/footers/footers.component";
import HomeComponent from '../pages/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,MenuComponent, FootersComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

}
