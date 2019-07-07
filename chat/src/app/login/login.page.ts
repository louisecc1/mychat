import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService) { }
  login() {                    
    this.authService.login();
      }

  ngOnInit() {
  }

}
