import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
}
