import { Component } from '@angular/core';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefautLoginLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
