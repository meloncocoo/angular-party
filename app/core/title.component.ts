import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  title = '新场景';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
