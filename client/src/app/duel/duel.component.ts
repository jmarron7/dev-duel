import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import User from '../models/User';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  showCards: boolean = false
  userData: User[] | null = null
  user1Data: User | null = null
  user2Data: User | null = null

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  async handleWinner() {
    console.log("winner clicked")
  }

  async onSubmit() {
    try {
      this.showCards = false;
      this.userData = await this.userService.duelUsers(this.usernameOne, this.usernameTwo);
      this.user1Data = this.userData[0]
      this.user2Data = this.userData[1]
      this.showCards = true;
    } catch (error) {
      this.showCards = false;
      console.error(error)
    }
  }
}
