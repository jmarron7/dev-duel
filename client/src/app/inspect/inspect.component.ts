import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import User from '../models/User';
import { ConvertToUserPipe } from '../pipes/convert-to-userpipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {

  username: string = ""
  showCard: boolean = false
  userData: User | null = null
  errorFound: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    try {
      this.errorFound = false;
      this.showCard = false;
      this.userData = await this.userService.inspectUser(this.username);
      this.showCard = true;
      console.log(this.userData.avatar_url)
    } catch (error) {
      this.showCard = false;
      this.errorFound = true;
    }
  }



}
