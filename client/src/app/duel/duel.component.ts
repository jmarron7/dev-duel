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
  winnerId: string = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  calculateWinner(user1: User | null, user2: User | null): string {
    let user1Score = 0;
    let user2Score = 0;
    
    if (user1 === null || user2 === null) {
      return ''
    }

    for (const user of [user1, user2]) {
      const userFields = Object.values(user);
  
      for (const field of userFields) {
        if (field !== null && field !== '') {
          if (typeof field === 'number') {
            if (user === user1) {
              user1Score += field;
            } else {
              user2Score += field;
            }
          } else {
            if (user === user1) {
              user1Score++;
            } else {
              user2Score++;
            }
          }
        }
      }
    }
  
    if (user1Score > user2Score) {
      return 'user1';
    } else if (user2Score > user1Score) {
      return 'user2';
    } else {
      return 'tie';
    }
  }

  async handleWinner() {
    this.winnerId = this.calculateWinner(this.user1Data, this.user2Data)
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
