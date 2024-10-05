// types.ts

export interface GithubUserType {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string; // Empty string if not set
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: "User" | "Organization"; // Restrict to "User" and "Organization"
    site_admin: boolean;
    name: string | null; // Can be null
    company: string | null; // Can be null
    blog: string; // Can be empty
    location: string | null; // Can be null
    email: string | null; // Can be null
    hireable: boolean | null; // Can be null
    bio: string | null; // Can be null
    twitter_username: string | null; // Can be null
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string; // ISO 8601 format date string
    updated_at: string; // ISO 8601 format date string
  }
  