import { Pipe, PipeTransform } from '@angular/core';
import User from '../models/User';


@Pipe({
  name: 'convertToUser'
})
export class ConvertToUserPipe implements PipeTransform {
  transform(response: any): User {
    return {
      username: response.username,
      name: response.name,
      location: response.location,
      bio: response.bio,
      avatar_url: response.avatar_url,
      titles: response.titles,
      favorite_language: response['favorite-language'],
      public_repos: response['public-repos'],
      perfect_repos: response['perfect-repos'],
      total_stars: response['total-stars'],
      highest_starred: response['highest-starred'],
      followers: response.followers,
      following: response.following
    };
  }
}
