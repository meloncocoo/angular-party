import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'header',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'eJoy';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
