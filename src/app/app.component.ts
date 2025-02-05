import { Component, type OnInit } from '@angular/core';
import type { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: IUser[] = []
  userSelected: IUser = {} as IUser
  showUserDetails: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList
    }, 1000)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user
    this.showUserDetails = true
  }
}
