export default interface User {
    username: string,
    name?: string,
    location?: string,
    bio?: string,
    avatar_url: string,
    titles: string[],
    favorite_language: string,
    public_repos: number,
    total_stars: number,
    followers: number,
    following: number,
}