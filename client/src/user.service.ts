import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConvertToUserPipe } from './app/pipes/convert-to-userpipe';
import User from './app/models/User';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private convertToUserPipe: ConvertToUserPipe) { }

  async inspectUser(username = 'andrew'): Promise<User> {
    let response = await this.http.get(inspectUserUrl + username).toPromise()
    return this.convertToUserPipe.transform(response);
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew'): Promise<User[]> {
    let response: any = await this.http.get(duelUsersUrl + `username=${user1}&username=${user2}`).toPromise();
    return [this.convertToUserPipe.transform(response[0]), this.convertToUserPipe.transform(response[1])];
  }

}
