export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    runtime: number;
    vote_average: number;
    genres: Genre[];
    original_language: string;
    tagline: string;
    production_companies: { name: string }[];
    production_countries: { name: string }[];
    revenue: number;
    budget: number;
    status: string;
    vote_count: number;
    image: string;
    rating: number;
  }
  
  export interface Cast {
    name: string;
    character: string;
    profile_path: string;
  }
  
  export interface Video {
    key: string;
    type: string;
    site: string;
    name: string;
  }