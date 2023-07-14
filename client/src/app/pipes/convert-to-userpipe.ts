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
      total_stars: response['total-stars'],
      followers: response.followers,
      following: response.following
    };
  }
}
